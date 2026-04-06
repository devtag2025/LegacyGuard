/**
 * TrustSignalsSection
 * File: src/features/landing/TrustSignalsSection.jsx
 */

const SIGNALS = [
  { label: "UK Estate Planning Specialists", desc: "We work exclusively in UK estate planning law — not a general legal services directory." },
  { label: "Regulated & Professional",       desc: "All advice and will preparation is carried out by qualified professionals regulated under English and Welsh law." },
  { label: "Consultation-Led Approach",      desc: "We recommend a consultation when it's in your interest — not simply because it generates more revenue." },
  { label: "No Obligation to Proceed",       desc: "Your assessment is free and confidential. We will never pressure you to sign up or commit to a service." },
];

const PRACTICE_AREAS = ["Wills & Probate", "Lasting Power of Attorney", "Inheritance Tax Planning", "Estate Administration"];

export function TrustSignalsSection() {
  return (
    <section
      id="why-itrust"
      className="section"
      style={{ background: "var(--bg-subtle)" }}
      aria-labelledby="trust-heading"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow">Why iTrust121</span>
            </div>
            <h2
              id="trust-heading"
              className="font-monument text-night mb-10"
              style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", lineHeight: 1.12 }}
            >
              Professional guidance,<br />not a templated form.
            </h2>

            {/* Signals */}
            <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
              {SIGNALS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-2 py-6"
                  style={{ borderBottom: "1px solid var(--border-subtle)" }}
                >
                  <div className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M3 8.5L6.5 12L13 5" stroke="#9DB4C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h3 className="font-monument text-night text-sm leading-snug" style={{ fontWeight: 400 }}>
                      {s.label}
                    </h3>
                  </div>
                  <p className="font-sans text-sm leading-relaxed pl-7" style={{ color: "rgba(54,62,68,.62)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5 lg:pt-24">
            {/* Practice panel */}
            <div className="bg-night rounded-sm p-8" style={{ border: "1px solid var(--border-on-dark)" }}>
              <p className="label-eyebrow mb-5" style={{ color: "rgba(157,180,192,.65)" }}>Areas of practice</p>
              {PRACTICE_AREAS.map((area, i) => (
                <div
                  key={area}
                  className="flex justify-between items-center py-4 font-sans text-frosted text-sm"
                  style={{ borderBottom: i < PRACTICE_AREAS.length - 1 ? "1px solid var(--border-on-dark)" : "none" }}
                >
                  <span>{area}</span>
                  <span className="font-monument text-xs" style={{ color: "rgba(157,180,192,.35)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>

            {/* Reg note */}
            <div className="p-5 bg-frosted rounded-sm" style={{ border: "1px solid var(--border-subtle)" }}>
              <p className="font-sans leading-relaxed" style={{ fontSize: "11.5px", color: "rgba(54,62,68,.65)" }}>
                <strong style={{ color: "var(--color-charcoal)", fontWeight: 500 }}>Regulatory statement: </strong>
                All will preparation and estate planning advice is carried out by qualified professionals
                operating in accordance with English and Welsh law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}