'use client';

import React, { useRef, useEffect, useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Script from 'next/script';
import { sendEmail } from '@/app/actions/send-email';

function SubmitButton({ turnstileReady }: { turnstileReady: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary"
      style={{ width: '100%', padding: '1rem' }}
      disabled={pending || !turnstileReady}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, null);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [renderTimestamp] = useState(() => btoa(Date.now().toString()));

  // Render Turnstile widget once the script has loaded
  const handleTurnstileLoad = () => {
    if (turnstileRef.current && window.turnstile) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
        callback: (token: string) => {
          setTurnstileToken(token);
          setTurnstileReady(true);
        },
        'expired-callback': () => {
          setTurnstileToken('');
          setTurnstileReady(false);
        },
        'error-callback': () => {
          setTurnstileToken('');
          setTurnstileReady(false);
        },
        theme: 'dark',
        appearance: 'interaction-only',
      });
    }
  };

  // Reset Turnstile after successful submission or error
  useEffect(() => {
    if (state?.success && window.turnstile) {
      window.turnstile.reset();
      setTurnstileToken('');
      setTurnstileReady(false);
    }
  }, [state]);

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

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit"
        strategy="afterInteractive"
        onReady={handleTurnstileLoad}
      />
      <form ref={formRef} action={formAction} className="contact-form">
        {state?.error && (
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', marginBottom: '1rem' }}>
            {state.error}
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

        <SubmitButton turnstileReady={turnstileReady} />
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
