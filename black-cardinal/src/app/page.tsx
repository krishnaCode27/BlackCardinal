import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { HowWeWorkSection } from "@/components/home/HowWeWorkSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FoundersSection } from "@/components/about/FoundersSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FaqSection } from "@/components/home/FaqSection";
import { faqs } from "@/config/faqs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Black Cardinal - Digital Marketing Agency Morena" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
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
