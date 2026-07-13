import React from 'react';

export const metadata = {
  title: 'Terms of Service | Lyndan',
  description: 'Terms and conditions for utilizing Lyndan\'s Consultation Services, Compliance system (app), and Sentry system (app) in New Zealand.',
};

export default function TermsPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction & Acceptance' },
    { id: 'services', title: '2. Our Services & Platforms' },
    { id: 'commencement-term', title: '3. Commencement & Term' },
    { id: 'client-obligations', title: '4. Client Obligations' },
    { id: 'lyndans-obligations', title: '5. Lyndan\'s Obligations' },
    { id: 'accounts', title: '6. Account Registration & Security' },
    { id: 'fees', title: '7. Fees, Invoicing & GST' },
    { id: 'data-privacy', title: '8. Data & Privacy' },
    { id: 'warranties', title: '9. Warranties & Consumer Guarantees' },
    { id: 'liability', title: '10. Limitation of Liability' },
    { id: 'indemnity', title: '11. Indemnity' },
    { id: 'termination', title: '12. Termination' },
    { id: 'dispute-resolution', title: '13. Dispute Resolution' },
    { id: 'force-majeure', title: '14. Force Majeure' },
    { id: 'general', title: '15. General' },
  ];

  return (
    <main>
      <section className="section" style={{ paddingTop: '8rem', minHeight: 'calc(100vh - 80px)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h1 className="title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
            <p className="subtitle" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
              Please read these Terms of Service carefully. They govern your access to and use of Lyndan&apos;s consultancy services, software applications, and platforms.
            </p>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Last Updated: July 1, 2026
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
                  These Terms are governed by the laws of New Zealand and incorporate the parties&apos; obligations under applicable legislation, including the Building Act 2004, the Construction Contracts Act 2002, the Health and Safety at Work Act 2015, the Privacy Act 2020, the Fair Trading Act 1986, and the Contract and Commercial Law Act 2017.
                </p>
                <p>
                  By executing a service agreement with us, signing a purchase order, registering an account, or accessing/using our services and software applications, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                </p>
                <p>
                  If you are entering into these Terms on behalf of a company, body corporate, trust, partnership, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. If you do not have such authority, or if you do not agree with these Terms, you must not accept these Terms and may not use our services or applications.
                </p>
              </div>

              <div id="services" className="terms-section">
                <h2>2. Our Services &amp; Platforms</h2>
                <p>
                  Lyndan Limited provides a suite of integrated facilities management, building compliance, and safety solutions:
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

              <div id="commencement-term" className="terms-section">
                <h2>3. Commencement &amp; Term</h2>
                <ul>
                  <li>
                    <strong>Commencement:</strong> Services commence on the date specified in the accompanying quotation or proposal, or the date of the signed Purchase Order/Service Agreement, whichever is later.
                  </li>
                  <li>
                    <strong>Initial Term:</strong> For building compliance and management advisory services, the initial term is twelve (12) months, unless otherwise agreed in writing. For standalone software subscriptions (Compliance or Sentry apps), the term is as specified on your signup invoice or purchase order.
                  </li>
                  <li>
                    <strong>Rolling Term:</strong> After the initial term (or subscription period), the engagement continues on a rolling monthly basis, subject to thirty (30) days&apos; written notice of termination by either party.
                  </li>
                  <li>
                    <strong>Construction Contract:</strong> For the avoidance of doubt, this agreement constitutes a &quot;construction contract&quot; for the purposes of the Construction Contracts Act 2002 to the extent that it relates to construction work as defined in that Act.
                  </li>
                </ul>
              </div>

              <div id="client-obligations" className="terms-section">
                <h2>4. Client Obligations</h2>
                <p>
                  The Client (including building owners, body corporates, and managing agents) agrees to:
                </p>
                <ol>
                  <li>Provide Lyndan with timely and safe access to the building and its specified systems for inspections and compliance activities.</li>
                  <li>Provide current compliance schedules, existing Form 12A documentation, and any relevant historical records at the outset of the engagement.</li>
                  <li>Notify Lyndan promptly of any changes to building systems, ownership, management, or Territorial Authority requirements.</li>
                  <li>Respond to defect escalations and remediation recommendations within reasonable timeframes to avoid compliance delays.</li>
                  <li>Ensure Lyndan has current contact details for all relevant stakeholders.</li>
                  <li>Comply with its obligations as a PCBU (Person Conducting a Business or Undertaking) under the Health and Safety at Work Act 2015, including ensuring the building site is safe for Lyndan personnel and contractors to carry out compliance activities.</li>
                  <li>Ensure all information provided to Lyndan is accurate and not misleading, consistent with the principles of the Fair Trading Act 1986.</li>
                  <li>Ensure that your use of the Sentry system (app) and Compliance system (app) complies with all applicable health and safety laws, fire regulations, and privacy rules in New Zealand.</li>
                </ol>
              </div>

              <div id="lyndans-obligations" className="terms-section">
                <h2>5. Lyndan&apos;s Obligations</h2>
                <p>
                  Lyndan agrees to:
                </p>
                <ul>
                  <li>Perform all services with due care, skill, and diligence in accordance with current New Zealand building compliance legislation and recognised industry best practice.</li>
                  <li>Maintain the BCMS platform in accordance with the Service Level commitments.</li>
                  <li>Comply with its obligations as a PCBU under the Health and Safety at Work Act 2015, including ensuring the health and safety of its workers and other persons are not put at risk from work carried out by Lyndan.</li>
                  <li>Protect the confidentiality of all building and client data in accordance with the Privacy Act 2020 and the Information Privacy Principles set out in that Act.</li>
                  <li>Not make any misleading or deceptive representations regarding its services, consistent with the Fair Trading Act 1986.</li>
                  <li>Maintain appropriate professional indemnity and public liability insurance for the duration of the engagement.</li>
                  <li>Notify the Client promptly of any material compliance risks, defects, or regulatory changes that may affect the building.</li>
                </ul>
              </div>

              <div id="accounts" className="terms-section">
                <h2>6. Account Registration &amp; Security</h2>
                <p>
                  Access to our Sentry system (app) and Compliance system (app) requires you to register and maintain an active account. You must provide accurate, current, and complete details during registration.
                </p>
                <p>
                  You are solely responsible for maintaining the confidentiality of your account credentials (including passwords) and for restricting access to your devices. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately at <a href="mailto:office@lyndan.co.nz" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>office@lyndan.co.nz</a> upon becoming aware of any unauthorized access to or use of your account.
                </p>
              </div>

              <div id="fees" className="terms-section">
                <h2>7. Fees, Invoicing &amp; GST</h2>
                <p>
                  Unless otherwise specified in a separate signed service agreement or quotation, the following terms apply:
                </p>
                <ul>
                  <li>
                    <strong>Fees:</strong> All fees are as specified in the accompanying quotation, proposal, or subscription plan. You agree to pay all fees and charges in accordance with the billing terms in effect.
                  </li>
                  <li>
                    <strong>GST:</strong> All fees are exclusive of GST, which will be added at the prevailing rate under the Goods and Services Tax Act 1985 (currently 15%).
                  </li>
                  <li>
                    <strong>Payment Claims &amp; Due Date:</strong> Invoices are issued monthly in advance (or as specified in the quotation) and constitute payment claims under the Construction Contracts Act 2002. The due date for payment is the 20th of the month following the invoice date, unless otherwise agreed in writing.
                  </li>
                  <li>
                    <strong>Payment Schedule (CCA Section 21):</strong> The Client may provide a payment schedule under section 21 of the Construction Contracts Act 2002 within 20 working days of receiving a payment claim. If no payment schedule is provided within that period, the full amount claimed becomes due.
                  </li>
                  <li>
                    <strong>Overdue Accounts:</strong> Lyndan reserves the right to charge interest on overdue amounts at a rate of 1.5% per month (or the maximum rate permitted by law, whichever is lower), calculated daily from the due date until payment is received in full. You will also be liable for all collection costs, legal fees, and administrative charges incurred by us in recovering unpaid balances.
                  </li>
                  <li>
                    <strong>Dispute Rights:</strong> In the event of a payment dispute, either party may exercise its rights under Part 3 of the Construction Contracts Act 2002, including the right to refer the dispute to adjudication.
                  </li>
                </ul>
              </div>

              <div id="data-privacy" className="terms-section">
                <h2>8. Data &amp; Privacy</h2>
                <ul>
                  <li>
                    <strong>Data Ownership:</strong> All building compliance data entered into the BCMS/Compliance platform remains the property of the building owner.
                  </li>
                  <li>
                    <strong>Privacy Act 2020:</strong> Lyndan will collect, hold, use, and disclose personal information only in accordance with the Privacy Act 2020 and the Information Privacy Principles (IPPs). Our full Privacy Policy is available at <a href="/privacy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>lyndan.co.nz/privacy</a>.
                  </li>
                  <li>
                    <strong>Hosting:</strong> Data is hosted on secure, New Zealand or Australian–based cloud infrastructure.
                  </li>
                  <li>
                    <strong>Post-Termination Export &amp; Deletion:</strong> Upon termination of services, Lyndan will provide a complete data export of all compliance records to the Client within thirty (30) business days of the termination date, in PDF format. Following confirmation of receipt, Lyndan will securely delete the Client&apos;s data within a further thirty (30) business days unless retention is required by law.
                  </li>
                </ul>
              </div>

              <div id="warranties" className="terms-section">
                <h2>9. Warranties &amp; Consumer Guarantees</h2>
                <ul>
                  <li>
                    <strong>Reasonable Care:</strong> Lyndan warrants that its services will be performed with reasonable care and skill, consistent with the guarantees provided under the Consumer Guarantees Act 1993 (where applicable).
                  </li>
                  <li>
                    <strong>Business Exclusions:</strong> Where the Client is acquiring services and software applications for business purposes, the parties agree that the Consumer Guarantees Act 1993 and sections 9, 12A, and 13 of the Fair Trading Act 1986 do not apply, and that this exclusion is fair and reasonable.
                  </li>
                  <li>
                    <strong>Statutory Exclusions:</strong> Nothing in this agreement excludes, restricts, or modifies any right or remedy, or any guarantee, condition, or warranty implied or imposed by any legislation that cannot lawfully be excluded, restricted, or modified.
                  </li>
                  <li>
                    <strong>Software Disclaimer:</strong> We do not guarantee that our software systems (Compliance system (app) and Sentry system (app)) will be completely error-free, uninterrupted, or immune to security vulnerabilities. You are responsible for ensuring your own internet connectivity and compatibility with our platforms.
                  </li>
                </ul>
              </div>

              <div id="liability" className="terms-section">
                <h2>10. Limitation of Liability</h2>
                <ul>
                  <li>
                    <strong>Cap on Liability:</strong> To the maximum extent permitted by law, Lyndan&apos;s total aggregate liability under or in connection with this agreement, whether in contract, tort (including negligence), equity, under statute, or otherwise, is limited to the total fees paid by the Client to Lyndan in the twelve (12) months immediately preceding the event giving rise to the claim.
                  </li>
                  <li>
                    <strong>Indirect Loss Exclusion:</strong> Lyndan shall not be liable for any indirect, consequential, special, incidental, exemplary, or punitive loss or damage, including loss of profits, loss of revenue, loss of opportunity, or loss of data, regardless of whether such loss was foreseeable.
                  </li>
                  <li>
                    <strong>Client Delays:</strong> Lyndan is not liable for delays or failures caused by the Client&apos;s failure to provide access, information, or approvals as required under this agreement.
                  </li>
                  <li>
                    <strong>Third-Party IQPs:</strong> Lyndan is not liable for the performance, workmanship, or professional opinions of third-party IQPs or contractors, though Lyndan will exercise reasonable diligence in their coordination.
                  </li>
                  <li>
                    <strong>Limitation Period:</strong> Any claim arising under this agreement must be brought within six (6) years from the date on which the cause of action accrued, in accordance with the Limitation Act 2010.
                  </li>
                </ul>
              </div>

              <div id="indemnity" className="terms-section">
                <h2>11. Indemnity</h2>
                <p>
                  The Client indemnifies Lyndan against all claims, losses, damages, costs, and expenses (including reasonable legal fees) arising from or in connection with:
                </p>
                <ul>
                  <li>The Client&apos;s failure to comply with its obligations under this agreement.</li>
                  <li>The Client&apos;s failure to act on defect escalations or remediation recommendations provided by Lyndan within a reasonable timeframe.</li>
                  <li>Any breach by the Client of its obligations under the Building Act 2004, the Health and Safety at Work Act 2015, or any other applicable legislation.</li>
                  <li>Your negligence, willful misconduct, or failure to maintain safe conditions on your property.</li>
                  <li>Any inaccurate or fraudulent information provided by you or your representatives.</li>
                  <li>Any claims by contractors, visitors, or third parties accessing your site via the Sentry system (app).</li>
                </ul>
              </div>

              <div id="termination" className="terms-section">
                <h2>12. Termination</h2>
                <ul>
                  <li>
                    <strong>Termination for Convenience:</strong> Unless otherwise agreed in writing, either party may terminate this agreement by giving thirty (30) days&apos; written notice after the initial term.
                  </li>
                  <li>
                    <strong>Termination for Non-Payment:</strong> Lyndan may terminate this agreement immediately if the Client fails to pay invoices within sixty (60) days of the due date, without prejudice to Lyndan&apos;s rights under the Construction Contracts Act 2002.
                  </li>
                  <li>
                    <strong>Termination for Material Breach:</strong> Either party may terminate immediately if the other party commits a material breach of these Terms and fails to remedy such breach within fourteen (14) days of receiving written notice specifying the breach.
                  </li>
                  <li>
                    <strong>Insolvency &amp; Liquidation:</strong> Either party may terminate immediately if the other party becomes insolvent, enters liquidation or receivership, or has a statutory demand served upon it under the Companies Act 1993.
                  </li>
                  <li>
                    <strong>Effect of Termination:</strong> Upon termination, your right to use our software applications will immediately cease, all outstanding fees become instantly payable, the data export and deletion provisions in Clause 8 apply, and you must return or delete any proprietary materials in your possession.
                  </li>
                </ul>
              </div>

              <div id="dispute-resolution" className="terms-section">
                <h2>13. Dispute Resolution</h2>
                <ul>
                  <li>
                    <strong>Good-Faith Negotiation:</strong> Any dispute arising under or in connection with this agreement shall first be addressed through good-faith negotiation between senior representatives of each party for a period of not less than ten (10) business days.
                  </li>
                  <li>
                    <strong>Mediation:</strong> If the dispute cannot be resolved by negotiation, either party may refer the dispute to mediation administered by the Arbitrators&apos; and Mediators&apos; Institute of New Zealand (AMINZ) in accordance with the AMINZ Mediation Protocol. The costs of mediation shall be shared equally.
                  </li>
                  <li>
                    <strong>Adjudication:</strong> If the dispute relates to a payment claim or a payment schedule under the Construction Contracts Act 2002, either party may refer the dispute to adjudication under Part 3 of that Act.
                  </li>
                  <li>
                    <strong>Litigation:</strong> If the dispute is not resolved by mediation within thirty (30) business days of referral (or such longer period as the parties agree), either party may commence court proceedings.
                  </li>
                </ul>
              </div>

              <div id="force-majeure" className="terms-section">
                <h2>14. Force Majeure</h2>
                <p>
                  Neither party shall be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond reasonable control, including (but not limited to) natural disaster, pandemic, epidemic, government action or restriction, civil emergency, fire, flood, earthquake, failure of third-party telecommunications or infrastructure, or any event that could not have been reasonably foreseen or prevented. 
                </p>
                <p>
                  The affected party must notify the other party as soon as reasonably practicable and take reasonable steps to mitigate the effects. If a force majeure event continues for more than sixty (60) days, either party may terminate this agreement by written notice.
                </p>
              </div>

              <div id="general" className="terms-section">
                <h2>15. General</h2>
                <ul>
                  <li>
                    <strong>Entire Agreement:</strong> This document, together with the accompanying quotation/proposal and any signed Purchase Order/Service Agreement, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, and agreements, whether written or oral, in accordance with Part 2 of the Contract and Commercial Law Act 2017.
                  </li>
                  <li>
                    <strong>Variation:</strong> No amendment to this agreement shall be effective unless agreed in writing and signed by both parties.
                  </li>
                  <li>
                    <strong>Assignment:</strong> Neither party may assign or transfer its rights or obligations under this agreement without the prior written consent of the other party, such consent not to be unreasonably withheld.
                  </li>
                  <li>
                    <strong>Severability:</strong> If any provision of this agreement is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
                  </li>
                  <li>
                    <strong>Waiver:</strong> A failure or delay by either party in exercising any right or remedy under this agreement does not constitute a waiver of that right or remedy.
                  </li>
                  <li>
                    <strong>Notices:</strong> All formal notices under this agreement must be in writing and delivered by email.
                  </li>
                  <li>
                    <strong>Jurisdiction:</strong> This agreement is governed by and construed in accordance with the laws of New Zealand, and the parties submit to the non-exclusive jurisdiction of the New Zealand courts.
                  </li>
                </ul>
              </div>

            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
