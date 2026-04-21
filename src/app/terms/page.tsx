import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Service | Stratton Security Group",
  description: "Terms of Service for Stratton Security Group — governing use of this website.",
};

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use this site.`,
  },
  {
    title: "Use of This Site",
    body: `This website is provided for informational purposes and to facilitate contact with Stratton Security Group. You may not use this site for any unlawful purpose, to transmit harmful or offensive content, to impersonate any person or entity, or to attempt to gain unauthorized access to any portion of the site.`,
  },
  {
    title: "No Service Contract",
    body: `Submitting a contact form, requesting an assessment, or otherwise communicating through this website does not create a binding service contract. Security services are provided only under a separately executed written agreement signed by an authorized Stratton Security Group representative.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this site — including text, images, graphics, and design — is the property of Stratton Security Group or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.`,
  },
  {
    title: "Disclaimer of Warranties",
    body: `This website is provided "as is" without warranties of any kind, express or implied. Stratton Security Group makes no warranty that the site will be uninterrupted, error-free, or free of viruses or other harmful components. Information on this site is provided for general purposes only and may not be current or complete.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by law, Stratton Security Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website or its content.`,
  },
  {
    title: "Third-Party Links",
    body: `This site may contain links to third-party websites. These links are provided for convenience only. Stratton Security Group does not control and is not responsible for the content or practices of any linked site.`,
  },
  {
    title: "Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Los Angeles County, California.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these Terms of Service at any time by posting revised terms on this page. Your continued use of the site following any changes constitutes acceptance of the updated terms.`,
  },
  {
    title: "Contact",
    body: `Questions about these Terms? Contact us at ${SITE_CONFIG.email} or ${SITE_CONFIG.phone}. Mailing address: ${SITE_CONFIG.fullAddress}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-12 md:py-16">
          <div className="container-wide max-w-3xl">
            <p className="label-overline mb-4">Legal</p>
            <h1 className="display-title text-[clamp(2rem,5vw,3rem)] text-[#edf2f7] mb-4">
              Terms of Service
            </h1>
            <p className="text-[#4a6880] text-[0.8125rem] tracking-wide">
              Effective Date: January 1, 2025
            </p>
          </div>
        </div>

        <section className="section-padding bg-[#06101e]">
          <div className="container-wide max-w-3xl">
            <p className="text-[#9fb5cb] text-[0.9375rem] leading-relaxed mb-10 pb-10 border-b border-[#1a3050]">
              These Terms of Service govern your use of the Stratton Security Group
              website located at strattonsecuritygroup.com. Please read them carefully.
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
