import { HeroSection } from "@/components/home/HeroSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FoundersSection } from "@/components/about/FoundersSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CalculatorSection } from "@/components/home/CalculatorSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <FoundersSection />
      <PortfolioSection />
      <ComparisonSection />
      <CalculatorSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
