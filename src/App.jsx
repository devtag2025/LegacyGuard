import queryClient from "./libs/tanstack/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import Router from "./Router";
import { CookieConsent } from "./components/shared/cookie/cookieConsent";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <CookieConsent />
      </BrowserRouter>
    </QueryClientProvider>
  );
}