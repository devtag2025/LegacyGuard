// src/features/landing/TestimonialsSection.jsx
// Client image 2 (couple dancing) shown as a proper <img> element.
// No backgroundImage style props.

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
    <section className="section bg-night" aria-labelledby="testimonials-heading">
      <div className="container-brand">
        {/* Image + heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:gap-16 mb-14">
          {/* Client image 2 — couple, left side */}
          <div className="hidden lg:block lg:flex-shrink-0 lg:w-[340px] relative rounded-sm overflow-hidden">
            <img
              src="/public/images/hero-couple.png"
              alt="Couple at home — estate planning gives families clarity and confidence"
              className="w-full h-[260px] object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, transparent 60%, rgba(19,19,19,0.8) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow text-cadet/60">Real experiences</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-monument text-frosted"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)', lineHeight: 1.15 }}
            >
              What people realised
              <br />
              <span className="text-cadet">after starting.</span>
            </h2>
          </div>
        </div>

        {/* Mobile image */}
        <div className="lg:hidden mb-10 rounded-sm overflow-hidden">
          <img
            src="/images/hero-couple.jpg"
            alt="Couple at home — estate planning gives families clarity and confidence"
            className="w-full h-[200px] object-cover object-center"
          />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col gap-5">
              <blockquote className="border-l border-cadet/22 pl-5 flex-1">
                <p className="font-sans text-[14px] text-frosted/70 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3">
                {/* Initials avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 border border-cadet/20"
                  style={{ background: 'rgba(157,180,192,0.10)' }}
                  aria-hidden="true"
                >
                  <span className="font-monument text-cadet text-[0.6rem] tracking-wider">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-frosted/85 font-medium">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-cadet/45 mt-0.5">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
