import React from 'react';

export const metadata = {
  title: 'Terms of Service | Lyndan',
  description: 'Terms and conditions for utilizing Lyndan\'s Consultation Services, Compliance system (app), and Sentry system (app) in New Zealand.',
};

export default function TermsPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction & Acceptance' },
    { id: 'services', title: '2. Our Services & Platforms' },
    { id: 'client-obligations', title: '3. Client Obligations' },
    { id: 'accounts', title: '4. Account Registration & Security' },
    { id: 'fees', title: '5. Fees, Invoicing & GST' },
    { id: 'intellectual-property', title: '6. Intellectual Property' },
    { id: 'liability', title: '7. Limitation of Liability' },
    { id: 'warranties', title: '8. Disclaimers & Warranties' },
    { id: 'indemnity', title: '9. Indemnity' },
    { id: 'termination', title: '10. Term & Termination' },
    { id: 'governing-law', title: '11. Governing Law & Jurisdiction' },
    { id: 'changes', title: '12. Changes to Terms' },
    { id: 'contact', title: '13. Contact Information' },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
            <p className="subtitle" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Please read these Terms of Service carefully. They govern your access to and use of Lyndan&apos;s consultancy services and software applications.
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

            {/* Terms Content */}
            <article className="terms-content">
              
              <div id="introduction" className="terms-section">
                <h2>1. Introduction &amp; Acceptance of Terms</h2>
                <p>
                  Welcome to Lyndan Limited (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern the relationship between Lyndan Limited and you, the client or user (&quot;you&quot; or &quot;your&quot;), regarding your access to and use of our website, our consultation services, and our proprietary software applications.
                </p>
                <p>
                  By executing a service agreement with us, registering an account, or accessing/using our services and software applications, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                </p>
                <p>
                  If you are entering into these Terms on behalf of a company, body corporate, trust, partnership, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use our services or applications.
                </p>
              </div>

              <div id="services" className="terms-section">
                <h2>2. Our Services &amp; Platforms</h2>
                <p>
                  Lyndan Limited provides a suite of integrated facilities management and building compliance solutions:
                </p>
                <ul>
                  <li>
                    <strong>Consultation Services:</strong> Professional advisory and management services, including facilities management, Building Warrant of Fitness (BWoF) administration, fire evacuation scheme development, trial evacuation training and execution, asset management, and general project management.
                  </li>
                  <li>
                    <strong>Compliance system (app):</strong> Our cloud-based software system designed to track, coordinate, and manage building compliance processes, including maintaining digital BWoF logbooks, capturing IQP inspections, logging defects, and storing mandatory compliance documentation.
                  </li>
                  <li>
                    <strong>Sentry system (app):</strong> Our contractor building access and sign-in system tailored for commercial, industrial, and body corporate environments, incorporating real-time administration dashboards and visitor logging.
                  </li>
                </ul>
                <p>
                  We reserve the right to modify, update, suspend, or discontinue any feature, functionality, or aspect of our applications or services at any time, subject to providing reasonable notice where practical.
                </p>
              </div>

              <div id="client-obligations" className="terms-section">
                <h2>3. Client Obligations</h2>
                <p>
                  To enable us to provide our Consultation Services and ensure the proper functioning of our applications, you agree to:
                </p>
                <ol>
                  <li>Provide us with prompt, accurate, and complete information regarding your properties, compliance schedules, and personnel.</li>
                  <li>Ensure our representatives, subcontractors, and authorized Independent Qualified Persons (IQPs) are granted safe and timely access to your premises as required for building compliance and system checks.</li>
                  <li>Maintain all building safety systems in accordance with your compliance schedules and legislation.</li>
                  <li>Ensure that your use of the Sentry system (app) and Compliance system (app) complies with all applicable health and safety laws, fire regulations, and privacy rules in New Zealand.</li>
                </ol>
              </div>

              <div id="accounts" className="terms-section">
                <h2>4. Account Registration &amp; Security</h2>
                <p>
                  Access to our Sentry system (app) and Compliance system (app) requires you to register and maintain an active account. You must provide accurate, current, and complete details during registration.
                </p>
                <p>
                  You are solely responsible for maintaining the confidentiality of your account credentials (including passwords) and for restricting access to your devices. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately at <a href="mailto:office@lyndan.co.nz" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>office@lyndan.co.nz</a> upon becoming aware of any unauthorized access to or use of your account.
                </p>
              </div>

              <div id="fees" className="terms-section">
                <h2>5. Fees, Invoicing &amp; GST</h2>
                <p>
                  Unless otherwise specified in a separate signed service agreement, the following financial terms apply:
                </p>
                <ul>
                  <li>
                    <strong>Fees:</strong> You agree to pay all fees and charges associated with your selected service package or subscription plan in accordance with the billing terms in effect at the time.
                  </li>
                  <li>
                    <strong>GST:</strong> All fees quoted by Lyndan Limited are exclusive of New Zealand Goods and Services Tax (GST) unless explicitly stated otherwise. You must pay GST in addition to the fees at the rate applicable by law (currently 15%).
                  </li>
                  <li>
                    <strong>Payment Terms:</strong> Invoices are payable within 14 days of the date of invoice, or by the 20th of the month following the date of invoice, as specified on your invoice or agreement.
                  </li>
                  <li>
                    <strong>Overdue Accounts:</strong> We reserve the right to charge interest on overdue amounts at a rate of 2% per month above the base lending rate of our primary bank, computed daily. You will also be liable for all collection costs, legal fees, and administrative charges incurred by us in recovering unpaid balances.
                  </li>
                </ul>
              </div>

              <div id="intellectual-property" className="terms-section">
                <h2>6. Intellectual Property Rights</h2>
                <p>
                  Lyndan Limited (and its licensors) retains all right, title, and interest in and to our website, Consultation Services material, the Compliance system (app), and the Sentry system (app), including all software code, databases, design layouts, graphics, trademarks, logos, and any enhancements or modifications made to them.
                </p>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our software systems solely for your internal business operations in accordance with these Terms and during the term of your active subscription. You must not copy, modify, distribute, reverse engineer, or create derivative works based on our software or intellectual property.
                </p>
              </div>

              <div id="liability" className="terms-section">
                <h2>7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by New Zealand law:
                </p>
                <ul>
                  <li>Our total liability to you for any claim arising out of or in connection with these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, will be strictly limited to the total fees paid by you to Lyndan Limited in the twelve (12) months preceding the event giving rise to the claim.</li>
                  <li>We will not be liable for any indirect, incidental, special, exemplary, punitive, or consequential damages, including loss of profits, loss of revenue, loss of data, business interruption, or costs of procurement of substitute services.</li>
                  <li>We are not responsible or liable for any penalties, regulatory fines, or damages arising from building compliance failures, late BWoF submissions, or safety issues caused by your failure to follow our recommendations, perform necessary maintenance, or provide required building access.</li>
                </ul>
              </div>

              <div id="warranties" className="terms-section">
                <h2>8. Disclaimers &amp; Warranties</h2>
                <p>
                  We provide our Consultation Services and software applications with reasonable care and skill. However, to the maximum extent permitted by law, they are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any additional warranties of any kind.
                </p>
                <p>
                  <strong>Business Exclusions:</strong> You acknowledge that you are acquiring our services and software applications for the purposes of a business. Accordingly, you agree that the provisions of the New Zealand Consumer Guarantees Act 1993 and sections 9, 12A, and 13 of the Fair Trading Act 1986 will not apply to our relationship, and that this exclusion is fair and reasonable.
                </p>
                <p>
                  We do not guarantee that our software systems (Compliance system (app) and Sentry system (app)) will be completely error-free, uninterrupted, or immune to security vulnerabilities. You are responsible for ensuring your own internet connectivity and compatibility with our platforms.
                </p>
              </div>

              <div id="indemnity" className="terms-section">
                <h2>9. Indemnity</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Lyndan Limited, its directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
                </p>
                <ol>
                  <li>Your breach of these Terms or any applicable New Zealand laws.</li>
                  <li>Your negligence, willful misconduct, or failure to maintain safe conditions on your property.</li>
                  <li>Any inaccurate or fraudulent information provided by you or your representatives.</li>
                  <li>Any claims by contractors, visitors, or third parties accessing your site via the Sentry system (app).</li>
                </ol>
              </div>

              <div id="termination" className="terms-section">
                <h2>10. Term &amp; Termination</h2>
                <p>
                  These Terms remain in effect until terminated in accordance with this section or your specific service agreement.
                </p>
                <ul>
                  <li>
                    <strong>Termination for Convenience:</strong> Unless otherwise agreed in writing, either party may terminate an active software subscription or consultation agreement by giving thirty (30) days written notice to the other party.
                  </li>
                  <li>
                    <strong>Termination for Cause:</strong> Lyndan Limited may suspend or terminate your access to our applications and services immediately if you commit a material breach of these Terms (including non-payment of fees) and fail to remedy such breach within seven (7) days of receiving written notice, or if you become insolvent or go into liquidation.
                  </li>
                  <li>
                    <strong>Effect of Termination:</strong> Upon termination, your right to use our software applications will immediately cease, all outstanding fees become instantly payable, and you must return or delete any proprietary materials in your possession.
                  </li>
                </ul>
              </div>

              <div id="governing-law" className="terms-section">
                <h2>11. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These Terms, and any dispute or claim arising out of or in connection with them, are governed by and construed in accordance with the laws of New Zealand.
                </p>
                <p>
                  Both parties irrevocably submit to the exclusive jurisdiction of the courts of New Zealand to resolve any dispute, controversy, or claim arising out of or relating to these Terms.
                </p>
              </div>

              <div id="changes" className="terms-section">
                <h2>12. Changes to Terms</h2>
                <p>
                  We may revise these Terms of Service from time to time to reflect modifications to our services, changes in law, or regulatory updates. We will notify you of any material changes by posting the updated Terms on this page and updating the &quot;Last Updated&quot; date at the top, or by sending an email notification.
                </p>
                <p>
                  Your continued use of our applications or services after any changes become effective constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div id="contact" className="terms-section">
                <h2>13. Contact Information</h2>
                <p>
                  If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:
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
