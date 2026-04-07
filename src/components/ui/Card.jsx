
import { clsx } from "clsx";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={clsx(
        "border border-cadet/15 rounded-sm bg-cadet/4 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

