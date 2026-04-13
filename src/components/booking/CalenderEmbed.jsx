import { useEffect, useRef, useState } from 'react';

function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.cssText = 'visibility:hidden;overflow:scroll;position:absolute;top:-9999px';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const width = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return width;
}

function lockBodyScroll() {
  const width = getScrollbarWidth();
  document.documentElement.style.setProperty('--scrollbar-width', `${width}px`);
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${width}px`;
}

function unlockBodyScroll() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  document.documentElement.style.removeProperty('--scrollbar-width');
}

export function CalendarEmbed({ calendlyUrl, onBooked }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState(false);
  const listenerAdded = useRef(false);

  // ── Load Calendly script ──────────────────────────────────────────────────
  useEffect(() => {
    if (!calendlyUrl) return;

    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }

    if (document.getElementById('calendly-js')) {
      setScriptReady(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'calendly-js';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptReady(true);
    script.onerror = () => setError(true);
    document.head.appendChild(script);
  }, [calendlyUrl]);

  // ── Listen for booking confirmed ──────────────────────────────────────────
  useEffect(() => {
    if (listenerAdded.current) return;
    listenerAdded.current = true;

    function onMessage(e) {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.event === 'calendly.event_scheduled') {
        unlockBodyScroll();
        removeCloseBtn();
        setBooked(true);
        setPopupOpen(false);
        if (onBooked) onBooked(e.data.payload);
      }
    }

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
      listenerAdded.current = false;
    };
  }, [onBooked]);

  // ── Remove our custom close button ───────────────────────────────────────
  function removeCloseBtn() {
    const existing = document.getElementById('ck-close-btn');
    if (existing) existing.remove();
  }

  // ── Inject our custom close button ───────────────────────────────────────
  function injectCloseBtn() {
    removeCloseBtn();

    const btn = document.createElement('button');
    btn.id = 'ck-close-btn';
    btn.setAttribute('aria-label', 'Close booking calendar');
    btn.style.cssText = `
      position: fixed;
      top: 14px;
      right: 14px;
      z-index: 999999;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #FFFFFF;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
      transition: background 0.15s;
    `;
    btn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3L3 11M3 3l8 8" stroke="#131313" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;

    btn.onmouseenter = () => {
      btn.style.background = '#f0f0f0';
    };
    btn.onmouseleave = () => {
      btn.style.background = '#FFFFFF';
    };

    btn.onclick = () => {
      // Try native Calendly close first
      const nativeClose = document.querySelector('.calendly-popup-close');
      if (nativeClose) {
        nativeClose.click();
      } else {
        const overlay = document.querySelector('.calendly-overlay');
        if (overlay) overlay.remove();
      }
      unlockBodyScroll();
      setPopupOpen(false);
      removeCloseBtn();
    };

    document.body.appendChild(btn);

    // Auto-remove when Calendly overlay disappears
    const obs = new MutationObserver(() => {
      if (!document.querySelector('.calendly-overlay')) {
        removeCloseBtn();
        unlockBodyScroll();
        setPopupOpen(false);
        obs.disconnect();
      }
    });
    obs.observe(document.body, { childList: true });
  }

  // ── Open popup ────────────────────────────────────────────────────────────
  function openPopup() {
    if (!window.Calendly || !calendlyUrl) return;

    lockBodyScroll();
    setPopupOpen(true);

    // Free Calendly — no colour params, use URL as-is
    window.Calendly.initPopupWidget({ url: calendlyUrl });

    // Inject our custom close button after popup mounts
    setTimeout(injectCloseBtn, 600);

    // Watch for overlay removal (user closed popup)
    const observer = new MutationObserver(() => {
      if (!document.querySelector('.calendly-overlay')) {
        unlockBodyScroll();
        setPopupOpen(false);
        removeCloseBtn();
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: false });
  }

  // ── No URL configured ─────────────────────────────────────────────────────
  if (!calendlyUrl) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-sm border border-cadet/15 bg-cadet/4 py-16 px-6 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9DB4C0"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="mb-4 opacity-30"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <p className="font-sans text-cadet/55 text-sm mb-1">
          Booking calendar not yet configured.
        </p>
        <p className="font-sans text-cadet/35 text-xs">
          Add{' '}
          <code className="bg-cadet/10 px-1 rounded text-cadet/60">
            VITE_CALENDLY_URL
          </code>{' '}
          to your .env file.
        </p>
      </div>
    );
  }

  // ── Booking confirmed ─────────────────────────────────────────────────────
  if (booked) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-sm border border-cadet/15 bg-cadet/4 py-16 px-6 text-center">
        <div className="w-12 h-12 rounded-full border border-cadet/35 flex items-center justify-center mb-6">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 10l4.5 4.5L16 6"
              stroke="#9DB4C0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-monument text-frosted text-base mb-2">Booking confirmed.</p>
        <p className="font-sans text-cadet/55 text-sm">
          Redirecting you to the confirmation page…
        </p>
      </div>
    );
  }

  // ── Main booking card ─────────────────────────────────────────────────────
  return (
    <div className="w-full rounded-sm border border-cadet/15 overflow-hidden">
      {/* Card header */}
      <div
        className="px-8 py-6 border-b border-cadet/10"
        style={{ background: 'rgba(157,180,192,0.04)' }}
      >
        <p className="label-eyebrow text-cadet/50 mb-3">Your consultation</p>
        <h3
          className="font-monument text-frosted text-base leading-snug mb-2"
          style={{ fontWeight: 400 }}
        >
          Select a date and time that works for you.
        </h3>
        <p className="font-sans text-cadet/50 text-sm leading-relaxed">
          A calendar will open where you can pick your preferred slot. The whole process
          takes under 2 minutes.
        </p>
      </div>

      {/* What happens next */}
      <div className="px-8 py-6 border-b border-cadet/10">
        <p className="label-eyebrow text-cadet/40 mb-5">What happens next</p>
        <div className="flex flex-col gap-4">
          {[
            {
              step: '01',
              text: 'Choose your preferred date and time from the calendar.',
            },
            { step: '02', text: 'Enter your name and email to confirm the booking.' },
            {
              step: '03',
              text: "You'll receive a confirmation email with all the details.",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-4">
              <span className="font-monument text-[11px] text-cadet/35 tracking-widest mt-0.5 min-w-[24px]">
                {item.step}
              </span>
              <p className="font-sans text-sm text-frosted/65 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="button"
          onClick={openPopup}
          disabled={!scriptReady || error}
          className={`
            flex items-center gap-2.5 font-sans text-sm px-7 py-3.5 rounded-sm
            border transition-all duration-150
            ${
              scriptReady && !error
                ? 'border-cadet/50 text-cadet hover:bg-cadet hover:text-night hover:border-cadet active:scale-[0.98]'
                : 'border-cadet/15 text-cadet/25 cursor-not-allowed'
            }
          `}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {!scriptReady && !error ? 'Loading…' : 'Choose a time'}
        </button>

        <p className="font-sans text-xs text-cadet/35">
          {error
            ? 'Could not load the calendar. Please refresh.'
            : 'Opens a booking calendar — takes under 2 minutes.'}
        </p>
      </div>

      {error && (
        <div className="px-8 pb-6">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="font-sans text-xs text-cadet/40 hover:text-cadet/65 transition-colors underline"
          >
            Refresh and try again
          </button>
        </div>
      )}
    </div>
  );
}
