import { SITE_CONFIG } from "@/lib/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "SecurityService"],
    name: SITE_CONFIG.name,
    url: "https://strattonsecuritygroup.com",
    logo: "https://strattonsecuritygroup.com/images/logo.png",
    description: SITE_CONFIG.brand_promise,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address,
      addressLocality: SITE_CONFIG.city,
      addressRegion: SITE_CONFIG.state,
      postalCode: SITE_CONFIG.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0589,
      longitude: -118.4156,
    },
    areaServed: [
      {
        "@type": "State",
        name: "California",
      },
      {
        "@type": "City",
        name: "Los Angeles",
      },
      {
        "@type": "City",
        name: "Beverly Hills",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.twitter,
    ].filter(Boolean),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "6",
      reviewCount: "6",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "California Private Patrol Operator License",
      recognizedBy: {
        "@type": "Organization",
        name: "California Bureau of Security and Investigative Services",
      },
      identifier: `PPO #${SITE_CONFIG.licenseNumber}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewsSchema({
  reviews,
}: {
  reviews: Array<{ author: string; quote: string; stars: number; date: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((review, i) => ({
      "@type": "Review",
      position: i + 1,
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.stars,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.author,
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: SITE_CONFIG.name,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: "https://strattonsecuritygroup.com",
      telephone: SITE_CONFIG.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_CONFIG.address,
        addressLocality: SITE_CONFIG.city,
        addressRegion: SITE_CONFIG.state,
        postalCode: SITE_CONFIG.zip,
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: name,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
