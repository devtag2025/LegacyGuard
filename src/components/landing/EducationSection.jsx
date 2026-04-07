
const POINTS = [
  {
    num:   "01",
    title: "A will is a starting point — not always a complete solution.",
    body:  "A will distributes your assets after death. But it cannot manage your affairs if you become incapacitated, protect assets from care costs, or structure inheritance tax efficiently. Many families discover this too late.",
  },
  {
    num:   "02",
    title: "Blended families and multiple properties require additional structures.",
    body:  "If you have children from a previous relationship, own more than one property, or have stepchildren, a standard will may not protect everyone fairly — or as you intend.",
  },
  {
    num:   "03",
    title: "Inheritance tax thresholds affect more families than expected.",
    body:  "Property values across the UK mean many estates now exceed IHT thresholds. Without the right planning, a significant portion of what you've built could go to HMRC rather than your family.",
  },
  {
    num:   "04",
    title: "A Lasting Power of Attorney is often as important as a will.",
    body:  "If you were to lose mental capacity, without a registered LPA your family would have limited ability to manage your finances or welfare — regardless of what your will says.",
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

    
        <div className="mb-14 max-w-[640px]">
          <p
            className="font-monument"
            style={{
              color:      "rgba(253,254,254,0.55)",
              fontSize:   "clamp(1rem, 2.2vw, 1.2rem)",
              fontWeight: 300,
              lineHeight: 1.6,
              borderLeft: "2px solid rgba(157,180,192,0.22)",
              paddingLeft: "1.5rem",
            }}
          >
            Most people don't realise there are gaps until they start looking into it properly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-20">

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow" style={{ color: "rgba(157,180,192,.60)" }}>
                What to consider
              </span>
            </div>

            <h2
              id="edu-heading"
              className="font-monument text-frosted mb-12"
              style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.6rem)", lineHeight: 1.12 }}
            >
              Why a will alone
              <br />
              <span className="text-cadet">may not be enough.</span>
            </h2>

            {POINTS.map((p, i) => (
              <div
                key={p.num}
                className="grid gap-5 py-7"
                style={{
                  gridTemplateColumns: "2.5rem 1fr",
                  borderBottom:        "1px solid rgba(157,180,192,0.10)",
                
                  paddingTop:    i === 0 ? 0 : undefined,
                }}
              >
                <span
                  className="font-monument text-xs tracking-widest pt-0.5"
                  style={{ color: "rgba(157,180,192,0.4)" }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="font-monument text-frosted text-[0.95rem] leading-snug mb-2"
                    style={{ fontWeight: 400 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(157,180,192,0.70)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — pull quote + CTA card */}
          <div className="flex flex-col gap-8 lg:pt-20">

            {/* Pull quote */}
            <blockquote
              style={{ borderLeft: "2px solid rgba(157,180,192,0.3)", paddingLeft: "1.4rem" }}
            >
              <p
                className="font-monument text-frosted leading-snug mb-3"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontWeight: 300 }}
              >
                &ldquo;The decisions you make today will shape what your family inherits — and how.&rdquo;
              </p>
              <footer
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: "rgba(157,180,192,0.5)" }}
              >
                — iTrust121 Estate Planning Team
              </footer>
            </blockquote>

            {/* CTA card */}
            <div
              className="p-7 rounded-sm"
              style={{ border: "1px solid rgba(157,180,192,0.14)", background: "rgba(19,19,19,0.35)" }}
            >
              <h3
                className="font-monument text-frosted text-base mb-3"
                style={{ fontWeight: 400 }}
              >
                Not sure where you stand?
              </h3>

              <p
                className="font-sans text-sm leading-relaxed mb-6"
                style={{ color: "rgba(157,180,192,0.65)" }}
              >
                Our 3-minute assessment identifies which type of planning your situation
                requires — before recommending anything.
              </p>

              {/* Primary CTA — exact client copy */}
              <a
                href="/assessment"
                className="btn btn-ghost w-full text-center"
                data-track="edu-cta-primary"
              >
                Start Your 3-Minute Assessment
              </a>

              {/* Secondary CTA — exact client copy */}
              <div className="text-center mt-4">
                <a
                  href="/book"
                  className="font-sans text-xs hover:text-frosted transition-colors"
                  style={{ color: "rgba(157,180,192,0.5)", lineHeight: 1.5 }}
                  data-track="edu-cta-adviser"
                >
                  Speak to an Adviser — No Obligation, Just Clarity
                </a>
              </div>
            </div>

            {/* These points — closer advisory note */}
            <p
              className="font-sans text-xs leading-relaxed"
              style={{ color: "rgba(157,180,192,0.40)", fontStyle: "italic" }}
            >
              These points don't apply to everyone — but if any feel relevant,
              your situation may benefit from a more structured approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;