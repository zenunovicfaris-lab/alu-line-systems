import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { LOCALES, LOCALE_META, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const t = getDictionary(locale).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.title,
      template: t.titleTemplate,
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
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
      title: t.ogTitle,
      description: t.ogDescription,
      url: SITE_URL,
      siteName: BUSINESS.name,
      type: "website",
      locale: LOCALE_META[locale].ogLocale,
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => LOCALE_META[l].ogLocale
      ),
      images: [
        {
          url: "/images/hero-img.jpg",
          width: 1200,
          height: 630,
          alt: t.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.twitterDescription,
      images: ["/images/hero-img.jpg"],
    },
    category: "business",
  };
}

function LocalBusinessJsonLd({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).meta;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: t.businessDescription,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-img.jpg`,
    logo: `${SITE_URL}/images/logo/alu-line.png`,
    telephone: BUSINESS.phone,
    ...(BUSINESS.email ? { email: BUSINESS.email } : {}),
    priceRange: "$$",
    knowsLanguage: ["bs", "sl", "de"],
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
      name: t.catalogName,
      itemListElement: t.services.map((service) => ({
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <html lang={locale} className={outfit.variable}>
      <body className="font-outfit antialiased bg-white text-alu-dark overflow-x-hidden">
        <LocalBusinessJsonLd locale={locale} />
        <LocaleProvider locale={locale} dict={getDictionary(locale)}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
