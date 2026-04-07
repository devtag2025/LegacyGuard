
import { clsx } from "clsx";

const VARIANTS = {
  primary: "bg-cadet text-night border border-cadet hover:bg-cadet/85 hover:border-cadet/85",
  ghost:   "bg-transparent text-cadet border border-cadet/35 hover:border-cadet hover:bg-cadet/6",
  text:    "bg-transparent text-cadet/60 border-none hover:text-cadet px-0 py-0",
};

const SIZES = {
  sm: "text-sm px-5 py-2.5",
  md: "text-[15px] px-7 py-3",
  lg: "text-[15px] px-9 py-4",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center font-sans rounded-sm transition-all duration-150 cursor-pointer",
        VARIANTS[variant],
        SIZES[size],
        fullWidth && "w-full",
        disabled && "opacity-30 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}