import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, AlertTriangle, Target } from "lucide-react";
import { INDUSTRIES, SERVICES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    alternates: { canonical: `/industries/${industry.slug}` },
    title: `${industry.label} Security | Stratton Security Group`,
    description:
      industry.summary ??
      `Professional security services for ${industry.label} across Los Angeles and Southern California.`,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedServices = SERVICES.filter((s) =>
    (industry.relatedServices ?? []).includes(s.slug),
  );
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== industry.slug).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Industries", url: "https://strattonsecuritygroup.com/industries" },
        { name: industry.label, url: `https://strattonsecuritygroup.com/industries/${industry.slug}` },
      ]} />
      <Navigation />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#040c1a] border-b border-[#1a3050]">
          <div className="container-wide py-4">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[0.75rem] text-[#4a6880] hover:text-[#c49a2a] uppercase tracking-wide transition-colors"
            >
              <ArrowLeft size={12} />
              All Industries
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-[#040c1a] border-b border-[#1a3050] py-16 md:py-24">
          <div className="container-wide">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8">
                <p className="label-overline mb-4">Industry Vertical</p>
                <h1 className="display-title text-[clamp(2.25rem,5vw,3.5rem)] text-[#edf2f7] mb-6 leading-[1.05]">
                  {industry.label}
                  <br />
                  <span className="gradient-gold">Security Programs</span>
                </h1>
                {industry.summary && (
                  <p className="text-[#9fb5cb] text-[1.0625rem] leading-relaxed">
                    {industry.summary}
                  </p>
                )}
              </div>
              <div className="lg:col-span-4">
                <div className="border border-[#1a3050] bg-[#06101e] p-6">
                  <p className="label-overline mb-3">Tailored Program</p>
                  <h3 className="font-[var(--font-display)] text-[1.125rem] text-[#edf2f7] uppercase tracking-wide mb-2">
                    Built For {industry.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed mb-5">
                    Every deployment begins with a risk assessment specific to your
                    industry's threat profile and operational requirements.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-xs">
                    Request An Assessment
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threats + Approach */}
        <section className="section-padding bg-[#06101e]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10">
              {industry.threats && industry.threats.length > 0 && (
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-9 h-9 border border-[#c49a2a]/30 flex items-center justify-center text-[#c49a2a]">
                      <AlertTriangle size={16} strokeWidth={1.5} />
                    </div>
                    <p className="label-overline">Primary Risk Exposure</p>
                  </div>
                  <h2 className="display-title text-[clamp(1.5rem,2.5vw,1.875rem)] text-[#edf2f7] mb-6">
                    Threats We Mitigate
                  </h2>
                  <div className="space-y-2">
                    {industry.threats.map((threat) => (
                      <div
                        key={threat}
                        className="flex items-start gap-3 px-4 py-3 bg-[#0b1a2e] border border-[#1a3050]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c49a2a] shrink-0 mt-[0.5rem]" />
                        <span className="text-[0.875rem] text-[#9fb5cb] leading-relaxed">
                          {threat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {industry.approach && (
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-9 h-9 border border-[#c49a2a]/30 flex items-center justify-center text-[#c49a2a]">
                      <Target size={16} strokeWidth={1.5} />
                    </div>
                    <p className="label-overline">Our Approach</p>
                  </div>
                  <h2 className="display-title text-[clamp(1.5rem,2.5vw,1.875rem)] text-[#edf2f7] mb-6">
                    How Stratton Deploys
                  </h2>
                  <div className="bg-[#0b1a2e] border border-[#1a3050] p-6">
                    <p className="text-[0.9375rem] text-[#9fb5cb] leading-relaxed">
                      {industry.approach}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Applicable services */}
        {relatedServices.length > 0 && (
          <section className="section-padding bg-[#0b1a2e]">
            <div className="container-wide">
              <p className="label-overline mb-4">Applicable Services</p>
              <h2 className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#edf2f7] mb-10">
                Services For This Vertical
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="card-dark group block p-6"
                  >
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-[#edf2f7] uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="flex items-center gap-1.5 text-[0.6875rem] text-[#4a6880] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide">
                      Learn more
                      <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other industries */}
        <section className="section-padding bg-[#06101e] border-t border-[#1a3050]">
          <div className="container-wide">
            <p className="label-overline mb-4">Explore More</p>
            <h2 className="display-title text-[clamp(1.5rem,2.5vw,1.875rem)] text-[#edf2f7] mb-8">
              Other Industries We Protect
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-3 p-3 border border-[#1a3050] hover:border-[#c49a2a]/40 hover:bg-[#0b1a2e] transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1a3050] group-hover:bg-[#c49a2a] transition-colors shrink-0" />
                  <span className="text-[0.8125rem] text-[#7a9ab8] group-hover:text-[#b8cce0] transition-colors">
                    {ind.label}
                  </span>
                </Link>
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
