
export function ProgressBar({ value = 0, max = 100, className = "" }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      className={`w-full h-[3px] bg-cadet/20 rounded-full overflow-hidden ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
    >
      <div
        className="h-full bg-cadet rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
