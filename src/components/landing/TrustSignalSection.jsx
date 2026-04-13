// src/features/landing/TrustSignalsSection.jsx
// Directive 1 — remove FCA, update regulatory language
// Directive 13 — "Operating within English and Welsh legal frameworks"

const SIGNALS = [
  {
    label: 'UK-based estate planning services',
    body: 'All our estate planning services are delivered by qualified professionals working exclusively with UK families and estates.',
  },
  {
    label: 'No obligation to proceed',
    body: 'Our assessment gives you clarity on your situation. What you decide to do with that information is entirely up to you.',
  },
  {
    label: 'Operating within English and Welsh legal frameworks',
    body: 'All services are delivered by qualified professionals operating within the legal frameworks of England and Wales.',
  },
  {
    label: 'Your information stays private',
    body: "Your assessment answers are used only to prepare for your consultation. We don't sell or share your data.",
  },
];

export function TrustSignalsSection() {
  return (
    <section className="section bg-charcoal" aria-labelledby="trust-heading">
      <div className="container-brand">
        <div className="flex items-center gap-3 mb-8">
          <span className="divider" aria-hidden="true" />
          <span className="label-eyebrow text-cadet/60">Why iTrust121</span>
        </div>

        <h2
          id="trust-heading"
          className="font-monument text-frosted mb-14"
          style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)', lineHeight: 1.15 }}
        >
          Built around your situation,
          <br />
          <span className="text-cadet">not a standard template.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SIGNALS.map((s) => (
            <div
              key={s.label}
              className="border border-cadet/12 rounded-sm p-6 bg-cadet/3"
            >
              <h3
                className="font-monument text-frosted text-sm leading-snug mb-3"
                style={{ fontWeight: 400 }}
              >
                {s.label}
              </h3>
              <p className="font-sans text-sm text-cadet/58 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSignalsSection;
