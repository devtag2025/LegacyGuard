// src/features/legal/LegalPageLayout.jsx
// Shared layout for all legal pages — consistent header, back link, meta

export function LegalPageLayout({ title, subtitle, effectiveDate, children }) {
  return (
    <div className="min-h-screen bg-night">
      <div className="container-brand max-w-[760px] mx-auto px-5 pt-32 pb-24">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 font-sans text-xs text-cadet/38 hover:text-cadet/65 transition-colors mb-12"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 11L5 7l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to homepage
        </a>

        {/* Header */}
        <div className="mb-12 pb-10 border-b border-cadet/10">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/55">Legal</span>
          </div>
          <h1 className="font-monument text-frosted leading-[1.1] mb-4 text-[clamp(1.6rem,3vw,2.4rem)]">
            {title}
          </h1>
          {subtitle && (
            <p className="font-sans text-cadet/55 text-sm leading-relaxed">{subtitle}</p>
          )}
          {effectiveDate && (
            <p className="font-sans text-cadet/38 text-xs mt-3">
              Effective date: {effectiveDate}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="legal-content">{children}</div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-cadet/10">
          <p className="font-sans text-cadet/38 text-xs leading-relaxed">
            iTrust121 Limited — Registered in England & Wales — Company No: 17061988
            <br />
            Registered Office: Tower Court, Oakdale Road, York, YO30 4XL
            <br />
            Correspondence: 85 Great Portland Street, First Floor, London, W1W 7LT
          </p>
        </div>
      </div>

      <style>{`
        .legal-content h2 {
          font-family: var(--font-monument, serif);
          font-size: 1rem;
          font-weight: 400;
          color: rgba(253,254,254,0.88);
          margin-top: 2.5rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .legal-content p {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          color: rgba(157,180,192,0.72);
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .legal-content ul {
          margin: 0.5rem 0 1rem 0;
          padding-left: 1.25rem;
        }
        .legal-content ul li {
          font-family: var(--font-sans, sans-serif);
          font-size: 0.9rem;
          color: rgba(157,180,192,0.70);
          line-height: 1.75;
          margin-bottom: 0.4rem;
          list-style: disc;
        }
        .legal-content a {
          color: rgba(157,180,192,0.85);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .legal-content strong {
          color: rgba(253,254,254,0.75);
          font-weight: 500;
        }
        .legal-content .section-divider {
          border: none;
          border-top: 1px solid rgba(157,180,192,0.08);
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
}
 export default LegalPageLayout;
