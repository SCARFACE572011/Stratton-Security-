"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Upload, CheckCircle, Loader2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const POSITIONS = [
  "Unarmed Security Officer",
  "Armed Security Officer",
  "Mobile Patrol Officer",
  "Concierge / Lobby Officer",
  "Other / General Inquiry",
];

export default function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    guardCard: "",
    experience: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.position) e.position = "Please select a position";
    if (!form.guardCard.trim()) e.guardCard = "Guard Card number is required";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center py-16">
        <div className="text-center max-w-xl">
          <div className="w-16 h-16 border border-[#10b981]/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={28} className="text-[#10b981]" strokeWidth={1.5} />
          </div>
          <h2 className="display-title text-[2rem] text-[#edf2f7] mb-4 uppercase tracking-wide">
            Application Received
          </h2>
          <p className="text-[#9fb5cb] text-[0.9375rem] leading-relaxed mb-8">
            Thank you for your interest in joining Stratton Security Group. Our
            operations team will review your application and follow up within
            2–3 business days.
          </p>
          <Link href="/careers" className="btn-secondary text-xs">
            <ArrowLeft size={13} />
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="section-padding bg-[#06101e]">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-name" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                  Full Name <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="apply-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                  className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#4a6880]"
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-describedby={errors.name ? "apply-name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p id="apply-name-error" className="text-[0.6875rem] text-red-400 mt-1.5" role="alert">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="apply-phone" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                  Phone <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="apply-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                  className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#4a6880]"
                  placeholder="(310) 555-0100"
                  autoComplete="tel"
                  aria-describedby={errors.phone ? "apply-phone-error" : undefined}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p id="apply-phone-error" className="text-[0.6875rem] text-red-400 mt-1.5" role="alert">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="apply-email" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                Email Address <span className="text-[#c49a2a]">*</span>
              </label>
              <input
                id="apply-email"
                type="email"
                value={form.email}
                onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#4a6880]"
                placeholder="you@email.com"
                autoComplete="email"
                aria-describedby={errors.email ? "apply-email-error" : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && <p id="apply-email-error" className="text-[0.6875rem] text-red-400 mt-1.5" role="alert">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="apply-position" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                Position Applying For <span className="text-[#c49a2a]">*</span>
              </label>
              <select
                id="apply-position"
                value={form.position}
                onChange={(e) => { setForm({ ...form, position: e.target.value }); setErrors({ ...errors, position: "" }); }}
                className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                aria-describedby={errors.position ? "apply-position-error" : undefined}
                aria-invalid={!!errors.position}
              >
                <option value="">Select a position…</option>
                {POSITIONS.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.position && <p id="apply-position-error" className="text-[0.6875rem] text-red-400 mt-1.5" role="alert">{errors.position}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="apply-guard-card" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                  CA Guard Card # <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="apply-guard-card"
                  type="text"
                  value={form.guardCard}
                  onChange={(e) => { setForm({ ...form, guardCard: e.target.value }); setErrors({ ...errors, guardCard: "" }); }}
                  className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#4a6880]"
                  placeholder="BSIS Guard Card #"
                  aria-describedby={errors.guardCard ? "apply-guard-card-error" : undefined}
                  aria-invalid={!!errors.guardCard}
                />
                {errors.guardCard && <p id="apply-guard-card-error" className="text-[0.6875rem] text-red-400 mt-1.5" role="alert">{errors.guardCard}</p>}
              </div>
              <div>
                <label htmlFor="apply-experience" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                  Years of Experience
                </label>
                <select
                  id="apply-experience"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select…</option>
                  <option>Less than 1 year</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–10 years</option>
                  <option>10+ years</option>
                </select>
              </div>
            </div>

            <div className="border border-dashed border-[#1a3050] bg-[#0b1a2e] p-4 flex items-center gap-3 text-[0.8125rem] text-[#4a6880]">
              <Upload size={15} className="text-[#c49a2a] shrink-0" strokeWidth={1.5} />
              <span>
                Attach your resume by emailing it to{" "}
                <a href={`mailto:${SITE_CONFIG.email}?subject=Resume - Security Officer Application`} className="text-[#c49a2a] hover:underline">
                  {SITE_CONFIG.email}
                </a>
                {" "}with subject: <em>Resume – Security Officer Application</em>
              </span>
            </div>

            <div>
              <label htmlFor="apply-message" className="block text-[0.6875rem] text-[#4a6880] tracking-widest uppercase mb-2">
                Additional Notes
              </label>
              <textarea
                id="apply-message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0b1a2e] border border-[#1a3050] focus:border-[#c49a2a]/60 text-[#edf2f7] text-[0.875rem] px-4 py-3 outline-none transition-colors placeholder:text-[#4a6880] resize-none"
                placeholder="Anything else we should know — certifications, availability, referrals…"
              />
            </div>

            {submitError && (
              <p className="text-[0.75rem] text-red-400" role="alert">{submitError}</p>
            )}
            <button type="submit" disabled={submitting} className="btn-primary text-xs w-full sm:w-auto justify-center disabled:opacity-70 disabled:cursor-not-allowed">
              {submitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowRight size={13} />
                </>
              )}
            </button>
          </form>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#1a3050] bg-[#0b1a2e] p-6">
              <p className="label-overline mb-4">What Happens Next</p>
              <ol className="space-y-4">
                {[
                  "We review your application and Guard Card status",
                  "Operations will reach out within 2–3 business days",
                  "Screening call and in-person interview",
                  "Background check and onboarding",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-[var(--font-display)] text-[#4a6880] text-[0.8125rem] tracking-wide pt-px shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.875rem] text-[#9fb5cb] leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-[#1a3050] bg-[#0b1a2e] p-5 text-[0.8125rem] text-[#7a9ab8]">
              <p className="text-[#edf2f7] font-medium mb-1">Questions about the role?</p>
              <p className="mb-3">Call our operations team directly — we&apos;re available 24/7.</p>
              <a href={`tel:${SITE_CONFIG.phoneE164}`} className="text-[#c49a2a] font-[var(--font-display)] tracking-wide">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
