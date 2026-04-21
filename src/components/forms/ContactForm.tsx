"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Loader2 } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

type FormStep = 1 | 2 | 3;

interface FormData {
  propertyType: string;
  serviceType: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  hearAbout: string;
}

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

export default function ContactForm() {
  const [step, setStep] = useState<FormStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    propertyType: "",
    serviceType: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    hearAbout: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.propertyType) newErrors.propertyType = "Please select a property type.";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step !== 3) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const STEP_LABELS = ["Property & Service", "Your Information", "Details & Submit"];

  if (submitted) {
    return (
      <div className="bg-[#0b1a2e] border border-[#1a3050] p-8 md:p-12 text-center">
        <div className="w-14 h-14 border border-[#10b981]/40 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={26} className="text-[#10b981]" />
        </div>
        <h3 className="font-[var(--font-display)] text-2xl text-[#edf2f7] uppercase tracking-wide mb-3">
          Request Received
        </h3>
        <p className="text-[#7a9ab8] text-[0.9375rem] max-w-sm mx-auto mb-8 leading-relaxed">
          Thank you, {formData.name}. A Stratton security advisor will contact
          you within one business day to discuss your needs.
        </p>
        <div className="border-t border-[#1a3050] pt-6">
          <p className="text-[0.75rem] text-[#4a6880] mb-3">For immediate assistance:</p>
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

  return (
    <div className="bg-[#0b1a2e] border border-[#1a3050]">
      {/* Progress bar */}
      <div className="border-b border-[#1a3050]">
        <div className="flex">
          {STEP_LABELS.map((label, i) => {
            const stepNum = (i + 1) as FormStep;
            const isActive = step === stepNum;
            const isComplete = step > stepNum;

            return (
              <div
                key={i}
                className="flex-1 px-4 py-3 relative"
              >
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 transition-colors duration-300 ${
                    isActive
                      ? "bg-[#c49a2a]"
                      : isComplete
                      ? "bg-[#c49a2a]/40"
                      : "bg-transparent"
                  }`}
                />
                <span
                  className={`text-[0.6875rem] tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-[#c49a2a]"
                      : isComplete
                      ? "text-[#4a6880]"
                      : "text-[#2a3d50]"
                  }`}
                >
                  {i + 1}. {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="p-6 md:p-8">
          {/* ── Step 1: Property & Service ── */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="propertyType"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  Property Type <span className="text-[#c49a2a]">*</span>
                </label>
                <select
                  id="propertyType"
                  value={formData.propertyType}
                  onChange={(e) => update("propertyType", e.target.value)}
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 focus:border-[#c49a2a]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                  aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
                  aria-invalid={!!errors.propertyType}
                >
                  <option value="" disabled>Select property type...</option>
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.propertyType && (
                  <p id="propertyType-error" className="text-[0.75rem] text-[#ef4444] mt-1.5" role="alert">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  Service Needed <span className="text-[#c49a2a]">*</span>
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => update("serviceType", e.target.value)}
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 focus:border-[#c49a2a]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                  aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
                  aria-invalid={!!errors.serviceType}
                >
                  <option value="" disabled>Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Not sure — need consultation">Not sure — need consultation</option>
                </select>
                {errors.serviceType && (
                  <p id="serviceType-error" className="text-[0.75rem] text-[#ef4444] mt-1.5" role="alert">
                    {errors.serviceType}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 2: Contact Info ── */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                  >
                    Full Name <span className="text-[#c49a2a]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="John Smith"
                    autoComplete="name"
                    className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 placeholder-[#2a3d50] focus:border-[#c49a2a]/50 focus:outline-none transition-colors"
                    aria-describedby={errors.name ? "name-error" : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[0.75rem] text-[#ef4444] mt-1.5" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                  >
                    Company / Property
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Company name (optional)"
                    autoComplete="organization"
                    className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 placeholder-[#2a3d50] focus:border-[#c49a2a]/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  Email Address <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 placeholder-[#2a3d50] focus:border-[#c49a2a]/50 focus:outline-none transition-colors"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="text-[0.75rem] text-[#ef4444] mt-1.5" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  Phone Number <span className="text-[#c49a2a]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="(xxx) xxx-xxxx"
                  autoComplete="tel"
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 placeholder-[#2a3d50] focus:border-[#c49a2a]/50 focus:outline-none transition-colors"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-[0.75rem] text-[#ef4444] mt-1.5" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* ── Step 3: Message ── */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Summary */}
              <div className="bg-[#06101e] border border-[#1a3050] p-4 text-[0.8125rem] text-[#7a9ab8]">
                <p>
                  <span className="text-[#4a6880] uppercase tracking-wide text-[0.6875rem]">Property: </span>
                  <span className="text-[#b8cce0]">{formData.propertyType}</span>
                </p>
                <p className="mt-1">
                  <span className="text-[#4a6880] uppercase tracking-wide text-[0.6875rem]">Service: </span>
                  <span className="text-[#b8cce0]">{formData.serviceType}</span>
                </p>
                <p className="mt-1">
                  <span className="text-[#4a6880] uppercase tracking-wide text-[0.6875rem]">Contact: </span>
                  <span className="text-[#b8cce0]">{formData.name} — {formData.email}</span>
                </p>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  Additional Details
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  placeholder="Describe your property, number of locations, current security concerns, or any other relevant details..."
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 placeholder-[#2a3d50] focus:border-[#c49a2a]/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="hearAbout"
                  className="block text-[0.75rem] text-[#7a9ab8] tracking-widest uppercase mb-2"
                >
                  How Did You Hear About Us?
                </label>
                <select
                  id="hearAbout"
                  value={formData.hearAbout}
                  onChange={(e) => update("hearAbout", e.target.value)}
                  className="w-full bg-[#06101e] border border-[#1a3050] text-[#edf2f7] text-sm px-4 py-3 focus:border-[#c49a2a]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
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

              <p className="text-[0.6875rem] text-[#2a3d50] leading-relaxed">
                Your information is kept confidential and will only be used to contact you
                regarding your security inquiry. We do not share client information with
                third parties.
              </p>
            </div>
          )}
        </div>

        {/* Form navigation */}
        {submitError && (
          <p className="mx-6 md:mx-8 mb-2 text-[0.75rem] text-[#ef4444]" role="alert">{submitError}</p>
        )}
        <div className="px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as FormStep)}
              className="text-[0.8125rem] text-[#7a9ab8] hover:text-[#b8cce0] transition-colors uppercase tracking-wide"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn-primary text-xs"
            >
              Continue
              <ArrowRight size={13} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary text-xs disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
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
