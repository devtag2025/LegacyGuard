/**
 * Footer — Shared Layout Component
 * Client final sign-off applied — April 2026
 * Directives 9, 10, 11, 12, 13, 14 implemented.
 */

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Online Will', href: '/will' },
      { label: 'Adviser Consultation', href: '/book' },
      { label: 'Estate Planning', href: '/estate' },
      { label: 'Power of Attorney', href: '/lpa' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About iTrust121', href: '/about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Our Advisers', href: '/team' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Complaints Policy', href: '/complaints' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-night"
      role="contentinfo"
      style={{ borderTop: '1px solid var(--border-on-dark)' }}
    >
      {/* Upper */}
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href="/"
              className="font-monument text-frosted text-sm tracking-widest uppercase leading-none"
            >
              iTrust<span className="text-cadet">121</span>
            </a>

            <p
              className="font-sans text-cadet text-sm leading-relaxed max-w-xs"
              style={{ opacity: 0.68 }}
            >
              iTrust121 provides expert trust and estate planning services — simplified,
              explained and arranged for homeowners and families across the UK.
            </p>

            {/* Directive 9 — phone + email */}
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:02045832632"
                className="font-sans text-sm text-cadet/65 hover:text-cadet transition-colors flex items-center gap-2"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.88 2 2 0 012 .7h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                020 4583 2632
              </a>
              {/* Directive 10 — email */}
              <a
                href="mailto:info@itrust121.com"
                className="font-sans text-sm text-cadet/65 hover:text-cadet transition-colors flex items-center gap-2"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@itrust121.com
              </a>
              {/* Directive 14 — website */}
              <a
                href="https://www.itrust121.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-cadet/65 hover:text-cadet transition-colors flex items-center gap-2"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                www.itrust121.com
              </a>
            </div>

            {/* Directive 13 — updated regulatory badge */}
            <div
              className="flex items-start gap-3 p-4 rounded-sm"
              style={{ border: '1px solid var(--border-on-dark)' }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: '1px solid var(--border-on-dark)' }}
                aria-hidden="true"
              >
                <span className="text-cadet text-xs font-monument">&#10003;</span>
              </div>
              <div>
                <p className="font-sans text-frosted text-xs font-medium mb-0.5">
                  UK-based estate planning services
                </p>
                <p
                  className="font-sans text-cadet text-xs leading-snug"
                  style={{ opacity: 0.6 }}
                >
                  Delivered by qualified professionals operating within English and Welsh
                  legal frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="font-sans text-frosted text-xs font-semibold tracking-widest uppercase">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm leading-snug hover:text-frosted transition-colors duration-200"
                      style={{ color: 'rgba(157,180,192,0.62)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Directive 11 & 12 — company info + correspondence address */}
      <div style={{ borderTop: '1px solid var(--border-on-dark)' }}>
        <div className="container-brand py-8">
          {/* Addresses grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6 pb-6"
            style={{ borderBottom: '1px solid var(--border-on-dark)' }}
          >
            {/* Registered office */}
            <div>
              <p
                className="font-sans text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: 'rgba(157,180,192,0.50)' }}
              >
                Registered Office
              </p>
              <p
                className="font-sans text-xs leading-relaxed"
                style={{ color: 'rgba(157,180,192,0.40)' }}
              >
                iTrust121 Limited
                <br />
                Tower Court, Oakdale Road
                <br />
                York, YO30 4XL
                <br />
                Registered in England &amp; Wales
                <br />
                Company No: 17061988
              </p>
            </div>
            {/* Correspondence address */}
            <div>
              <p
                className="font-sans text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: 'rgba(157,180,192,0.50)' }}
              >
                Correspondence Address
              </p>
              <p
                className="font-sans text-xs leading-relaxed"
                style={{ color: 'rgba(157,180,192,0.40)' }}
              >
                iTrust121 Limited
                <br />
                85 Great Portland Street, First Floor
                <br />
                London, W1W 7LT
              </p>
            </div>
          </div>

          {/* Directive 14 — legal notice */}
          <p
            className="font-sans text-xs leading-relaxed max-w-3xl mb-5"
            style={{ color: 'rgba(157,180,192,0.45)' }}
          >
            <strong style={{ color: 'rgba(157,180,192,0.62)', fontWeight: 500 }}>
              Legal notice:{' '}
            </strong>
            All information provided on this website is for guidance only and does not
            constitute legal advice. Services are delivered by qualified professionals
            operating within English and Welsh legal frameworks. iTrust121 Limited is
            registered in England and Wales (Company No: 17061988).
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-sans text-xs" style={{ color: 'rgba(157,180,192,0.35)' }}>
              &copy; {year} iTrust121 Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {['Privacy', 'Terms', 'Cookies'].map((label, i) => (
                <span key={label} className="flex items-center gap-4">
                  {i > 0 && (
                    <span style={{ color: 'rgba(157,180,192,0.22)' }}>&middot;</span>
                  )}
                  <a
                    href={`/${label.toLowerCase()}`}
                    className="font-sans text-xs hover:text-cadet transition-colors"
                    style={{ color: 'rgba(157,180,192,0.38)' }}
                  >
                    {label}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
