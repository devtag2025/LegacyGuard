
export function StepProgress({ currentStep, totalSteps, progress }) {
  return (
    <div className="mb-10">

      {/* Track */}
      <div
        className="w-full h-[3px] bg-cadet/15 rounded-full overflow-hidden mb-4 relative"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep} of ${totalSteps}`}
      >
        {/* Fill */}
        <div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            width:      `${progress}%`,
            background: "#9DB4C0",
            transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Shimmer sweep */}
          <span
            aria-hidden="true"
            style={{
              position:   "absolute",
              inset:      0,
              background: "linear-gradient(90deg, transparent 0%, rgba(253,254,254,0.45) 50%, transparent 100%)",
              animation:  "shimmer 1.8s infinite",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      </div>

      {/* Label */}
      <p className="font-sans text-xs tracking-widest uppercase text-cadet/50">
        Step {currentStep} of {totalSteps}
      </p>

      {/* Shimmer keyframe — injected once */}
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}