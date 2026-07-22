import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import SubPageHero from "@/components/subpage/SubPageHero";
import ProseSection from "@/components/subpage/ProseSection";
import FeatureGrid from "@/components/subpage/FeatureGrid";
import FaqSection from "@/components/subpage/FaqSection";
import InternalLinks from "@/components/subpage/InternalLinks";
import { SITE_URL, BUSINESS } from "@/lib/site";
import {
  SERVICE_PAGES,
  LOCATION_PAGES,
  getLocationBySlug,
} from "@/lib/content";

export function generateStaticParams() {
  return LOCATION_PAGES.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const loc = getLocationBySlug(params.slug);
  if (!loc) return {};
  const url = `${SITE_URL}/lokacije/${loc.slug}`;
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical: `/lokacije/${loc.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url,
      type: "website",
      locale: "bs_BA",
      images: [{ url: loc.heroImage, alt: `ALU LINE Systems ${loc.city}` }],
    },
  };
}

export default function LocationPageRoute({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocationBySlug(params.slug);
  if (!loc) notFound();

  const url = `${SITE_URL}/lokacije/${loc.slug}`;

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
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Lokacije",
            item: `${SITE_URL}/lokacije`,
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
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  // Usluge dostupne u ovom gradu (interno povezivanje ka uslužnim stranicama)
  const serviceLinks = SERVICE_PAGES.map((s) => ({
    label: `${s.name} ${loc.city}`,
    href: `/usluge/${s.slug}`,
  }));

  const otherCities = LOCATION_PAGES.filter((l) => l.slug !== loc.slug).map(
    (l) => ({ label: `ALU LINE ${l.city}`, href: `/lokacije/${l.slug}` })
  );

  const features = [
    { title: "Aluminijske ograde", desc: `Dvorišne, balkonske i grilje ograde te kapije ${loc.cityLocative}.` },
    { title: "Roletne", desc: "Nadgradne i podgradne roletne za ALU i PVC sisteme." },
    { title: "Garažna vrata", desc: "Rolo, sekcijska i industrijska vrata s daljinskim." },
    { title: "Nadstrešnice", desc: "Nadstrešnice za auto, ulaz i terasu, po mjeri." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge={`Lokacija · ${loc.city}`}
        title={loc.h1}
        intro={loc.intro}
        image={loc.heroImage}
        crumbs={[
          { label: "Početna", href: "/" },
          { label: "Lokacije", href: "/lokacije" },
          { label: loc.city, href: `/lokacije/${loc.slug}` },
        ]}
      />
      <ProseSection sections={loc.body} />
      <FeatureGrid
        heading={`Naše usluge ${loc.cityLocative}`}
        subheading={`Sve izrađujemo i montiramo sami, po mjeri i uz pisanu garanciju. Za mjerenje i ponudu ${loc.cityLocative} pozovite 062 543 464.`}
        features={features}
      />
      <FaqSection items={loc.faq} />
      <InternalLinks heading="Pogledajte usluge detaljno" links={serviceLinks} />
      <InternalLinks heading="Radimo i u drugim gradovima" links={otherCities} />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
