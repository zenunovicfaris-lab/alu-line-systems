import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SubPageHero from "@/components/subpage/SubPageHero";
import ProseSection from "@/components/subpage/ProseSection";
import FeatureGrid from "@/components/subpage/FeatureGrid";
import FaqSection from "@/components/subpage/FaqSection";
import InternalLinks from "@/components/subpage/InternalLinks";
import { SITE_URL, BUSINESS } from "@/lib/site";
import {
  getServicePages,
  getLocationPages,
  getLocationBySlug,
} from "@/lib/content";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor, localizePath } from "@/lib/i18n/paths";
import { getDictionary, fmt } from "@/lib/i18n";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getLocationPages(locale).map((l) => ({ locale, slug: l.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const loc = getLocationBySlug(params.locale, params.slug);
  if (!loc) return {};
  const bsPath = `/lokacije/${loc.id}`;
  return {
    title: loc.metaTitleFull
      ? { absolute: loc.metaTitleFull }
      : loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: alternatesFor(params.locale, bsPath),
    openGraph: {
      title: loc.metaTitleFull ?? loc.metaTitle,
      description: loc.metaDescription,
      url: absoluteUrl(params.locale, bsPath),
      type: "website",
      locale: LOCALE_META[params.locale].ogLocale,
      images: [{ url: loc.heroImage, alt: `ALU LINE Systems ${loc.city}` }],
    },
  };
}

export default function LocationPageRoute({ params }: { params: Params }) {
  const { locale } = params;
  const loc = getLocationBySlug(locale, params.slug);
  if (!loc) notFound();

  const dict = getDictionary(locale);
  const t = dict.locationPage;
  const href = (bsPath: string) => localizePath(locale, bsPath);
  const url = absoluteUrl(locale, `/lokacije/${loc.id}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/#business`,
        name: `${BUSINESS.name} — ${loc.city}`,
        description: loc.metaDescription,
        url,
        telephone: BUSINESS.phone,
        image: `${SITE_URL}${loc.heroImage}`,
        areaServed: { "@type": "Place", name: loc.city },
        address: {
          "@type": "PostalAddress",
          addressLocality: BUSINESS.city,
          addressRegion: BUSINESS.region,
          postalCode: BUSINESS.postalCode,
          addressCountry: BUSINESS.country,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.common.home,
            item: absoluteUrl(locale, "/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.nav.locations,
            item: absoluteUrl(locale, "/lokacije"),
          },
          { "@type": "ListItem", position: 3, name: loc.city, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: loc.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: loc.metaTitle,
        inLanguage: locale,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  // Usluge dostupne u ovom gradu (interno povezivanje ka uslužnim stranicama)
  const serviceLinks = getServicePages(locale).map((s) => ({
    label: `${s.name} ${loc.city}`,
    href: href(`/usluge/${s.id}`),
  }));

  const otherCities = getLocationPages(locale)
    .filter((l) => l.id !== loc.id)
    .map((l) => ({ label: `ALU LINE ${l.city}`, href: href(`/lokacije/${l.id}`) }));

  const vars = { loc: loc.cityLocative, city: loc.city, phone: dict.common.phoneDisplay };
  const features = t.features.map((f) => ({ title: f.title, desc: fmt(f.desc, vars) }));

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge={fmt(t.badge, vars)}
        title={loc.h1}
        intro={loc.intro}
        image={loc.heroImage}
        crumbs={[
          { label: dict.common.home, href: href("/") },
          { label: dict.nav.locations, href: href("/lokacije") },
          { label: loc.city, href: href(`/lokacije/${loc.id}`) },
        ]}
      />
      <ProseSection sections={loc.body} />
      <FeatureGrid
        heading={fmt(t.servicesIn, vars)}
        subheading={fmt(t.servicesSub, vars)}
        features={features}
      />
      <FaqSection items={loc.faq} locale={locale} />
      <InternalLinks heading={t.seeServices} links={serviceLinks} />
      <InternalLinks heading={t.otherCities} links={otherCities} />
      <ContactSection />
      <Footer locale={locale} />
      <WhatsAppFAB />
    </main>
  );
}
