
import { useEffect } from "react";
import { StepProgress } from "@/components/questionaire/StepProgess";
import { QuestionStep } from "@/components/questionaire/QuestionStep";
import { useQuestionnaire } from "@/hooks/useQuestionaire";
import { QUESTIONS } from "@/config/questions.config";

export function QuestionnairePage() {
  const {
    currentStep,
    currentQuestion,
    currentAnswer,
    isLastStep,
    progress,
    selectAnswer,
    goNext,
    goBack,
  } = useQuestionnaire();

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      const p = new URLSearchParams(window.location.search);
      window.dataLayer.push({
        event:    "funnel_start",
        source:   p.get("utm_source")   ?? "(direct)",
        campaign: p.get("utm_campaign") ?? "",
        medium:   p.get("utm_medium")   ?? "",
      });
    }
  }, []);

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-night">
      <div className="mx-auto px-5 pt-10 pb-16" style={{ maxWidth: 600 }}>

        <StepProgress
          currentStep={currentStep}
          totalSteps={QUESTIONS.length}
          progress={progress}
        />

        {/* key forces remount on each step → animation replays cleanly */}
        <QuestionStep
          key={currentStep}
          question={currentQuestion}
          selectedAnswer={currentAnswer}
          onSelect={selectAnswer}
          onNext={goNext}
          onBack={goBack}
          isLastStep={isLastStep}
        />

      </div>
    </div>
  );
}