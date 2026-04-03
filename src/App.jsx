
import queryClient from "./libs/tanstack/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import Router from "./Router";
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}