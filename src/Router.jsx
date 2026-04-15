// src/Router.jsx
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/shared/error/ErrorBoundary';

const LandingPage = React.lazy(() => import('@/features/landing/LandingPage'));

const QuestionnairePage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.QuestionnairePage })),
);

const TriggerMomentPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.TriggerMomentPage })),
);

const SimpleWillRedirect = React.lazy(() =>
  import('@/features/index.js').then((module) => ({
    default: module.SimpleWillRedirect,
  })),
);

const BookingPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.BookingPage })),
);

const BookingConfirmation = React.lazy(() =>
  import('@/features/index.js').then((module) => ({
    default: module.BookingConfirmation,
  })),
);

const SimpleWillPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.SimpleWillPage })),
);

const TermsPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.TermsPage })),
);

const PrivacyPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.PrivacyPage })),
);

const CookiesPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.CookiesPage })),
);

const ComplaintsPage = React.lazy(() =>
  import('@/features/index.js').then((module) => ({ default: module.ComplaintsPage })),
);

const AboutPage = React.lazy(() =>
  import('@/features/index').then((module) => ({ default: module.AboutPage })),
);

const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <p>Loading...</p>
  </div>
);

export function AppRouter() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ── Public funnel ── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/assessment" element={<QuestionnairePage />} />
          <Route path="/assessment/result" element={<TriggerMomentPage />} />
          <Route path="/will" element={<SimpleWillRedirect />} />
          <Route path="/will/start" element={<SimpleWillPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/book/confirmed" element={<BookingConfirmation />} />

          {/* ── Legal pages ── */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />

          {/* ── 404 fallback ── */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
