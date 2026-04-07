
import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function useIsMobile()  { return !useMediaQuery("(min-width: 768px)"); }
export function useIsTablet()  { return useMediaQuery("(min-width: 768px) and (max-width: 1023px)"); }
export function useIsDesktop() { return useMediaQuery("(min-width: 1024px)"); }