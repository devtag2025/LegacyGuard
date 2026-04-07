
import { BrowserRouter,Routes,Route } from "react-router";
import { ErrorBoundary } from "./components/shared/error/ErrorBoundary";
import { LandingPage }         from "@/features/landing/LandingPage";
// import QuestionairrePage
import { TriggerMomentPage } from "./features/routing/TriggerMoment";
import { SimpleWillRedirect }  from "@/features/routing/SimpleWillRedirect";
import { BookingPage }         from "@/features/booking/BookingPage";
import { BookingConfirmation } from "@/features/booking/BookingConfirmation";
// import { SimpleWillPage }      from "@/features/will/SimpleWillPage";

export function AppRouter() {
  return (
      <ErrorBoundary>
        <Routes>
          {/* ── Public funnel ── */}
          <Route path="/"                  element={<LandingPage />} />
          {/* <Route path="/assessment"        element={<QuestionnairePage />} /> */}
          <Route path="/assessment/result" element={<TriggerMomentPage />} />
          <Route path="/will"              element={<SimpleWillRedirect />} />
          {/* <Route path="/will/start"        element={<SimpleWillPage />} /> */}
          <Route path="/book"              element={<BookingPage />} />
          <Route path="/book/confirmed"    element={<BookingConfirmation />} />

          {/* ── Admin (Stage 4) ── */}
          {/* <Route path="/admin"       element={<AdminDashboard />} /> */}
          {/* <Route path="/admin/login" element={<LoginPage />} />     */}

          {/* ── 404 fallback ── */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </ErrorBoundary>

  );
}
export default AppRouter