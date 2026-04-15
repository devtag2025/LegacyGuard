// src/features/legal/ComplaintsPage.jsx
// Content extracted from https://www.itrust121.com/complaints

import { LegalPageLayout } from './LegalPageLayout';

export function ComplaintsPage() {
  return (
    <LegalPageLayout
      title="Complaints Procedure"
      subtitle="We take all complaints seriously and aim to resolve them fairly and promptly."
    >
      <div className="legal-content">
        <h2>What Is a Complaint?</h2>
        <p>A complaint is any expression of dissatisfaction relating to:</p>
        <ul>
          <li>The services we provide</li>
          <li>Delays, errors, or omissions</li>
          <li>Communication or conduct</li>
          <li>The performance of professional trustee duties</li>
        </ul>
        <p>
          Routine questions or requests for clarification are not treated as complaints
          unless you ask us to do so.
        </p>

        <hr className="section-divider" />

        <h2>How to Raise a Complaint</h2>
        <p>
          Complaints must be made <strong>in writing</strong> so that we can investigate
          fully and maintain an accurate record. Please include:
        </p>
        <ul>
          <li>Your full name</li>
          <li>The service or matter concerned</li>
          <li>A clear explanation of your complaint</li>
        </ul>
        <p>Please contact our Compliance Director:</p>
        <ul>
          <li>
            Email: <a href="mailto:complaints@itrust121.com">complaints@itrust121.com</a>
          </li>
          <li>
            Post: iTrust121 Pro Limited, 85 Great Portland Street, First Floor, London,
            W1W 7LT
          </li>
        </ul>

        <hr className="section-divider" />

        <h2>What Happens Next</h2>
        <p>
          We will acknowledge your complaint within <strong>5 business days</strong>. Your
          complaint will be reviewed by a senior member of the team who was not directly
          responsible for the matter, where reasonably practicable. We aim to provide a
          substantive written response within <strong>28 days</strong>. If more time is
          required due to complexity, we will explain why and keep you informed.
        </p>

        <hr className="section-divider" />

        <h2>If You Remain Dissatisfied</h2>
        <p>
          If you are unhappy with our response, you may request a further internal review.
          Where your complaint relates to services provided by a third-party professional,
          you may be directed to that provider's own complaints procedure where
          appropriate.
        </p>
        <p>
          We are not regulated by the Financial Conduct Authority and do not provide
          FCA-regulated advice. Complaints are therefore not subject to the Financial
          Ombudsman Service. In appropriate cases, we may suggest independent mediation as
          a means of resolving matters.
        </p>

        <hr className="section-divider" />

        <h2>Further Information</h2>
        <p>
          Our full Complaints & Concerns Policy is available on request by contacting{' '}
          <a href="mailto:complaints@itrust121.com">complaints@itrust121.com</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}

export default ComplaintsPage;
