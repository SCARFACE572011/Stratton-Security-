import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQS, SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "Frequently Asked Questions | Stratton Security Group",
  description:
    "Answers to common questions about Stratton Security Group — licensing, service areas, officer training, deployment timing, armed vs unarmed, and more.",
};

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "FAQ", url: "https://strattonsecuritygroup.com/faq" },
      ]} />
      <Navigation />
      <main className="pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        {/* Hero */}
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-4">Answers</p>
              <h1 className="display-title text-[clamp(2.5rem,6vw,4rem)] text-[#edf2f7] mb-5">
                Frequently Asked
                <br />
                <span className="gradient-gold">Questions</span>
              </h1>
              <p className="text-[#7a9ab8] text-[1rem] leading-relaxed">
                Straight answers about how Stratton is licensed, how our officers
                are trained, and how we deploy. If your question isn't here, call{" "}
                {SITE_CONFIG.phone} or contact us directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="divide-y divide-[#1a3050] border-y border-[#1a3050]">
                {FAQS.map((item, i) => (
                  <details
                    key={i}
                    className="group"
                  >
                    <summary className="list-none cursor-pointer flex items-start justify-between gap-6 py-6 hover:bg-[#0b1a2e]/30 px-1 transition-colors">
                      <div className="flex items-start gap-5">
                        <span className="font-[var(--font-display)] text-[#4a6880] text-[0.875rem] tracking-wider pt-0.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-[var(--font-display)] text-[1rem] md:text-[1.125rem] text-[#edf2f7] uppercase tracking-wide leading-snug">
                          {item.q}
                        </h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-6 h-6 border border-[#1a3050] group-hover:border-[#c49a2a]/50 flex items-center justify-center text-[#c49a2a] transition-all"
                      >
                        <span className="block w-2.5 h-px bg-current" />
                        <span className="block w-px h-2.5 bg-current -ml-[5px] group-open:opacity-0 transition-opacity" />
                      </span>
                    </summary>
                    <div className="pb-6 pl-[3.75rem] pr-10">
                      <p className="text-[0.9375rem] text-[#9fb5cb] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-12 border border-[#1a3050] bg-[#0b1a2e] p-6 md:p-8">
                <p className="label-overline mb-3">Still Have Questions?</p>
                <h3 className="font-[var(--font-display)] text-[1.25rem] text-[#edf2f7] uppercase tracking-wide mb-3">
                  Talk With A Security Advisor
                </h3>
                <p className="text-[0.875rem] text-[#7a9ab8] leading-relaxed mb-5">
                  A Stratton advisor will answer your specific questions, walk
                  through a risk assessment, and scope a program that fits your
                  property.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-xs">
                    Request A Consultation
                    <ArrowRight size={13} />
                  </Link>
                  <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-xs">
                    Call {SITE_CONFIG.phone}
                  </a>
                </div>
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
