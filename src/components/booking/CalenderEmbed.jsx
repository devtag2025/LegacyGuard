import { useEffect, useRef, useState } from 'react';

export function CalendarEmbed({ calendlyUrl, onBooked }) {
  const [scriptReady, setScriptReady] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [error, setError] = useState(false);
  const listenerAdded = useRef(false);


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
    if (listenerAdded.current) return;
    listenerAdded.current = true;

    function onMessage(e) {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.event === 'calendly.event_scheduled') {
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

  function openPopup() {
    if (!window.Calendly || !calendlyUrl) return;
    setPopupOpen(true);
    window.Calendly.initPopupWidget({ url: calendlyUrl });
  }


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
          {/* Calendar icon */}
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
