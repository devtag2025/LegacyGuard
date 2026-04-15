import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarEmbed } from '@/components/booking/CalenderEmbed';
import { useBooking } from '@/hooks/useBookings';
import { useQuestionnaireStore } from '@/store/useQuestionaireStore';
import { buildCalendlyUrl } from '@/utils/buildCalendlyUrl';
import FORMAT_OPTIONS from '@/components/booking/FormatOption';

export function BookingPage() {
  const navigate = useNavigate();
  const { triggerFlags } = useQuestionnaireStore();
  const { handleBooked } = useBooking();
  const [format, setFormat] = useState('phone');

  const baseUrl = import.meta.env.VITE_CALENDLY_URL || '';
  const calendlyUrl = buildCalendlyUrl(baseUrl);

  useEffect(() => {
    if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'booking_page_view' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-night">
      <div className="container-brand max-w-180 mx-auto px-5 pt-12 pb-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
            <span className="label-eyebrow text-cadet/55">Book your consultation</span>
          </div>
          <h1 className="font-monument text-frosted text-[1.5rem] sm:text-[1.9rem] leading-[1.2] mb-3">
            Choose a time that works for you.
          </h1>
          <div className="font-sans text-cadet/58 text-[15px] leading-relaxed max-w-130">
            <p className="mb-2">
              No obligation — this is simply a conversation to understand your situation.
            </p>
            <p className="font-sans text-md text-frosted/85 mb-4">
              Takes around 15 minutes.
            </p>
          </div>
        </div>

        {/* Format choice */}
        <div className="mb-8">
          <p className="label-eyebrow text-cadet/45 mb-4">
            How would you prefer to speak?
          </p>

          <div className="grid grid-cols-2 gap-3 max-w-105">
            {FORMAT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setFormat(opt.value)}
                className={`
                  flex flex-col items-start gap-2 px-5 py-4 rounded-sm border text-left
                  transition-all duration-150
                  ${
                    format === opt.value
                      ? 'border-cadet/55 bg-cadet/8 text-frosted'
                      : 'border-cadet/15 text-frosted/50 hover:border-cadet/35 hover:bg-cadet/4'
                  }
                `}
              >
                <span
                  className={`transition-colors ${format === opt.value ? 'text-cadet' : 'text-cadet/35'}`}
                >
                  {opt.icon}
                </span>
                <span>
                  <span className="font-sans text-[14px] font-medium block leading-snug">
                    {opt.label}
                  </span>
                  <span className="font-sans text-[12px] text-cadet/45 mt-0.5 block">
                    {opt.hint}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Calendly embed */}
        <CalendarEmbed
          calendlyUrl={calendlyUrl}
          onBooked={(payload) => handleBooked(format, payload)}
        />

        {/* Reassurance */}
        <div className="mt-8 pt-8 border-t border-cadet/10 flex flex-col gap-3">
          {[
            'No obligation — this is not a sales call.',
            'Your answers are kept private and used only to prepare for your conversation.',
            'You can cancel or reschedule at any time.',
          ].map((line) => (
            <p
              key={line}
              className="font-sans text-[13px] text-cadet/38 flex items-start gap-2.5"
            >
              <span
                className="mt-[6px] w-1.5 h-1.5 min-w-[6px] rounded-full bg-cadet/22 flex-shrink-0"
                aria-hidden="true"
              />
              {line}
            </p>
          ))}
        </div>

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-10 font-sans text-xs text-cadet/28 hover:text-cadet/55 transition-colors flex items-center gap-1.5"
        >
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 11L5 7l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go back
        </button>
      </div>
    </div>
  );
}
export default BookingPage;
