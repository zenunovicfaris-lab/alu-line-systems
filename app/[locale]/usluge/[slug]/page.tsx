import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SubPageHero from "@/components/subpage/SubPageHero";
import ProseSection from "@/components/subpage/ProseSection";
import FeatureGrid from "@/components/subpage/FeatureGrid";
import GalleryGrid from "@/components/subpage/GalleryGrid";
import FaqSection from "@/components/subpage/FaqSection";
import InternalLinks from "@/components/subpage/InternalLinks";
import { SITE_URL, BUSINESS } from "@/lib/site";
import {
  getServicePages,
  getLocationPages,
  getServiceBySlug,
  type ServicePage,
} from "@/lib/content";
import { getPostById } from "@/lib/blog";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor, localizePath } from "@/lib/i18n/paths";
import { getDictionary } from "@/lib/i18n";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getServicePages(locale).map((s) => ({ locale, slug: s.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = getServiceBySlug(params.locale, params.slug);
  if (!service) return {};
  const bsPath = `/usluge/${service.id}`;
  return {
    title: service.metaTitleFull
      ? { absolute: service.metaTitleFull }
      : service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: alternatesFor(params.locale, bsPath),
    openGraph: {
      title: service.metaTitleFull ?? service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(params.locale, bsPath),
      type: "website",
      locale: LOCALE_META[params.locale].ogLocale,
      images: [{ url: service.heroImage, alt: service.name }],
    },
  };
}

export default function ServicePageRoute({ params }: { params: Params }) {
  const { locale } = params;
  const service = getServiceBySlug(locale, params.slug);
  if (!service) notFound();

  const dict = getDictionary(locale);
  const t = dict.servicePage;
  const href = (bsPath: string) => localizePath(locale, bsPath);
  const url = absoluteUrl(locale, `/usluge/${service.id}`);
  const services = getServicePages(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        inLanguage: locale,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          "@id": `${SITE_URL}/#business`,
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
        },
        areaServed: BUSINESS.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
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
            name: dict.nav.services,
            item: absoluteUrl(locale, "/usluge"),
          },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: service.metaTitle,
        inLanguage: locale,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  const anchor = (s: ServicePage) => ({
    label: s.linkLabel ?? s.name,
    href: href(`/usluge/${s.id}`),
  });
  // Kurirani linkovi drze link equity u klasteru; bez njih se linkuje na sve ostale.
  const curated = (service.relatedServiceSlugs ?? [])
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is ServicePage => Boolean(s))
    .map(anchor);
  const otherServices = curated.length
    ? curated
    : services.filter((s) => s.id !== service.id).map(anchor);
  const locationLinks = getLocationPages(locale).map((l) => ({
    label: `${service.name} ${l.city}`,
    href: href(`/lokacije/${l.id}`),
  }));
  const blogLinks = (service.relatedPostSlugs ?? [])
    .map((id) => getPostById(locale, id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ label: p.title, href: href(`/blog/${p.id}`) }));

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge={t.badge}
        title={service.h1}
        intro={service.intro}
        image={service.heroImage}
        crumbs={[
          { label: dict.common.home, href: href("/") },
          { label: dict.nav.services, href: href("/usluge") },
          { label: service.name, href: href(`/usluge/${service.id}`) },
        ]}
      />
      <ProseSection sections={service.body} />
      <FeatureGrid heading={t.offer} features={service.features} />
      <GalleryGrid heading={t.ourWork} images={service.gallery} />
      <FaqSection items={service.faq} locale={locale} />
      <InternalLinks heading={t.guides} links={blogLinks} />
      <InternalLinks heading={t.related} links={otherServices} />
      <InternalLinks heading={t.inYourCity} links={locationLinks} />
      <ContactSection />
      <Footer locale={locale} />
      <WhatsAppFAB />
    </main>
  );
}
