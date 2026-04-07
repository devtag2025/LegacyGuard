
import { ROUTES } from "@/libs/constants";

export function CtaSection() {
  return (
    <section className="section bg-charcoal" aria-labelledby="cta-heading">
      <div className="container-brand">
        <div className="max-w-[640px]">

          <div className="flex items-center gap-3 mb-8">
            <span className="divider" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/60">Get started</span>
          </div>

          <h2
            id="cta-heading"
            className="font-monument text-frosted mb-5"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: 1.12 }}
          >
            Start by understanding
            <br />
            <span className="text-cadet">what your situation requires.</span>
          </h2>

         
          <p
            className="font-sans text-cadet/60 text-[15px] leading-relaxed mb-4 max-w-[480px]"
          >
            Our 3-minute assessment gives you clarity before you commit to anything.
          </p>

          <p
            className="font-sans text-cadet/50 text-[14px] leading-relaxed mb-10 max-w-[480px]"
          >
            No personal details required to begin. No obligation to proceed.
          </p>

          {/* CTAs — exact client copy */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href={ROUTES.ASSESSMENT}
              className="btn btn-primary"
              data-track="cta-bottom-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Start Your 3-Minute Assessment
            </a>
            <a
              href={ROUTES.BOOK}
              className="btn btn-ghost"
              data-track="cta-bottom-adviser"
              style={{ whiteSpace: "nowrap" }}
            >
              Speak to an Adviser
            </a>
          </div>

       
          <p
            className="font-sans text-sm"
            style={{ color: "rgba(157,180,192,0.45)" }}
          >
            Prefer a conversation first?{" "}
            <a
              href={ROUTES.BOOK}
              className="hover:text-cadet transition-colors underline underline-offset-2"
              style={{ color: "rgba(157,180,192,0.6)" }}
              data-track="cta-bottom-adviser-inline"
            >
              Speak to an Adviser — No Obligation, Just Clarity
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}