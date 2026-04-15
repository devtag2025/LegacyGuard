import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function BookingConfirmation() {
  const { state } = useLocation();
  const format = state?.format ?? 'phone';
  const isMeet = format === "meet";

  useEffect(() => {
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'thank_you_page', lead_type: 'adviser' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-night flex items-center">
      <div className="container-brand max-w-140 mx-auto px-5 py-20">
        {/* Confirmation mark */}
        <div
          className="w-11 h-11 rounded-full border border-cadet/35 flex items-center justify-center mb-8"
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4.5 4.5L16 6"
              stroke="rgba(157,180,192,0.65)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
          <span className="label-eyebrow text-cadet/55">You're booked</span>
        </div>

        {/* Heading */}
        <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[2rem] leading-[1.2] mb-4">
          Your consultation is confirmed.
        </h1>

        {/* Subtext — format-aware */}
        <p className="font-sans text-cadet/60 text-[15px] leading-relaxed mb-10">
          {isMeet
            ? "A Google Meet link will be sent to your email ahead of the call. Your adviser will review what you've shared beforehand — so there's no need to repeat yourself."
            : "You'll receive a confirmation by email shortly. Your adviser will review what you've shared before the call — so there's no need to repeat yourself."}
        </p>

        {/* What to expect */}
        <div
          className="rounded-sm p-6 mb-10"
          style={{
            border: '1px solid rgba(157,180,192,0.13)',
            background: 'rgba(157,180,192,0.04)',
          }}
        >
          <p className="label-eyebrow text-cadet/45 mb-6">What to expect</p>

          <div className="flex flex-col gap-6">
            {[
              {
                step: '01',
                title: 'A conversation, not a sales call.',
                body: "Your adviser's goal is to understand your situation — not to sell you anything in the first call.",
              },
              {
                step: '02',
                title: 'Your answers will be reviewed beforehand.',
                body: 'The adviser will have context from your assessment — so the conversation starts where it should.',
              },
              {
                step: '03',
                title: 'No obligation to proceed.',
                body: "After the call, you'll have a clear picture of what your situation requires. What you do next is entirely up to you.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="font-monument text-[11px] text-cadet/35 tracking-widest mt-0.5 min-w-[24px]">
                  {item.step}
                </span>
                <div>
                  <p className="font-sans text-[14px] text-frosted/80 font-medium mb-1">
                    {item.title}
                  </p>
                  <p className="font-sans text-[13px] text-cadet/50 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to home */}
        <a
          href="/"
          className="font-sans text-sm text-cadet/35 hover:text-cadet/60 transition-colors flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 11L5 7l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Return to homepage
        </a>
      </div>
    </div>
  );
}
export default BookingConfirmation;
