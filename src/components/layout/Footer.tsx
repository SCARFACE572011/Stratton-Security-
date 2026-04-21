import Link from "next/link";
import { Phone, Mail, MapPin, Shield, ArrowRight } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040c1a] border-t border-[#1a3050]">
      {/* Main footer content */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-8 h-8 flex items-center justify-center border border-[#c49a2a]">
                <Shield size={15} className="text-[#c49a2a]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-[0.95rem] font-700 tracking-[0.06em] text-[#edf2f7] uppercase">
                  Stratton
                </span>
                <span className="font-[var(--font-sans)] text-[0.5rem] text-[#7a9ab8] tracking-[0.22em] uppercase">
                  Security Group
                </span>
              </div>
            </Link>

            <p className="text-[0.875rem] text-[#7a9ab8] leading-relaxed max-w-xs mb-6">
              Professional security services protecting businesses, residential
              communities, and assets. Available 24/7, 365 days a year.
            </p>

            {/* Social links */}
            {(SITE_CONFIG.social.instagram || SITE_CONFIG.social.facebook || SITE_CONFIG.social.twitter) && (
              <div className="flex items-center gap-2 mb-5">
                {SITE_CONFIG.social.instagram && (
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Stratton Security on Instagram"
                    className="w-8 h-8 border border-[#1a3050] flex items-center justify-center text-[#4a6880] hover:text-[#c49a2a] hover:border-[#c49a2a]/40 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="3.5" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.facebook && (
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Stratton Security on Facebook"
                    className="w-8 h-8 border border-[#1a3050] flex items-center justify-center text-[#4a6880] hover:text-[#c49a2a] hover:border-[#c49a2a]/40 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                )}
                {SITE_CONFIG.social.twitter && (
                  <a
                    href={SITE_CONFIG.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Stratton Security on X (Twitter)"
                    className="w-8 h-8 border border-[#1a3050] flex items-center justify-center text-[#4a6880] hover:text-[#c49a2a] hover:border-[#c49a2a]/40 transition-colors"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
              </div>
            )}

            {/* Contact block */}
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="flex items-center gap-3 text-[0.875rem] text-[#9fb5cb] hover:text-[#c49a2a] transition-colors group"
              >
                <div className="w-7 h-7 border border-[#1a3050] flex items-center justify-center group-hover:border-[#c49a2a] transition-colors">
                  <Phone size={12} />
                </div>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-[0.875rem] text-[#9fb5cb] hover:text-[#c49a2a] transition-colors group"
              >
                <div className="w-7 h-7 border border-[#1a3050] flex items-center justify-center group-hover:border-[#c49a2a] transition-colors">
                  <Mail size={12} />
                </div>
                {SITE_CONFIG.email}
              </a>
              {SITE_CONFIG.serviceAreas.length > 0 && (
                <div className="flex items-start gap-3 text-[0.875rem] text-[#7a9ab8]">
                  <div className="w-7 h-7 border border-[#1a3050] flex items-center justify-center mt-0.5 shrink-0">
                    <MapPin size={12} />
                  </div>
                  <span>{SITE_CONFIG.serviceAreas.join(" · ")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <p className="label-overline mb-5">Services</p>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-[0.8125rem] text-[#7a9ab8] hover:text-[#b8cce0] transition-colors"
                  >
                    <ArrowRight size={11} className="text-[#4a6880] shrink-0" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <p className="label-overline mb-5">Company</p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/about#team" },
                { label: "Careers", href: "/careers" },
                { label: "Industries", href: "/industries" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-[0.8125rem] text-[#7a9ab8] hover:text-[#b8cce0] transition-colors"
                  >
                    <ArrowRight size={11} className="text-[#4a6880] shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div className="lg:col-span-3">
            <p className="label-overline mb-5">Get Protected</p>
            <div className="bg-[#0b1a2e] border border-[#1a3050] p-5">
              <p className="font-[var(--font-display)] text-lg text-[#edf2f7] leading-tight mb-3 uppercase">
                Ready to Secure Your Property?
              </p>
              <p className="text-[0.8125rem] text-[#7a9ab8] mb-5 leading-relaxed">
                Request a complimentary security assessment. A senior advisor
                will respond within one business day.
              </p>
              <Link
                href="/contact"
                className="block w-full btn-primary text-center text-xs mb-3"
              >
                Request Assessment
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="block w-full text-center py-2.5 text-[#9fb5cb] text-xs border border-[#1a3050] hover:border-[#2a4a6a] hover:text-[#b8cce0] transition-colors"
              >
                Or Call: {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a3050]">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.6875rem] text-[#4a6880]">
              <span>© {currentYear} Stratton Security Group. All rights reserved.</span>
              {SITE_CONFIG.licenseNumber && (
                <span className="text-[#7a9ab8]">
                  CA PPO License #{SITE_CONFIG.licenseNumber}
                </span>
              )}
              <span>Licensed · Bonded · Insured</span>
            </div>
            <div className="flex items-center gap-5 text-[0.6875rem]">
              <Link
                href="/privacy"
                className="text-[#4a6880] hover:text-[#7a9ab8] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#4a6880] hover:text-[#7a9ab8] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap-html"
                className="text-[#4a6880] hover:text-[#7a9ab8] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
