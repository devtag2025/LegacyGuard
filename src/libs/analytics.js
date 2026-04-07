function push(payload) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}

export const trackEvent = {
  funnelStart: (utmParams = {}) => push({ event: 'funnel_start', ...utmParams }),

  questionnaireStep: (stepNumber, questionKey, answerValue) =>
    push({
      event: 'questionnaire_step',
      step_number: stepNumber,
      question_key: questionKey,
      answer_value: answerValue,
    }),

  questionnaireDrop: (lastStep, timeOnStep) =>
    push({ event: 'questionnaire_drop', last_step: lastStep, time_on_step: timeOnStep }),

  classificationResult: (route) => push({ event: 'classification_result', route }),

  triggerMomentView: (flagsCount) =>
    push({ event: 'trigger_moment_view', flags_triggered: flagsCount }),

  ctaClickAdviser: (page) => push({ event: 'cta_click_adviser', page }),

  ctaClickWill: (page, route) => push({ event: 'cta_click_will', page, route }),

  consultationBooked: (bookingType) =>
    push({ event: 'consultation_booked', booking_type: bookingType }),

  willStarted: () => push({ event: 'will_started' }),

  thankYouPage: (leadType) => push({ event: 'thank_you_page', lead_type: leadType }),
};
