import { useEffect } from "react";
import { useQuestionnaireStore } from "@/store/useQuestionaireStore";

export function BookingConfirmation() {
  const { reset } = useQuestionnaireStore();

  useEffect(() => {
    // Fire GA4 thank_you_page event
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "thank_you_page", lead_type: "adviser" });
    }
    // Clear questionnaire state — journey complete
    reset();
  }, [reset]);

  return (
    <div className="min-h-screen bg-night flex items-center">
      <div className="container-brand max-w-[560px] mx-auto px-5 py-20">

        {/* Confirmation mark */}
        <div
          className="w-12 h-12 rounded-full border border-cadet/40 flex items-center justify-center mb-8"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4.5 4.5L16 6" stroke="rgba(157,180,192,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
          <span className="font-sans text-xs tracking-widest uppercase text-cadet/55">
            You're booked
          </span>
        </div>

        <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[2rem] leading-[1.2] mb-4">
          Your consultation is confirmed.
        </h1>

        <p className="font-sans text-cadet/65 text-[15px] leading-relaxed mb-10">
          You'll receive a confirmation shortly. Your adviser will review what you've shared
          before the call — so there's no need to repeat yourself.
        </p>

        {/* What to expect */}
        <div className="border border-cadet/15 rounded-sm bg-cadet/4 p-6 mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-cadet/50 mb-5">
            What to expect
          </p>
          <div className="flex flex-col gap-5">
            {[
              {
                step: "01",
                title: "A conversation, not a sales call.",
                body: "Your adviser's goal is to understand your situation — not to sell you anything in the first call.",
              },
              {
                step: "02",
                title: "Your answers will be reviewed beforehand.",
                body: "The adviser will have context from your assessment — so the conversation starts where it should.",
              },
              {
                step: "03",
                title: "No obligation to proceed.",
                body: "After the call, you'll have a clear picture of what your situation requires. What you do next is entirely up to you.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="font-monument text-[11px] text-cadet/40 tracking-widest mt-0.5 min-w-[24px]">
                  {item.step}
                </span>
                <div>
                  <p className="font-sans text-[14px] text-frosted/85 font-medium mb-1">{item.title}</p>
                  <p className="font-sans text-[13px] text-cadet/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="/"
          className="font-sans text-sm text-cadet/40 hover:text-cadet/60 transition-colors"
        >
          ← Return to homepage
        </a>

      </div>
    </div>
  );
}