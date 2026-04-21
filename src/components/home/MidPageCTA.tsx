"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function MidPageCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="bg-[#040c1a] border-y border-[#c49a2a]/20">
      <div className="container-wide py-10 md:py-12">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-[var(--font-display)] text-[clamp(1.125rem,2.5vw,1.5rem)] text-[#edf2f7] uppercase tracking-wide leading-tight">
              Ready to Protect Your Property?
            </p>
            <p className="text-[0.875rem] text-[#7a9ab8] mt-1">
              Free assessment · Response within one business day · 24/7 availability
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn-primary text-xs">
              Request Free Assessment
              <ArrowRight size={13} />
            </Link>
            <a href={`tel:${SITE_CONFIG.phoneE164}`} className="btn-secondary text-xs">
              <Phone size={13} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
