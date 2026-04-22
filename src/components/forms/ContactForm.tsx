"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Phone, Loader2 } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const schema = z.object({
  propertyType: z.string().min(1, "Please select a property type."),
  serviceType: z.string().min(1, "Please select a service."),
  name: z.string().min(1, "Name is required."),
  company: z.string().optional(),
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
  phone: z.string().min(1, "Phone number is required."),
  message: z.string().optional(),
  hearAbout: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
type FormStep = 1 | 2 | 3;

const PROPERTY_TYPES = [
  "Commercial Property",
  "Residential / HOA",
  "Industrial / Warehouse",
  "Retail / Shopping Center",
  "Hotel / Hospitality",
  "Government / Institutional",
  "Construction Site",
  "Special Event",
  "Other",
];

const STEP_LABELS = ["Property & Service", "Your Information", "Details & Submit"];

const inputClass =
  "w-full bg-[#050810] border border-[#1a2030] text-white text-sm px-4 py-3 focus:border-[#c49a2a]/50 focus:outline-none transition-colors placeholder:text-[#3a4a58]";
const labelClass =
  "block text-[0.75rem] text-[#606878] tracking-widest uppercase mb-2";
const errorClass =
  "text-[0.75rem] text-[#ef4444] mt-1.5";

export default function ContactForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const advanceStep = async () => {
    const stepFields: Record<FormStep, (keyof FormData)[]> = {
      1: ["propertyType", "serviceType"],
      2: ["name", "email", "phone"],
      3: [],
    };
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => (s + 1) as FormStep);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed.");
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    const name = getValues("name");
    return (
      <div className="card-anduril p-8 md:p-12 text-center">
        <div className="w-14 h-14 border border-[#10b981]/40 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={26} className="text-[#10b981]" />
        </div>
        <h3 className="font-[var(--font-display)] text-2xl text-white uppercase tracking-wide mb-3">
          Request Received
        </h3>
        <p className="text-[#a0b0c0] text-[0.9375rem] max-w-sm mx-auto mb-8 leading-relaxed">
          Thank you, {name}. A Stratton security advisor will contact you within one business day to discuss your needs.
        </p>
        <div className="border-t border-[#1a2030] pt-6">
          <p className="text-[0.75rem] text-[#606878] mb-3">For immediate assistance:</p>
          <a
            href={`tel:${SITE_CONFIG.phoneE164}`}
            className="inline-flex items-center gap-2 text-[#c49a2a] font-medium text-sm hover:text-[#e0b84a] transition-colors"
          >
            <Phone size={14} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    );
  }

  const values = getValues();

  return (
    <div className="card-anduril">
      {/* Step progress */}
      <div className="border-b border-[#1a2030]">
        <div className="flex">
          {STEP_LABELS.map((label, i) => {
            const stepNum = (i + 1) as FormStep;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;
            return (
              <div key={i} className="flex-1 px-4 py-3 relative">
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    isActive ? "bg-[#c49a2a]" : isComplete ? "bg-[#c49a2a]/40" : "bg-transparent"
                  }`}
                />
                <span
                  className={`text-[0.6875rem] tracking-widest uppercase transition-colors ${
                    isActive ? "text-[#c49a2a]" : isComplete ? "text-[#606878]" : "text-[#3a4a58]"
                  }`}
                >
                  {i + 1}. {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="p-6 md:p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label htmlFor="propertyType" className={labelClass}>
                  Property Type <span className="text-[#c49a2a]">*</span>
                </label>
                <select
                  id="propertyType"
                  {...register("propertyType")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  aria-invalid={!!errors.propertyType}
                >
                  <option value="">Select property type...</option>
                  {PROPERTY_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p className={errorClass} role="alert">{errors.propertyType.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="serviceType" className={labelClass}>
                  Service Needed <span className="text-[#c49a2a]">*</span>
                </label>
                <select
                  id="serviceType"
                  {...register("serviceType")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  aria-invalid={!!errors.serviceType}
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Not sure — need consultation">Not sure — need consultation</option>
                </select>
                {errors.serviceType && (
                  <p className={errorClass} role="alert">{errors.serviceType.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-[#c49a2a]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="John Smith"
                    autoComplete="name"
                    className={inputClass}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company / Property</label>
                  <input
                    id="company"
                    type="text"
                    {...register("company")}
                    placeholder="Company name (optional)"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className={inputClass}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="(xxx) xxx-xxxx"
                  autoComplete="tel"
                  className={inputClass}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className={errorClass} role="alert">{errors.phone.message}</p>}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="bg-[#050810] border border-[#1a2030] p-4 text-[0.8125rem]">
                <p>
                  <span className="text-[#606878] uppercase tracking-wide text-[0.6875rem]">Property: </span>
                  <span className="text-[#a0b0c0]">{values.propertyType}</span>
                </p>
                <p className="mt-1">
                  <span className="text-[#606878] uppercase tracking-wide text-[0.6875rem]">Service: </span>
                  <span className="text-[#a0b0c0]">{values.serviceType}</span>
                </p>
                <p className="mt-1">
                  <span className="text-[#606878] uppercase tracking-wide text-[0.6875rem]">Contact: </span>
                  <span className="text-[#a0b0c0]">{values.name} — {values.email}</span>
                </p>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Additional Details</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  placeholder="Describe your property, number of locations, current security concerns..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div>
                <label htmlFor="hearAbout" className={labelClass}>How Did You Hear About Us?</label>
                <select
                  id="hearAbout"
                  {...register("hearAbout")}
                  className={`${inputClass} appearance-none cursor-pointer`}
                >
                  <option value="">Select one...</option>
                  <option>Google Search</option>
                  <option>Referral from a colleague</option>
                  <option>Social Media</option>
                  <option>Bark.com / Yelp</option>
                  <option>Direct mail / marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <p className="text-[0.6875rem] text-[#3a4a58] leading-relaxed">
                Your information is kept confidential and will only be used to contact you regarding your security inquiry. We do not share client information with third parties.
              </p>
            </div>
          )}
        </div>

        {submitError && (
          <p className="mx-6 md:mx-8 mb-2 text-[0.75rem] text-[#ef4444]" role="alert">{submitError}</p>
        )}

        <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as FormStep)}
              className="text-[0.8125rem] text-[#a0b0c0] hover:text-white transition-colors uppercase tracking-wide"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button type="button" onClick={advanceStep} className="btn-primary text-xs">
              Continue
              <ArrowRight size={13} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary text-xs disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight size={13} />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
