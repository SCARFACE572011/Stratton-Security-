import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
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
  // TODO: Replace with actual leadership photos, names, and bios from client
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
      <main className="pt-24">
        {/* Hero */}
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="label-overline mb-4">About Stratton</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-6">
                The Standard of
                <br />
                <span className="gradient-gold">Protective Excellence</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1.0625rem] leading-relaxed mb-8">
                {SITE_CONFIG.brand_promise}
              </p>
              <div className="flex flex-wrap gap-6 text-[0.75rem] text-[#4a6880] tracking-wide">
                <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
                <span>·</span>
                <span>Licensed · Bonded · Insured</span>
                <span>·</span>
                <span>Serving Los Angeles & Southern California</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="label-overline mb-4">Our Mission</p>
                <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-5">
                  {SITE_CONFIG.mission}
                </h2>
                <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed">
                  Every property is different. Every client's security needs are unique.
                  Stratton Security Group builds custom security programs tailored to your
                  specific risk profile, property type, and operational requirements —
                  delivered by licensed, trained professionals committed to your safety.
                </p>
              </div>

              <div>
                <p className="label-overline mb-4">Our Vision</p>
                <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-5">
                  California's Gold Standard
                </h2>
                <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-5">
                  {SITE_CONFIG.vision}
                </p>
                <blockquote className="border-l-2 border-[#c49a2a] pl-4">
                  <p className="text-[0.875rem] text-[#9fb5cb] italic leading-relaxed">
                    Excellence isn't just a tagline — it's a standard we hold ourselves
                    to in every assignment, every patrol, every interaction.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding bg-[#0b1a2e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Our Core Values</p>
            <h2 className="display-title text-[clamp(2rem,4vw,3rem)] text-[#edf2f7] mb-10">
              What We Stand For
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {SITE_CONFIG.values.map((value, i) => (
                <div
                  key={i}
                  className="bg-[#06101e] border border-[#1a3050] p-7 hover:border-[#c49a2a]/30 transition-colors"
                >
                  <div className="w-10 h-10 border border-[#c49a2a]/30 flex items-center justify-center mb-5">
                    <Shield size={18} className="text-[#c49a2a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-[var(--font-display)] text-xl text-[#edf2f7] uppercase tracking-wide mb-3">
                    {value}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#c49a2a]/40" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Our Commitment</p>
            <h2 className="display-title text-[clamp(2rem,4vw,3rem)] text-[#edf2f7] mb-10">
              Why Choose Stratton
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DIFFERENTIATORS.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0b1a2e] border border-[#1a3050] p-6 hover:border-[#1e4878] transition-colors"
                >
                  <h3 className="font-[var(--font-sans)] text-[0.9375rem] font-600 text-[#edf2f7] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership note */}
        <section id="team" className="section-padding bg-[#0b1a2e]">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="label-overline mb-4">Our People</p>
              <h2 className="display-title text-[clamp(2rem,4vw,3rem)] text-[#edf2f7] mb-6">
                Law Enforcement Roots.
                <br />
                <span className="gradient-gold">Professional Standards.</span>
              </h2>
              <div className="space-y-4 text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-8">
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
              {/* TODO: Add actual leadership photos and bios when client provides them */}
              <div className="bg-[#0b1a2e] border border-[#1a3050] border-dashed p-5 mb-8">
                <p className="text-[0.75rem] text-[#4a6880] text-center">
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
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Client Feedback</p>
            <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-10">
              Verified on{" "}
              <span className="gradient-gold">Bark.com</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {BARK_REVIEWS.map((review, i) => (
                <div key={i} className="bg-[#0b1a2e] border border-[#1a3050] p-6 hover:border-[#1e4878] transition-colors">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#c49a2a" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[0.9375rem] text-[#b8cce0] leading-relaxed italic mb-5">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="border-t border-[#1a3050] pt-4">
                    <p className="text-[0.875rem] text-[#edf2f7] font-medium">{review.author}</p>
                    <p className="text-[0.75rem] text-[#7a9ab8] mt-0.5">{review.role}</p>
                    <p className="text-[0.6875rem] text-[#4a6880] mt-0.5">{review.date}</p>
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
