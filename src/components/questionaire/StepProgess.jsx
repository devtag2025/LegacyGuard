export function StepProgress({ currentStep, totalSteps, progress }) {
  return (
    <div className="mb-10">
      <div
        className="w-full h-[3px] bg-cadet/20 rounded-full overflow-hidden mb-4"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep} of ${totalSteps}`}
      >
        <div
          className="h-full bg-cadet rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-sans text-xs tracking-widest uppercase text-cadet/55">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}