const TESTIMONIALS = [
  {
    quote:
      "We'd assumed a basic will was enough. The assessment flagged that our property ownership and blended family situation made things more complicated than we'd realised. The adviser explained it clearly and we now have a structure we're confident in.",
    name: 'James & Carol W.',
    detail: 'Homeowners, Birmingham. Blended family.',
    initials: 'JW',
  },
  {
    quote:
      "I hadn't considered what would happen to my affairs if I lost capacity before I died. The LPA conversation was one I hadn't expected to have — but I'm glad I did.",
    name: 'Margaret T.',
    detail: 'Retired, Surrey.',
    initials: 'MT',
  },
  {
    quote:
      "The call wasn't what I expected. There was no pressure, no sales pitch. We talked through my situation and they told me honestly what they thought I needed — which turned out to be less than I thought.",
    name: 'David K.',
    detail: 'Self-employed, Manchester.',
    initials: 'DK',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-night overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="flex flex-col lg:flex-row min-h-[720px]">
        {/* ── LEFT — Full-height image with overlays ── */}
        <div className="relative lg:w-[44%] h-[320px] lg:h-auto flex-shrink-0 overflow-hidden">
          <img
            src="/public/images/hero-couple.png"
            alt="Couple at home — estate planning gives families clarity and confidence"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Night overlay 0.8 opacity */}
          <div className="absolute inset-0 bg-night opacity-60" aria-hidden="true" />

          {/* Right-edge fade — bleeds into content */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                'linear-gradient(to right, transparent 95%, rgba(19,19,19,1) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Bottom fade — mobile only */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: 'linear-gradient(to top, rgba(19,19,19,1) 0%, transparent 50%)',
            }}
            aria-hidden="true"
          />

          {/* Large decorative quote mark on the image */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="font-monument text-cadet/[0.08] select-none"
              style={{ fontSize: 'clamp(7rem,16vw,13rem)', lineHeight: 1 }}
            >
              &ldquo;
            </span>
          </div>

          {/* Label on the image */}
          <div className="absolute top-20 left-8 hidden lg:block">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-5 h-px bg-cadet opacity-40" aria-hidden="true" />
              <span className="label-eyebrow text-cadet/55">Real experiences</span>
            </div>
            <p
              className="font-monument text-frosted/60 leading-snug"
              style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', fontWeight: 300 }}
            >
              What people realised
              <br />
              <span className="text-cadet/80">after starting.</span>
            </p>
          </div>
        </div>

        {/* ── RIGHT — Heading + testimonials ── */}
        <div className="flex flex-col justify-center lg:w-[56%] px-6 md:px-12 xl:px-16 py-14 lg:py-20">
          {/* Mobile heading only */}
          <div className="lg:hidden mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow text-cadet/60">Real experiences</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-monument text-frosted"
              style={{ fontSize: 'clamp(1.55rem, 3vw, 2.4rem)', lineHeight: 1.15 }}
            >
              What people realised
              <br />
              <span className="text-cadet">after starting.</span>
            </h2>
          </div>

          {/* Desktop hidden heading (for a11y — visible heading is on image) */}
          <h2 id="testimonials-heading" className="sr-only">
            What people realised after starting
          </h2>

          {/* Testimonials — stacked vertically */}
          <div className="flex flex-col divide-y divide-cadet/[0.08]">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="py-8 first:pt-0 last:pb-0">
                <blockquote className="mb-5">
                  <p className="font-sans text-[0.9rem] text-frosted/65 leading-[1.75] italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  {/* Initials avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-cadet/18"
                    style={{ background: 'rgba(157,180,192,0.08)' }}
                    aria-hidden="true"
                  >
                    <span className="font-monument text-cadet text-[0.58rem] tracking-wider">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm text-frosted/82 font-medium">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-cadet/42 mt-0.5">{t.detail}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
