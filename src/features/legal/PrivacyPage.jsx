// src/features/legal/PrivacyPage.jsx
// Content extracted from https://www.itrust121.com/privacy-policy
// Effective Date: 24 March 2025

import { LegalPageLayout } from './LegalPageLayout';

export function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This policy explains how we collect, use, and protect your personal data."
      effectiveDate="24 March 2025"
    >
      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how iTrust121 Limited ("we", "us", or "our")
          collects, uses, shares, and protects your personal data when you engage with our
          services or visit our website at{' '}
          <a href="https://itrust121.com">itrust121.com</a>. We are committed to
          protecting your privacy and complying with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>

        <hr className="section-divider" />

        <h2>2. Who We Are</h2>
        <p>
          iTrust121 Limited provides professional trust structuring services, including
          discretionary and bare trusts, estate and inheritance planning, professional
          trustee services, and associated services under the iWill121 brand. We act as a{' '}
          <strong>data controller</strong> for the personal information you provide.
        </p>

        <hr className="section-divider" />

        <h2>3. What Information We Collect</h2>
        <ul>
          <li>
            <strong>Identity data:</strong> name, date of birth, marital status
          </li>
          <li>
            <strong>Contact data:</strong> address, email, telephone numbers
          </li>
          <li>
            <strong>Financial data:</strong> asset values, policy details, account numbers
          </li>
          <li>
            <strong>Family information:</strong> names and relationships of family members
            and beneficiaries
          </li>
          <li>
            <strong>Professional contacts:</strong> advisors, accountants, or introducers
            you engage
          </li>
          <li>
            <strong>Website data:</strong> IP address, device information, cookies (see
            our Cookie Policy)
          </li>
        </ul>

        <hr className="section-divider" />

        <h2>4. How We Use Your Data</h2>
        <ul>
          <li>To provide trust, will, or estate planning services</li>
          <li>To fulfil our contractual obligations</li>
          <li>To comply with legal or regulatory requirements</li>
          <li>To send service updates or administrative communications</li>
          <li>To maintain internal records and ensure service quality</li>
          <li>To detect fraud or comply with AML obligations</li>
        </ul>

        <hr className="section-divider" />

        <h2>5. Legal Bases for Processing</h2>
        <ul>
          <li>
            <strong>Contractual necessity</strong> — to provide the services you request
          </li>
          <li>
            <strong>Legal obligation</strong> — to meet our duties under financial, tax,
            and compliance laws
          </li>
          <li>
            <strong>Legitimate interest</strong> — in managing our business effectively
          </li>
          <li>
            <strong>Consent</strong> — where you explicitly permit us (e.g. marketing)
          </li>
        </ul>

        <hr className="section-divider" />

        <h2>6. Sharing Your Data</h2>
        <p>
          We may share your data with our appointed legal advisors, HMRC or regulators,
          professional trustees, trusted service providers (e.g. CRM platforms, payment
          processors), and affiliates who introduced you. We do <strong>not</strong> sell
          your data to third parties.
        </p>

        <hr className="section-divider" />

        <h2>7. Data Storage and Security</h2>
        <p>
          Your data is stored on secure servers within the UK or EEA. We use strong
          encryption, access controls, and regular audits to protect your data.
        </p>

        <hr className="section-divider" />

        <h2>8. How Long We Keep Your Data</h2>
        <p>
          We retain your personal data for as long as necessary to fulfil our service
          obligations, comply with legal and financial regulations, and maintain records
          for tax or audit purposes. You may request deletion in certain cases.
        </p>

        <hr className="section-divider" />

        <h2>9. Your Rights</h2>
        <p>Under UK GDPR you have the following rights:</p>
        <ul>
          <li>Right to access your data</li>
          <li>Right to correct inaccurate data</li>
          <li>Right to request deletion (right to be forgotten)</li>
          <li>Right to restrict or object to processing</li>
          <li>Right to data portability (where applicable)</li>
          <li>Right to withdraw consent at any time</li>
        </ul>
        <p>
          To exercise your rights, email{' '}
          <a href="mailto:info@itrust121.com">info@itrust121.com</a>.
        </p>

        <hr className="section-divider" />

        <h2>10. Marketing</h2>
        <p>
          We may contact you with information about new services, offers, or updates. You
          can opt out at any time using the unsubscribe link or by contacting us directly.
        </p>

        <hr className="section-divider" />

        <h2>11. ICO Registration</h2>
        <p>
          We are registered with the Information Commissioner's Office (ICO). Our
          registration details are available on request. If you are unhappy with how we
          handle your data, you can complain to the ICO at{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>
          .
        </p>

        <hr className="section-divider" />

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. The latest version will always
          be available on our website with a revised effective date.
        </p>

        <hr className="section-divider" />

        <h2>13. Contact Us</h2>
        <ul>
          <li>
            Email: <a href="mailto:info@itrust121.com">info@itrust121.com</a>
          </li>
          <li>
            Post: iTrust121 Limited, 85 Great Portland Street, First Floor, London, W1W
            7LT
          </li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}

export default PrivacyPage;
