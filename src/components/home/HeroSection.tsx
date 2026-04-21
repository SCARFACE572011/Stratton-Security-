"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Shield, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

/* ─── VIDEO CONFIG ────────────────────────────────────────────────────────────
   VIDEO_SRC: Obtain from Squarespace CMS source or directly from client.
   The live site hosts a video at violet-ellipse-elh8.squarespace.com.
   Client should provide the original video file (MP4 preferred) for hosting.
   Until provided, the hero renders its premium dark gradient background.
───────────────────────────────────────────────────────────────────────────── */
const VIDEO_SRC = SITE_CONFIG.heroVideoSrc; // populated from constants.ts
const VIDEO_POSTER = SITE_CONFIG.heroPosterImage;

const HERO_HEADLINE_TOP = "Excellence";
const HERO_HEADLINE_BOTTOM = "In Protection";
const HERO_SUBHEADLINE =
  "In a world where risk is constantly changing, Stratton Security Group is your most reliable security partner — protecting people, assets, and peace of mind.";

const TRUST_SIGNALS = [
  `CA PPO License #${SITE_CONFIG.licenseNumber}`,
  "24/7 · 365 Operations",
  "Licensed, Bonded & Insured",
  "Serving Los Angeles & Southern California",
];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !VIDEO_SRC || shouldReduceMotion) return;

    const onCanPlay = () => setVideoLoaded(true);
    const onError = () => setVideoError(true);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, [shouldReduceMotion]);

  const fadeUp = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative min-h-dvh flex flex-col justify-center overflow-hidden"
      aria-label="Hero — Stratton Security Group"
    >
      {/* ── Video / Poster background ─── */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background (always rendered) */}
        <div className="absolute inset-0 bg-[#040c1a]" />

        {/* Dark tactical overlay pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />

        {/* Video element */}
        {VIDEO_SRC && !videoError && !shouldReduceMotion && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 1.2s ease",
            }}
            autoPlay
            muted
            loop
            playsInline
            poster={VIDEO_POSTER}
            aria-hidden="true"
            preload="metadata"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        )}

        {/* Video gradient overlays — cinematic dark framing */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(4, 12, 26, 0.75) 0%,
                rgba(4, 12, 26, 0.45) 35%,
                rgba(4, 12, 26, 0.45) 60%,
                rgba(4, 12, 26, 0.9) 100%
              )
            `,
          }}
        />
        {/* Side vignettes */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center,
                transparent 40%,
                rgba(4, 12, 26, 0.6) 100%
              )
            `,
          }}
        />
      </div>

      {/* ── Hero content ─── */}
      <div className="relative z-10 container-wide flex flex-col justify-center min-h-dvh py-24 pt-36">
        {/* Pre-headline badge */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2.5 mb-6"
        >
          <div className="w-5 h-px bg-[#c49a2a]" />
          <span className="label-overline text-[#c49a2a]">
            Professional Security Services
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-6"
        >
          <span
            className="display-hero block text-[clamp(3.5rem,10vw,8.5rem)] text-[#edf2f7] leading-[0.88]"
          >
            {HERO_HEADLINE_TOP}
          </span>
          <span
            className="display-hero block text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.88]"
            style={{
              WebkitTextStroke: "1px rgba(196, 154, 42, 0.6)",
              color: "transparent",
            }}
          >
            {HERO_HEADLINE_BOTTOM}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-[1.0625rem] text-[#9fb5cb] leading-relaxed mb-10 font-[var(--font-sans)] font-light"
        >
          {HERO_SUBHEADLINE}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <Link href="/contact" className="btn-primary group text-sm px-7 py-4">
            Request a Free Assessment
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneE164}`}
            className="btn-secondary group text-sm px-7 py-4"
          >
            <Phone size={14} />
            {SITE_CONFIG.phone}
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-x-6 gap-y-2"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#c49a2a]" />
              <span className="text-[0.75rem] text-[#7a9ab8] tracking-wide">
                {signal}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─── */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-[0.5625rem] text-[#4a6880] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#4a6880]" />
          </motion.div>
        </motion.div>
      )}

      {/* ── Gold separator line ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c49a2a]/30 to-transparent" />
    </section>
  );
}
