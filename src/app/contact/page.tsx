import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center">
            <h1 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
            <p className="subtitle" style={{ marginBottom: '3rem' }}>
              Have a question about our management systems or need support? Send us a message and our team will get back to you shortly.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
