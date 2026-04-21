"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Shield, Clock, Award, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const TRUST_ITEMS = [
  {
    icon: Shield,
    value: `PPO #${SITE_CONFIG.licenseNumber}`,
    sub: "CA Licensed · Bonded · Insured",
  },
  {
    icon: Clock,
    value: "24 / 7 · 365",
    sub: "No holidays, no gaps",
  },
  {
    icon: Award,
    value: "50+ Years",
    sub: "Combined law enforcement experience",
  },
  {
    icon: Star,
    value: "5.0 ★ Bark",
    sub: "Verified client reviews",
  },
];

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative bg-[#050810] border-b border-[#1a2030] overflow-hidden">
      {/* Subtle red left accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(204,17,17,0.4) 50%, transparent)" }}
        aria-hidden="true"
      />

      <div className="container-wide">
        <motion.div
          className="flex flex-wrap lg:flex-nowrap items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#1a2030]"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-4 px-6 py-5 flex-1 min-w-[50%] lg:min-w-0 hover:bg-[#0a0f1a] transition-colors duration-200"
            >
              <item.icon
                size={16}
                className="text-[#c49a2a] group-hover:text-[#cc1111] transition-colors duration-300 shrink-0"
                strokeWidth={1.5}
              />
              <div className="min-w-0">
                <div className="font-[var(--font-display)] text-[0.875rem] text-white uppercase tracking-wider leading-none mb-0.5 truncate">
                  {item.value}
                </div>
                <div className="text-[0.5875rem] text-[#606878] tracking-wide truncate">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
