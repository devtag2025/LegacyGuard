/**
 * Footer — Shared Layout Component
 * File: src/components/shared/Footer.jsx
 *
 * Night background, legal disclaimers, FCA regulatory note.
 * UK-focused tone: professional, no promotional copy.
 */

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Online Will",          href: "/will"    },
      { label: "Adviser Consultation", href: "/book"    },
      { label: "Estate Planning",      href: "/estate"  },
      { label: "Power of Attorney",    href: "/lpa"     },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About iTrust121", href: "/about"        },
      { label: "How It Works",    href: "#how-it-works" },
      { label: "Our Advisers",    href: "/team"         },
      { label: "Contact Us",      href: "/contact"      },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",    href: "/privacy"    },
      { label: "Terms of Service",  href: "/terms"      },
      { label: "Cookie Policy",     href: "/cookies"    },
      { label: "Complaints Policy", href: "/complaints" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-night"
      role="contentinfo"
      style={{ borderTop: "1px solid var(--border-on-dark)" }}
    >
      {/* Upper */}
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="/" className="font-monument text-frosted text-sm tracking-widest uppercase leading-none">
              iTrust<span className="text-cadet">121</span>
            </a>

            <p className="font-sans text-cadet text-sm leading-relaxed max-w-xs" style={{ opacity: 0.7 }}>
              iTrust121 helps homeowners and families across the UK plan their
              estates with clarity and confidence — not speed.
            </p>

            {/* Reg badge */}
            <div
              className="flex items-start gap-3 p-4 rounded-sm"
              style={{ border: "1px solid var(--border-on-dark)" }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ border: "1px solid var(--border-on-dark)" }}
                aria-hidden="true"
              >
                <span className="text-cadet text-xs font-monument">✓</span>
              </div>
              <div>
                <p className="font-sans text-frosted text-xs font-medium mb-0.5">
                  UK Regulated Estate Planning
                </p>
                <p className="font-sans text-cadet text-xs leading-snug" style={{ opacity: 0.65 }}>
                  All advice provided by qualified professionals registered and regulated in England &amp; Wales.
                </p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3
                className="font-sans text-frosted text-xs font-semibold tracking-widest uppercase"
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm leading-snug hover:text-frosted transition-colors duration-200"
                      style={{ color: "rgba(157,180,192,0.65)" }}
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

      {/* Legal bar */}
      <div style={{ borderTop: "1px solid var(--border-on-dark)" }}>
        <div className="container-brand py-6">
          <p
            className="font-sans text-xs leading-relaxed max-w-3xl mb-4 pb-4"
            style={{ color: "rgba(157,180,192,0.55)", borderBottom: "1px solid var(--border-on-dark)" }}
          >
            <strong style={{ color: "rgba(157,180,192,0.75)", fontWeight: 500 }}>Regulatory notice: </strong>
            iTrust121 is a trading name of [Legal Entity Ltd], registered in England and Wales (Company No. XXXXXXXX).
            All advice is facilitated through regulated advisers. The information on this website is for guidance
            only and does not constitute legal advice.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-sans text-xs" style={{ color: "rgba(157,180,192,0.4)" }}>
              © {year} iTrust121. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Cookies"].map((label, i) => (
                <span key={label} className="flex items-center gap-4">
                  {i > 0 && <span style={{ color: "rgba(157,180,192,0.25)" }}>·</span>}
                  <a
                    href={`/${label.toLowerCase()}`}
                    className="font-sans text-xs hover:text-cadet transition-colors"
                    style={{ color: "rgba(157,180,192,0.4)" }}
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