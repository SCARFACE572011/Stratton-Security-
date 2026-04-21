import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
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
      <main className="pt-24">
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-4">Industry Expertise</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-5">
                Protecting Every
                <br />
                <span className="gradient-gold">Industry Sector</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1rem] leading-relaxed">
                Stratton Security Group serves 14+ industry verticals across Los
                Angeles and Southern California — each with tailored security
                programs designed for that sector's unique risk environment.
              </p>
            </div>
          </div>
        </div>

        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDUSTRIES.map((industry, i) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="card-dark group block p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-[var(--font-display)] text-[2rem] text-[#1a3050] font-800 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[#2a3d50] group-hover:text-[#c49a2a] transition-colors mt-1"
                    />
                  </div>
                  <h3 className="font-[var(--font-display)] text-[0.9375rem] text-[#edf2f7] uppercase tracking-wide mb-2">
                    {industry.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed">
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
