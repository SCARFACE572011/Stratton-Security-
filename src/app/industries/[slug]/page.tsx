import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
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
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero" style={{ minHeight: "55vh" }}>
          <Image
            src="https://images.unsplash.com/photo-1563788850-bdd5b04e1832?auto=format&fit=crop&w=1920&q=80"
            alt={`${industry.label} security`}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-16 pt-32 w-full">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[0.75rem] text-[#606878] hover:text-[#c49a2a] uppercase tracking-wide transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              All Industries
            </Link>
            <p className="label-overline mb-4">Industry Vertical</p>
            <h1
              className="display-title text-white mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              {industry.label}
              <br />
              <span className="gradient-gold">Security Programs</span>
            </h1>
            {industry.summary && (
              <p className="text-[#a0b0c0] text-[1.0625rem] leading-relaxed max-w-2xl">
                {industry.summary}
              </p>
            )}
          </div>
        </div>

        {/* CTA sidebar + content */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                {/* Threats + Approach */}
                <div className="grid md:grid-cols-2 gap-8">
                  {industry.threats && industry.threats.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-9 h-9 border border-[#c49a2a]/30 flex items-center justify-center text-[#c49a2a]">
                          <AlertTriangle size={16} strokeWidth={1.5} />
                        </div>
                        <p className="label-overline">Risk Exposure</p>
                      </div>
                      <h2
                        className="display-title text-white mb-6"
                        style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
                      >
                        Threats We Mitigate
                      </h2>
                      <div className="space-y-2">
                        {industry.threats.map((threat) => (
                          <div
                            key={threat}
                            className="flex items-start gap-3 px-4 py-3 border-b border-[#1a2030]"
                          >
                            <div className="w-1 h-5 bg-[#c49a2a]/40 shrink-0 mt-0.5" />
                            <span className="text-[0.875rem] text-[#a0b0c0] leading-relaxed">
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
                      <h2
                        className="display-title text-white mb-6"
                        style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
                      >
                        How Stratton Deploys
                      </h2>
                      <div className="card-anduril p-5">
                        <p className="text-[0.9375rem] text-[#a0b0c0] leading-relaxed">
                          {industry.approach}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="card-anduril p-6 sticky top-24">
                  <p className="label-overline mb-3">Tailored Program</p>
                  <h3 className="font-[var(--font-display)] text-[1.125rem] text-white uppercase tracking-wide mb-3">
                    Built For {industry.label}
                  </h3>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed mb-5">
                    Every deployment begins with a risk assessment specific to your
                    industry&apos;s threat profile and operational requirements.
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

        {/* Applicable services */}
        {relatedServices.length > 0 && (
          <section className="section-padding bg-[#080c14]">
            <div className="container-wide">
              <div className="section-divider mb-16" />
              <p className="label-overline mb-4">Applicable Services</p>
              <h2
                className="display-title text-white mb-10"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                Services For This Vertical
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="card-anduril group block p-6"
                  >
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#606878] leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="flex items-center gap-1.5 text-[0.6875rem] text-[#606878] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide">
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
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Explore More</p>
            <h2
              className="display-title text-white mb-8"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Other Industries We Protect
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {otherIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-3 p-3 border border-[#1a2030] hover:border-[#c49a2a]/40 transition-all duration-200"
                >
                  <div className="w-1 h-5 bg-[#1a2030] group-hover:bg-[#c49a2a]/40 transition-colors shrink-0" />
                  <span className="text-[0.8125rem] text-[#606878] group-hover:text-[#a0b0c0] transition-colors">
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
