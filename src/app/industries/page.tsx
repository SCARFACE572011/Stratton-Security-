import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries We Serve | Commercial, Residential & Specialized Security",
  description:
    "Stratton Security Group serves 14+ industry sectors across Los Angeles — from commercial real estate and hospitality to government facilities and construction sites.",
};

const INDUSTRY_DESCRIPTIONS: Record<string, string> = {
  "commercial-real-estate":
    "Office buildings, corporate campuses, business parks, and mixed-use properties.",
  "retail":
    "Retail centers, shopping malls, big-box stores, and high-street boutiques.",
  "hospitality":
    "Hotels, resorts, casinos, entertainment venues, and luxury properties.",
  "healthcare":
    "Hospitals, medical offices, clinics, and healthcare campuses.",
  "education":
    "Universities, K–12 schools, community colleges, and educational campuses.",
  "industrial":
    "Manufacturing plants, processing facilities, and industrial parks.",
  "government":
    "Municipal buildings, courthouses, federal facilities, and public infrastructure.",
  "financial":
    "Banks, credit unions, investment firms, and financial data centers.",
  "auto-dealership":
    "Auto dealerships, lot security, inventory protection, and service centers.",
  "estates":
    "Luxury private residences, estates, and high-net-worth home protection.",
  "construction":
    "Active construction sites, job site equipment, and development projects.",
  "logistics":
    "Distribution centers, warehouses, freight hubs, and supply chain operations.",
  "transit":
    "Train stations, bus terminals, transit hubs, and transportation infrastructure.",
  "condominiums":
    "Condominium complexes, high-rises, and multi-unit residential buildings.",
};

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Industries", url: "https://strattonsecuritygroup.com/industries" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1563788850-bdd5b04e1832?auto=format&fit=crop&w=1920&q=80"
            alt="Urban cityscape at night"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/65 to-[#050810]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/75 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">Industry Expertise</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Protecting Every
              <br />
              <span className="gradient-gold">Industry Sector</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              Stratton Security Group serves 14+ industry verticals across Los
              Angeles and Southern California — each with tailored security
              programs designed for that sector&apos;s unique risk environment.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES.map((industry, i) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-anduril group block p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-[var(--font-display)] text-[2rem] text-[#1a2030] font-800 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[#3a4a58] group-hover:text-[#c49a2a] transition-colors mt-1"
                    />
                  </div>
                  <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide mb-2">
                    {industry.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed">
                    {INDUSTRY_DESCRIPTIONS[industry.slug] ?? "Professional security services tailored to your industry."}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
