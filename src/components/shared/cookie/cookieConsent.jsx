
import { useState, useEffect } from "react";

const CONSENT_KEY = "iwill_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setTimeout(() => setVisible(true), 1200);
    } else if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  function enableAnalytics() {
    // Signal GTM consent granted
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "consent_update",
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  }

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    enableAnalytics();
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-cadet/15 px-5 py-5"
    >
      <div className="container-brand flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-xs text-cadet/65 leading-relaxed max-w-xl">
          We use cookies to understand how people use our site and to improve your experience.
          You can accept or decline non-essential cookies.{" "}
          <a href="/cookies" className="text-cadet underline hover:no-underline">
            Cookie policy
          </a>
        </p>

        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="font-sans text-xs text-cadet/50 hover:text-cadet transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="font-sans text-xs text-cadet border border-cadet/35 px-4 py-2 rounded-sm hover:border-cadet hover:bg-cadet/6 transition-all"
          >
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
}