import { ROUTES } from "@/libs/constants";
export function CtaSection() {
  return (
    <section className="section bg-charcoal" aria-labelledby="cta-heading">
      <div className="container-brand">
        <div className="max-w-[600px]">
          <div className="flex items-center gap-3 mb-8">
            <span className="divider" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/60">Get started</span>
          </div>

          <h2
            id="cta-heading"
            className="font-monument text-frosted mb-5"
            style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.8rem)', lineHeight: 1.12 }}
          >
            Start by understanding
            <br />
            <span className="text-cadet">what your situation requires.</span>
          </h2>

          <p className="font-sans text-cadet/58 text-[15px] leading-relaxed mb-10 max-w-[460px]">
            Our 3-minute assessment gives you clarity before you commit to anything. No
            personal details required to begin.
          </p>

          {/* Directive 6 — primary + secondary only */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={ROUTES.ASSESSMENT}
              className="btn btn-primary whitespace-nowrap"
              data-track="cta-bottom-primary"
            >
              Start Your 3-Minute Assessment
            </a>
            <a
              href={ROUTES.BOOK}
              className="btn btn-ghost whitespace-nowrap"
              data-track="cta-bottom-adviser"
            >
              Speak to an Adviser
            </a>
          </div>

          {/* Directive 9 — phone in consultation section */}
          <div className="flex items-center gap-3 pt-8 border-t border-cadet/10">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9DB4C0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 01.01 2.88 2 2 0 012 .7h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.72a16 16 0 006.29 6.29l1.28-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <p className="font-sans text-cadet/50 text-sm">
              Prefer to speak directly?{' '}
              <a
                href="tel:02045832632"
                className="text-cadet hover:text-frosted transition-colors font-medium"
              >
                020 4583 2632
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
