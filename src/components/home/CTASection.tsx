"use client";

import Link from "next/link";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      aria-label="Request a security assessment"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#040c1a]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(11, 26, 46, 0.8) 0%, transparent 70%)",
        }}
      />

      {/* Gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #c49a2a 30%, #c49a2a 70%, transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #c49a2a 30%, #c49a2a 70%, transparent)",
        }}
      />

      {/* Large background shield watermark */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <Shield size={400} strokeWidth={0.3} className="text-[#c49a2a]" />
      </div>

      <div className="relative z-10 container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c49a2a]/40" />
              <span className="label-overline">Get Protected Today</span>
              <div className="h-px w-12 bg-[#c49a2a]/40" />
            </div>

            <h2 className="display-title text-[clamp(2.5rem,6vw,4.5rem)] text-[#edf2f7] mb-6">
              Ready to Secure
              <br />
              <span className="gradient-gold">Your Property?</span>
            </h2>

            <p className="text-[1rem] text-[#7a9ab8] leading-relaxed mb-10 max-w-2xl mx-auto font-[var(--font-sans)]">
              Request a complimentary security assessment and speak with a
              Stratton senior advisor. We'll analyze your needs, your property,
              and your risk exposure — and build a program that fits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link href="/contact" className="btn-primary text-sm px-8 py-4 group">
                Request a Free Assessment
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="btn-secondary text-sm px-8 py-4 group"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[0.6875rem] text-[#4a6880] tracking-wide">
              <span>CA PPO License #{SITE_CONFIG.licenseNumber}</span>
              <span className="w-1 h-1 rounded-full bg-[#2a3d50]" />
              <span>24/7 · 365 Availability</span>
              <span className="w-1 h-1 rounded-full bg-[#2a3d50]" />
              <span>Licensed · Bonded · Insured</span>
              <span className="w-1 h-1 rounded-full bg-[#2a3d50]" />
              <span>Serving Los Angeles & Southern California</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
