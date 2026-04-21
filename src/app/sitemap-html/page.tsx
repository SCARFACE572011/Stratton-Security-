import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { SERVICES, INDUSTRIES } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap | Stratton Security Group",
  description: "Full sitemap for the Stratton Security Group website.",
  robots: { index: false, follow: true },
};

const SITE_SECTIONS = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services Overview", href: "/services" },
      { label: "Industries Served", href: "/industries" },
      { label: "About Us", href: "/about" },
      { label: "Training Programs", href: "/training" },
      { label: "Careers", href: "/careers" },
      { label: "Apply Now", href: "/careers/apply" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-12 md:py-16">
          <div className="container-wide max-w-4xl">
            <p className="label-overline mb-4">Navigation</p>
            <h1 className="display-title text-[clamp(2rem,5vw,3rem)] text-[#edf2f7]">
              Site Map
            </h1>
          </div>
        </div>

        <section className="section-padding bg-[#06101e]">
          <div className="container-wide max-w-4xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Main + Legal */}
              {SITE_SECTIONS.map((section) => (
                <div key={section.title}>
                  <p className="label-overline mb-5">{section.title}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[0.875rem] text-[#7a9ab8] hover:text-[#c49a2a] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Services */}
              <div>
                <p className="label-overline mb-5">Service Lines</p>
                <ul className="space-y-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-[0.875rem] text-[#7a9ab8] hover:text-[#c49a2a] transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div className="md:col-span-2 lg:col-span-1">
                <p className="label-overline mb-5">Industry Verticals</p>
                <ul className="space-y-2">
                  {INDUSTRIES.map((ind) => (
                    <li key={ind.slug}>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="text-[0.875rem] text-[#7a9ab8] hover:text-[#c49a2a] transition-colors"
                      >
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
