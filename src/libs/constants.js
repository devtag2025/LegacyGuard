
export const ROUTES = {
  HOME:         "/",
  ASSESSMENT:   "/assessment",
  RESULT:       "/assessment/result",
  WILL:         "/will",
  WILL_START:   "/will/start",
  BOOK:         "/book",
  CONFIRMED:    "/book/confirmed",
  ADMIN:        "/admin",
  ADMIN_LOGIN:  "/admin/login",
};

export const TOTAL_STEPS = 7;

export const SIGNAL_WEIGHTS = {
  CRITICAL: 50,
  HIGH:     40,
  MEDIUM:   20,
};

export const ROUTES_OUTCOME = {
  ADVISER:    "adviser",
  SIMPLE_WILL: "simple-will",
};

export const BOOKING_FORMATS = {
  PHONE: "phone",
  ZOOM:  "zoom",
};

export const GA4_EVENTS = {
  FUNNEL_START:          "funnel_start",
  QUESTIONNAIRE_STEP:    "questionnaire_step",
  QUESTIONNAIRE_DROP:    "questionnaire_drop",
  CLASSIFICATION_RESULT: "classification_result",
  TRIGGER_MOMENT_VIEW:   "trigger_moment_view",
  CTA_CLICK_ADVISER:     "cta_click_adviser",
  CTA_CLICK_WILL:        "cta_click_will",
  CONSULTATION_BOOKED:   "consultation_booked",
  WILL_STARTED:          "will_started",
  THANK_YOU_PAGE:        "thank_you_page",
};

export const STORAGE_KEYS = {
  QUESTIONNAIRE: "iwill-questionnaire",
  SESSION_ID:    "iwill_session_id",
};

export const KPI_TARGETS = {
  QUESTIONNAIRE_COMPLETION_RATE: 0.70,  // 70%+ target
  CONSULTATION_BOOKING_RATE:     0.30,  // 25-40% of complex route users
};