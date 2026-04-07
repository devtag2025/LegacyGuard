// src/features/questionnaire/QuestionStep.jsx
// Blueprint: "One question displayed per screen at all times"
// Each screen has one job — one question, one set of options, one Continue button.

import { OptionCard } from "./OptionCard";

export function QuestionStep({ question, selectedAnswer, onSelect, onNext, onBack, isLastStep }) {
  const hasAnswer = !!selectedAnswer;

  return (
    <div className="flex flex-col min-h-[calc(100vh-120px)]">

      {/* Question content */}
      <div className="flex-1">
        <h2 className="font-monument text-frosted text-[1.35rem] sm:text-[1.75rem] leading-[1.2] tracking-[-0.01em] mb-3">
          {question.heading}
        </h2>
        <p className="font-sans text-cadet/70 text-[15px] leading-relaxed mb-8 max-w-[480px]">
          {question.sub}
        </p>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option) => (
            <OptionCard
              key={option.value}
              option={option}
              isSelected={selectedAnswer === option.value}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-10 pb-6">
        <button
          type="button"
          onClick={onBack}
          className="font-sans text-sm text-cadet/50 hover:text-cadet/80 transition-colors"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasAnswer}
          className={`
            font-sans text-[15px] px-8 py-3 rounded-sm border transition-all duration-150
            ${hasAnswer
              ? "border-cadet text-cadet hover:bg-cadet hover:text-night"
              : "border-cadet/20 text-cadet/25 cursor-not-allowed"
            }
          `}
        >
          {isLastStep ? "See my results" : "Continue"}
        </button>
      </div>
    </div>
  );
}