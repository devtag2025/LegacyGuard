export function OptionCard({ option, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.value)}
      className={`
        w-full flex items-start gap-4 px-5 py-4 rounded-sm text-left
        border transition-all duration-150
        min-h-[56px]
        ${isSelected
          ? "border-cadet bg-cadet/8 text-frosted"
          : "border-cadet/20 bg-transparent text-frosted/80 hover:border-cadet/50 hover:bg-cadet/4"
        }
      `}
      aria-pressed={isSelected}
    >
      <span
        className={`
          mt-0.5 w-[18px] h-[18px] min-w-[18px] rounded-full border flex items-center justify-center
          transition-all duration-150
          ${isSelected ? "border-cadet bg-cadet" : "border-cadet/40"}
        `}
        aria-hidden="true"
      >
        {isSelected && (
          <span className="w-[7px] h-[7px] rounded-full bg-night block" />
        )}
      </span>
      <span className="flex flex-col">
        <span className="font-sans text-[15px] leading-snug">{option.label}</span>
        {option.hint && (
          <span className="font-sans text-[13px] text-cadet/55 mt-0.5">{option.hint}</span>
        )}
      </span>
    </button>
  );
}