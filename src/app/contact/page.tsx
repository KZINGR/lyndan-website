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

          <div className="contact-layout">
            <div className="contact-details">
              <h3 className="details-title">Contact Information</h3>
              <p className="details-text">We'd love to hear from you. Please use our contact details or send us a message directly.</p>



              <a href="mailto:office@lyndan.co.nz" className="info-group">
                <div className="info-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="info-label">Email</h4>
                  <p className="info-value">office@lyndan.co.nz</p>
                </div>
              </a>


            </div>

            <div className="contact-divider"></div>

            <div className="contact-emailer">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
