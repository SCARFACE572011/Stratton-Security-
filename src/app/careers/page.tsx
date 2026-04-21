import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers | Join Stratton Security Group",
  description:
    "Join Stratton Security Group. We're looking for licensed, professional security officers in Los Angeles and Southern California. Apply today.",
};

const BENEFITS = [
  "Competitive compensation",
  "24/7 operations — flexible scheduling available",
  "TEAM, CPR, and professional development training provided",
  "Uniform and equipment provided",
  "Opportunities for advancement",
  "Work alongside current and former LAPD officers",
  "Supportive, professional team environment",
];

const REQUIREMENTS = [
  "Active California Guard Card (BSIS required)",
  "Clean background check",
  "Professional appearance and demeanor",
  "Reliable transportation",
  "Strong communication skills",
  "Ability to stand/walk for extended periods",
];

const OPEN_POSITIONS = [
  // TODO: Replace with actual job listings from Guardist or client
  {
    title: "Unarmed Security Officer",
    type: "Full-Time / Part-Time",
    location: "Los Angeles, CA",
    area: "Various — Commercial & Residential",
  },
  {
    title: "Armed Security Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Commercial & High-Security Properties",
  },
  {
    title: "Mobile Patrol Officer",
    type: "Full-Time",
    location: "Los Angeles & Southern California",
    area: "Residential & Commercial Patrol Routes",
  },
  {
    title: "Concierge / Lobby Officer",
    type: "Full-Time",
    location: "Los Angeles, CA",
    area: "Corporate & Luxury Residential Buildings",
  },
];

function JobPostingsSchema() {
  const datePosted = "2025-01-01";
  const validThrough = "2026-12-31";
  const schema = OPEN_POSITIONS.map((position) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description: `Stratton Security Group is hiring a ${position.title} in ${position.location}. Requirements: Active California Guard Card (BSIS). ${position.type} position. Competitive compensation, uniform and equipment provided, professional development training included.`,
    datePosted,
    validThrough,
    employmentType: position.type.includes("Part") ? ["FULL_TIME", "PART_TIME"] : ["FULL_TIME"],
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      sameAs: "https://strattonsecuritygroup.com",
      logo: "https://strattonsecuritygroup.com/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: {
        "@type": "QuantitativeValue",
        unitText: "HOUR",
      },
    },
    qualifications: "Active California Guard Card (BSIS required). Clean background check. Professional appearance and reliable transportation.",
    industry: "Security Services",
    occupationalCategory: "33-9032.00",
    directApply: true,
    url: "https://strattonsecuritygroup.com/careers/apply",
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Careers", url: "https://strattonsecuritygroup.com/careers" },
      ]} />
      <JobPostingsSchema />
      <Navigation />
      <main className="pt-24">
        {/* Hero */}
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-4">Join Our Team</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-5">
                Careers at
                <br />
                <span className="gradient-gold">Stratton Security</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1rem] leading-relaxed">
                We're looking for disciplined, professional security officers to join
                our growing team. If you hold a California Guard Card and take pride in
                your work, we want to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Open positions */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Current Openings</p>
            <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-10">
              Open Positions
            </h2>
            <div className="space-y-3 mb-12">
              {OPEN_POSITIONS.map((position, i) => (
                <div
                  key={i}
                  className="bg-[#0b1a2e] border border-[#1a3050] p-5 hover:border-[#c49a2a]/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-[var(--font-sans)] text-[1rem] font-600 text-[#edf2f7] mb-1.5">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.75rem] text-[#7a9ab8]">
                        <span>{position.type}</span>
                        <span>·</span>
                        <span>{position.location}</span>
                        <span>·</span>
                        <span>{position.area}</span>
                      </div>
                    </div>
                    <Link
                      href="/careers/apply"
                      className="btn-primary text-xs shrink-0"
                    >
                      Apply Now
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Why work here + requirements */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="label-overline mb-4">Why Stratton</p>
                <div className="space-y-2.5">
                  {BENEFITS.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#10b981] mt-0.5 shrink-0" />
                      <span className="text-[0.875rem] text-[#9fb5cb]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-overline mb-4">Requirements</p>
                <div className="space-y-2.5">
                  {REQUIREMENTS.map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Shield size={14} className="text-[#c49a2a] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.875rem] text-[#9fb5cb]">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-[#040c1a] border-t border-[#1a3050] py-16 md:py-20">
          <div className="container-wide text-center">
            <h2 className="display-title text-[clamp(2rem,4.5vw,3rem)] text-[#edf2f7] mb-5">
              Ready to Apply?
            </h2>
            <p className="text-[#7a9ab8] text-[0.9375rem] max-w-lg mx-auto mb-8 leading-relaxed">
              Send your resume and California Guard Card details to our operations
              team. We'll follow up promptly to discuss next steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}?subject=Career Application`}
                className="btn-primary text-sm"
              >
                Email Your Application
                <ArrowRight size={14} />
              </a>
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="btn-secondary text-sm"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
