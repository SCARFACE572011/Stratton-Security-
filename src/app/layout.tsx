import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, IBM_Plex_Sans, Barlow } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./schema";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import BackToTop from "@/components/layout/BackToTop";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-sc",
  display: "swap",
});

const barlowReg = Barlow({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-barlow-reg",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06101e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://strattonsecuritygroup.com"),
  title: {
    default: "Stratton Security Group | Professional Security Services",
    template: "%s | Stratton Security Group",
  },
  description:
    "Stratton Security Group delivers professional patrol, guard, and security management services to commercial, residential, and industrial clients. 24/7 availability.",
  keywords: [
    "security services",
    "private security",
    "patrol services",
    "commercial security",
    "residential security",
    "security guard",
    "security company",
    "Stratton Security",
  ],
  authors: [{ name: "Stratton Security Group" }],
  creator: "Stratton Security Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strattonsecuritygroup.com",
    siteName: "Stratton Security Group",
    title: "Stratton Security Group | Professional Security Services",
    description:
      "Professional security services protecting businesses, properties, and communities. 24/7 availability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratton Security Group",
    description: "Professional security services. 24/7 availability.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowSemiCondensed.variable} ${barlowReg.variable} ${ibmPlexSans.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <OrganizationSchema />
        {children}
        <MobileStickyBar />
        <BackToTop />
      </body>
    </html>
  );
}
