/**
 * TestimonialsSection
 * File: src/features/landing/TestimonialsSection.jsx
 *
 * Human, family-specific, scenario-based — no star ratings, no volume claims.
 */

const TESTIMONIALS = [
  {
    quote: "We have two children from my first marriage and a shared property with my husband. I assumed our wills covered everything. The assessment showed several gaps we hadn't considered. We now have proper structures in place.",
    name: "Sarah C.",
    descriptor: "Homeowner, Surrey",
    initials: "SC",
  },
  {
    quote: "What I found useful was being guided through the right questions first, rather than just being handed a form to complete. The adviser conversation was straightforward and not at all pushy.",
    name: "David M.",
    descriptor: "Retired, Yorkshire",
    initials: "DM",
  },
  {
    quote: "We bought our second property last year and it made me realise our old wills weren't adequate. The assessment flagged the IHT implications immediately. We wouldn't have known to even ask about that.",
    name: "Priya & Raj L.",
    descriptor: "Homeowners, London",
    initials: "PL",
  },
];

function TestiCard({ quote, name, descriptor, initials }) {
  return (
    <article
      className="flex flex-col justify-between gap-8 rounded-sm"
      style={{
        padding: "2.25rem",
        border: "1px solid rgba(157,180,192,.15)",
        background: "rgba(54,62,68,.35)",
        minHeight: 280,
      }}
    >
      {/* Quote mark */}
      <svg width="26" height="18" viewBox="0 0 28 20" fill="none" aria-hidden="true">
        <path d="M0 20V12.571C0 8.127 1.333 4.635 4 2.095 6.667.698 9.778.001 13.333 0L14.667 2.286C11.778 3.048 9.778 4.254 8.667 5.905 7.556 7.556 7 9.333 7 11.238V12h7V20H0Z" fill="#9DB4C0" fillOpacity=".25"/>
      </svg>

      <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "rgba(253,254,254,.82)" }}>
        &ldquo;{quote}&rdquo;
      </p>

      <footer className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ border: "1px solid rgba(157,180,192,.35)" }}
          aria-hidden="true"
        >
          <span className="font-monument text-cadet text-xs">{initials}</span>
        </div>
        <div>
          <p className="font-sans text-frosted text-sm font-medium leading-snug">{name}</p>
          <p className="font-sans text-xs tracking-wide" style={{ color: "rgba(157,180,192,.65)", marginTop: 2 }}>
            {descriptor}
          </p>
        </div>
      </footer>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section bg-night"
      aria-labelledby="testi-heading"
    >
      <div className="container-brand">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow" style={{ color: "rgba(157,180,192,.65)" }}>In their words</span>
            </div>
            <h2
              id="testi-heading"
              className="font-monument text-frosted"
              style={{ fontSize: "clamp(1.8rem,3vw,2.7rem)", lineHeight: 1.12 }}
            >
              Real families.<br />Real situations.
            </h2>
          </div>
          <p
            className="font-sans text-xs leading-relaxed text-right hidden sm:block max-w-[160px]"
            style={{ color: "rgba(157,180,192,.38)" }}
          >
            Names and identifying details changed to protect privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <TestiCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}