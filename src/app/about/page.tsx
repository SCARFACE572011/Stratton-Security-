import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { SITE_CONFIG, DIFFERENTIATORS, BARK_REVIEWS } from "@/lib/constants";
import { ReviewsSchema, BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Stratton Security Group | Our Mission & Values",
  description:
    "Learn about Stratton Security Group — our mission, values, and commitment to protecting people, assets, and peace of mind across Los Angeles and California.",
};

const TEAM_BIOS = [
  {
    name: "Leadership Team",
    role: "Operations Leadership",
    background:
      "Combined experience of 18+ years in law enforcement, 18+ years military service, and 15+ years private security — building a command team with unmatched operational depth.",
    initials: "SSG",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "About", url: "https://strattonsecuritygroup.com/about" },
      ]} />
      <ReviewsSchema reviews={BARK_REVIEWS} />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Security professional on duty"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          {/* Left gold accent */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">About Stratton</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              The Standard of
              <br />
              <span className="gradient-gold">Protective Excellence</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1.0625rem] leading-relaxed max-w-xl mb-8">
              {SITE_CONFIG.brand_promise}
            </p>
            <div className="flex flex-wrap gap-6 text-[0.75rem] text-[#606878] tracking-wide">
              <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              <span className="text-[#c49a2a]/40">·</span>
              <span>Licensed · Bonded · Insured</span>
              <span className="text-[#c49a2a]/40">·</span>
              <span>Serving Los Angeles &amp; Southern California</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="label-overline mb-4">Our Mission</p>
                <h2
                  className="display-title text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  {SITE_CONFIG.mission}
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed">
                  Every property is different. Every client&apos;s security needs are unique.
                  Stratton Security Group builds custom security programs tailored to your
                  specific risk profile, property type, and operational requirements —
                  delivered by licensed, trained professionals committed to your safety.
                </p>
              </div>

              <div>
                <p className="label-overline mb-4">Our Vision</p>
                <h2
                  className="display-title text-white mb-6"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  California&apos;s Gold Standard
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed mb-6">
                  {SITE_CONFIG.vision}
                </p>
                <blockquote className="border-l-2 border-[#c49a2a] pl-5">
                  <p className="text-[0.875rem] text-[#606878] italic leading-relaxed">
                    Excellence isn&apos;t just a tagline — it&apos;s a standard we hold ourselves
                    to in every assignment, every patrol, every interaction.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Our Core Values</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {SITE_CONFIG.values.map((value, i) => (
                <div
                  key={i}
                  className="card-anduril p-7"
                >
                  <div className="w-10 h-10 border border-[#c49a2a]/25 flex items-center justify-center mb-5">
                    <Shield size={18} className="text-[#c49a2a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-white uppercase tracking-wide mb-3">
                    {value}
                  </h3>
                  <div className="w-8 h-px bg-[#c49a2a]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Our Commitment</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
            >
              Why Choose Stratton
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {DIFFERENTIATORS.map((item, i) => (
                <div
                  key={i}
                  className="card-anduril p-6"
                >
                  <h3 className="font-[var(--font-sans)] text-[0.9375rem] font-600 text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="team" className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="max-w-3xl">
              <p className="label-overline mb-4">Our People</p>
              <h2
                className="display-title text-white mb-8"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              >
                Law Enforcement Roots.
                <br />
                <span className="gradient-gold">Professional Standards.</span>
              </h2>
              <div className="space-y-4 text-[#a0b0c0] text-[0.9375rem] leading-relaxed mb-10">
                <p>
                  The Stratton Security Group leadership team brings together backgrounds
                  in law enforcement, military service, and private security management —
                  with a combined 50+ years of protective service experience.
                </p>
                <p>
                  Our team includes officers with current and former LAPD experience,
                  bringing real law enforcement discipline, situational judgment, and
                  operational professionalism to every assignment.
                </p>
                <p>
                  All Stratton officers complete rigorous internal training — including
                  TEAM certification, CPR/First Aid, Power to Arrest, and ongoing
                  professional development — before being deployed on any client property.
                </p>
              </div>
              <div className="border border-dashed border-[#1a2030] p-5 mb-10">
                <p className="text-[0.75rem] text-[#3a4a58] text-center">
                  Leadership team photos and individual bios — to be added with client assets
                </p>
              </div>
              <Link href="/contact" className="btn-primary text-xs">
                Speak with Our Team
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* Verified reviews */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Client Feedback</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              Verified on{" "}
              <span className="gradient-gold">Bark.com</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {BARK_REVIEWS.map((review, i) => (
                <div key={i} className="card-anduril p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#c49a2a" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[0.9375rem] text-[#a0b0c0] leading-relaxed italic mb-5">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#1a2030] pt-4">
                    <p className="text-[0.875rem] text-white font-medium">{review.author}</p>
                    <p className="text-[0.75rem] text-[#606878] mt-0.5">{review.role}</p>
                    <p className="text-[0.6875rem] text-[#3a4a58] mt-0.5">{review.date}</p>
                  </div>
                </div>
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
