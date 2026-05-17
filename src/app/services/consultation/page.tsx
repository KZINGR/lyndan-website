import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Consultation Services - Lyndan',
  description: 'Expert Building Compliance Consultation in New Zealand, including BWoF Management and Fire Evacuation Schemes.',
};

export default function ConsultationServices() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Expert Building Compliance Consultation</h1>
          <p className="subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem' }}>
            Navigating New Zealand's complex building and fire safety legislation to ensure your premises remain fully compliant, safe, and operational.
          </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

            {/* BWoF Management */}
            <div className="system-card" style={{ height: 'auto' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Building Warrant of Fitness (BWoF) Management</h2>

              <ul className="system-features" style={{ margin: 0 }}>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>End-to-End BWoF Issuing:</strong> Managing the entire BWoF process under the Building Act 2004, from IQP inspections to final council lodgement.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Documentation & Reporting:</strong> Ensuring all critical forms and compliance schedules are meticulously maintained.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Owner Support:</strong> Providing guidance and training for owners' monthly inspections to reduce costs and maintain proactive compliance.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Council Liaison:</strong> Acting as your representative with Territorial Authorities to resolve compliance issues swiftly.</span>
                </li>
              </ul>
            </div>

            {/* Fire Evacuation Schemes */}
            <div className="system-card" style={{ height: 'auto' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Fire Evacuation Schemes & Drills</h2>

              <ul className="system-features" style={{ margin: 0 }}>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Scheme Development:</strong> Surveying buildings and designing comprehensive fire evacuation schemes approved under the Fire and Emergency New Zealand Regulations 2018.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Trial Evacuations:</strong> Managing 6-monthly trial evacuations, taking the administrative burden off building owners.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Warden Training:</strong> Assisting with the appointment, training, and ongoing support for Fire Wardens.</span>
                </li>
                <li style={{ alignItems: 'flex-start' }}>
                  <svg style={{ marginTop: '0.25rem', minWidth: '20px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span><strong>Emergency Plans:</strong> Creating clear, highly visible life safety plans for occupants.</span>
                </li>
              </ul>
            </div>

            {/* Asset & Project Management */}
            <div className="system-card" style={{ height: 'auto', gridColumn: '1 / -1' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.5rem' }}>Asset & Project Management</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Asset Lifecycle Tracking</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Leveraging our deep industry knowledge, we provide strategic advice on the maintenance, upgrade, or replacement of specified systems, ensuring long-term reliability and cost-efficiency.
                  </p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Compliance Project Management</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    We act as your expert project managers, overseeing contractors and managing complex building upgrades to guarantee they meet the latest New Zealand compliance standards.
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
          <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to simplify your building compliance?</h2>
          <p className="subtitle" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contact our team of experts today for an initial consultation or a comprehensive audit of your current compliance status.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
