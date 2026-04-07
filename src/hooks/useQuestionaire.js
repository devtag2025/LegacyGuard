// src/features/questionnaire/useQuestionnaire.js
// Step navigation, answer dispatch, GA4 tracking, and classification trigger.

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestionnaireStore } from '@/store/useQuestionnaireStore';
import { classify } from '@/lib/classificationEngine';
import { QUESTIONS } from './questions.config';

export function useQuestionnaire() {
  const navigate = useNavigate();
  const { currentStep, answers, setAnswer, nextStep, prevStep, setRouting } =
    useQuestionnaireStore();

  const currentQuestion = QUESTIONS[currentStep - 1];
  const currentAnswer = answers[currentQuestion?.key] ?? null;
  const isLastStep = currentStep === QUESTIONS.length;
  const progress = Math.round(((currentStep - 1) / QUESTIONS.length) * 100);

  // GA4 event helper — pushes to dataLayer if GTM is present
  const pushEvent = useCallback((eventName, params = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: eventName, ...params });
    }
  }, []);

  const selectAnswer = useCallback(
    (value) => {
      setAnswer(currentQuestion.key, value);
    },
    [currentQuestion, setAnswer],
  );

  const goNext = useCallback(() => {
    if (!currentAnswer) return;

    pushEvent('questionnaire_step', {
      step_number: currentStep,
      question_key: currentQuestion.key,
      answer_value: currentAnswer,
    });

    if (isLastStep) {
      const { route, flags, signals } = classify({
        ...answers,
        [currentQuestion.key]: currentAnswer,
      });
      setRouting(route, flags, signals);
      pushEvent('classification_result', { route });

      if (route === 'adviser') {
        navigate('/assessment/result');
      } else {
        navigate('/will');
      }
    } else {
      nextStep();
    }
  }, [
    currentAnswer,
    currentStep,
    currentQuestion,
    isLastStep,
    answers,
    nextStep,
    setRouting,
    navigate,
    pushEvent,
  ]);

  const goBack = useCallback(() => {
    if (currentStep === 1) {
      navigate('/');
    } else {
      prevStep();
    }
  }, [currentStep, prevStep, navigate]);

  return {
    currentStep,
    currentQuestion,
    currentAnswer,
    isLastStep,
    progress,
    selectAnswer,
    goNext,
    goBack,
  };
}
