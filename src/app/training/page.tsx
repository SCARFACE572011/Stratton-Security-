import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
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
      <main className="pt-24">
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-4">Professional Development</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-5">
                Training &
                <br />
                <span className="gradient-gold">Certification Programs</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1rem] leading-relaxed">
                Stratton Security Group offers professional security training workshops
                for organizations and security personnel across Los Angeles.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <p className="label-overline mb-4">Our Certifications</p>
            <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-10">
              Certified Training Programs
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {TRAINING_TOPICS.map((topic, i) => (
                <div
                  key={i}
                  className="bg-[#0b1a2e] border border-[#1a3050] p-6 hover:border-[#1e4878] transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 border border-[#c49a2a]/30 flex items-center justify-center shrink-0">
                      <Award size={18} className="text-[#c49a2a]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-sans)] text-[0.9375rem] font-600 text-[#edf2f7] mb-0.5">
                        {topic.title}
                      </h3>
                      <p className="text-[0.6875rem] text-[#4a6880] tracking-wide uppercase">
                        {topic.sub}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop areas */}
        <section className="section-padding bg-[#0b1a2e]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="label-overline mb-4">Workshop Curriculum</p>
                <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-5">
                  Equipping Your Team
                </h2>
                <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-6">
                  Stratton's training workshops are available to external organizations
                  and businesses seeking to upskill their security teams. Our curriculum
                  is built on real operational experience and California compliance standards.
                </p>
                <Link href="/contact" className="btn-primary text-xs">
                  Inquire About Workshops
                  <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {WORKSHOP_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 px-4 py-3 bg-[#06101e] border border-[#1a3050]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c49a2a] shrink-0" />
                    <span className="text-[0.8125rem] text-[#9fb5cb]">{area}</span>
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
