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
  SERVICE_PAGES,
  LOCATION_PAGES,
  getServiceBySlug,
} from "@/lib/content";
import { getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const url = `${SITE_URL}/usluge/${service.slug}`;
  return {
    title: service.metaTitleFull
      ? { absolute: service.metaTitleFull }
      : service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/usluge/${service.slug}` },
    openGraph: {
      title: service.metaTitleFull ?? service.metaTitle,
      description: service.metaDescription,
      url,
      type: "website",
      locale: "bs_BA",
      images: [{ url: service.heroImage, alt: service.name }],
    },
  };
}

export default function ServicePageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const url = `${SITE_URL}/usluge/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
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
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Usluge",
            item: `${SITE_URL}/usluge`,
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
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  const anchor = (s: (typeof SERVICE_PAGES)[number]) => ({
    label: s.linkLabel ?? s.name,
    href: `/usluge/${s.slug}`,
  });
  // Kurirani linkovi drze link equity u klasteru; bez njih se linkuje na sve ostale.
  const curated = (service.relatedServiceSlugs ?? [])
    .map((slug) => SERVICE_PAGES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICE_PAGES)[number] => Boolean(s))
    .map(anchor);
  const otherServices = curated.length
    ? curated
    : SERVICE_PAGES.filter((s) => s.slug !== service.slug).map(anchor);
  const locationLinks = LOCATION_PAGES.map((l) => ({
    label: `${service.name} ${l.city}`,
    href: `/lokacije/${l.slug}`,
  }));
  const blogLinks = (service.relatedPostSlugs ?? [])
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ label: p.title, href: `/blog/${p.slug}` }));

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge="Usluga"
        title={service.h1}
        intro={service.intro}
        image={service.heroImage}
        crumbs={[
          { label: "Početna", href: "/" },
          { label: "Usluge", href: "/usluge" },
          { label: service.name, href: `/usluge/${service.slug}` },
        ]}
      />
      <ProseSection sections={service.body} />
      <FeatureGrid heading="Šta nudimo" features={service.features} />
      <GalleryGrid heading="Naši radovi" images={service.gallery} />
      <FaqSection items={service.faq} />
      <InternalLinks heading="Savjeti i vodiči" links={blogLinks} />
      <InternalLinks heading="Povezane usluge" links={otherServices} />
      <InternalLinks heading="Radimo u vašem gradu" links={locationLinks} />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
