"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, Shield, Settings2, Award, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DIFFERENTIATORS } from "@/lib/constants";

const ICON_MAP = {
  BadgeCheck,
  Clock,
  Shield,
  Settings2,
  Award,
  FileText,
} as const;

export default function WhyStratton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0b1a2e 0%, #06101e 100%)" }}
      aria-labelledby="why-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #c49a2a 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <p className="label-overline mb-4">Why Stratton</p>
            <h2
              id="why-heading"
              className="display-title text-[clamp(2rem,4.5vw,3rem)] text-[#edf2f7] mb-6"
            >
              The Standard of
              <br />
              <span className="gradient-gold">Protective Excellence</span>
            </h2>
            <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-8 font-[var(--font-sans)]">
              We don't offer generic security templates. Every Stratton program
              is built around your property, your risk profile, and your
              operational requirements — staffed by licensed professionals held
              to disciplined internal standards.
            </p>

            {/* Gold accent line */}
            <div className="w-12 h-0.5 bg-[#c49a2a] mb-8" />

            {/* Quote */}
            <blockquote className="border-l-2 border-[#c49a2a] pl-4 mb-10">
              <p className="text-[0.875rem] text-[#9fb5cb] italic leading-relaxed">
                "Professional security is not just about presence — it's about
                the quality, consistency, and accountability of that presence."
              </p>
            </blockquote>

            <Link href="/about" className="btn-primary text-xs">
              About Our Team
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Right column — differentiators grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS.map((item, i) => {
              const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] ?? BadgeCheck;

              return (
                <motion.div
                  key={i}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (i % 2) * 0.1 + 0.1,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-[#0b1a2e] border border-[#1a3050] p-6 group hover:border-[#1e4878] transition-all duration-200"
                >
                  {/* Icon row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 border border-[#1a3050] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors">
                      <IconComponent
                        size={18}
                        className="text-[#c49a2a]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-[var(--font-display)] text-[1.75rem] text-[#1a3050] font-800 leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-[var(--font-sans)] text-[0.9375rem] font-600 text-[#edf2f7] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[0.8125rem] text-[#7a9ab8] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
