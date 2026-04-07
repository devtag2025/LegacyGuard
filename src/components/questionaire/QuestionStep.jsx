
import { useRef, useState, useEffect } from "react";
import { OptionCard } from "./OptionCard";

const MOBILE_DELAY = 1200;

// Detect touch once at module level — stable, never stale
const IS_TOUCH_DEVICE =
  typeof window !== "undefined" &&
  (navigator.maxTouchPoints > 0 || window.matchMedia("(pointer: coarse)").matches);

export function QuestionStep({
  question,
  selectedAnswer,
  onSelect,
  onNext,
  onBack,
  isLastStep,
}) {
  const hasAnswer  = !!selectedAnswer;
  const timerRef   = useRef(null);
  const [countdown, setCountdown] = useState(false);

  // THE FIX — always keep a ref to the latest onNext.
  // setTimeout captures the old onNext closure (where currentAnswer was null).
  // Using a ref means the timeout always calls the fresh version that has
  // the updated answer in its closure, so goNext no longer returns early.
  const onNextRef = useRef(onNext);
  useEffect(() => { onNextRef.current = onNext; }, [onNext]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSelect = (value) => {
    clearTimeout(timerRef.current);
    onSelect(value);

    if (!isLastStep && IS_TOUCH_DEVICE) {
      setCountdown(true);
      timerRef.current = setTimeout(() => {
        setCountdown(false);
        onNextRef.current(); // ← always the fresh onNext, never stale
      }, MOBILE_DELAY);
    }
  };

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight: "calc(100dvh - 140px)",
        animation: "qs-enter 0.32s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      {/* Question */}
      <div className="flex-1">
        <h2
          className="font-monument text-frosted leading-[1.18] tracking-[-0.01em] mb-3"
          style={{
            fontSize:  "clamp(1.18rem, 4vw, 1.72rem)",
            animation: "qs-fadeup 0.38s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          {question.heading}
        </h2>

        <p
          className="font-sans text-cadet/58 text-[15px] leading-relaxed mb-8 max-w-[480px]"
          style={{ animation: "qs-fadeup 0.38s 0.06s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {question.sub}
        </p>

        {/* Options */}
        <div
          className="flex flex-col gap-2.5"
          style={{ animation: "qs-fadeup 0.4s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {question.options.map((option, i) => (
            <OptionCard
              key={option.value}
              option={option}
              isSelected={selectedAnswer === option.value}
              onSelect={handleSelect}
              index={i}
              isMobileMode={IS_TOUCH_DEVICE}
            />
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-between pt-8 pb-2"
        style={{ animation: "qs-fadeup 0.4s 0.18s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        {/* Back */}
        <button
          type="button"
          onClick={() => {
            clearTimeout(timerRef.current);
            setCountdown(false);
            onBack();
          }}
          className="flex items-center gap-1.5 font-sans text-sm text-cadet/35 hover:text-cadet/65 transition-colors duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        {/* Right side — mobile countdown OR desktop next button */}
        <div className="flex items-center gap-3">

          {/* ── MOBILE: countdown bar + label ── */}
          {countdown && IS_TOUCH_DEVICE && !isLastStep && (
            <div className="flex items-center gap-2.5" style={{ animation: "qs-fadeup 0.2s ease both" }}>
              <span className="font-sans text-[12px] text-cadet/50 tracking-wide">
                Moving on
              </span>
              {/* Countdown track */}
              <div
                className="relative overflow-hidden rounded-full"
                style={{ width: 48, height: 3, background: "rgba(157,180,192,0.15)" }}
              >
                <span
                  style={{
                    position:   "absolute",
                    inset:      0,
                    background: "#9DB4C0",
                    borderRadius: 99,
                    animation:  `countdown-fill ${MOBILE_DELAY}ms linear both`,
                    transformOrigin: "left center",
                  }}
                />
              </div>
            </div>
          )}

          {/* ── DESKTOP: Next button (non-last steps) ── */}
          {!IS_TOUCH_DEVICE && !isLastStep && (
            <button
              type="button"
              onClick={onNext}
              disabled={!hasAnswer}
              style={{
                transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
                opacity:    hasAnswer ? 1 : 0.3,
                transform:  hasAnswer ? "translateY(0)" : "translateY(2px)",
              }}
              className={`
                font-sans text-[14px] px-7 py-3 rounded-sm border
                ${hasAnswer
                  ? "border-cadet/50 text-cadet hover:bg-cadet hover:text-night hover:border-cadet active:scale-[0.97]"
                  : "border-cadet/12 text-cadet/20 cursor-not-allowed"
                }
              `}
            >
              Next
            </button>
          )}

          {/* ── LAST STEP: always show confirm button ── */}
          {isLastStep && (
            <button
              type="button"
              onClick={onNext}
              disabled={!hasAnswer}
              style={{
                transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
                opacity:    hasAnswer ? 1 : 0.28,
              }}
              className={`
                font-sans text-[14px] px-7 py-3 rounded-sm border
                ${hasAnswer
                  ? "border-cadet/50 text-cadet hover:bg-cadet hover:text-night hover:border-cadet active:scale-[0.97]"
                  : "border-cadet/12 text-cadet/20 cursor-not-allowed"
                }
              `}
            >
              See my results
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes qs-enter {
          from { opacity:0; transform:translateX(18px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes qs-fadeup {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes countdown-fill {
          from { transform:scaleX(0); }
          to   { transform:scaleX(1); }
        }
      `}</style>
    </div>
  );
}