/* ─── STRATTON SECURITY GROUP — SITE CONSTANTS ──────────────────────────────
   All data verified from site audit (April 2026).
   Fields marked // VERIFY need client confirmation before launch.
──────────────────────────────────────────────────────────────────────────── */

export const SITE_CONFIG = {
  name: "Stratton Security Group",
  tagline: "Excellence In Protection",
  shortTagline: "Always Vigilant",
  heroBrand: "Excellence In Protection",
  brand_promise:
    "In a world where risk is constantly changing, we are the most reliable corporate service partner.",
  mission: "Protect People, Assets, and Peace of Mind",
  vision: "Set the gold standard for security services across California.",
  phone: "(424) 440-5554",
  phoneRaw: "4244405554",
  phoneE164: "+14244405554",
  email: "Info@StrattonSecurityGroup.com",
  address: "2029 Century Park E, Suite 400",
  city: "Los Angeles",
  state: "CA",
  zip: "90067",
  fullAddress: "2029 Century Park E, Suite 400, Los Angeles, CA 90067",
  serviceAreas: ["Los Angeles", "Beverly Hills", "Southern California", "California"],
  hours: "24 Hours / 7 Days a Week / 365 Days a Year",
  licenseNumber: "122163", // CA PPO License #122163
  social: {
    instagram: "https://www.instagram.com/stratton.security/",
    facebook: "https://www.facebook.com/p/Stratton-Security-100067025670413",
    twitter: "https://x.com/STRATTONSCGROUP",
    linkedin: "", // TODO: confirm LinkedIn URL
  },
  values: ["Integrity", "Vigilance", "Helpfulness"],
  heroVideoSrc: "", // TODO: obtain direct video URL from Squarespace CDN or client
  heroPosterImage: "/images/hero-poster.svg", // TODO: replace with high-res photographic poster
};

export const CLIENT_LOGOS = [
  { name: "Beverly Hills Condominium Association", industry: "Residential HOA", placeholder: true },
  { name: "Century City Commercial Plaza", industry: "Commercial Real Estate", placeholder: true },
  { name: "Luminous Stays Hospitality Group", industry: "Hospitality", placeholder: true },
  { name: "West Hollywood Retail Partners", industry: "Retail", placeholder: true },
  { name: "Southland Construction Partners", industry: "Construction", placeholder: true },
  { name: "Pacific Auto Group", industry: "Auto Dealership", placeholder: true },
  { name: "Wilshire Corporate Offices", industry: "Corporate", placeholder: true },
  { name: "Santa Monica Medical Campus", industry: "Healthcare", placeholder: true },
];

export const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Security Patrol", href: "/services/patrol" },
      { label: "Armed & Unarmed Officers", href: "/services/guard-services" },
      { label: "Commercial Real Estate", href: "/services/commercial-real-estate" },
      { label: "Residential & Community", href: "/services/residential" },
      { label: "Hotel & Hospitality", href: "/services/hospitality" },
      { label: "Retail & Shopping Centers", href: "/services/retail" },
      { label: "Construction & Job Sites", href: "/services/construction" },
      { label: "Corporate & Executive", href: "/services/corporate" },
      { label: "Event Security", href: "/services/events" },
      { label: "View All Services →", href: "/services" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Training", href: "/training" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type ServiceDetail = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  capabilities: string[];
  relatedIndustries: string[];
  icon: string;
  color: string;
};

export const SERVICES: ServiceDetail[] = [
  {
    id: "patrol",
    title: "Security Patrol",
    slug: "patrol",
    shortDescription:
      "Uniformed mobile and vehicle patrols delivering visible deterrence, rapid incident response, and around-the-clock coverage across your property.",
    longDescription:
      "Stratton's patrol program pairs marked vehicles and uniformed officers with randomized patrol timing and GPS-logged checkpoints — the combination that deters opportunistic crime without letting patterns become predictable. Every patrol is documented, every route auditable, and every response backed by a live 24/7 supervisor.",
    benefits: [
      {
        title: "Visible Deterrence",
        description:
          "Marked patrol vehicles and uniformed officers broadcast a clear signal: this property is protected and monitored.",
      },
      {
        title: "Randomized Routes",
        description:
          "Patrol intervals are intentionally non-patterned so bad actors cannot time a gap in coverage.",
      },
      {
        title: "Rapid Response",
        description:
          "Mobile officers respond to alarms, incidents, and after-hours calls — often faster than third-party dispatch.",
      },
      {
        title: "Documented Accountability",
        description:
          "GPS-verified checkpoints and digital logs give you full visibility into when and where our officers were on property.",
      },
    ],
    capabilities: [
      "Marked vehicle patrols",
      "Foot patrols on complex properties",
      "GPS-verified checkpoint scans",
      "Alarm response & investigation",
      "Lock & unlock services",
      "Incident documentation with photos",
    ],
    relatedIndustries: ["commercial-real-estate", "retail", "condominiums", "construction"],
    icon: "Shield",
    color: "blue",
  },
  {
    id: "guard",
    title: "Armed & Unarmed Officers",
    slug: "guard-services",
    shortDescription:
      "Professionally trained armed and unarmed security officers — licensed, background-checked, and held to the highest standards of conduct.",
    longDescription:
      "Every Stratton officer is licensed by the California Bureau of Security and Investigative Services, background-checked, drug-tested, and trained to our internal standards — which exceed the state minimum. Armed officers carry additional firearms permits (Exposed Firearm Permit) and complete live-fire requalification on a defined cadence.",
    benefits: [
      {
        title: "Vetted Personnel",
        description:
          "Criminal background checks, drug screening, and work history verification for every officer before deployment.",
      },
      {
        title: "Armed Or Unarmed",
        description:
          "Match the posture to the risk — armed officers for high-value assets, unarmed for guest-facing environments.",
      },
      {
        title: "Exceeds Minimums",
        description:
          "Stratton training goes beyond California's required hours — TEAM, CPR/First Aid, Power to Arrest, and more.",
      },
      {
        title: "Professional Presence",
        description:
          "Officers are uniformed, composed, and trained in de-escalation — never the loud, unprofessional type the industry is known for.",
      },
    ],
    capabilities: [
      "Armed officers (with Exposed Firearm Permit)",
      "Unarmed uniformed officers",
      "Plainclothes security",
      "Dedicated post assignments",
      "Relief and supervisor coverage",
      "Event deployment teams",
    ],
    relatedIndustries: ["hospitality", "financial", "government", "estates"],
    icon: "ShieldCheck",
    color: "gold",
  },
  {
    id: "commercial",
    title: "Commercial Real Estate",
    slug: "commercial-real-estate",
    shortDescription:
      "Comprehensive security management for office parks, corporate campuses, retail centers, condominiums, and multi-tenant facilities.",
    longDescription:
      "Commercial properties have multiple stakeholders — owners, tenants, visitors, and vendors — and every one of them expects security to be both present and invisible. Stratton designs programs that integrate with building operations, preserve tenant experience, and deliver measurable reduction in incident frequency.",
    benefits: [
      {
        title: "Tenant-Friendly Operations",
        description:
          "Officers are trained to be service-oriented with tenants while maintaining firm enforcement of access policies.",
      },
      {
        title: "Post Analysis & Reporting",
        description:
          "Quarterly reviews with property management — what happened, what changed, what's next.",
      },
      {
        title: "Vendor & Access Control",
        description:
          "Credentialed vendor check-in, package management, and after-hours access protocols.",
      },
      {
        title: "Integrated With Facilities",
        description:
          "Our team coordinates with engineering, janitorial, and leasing so security supports operations — not the other way around.",
      },
    ],
    capabilities: [
      "24/7 lobby ambassadors",
      "Tenant service & escort programs",
      "Loading dock & vendor control",
      "After-hours access management",
      "Parking enforcement coordination",
      "Emergency action plan integration",
    ],
    relatedIndustries: ["commercial-real-estate", "financial", "condominiums"],
    icon: "Building2",
    color: "steel",
  },
  {
    id: "residential",
    title: "Residential & Community",
    slug: "residential",
    shortDescription:
      "HOA patrol, gated community security, apartment complex protection, and discreet estate-level services for luxury residences.",
    longDescription:
      "Residential security is about trust with the people who live on the property. Stratton builds programs with HOAs and property managers that deliver consistent presence, recognize residents by name, enforce community rules with composure, and respond to issues without creating new ones.",
    benefits: [
      {
        title: "Known, Trusted Faces",
        description:
          "Consistent officer assignment so residents recognize and trust the team protecting their homes.",
      },
      {
        title: "HOA Coordination",
        description:
          "Regular communication with board members, property managers, and community leadership.",
      },
      {
        title: "Rule Enforcement With Composure",
        description:
          "Officers trained to enforce community standards respectfully — protecting residents without antagonizing them.",
      },
      {
        title: "Discretion For Estates",
        description:
          "For private residences, officers are trained in low-profile protocols matched to high-net-worth expectations.",
      },
    ],
    capabilities: [
      "Gated community patrol",
      "HOA & condo board reporting",
      "Apartment complex security",
      "Private estate detail",
      "Resident concierge support",
      "Package & delivery verification",
    ],
    relatedIndustries: ["condominiums", "estates"],
    icon: "Home",
    color: "blue",
  },
  {
    id: "hospitality",
    title: "Hotel & Hospitality",
    slug: "hospitality",
    shortDescription:
      "Guest-forward security for hotels, resorts, and entertainment venues — balancing presence with a service-first approach.",
    longDescription:
      "In hospitality, security is part of the guest experience. An officer who stands rigid in the lobby works against a five-star brand. Stratton places officers who read the room, hold the standard, and handle incidents before they become guest-visible problems.",
    benefits: [
      {
        title: "Guest Experience First",
        description:
          "Officers trained to be warm and service-oriented while maintaining vigilance — not either/or.",
      },
      {
        title: "TEAM Certified",
        description:
          "All officers certified in Techniques for Effective Alcohol Management for venues serving alcohol.",
      },
      {
        title: "Event Ready",
        description:
          "Scalable teams for conferences, galas, weddings, and venue-wide events with crowd management experience.",
      },
      {
        title: "Incident Discretion",
        description:
          "Issues are handled quickly and discreetly — protecting the guest experience and the brand reputation.",
      },
    ],
    capabilities: [
      "Lobby & front-of-house security",
      "Event & banquet detail",
      "VIP guest protection",
      "TEAM-certified alcohol management",
      "Pool, beach, and venue patrols",
      "Back-of-house & employee entrance posts",
    ],
    relatedIndustries: ["hospitality", "retail"],
    icon: "Star",
    color: "gold",
  },
  {
    id: "retail",
    title: "Retail & Shopping Centers",
    slug: "retail",
    shortDescription:
      "Loss prevention, access control, and customer-focused security for retail environments and high-traffic shopping destinations.",
    longDescription:
      "Retail security demands a specific balance — enough presence to deter theft and organized retail crime, light enough to preserve the shopping experience. Stratton deploys uniformed and plainclothes teams trained in California's legal framework for retail loss prevention.",
    benefits: [
      {
        title: "Organized Retail Crime Response",
        description:
          "Officers trained to recognize, document, and respond to organized retail crime patterns.",
      },
      {
        title: "Loss Prevention Expertise",
        description:
          "California-specific training on civil recovery and legal detainment for shoplifting incidents.",
      },
      {
        title: "Customer-Facing Professionalism",
        description:
          "Officers double as brand ambassadors — visible, approachable, and helpful to shoppers.",
      },
      {
        title: "Center-Wide Coordination",
        description:
          "For shopping centers, we coordinate with individual tenants and mall management as a single integrated team.",
      },
    ],
    capabilities: [
      "Uniformed store & center security",
      "Plainclothes loss prevention",
      "Organized retail crime investigations",
      "Parking lot patrols",
      "Opening & closing procedures",
      "Emergency evacuation drills",
    ],
    relatedIndustries: ["retail", "commercial-real-estate"],
    icon: "ShoppingBag",
    color: "steel",
  },
  {
    id: "construction",
    title: "Construction & Job Sites",
    slug: "construction",
    shortDescription:
      "Around-the-clock protection for construction sites, heavy equipment, materials, and active project environments.",
    longDescription:
      "Active construction sites combine high-value equipment, expensive raw materials, and unfinished structures — a combination that attracts theft, vandalism, and illegal dumping. Stratton's site programs combine fixed posts, mobile patrols, and access control for subcontractors.",
    benefits: [
      {
        title: "Copper & Equipment Theft Prevention",
        description:
          "Targeted deterrence for the materials and tools most often stolen from active job sites.",
      },
      {
        title: "Subcontractor Access Control",
        description:
          "Credentialed check-in for subs, deliveries, and inspectors — full visibility on who is on-site.",
      },
      {
        title: "After-Hours Coverage",
        description:
          "Site security scales up during the overnight and weekend hours when job sites are most vulnerable.",
      },
      {
        title: "Project Manager Reporting",
        description:
          "Daily logs and incident reports delivered to the GC and owner on a cadence that matches the project.",
      },
    ],
    capabilities: [
      "Fixed-post site security",
      "Mobile patrol between sites",
      "Gate & access control",
      "Subcontractor check-in",
      "Material & equipment inventory logs",
      "Firewatch during hot work",
    ],
    relatedIndustries: ["construction", "industrial"],
    icon: "HardHat",
    color: "blue",
  },
  {
    id: "events",
    title: "Event Security",
    slug: "events",
    shortDescription:
      "Scalable uniformed and plainclothes teams for galas, conferences, private events, and venue-wide functions — crowd management without compromising the guest experience.",
    longDescription:
      "Event security is a balance of visible presence and guest-experience preservation. Stratton plans each event from advance walk-through through post-event debrief — sizing the team to venue, attendance, VIP profile, and risk exposure. Officers coordinate with event staff, caterers, and venue leadership so security becomes part of a well-run event, not a friction point.",
    benefits: [
      {
        title: "Advance Planning",
        description:
          "Site advance, route planning, and risk assessment before the event — not scrambled together on arrival.",
      },
      {
        title: "Scalable Teams",
        description:
          "From intimate private dinners to 1,000+ guest galas — sized and staffed appropriately, not one-size-fits-all.",
      },
      {
        title: "VIP & Celebrity Experienced",
        description:
          "Officers with experience protecting high-profile guests, including discreet coordination with principal details.",
      },
      {
        title: "TEAM Certified",
        description:
          "Officers certified in alcohol management protocols for events serving beer, wine, and spirits.",
      },
    ],
    capabilities: [
      "Event advance and walk-through",
      "Credentialing and access control",
      "Crowd management & flow",
      "VIP arrival and departure details",
      "Perimeter and venue patrols",
      "Post-event incident reporting",
    ],
    relatedIndustries: ["hospitality", "government", "education"],
    icon: "Star",
    color: "gold",
  },
  {
    id: "corporate",
    title: "Corporate & Executive",
    slug: "corporate",
    shortDescription:
      "Executive protection, corporate security programs, concierge lobby services, and chauffeur services for high-profile clients.",
    longDescription:
      "For executives, board members, and high-profile principals, security is a balance of risk mitigation and personal comfort. Stratton provides discreet, professional protection details — from lobby ambassadors that elevate the guest experience to full executive protection for travel and events.",
    benefits: [
      {
        title: "Low-Profile Protection",
        description:
          "Executive protection that does not announce itself — discreet, professional, and sized to the threat.",
      },
      {
        title: "Advance & Travel Work",
        description:
          "Route planning, venue advance, and travel coordination for principals on the move.",
      },
      {
        title: "Concierge Ambassador Services",
        description:
          "Polished lobby teams that handle access control and visitor experience with executive-grade professionalism.",
      },
      {
        title: "Confidentiality",
        description:
          "Principal identities, schedules, and routines are protected by strict internal confidentiality standards.",
      },
    ],
    capabilities: [
      "Executive protection details",
      "Residential executive security",
      "Chauffeur & secure transport",
      "Corporate lobby ambassadors",
      "Event & conference advance",
      "Board meeting security",
    ],
    relatedIndustries: ["financial", "estates", "commercial-real-estate"],
    icon: "Briefcase",
    color: "gold",
  },
];

export type Industry = {
  label: string;
  slug: string;
  summary?: string;
  threats?: string[];
  approach?: string;
  relatedServices?: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    label: "Commercial Real Estate",
    slug: "commercial-real-estate",
    summary:
      "Office buildings, corporate campuses, business parks, and multi-tenant properties rely on Stratton for security programs that preserve tenant experience while delivering measurable incident reduction.",
    threats: [
      "Unauthorized after-hours access",
      "Vendor and delivery fraud",
      "Tenant workplace violence risk",
      "Parking structure incidents",
      "Loading dock theft",
    ],
    approach:
      "Integrated programs combining lobby ambassadors, roving patrols, and access control — built in coordination with property managers, engineers, and leasing teams.",
    relatedServices: ["commercial-real-estate", "patrol", "corporate"],
  },
  {
    label: "Retail & Shopping Centers",
    slug: "retail",
    summary:
      "Retail environments demand security that deters loss without degrading the shopping experience. Stratton deploys uniformed and plainclothes teams trained in organized retail crime response.",
    threats: [
      "Organized retail crime (ORC)",
      "Internal theft and shrink",
      "Parking lot incidents",
      "Customer conflict and disorderly conduct",
      "Unauthorized vendor solicitation",
    ],
    approach:
      "Customer-facing uniformed security combined with plainclothes loss prevention, backed by incident documentation that supports prosecution.",
    relatedServices: ["retail", "patrol", "guard-services"],
  },
  {
    label: "Hotel & Hospitality",
    slug: "hospitality",
    summary:
      "Hotels, resorts, and entertainment venues count on Stratton for guest-forward security — officers who read the room, maintain the brand standard, and handle incidents before guests notice.",
    threats: [
      "Guest room access violations",
      "Alcohol-related incidents in F&B venues",
      "VIP and celebrity guest exposure",
      "Event and banquet disruptions",
      "Back-of-house theft",
    ],
    approach:
      "TEAM-certified officers trained to balance warmth with vigilance, scalable teams for special events, and confidential VIP protocols.",
    relatedServices: ["hospitality", "corporate", "guard-services"],
  },
  {
    label: "Healthcare Facilities",
    slug: "healthcare",
    summary:
      "Hospitals, medical offices, and healthcare campuses face a unique mix of public access, vulnerable patients, and regulated workflows — requiring officers trained in de-escalation and HIPAA-aware conduct.",
    threats: [
      "Workplace violence against staff",
      "Patient elopement from restricted wards",
      "Pharmacy and controlled-substance security",
      "Visitor access violations",
      "Emergency department disruptions",
    ],
    approach:
      "De-escalation-first officers trained in healthcare-specific protocols, coordinated with nursing leadership and facilities security.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Education & Campus",
    slug: "education",
    summary:
      "Universities, K–12 schools, and educational campuses require security attuned to the rhythms of campus life — visible enough to reassure parents, calibrated enough to respect student experience.",
    threats: [
      "Unauthorized campus access",
      "Event and athletics crowd management",
      "Residential housing incidents",
      "Parking and traffic conflicts",
      "After-hours facility protection",
    ],
    approach:
      "Community-oriented officers trained in student and parent interaction, with scalable teams for athletic events, graduations, and campus functions.",
    relatedServices: ["patrol", "guard-services"],
  },
  {
    label: "Industrial & Manufacturing",
    slug: "industrial",
    summary:
      "Manufacturing plants, processing facilities, and industrial parks require disciplined access control and material accountability — with officers trained in the specific risks of each operational environment.",
    threats: [
      "Raw material and finished goods theft",
      "Employee credential fraud",
      "Truck and logistics fraud",
      "Industrial espionage attempts",
      "Safety and OSHA observation gaps",
    ],
    approach:
      "Gate and access control paired with patrols tuned to shift-change and loading cycles — plus incident reporting integrated with operations.",
    relatedServices: ["guard-services", "patrol", "construction"],
  },
  {
    label: "Government Institutions",
    slug: "government",
    summary:
      "Municipal buildings, courthouses, and public infrastructure require officers who understand public-sector protocols, credentialing, and the elevated threat environment of civic spaces.",
    threats: [
      "Public-facing workplace violence",
      "Credential and access fraud",
      "Protest and demonstration management",
      "Infrastructure targeting",
      "Elected-official protection needs",
    ],
    approach:
      "Officers with law enforcement backgrounds, trained in public-sector conduct and coordinated with municipal emergency management.",
    relatedServices: ["guard-services", "patrol", "corporate"],
  },
  {
    label: "Financial Institutions",
    slug: "financial",
    summary:
      "Banks, credit unions, investment firms, and financial data centers demand security that signals institutional seriousness while protecting assets and personnel.",
    threats: [
      "Robbery and armed threats",
      "Cash-in-transit exposure",
      "ATM and branch skimming",
      "Executive and employee protection",
      "Data center physical security",
    ],
    approach:
      "Armed uniformed officers, executive protection for principals, and integrated coordination with corporate security teams.",
    relatedServices: ["guard-services", "corporate", "commercial-real-estate"],
  },
  {
    label: "Auto Dealerships",
    slug: "auto-dealership",
    summary:
      "Auto dealerships combine high-value rolling inventory, customer-facing showrooms, and service centers with parts storage — each with its own security profile.",
    threats: [
      "Vehicle theft and catalytic converter theft",
      "Test-drive and customer fraud",
      "Service center parts theft",
      "After-hours lot access",
      "Employee theft",
    ],
    approach:
      "Overnight lot security combined with daytime showroom presence and service bay observation — tuned to the specific layout and exposure of each dealership.",
    relatedServices: ["patrol", "guard-services"],
  },
  {
    label: "Estates & Private Residences",
    slug: "estates",
    summary:
      "Luxury private residences, estates, and high-net-worth homes require discretion above all — officers trained in low-profile protocols and confidentiality.",
    threats: [
      "Paparazzi and unwanted surveillance",
      "Stalker and obsessed-fan exposure",
      "Staff credentialing and internal risk",
      "Construction and vendor access",
      "Residence-to-vehicle transitions",
    ],
    approach:
      "Low-profile officers with executive protection backgrounds, scaled to the principal's risk posture and lifestyle requirements.",
    relatedServices: ["residential", "corporate", "guard-services"],
  },
  {
    label: "Construction & Job Sites",
    slug: "construction",
    summary:
      "Active construction sites combine high-value materials and expensive equipment with unfinished, unsecured structures — a profile that demands purpose-built security programs.",
    threats: [
      "Copper and metal theft",
      "Heavy equipment theft",
      "Tool and material theft",
      "Illegal dumping on site",
      "Unauthorized subcontractor access",
    ],
    approach:
      "Fixed posts combined with mobile patrols, credentialed subcontractor check-in, and firewatch coverage during hot work — reporting directly to the GC.",
    relatedServices: ["construction", "patrol", "guard-services"],
  },
  {
    label: "Distribution & Logistics",
    slug: "logistics",
    summary:
      "Distribution centers, warehouses, and freight hubs operate around the clock with high truck volumes and continuous inventory flow — requiring security tuned to logistics operations.",
    threats: [
      "Cargo theft in transit",
      "Loading dock fraud",
      "Driver credential verification",
      "Perimeter breach attempts",
      "Inventory diversion",
    ],
    approach:
      "24/7 gate control, truck verification, and patrols coordinated with shift changes — backed by incident reporting that integrates with logistics operations.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Train & Bus Terminals",
    slug: "transit",
    summary:
      "Transit hubs require officers comfortable in high-traffic public environments — visible, composed, and trained to respond quickly in crowded settings.",
    threats: [
      "Passenger disputes and workplace violence",
      "Theft from passengers and platforms",
      "Homeless and mental health encounters",
      "Emergency response in crowds",
      "Credentialing at controlled access points",
    ],
    approach:
      "Uniformed officers trained in public-transit protocols, de-escalation, and emergency response — with experience in high-volume environments.",
    relatedServices: ["guard-services", "patrol"],
  },
  {
    label: "Condominiums & High-Rises",
    slug: "condominiums",
    summary:
      "Condominium complexes and high-rises rely on Stratton for consistent, resident-forward security that coordinates with HOA boards and property management.",
    threats: [
      "Unauthorized common-area access",
      "Package theft",
      "Resident disputes and rule enforcement",
      "After-hours visitor control",
      "Parking structure incidents",
    ],
    approach:
      "Consistent officer assignment for resident familiarity, HOA-integrated reporting, and concierge-style front-desk coverage.",
    relatedServices: ["residential", "commercial-real-estate", "patrol"],
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Years Combined Experience" },
  { value: 14, suffix: "", label: "Industry Verticals Served" },
  { value: 24, suffix: "/7", label: "Operations Center" },
  { value: 5, suffix: "★", label: "Bark.com Rated" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Since Stratton Security began its patrol, my company and the neighbors around have felt a decrease in crime. Really, thank you.",
    author: "Margot M.",
    company: "Commercial Property Client",
    initials: "MM",
    stars: 5,
  },
  {
    quote:
      "Staffed by both current and former LAPD officers, Stratton Security is skilled and prestigiously high class.",
    author: "Phillip Webb",
    company: "Los Angeles",
    initials: "PW",
    stars: 5,
  },
  {
    quote:
      "Their patrol vehicles are always visible, and the officers are always greeting my clients with a smile. Everyone always feels safe and happy.",
    author: "Natasha Chevalier",
    company: "Business Owner",
    initials: "NC",
    stars: 5,
  },
  {
    quote:
      "On short notice within a week, Stratton Security Group set up armed security guard service for my brother's multiple locations across California — delivered beyond our big expectations.",
    author: "Derek M.",
    company: "Multi-Location Business",
    initials: "DM",
    stars: 5,
  },
  {
    quote:
      "Any hour of any given night and weekend I've been able to reach the supervisor — which certainly couldn't be said about other companies.",
    author: "Luminous Stays",
    company: "Hospitality Client",
    initials: "LS",
    stars: 5,
  },
  {
    quote:
      "Their team is incredibly professional and responsive. Considering how dangerous it has become out here in Los Angeles, I genuinely don't know how my business would function without them.",
    author: "Rohan Johnson",
    company: "Los Angeles Business Owner",
    initials: "RJ",
    stars: 5,
  },
];

export const BARK_REVIEWS = [
  {
    quote:
      "Their team has truly set the bar when it comes to providing security services.",
    author: "Genevieve",
    role: "Head Manager, Beverly Hills Condominium Complex",
    date: "April 2025",
    stars: 5,
  },
  {
    quote:
      "Security officers so far made my life easier with their quick and descriptive responses.",
    author: "Sanela",
    role: "Community Manager",
    date: "September 2024",
    stars: 5,
  },
  {
    quote:
      "Ten gentlemen with their two supervisors were superb — absolutely professional.",
    author: "Munir",
    role: "Event Organizer, 300-Person Event",
    date: "August 2024",
    stars: 5,
  },
];

export const FAQS = [
  {
    q: "What areas does Stratton Security Group serve?",
    a: "Stratton Security Group is headquartered in Century City and serves all of Los Angeles, Beverly Hills, and Southern California. We deploy patrol, guard, and specialized security services across LA County and adjacent markets.",
  },
  {
    q: "Is Stratton Security Group licensed and insured?",
    a: "Yes. Stratton holds California PPO License #122163 issued by the Bureau of Security and Investigative Services. All officers are individually licensed, and the company is fully bonded and insured.",
  },
  {
    q: "What is the difference between armed and unarmed officers?",
    a: "Armed officers carry an additional Exposed Firearm Permit and complete live-fire qualification on a defined cadence; they are appropriate for environments with elevated threat profiles. Unarmed officers provide the same professional presence and training for environments where an armed posture is not required or desired. Stratton helps you select the right posture during the risk assessment.",
  },
  {
    q: "How quickly can Stratton deploy to a new property?",
    a: "For standard deployments we can typically begin coverage within 72 hours of contract signing. For urgent incidents we have mobilized teams in under 24 hours. A Stratton advisor will confirm timing during your initial consultation.",
  },
  {
    q: "Are Stratton officers LAPD trained?",
    a: "Stratton's roster includes officers with current and former LAPD experience. All Stratton officers — LAPD-credentialed or not — complete our internal training program, which exceeds California's minimum requirements and includes TEAM certification, CPR/First Aid, and Power to Arrest.",
  },
  {
    q: "Do you provide security for one-time events?",
    a: "Yes. Stratton's event security program supports galas, conferences, weddings, private events, and venue-wide functions. We advance the venue, size the team appropriately, and deliver a post-event debrief. Start a conversation on the Contact page.",
  },
  {
    q: "Do you offer unarmed-only or plainclothes options?",
    a: "Yes. Stratton deploys unarmed uniformed officers, plainclothes teams (common in retail loss prevention and hospitality), and concierge-style lobby ambassadors. The posture is always matched to the property and the risk profile.",
  },
  {
    q: "How does Stratton handle incident reporting?",
    a: "Every incident is documented digitally with timestamps, photos when relevant, and written narrative. Clients receive regular reports on a cadence agreed to during program setup — daily for high-security operations, weekly or monthly for ongoing patrol programs. Supervisors are reachable 24/7.",
  },
  {
    q: "What training do Stratton officers receive?",
    a: "All active officers complete California's mandatory Power to Arrest curriculum, First Aid & CPR certification, and TEAM (Techniques for Effective Alcohol Management) certification. New officers complete Stratton's initial officer training covering post orders, communication, reporting, and conduct standards. See the Training page for more.",
  },
  {
    q: "Can Stratton customize a program to my specific property?",
    a: "Yes — and we strongly recommend it. No two properties are identical. Stratton starts every engagement with a risk assessment and designs a tailored program based on your facility, risk profile, and operational requirements.",
  },
];

export const DIFFERENTIATORS = [
  {
    title: "California Licensed & Insured",
    description:
      "All Stratton personnel hold active California PPO credentials and are thoroughly vetted, trained, and uniformed. Fully licensed, bonded, and insured.",
    icon: "BadgeCheck",
  },
  {
    title: "24/7/365 Operations",
    description:
      "Our operations center is staffed every hour of every day. You can reach a live supervisor at 3am on a holiday — because security risk doesn't keep business hours.",
    icon: "Clock",
  },
  {
    title: "LAPD-Trained Officers",
    description:
      "Our team includes officers with current and former LAPD experience, bringing law enforcement discipline and situational awareness to every assignment.",
    icon: "Shield",
  },
  {
    title: "Custom Security Programs",
    description:
      "No two properties are identical. Stratton builds tailored programs matched to your specific risk profile, facility type, and operational requirements.",
    icon: "Settings2",
  },
  {
    title: "Certified Training Standards",
    description:
      "Officers are certified in TEAM (Alcohol Management), First Aid & CPR, Power to Arrest, and ongoing professional development — not just the minimum.",
    icon: "Award",
  },
  {
    title: "Transparent Accountability",
    description:
      "Quarterly security post analysis, digital reporting, real-time incident logs, and proactive supervisor communication keep you informed and in control.",
    icon: "FileText",
  },
];
