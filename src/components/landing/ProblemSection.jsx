
const TRIGGERS = [
  {
    idx: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>
      </svg>
    ),
    headline: "You own a property",
    body: "A home is your largest asset. Without the right structure, it may not pass to the right people — or may face unexpected tax.",
  },
  {
    idx: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    headline: "You have children or dependents",
    body: "If you have children — especially from a previous relationship — a standard will may leave critical gaps in how they are protected.",
  },
  {
    idx: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    headline: "You're approaching retirement",
    body: "Inheritance Tax thresholds, pension nominations, and family protection all become more complex as your estate grows.",
  },
  {
    idx: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    headline: "Your family situation has changed",
    body: "Remarriage, separation, a new child or stepchild — life changes often mean your existing will no longer reflects your intentions.",
  },
  {
    idx: "05",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    headline: "You haven't reviewed your will recently",
    body: "A will written more than three years ago may not account for changes in your assets, family, or UK estate law.",
  },
  {
    idx: "06",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    headline: "You want proper advice, not a form",
    body: "Many online services ask you to self-diagnose your estate complexity. Our approach starts with understanding your situation first.",
  },
];

function TriggerCard({ idx, icon, headline, body }) {
  return (
    <article
      className="relative flex flex-col gap-5 p-7 rounded-sm bg-frosted transition-all duration-300 group"
      style={{ border: "1px solid var(--border-subtle)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-cadet)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(19,19,19,.07)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-subtle)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Index */}
      <span
        className="absolute top-5 right-5 font-monument text-xs tracking-widest"
        style={{ color: "rgba(157,180,192,.3)" }}
        aria-hidden="true"
      >
        {idx}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
        style={{ border: "1px solid var(--border-subtle)", color: "var(--color-charcoal)" }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3
          className="font-monument text-night text-sm leading-snug mb-2.5"
          style={{ fontWeight: 400 }}
        >
          {headline}
        </h3>
        <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(54,62,68,.72)" }}>
          {body}
        </p>
      </div>

      {/* Bottom hover bar */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cadet transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
      />
    </article>
  );
}

export function ProblemSection() {
  return (
    <section
      id="who-its-for"
      className="section bg-frosted"
      style={{ borderBottom: "1px solid var(--border-subtle)" }}
      aria-labelledby="problem-heading"
    >
      <div className="container-brand">
        {/* Header */}
        <div className="mb-14 max-w-[640px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="divider" aria-hidden="true" />
            <span className="label-eyebrow">Who this is for</span>
          </div>
          <h2
            id="problem-heading"
            className="font-monument text-night mb-5"
            style={{ fontSize: "clamp(1.9rem,3.5vw,3rem)", lineHeight: 1.12 }}
          >
            Most estates are more<br />complex than people realise.
          </h2>
          <p className="font-sans text-base leading-relaxed" style={{ color: "rgba(54,62,68,.72)" }}>
            If any of the following apply to you, a standard online will may not be
            sufficient — and may leave gaps you&apos;re not aware of.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRIGGERS.map((t) => (
            <TriggerCard key={t.idx} {...t} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p className="font-sans text-sm leading-relaxed max-w-[560px]" style={{ color: "rgba(54,62,68,.5)" }}>
            Our short assessment takes 3–4 minutes and helps us understand your situation
            before making any recommendations. No obligation. No sales pressure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;