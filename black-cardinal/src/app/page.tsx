import { HeroSection } from "@/components/home/HeroSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FoundersSection } from "@/components/about/FoundersSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowWeWorkSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <FoundersSection />
      <PortfolioSection />
      <ComparisonSection />
      <FaqSection />
    </>
  );
}

