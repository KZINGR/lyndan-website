import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Systems Showcase Section */}
      <section id="systems" className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Ecosystem</h2>
            <p className="subtitle" style={{ marginBottom: '3rem' }}>
              Discover our integrated suite of specialized management tools.
            </p>
          </div>

          <div className="showcase-grid">
            {/* Asset Management Card */}
            <div className="system-card card-asset">

              <div className="system-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <p className="system-desc">
                Centralize your asset lifecycle tracking, maintenance scheduling, and procurement workflows into a single unified platform.
              </p>
              <ul className="system-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Lifecycle cost analysis
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Predictive maintenance alerts
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Vendor contract management
                </li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Learn More</button>
            </div>

            {/* BCMS Card */}
            <div className="system-card card-compliance">

              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', height: '40px' }}>
                <Image src="/lyndan-compliance.png" alt="Lyndan Compliance Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '40px' }} />
              </div>
              <p className="system-desc">
                Streamline building compliance workflows, track safety warrants, and ensure regulatory adherence across your entire property portfolio with real-time insights.
              </p>
              <ul className="system-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Automated BWoF generation
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Contractor & vendor portals
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Interactive asset mapping
                </li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Launch BCMS</button>
            </div>

            {/* SMS Card */}
            <div className="system-card card-sentry">

              <div style={{ background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', width: '100%', height: '40px' }}>
                <Image src="/sentry-logo.png" alt="Sentry Logo" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: '40px' }} />
              </div>
              <p className="system-desc">
                Deploy, monitor, and manage your security personnel efficiently. Track live guard patrols, manage incidents, and generate comprehensive daily activity reports.
              </p>
              <ul className="system-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Live GPS patrol tracking
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Incident reporting engine
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Guard scheduling & rostering
                </li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }}>Launch SMS</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
