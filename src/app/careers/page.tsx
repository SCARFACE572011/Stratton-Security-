import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
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
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero" style={{ minHeight: "65vh" }}>
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
            alt="Professional security team"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">Join Our Team</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Careers at
              <br />
              <span className="gradient-gold">Stratton Security</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              We&apos;re looking for disciplined, professional security officers to join
              our growing team. If you hold a California Guard Card and take pride in
              your work, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Open positions */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Current Openings</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Open Positions
            </h2>

            {/* Position rows — Anduril-style horizontal list */}
            <div className="mb-16">
              {OPEN_POSITIONS.map((position, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-[#1a2030] hover:border-[#c49a2a]/30 transition-colors last:border-0"
                >
                  <div>
                    <h3 className="font-[var(--font-display)] text-[1rem] text-white uppercase tracking-wide mb-1.5">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.75rem] text-[#606878]">
                      <span>{position.type}</span>
                      <span className="text-[#c49a2a]/30">·</span>
                      <span>{position.location}</span>
                      <span className="text-[#c49a2a]/30">·</span>
                      <span>{position.area}</span>
                    </div>
                  </div>
                  <Link href="/careers/apply" className="btn-primary text-xs shrink-0">
                    Apply Now
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Benefits + Requirements */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="label-overline mb-6">Why Stratton</p>
                <div className="space-y-3">
                  {BENEFITS.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-[#10b981] mt-0.5 shrink-0" />
                      <span className="text-[0.875rem] text-[#a0b0c0]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-overline mb-6">Requirements</p>
                <div className="space-y-3">
                  {REQUIREMENTS.map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Shield size={14} className="text-[#c49a2a] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span className="text-[0.875rem] text-[#a0b0c0]">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="display-title text-white mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              >
                Ready to Apply?
              </h2>
              <p className="text-[#a0b0c0] text-[0.9375rem] mb-10 leading-relaxed">
                Send your resume and California Guard Card details to our operations
                team. We&apos;ll follow up promptly to discuss next steps.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Career Application`}
                  className="btn-primary text-sm"
                >
                  Email Your Application
                  <ArrowRight size={14} />
                </a>
                <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-sm">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
