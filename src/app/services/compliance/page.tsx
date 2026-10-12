import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'BCMS - Lyndan Compliance',
  description: 'Streamline your building compliance with our cloud-based software designed for complete BWoF workflow management.',
};

const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const features = [
  {
    title: 'End-to-End Workflow',
    text: 'Manage the entire BWoF process from a centralised platform, effortlessly tracking inspections, identifying defects, and managing documentation in real-time.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    title: 'Digital BWoF Book',
    text: 'Replace traditional paper logbooks with a secure digital version accessible anywhere by councils, contractors, owners, and management entities.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
        <path d="M4 19V5M9 8h6" />
      </svg>
    ),
  },
  {
    title: 'Automated Reminders',
    text: 'Never miss an inspection with automated scheduling and reliable alerts tailored for both IQPs and building owners.',
    icon: (
      <svg {...iconProps}>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    title: 'Centralised Document Storage',
    text: 'Securely store essential compliance forms such as Form 12s, Form 12As, compliance schedules, and historical records all in one accessible location.',
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </svg>
    ),
  },
];

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
            <div className="system-card card-compliance feature-card" style={{ height: 'auto', gridColumn: '1 / -1' }}>
              <h2 className="feature-heading">Core Software Features</h2>
              <div className="feature-grid">
                {features.map((f) => (
                  <div key={f.title} className="feature-item">
                    <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to modernise your compliance?</h2>
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
