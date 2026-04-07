
import { useRef } from "react";

export function OptionCard({ option, isSelected, onSelect, index = 0, isMobileMode = false }) {
  const cardRef = useRef(null);

  const handleClick = (e) => {
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const x    = (e.clientX ?? rect.left + rect.width / 2) - rect.left;
      const y    = (e.clientY ?? rect.top  + rect.height / 2) - rect.top;
      const size = Math.max(rect.width, rect.height) * 2.2;
      const el   = document.createElement("span");
      el.style.cssText = `
        position:absolute;left:${x-size/2}px;top:${y-size/2}px;
        width:${size}px;height:${size}px;border-radius:50%;
        background:rgba(157,180,192,0.10);transform:scale(0);
        animation:oc-ripple 0.55s ease-out forwards;pointer-events:none;
      `;
      card.appendChild(el);
      setTimeout(() => el.remove(), 650);
    }
    onSelect(option.value);
  };

  const liquidGlass = {
    background:     "rgba(157,180,192,0.08)",
    backdropFilter: "blur(14px) saturate(160%)",
    WebkitBackdropFilter: "blur(14px) saturate(160%)",
    borderColor:    "rgba(157,180,192,0.55)",
    boxShadow: [
      "0 0 0 1px rgba(157,180,192,0.20)",          // outer glow ring
      "inset 0 1px 0 rgba(253,254,254,0.12)",       // top specular highlight
      "inset 0 -1px 0 rgba(157,180,192,0.06)",      // bottom depth
      "0 8px 32px rgba(157,180,192,0.06)",           // ambient lift
    ].join(", "),
  };

  // ── Mobile selected — solid so countdown bar reads clearly ──────────────
  const mobileSelected = {
    background:  "rgba(157,180,192,0.13)",
    borderColor: "rgba(157,180,192,0.55)",
    boxShadow:   "0 0 0 1px rgba(157,180,192,0.18)",
  };

  const selectedStyle = isMobileMode ? mobileSelected : liquidGlass;

  const baseStyle = {
    animationDelay:    `${index * 55}ms`,
    animation:         `oc-enter 0.4s cubic-bezier(0.22,1,0.36,1) ${index * 55}ms both`,
    transition:        "background 0.22s ease, border-color 0.22s ease, box-shadow 0.25s ease, transform 0.18s ease",
    transform:         isSelected && !isMobileMode ? "translateY(-1px)" : "translateY(0)",
    ...(isSelected ? selectedStyle : {}),
  };

  return (
    <>
      <button
        ref={cardRef}
        type="button"
        onClick={handleClick}
        aria-pressed={isSelected}
        style={baseStyle}
        className={`
          w-full flex items-center gap-4 px-5 py-4 text-left rounded-sm
          border relative overflow-hidden select-none min-h-[60px]
          active:scale-[0.983]
          ${isSelected
            ? "border-cadet/50 text-frosted"
            : "border-cadet/14 bg-cadet/[0.02] text-frosted/68 hover:border-cadet/32 hover:bg-cadet/[0.04] hover:text-frosted/88"
          }
        `}
      >
        {/* Liquid glass inner shimmer — desktop only */}
        {isSelected && !isMobileMode && (
          <span
            aria-hidden="true"
            style={{
              position:   "absolute",
              top:        0,
              left:       0,
              right:      0,
              height:     "40%",
              background: "linear-gradient(180deg, rgba(253,254,254,0.06) 0%, transparent 100%)",
              pointerEvents: "none",
              borderRadius: "inherit",
            }}
          />
        )}

        {/* Selection sweep */}
        {isSelected && (
          <span
            aria-hidden="true"
            style={{
              position:   "absolute",
              inset:      0,
              background: "linear-gradient(105deg, transparent 30%, rgba(157,180,192,0.09) 50%, transparent 70%)",
              animation:  "oc-sweep 0.55s ease-out forwards",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Left accent bar */}
        <span
          aria-hidden="true"
          style={{
            position:        "absolute",
            left:            0,
            top:             "18%",
            bottom:          "18%",
            width:           2,
            borderRadius:    99,
            background:      "linear-gradient(180deg, rgba(157,180,192,0.8), rgba(157,180,192,0.3))",
            opacity:         isSelected ? 1 : 0,
            transform:       isSelected ? "scaleY(1)" : "scaleY(0)",
            transition:      "opacity 0.2s ease, transform 0.28s cubic-bezier(0.22,1,0.36,1)",
            transformOrigin: "center",
          }}
        />

        {/* Radio circle */}
        <span
          aria-hidden="true"
          style={{
            flexShrink:      0,
            width:           20,
            height:          20,
            borderRadius:    "50%",
            border:          `1.5px solid ${isSelected ? "#9DB4C0" : "rgba(157,180,192,0.25)"}`,
            backgroundColor: isSelected ? "#9DB4C0" : "transparent",
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            transition:      "all 0.22s cubic-bezier(0.22,1,0.36,1)",
            transform:       isSelected ? "scale(1.06)" : "scale(1)",
            boxShadow:       isSelected && !isMobileMode
              ? "0 0 0 3px rgba(157,180,192,0.15), 0 0 10px rgba(157,180,192,0.12)"
              : "none",
          }}
        >
          <span
            style={{
              width:        isSelected ? 7 : 0,
              height:       isSelected ? 7 : 0,
              borderRadius: "50%",
              background:   "#131313",
              opacity:      isSelected ? 1 : 0,
              transition:   "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          />
        </span>

        {/* Label */}
        <span className="flex flex-col flex-1 gap-0.5">
          <span
            className="font-sans text-[15px] leading-snug"
            style={{ color: isSelected ? "#FDFEFE" : "inherit", transition: "color 0.18s ease" }}
          >
            {option.label}
          </span>
          {option.hint && (
            <span className="font-sans text-[12px]" style={{ color: "rgba(157,180,192,0.48)" }}>
              {option.hint}
            </span>
          )}
        </span>

        {/* Animated checkmark with draw-on stroke */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            opacity:    isSelected ? 1 : 0,
            transform:  isSelected ? "scale(1) rotate(0deg)" : "scale(0.4) rotate(-25deg)",
            transition: "opacity 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle
              cx="8" cy="8" r="7"
              stroke="rgba(157,180,192,0.28)"
              strokeWidth="1"
              fill={!isMobileMode && isSelected ? "rgba(157,180,192,0.06)" : "none"}
            />
            <path
              d="M5 8l2.2 2.2L11 5.5"
              stroke="#9DB4C0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray:  "10",
                strokeDashoffset: isSelected ? "0" : "10",
                transition:       "stroke-dashoffset 0.32s ease 0.06s",
              }}
            />
          </svg>
        </span>
      </button>

      <style>{`
        @keyframes oc-enter {
          from { opacity:0; transform:translateY(11px) scale(0.975); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes oc-ripple {
          to { transform:scale(1); opacity:0; }
        }
        @keyframes oc-sweep {
          from { transform:translateX(-100%); }
          to   { transform:translateX(100%); }
        }
      `}</style>
    </>
  );
}