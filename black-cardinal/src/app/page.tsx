import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CalculatorSection } from "@/components/home/CalculatorSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <ApproachSection />
      <ComparisonSection />
      <CalculatorSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
