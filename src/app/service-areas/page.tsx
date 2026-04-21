import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbSchema } from "@/app/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/service-areas" },
  title: "Service Areas | Security Services Across Los Angeles & Southern California",
  description:
    "Stratton Security Group provides professional security services across Los Angeles, Beverly Hills, Santa Monica, Culver City, West Hollywood, and surrounding Southern California communities.",
};

const PRIMARY_AREAS = [
  {
    name: "Los Angeles",
    description: "All of the city of Los Angeles — from downtown to the Valley, the Westside to South LA. Our largest service footprint.",
    neighborhoods: ["Downtown LA", "Koreatown", "Mid-Wilshire", "Hollywood", "Silver Lake", "Los Feliz", "Boyle Heights", "Crenshaw", "Leimert Park"],
  },
  {
    name: "Beverly Hills",
    description: "Full coverage of the Beverly Hills municipality — including residential estates, commercial corridors on Wilshire and Rodeo, and mixed-use properties.",
    neighborhoods: ["North Beverly Hills", "Flats", "Business Triangle", "Wilshire Corridor"],
  },
  {
    name: "West Hollywood",
    description: "Commercial and residential security for the City of West Hollywood, including Sunset Strip entertainment venues and high-density residential buildings.",
    neighborhoods: ["Sunset Strip", "Santa Monica Boulevard Corridor", "Norma Triangle", "Design District"],
  },
  {
    name: "Santa Monica",
    description: "Security programs for Santa Monica commercial properties, retail centers, hotels, and residential buildings along the coast.",
    neighborhoods: ["Downtown Santa Monica", "Third Street Promenade Area", "Main Street", "Montana Avenue", "Mid-City"],
  },
  {
    name: "Century City",
    description: "Our headquarters market. We serve corporate campuses, Class A office buildings, and luxury residential towers throughout Century City.",
    neighborhoods: ["Avenue of the Stars", "Century Park East & West", "Constellation Boulevard"],
  },
  {
    name: "Culver City",
    description: "Growing commercial and tech-campus district with significant commercial real estate, studio facilities, and logistics operations.",
    neighborhoods: ["Downtown Culver City", "Hayden Tract", "Culver City Arts District"],
  },
  {
    name: "Bel Air & Brentwood",
    description: "Discreet residential security for estates, private residences, and gated communities in Bel Air, Brentwood, and the hills above Sunset.",
    neighborhoods: ["Bel Air Estates", "Stone Canyon", "Brentwood Park", "Mandeville Canyon"],
  },
  {
    name: "Burbank & Glendale",
    description: "Commercial, industrial, and studio security for the Burbank–Glendale corridor — including media facilities and logistics operations.",
    neighborhoods: ["Downtown Burbank", "Media District", "Downtown Glendale", "Brand Boulevard"],
  },
  {
    name: "Pasadena",
    description: "Historic commercial core, educational campuses, medical centers, and residential communities throughout Pasadena and the San Gabriel Valley.",
    neighborhoods: ["Old Town Pasadena", "Caltech Area", "South Lake", "Altadena"],
  },
  {
    name: "El Segundo & Manhattan Beach",
    description: "Industrial and aerospace corridors in El Segundo alongside beach-adjacent commercial and residential deployments in Manhattan Beach.",
    neighborhoods: ["El Segundo Industrial Corridor", "Manhattan Village", "Downtown Manhattan Beach"],
  },
  {
    name: "Long Beach",
    description: "Port-adjacent logistics, healthcare, and commercial security deployments in Long Beach and the South Bay.",
    neighborhoods: ["Downtown Long Beach", "Bixby Knolls", "Signal Hill", "Lakewood"],
  },
  {
    name: "Ventura County",
    description: "Expanding coverage to Ventura County — commercial, residential, and event security in Thousand Oaks, Oxnard, and the surrounding region.",
    neighborhoods: ["Thousand Oaks", "Camarillo", "Oxnard", "Ventura"],
  },
];

const PROPERTY_TYPES_SERVED = [
  "Office buildings & corporate campuses",
  "Retail centers & shopping malls",
  "Hotels, resorts & entertainment venues",
  "Condominium & apartment complexes",
  "Luxury private residences & estates",
  "Construction sites & job sites",
  "Healthcare & medical campuses",
  "Auto dealerships & service centers",
  "Warehouses & distribution centers",
  "Government & municipal facilities",
];

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://strattonsecuritygroup.com" },
        { name: "Service Areas", url: "https://strattonsecuritygroup.com/service-areas" },
      ]} />
      <Navigation />
      <main>
        {/* Full-bleed hero */}
        <div className="page-hero">
          <Image
            src="https://images.unsplash.com/photo-1562701226-f0cfe6d6a68c?auto=format&fit=crop&w=1920&q=80"
            alt="Los Angeles skyline at night"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/65 to-[#050810]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050810]/75 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#c49a2a]/60 to-transparent" />

          <div className="relative z-10 container-wide pb-20 pt-32">
            <p className="label-overline mb-5">Where We Operate</p>
            <h1
              className="display-title text-white mb-6 max-w-3xl"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Service Areas
              <br />
              <span className="gradient-gold">Los Angeles &amp; Beyond</span>
            </h1>
            <p className="text-[#a0b0c0] text-[1rem] leading-relaxed max-w-xl">
              Stratton Security Group is headquartered in Century City and deploys
              security programs across Los Angeles, Beverly Hills, and Southern
              California — from the coast to the San Gabriel Valley.
            </p>
          </div>
        </div>

        {/* Coverage grid */}
        <section className="section-padding bg-[#050810]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <p className="label-overline mb-4">Primary Coverage</p>
            <h2
              className="display-title text-white mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Communities We Serve
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRIMARY_AREAS.map((area) => (
                <div key={area.name} className="card-anduril p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <MapPin size={14} className="text-[#c49a2a] shrink-0" strokeWidth={1.5} />
                    <h3 className="font-[var(--font-display)] text-[0.9375rem] text-white uppercase tracking-wide">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-[0.8125rem] text-[#606878] leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.neighborhoods.slice(0, 4).map((n) => (
                      <span
                        key={n}
                        className="text-[0.625rem] text-[#606878] border border-[#1a2030] px-2 py-0.5 tracking-wide"
                      >
                        {n}
                      </span>
                    ))}
                    {area.neighborhoods.length > 4 && (
                      <span className="text-[0.625rem] text-[#3a4a58] px-1 py-0.5">
                        +{area.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property types + CTA */}
        <section className="section-padding bg-[#080c14]">
          <div className="container-wide">
            <div className="section-divider mb-16" />
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="label-overline mb-4">Property Types</p>
                <h2
                  className="display-title text-white mb-6"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  Every Property
                  <br />
                  <span className="gradient-gold">In Our Coverage Area</span>
                </h2>
                <p className="text-[#a0b0c0] text-[0.9375rem] leading-relaxed mb-8">
                  Within our service areas, Stratton deploys programs for every
                  major property type — from commercial real estate and luxury
                  estates to construction sites and transit hubs.
                </p>
                <div>
                  {PROPERTY_TYPES_SERVED.map((type) => (
                    <div key={type} className="flex items-center gap-4 py-3 border-b border-[#1a2030] last:border-0">
                      <div className="w-1 h-5 bg-[#c49a2a]/40 shrink-0" />
                      <span className="text-[0.875rem] text-[#a0b0c0]">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="card-anduril p-6">
                  <p className="label-overline mb-3">Outside Our Primary Areas?</p>
                  <h3 className="font-[var(--font-display)] text-[1.125rem] text-white uppercase tracking-wide mb-3">
                    Contact Us First
                  </h3>
                  <p className="text-[0.875rem] text-[#606878] leading-relaxed mb-6">
                    Stratton is actively expanding coverage. If your property is
                    outside our listed service areas, contact us — we may still
                    be able to serve you, or connect you with a vetted partner.
                  </p>
                  <Link href="/contact" className="btn-primary text-xs">
                    Discuss Your Location
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="card-anduril p-6">
                  <p className="label-overline mb-3">Our Headquarters</p>
                  <address className="not-italic">
                    <p className="text-white text-[0.9375rem] font-medium mb-1">
                      {SITE_CONFIG.name}
                    </p>
                    <p className="text-[0.875rem] text-[#a0b0c0]">
                      {SITE_CONFIG.address}
                    </p>
                    <p className="text-[0.875rem] text-[#a0b0c0]">
                      {SITE_CONFIG.city}, {SITE_CONFIG.state} {SITE_CONFIG.zip}
                    </p>
                    <p className="text-[0.75rem] text-[#606878] mt-1">
                      Century City, Los Angeles
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
