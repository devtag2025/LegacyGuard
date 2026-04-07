
import { useCallback } from "react";
import { trackEvent } from "@/libs/analytics";

export function useAnalytics() {
  const track = useCallback((eventName, params = {}) => {
    if (typeof window === "undefined") return;
    if (!Array.isArray(window.dataLayer)) {
      window.dataLayer = [];
    }
    window.dataLayer.push({ event: eventName, ...params });
  }, []);

  return {
    track,
    trackFunnelStart:          useCallback((utm) => trackEvent.funnelStart(utm), []),
    trackQuestionnaireStep:    useCallback((step, key, val) => trackEvent.questionnaireStep(step, key, val), []),
    trackQuestionnaireDrop:    useCallback((step, time) => trackEvent.questionnaireDrop(step, time), []),
    trackClassificationResult: useCallback((route) => trackEvent.classificationResult(route), []),
    trackTriggerMomentView:    useCallback((count) => trackEvent.triggerMomentView(count), []),
    trackCtaAdviser:           useCallback((page) => trackEvent.ctaClickAdviser(page), []),
    trackCtaWill:              useCallback((page, route) => trackEvent.ctaClickWill(page, route), []),
    trackConsultationBooked:   useCallback((type) => trackEvent.consultationBooked(type), []),
    trackWillStarted:          useCallback(() => trackEvent.willStarted(), []),
    trackThankYouPage:         useCallback((type) => trackEvent.thankYouPage(type), []),
  };
}