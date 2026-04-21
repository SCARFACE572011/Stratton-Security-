import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
  Check,
} from "lucide-react";
import { SERVICES, INDUSTRIES, SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema, ServiceSchema } from "@/app/schema";
import type { Metadata } from "next";

const ICON_MAP = {
  Shield,
  ShieldCheck,
  Building2,
  Home,
  Star,
  ShoppingBag,
  HardHat,
  Briefcase,
} as const;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  return {
    alternates: { canonical: `/services/${service.slug}` },
    title: `${service.title} | Stratton Security Group`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
  const relatedIndustries = INDUSTRIES.filter((ind) =>
    service.relatedIndustries.includes(ind.slug),
  );
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Services", url: "https://strattonsecuritygroup.com/services" },
        { name: service.title, url: `https://strattonsecuritygroup.com/services/${service.slug}` },
      ]} />
      <ServiceSchema
        name={service.title}
        description={service.shortDescription}
        url={`https://strattonsecuritygroup.com/services/${service.slug}`}
      />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero" style={{ minHeight: "55vh" }}>
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80"
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-16 pt-32 w-full">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[0.75rem] text-[#606878] hover:text-[#c49a2a] uppercase tracking-wide transition-colors mb-8"
            >
              <ArrowLeft size={12} />
              All Services
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 border border-[#c49a2a]/40 flex items-center justify-center text-[#c49a2a]">
                <IconComponent size={22} strokeWidth={1.5} />
              </div>
              <p className="label-overline">Service Line</p>
            </div>
            <h1
              className="display-title text-white mb-5 max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              {service.title}
            </h1>
            <p className="text-[#a0b0c0] text-[1.0625rem] leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Long description + CTA sidebar */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="border border-[#1a2030] bg-[rgba(255,255,255,0.03)] p-6 sticky top-24">
                  <p className="label-overline mb-3">Get Started</p>
                  <h3 className="font-[var(--font-display)] text-[1.125rem] text-white uppercase tracking-wide mb-3">
                    Request A Consultation
                  </h3>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed mb-5">
                    Talk with a Stratton advisor about a tailored program for your property.
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-xs">
                    Start Your Assessment
                    <ArrowRight size={13} />
                  </Link>
                  <div className="mt-4 pt-4 border-t border-[#1a2030] text-[0.75rem] text-[#606878]">
                    Or call us directly
                    <a
                      href={`tel:${SITE_CONFIG.phoneE164}`}
                      className="block font-[var(--font-display)] text-[#c49a2a] text-[1rem] mt-1 tracking-wide"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">What You Get</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              Core Program Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit) => (
                <div key={benefit.title} className="card-anduril p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-5 h-5 border border-[#c49a2a]/40 flex items-center justify-center">
                      <Check size={11} className="text-[#c49a2a]" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-[0.875rem] text-[#606878] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="label-overline mb-4">Capabilities</p>
                <h2
                  className="display-title text-white mb-5"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  Program
                  <br />
                  <span className="gradient-gold">Components</span>
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed">
                  Stratton programs are modular — combine the components that match
                  your property&apos;s risk profile and operational requirements.
                </p>
              </div>
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-2">
                {service.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-4 px-4 py-3.5 border-b border-[#1a2030] hover:border-[#c49a2a]/30 transition-colors"
                  >
                    <div className="w-1 h-5 bg-[#c49a2a]/40 shrink-0" />
                    <span className="text-[0.8125rem] text-[#a0b0c0]">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related industries */}
        {relatedIndustries.length > 0 && (
          <section className="section-padding bg-[#080c14]">
            <div className="container-wide">
              <div className="section-divider mb-16" />
              <p className="label-overline mb-4">Where It Fits</p>
              <h2
                className="display-title text-white mb-10"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
              >
                Industries We Serve With This Program
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="card-anduril group flex items-center justify-between p-5"
                  >
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide">
                      {industry.label}
                    </h3>
                    <ArrowRight
                      size={14}
                      className="text-[#3a4a58] group-hover:text-[#c49a2a] group-hover:translate-x-1 transition-all shrink-0"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Explore More</p>
            <h2
              className="display-title text-white mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Other Service Lines
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((s) => {
                const Icon = ICON_MAP[s.icon as keyof typeof ICON_MAP] ?? Shield;
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card-anduril group block p-5">
                    <div className="w-9 h-9 border border-[#c49a2a]/20 flex items-center justify-center mb-4 text-[#c49a2a] group-hover:border-[#c49a2a]/50 transition-colors">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[var(--font-display)] text-[0.875rem] text-white uppercase tracking-wide mb-2">
                      {s.title}
                    </h3>
                    <span className="flex items-center gap-1.5 text-[0.6875rem] text-[#606878] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide">
                      View
                      <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
