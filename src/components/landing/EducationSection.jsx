// src/features/landing/EducationSection.jsx
// Directive 5 — trigger line before education heading updated
// Directive 6 — CTA copy standardised
// Directive 4 — CTA card tightened, no duplicate explanations

const POINTS = [
  {
    num: '01',
    title: 'A will is a starting point — not always a complete solution.',
    body: 'A will distributes your assets after death. But it cannot manage your affairs if you become incapacitated, protect assets from care costs, or structure inheritance tax efficiently. Many families discover this too late.',
  },
  {
    num: '02',
    title: 'Blended families and multiple properties require additional structures.',
    body: 'If you have children from a previous relationship, own more than one property, or have stepchildren, a standard will may not protect everyone fairly — or as you intend.',
  },
  {
    num: '03',
    title: 'Inheritance tax thresholds affect more families than expected.',
    body: "Property values across the UK mean many estates now exceed IHT thresholds. Without the right planning, a significant portion of what you've built could go to HMRC rather than your family.",
  },
  {
    num: '04',
    title: 'A Lasting Power of Attorney is often as important as a will.',
    body: 'If you were to lose mental capacity, without a registered LPA your family would have limited ability to manage your finances or welfare — regardless of what your will says.',
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
        {/* Directive 5 — updated trigger line */}
        <div className="mb-12 max-w-[620px]">
          <p
            className="font-monument"
            style={{
              color: 'rgba(253,254,254,0.52)',
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              fontWeight: 300,
              lineHeight: 1.65,
              borderLeft: '2px solid rgba(157,180,192,0.20)',
              paddingLeft: '1.4rem',
            }}
          >
            Most people don't realise these issues apply to them until they start looking
            into it properly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-18">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow" style={{ color: 'rgba(157,180,192,.58)' }}>
                What to consider
              </span>
            </div>

            <h2
              id="edu-heading"
              className="font-monument text-frosted mb-10"
              style={{ fontSize: 'clamp(1.65rem, 2.8vw, 2.5rem)', lineHeight: 1.13 }}
            >
              Why a will alone
              <br />
              <span className="text-cadet">may not be enough.</span>
            </h2>

            {POINTS.map((p, i) => (
              <div
                key={p.num}
                className="grid gap-5 py-6"
                style={{
                  gridTemplateColumns: '2.5rem 1fr',
                  borderBottom: '1px solid rgba(157,180,192,0.09)',
                  paddingTop: i === 0 ? 0 : undefined,
                }}
              >
                <span
                  className="font-monument text-xs tracking-widest pt-0.5"
                  style={{ color: 'rgba(157,180,192,0.35)' }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="font-monument text-frosted text-[0.93rem] leading-snug mb-2"
                    style={{ fontWeight: 400 }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'rgba(157,180,192,0.68)' }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 lg:pt-16">
            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: '2px solid rgba(157,180,192,0.25)',
                paddingLeft: '1.3rem',
              }}
            >
              <p
                className="font-monument text-frosted leading-snug mb-3"
                style={{ fontSize: 'clamp(0.95rem, 1.7vw, 1.1rem)', fontWeight: 300 }}
              >
                &ldquo;The decisions you make today will shape what your family inherits —
                and how.&rdquo;
              </p>
              <footer
                className="font-sans text-xs tracking-widest uppercase"
                style={{ color: 'rgba(157,180,192,0.45)' }}
              >
                — iTrust121 Estate Planning Team
              </footer>
            </blockquote>

            {/* CTA card — directive 4: tightened, no duplicate text */}
            <div
              className="p-6 rounded-sm"
              style={{
                border: '1px solid rgba(157,180,192,0.13)',
                background: 'rgba(19,19,19,0.35)',
              }}
            >
              <h3
                className="font-monument text-frosted text-[0.9rem] mb-3"
                style={{ fontWeight: 400 }}
              >
                Not sure where you stand?
              </h3>
              <p
                className="font-sans text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(157,180,192,0.60)' }}
              >
                Our 3-minute assessment identifies what your situation requires — before
                recommending anything.
              </p>
              {/* Directive 6 — standardised CTAs */}
              <a
                href="/assessment"
                className="btn btn-ghost p-5 w-full text-center text-sm"
                data-track="edu-cta-primary"
              >
                Start Your 3-Minute Assessment
              </a>
              <div className="text-center mt-3">
                <a
                  href="/book"
                  className="font-sans text-cadet/45 text-xs hover:text-frosted transition-colors"
                  style={{ color: 'rgba(157,180,192Start,0.45)' }}
                  data-track="edu-cta-adviser"
                >
                  Speak to an Adviser
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
