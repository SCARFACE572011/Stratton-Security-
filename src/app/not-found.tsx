import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="pt-24 min-h-[70vh] flex items-center bg-[#040c1a]">
        <div className="container-wide py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="label-overline mb-5">Error · 404</p>
              <h1 className="display-title text-[clamp(3rem,8vw,6rem)] text-[#edf2f7] leading-[0.95] mb-6">
                Page Not
                <br />
                <span className="gradient-gold">In Service</span>
              </h1>
              <p className="text-[#9fb5cb] text-[1.0625rem] leading-relaxed max-w-xl mb-8">
                The page you were looking for isn't here — it may have moved or never
                existed. Use the options below to continue, or call our operations
                line directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/" className="btn-primary text-xs">
                  <Home size={13} />
                  Return Home
                </Link>
                <Link href="/services" className="btn-secondary text-xs">
                  View Services
                  <ArrowRight size={13} />
                </Link>
                <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-xs">
                  <Phone size={13} />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-[#1a3050] bg-[#06101e] p-8">
                <p className="label-overline mb-4">Quick Links</p>
                <ul className="space-y-1">
                  {[
                    { label: "All Security Services", href: "/services" },
                    { label: "Industries We Serve", href: "/industries" },
                    { label: "About Stratton", href: "/about" },
                    { label: "Training Programs", href: "/training" },
                    { label: "Careers", href: "/careers" },
                    { label: "Contact Us", href: "/contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between py-3 border-b border-[#1a3050] last:border-0 hover:border-[#c49a2a]/40 transition-colors"
                      >
                        <span className="text-[0.875rem] text-[#9fb5cb] group-hover:text-[#edf2f7] transition-colors">
                          {link.label}
                        </span>
                        <ArrowRight
                          size={13}
                          className="text-[#2a3d50] group-hover:text-[#c49a2a] group-hover:translate-x-1 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
