// src/features/legal/TermsPage.jsx
// Content extracted from https://www.itrust121.com/terms-conditions
// Effective Date: 24 March 2025

import { LegalPageLayout } from './LegalPageLayout';

export function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our website or services."
      effectiveDate="24 March 2025"
    >
      <div className="legal-content">
        <h2>1. What's in These Terms?</h2>
        <p>
          These terms explain the rules for using our website at{' '}
          <a href="https://www.itrust121.com">www.itrust121.com</a>. By accessing or using
          this website, you agree to comply with and be bound by these terms. If you do
          not agree, you must not use our website.
        </p>

        <hr className="section-divider" />

        <h2>2. Who We Are and How to Contact Us</h2>
        <p>
          This website is operated by <strong>iTrust121 Limited</strong>, a company
          registered in England and Wales.
        </p>
        <ul>
          <li>
            Email: <a href="mailto:info@itrust121.com">info@itrust121.com</a>
          </li>
          <li>Address: 85 Great Portland Street, First Floor, London, W1W 7LT</li>
        </ul>

        <hr className="section-divider" />

        <h2>3. Other Terms That May Apply</h2>
        <p>
          By using our website, you also agree to our{' '}
          <a href="/privacy">Privacy Policy</a> and our{' '}
          <a href="/cookies">Cookie Policy</a>.
        </p>

        <hr className="section-divider" />

        <h2>4. Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Any changes will be posted on this
          page. Continued use of our website means you accept any changes.
        </p>

        <hr className="section-divider" />

        <h2>5. Changes to Our Website</h2>
        <p>
          We may update or change our website to reflect changes to our services, our
          users' needs, and our business priorities. We will try to give you reasonable
          notice of major changes.
        </p>

        <hr className="section-divider" />

        <h2>6. Website Availability</h2>
        <p>
          Our website is made available free of charge. We do not guarantee that our
          website, or any content on it, will always be available or uninterrupted. We may
          suspend, withdraw, or restrict access to all or part of our website for business
          or operational reasons.
        </p>

        <hr className="section-divider" />

        <h2>7. Your Account Responsibilities</h2>
        <p>
          If you create an account on our website you must keep your username and password
          confidential. Notify us immediately at{' '}
          <a href="mailto:info@itrust121.com">info@itrust121.com</a> if you believe your
          account security has been compromised. We may disable your account if we believe
          you have failed to comply with these terms.
        </p>

        <hr className="section-divider" />

        <h2>8. How You May Use Material on Our Website</h2>
        <p>
          We grant you a non-exclusive, non-transferable, revocable licence to access and
          use our website for personal, non-commercial purposes. You must not:
        </p>
        <ul>
          <li>Copy, reproduce, distribute, or modify website content</li>
          <li>Use our website to create a competing service or business</li>
          <li>
            Frame our website or create links to any part other than our homepage without
            permission
          </li>
        </ul>
        <p>
          All intellectual property rights on our website are owned by us or licensed to
          us. No rights are transferred to you through use of the website.
        </p>

        <hr className="section-divider" />

        <h2>9. Do Not Rely on Information on This Website</h2>
        <p>
          The content on our website is for general information only. It is not legal,
          financial, or investment advice. You should obtain professional advice before
          taking any action based on the content. While we make reasonable efforts to
          update information, we make no guarantees that content is accurate, complete, or
          up to date.
        </p>

        <hr className="section-divider" />

        <h2>10. Links to Third-Party Websites</h2>
        <p>
          Links to third-party websites are provided for your convenience only. We have no
          control over their contents and accept no responsibility for them.
        </p>

        <hr className="section-divider" />

        <h2>11. Uploading Content to Our Website</h2>
        <p>
          When you upload content to our website, you confirm that your content complies
          with all applicable laws and grant us a licence to use, store, and copy your
          content. We may remove content that violates our policies or legal obligations.
        </p>

        <hr className="section-divider" />

        <h2>12. Viruses and Misuse</h2>
        <p>
          We do not guarantee that our website is secure or free from bugs or viruses. You
          must not introduce viruses or malicious technology, attempt unauthorised access
          to our website or servers, or attack our website in any way. Breaching this
          provision may be a criminal offence under the Computer Misuse Act 1990.
        </p>

        <hr className="section-divider" />

        <h2>13. Limitation of Liability</h2>
        <p>
          <strong>Business users:</strong> We exclude all implied conditions, warranties,
          or representations. We will not be liable for loss of profits, business
          interruption, data loss, or indirect or consequential loss.
        </p>
        <p>
          <strong>Consumers:</strong> We provide our website for domestic and private use
          only. Nothing in these terms limits our liability for death, personal injury due
          to negligence, or fraud.
        </p>

        <hr className="section-divider" />

        <h2>14. Governing Law and Jurisdiction</h2>
        <p>
          These terms are governed by English law. Any disputes will be subject to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>

        <hr className="section-divider" />

        <h2>15. Our Trademarks</h2>
        <p>
          <strong>iTrust121</strong> is a trademark of iTrust121 Limited. You are not
          permitted to use it without our approval.
        </p>

        <hr className="section-divider" />

        <h2>16. Contact Us</h2>
        <p>For any enquiries about these terms:</p>
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

export default TermsPage;
