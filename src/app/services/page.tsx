import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
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
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
            alt="Professional security operations"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/65 to-[#050810]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/70 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">What We Provide</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Security Services
              <br />
              <span className="gradient-gold">Across Every Sector</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              From mobile patrol and armed guard services to specialized executive
              protection and event security, Stratton delivers tailored programs for
              every property type and risk environment.
            </p>
          </div>
        </div>

        {/* Primary services */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Core Service Lines</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Protection Programs
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => {
                const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
                return (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="card-anduril group block p-6"
                  >
                    <div className="w-10 h-10 border border-[#c49a2a]/25 flex items-center justify-center mb-5 text-[#c49a2a] group-hover:border-[#c49a2a]/50 transition-colors">
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#606878] leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                    <span className="flex items-center gap-1.5 text-[0.75rem] text-[#606878] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide">
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
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-overline mb-4">Specialized Services</p>
                <h2
                  className="display-title text-white mb-6"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Beyond the
                  <br />
                  <span className="gradient-gold">Standard Program</span>
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed mb-8">
                  Stratton&apos;s specialized services address complex, high-value, and
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
                    className="flex items-center gap-4 px-4 py-3.5 border-b border-[#1a2030] hover:border-[#c49a2a]/30 transition-colors"
                  >
                    <div className="w-1 h-5 bg-[#c49a2a]/40 shrink-0" />
                    <span className="text-[0.8125rem] text-[#a0b0c0]">{service}</span>
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
