
import { useState, useEffect } from "react";

const CONSENT_KEY = "iwill_cookie_consent";
const DEV_FORCE   = import.meta.env.DEV;

export function CookieConsent() {
  const [phase, setPhase] = useState("hidden");

  useEffect(() => {
    let consent = null;
    try { consent = localStorage.getItem(CONSENT_KEY); } catch {}
    if (consent === "accepted" && !DEV_FORCE) {
      fireConsent();
      return;
    }

    const t = setTimeout(() => {
      if (consent === "declined" && !DEV_FORCE) {
        setPhase("icon"); 
      } else {
        setPhase("panel"); 
      }
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  function fireConsent() {
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event:             "consent_update",
        analytics_storage: "granted",
        ad_storage:        "granted",
      });
    }
  }

  function handleAccept() {
    try { localStorage.setItem(CONSENT_KEY, "accepted"); } catch {}
    fireConsent();
    setPhase("hidden"); 
  }

  function handleDecline() {
    try { localStorage.setItem(CONSENT_KEY, "declined"); } catch {}
    setPhase("icon"); 
  }

  function handleClose() {
    setPhase("icon");
  }

  if (phase === "hidden") return null;

  return (
    <>
      <style>{`
        @keyframes ck-bounce-in {
          0%   { transform: scale(0) translateY(20px); opacity: 0; }
          60%  { transform: scale(1.15) translateY(-4px); opacity: 1; }
          80%  { transform: scale(0.96) translateY(2px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        @keyframes ck-panel-in {
          from { transform: translateY(14px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }
        @keyframes ck-pulse {
          0%, 100% { box-shadow: 0 0 0 0   rgba(157,180,192,0.45); }
          50%      { box-shadow: 0 0 0 8px rgba(157,180,192,0);     }
        }
      `}</style>

      {/* ── Floating cookie icon (shown when panel is closed) ── */}
      {phase === "icon" && (
        <button
          type="button"
          onClick={() => setPhase("panel")}
          aria-label="Open cookie preferences"
          title="Cookie preferences"
          className="fixed bottom-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background:  "#363E44",
            border:      "1px solid rgba(157,180,192,0.25)",
            boxShadow:   "0 4px 20px rgba(0,0,0,0.35)",
            animation:   "ck-bounce-in 0.55s cubic-bezier(0.22,1,0.36,1) forwards, ck-pulse 2.8s ease 1.5s infinite",
            cursor:      "pointer",
          }}
        >
          <CookieIcon size={22} />

          {/* Notification dot */}
          <span
            className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
            style={{ background: "#9DB4C0", borderColor: "#131313" }}
            aria-hidden="true"
          />
        </button>
      )}

      {/* ── Consent panel ── */}
      {phase === "panel" && (
        <div
          className="fixed bottom-6 right-6 z-10 w-[300px] sm:w-[320px] rounded-sm overflow-hidden"
          style={{
            background:      "#363E44",
            border:          "1px solid rgba(157,180,192,0.20)",
            boxShadow:       "0 8px 40px rgba(0,0,0,0.45)",
            animation:       "ck-panel-in 0.38s cubic-bezier(0.22,1,0.36,1) forwards",
            transformOrigin: "bottom right",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: "1px solid rgba(157,180,192,0.10)" }}
          >
            <div className="flex items-center gap-2.5">
              <CookieIcon size={15} />
              <span
                className="font-sans font-medium"
                style={{ color: "rgba(253,254,254,0.85)", fontSize: "0.8rem" }}
              >
                Cookie preferences
              </span>
            </div>

            {/* Close → goes to icon, not hidden */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close panel"
              className="flex items-center justify-center w-6 h-6 rounded-sm transition-colors"
              style={{ color: "rgba(157,180,192,0.45)" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(157,180,192,0.85)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(157,180,192,0.45)"}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-4">
            <p
              className="font-sans leading-relaxed mb-5"
              style={{ color: "rgba(157,180,192,0.68)", fontSize: "0.78rem", lineHeight: 1.72 }}
            >
              We use cookies to understand how people use our site and to improve
              your experience. You can accept or decline non-essential cookies.{" "}
              <a
                href="/cookies"
                className="underline hover:no-underline transition-colors"
                style={{ color: "rgba(157,180,192,0.9)" }}
              >
                Learn more
              </a>
            </p>

            {/* Accept — disappears everything */}
            <button
              type="button"
              onClick={handleAccept}
              className="w-full font-sans text-xs py-2.5 rounded-sm mb-2 transition-all"
              style={{
                background:    "#9DB4C0",
                color:         "#131313",
                fontWeight:    500,
                letterSpacing: "0.04em",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(157,180,192,0.85)"}
              onMouseLeave={e => e.currentTarget.style.background = "#9DB4C0"}
            >
              Accept all cookies
            </button>

            {/* Decline — icon stays */}
            <button
              type="button"
              onClick={handleDecline}
              className="w-full font-sans text-xs py-2.5 rounded-sm transition-all"
              style={{
                background:  "transparent",
                color:       "rgba(157,180,192,0.58)",
                border:      "1px solid rgba(157,180,192,0.16)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(157,180,192,0.38)";
                e.currentTarget.style.color       = "rgba(157,180,192,0.88)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(157,180,192,0.16)";
                e.currentTarget.style.color       = "rgba(157,180,192,0.58)";
              }}
            >
              Decline non-essential
            </button>
          </div>

          {/* Footer */}
          <div
            className="px-5 py-3 text-center"
            style={{ borderTop: "1px solid rgba(157,180,192,0.08)" }}
          >
            <p className="font-sans" style={{ color: "rgba(157,180,192,0.28)", fontSize: "0.67rem" }}>
              iTrust121 · UK GDPR compliant
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function CookieIcon({ size = 22 }) {
  return (
    <img
      src="/cookie.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ display: "block", objectFit: "contain" }}
    />
  );
}