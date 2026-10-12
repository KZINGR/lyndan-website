import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sentry - Contractor Access System',
  description: 'A specialized contractor sign-in and management system built for commercial and body corporate environments.',
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
    title: 'Seamless Contractor Sign\u2011In',
    text: 'Quick, QR-code based digital sign-in for contractors upon arriving at the site, ensuring accurate tracking without the hassle of paper logs.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z" />
        <path d="M14 14h3v3h-3zM20 14v1M14 20h1M18 18h3v3h-3z" />
      </svg>
    ),
  },
  {
    title: 'Live Admin Dashboard',
    text: 'Gain full visibility with an online dashboard that allows building and facility managers to view real-time contractor activity across their sites.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4M7 12l3-3 3 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Health & Safety Compliance',
    text: 'Ensure all contractors review and acknowledge site-specific health and safety hazards, as well as emergency procedures, before being granted entry.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Automated Reporting',
    text: 'Generate detailed access logs for robust security audits, straightforward invoicing validation, and comprehensive compliance tracking.',
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 17v-3M12 17v-5M15 17v-2" />
      </svg>
    ),
  },
];

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
            <div className="system-card card-sentry feature-card" style={{ height: 'auto', gridColumn: '1 / -1' }}>
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
