import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useQuestionnaireStore = create(
  persist(
    (set, get) => ({
      sessionId: null,
      currentStep: 1,
      answers: {}, // { relationshipStatus: "married", property: "yes_mortgage", ... }
      routingDecision: null, // "adviser" | "simple-will" | null
      triggerFlags: [], // Array of personalised flag strings shown on trigger moment page
      triggerSignals: [], // Array of signal keys for CRM tagging

      setSessionId: (id) => set({ sessionId: id }),
      setAnswer: (key, value) =>
        set((s) => ({ answers: { ...s.answers, [key]: value } })),
      nextStep: () => set((s) => ({ currentStep: Math.min(s.currentStep + 1, 7) })),
      prevStep: () => set((s) => ({ currentStep: Math.max(s.currentStep - 1, 1) })),
      setRouting: (decision, flags, signals) =>
        set({ routingDecision: decision, triggerFlags: flags, triggerSignals: signals }),
      reset: () =>
        set({
          sessionId: null,
          currentStep: 1,
          answers: {},
          routingDecision: null,
          triggerFlags: [],
          triggerSignals: [],
        }),
    }),
    {
      name: 'iwill-questionnaire',
      partialize: (s) => ({
        sessionId: s.sessionId,
        currentStep: s.currentStep,
        answers: s.answers,
      }),
    },
  ),
);
