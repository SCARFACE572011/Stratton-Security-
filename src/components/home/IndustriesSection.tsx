"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";

export default function IndustriesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, #0b1a2e 0%, #06101e 100%)" }}
      aria-labelledby="industries-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <p className="label-overline mb-4">Industries Served</p>
            <h2
              id="industries-heading"
              className="display-title text-[clamp(2rem,4.5vw,3rem)] text-[#edf2f7] mb-6"
            >
              Protecting Every
              <br />
              <span className="gradient-gold">Industry Sector</span>
            </h2>
            <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed mb-8">
              Stratton's security programs span 14+ industry verticals — from
              luxury residential and commercial real estate to government
              facilities and distribution centers. Whatever your sector, we
              build security programs that match your specific risk landscape.
            </p>
            <Link href="/industries" className="btn-primary text-xs">
              Explore All Industries
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Right — Industry grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={industry.slug}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.floor(i / 3) * 0.06 + (i % 3) * 0.04,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex items-center gap-3 p-3 border border-[#1a3050] hover:border-[#c49a2a]/40 hover:bg-[#0b1a2e] transition-all duration-200"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a3050] group-hover:bg-[#c49a2a] transition-colors shrink-0" />
                    <span className="text-[0.8125rem] text-[#7a9ab8] group-hover:text-[#b8cce0] transition-colors">
                      {industry.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
