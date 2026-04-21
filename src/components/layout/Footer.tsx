import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] border-t border-[#c49a2a]/20">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 group mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-[#c49a2a]/60">
                <Shield size={15} className="text-[#c49a2a]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-[0.95rem] font-700 tracking-[0.06em] text-white uppercase">
                  Stratton
                </span>
                <span className="font-[var(--font-sans)] text-[0.5rem] text-[#606878] tracking-[0.22em] uppercase">
                  Security Group
                </span>
              </div>
            </Link>

            <p className="text-[0.875rem] text-[#606878] leading-relaxed max-w-xs mb-8">
              Professional security services protecting businesses, residential
              communities, and assets across Los Angeles. Available 24/7, 365 days a year.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="flex items-center gap-3 text-[0.875rem] text-[#a0b0c0] hover:text-[#c49a2a] transition-colors group"
              >
                <div className="w-7 h-7 border border-[#1a2030] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors">
                  <Phone size={12} />
                </div>
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-[0.875rem] text-[#a0b0c0] hover:text-[#c49a2a] transition-colors group"
              >
                <div className="w-7 h-7 border border-[#1a2030] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors">
                  <Mail size={12} />
                </div>
                {SITE_CONFIG.email}
              </a>
              {SITE_CONFIG.serviceAreas.length > 0 && (
                <div className="flex items-start gap-3 text-[0.875rem] text-[#606878]">
                  <div className="w-7 h-7 border border-[#1a2030] flex items-center justify-center mt-0.5 shrink-0">
                    <MapPin size={12} />
                  </div>
                  <span>{SITE_CONFIG.serviceAreas.join(" · ")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-4">
            <p className="label-overline mb-5">Services</p>
            <ul className="space-y-2">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.8125rem] text-[#606878] hover:text-[#a0b0c0] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-3">
            <p className="label-overline mb-5">Company</p>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Industries", href: "/industries" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "Training", href: "/training" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.8125rem] text-[#606878] hover:text-[#a0b0c0] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a2030]">
        <div className="container-wide py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[0.6875rem] text-[#3a4a58]">
              <span>© {currentYear} Stratton Security Group. All rights reserved.</span>
              {SITE_CONFIG.licenseNumber && (
                <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              )}
              <span>Licensed · Bonded · Insured</span>
            </div>
            <div className="flex items-center gap-5 text-[0.6875rem]">
              <Link href="/privacy" className="text-[#3a4a58] hover:text-[#606878] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#3a4a58] hover:text-[#606878] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
