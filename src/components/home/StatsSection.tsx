"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current || shouldReduceMotion) {
      if (shouldReduceMotion) setCount(value);
      return;
    }
    hasAnimated.current = true;
    const duration = 2000;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [isVisible, value, shouldReduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] border-y border-[#1a2030]"
      aria-label="Company statistics"
    >
      <div className="container-wide py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1a2030]">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden text-center px-6 py-14 cursor-default"
            >
              {/* Red hover glow overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(204,17,17,0.06) 0%, transparent 70%)",
                  animation: "glow-red 3s ease-in-out infinite",
                }}
                aria-hidden="true"
              />

              {/* Thin top line that becomes red on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-[#cc1111] transition-all duration-500 ease-out" />

              <div
                className="font-[var(--font-display)] font-800 leading-none mb-4 text-white group-hover:text-[#cc1111] transition-colors duration-300"
                style={{ fontSize: "clamp(3rem, 6.5vw, 5rem)" }}
                aria-label={`${stat.value}${stat.suffix}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>

              {/* Gold + red accent */}
              <div className="flex items-center justify-center gap-1.5 mb-3">
                <div className="w-6 h-px bg-[#c49a2a] group-hover:bg-[#cc1111] transition-colors duration-300" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#c49a2a]/40 group-hover:bg-[#cc1111]/60 transition-colors duration-300" />
              </div>

              <p className="text-[0.625rem] text-[#606878] group-hover:text-[#a0b0c0] tracking-[0.2em] uppercase transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
