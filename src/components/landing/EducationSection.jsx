/**
 * EducationSection — Landing Page
 * File: src/features/landing/EducationSection.jsx
 *
 * KEY CLIENT DIRECTIVE: "Introduce the education layer EARLIER in the journey"
 * "Introduce the idea that a will may not always be sufficient"
 * Blueprint §6 — Education Layer Placement & Copy
 */

const POINTS = [
  {
    num: "01",
    title: "A will is a starting point — not always a complete solution.",
    body: "A will distributes your assets after death. But it cannot manage your affairs if you become incapacitated, protect assets from care costs, or structure inheritance tax efficiently. Many families discover this too late.",
  },
  {
    num: "02",
    title: "Blended families and multiple properties require additional structures.",
    body: "If you have children from a previous relationship, own more than one property, or have stepchildren, a standard will may not protect everyone fairly — or as you intend.",
  },
  {
    num: "03",
    title: "Inheritance Tax thresholds affect more families than expected.",
    body: "Property values across the UK mean many estates now exceed IHT thresholds. Without the right planning, a significant portion of what you've built could go to HMRC rather than your family.",
  },
  {
    num: "04",
    title: "A Lasting Power of Attorney is often as important as a will.",
    body: "If you were to lose mental capacity, without a registered LPA your family would have limited ability to manage your finances or welfare — regardless of what your will says.",
  },
];

export function EducationSection() {
  return (
    <section
      id="what-to-consider"
      className="section bg-charcoal"
      aria-labelledby="edu-heading"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow" style={{ color: "rgba(157,180,192,.65)" }}>
                What to consider
              </span>
            </div>

            <h2
              id="edu-heading"
              className="font-monument text-frosted mb-12"
              style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.12 }}
            >
              Why a will alone<br />
              <span className="text-cadet">may not be enough.</span>
            </h2>

            {/* Points */}
            {POINTS.map((p) => (
              <div
                key={p.num}
                className="grid gap-6 py-8"
                style={{
                  gridTemplateColumns: "3rem 1fr",
                  borderBottom: "1px solid rgba(157,180,192,.12)",
                }}
              >
                <span
                  className="font-monument text-xs tracking-widest pt-0.5"
                  style={{ color: "rgba(157,180,192,.5)" }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="font-monument text-frosted text-base leading-snug mb-2.5"
                    style={{ fontWeight: 400 }}
                  >
                    {p.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(157,180,192,.78)" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 lg:pt-24">
            {/* Pull quote */}
            <blockquote style={{ borderLeft: "2px solid var(--color-cadet)", paddingLeft: "1.5rem" }}>
              <p className="font-monument text-frosted leading-snug mb-3" style={{ fontSize: "1.2rem", fontWeight: 300 }}>
                &ldquo;The decisions you make today will shape what your family inherits — and how.&rdquo;
              </p>
              <footer className="font-sans text-xs tracking-widest uppercase" style={{ color: "rgba(157,180,192,.6)" }}>
                — iTrust121 Estate Planning Team
              </footer>
            </blockquote>

            {/* CTA card */}
            <div
              className="p-8 rounded-sm"
              style={{ border: "1px solid var(--border-on-dark)", background: "rgba(19,19,19,.35)" }}
            >
              <h3 className="font-monument text-frosted text-base mb-3" style={{ fontWeight: 400 }}>
                Not sure where you stand?
              </h3>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color: "rgba(157,180,192,.72)" }}>
                Our 3-minute assessment identifies which type of planning your situation
                requires — before recommending anything.
              </p>
              <a href="/assessment" className="btn btn-ghost w-full" data-track="edu-cta">
                Start your assessment
              </a>
              <p className="font-sans text-xs text-center mt-4" style={{ color: "rgba(157,180,192,.45)" }}>
                No obligation. No personal details required to begin.
              </p>
            </div>

            {/* Secondary link */}
            <div className="text-center">
              <p className="font-sans text-xs mb-2" style={{ color: "rgba(157,180,192,.55)" }}>
                Prefer to speak to someone directly?
              </p>
              <a
                href="/book"
                className="font-sans text-cadet text-sm hover:text-frosted transition-colors"
                data-track="edu-book"
              >
                Book a free introductory call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}