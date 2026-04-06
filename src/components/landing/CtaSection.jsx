
export function CtaSection() {
  return (
    <section
      id="get-started"
      className="section"
      style={{ background: "var(--bg-cadet-wash)" }}
      aria-labelledby="cta-heading"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" aria-hidden="true" />
              <span className="label-eyebrow">Get started</span>
            </div>
            <h2
              id="cta-heading"
              className="font-monument text-night mb-8"
              style={{ fontSize: "clamp(1.9rem,3.5vw,3rem)", lineHeight: 1.1 }}
            >
              The right plan starts<br />with the right{" "}
              <span style={{ color: "rgba(54,62,68,.5)" }}>questions.</span>
            </h2>
            <p className="font-sans text-base leading-relaxed max-w-[460px]" style={{ color: "rgba(54,62,68,.65)" }}>
              Our assessment helps identify what your estate actually requires — before
              suggesting any service or product. No pressure, no obligation, no commitment.
            </p>
          </div>

          <div className="bg-night rounded-sm overflow-hidden" style={{ border: "1px solid rgba(54,62,68,.3)" }}>
            <div
              aria-hidden="true"
              style={{ height: 3, background: "linear-gradient(to right,rgba(157,180,192,.5),var(--color-cadet),rgba(157,180,192,.5))" }}
            />

            <div className="p-10 flex flex-col gap-8">
              {/* Path 1 */}
              <div className="flex flex-col gap-4">
                <span className="label-eyebrow" style={{ color: "rgba(157,180,192,.65)" }}>
                  Option 1 — Start online
                </span>
                <h3 className="font-monument text-frosted text-xl leading-snug" style={{ fontWeight: 400 }}>
                  Begin your assessment
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(157,180,192,.7)" }}>
                  A 3–4 minute guided assessment. We&apos;ll tell you clearly what your situation
                  requires and why — before recommending anything.
                </p>
                <a href="/assessment" className="btn btn-ghost w-full" data-track="cta-assessment">
                  Start your assessment →
                </a>
              </div>

              {/* Divider */}
              <div className="relative" style={{ borderTop: "1px solid rgba(157,180,192,.12)" }}>
                <span
                  className="absolute font-sans text-xs tracking-wider"
                  style={{
                    top: "50%", left: "50%",
                    transform: "translate(-50%,-50%)",
                    background: "var(--color-night)",
                    padding: "0 12px",
                    color: "rgba(157,180,192,.4)",
                  }}
                >
                  or
                </span>
              </div>

              {/* Path 2 */}
              <div className="flex flex-col gap-4">
                <span className="label-eyebrow" style={{ color: "rgba(157,180,192,.65)" }}>
                  Option 2 — Speak to us
                </span>
                <h3 className="font-monument text-frosted text-xl leading-snug" style={{ fontWeight: 400 }}>
                  Book an introductory call
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "rgba(157,180,192,.7)" }}>
                  Prefer to speak to someone first? Book a no-obligation call with one of our
                  advisers. Phone or Zoom — whichever you prefer.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Phone call", href: "/book?medium=phone" },
                    { label: "Zoom call",  href: "/book?medium=zoom"  },
                  ].map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className="font-sans text-xs tracking-wider text-cadet text-center py-3 rounded-sm transition-colors"
                      style={{
                        border: "1.5px solid rgba(157,180,192,.3)",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                      }}
                      data-track={`cta-${btn.label.toLowerCase().replace(" ", "-")}`}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Reassurance */}
              <p
                className="font-sans text-xs text-center leading-snug"
                style={{ color: "rgba(157,180,192,.38)" }}
              >
                No obligation. No personal details required to start the assessment.
                All consultations are confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}