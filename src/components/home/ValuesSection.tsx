"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const CERTIFICATIONS = [
  { title: "CA PPO License", value: `#${SITE_CONFIG.licenseNumber}`, sub: "Bureau of Security & Investigative Services" },
  { title: "TEAM Certified", value: "BSIS", sub: "Techniques for Effective Alcohol Management" },
  { title: "First Aid & CPR", value: "Certified", sub: "All active officers" },
  { title: "Power to Arrest", value: "Certified", sub: "Full compliance program" },
];

export default function ValuesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding bg-[#080c14]" aria-label="Our values and certifications">
      <div className="container-wide">
        {/* Mission header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="label-overline mb-4">Our Foundation</p>
          <h2
            className="display-title text-white mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)" }}
          >
            {SITE_CONFIG.mission}
          </h2>
          <p className="text-[#a0b0c0] text-[0.9375rem] max-w-2xl mx-auto leading-relaxed font-[var(--font-sans)]">
            {SITE_CONFIG.brand_promise}
          </p>
        </motion.div>

        {/* Values + Certifications */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Core Values */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-overline mb-6">Core Values</p>
            <div className="space-y-3">
              {SITE_CONFIG.values.map((value, i) => (
                <div
                  key={i}
                  className="card-anduril relative flex items-center gap-4 p-4 group overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-[#c49a2a] transition-all duration-300" />
                  <div className="w-8 h-8 border border-[#1a2030] flex items-center justify-center group-hover:border-[#c49a2a]/40 transition-colors shrink-0">
                    <span className="font-[var(--font-display)] text-xs text-[#c49a2a] font-700">
                      0{i + 1}
                    </span>
                  </div>
                  <span className="font-[var(--font-display)] text-base text-white uppercase tracking-wide">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 card-anduril border-[#c49a2a]/20">
              <p className="text-[0.8125rem] text-[#a0b0c0] leading-relaxed italic">
                &ldquo;{SITE_CONFIG.vision}&rdquo;
              </p>
              <p className="text-[0.6875rem] text-[#606878] mt-2 uppercase tracking-wide">
                — Stratton Security Group Vision
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label-overline mb-6">Credentials & Compliance</p>
            <div className="grid grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={i}
                  className="card-anduril border-t-2 border-t-[#c49a2a]/30 p-5"
                >
                  <p className="text-[0.6875rem] text-[#606878] tracking-widest uppercase mb-1">{cert.title}</p>
                  <p className="font-[var(--font-display)] text-lg text-[#c49a2a] uppercase mb-1">{cert.value}</p>
                  <p className="text-[0.6875rem] text-[#606878] leading-snug">{cert.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 card-anduril p-5">
              <p className="text-[0.75rem] text-[#a0b0c0] leading-relaxed font-[var(--font-sans)]">
                All Stratton officers are required to meet or exceed California state
                licensing requirements under BSIS. We maintain comprehensive general
                liability, commercial auto, and workers&apos; compensation insurance
                coverage across all operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
