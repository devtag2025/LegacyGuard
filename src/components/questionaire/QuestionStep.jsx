
import { useRef, useState, useEffect } from 'react';
import { OptionCard } from './OptionCard';

const AUTO_ADVANCE_DELAY = 1200;

export function QuestionStep({
  question,
  selectedAnswer,
  onSelect,
  onNext,
  onBack,
}) {
  const timerRef = useRef(null);
  const [countdown, setCountdown] = useState(false);

  // Always keep a ref to the latest onNext to avoid stale closure bug
  const onNextRef = useRef(onNext);
  useEffect(() => {
    onNextRef.current = onNext;
  }, [onNext]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleSelect = (value) => {
    clearTimeout(timerRef.current);
    onSelect(value);

    setCountdown(true);
    timerRef.current = setTimeout(() => {
      setCountdown(false);
      onNextRef.current();
    }, AUTO_ADVANCE_DELAY);
  };

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight: 'calc(100dvh - 140px)',
        animation: 'qs-enter 0.32s cubic-bezier(0.22,1,0.36,1) both',
      }}
    >
      {/* Question */}
      <div className="flex-1">
        <h2
          className="font-monument text-frosted leading-[1.18] tracking-[-0.01em] mb-3"
          style={{
            fontSize: 'clamp(1.18rem, 4vw, 1.72rem)',
            animation: 'qs-fadeup 0.38s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          {question.heading}
        </h2>

        <p
          className="font-sans text-cadet/58 text-[15px] leading-relaxed mb-8 max-w-[480px]"
          style={{ animation: 'qs-fadeup 0.38s 0.06s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          {question.sub}
        </p>

        {/* Options */}
        <div
          className="flex flex-col gap-2.5"
          style={{ animation: 'qs-fadeup 0.4s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          {question.options.map((option, i) => (
            <OptionCard
              key={option.value}
              option={option}
              isSelected={selectedAnswer === option.value}
              onSelect={handleSelect}
              index={i}
              isMobileMode={false}
            />
          ))}
        </div>
      </div>

      {/* Bottom nav */}
      <div
        className="flex items-center justify-between pt-8 pb-2"
        style={{ animation: 'qs-fadeup 0.4s 0.18s cubic-bezier(0.22,1,0.36,1) both' }}
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
            <path
              d="M9 11L5 7l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>

        {/* Right side — auto-advance countdown */}
        <div className="flex items-center gap-3">
          {/* Countdown bar — shown after any selection */}
          {countdown && (
            <div
              className="flex items-center gap-2.5"
              style={{ animation: 'qs-fadeup 0.2s ease both' }}
            >
              <span className="font-sans text-[12px] text-cadet/50 tracking-wide">
                Moving on
              </span>
              <div
                className="relative overflow-hidden rounded-full"
                style={{ width: 48, height: 3, background: 'rgba(157,180,192,0.15)' }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#9DB4C0',
                    borderRadius: 99,
                    animation: `countdown-fill ${AUTO_ADVANCE_DELAY}ms linear both`,
                    transformOrigin: 'left center',
                  }}
                />
              </div>
            </div>
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
