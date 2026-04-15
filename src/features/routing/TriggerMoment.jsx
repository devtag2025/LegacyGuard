import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionnaireStore } from '../../store/useQuestionaireStore';

export function TriggerMomentPage() {
  const navigate = useNavigate();
  const { triggerFlags, routingDecision } = useQuestionnaireStore();

  useEffect(() => {
    if (!routingDecision) {
      navigate('/assessment', { replace: true });
      return;
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'trigger_moment_view',
        flags_triggered: triggerFlags?.length ?? 0,
        route: routingDecision,
      });
    }
  }, [routingDecision, triggerFlags, navigate]);

  if (!routingDecision) return null;

  // Cap at 4 flags maximum — client spec: no long lists
  const displayFlags = (triggerFlags ?? []).slice(0, 4);

  const handleAdviserClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'cta_click_adviser', page: 'trigger_moment' });
    }
    navigate('/book');
  };

  const handleWillClick = () => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'cta_click_will', page: 'trigger_moment' });
    }
    navigate('/will');
  };

  return (
    <div className="min-h-screen bg-night">
      <div className="max-w-[600px] mx-auto px-5 pt-12 pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-cadet/40" aria-hidden="true" />
          <span className="font-sans text-xs tracking-widest uppercase text-cadet/55">
            Your results
          </span>
        </div>

        {/* Opening line — client-specified, do not alter */}
        <p className="font-monument text-frosted text-[1.35rem] sm:text-[1.65rem] leading-[1.3] tracking-[-0.01em] mb-8">
          Based on what you've told us, there are a few areas worth checking more
          carefully.
        </p>

        {/* Personalised flags — max 4, advisory framing only */}
        {displayFlags.length > 0 && (
          <ul className="flex flex-col gap-3 mb-8" aria-label="Areas to consider">
            {displayFlags.map((flag, i) => (
              <li
                key={i}
                className="flex items-start gap-4 p-4 border border-cadet/15 rounded-sm bg-cadet/[0.04]"
              >
                <span
                  className="mt-[9px] w-[5px] h-[5px] min-w-[5px] rounded-full bg-cadet/50"
                  aria-hidden="true"
                />
                <span className="font-sans text-[14px] text-frosted/80 leading-relaxed">
                  {flag}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Pre-CTA advisory line — client-specified, do not alter */}
        <p className="font-sans text-[14px] text-cadet/60 leading-relaxed mb-8">
          A short conversation can help you understand how these points may apply to your
          situation before finalising anything.
        </p>

        {/* Dual CTA — both paths always visible */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleAdviserClick}
            className="w-full py-4 px-6 font-sans text-[15px] font-medium bg-cadet text-night rounded-sm hover:bg-cadet/90 active:scale-[0.99] transition-all duration-150"
          >
            Speak to an adviser
          </button>

          <button
            type="button"
            onClick={handleWillClick}
            className="w-full py-4 px-6 font-sans text-[15px] text-cadet/70 border border-cadet/20 rounded-sm hover:border-cadet/40 hover:text-cadet active:scale-[0.99] transition-all duration-150"
          >
            Continue with my will
          </button>

          <p className="font-sans text-xs text-cadet/40 text-center mt-1">
            No obligation — just a conversation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TriggerMomentPage;
