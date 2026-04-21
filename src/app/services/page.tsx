import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, Building2, Home, Star, ShoppingBag, HardHat, Briefcase } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Security Services | Patrol, Guard & Protection Programs",
  description:
    "Stratton Security Group provides professional patrol services, armed & unarmed guards, commercial security, residential protection, and specialized security across Los Angeles.",
};

const ICON_MAP = {
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
} as const;

const SPECIALIZED_SERVICES = [
  "Executive Protection & Bodyguard Services",
  "Corporate Security Programs",
  "Concierge & Lobby Ambassador Services",
  "Loss Prevention",
  "Firewatch Security",
  "Access Control Implementation",
  "CCTV & Surveillance Monitoring",
  "K9 / Canine Detection Teams",
  "Plain Clothed Security Officers",
  "Chauffeur Services",
  "Door-to-Door Escort Services",
  "Security Consulting & Post Analysis",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Services", url: "https://strattonsecuritygroup.com/services" },
      ]} />
      <Navigation />
      <main className="pt-24">
        {/* Page hero */}
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-4">What We Provide</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-5">
                Security Services
                <br />
                <span className="gradient-gold">Across Every Sector</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1rem] leading-relaxed">
                From mobile patrol and armed guard services to specialized executive
                protection and event security, Stratton delivers tailored programs for
                every property type and risk environment.
              </p>
            </div>
          </div>
        </div>

        {/* Primary services */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Core Service Lines</p>
            <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-10">
              Protection Programs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => {
                const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="card-dark group block p-6"
                  >
                    <div className="w-10 h-10 border border-[#1a3050] flex items-center justify-center mb-5 text-[#c49a2a] group-hover:border-[#c49a2a]/40 transition-colors">
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-[#edf2f7] uppercase tracking-wide mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                    <span className="flex items-center gap-1.5 text-[0.75rem] text-[#4a6880] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide">
                      Learn more
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized services */}
        <section className="section-padding bg-[#0b1a2e]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-overline mb-4">Specialized Services</p>
                <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-5">
                  Beyond the
                  <br />
                  <span className="gradient-gold">Standard Program</span>
                </h2>
                <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-6">
                  Stratton's specialized services address complex, high-value, and
                  high-sensitivity security requirements — from executive protection
                  and K9 detection to access control and CCTV monitoring.
                </p>
                <Link href="/contact" className="btn-primary text-xs">
                  Request a Consultation
                  <ArrowRight size={13} />
                </Link>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-2">
                {SPECIALIZED_SERVICES.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 px-4 py-3 border border-[#1a3050] hover:border-[#1e4878] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c49a2a] shrink-0" />
                    <span className="text-[0.8125rem] text-[#9fb5cb]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
