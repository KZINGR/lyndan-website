'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';
import { checkForSpam } from './spam-filter';
import { checkRateLimit } from './rate-limiter';

/**
 * Verify a Cloudflare Turnstile token server-side.
 */
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured');
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
        remoteip: ip,
      }),
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
}

export async function sendEmail(prevState: unknown, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    const honeypot = formData.get('website') as string;
    const renderTimestamp = formData.get('_render_ts') as string;
    const turnstileToken = formData.get('cf-turnstile-response') as string;

    // --- Basic field validation ---
    if (!name || !email || !subject || !message) {
      return { error: 'Please fill out all fields.' };
    }

    // --- Layer 1: Cloudflare Turnstile ---
    if (!turnstileToken) {
      return { error: 'Please complete the security verification.' };
    }

    const headersList = await headers();
    const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
      || headersList.get('x-real-ip')
      || '127.0.0.1';

    const turnstileValid = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileValid) {
      return { error: 'Security verification failed. Please refresh and try again.' };
    }

    // --- Layer 2: Honeypot ---
    // If honeypot field is filled, a bot submitted the form.
    // Return fake success so bots think they succeeded.
    if (honeypot) {
      console.log(`[SPAM] Honeypot triggered by IP: ${ip}`);
      return { success: true };
    }

    // --- Layer 3: Time-based validation ---
    if (renderTimestamp) {
      try {
        const renderTime = parseInt(atob(renderTimestamp), 10);
        const elapsed = Date.now() - renderTime;

        // Submitted too fast (< 3 seconds) — likely a bot
        if (elapsed < 3000) {
          console.log(`[SPAM] Too-fast submission (${elapsed}ms) from IP: ${ip}`);
          return { success: true }; // Silent rejection
        }

        // Form is too old (> 30 minutes) — possibly a replay
        if (elapsed > 30 * 60 * 1000) {
          return { error: 'Your session has expired. Please refresh the page and try again.' };
        }
      } catch {
        // Invalid timestamp — suspicious
        console.log(`[SPAM] Invalid timestamp from IP: ${ip}`);
        return { success: true }; // Silent rejection
      }
    }

    // --- Layer 4: Content-based spam filtering ---
    const spamCheck = checkForSpam(name, email, subject, message);
    if (spamCheck.isSpam) {
      console.log(`[SPAM] Content filter triggered (score: ${spamCheck.score}) from IP: ${ip}. Reasons: ${spamCheck.reasons.join(', ')}`);
      return { success: true }; // Silent rejection
    }

    // --- Layer 5: Rate limiting ---
    const rateCheck = checkRateLimit(ip);
    if (!rateCheck.allowed) {
      const minutes = Math.ceil((rateCheck.retryAfterSeconds || 3600) / 60);
      return { error: `Too many submissions. Please try again in ${minutes} minute${minutes !== 1 ? 's' : ''}.` };
    }

    // --- All checks passed — send the email ---
    if (!process.env.RESEND_API_KEY) {
      return { error: 'Email service is not configured.' };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Contact Form <office@lyndan.co.nz>',
      to: ['office@lyndan.co.nz'],
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { error: 'An unexpected error occurred.' };
  }
}
