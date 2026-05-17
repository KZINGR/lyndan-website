'use client';

import React, { useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/actions/send-email';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, null);
  const formRef = useRef<HTMLFormElement>(null);

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
    <form ref={formRef} action={formAction} className="contact-form">
      {state?.error && (
        <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', marginBottom: '1rem' }}>
          {state.error}
        </div>
      )}
      
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

      <SubmitButton />
    </form>
  );
}
