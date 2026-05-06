import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="title">
            Empower Your Operations with <br />
            <span className="text-gradient">Lyndan Systems</span>
          </h1>
          <p className="subtitle">
            Next-generation enterprise solutions designed for seamless compliance, security, and operational excellence.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Explore Systems</button>
            <button className="btn btn-outline">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Systems Showcase Section */}
      <section id="systems" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Ecosystem</h2>
            <p className="subtitle" style={{ marginBottom: '3rem' }}>
              Discover our integrated suite of specialized management tools.
            </p>
          </div>

          <div className="showcase-grid">
            {/* BCMS Card */}
            <div className="system-card">
              <div className="system-image-container">
                <Image 
                  src="/bcms.png" 
                  alt="Building Compliance Management System Dashboard" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="system-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="system-title">Building Compliance (BCMS)</h3>
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
            <div className="system-card">
              <div className="system-image-container">
                <Image 
                  src="/sms.png" 
                  alt="Sentry Management System Interface" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="system-icon-wrapper">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="system-title">Sentry Management (SMS)</h3>
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
