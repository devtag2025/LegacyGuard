/**
 * HowItWorksSection — Landing Page
 * File: src/features/landing/HowItWorksSection.jsx
 *
 * "A structured journey, not a form to fill in."
 * Blueprint §1 — Full Funnel Map: Questionnaire → Classification → Routing
 */

const STEPS = [
  {
    num: "1",
    title: "Tell us about your situation",
    body: "A short guided assessment — 7 questions, one at a time. No legal jargon. No personal details required to begin. We ask about your family, property, and what matters most to you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="2"/>
        <path d="M9 12h6M9 16h4"/>
      </svg>
    ),
  },
  {
    num: "2",
    title: "We assess your estate complexity",
    body: "Your answers are evaluated against a structured decision framework. This helps us understand whether a standard will is appropriate — or whether your situation calls for something more considered.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    num: "3",
    title: "We guide you to the right next step",
    body: "Based on your assessment, we either route you through to an online will — or connect you with an adviser for a no-obligation conversation about what your estate actually requires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section bg-frosted"
      style={{ borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}
      aria-labelledby="hiw-heading"
    >
      <div className="container-brand">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow">How it works</span>
            </div>
            <h2
              id="hiw-heading"
              className="font-monument text-night"
              style={{ fontSize: "clamp(1.8rem,3vw,2.9rem)", lineHeight: 1.12 }}
            >
              A structured journey,<br />not a form to fill in.
            </h2>
          </div>
          <p className="font-sans text-base leading-relaxed max-w-[480px]" style={{ color: "rgba(54,62,68,.68)" }}>
            We designed our process to feel more like an informed conversation than an
            online checkout. It begins with understanding — not selling.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.num}>
              {/* Number row */}
              <div className="flex items-center gap-4 mb-7">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1.5px solid var(--color-cadet)" }}
                  aria-hidden="true"
                >
                  <span className="font-monument text-night text-sm">{step.num}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block flex-1 h-px"
                    style={{ background: "linear-gradient(to right,rgba(157,180,192,.4),rgba(157,180,192,.08))" }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Icon */}
              <div className="mb-5 text-cadet" aria-hidden="true">{step.icon}</div>

              {/* Content */}
              <h3
                className="font-monument text-night text-base leading-snug mb-3"
                style={{ fontWeight: 400 }}
              >
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(54,62,68,.68)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-16 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="font-sans text-sm leading-relaxed max-w-[440px]" style={{ color: "rgba(54,62,68,.55)" }}>
            The assessment takes around 3–4 minutes. At the end, we&apos;ll let you know clearly
            what your situation requires and why.
          </p>
          <a href="/assessment" className="btn btn-primary flex-shrink-0" data-track="hiw-cta">
            Start the assessment
          </a>
        </div>
      </div>
    </section>
  );
}