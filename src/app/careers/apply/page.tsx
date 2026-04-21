import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ApplyForm from "@/components/forms/ApplyForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/careers/apply" },
  title: "Apply | Join Stratton Security Group",
  description:
    "Apply to join Stratton Security Group. We're hiring licensed, professional security officers in Los Angeles and Southern California. Submit your application today.",
};

export default function ApplyPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Careers", url: "https://strattonsecuritygroup.com/careers" },
        { name: "Apply", url: "https://strattonsecuritygroup.com/careers/apply" },
      ]} />
      <Navigation />
      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-[#040c1a] border-b border-[#1a3050]">
          <div className="container-wide py-4">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[0.75rem] text-[#4a6880] hover:text-[#c49a2a] uppercase tracking-wide transition-colors"
            >
              <ArrowLeft size={12} />
              Back to Careers
            </Link>
          </div>
        </div>

        {/* Hero */}
        <div className="bg-[#040c1a] border-b border-[#1a3050] py-12 md:py-16">
          <div className="container-wide max-w-2xl">
            <p className="label-overline mb-4">Join Our Team</p>
            <h1 className="display-title text-[clamp(2rem,5vw,3rem)] text-[#edf2f7] mb-4">
              Apply to
              <br />
              <span className="gradient-gold">Stratton Security</span>
            </h1>
            <p className="text-[#7a9ab8] text-[0.9375rem] leading-relaxed">
              Fill out the form below. Have your California Guard Card number ready.
              We&apos;ll follow up within 2–3 business days.
            </p>
          </div>
        </div>

        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
