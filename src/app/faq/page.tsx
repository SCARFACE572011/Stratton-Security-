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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />

        {/* Minimal text hero — no photo, pure black */}
        <div className="bg-[#050810] border-b border-[#c49a2a]/15 pt-32 pb-16 md:pb-20">
          <div className="container-wide">
            <div className="max-w-2xl">
              <p className="label-overline mb-5">Answers</p>
              <h1
                className="display-title text-white mb-5"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Frequently Asked
                <br />
                <span className="gradient-gold">Questions</span>
              </h1>
              <p className="text-[#a0b0c0] text-[1rem] leading-relaxed">
                Straight answers about how Stratton is licensed, how our officers
                are trained, and how we deploy. If your question isn&apos;t here, call{" "}
                {SITE_CONFIG.phone} or contact us directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="max-w-4xl">
              <div className="divide-y divide-[#1a2030]">
                {FAQS.map((item, i) => (
                  <details key={i} className="group">
                    <summary className="list-none cursor-pointer flex items-start justify-between gap-6 py-6 px-1 transition-colors hover:bg-[rgba(255,255,255,0.02)]">
                      <div className="flex items-start gap-5">
                        <span className="font-[var(--font-display)] text-[#3a4a58] text-[0.875rem] tracking-wider pt-0.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-[var(--font-display)] text-[1rem] md:text-[1.125rem] text-white uppercase tracking-wide leading-snug">
                          {item.q}
                        </h3>
                      </div>
                      <span
                        aria-hidden="true"
                        className="shrink-0 w-6 h-6 border border-[#1a2030] group-hover:border-[#c49a2a]/50 flex items-center justify-center text-[#c49a2a] transition-all relative"
                      >
                        <span className="block w-2.5 h-px bg-current" />
                        <span className="block w-px h-2.5 bg-current absolute group-open:opacity-0 transition-opacity" />
                      </span>
                    </summary>
                    <div className="pb-6 pl-[3.75rem] pr-10">
                      <p className="text-[0.9375rem] text-[#a0b0c0] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-14 card-anduril p-6 md:p-8">
                <p className="label-overline mb-3">Still Have Questions?</p>
                <h3 className="font-[var(--font-display)] text-[1.25rem] text-white uppercase tracking-wide mb-3">
                  Talk With A Security Advisor
                </h3>
                <p className="text-[0.875rem] text-[#606878] leading-relaxed mb-6">
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
