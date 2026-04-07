// src/features/routing/TriggerMomentPage.jsx
// Module 9.1 — The most critical advisory messaging page.
// Blueprint: "Personalisation is key: the flags shown must match what was actually triggered."
// Tone: advisory, suggestive, non-prescriptive. Never a sales pitch.

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuestionnaireStore } from "@/store/useQuestionaireStore";
import { FlagSummary } from "./FlagSummary";
import { DualCTA } from "./DualCta";

export function TriggerMomentPage() {
  const navigate  = useNavigate();
  const { triggerFlags, routingDecision, reset } = useQuestionnaireStore();

  // Guard: if user lands here without completing questionnaire, redirect back
  useEffect(() => {
    if (!routingDecision) {
      navigate("/assessment", { replace: true });
      return;
    }

    // Fire GA4 trigger_moment_view
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event:         "trigger_moment_view",
        flags_triggered: triggerFlags.length,
        route:         routingDecision,
      });
    }
  }, [routingDecision, triggerFlags, navigate]);

  const handleAdviserClick = () => {
    // Fire GA4 cta_click_adviser
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "cta_click_adviser", page: "trigger_moment" });
    }
    navigate("/book");
  };

  if (!routingDecision) return null;

  return (
    <div className="min-h-screen bg-night">
      <div className="container-brand max-w-[600px] mx-auto px-5 pt-12 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
          <span className="font-sans text-xs tracking-widest uppercase text-cadet/55">
            Based on your answers
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[2rem] leading-[1.2] tracking-[-0.01em] mb-4">
          Your situation may benefit from a brief conversation with an adviser.
        </h1>

        {/* Subtext — advisory, not directive */}
        <p className="font-sans text-cadet/65 text-[15px] leading-relaxed mb-8 max-w-[500px]">
          Many people in a similar position find it helpful to speak with someone before finalising
          their will — simply to make sure everything is structured in the way they intend.
        </p>

        {/* Personalised flags — what the user's answers revealed */}
        <FlagSummary flags={triggerFlags} />

        {/* Dual CTA — both paths always accessible */}
        <DualCTA onAdviserClick={handleAdviserClick} />

        {/* Restart option — subtle, below the fold */}
        <div className="mt-12 pt-8 border-t border-cadet/10">
          <button
            type="button"
            onClick={() => { reset(); navigate("/assessment"); }}
            className="font-sans text-xs text-cadet/35 hover:text-cadet/55 transition-colors"
          >
            ← Start the assessment again
          </button>
        </div>

      </div>
    </div>
  );
}