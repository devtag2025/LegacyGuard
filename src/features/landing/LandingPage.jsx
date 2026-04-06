import { useEffect } from "react";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import HeroSection from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import ProblemSection from "@/components/landing/ProblemSection";
import { EducationSection } from "@/components/landing/EducationSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { TestimonialsSection } from "@/components/landing/TestimonialSection";
import { TrustSignalsSection } from "@/components/landing/TrustSignalSection";
function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function LandingPage() {
  useScrollAnimation();

  return (
    <>
      <Header transparent={true} />

      <main id="main-content" tabIndex={-1}>

        
        
        <HeroSection />
        <ProblemSection />
        <EducationSection />
        <HowItWorksSection />
        <TrustSignalsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}

export default LandingPage;