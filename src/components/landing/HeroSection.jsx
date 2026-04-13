
const SENSE_CHECK_ITEMS = [
  'You own a property',
  'You have children or a blended family',
  "You haven't reviewed your will in several years",
  "You're unsure how tax or family changes may affect your estate",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-night overflow-hidden min-h-dvh"
      aria-label="Page introduction"
    >
      {/* Particle animation */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 opacity-45"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 90% at 68% 40%, black 20%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 90% at 68% 40%, black 20%, transparent 78%)',
        }}
      >
      </div>

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-cadet) 1px,transparent 1px),linear-gradient(90deg,var(--color-cadet) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(to top, rgba(19,19,19,0.7) 0%, transparent 55%)',
        }}
      />

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 min-h-dvh flex flex-col lg:flex-row">
        {/* ── LEFT — Copy ── */}
        <div className="flex flex-col justify-center lg:w-[50%] px-6 md:px-12 xl:px-20 pt-10 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-cadet opacity-40" aria-hidden="true" />
            <span className="label-eyebrow text-cadet opacity-60">
              UK Estate Planning
            </span>
          </div>

          <h1 className="font-monument text-frosted leading-[1.08] tracking-[-0.02em] mb-5 text-[clamp(1.75rem,3vw,2.8rem)]">
            Start your will — and make sure it actually does{' '}
            <span className="text-cadet">what you intend.</span>
          </h1>

          <p className="font-sans text-cadet/70 text-[0.95rem] leading-relaxed mb-5 max-w-[480px]">
            Most people only realise there are gaps when it's too late — this helps you
            check now.
          </p>

          <p className="font-sans text-frosted/50 text-[0.9rem] leading-[1.75] mb-5 max-w-[440px]">
            Most people assume a standard will is enough. For many homeowners and
            families, it isn't. Our assessment helps you understand what your situation
            actually requires.
          </p>

          <p className="font-monument font-light text-frosted/42 text-[0.84rem] leading-[1.65] mb-8 max-w-[400px] border-l-2 border-cadet/18 pl-4">
            The decisions you make today will shape what your family receives — and how.
          </p>

          {/* Sense check — mobile only */}
          <div className="lg:hidden mb-8">
            <SenseCheckCard />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
            <a
              href="/assessment"
              className="btn btn-ghost whitespace-nowrap"
              data-track="hero-cta-primary"
            >
              Start Your 3-Minute Assessment
            </a>
            <a
              href="/book"
              className="font-sans text-cadet/65 text-sm tracking-wide hover:text-cadet transition-colors"
              data-track="hero-cta-book"
            >
              Speak to an Adviser
            </a>
          </div>

          {/* Trust signals */}
          <ul
            className="flex flex-wrap gap-x-6 gap-y-2"
            role="list"
            aria-label="Trust indicators"
          >
            {[
              'UK-based estate planning services',
              'Delivered by qualified professionals',
              'No obligation consultation',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 0L7.5 4.5H12L8.5 7L10 12L6 9.5L2 12L3.5 7L0 4.5H4.5L6 0Z"
                    stroke="#9DB4C0"
                    strokeWidth="1"
                    fill="none"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-[0.7rem] tracking-wide text-cadet/62">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT — Image top, sense check bottom ── */}
        <div className="hidden lg:flex lg:flex-col lg:w-[50%] pt-[70px]">
          {/* Image — top 60% of right column */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="/public/images/hero-family.png"
              alt="Family on the beach at sunset — planning ahead protects the people you love"
              className="w-full h-full object-cover object-center"
            />
            {/* Left edge fade — blends with copy column */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(19,19,19,0.95) 0%, rgba(19,19,19,0.2) 35%, transparent 65%)',
              }}
              aria-hidden="true"
            />
            {/* Bottom fade — transitions into card below */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(19,19,19,1) 0%, transparent 35%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Sense check card — sits in its own space below image */}
          <div className="bg-night px-8 pb-10 pt-2">
            <SenseCheckCard />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{
          background:
            'linear-gradient(to right,transparent,rgba(157,180,192,0.25),transparent)',
        }}
      />
    </section>
  );
}

function SenseCheckCard() {
  return (
    <div className="w-full border border-cadet/[0.16] rounded-sm bg-night/80 backdrop-blur-xl">
      <div className="px-5 py-4 flex items-center gap-3 border-b border-cadet/[0.08]">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cadet opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cadet" />
        </span>
        <p className="font-sans text-cadet/62 text-[0.68rem] tracking-[0.13em] uppercase font-medium">
          Before you begin, a quick sense check…
        </p>
      </div>

      <div className="px-5 pt-4 pb-1">
        <p className="font-sans text-cadet/45 text-[0.79rem] leading-relaxed italic">
          In most cases, a standard will works. But if any of the following apply…
        </p>
      </div>

      <ul className="px-5 py-4 grid grid-cols-2 gap-x-4 gap-y-3">
        {SENSE_CHECK_ITEMS.map((item, i) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className="font-monument text-[0.58rem] tracking-widest flex-shrink-0 mt-0.5 text-cadet/32"
              aria-hidden="true"
            >
              0{i + 1}
            </span>
            <span className="font-sans text-frosted/75 text-[0.82rem] leading-[1.45]">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="px-5 py-4 border-t border-cadet/[0.08]">
        <p className="font-sans text-cadet/50 text-[0.79rem] leading-[1.6] italic">
          If any of these apply, it's worth understanding your situation properly before
          proceeding.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
