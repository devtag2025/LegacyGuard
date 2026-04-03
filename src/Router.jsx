import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Loader from './components/shared/loader/Loader';

// Eager load — first thing user sees
import LandingPage from '@/features/landing/LandingPage';

// Lazy load — split into separate chunks
// const QuestionnairePage = lazy(() => import('@/features/questionnaire/QuestionnairePage'));
// const TriggerMomentPage = lazy(() => import('@/features/routing/TriggerMomentPage'));
// const BookingPage = lazy(() => import('@/features/booking/BookingPage'));
// const BookingConfirmation = lazy(() => import('@/features/booking/BookingConfirmation'));
// const SimpleWillPage = lazy(() => import('@/features/will/SimpleWillPage'));
// const AdminDashboard = lazy(() => import('@/features/admin/AdminDashboard'));
// const LoginPage = lazy(() => import('@/features/admin/LoginPage'));

function LazyWrapper({ children }) {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      {children}
    </Suspense>
  );
}

export default function Router() {
  return (
    <Routes>
      {/* Public funnel routes */}
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/questionnaire" element={<LazyWrapper><QuestionnairePage /></LazyWrapper>} />
      <Route path="/your-situation" element={<LazyWrapper><TriggerMomentPage /></LazyWrapper>} />
      <Route path="/book-consultation" element={<LazyWrapper><BookingPage /></LazyWrapper>} />
      <Route path="/booking-confirmed" element={<LazyWrapper><BookingConfirmation /></LazyWrapper>} />
      <Route path="/simple-will" element={<LazyWrapper><SimpleWillPage /></LazyWrapper>} />


      <Route path="/admin/login" element={<LazyWrapper><LoginPage /></LazyWrapper>} />
      <Route path="/admin/*" element={<LazyWrapper><AdminDashboard /></LazyWrapper>} /> */}


      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}