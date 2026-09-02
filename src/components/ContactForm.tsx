'use client';

import React, { useRef, useEffect, useState, useActionState, useCallback } from 'react';
import { useFormStatus } from 'react-dom';
import Script from 'next/script';
import { sendEmail } from '@/app/actions/send-email';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileStatus = 'loading' | 'ready' | 'error';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary"
      style={{ width: '100%', padding: '1rem' }}
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, null);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>(
    SITE_KEY ? 'loading' : 'error'
  );
  const [clientError, setClientError] = useState<string>('');
  const [renderTimestamp] = useState(() => btoa(Date.now().toString()));

  // Render the Turnstile widget. Next's <Script onReady> fires on first load and
  // again on every remount (e.g. navigating back to /contact), so tear down any
  // previous widget first rather than rendering twice into the same container.
  const renderTurnstile = useCallback(() => {
    if (!turnstileRef.current || !window.turnstile) return;

    if (!SITE_KEY) {
      console.error('NEXT_PUBLIC_TURNSTILE_SITE_KEY was not set at build time');
      setTurnstileStatus('error');
      return;
    }

    if (widgetIdRef.current !== null) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        // Widget was already gone — nothing to clean up.
      }
      widgetIdRef.current = null;
    }

    try {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileStatus('ready');
          setClientError('');
        },
        'expired-callback': () => {
          setTurnstileToken('');
          setTurnstileStatus('loading');
        },
        'error-callback': () => {
          setTurnstileToken('');
          setTurnstileStatus('error');
        },
        theme: 'dark',
        appearance: 'interaction-only',
      });
    } catch (error) {
      console.error('Turnstile render failed:', error);
      setTurnstileStatus('error');
    }
  }, []);

  // Covers the case where the script had already loaded before this component
  // mounted, so onReady is not guaranteed to run after window.turnstile exists.
  // Deferred by a tick so onReady wins the race when it is about to fire anyway.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.turnstile && widgetIdRef.current === null) renderTurnstile();
    }, 0);
    return () => clearTimeout(timer);
  }, [renderTurnstile]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Widget was already gone — nothing to clean up.
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  // Reset Turnstile after a submission so the next attempt gets a fresh token.
  useEffect(() => {
    if (state && widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      setTurnstileToken('');
      setTurnstileStatus('loading');
    }
  }, [state]);

  // Guard the submit so a missing token shows a message instead of doing nothing.
  // The server verifies the token again regardless.
  const handleAction = (formData: FormData) => {
    if (!turnstileToken) {
      setClientError(
        turnstileStatus === 'error'
          ? 'The security check could not load. Please refresh the page, or email us directly at office@lyndan.co.nz.'
          : 'Please complete the security check above, then send again.'
      );
      return;
    }
    setClientError('');
    formAction(formData);
  };

  if (state?.success) {
    return (
      <div style={{ padding: '2rem', background: 'var(--bg-dark)', borderRadius: '12px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#16a34a' }}>Message Sent!</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Thank you for reaching out. We will get back to you shortly.</p>
        <button
          className="btn btn-outline"
          onClick={() => {
            window.location.reload();
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const errorMessage = clientError || state?.error;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderTurnstile}
        onError={() => setTurnstileStatus('error')}
      />
      <form ref={formRef} action={handleAction} className="contact-form">
        {errorMessage && (
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', marginBottom: '1rem' }}>
            {errorMessage}
          </div>
        )}

        {/* Honeypot field — hidden from humans, bots auto-fill it */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        {/* Timestamp for time-based validation */}
        <input type="hidden" name="_render_ts" value={renderTimestamp} />

        {/* Turnstile token */}
        <input type="hidden" name="cf-turnstile-response" value={turnstileToken} />

        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" id="subject" name="subject" className="form-input" placeholder="How can we help you?" required />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-input" rows={6} placeholder="Your message here..." required></textarea>
        </div>

        {/* Turnstile widget container */}
        <div ref={turnstileRef} style={{ marginBottom: '1rem' }}></div>

        <SubmitButton />
      </form>
    </>
  );
}

// Extend window type for Turnstile
declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}
