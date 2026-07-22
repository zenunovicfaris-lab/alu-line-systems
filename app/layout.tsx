import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS, SERVICES } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aluminijske Ograde, Roletne i Vrata | ALU LINE",
    template: "%s | ALU LINE Systems",
  },
  description:
    "Ugrađujemo aluminijske ograde, roletne, nadstrešnice te rolo i sekcijska vrata po vašoj mjeri. Sve izrađujemo i montiramo sami. Srebrenik, BiH.",
  keywords: [
    "aluminijske ograde",
    "aluminijske ograde Srebrenik",
    "roletne",
    "roletne Tuzla",
    "nadstrešnice",
    "garažna rolo vrata",
    "sekcijska vrata",
    "balkonske ograde",
    "dvorišne ograde",
    "aluminijske kapije",
    "Srebrenik",
    "Tuzlanski kanton",
    "ALU LINE Systems",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "70X2NB13DqvB717jOZB742Tqd-F1ayb4-hFkVeosmOs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    title:
      "ALU LINE Systems | Aluminijske Ograde, Roletne i Nadstrešnice",
    description:
      "Ugrađujemo aluminijske ograde, roletne, nadstrešnice te rolo i sekcijska vrata po vašoj mjeri. Sve izrađujemo i montiramo sami.",
    url: SITE_URL,
    siteName: BUSINESS.name,
    type: "website",
    locale: "bs_BA",
    images: [
      {
        url: "/images/hero-img.jpg",
        width: 1200,
        height: 630,
        alt: "ALU LINE Systems — aluminijske ograde, roletne i nadstrešnice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ALU LINE Systems | Aluminijske Ograde, Roletne i Nadstrešnice",
    description:
      "Ugrađujemo aluminijske ograde, roletne i nadstrešnice po vašoj mjeri. Srebrenik, BiH.",
    images: ["/images/hero-img.jpg"],
  },
  category: "business",
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-img.jpg`,
    logo: `${SITE_URL}/images/logo/alu-line.png`,
    telephone: BUSINESS.phone,
    ...(BUSINESS.email ? { email: BUSINESS.email } : {}),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...(BUSINESS.street ? { streetAddress: BUSINESS.street } : {}),
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
      },
    ],
    sameAs: [BUSINESS.facebook, BUSINESS.googleBusiness].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={outfit.variable}>
      <body className="font-outfit antialiased bg-white text-alu-dark overflow-x-hidden">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
