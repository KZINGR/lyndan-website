import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Lyndan',
  description: 'Privacy Policy for utilizing Lyndan\'s Consultation Services, Compliance system (app), and Sentry system (app), compliant with the New Zealand Privacy Act 2020.',
};

export default function PrivacyPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'use', title: '3. How We Use Information' },
    { id: 'sharing', title: '4. Information Sharing & Disclosure' },
    { id: 'security', title: '5. Data Security & Storage' },
    { id: 'retention', title: '6. Data Retention' },
    { id: 'your-rights', title: '7. Your Rights & Access' },
    { id: 'cookies', title: '8. Cookies & Online Tracking' },
    { id: 'changes', title: '9. Changes to Policy' },
    { id: 'contact', title: '10. Contact Us' },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
            <p className="subtitle" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Your privacy is extremely important to us. This policy explains how we collect, store, use, and protect your personal information under the New Zealand Privacy Act 2020.
            </p>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Last Updated: May 28, 2026
            </div>
          </div>

          <div className="terms-container">
            {/* Table of Contents - Sidebar */}
            <aside className="terms-sidebar">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--primary-dark)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                On This Page
              </h3>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="toc-link"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Privacy Content */}
            <article className="terms-content">
              
              <div id="introduction" className="terms-section">
                <h2>1. Introduction &amp; Overview</h2>
                <p>
                  Lyndan Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of our clients, website visitors, and users of our applications. This Privacy Policy details our practices concerning the collection, storage, use, and disclosure of personal information in connection with our website, Consultation Services, the Compliance system (app), and the Sentry system (app).
                </p>
                <p>
                  By accessing our website, engaging our services, or using our applications, you acknowledge the terms of this Privacy Policy.
                </p>
              </div>

              <div id="collection" className="terms-section">
                <h2>2. Information We Collect</h2>
                <p>
                  We collect personal information that you provide to us directly, as well as information generated through your use of our platforms. This includes:
                </p>
                <ul>
                  <li>
                    <strong>Contact Details:</strong> Your name, business name, physical address, email address, and phone number when you fill out contact forms or sign up for services.
                  </li>
                  <li>
                    <strong>Sentry system (app) Sign-in Data:</strong> Contractor and visitor details, including name, phone number, company name, sign-in/sign-out times, and health and safety induction responses when logging into the Sentry system on site.
                  </li>
                  <li>
                    <strong>Compliance system (app) Logs:</strong> Inspector names, certifications (such as IQP numbers), email addresses, digital signatures, and inspection logs associated with building compliance processes.
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser type, device details, and operating system collected automatically through cookies and logging tools when accessing our web interfaces.
                  </li>
                </ul>
              </div>

              <div id="use" className="terms-section">
                <h2>3. How We Use Information</h2>
                <p>
                  We collect and use your personal information for purposes related to our business operations, including to:
                </p>
                <ol>
                  <li>Provide, manage, and optimize our Consultation Services, Compliance system (app), and Sentry system (app).</li>
                  <li>Facilitate secure building entry logging and reporting for building managers and body corporates utilizing the Sentry system.</li>
                  <li>Maintain accurate digital logbooks and document compliance audits under standard New Zealand building regulations.</li>
                  <li>Communicate with you regarding service updates, invoicing, support queries, and operational notices.</li>
                  <li>Improve our software interfaces, diagnose technical issues, and ensure platform security.</li>
                </ol>
              </div>

              <div id="sharing" className="terms-section">
                <h2>4. Information Sharing &amp; Disclosure</h2>
                <p>
                  We respect your personal details and do not sell, rent, or trade your personal information to third parties. We may disclose your information under the following limited circumstances:
                </p>
                <ul>
                  <li>
                    <strong>To Building Administrators / Body Corporates:</strong> Visitor and contractor sign-in logs collected via the Sentry system (app) are shared directly with the designated managers of the respective properties.
                  </li>
                  <li>
                    <strong>To Regulatory Bodies:</strong> Compliance logs, IQP certifications, and BWoF forms stored in the Compliance system (app) may be shared with local councils, territorial authorities, or auditors in fulfillment of building compliance laws.
                  </li>
                  <li>
                    <strong>To Service Providers:</strong> Trusted third-party vendors who assist us in hosting, email distribution, databases, or payment processing, strictly under confidential agreements.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> Where required to do so by law, court order, or to protect the safety, rights, or property of Lyndan Limited or the public.
                  </li>
                </ul>
              </div>

              <div id="security" className="terms-section">
                <h2>5. Data Security &amp; Storage</h2>
                <p>
                  We take reasonable administrative, technical, and physical security measures to protect your personal information against loss, unauthorized access, modification, or disclosure.
                </p>
                <p>
                  Our databases are hosted on secure, industry-standard cloud servers. While we implement encryption and security protocols (such as HTTPS), no online data transmission can be guaranteed as 100% secure. You are responsible for keeping your login credentials confidential.
                </p>
              </div>

              <div id="retention" className="terms-section">
                <h2>6. Data Retention</h2>
                <p>
                  We will retain your personal information for as long as is necessary to fulfill the purposes for which it was collected, including for satisfying any legal, accounting, reporting, or regulatory compliance requirements.
                </p>
                <p>
                  Under building compliance regulations in New Zealand, certain building inspection logs and compliance documents must be kept for minimum statutory periods, which we will observe.
                </p>
              </div>

              <div id="your-rights" className="terms-section">
                <h2>7. Your Rights &amp; Access</h2>
                <p>
                  Under the New Zealand Privacy Act 2020, you have the right to:
                </p>
                <ol>
                  <li>Request access to the personal information we hold about you.</li>
                  <li>Request that we correct any incorrect or outdated personal details.</li>
                  <li>Request the deletion of your personal data, subject to any statutory retention requirements that we must comply with under NZ law.</li>
                </ol>
                <p>
                  To exercise these rights, please contact our Privacy Officer at <a href="mailto:office@lyndan.co.nz" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>office@lyndan.co.nz</a>. We will respond to your request within 20 working days, in accordance with the Privacy Act.
                </p>
              </div>

              <div id="cookies" className="terms-section">
                <h2>8. Cookies &amp; Online Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to store user preferences, enable user authentication, and analyze web traffic. You can modify your browser settings to decline cookies if you prefer, though this may prevent certain features of our applications from working correctly.
                </p>
              </div>

              <div id="changes" className="terms-section">
                <h2>9. Changes to Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect shifts in technology, business practices, or New Zealand privacy legislation. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div id="contact" className="terms-section">
                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions, comments, or complaints regarding how we manage your personal information, please contact us at:
                </p>
                <div style={{
                  background: 'rgba(43, 92, 148, 0.05)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  marginTop: '1rem',
                  display: 'inline-block'
                }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Lyndan Limited</strong>
                  <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Building compliance and asset management</span>
                  <span style={{ display: 'block', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>New Zealand</span>
                  <span style={{ display: 'block', fontSize: '0.95rem' }}>
                    <strong>Email:</strong> <a href="mailto:office@lyndan.co.nz" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>office@lyndan.co.nz</a>
                  </span>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
