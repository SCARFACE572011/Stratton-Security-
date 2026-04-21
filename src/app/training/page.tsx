import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/training" },
  title: "Training & Workshops | Professional Security Development",
  description:
    "Stratton Security Group provides professional security training workshops and certifications for officers and organizations. TEAM, CPR, and Power to Arrest programs.",
};

const TRAINING_TOPICS = [
  {
    title: "TEAM Certification",
    sub: "Techniques for Effective Alcohol Management",
    description:
      "Industry-recognized training for security professionals working in environments that serve alcohol — including events, hospitality venues, and mixed-use properties.",
  },
  {
    title: "First Aid & CPR",
    sub: "Emergency Response",
    description:
      "All active Stratton officers are certified in First Aid and CPR, ensuring every deployment includes personnel prepared to respond to medical emergencies.",
  },
  {
    title: "Power to Arrest",
    sub: "Legal Authority & Compliance",
    description:
      "Officers complete California's Power to Arrest program, covering the legal framework for security personnel exercising citizen's arrest authority under state law.",
  },
  {
    title: "Initial Officer Training",
    sub: "Core Competency Program",
    description:
      "New officers complete Stratton's comprehensive initial training covering post orders, communication protocols, incident reporting, and professional conduct standards.",
  },
];

const WORKSHOP_AREAS = [
  "Loss prevention strategies",
  "De-escalation and conflict resolution",
  "Emergency response procedures",
  "Access control best practices",
  "Incident documentation and reporting",
  "Customer service for security professionals",
  "CCTV monitoring and surveillance",
  "Active threat response protocols",
];

export default function TrainingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Training", url: "https://strattonsecuritygroup.com/training" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80"
            alt="Security training and professional development"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">Professional Development</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Training &amp;
              <br />
              <span className="gradient-gold">Certification Programs</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              Stratton Security Group offers professional security training workshops
              for organizations and security personnel across Los Angeles.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Our Certifications</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Certified Training Programs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {TRAINING_TOPICS.map((topic, i) => (
                <div key={i} className="card-anduril p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 border border-[#c49a2a]/25 flex items-center justify-center shrink-0">
                      <Award size={18} className="text-[#c49a2a]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-sans)] text-[0.9375rem] font-600 text-white mb-0.5">
                        {topic.title}
                      </h3>
                      <p className="text-[0.6875rem] text-[#606878] tracking-wide uppercase">
                        {topic.sub}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop areas */}
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="label-overline mb-4">Workshop Curriculum</p>
                <h2
                  className="display-title text-white mb-6"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Equipping Your Team
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed mb-8">
                  Stratton&apos;s training workshops are available to external organizations
                  and businesses seeking to upskill their security teams. Our curriculum
                  is built on real operational experience and California compliance standards.
                </p>
                <Link href="/contact" className="btn-primary text-xs">
                  Inquire About Workshops
                  <ArrowRight size={13} />
                </Link>
              </div>
              <div>
                {WORKSHOP_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-4 py-3.5 border-b border-[#1a2030] hover:border-[#c49a2a]/30 transition-colors last:border-0"
                  >
                    <div className="w-1 h-5 bg-[#c49a2a]/40 shrink-0" />
                    <span className="text-[0.8125rem] text-[#a0b0c0]">{area}</span>
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
