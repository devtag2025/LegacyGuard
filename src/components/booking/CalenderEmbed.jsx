import { useEffect, useRef, useState } from 'react';

export function CalendarEmbed({ calendlyUrl, onBooked }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [error, setError] = useState(false);
  const listenerRef = useRef(false);

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

  useEffect(() => {
    if (!scriptReady || !window.Calendly) return;
    if (typeof window.Calendly.initInlineWidgets === 'function') {
      window.Calendly.initInlineWidgets();
    }
  }, [scriptReady]);

  useEffect(() => {
    if (listenerRef.current) return;
    listenerRef.current = true;

    function onMessage(e) {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.event === 'calendly.event_scheduled') {
        if (onBooked) onBooked(e.data.payload);
      }
    }

    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
      listenerRef.current = false;
    };
  }, [onBooked]);

  if (!calendlyUrl) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-sm border border-cadet/15 bg-cadet/4 py-20 px-6 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="mb-4 opacity-30"
          stroke="#9DB4C0"
          strokeWidth="1.5"
          strokeLinecap="round"
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
          <code className="bg-cadet/10 px-1 py-0.5 rounded text-cadet/60">
            VITE_CALENDLY_URL
          </code>{' '}
          to your .env file.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-sm border border-cadet/15 bg-cadet/4 py-20 px-6 text-center">
        <p className="font-sans text-cadet/55 text-sm mb-1">
          Could not load the booking calendar.
        </p>
        <p className="font-sans text-cadet/35 text-xs mb-6">
          Please refresh the page or contact us directly.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="font-sans text-xs text-cadet border border-cadet/25 px-5 py-2.5 rounded-sm hover:border-cadet/50 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-sm overflow-hidden border border-cadet/10">
      <div
        className="calendly-inline-widget w-full"
        data-url={calendlyUrl}
        data-resize="true"
        style={{ minWidth: '320px', height: '700px' }}
      />

      {/* Loading overlay — Calendly replaces the div content when ready */}
      {!scriptReady && (
        <div className="absolute inset-0 bg-night flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-cadet/40"
                style={{ animation: `cdot 1.2s ease-in-out ${i * 0.2}s infinite` }}
              />
            ))}
          </div>
          <p className="font-sans text-xs text-cadet/40">Loading calendar…</p>
        </div>
      )}

      <style>{`
        @keyframes cdot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.35; }
          40%            { transform: scale(1);   opacity: 1; }
        }
        .calendly-inline-widget iframe {
          border: none !important;
        }
      `}</style>
    </div>
  );
}
