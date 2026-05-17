'use server';

import { Resend } from 'resend';



export async function sendEmail(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
      return { error: 'Please fill out all fields.' };
    }

    if (!process.env.RESEND_API_KEY) {
      return { error: 'Resend API key is not configured.' };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      // If you haven't verified a domain in Resend, you must use onboarding@resend.dev
      from: 'Contact Form <onboarding@resend.dev>', 
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
