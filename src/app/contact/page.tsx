import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Request a Security Assessment",
  description: `Request a free security assessment from Stratton Security Group. Available 24/7 — call ${SITE_CONFIG.phone} or submit an inquiry. Serving Los Angeles and Southern California.`,
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Contact", url: "https://strattonsecuritygroup.com/contact" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero" style={{ minHeight: "50vh" }}>
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
            alt="Los Angeles city skyline at night"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-[#050810]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-16 pt-32">
            <p className="label-overline mb-5">Contact Stratton</p>
            <h1
              className="display-title text-white mb-5 max-w-2xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Request a Free
              <br />
              <span className="gradient-gold">Security Assessment</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              Tell us about your property and security needs. A senior Stratton
              advisor will respond within one business day.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left — Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Right — Contact details */}
              <div className="lg:col-span-5 space-y-8">
                {/* Direct contact */}
                <div>
                  <p className="label-overline mb-5">Direct Contact</p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${SITE_CONFIG.phoneE164}`}
                      className="flex items-center gap-4 p-4 card-anduril group"
                    >
                      <div className="w-10 h-10 border border-[#1a2030] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors shrink-0">
                        <Phone size={16} className="text-[#c49a2a]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6875rem] text-[#606878] tracking-widest uppercase mb-0.5">
                          Phone
                        </p>
                        <p className="text-white text-sm font-medium">
                          {SITE_CONFIG.phone}
                        </p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="flex items-center gap-4 p-4 card-anduril group"
                    >
                      <div className="w-10 h-10 border border-[#1a2030] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors shrink-0">
                        <Mail size={16} className="text-[#c49a2a]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6875rem] text-[#606878] tracking-widest uppercase mb-0.5">
                          Email
                        </p>
                        <p className="text-white text-sm font-medium">
                          {SITE_CONFIG.email}
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://maps.google.com/?q=2029+Century+Park+E+Suite+400+Los+Angeles+CA+90067"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 card-anduril group"
                    >
                      <div className="w-10 h-10 border border-[#1a2030] flex items-center justify-center shrink-0 group-hover:border-[#c49a2a]/40 transition-colors">
                        <MapPin size={16} className="text-[#c49a2a]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[0.6875rem] text-[#606878] tracking-widest uppercase mb-0.5">
                          Office — View on Maps ↗
                        </p>
                        <p className="text-white text-sm">
                          {SITE_CONFIG.address}
                        </p>
                        <p className="text-[#606878] text-xs mt-0.5">
                          {SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <p className="label-overline mb-4">Operations Hours</p>
                  <div className="flex items-center gap-4 p-4 card-anduril">
                    <div className="w-10 h-10 border border-[#1a2030] flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-[#10b981]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        <span className="text-[0.6875rem] text-[#10b981] tracking-widest uppercase">
                          Always Available
                        </span>
                      </div>
                      <p className="text-white text-sm">{SITE_CONFIG.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div>
                  <p className="label-overline mb-4">Verified Reviews</p>
                  <div className="card-anduril p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#c49a2a" stroke="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                      <span className="ml-1.5 text-[0.75rem] text-[#c49a2a] font-medium">5.0</span>
                    </div>
                    <p className="text-[0.8125rem] text-[#a0b0c0] italic leading-relaxed mb-3">
                      &ldquo;Their team has truly set the bar when it comes to providing security services.&rdquo;
                    </p>
                    <p className="text-[0.6875rem] text-[#606878] tracking-wide">
                      Verified on Bark.com · 6 reviews
                    </p>
                  </div>
                </div>

                {/* License */}
                <div>
                  <p className="label-overline mb-4">Credentials</p>
                  <div className="card-anduril p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield size={16} className="text-[#c49a2a] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">
                          California Private Patrol Operator
                        </p>
                        <p className="text-[0.6875rem] text-[#606878] tracking-wide">
                          PPO License #{SITE_CONFIG.licenseNumber}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 text-[0.75rem] text-[#606878]">
                      <p className="flex items-center gap-2"><Shield size={11} className="text-[#10b981] shrink-0" strokeWidth={2} /> Licensed by California BSIS</p>
                      <p className="flex items-center gap-2"><Shield size={11} className="text-[#10b981] shrink-0" strokeWidth={2} /> Fully bonded &amp; insured</p>
                      <p className="flex items-center gap-2"><Shield size={11} className="text-[#10b981] shrink-0" strokeWidth={2} /> General liability coverage</p>
                      <p className="flex items-center gap-2"><Shield size={11} className="text-[#10b981] shrink-0" strokeWidth={2} /> Workers&apos; compensation insurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
