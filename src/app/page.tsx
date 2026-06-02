import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Services Showcase Section */}
      <section id="about" className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Services and Systems</h2>
            <p className="subtitle" style={{ marginBottom: '3rem' }}>
              Discover our integrated suite of specialised services and management tools.
            </p>
          </div>

          <div className="showcase-grid">
            {/* Consultation Services Card */}
            <div className="system-card card-asset">
              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', height: '40px' }}>
                <Image src="/lyndan-logo.png" alt="Lyndan Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '40px' }} />
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, marginTop: '-0.5rem', marginBottom: '1.5rem' }}>Consultation Services</h3>
              <ul className="system-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Facilities Management
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Building Warrant of Fitness management and issuing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Fire evacuation scheme development
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Trial evacuation training and execution
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Asset management
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Project management
                </li>
              </ul>
              <div style={{ flexGrow: 1 }} />
              <Link href="/services/consultation" className="btn btn-outline" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>Learn More</Link>
            </div>

            {/* BCMS Card */}
            <div className="system-card card-compliance">
              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', height: '40px' }}>
                <Image src="/lyndan-compliance.png" alt="Lyndan Compliance Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '40px' }} />
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, marginTop: '-0.5rem', marginBottom: '1.5rem' }}>Building Compliance Management System</h3>
              <ul className="system-features" style={{ marginTop: '1rem' }}>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Cloud based software to manage end to end workflow for BWOF
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Digital BWOF Book accessible to councils, contractors, owners and management entities
                </li>
              </ul>
              <div style={{ flexGrow: 1 }} />
              <Link href="/services/compliance" className="btn btn-outline" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>Learn More</Link>
            </div>

            {/* SMS Card */}
            <div className="system-card card-sentry">
              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', height: '40px' }}>
                <Image src="/sentry-logo.png" alt="Sentry Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '40px' }} />
              </div>
              <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 600, marginTop: '-0.5rem', marginBottom: '1.5rem' }}>Contractor Building Access System</h3>
              <ul className="system-features" style={{ marginTop: '1rem' }}>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Contractor building sign-in system focused on commercial and body corporate environments
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Online live dashboard for admins to manage and view contractor activity on site
                </li>
              </ul>
              <div style={{ flexGrow: 1 }} />
              <Link href="/services/sentry" className="btn btn-outline" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
