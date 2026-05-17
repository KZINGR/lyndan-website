import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'BCMS - Lyndan Compliance',
  description: 'Streamline your building compliance with our cloud-based software designed for complete BWoF workflow management.',
};

export default function ComplianceServices() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Building Compliance Management System</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            Streamline your building compliance with our cloud-based software designed for complete BWoF workflow management and transparency.
          </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            
            {/* Core Features */}
            <div className="system-card card-compliance" style={{ height: 'auto', gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '2rem' }}>Core Software Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>End-to-End Workflow</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Manage the entire BWoF process from a centralized platform, effortlessly tracking inspections, identifying defects, and managing documentation in real-time.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Digital BWoF Book</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Replace traditional paper logbooks with a secure digital version accessible anywhere by councils, contractors, owners, and management entities.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Automated Reminders</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Never miss an inspection with automated scheduling and reliable alerts tailored for both IQPs and building owners.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Centralized Document Storage</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Securely store essential compliance forms such as Form 12s, Form 12As, compliance schedules, and historical records all in one accessible location.
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
          <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to modernize your compliance?</h2>
          <p className="subtitle" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Book a demo today to see how Lyndan Compliance can bring transparency and efficiency to your BWoF process.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
            Request a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
