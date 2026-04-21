"use client";

import Link from "next/link";
import { ArrowRight, Shield, ShieldCheck, Building2, Home, ShoppingBag, HardHat, Briefcase, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  Shield,
  ShieldCheck,
  Building2,
  Home,
  ShoppingBag,
  HardHat,
  Briefcase,
  Star,
} as const;

const COLOR_MAP = {
  blue: "group-hover:border-[#1b52ee]/60",
  gold: "group-hover:border-[#c49a2a]/60",
  steel: "group-hover:border-[#7a9ab8]/40",
};

const ICON_COLOR_MAP = {
  blue: "text-[#3f6ef5]",
  gold: "text-[#c49a2a]",
  steel: "text-[#7a9ab8]",
};

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-[#06101e]" aria-labelledby="services-heading">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="label-overline mb-4">What We Do</p>
          <h2
            id="services-heading"
            className="display-title text-[clamp(2.25rem,5vw,3.5rem)] text-[#edf2f7] mb-5"
          >
            Security Services
            <br />
            <span className="gradient-gold">Built for Your Needs</span>
          </h2>
          <p className="text-[#7a9ab8] text-[1rem] leading-relaxed font-[var(--font-sans)]">
            From mobile patrol and commercial guard services to specialized residential
            protection, Stratton delivers tailored security programs matched to your
            property type, risk profile, and operational requirements.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Shield;
            const borderColor = COLOR_MAP[service.color as keyof typeof COLOR_MAP] ?? "";
            const iconColor = ICON_COLOR_MAP[service.color as keyof typeof ICON_COLOR_MAP] ?? "text-[#c49a2a]";

            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: (i % 4) * 0.08,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`card-dark group block p-6 h-full ${borderColor}`}
                  aria-label={service.title}
                >
                  <div
                    className={`w-10 h-10 border border-[#1a3050] flex items-center justify-center mb-5 group-hover:border-current transition-colors ${iconColor}`}
                  >
                    <IconComponent size={18} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-[var(--font-display)] text-[0.9375rem] text-[#edf2f7] uppercase tracking-wide mb-3">
                    {service.title}
                  </h3>

                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-1.5 text-[0.75rem] text-[#4a6880] group-hover:text-[#c49a2a] transition-colors uppercase tracking-wide mt-auto">
                    Learn more
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="h-px flex-1 bg-[#1a3050] hidden sm:block" />
          <Link href="/services" className="btn-secondary text-xs px-6">
            View All Services
            <ArrowRight size={13} className="ml-1" />
          </Link>
          <div className="h-px flex-1 bg-[#1a3050] hidden sm:block" />
        </motion.div>
      </div>
    </section>
  );
}
