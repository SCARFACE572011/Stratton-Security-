import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy | Stratton Security Group",
  description: "Privacy Policy for Stratton Security Group — how we collect, use, and protect your information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you contact us through our website, request a security assessment, or submit a career application, we collect information you provide — including your name, email address, phone number, property address, and any details you share about your security needs. We do not collect payment information through this website.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use the information you provide solely to respond to your inquiry, schedule consultations, evaluate employment applications, and communicate with you about our services. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "Cookies & Analytics",
    body: `Our website may use standard analytics tools to understand how visitors interact with our pages (pages visited, referral source, browser type). This data is aggregated and non-identifying. You can disable cookies through your browser settings without affecting your ability to use the site.`,
  },
  {
    title: "Data Security",
    body: `We take reasonable measures to protect the information you submit through this website. However, no internet transmission is fully secure. Please do not submit highly sensitive personal information (social security numbers, financial account details) through our web forms.`,
  },
  {
    title: "Third-Party Links",
    body: `Our website may contain links to third-party sites (social media, review platforms). We are not responsible for the privacy practices of those sites and encourage you to review their policies before submitting information.`,
  },
  {
    title: "Retention",
    body: `We retain inquiry and application information for a reasonable period to fulfill the purpose for which it was collected, and thereafter in accordance with applicable law. You may request deletion of your information by contacting us directly.`,
  },
  {
    title: "Your Rights",
    body: `California residents may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, request deletion, and opt out of sale (we do not sell personal information). To exercise these rights, contact us at the information below.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of this site after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `Questions about this Privacy Policy? Contact Stratton Security Group at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. Our mailing address is ${SITE_CONFIG.fullAddress}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-12 md:py-16">
          <div className="container-wide max-w-3xl">
            <p className="label-overline mb-4">Legal</p>
            <h1 className="display-title text-[clamp(2rem,5vw,3rem)] text-[#edf2f7] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[#4a6880] text-[0.8125rem] tracking-wide">
              Effective Date: January 1, 2025
            </p>
          </div>
        </div>

        <section className="section-padding bg-[#06101e]">
          <div className="container-wide max-w-3xl">
            <p className="text-[#9fb5cb] text-[0.9375rem] leading-relaxed mb-10 pb-10 border-b border-[#1a3050]">
              Stratton Security Group ("we," "us," or "our") operates the website at
              strattonsecuritygroup.com. This Privacy Policy explains how we handle
              information collected through this site. By using this site, you agree
              to the practices described below.
            </p>

            <div className="space-y-10">
              {SECTIONS.map((section, i) => (
                <div key={i} className="grid sm:grid-cols-12 gap-4 sm:gap-8">
                  <div className="sm:col-span-4">
                    <h2 className="font-[var(--font-display)] text-[0.875rem] text-[#c49a2a] uppercase tracking-widest">
                      {section.title}
                    </h2>
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-[0.9375rem] text-[#9fb5cb] leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
