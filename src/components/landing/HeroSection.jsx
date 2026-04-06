/**
 * HeroSection — Landing Page
 * File: src/features/landing/HeroSection.jsx
 *
 * Problem-led headline. No price. No "free will" language.
 * Single CTA: "Start your assessment"
 */

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-night flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "92vh", paddingBottom: "6rem" }}
      aria-label="Page introduction"
    >
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(var(--color-cadet) 1px,transparent 1px),linear-gradient(90deg,var(--color-cadet) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-20%", right: "-5%",
          width: "60%", height: "85%",
          background: "radial-gradient(ellipse at center,rgba(157,180,192,.09) 0%,transparent 65%)",
        }}
      />

      <div className="container-brand" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex items-center gap-3 mb-8">
          <span className="divider" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1
          className="font-monument text-frosted"
          style={{
            fontSize: "clamp(0.6rem,3.5vw,4.8rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Your will should do<br />
          exactly what{" "}
          <span className="text-cadet">you intend.</span>
        </h1>

        {/* Sub */}
        <p
          className="font-sans"
          style={{
            color: "rgba(253,254,254,0.65)",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: "2.5rem",
          }}
        >
          Most people assume a standard will is enough. For many homeowners
          and families, it isn&apos;t. Our short assessment helps you understand
          what your situation actually requires.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12">
          <a href="/assessment" className="btn btn-ghost" data-track="hero-cta-primary">
            Start your assessment →
          </a>
          <a
            href="/book"
            className="font-sans text-cadet text-sm tracking-wide hover:text-frosted transition-colors"
            data-track="hero-cta-book"
          >
            Or speak to an adviser
          </a>
        </div>

        {/* Micro trust */}
        <ul className="flex flex-wrap gap-x-5 gap-y-2" role="list" aria-label="Trust indicators">
          {["UK Estate Planning Specialists", "FCA-Aligned Guidance", "No obligation consultation"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                <path d="M6 0L7.5 4.5H12L8.5 7L10 12L6 9.5L2 12L3.5 7L0 4.5H4.5L6 0Z"
                  stroke="#9DB4C0" strokeWidth="1" fill="none" strokeLinejoin="round"/>
              </svg>
              <span className="font-sans text-xs tracking-wide" style={{ color: "rgba(157,180,192,.75)" }}>
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(157,180,192,.3),transparent)" }}
      />
    </section>
  );
}

export default HeroSection;