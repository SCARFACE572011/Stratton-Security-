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

    const duration = 1800;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      aria-label="Company statistics"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0 bg-[#0b1a2e]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0f2040 0%, #0b1a2e 50%, #06101e 100%)",
        }}
      />

      {/* Gold accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #c49a2a, transparent)",
        }}
      />

      <div className="relative z-10 container-wide py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#1a3050]">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-center lg:px-8"
            >
              <div
                className="font-[var(--font-display)] font-800 text-[clamp(2.5rem,6vw,4rem)] leading-none mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #e0b84a 0%, #c49a2a 60%, #f5df9e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                aria-label={`${stat.value}${stat.suffix}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-[0.75rem] text-[#7a9ab8] tracking-[0.12em] uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
