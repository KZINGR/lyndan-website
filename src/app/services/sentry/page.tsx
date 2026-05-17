import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sentry - Contractor Access System',
  description: 'A specialized contractor sign-in and management system built for commercial and body corporate environments.',
};

export default function SentryServices() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Sentry Contractor Building Access</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            A specialized contractor sign-in and management system built for commercial and body corporate environments.
          </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            {/* Core Features */}
            <div className="system-card card-sentry" style={{ height: 'auto', gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>Core Software Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Seamless Contractor Sign-In</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Quick, QR-code based digital sign-in for contractors upon arriving at the site, ensuring accurate tracking without the hassle of paper logs.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Live Admin Dashboard</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Gain full visibility with an online dashboard that allows building and facility managers to view real-time contractor activity across their sites.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Health & Safety Compliance</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Ensure all contractors review and acknowledge site-specific health and safety hazards, as well as emergency procedures, before being granted entry.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Automated Reporting</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Generate detailed access logs for robust security audits, straightforward invoicing validation, and comprehensive compliance tracking.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Secure your premises today</h2>
          <p className="subtitle" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book a demo to see how the Sentry system can streamline contractor management and improve site safety.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
            Book a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
