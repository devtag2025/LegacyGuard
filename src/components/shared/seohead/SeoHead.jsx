
import { useEffect } from "react";

export function SEOHead({
  title       = "iTrust121 — Estate Planning",
  description = "Make sure your will does exactly what you intend. Wills, LPAs and estate planning advice for UK families.",
  canonical,
}) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) metaDesc.setAttribute("content", description);
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical]);

  return null;
}