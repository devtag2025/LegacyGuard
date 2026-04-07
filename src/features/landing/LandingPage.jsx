import { PageLayout } from "@/components/layout/PageLayout";
import { SEOHead } from "@/components/shared/seohead/SeoHead";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import { EducationSection } from "@/components/landing/EducationSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { TrustSignalsSection } from "@/components/landing/TrustSignalSection";
import { TestimonialsSection } from "@/components/landing/TestimonialSection";
import { CtaSection } from "@/components/landing/CtaSection";


export function LandingPage() {
  return (
    <PageLayout transparentHeader={true}>
      <SEOHead
        title="iTrust121 — Start Your Will & Make Sure It Does What You Intend"
        description="A 3-minute assessment to understand what your estate actually requires. Wills, LPAs, and estate planning for UK homeowners and families."
        canonical="https://itrust121.co.uk"
      />
      <HeroSection />
      <ProblemSection />
      <EducationSection />
      <HowItWorksSection />
      <TrustSignalsSection />
      <TestimonialsSection />
      <CtaSection />
    </PageLayout>
  );
}