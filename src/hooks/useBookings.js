import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useQuestionnaireStore } from "@/store/useQuestionaireStore";
import { ROUTES } from "@/libs/constants";

export function useBooking() {
  const navigate = useNavigate();
  const { triggerFlags, triggerSignals, reset } = useQuestionnaireStore();
  const handleBooked = useCallback(
    (format, calendlyPayload = {}) => {

      if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event:            "consultation_booked",   
          booking_type:     format,                  
          flags_count:      triggerFlags.length,
          signals:          triggerSignals.join(","),
          calendly_event:   calendlyPayload?.event?.uri ?? "",
          calendly_invitee: calendlyPayload?.invitee?.uri ?? "",
        });
      }

      // Navigate to confirmation page
      // Reset questionnaire state after navigating so confirmation page
      // can still access any last-minute data if needed
      navigate(ROUTES.CONFIRMED, {
        state: {
          format,
          bookedAt: new Date().toISOString(),
        }
      });

      // Small delay before reset so confirmation page renders first
      setTimeout(() => reset(), 500);
    },
    [navigate, reset, triggerFlags, triggerSignals]
  );

  return { handleBooked };
}