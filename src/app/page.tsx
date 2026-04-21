import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyStratton from "@/components/home/WhyStratton";
import MidPageCTA from "@/components/home/MidPageCTA";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ValuesSection from "@/components/home/ValuesSection";
import CTASection from "@/components/home/CTASection";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Stratton Security Group | Professional Security Services — Los Angeles",
  description:
    `Stratton Security Group delivers professional patrol, guard, and security management services across Los Angeles and Southern California. CA PPO #${SITE_CONFIG.licenseNumber}. 24/7 availability.`,
  keywords: [
    "security services Los Angeles",
    "private security company Los Angeles",
    "patrol services LA",
    "commercial security Los Angeles",
    "residential security California",
    "security guard company",
    "Stratton Security Group",
    "PPO security company California",
  ],
  openGraph: {
    title: "Stratton Security Group | Excellence In Protection",
    description:
      "Professional security services protecting businesses, communities, and assets across Los Angeles and Southern California. 24/7/365.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#c49a2a] focus:text-[#06101e] focus:text-sm focus:font-600"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        {/* 1. Cinematic hero with video */}
        <HeroSection />

        {/* 2. Immediate trust indicators */}
        <TrustBar />

        {/* 3. Client logos / trusted by */}
        <ClientLogosSection />

        {/* 4. Services overview */}
        <ServicesSection />

        {/* 4. Stats/social proof numbers */}
        <StatsSection />

        {/* 5. Why Stratton — differentiators */}
        <WhyStratton />

        {/* 6. Mid-page CTA strip */}
        <MidPageCTA />

        {/* 7. Industries served */}
        <IndustriesSection />

        {/* 7. Values, mission, certifications */}
        <ValuesSection />

        {/* 8. Testimonials + Bark reviews */}
        <TestimonialsSection />

        {/* 9. Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
