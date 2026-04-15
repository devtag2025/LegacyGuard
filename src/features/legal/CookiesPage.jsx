// src/features/legal/CookiesPage.jsx
// Content extracted from https://www.itrust121.com/cookiepolicy
// Effective Date: 24 March 2025

import { LegalPageLayout } from './LegalPageLayout';

export function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="This policy explains how we use cookies and similar technologies on our website."
      effectiveDate="24 March 2025"
    >
      <div className="legal-content">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help the website recognise your device and store information about your
          preferences or past actions. By continuing to browse our site, you consent to
          our use of cookies as described in this policy.
        </p>

        <hr className="section-divider" />

        <h2>2. Types of Cookies We Use</h2>

        <p>
          <strong>Necessary Cookies</strong>
        </p>
        <p>
          These cookies are essential for the site to function properly and cannot be
          switched off. They are usually set in response to actions you take, such as
          logging in, filling in forms, or setting privacy preferences.
        </p>

        <p>
          <strong>Performance Cookies</strong>
        </p>
        <p>
          These cookies collect information about how visitors use our site, such as which
          pages are visited most often. All data is aggregated and anonymous. We use this
          information to improve the site's performance.
        </p>

        <p>
          <strong>Functionality Cookies</strong>
        </p>
        <p>
          These cookies allow the site to remember choices you make, such as your
          username, region, or language, to provide enhanced, more personal features.
        </p>

        <p>
          <strong>Targeting or Advertising Cookies</strong>
        </p>
        <p>
          These cookies may be set by us or by third-party advertising partners. They
          track browsing habits and are used to deliver relevant adverts on other
          websites. They also limit the number of times you see an advert and measure the
          effectiveness of advertising campaigns.
        </p>

        <hr className="section-divider" />

        <h2>3. Third-Party Cookies</h2>
        <p>
          Some cookies on our site may be set by third-party services such as analytics
          providers (e.g. Google Analytics) or video content hosts. These third parties
          may use their cookies in accordance with their own privacy policies.
        </p>

        <hr className="section-divider" />

        <h2>4. Your Cookie Choices</h2>
        <p>
          You can choose to accept or reject cookies when you first visit our site. A
          banner will appear asking for your consent. You can also adjust your cookie
          settings at any time via your browser preferences. If you disable cookies, some
          parts of our site may not function properly.
        </p>

        <hr className="section-divider" />

        <h2>5. Do Not Track Signals</h2>
        <p>
          Some browsers offer a "Do Not Track" (DNT) setting. We currently do not respond
          to DNT signals due to a lack of consistent industry standards.
        </p>

        <hr className="section-divider" />

        <h2>6. How to Manage Cookies</h2>
        <p>
          You can manage your cookie preferences through your web browser settings.
          Instructions are typically found in the "Help" or "Settings" section of your
          browser. You may also opt out of certain targeted advertising using:
        </p>
        <ul>
          <li>
            <a
              href="https://www.youronlinechoices.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              YourOnlineChoices
            </a>
          </li>
          <li>
            <a
              href="https://optout.networkadvertising.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Network Advertising Initiative
            </a>
          </li>
        </ul>

        <hr className="section-divider" />

        <h2>7. Cookie Duration</h2>
        <ul>
          <li>
            <strong>Session cookies</strong> are deleted when you close your browser
          </li>
          <li>
            <strong>Persistent cookies</strong> remain until they expire or are manually
            deleted
          </li>
        </ul>

        <hr className="section-divider" />

        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in
          technology, legislation, or our operations. Any updates will be posted on this
          page with a revised effective date.
        </p>

        <hr className="section-divider" />

        <h2>9. Contact Us</h2>
        <ul>
          <li>
            Email: <a href="mailto:info@itrust121.com">info@itrust121.com</a>
          </li>
          <li>
            Address: iTrust121 Limited, 85 Great Portland Street, First Floor, London, W1W
            7LT
          </li>
        </ul>
      </div>
    </LegalPageLayout>
  );
}

export default CookiesPage;
