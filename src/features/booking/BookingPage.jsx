import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuestionnaireStore } from "@/store/useQuestionaireStore";

const FORMAT_OPTIONS = [
  { value: "phone", label: "Phone call", hint: "We call you at your preferred time" },
  { value: "zoom",  label: "Video call",  hint: "Zoom — link sent after booking" },
];

export function BookingPage() {
  const navigate     = useNavigate();
  const { triggerFlags, triggerSignals, answers, reset } = useQuestionnaireStore();
  const [format, setFormat] = useState("phone");

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "booking_page_view" });
    }
  }, []);

  const handleBooked = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event:        "consultation_booked",
        booking_type: format,
        flags_count:  triggerFlags.length,
        signals:      triggerSignals.join(","),
      });
    }
    navigate("/book/confirmed");
  };

  return (
    <div className="min-h-screen bg-night">
      <div className="container-brand max-w-[640px] mx-auto px-5 pt-12 pb-24">

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
            <span className="font-sans text-xs tracking-widest uppercase text-cadet/55">
              Book your consultation
            </span>
          </div>

          <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[2rem] leading-[1.2] mb-3">
            Choose a time that works for you.
          </h1>
          <p className="font-sans text-cadet/60 text-[15px] leading-relaxed">
            No obligation — this is simply a conversation to understand your situation.
            There's no commitment to proceed with anything afterwards.
          </p>
        </div>

        <div className="mb-8">
          <p className="font-sans text-xs tracking-widest uppercase text-cadet/50 mb-4">
            How would you prefer to speak?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {FORMAT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFormat(opt.value)}
                className={`
                  flex flex-col items-start gap-1 px-5 py-4 rounded-sm border text-left transition-all duration-150
                  ${format === opt.value
                    ? "border-cadet bg-cadet/8 text-frosted"
                    : "border-cadet/20 text-frosted/60 hover:border-cadet/40"
                  }
                `}
              >
                <span className="font-sans text-[15px]">{opt.label}</span>
                <span className="font-sans text-[12px] text-cadet/50">{opt.hint}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="w-full rounded-sm border border-cadet/15 bg-cadet/4 flex flex-col items-center justify-center"
          style={{ minHeight: 420 }}
        >
          {/* Cal.com / Calendly iframe mounts here */}
          {/* <iframe src={`https://cal.com/itrust121/${format}`} ... /> */}
          <p className="font-sans text-cadet/40 text-sm mb-6">Calendar embed loads here</p>
          <button
            type="button"
            onClick={handleBooked}
            className="px-8 py-3 font-sans text-[15px] bg-cadet text-night rounded-sm hover:bg-cadet/90 transition-colors"
          >
            Confirm booking (demo)
          </button>
        </div>

        {/* Reassurance */}
        <div className="mt-8 pt-8 border-t border-cadet/10 flex flex-col gap-2">
          {[
            "No obligation — this is not a sales call.",
            "Your answers are kept private and are used only to prepare for your conversation.",
            "You can cancel or reschedule at any time.",
          ].map((line, i) => (
            <p key={i} className="font-sans text-[13px] text-cadet/45 flex items-start gap-2">
              <span className="mt-[6px] w-1 h-1 min-w-[4px] rounded-full bg-cadet/30" aria-hidden="true" />
              {line}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
}