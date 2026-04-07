// src/features/questionnaire/QuestionnairePage.jsx
// Module 8.1 — Step container. Renders StepProgress + QuestionStep.
// Fires funnel_start GA4 event on mount.

import { useEffect } from "react";
import { StepProgress } from "./StepProgress";
import { QuestionStep } from "../../components/questionaire/QuestionStep";
import { useQuestionnaire } from "./useQuestionnaire";
import { QUESTIONS } from "./questions.config";

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

  // Fire funnel_start on first mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event:    "funnel_start",
        source:   new URLSearchParams(window.location.search).get("utm_source") ?? "(direct)",
        campaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? "",
        medium:   new URLSearchParams(window.location.search).get("utm_medium") ?? "",
      });
    }
  }, []);

  // Auto-advance when user selects an answer on non-final steps
  // Keeps it feeling like a guided journey — not a form
  const handleSelect = (value) => {
    selectAnswer(value);
    // Small delay so the selection registers visually before moving
    if (!isLastStep) {
      setTimeout(() => {
        // Only auto-advance if the selection is for this step
        goNext();
      }, 280);
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-night">
      <div className="container-brand max-w-[600px] mx-auto px-5 pt-10 pb-16">

        <StepProgress
          currentStep={currentStep}
          totalSteps={QUESTIONS.length}
          progress={progress}
        />

        <QuestionStep
          question={currentQuestion}
          selectedAnswer={currentAnswer}
          onSelect={handleSelect}
          onNext={goNext}
          onBack={goBack}
          isLastStep={isLastStep}
        />

      </div>
    </div>
  );
}