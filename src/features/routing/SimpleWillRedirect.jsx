import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useQuestionnaireStore } from "@/store/useQuestionaireStore";

export function SimpleWillRedirect() {
  const navigate = useNavigate();
  const { routingDecision, reset } = useQuestionnaireStore();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "cta_click_will", page: "simple_route", route: "simple-will" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-night flex items-center">
      <div className="container-brand max-w-[560px] mx-auto px-5 py-20 text-center">

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-8 h-px bg-cadet/40" />
          <span className="font-sans text-xs tracking-widest uppercase text-cadet/55">
            Based on your answers
          </span>
          <span className="block w-8 h-px bg-cadet/40" />
        </div>

        <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[2rem] leading-[1.2] mb-4">
          A standard will looks like the right fit for your situation.
        </h1>

        <p className="font-sans text-cadet/65 text-[15px] leading-relaxed mb-10 max-w-[440px] mx-auto">
          Your answers suggest a straightforward estate. You can proceed directly — and if anything
          changes, we're here.
        </p>

        <div className="flex flex-col gap-3 max-w-[360px] mx-auto">
          <button
            type="button"
            onClick={() => navigate("/will/start")}
            className="w-full py-4 font-sans text-[15px] font-medium bg-cadet text-night rounded-sm hover:bg-cadet/90 transition-colors"
          >
            Continue with my will
          </button>

          <button
            type="button"
            onClick={() => navigate("/book")}
            className="w-full py-4 font-sans text-[15px] text-cadet/70 border border-cadet/20 rounded-sm hover:border-cadet/40 hover:text-cadet transition-colors"
          >
            Speak to an adviser instead
          </button>
        </div>

        <button
          type="button"
          onClick={() => { reset(); navigate("/assessment"); }}
          className="mt-10 font-sans text-xs text-cadet/30 hover:text-cadet/50 transition-colors"
        >
          ← Start again
        </button>

      </div>
    </div>
  );
}