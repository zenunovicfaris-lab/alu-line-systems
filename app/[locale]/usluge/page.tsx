import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getServicePages } from "@/lib/content";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor, localizePath } from "@/lib/i18n/paths";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const t = getDictionary(params.locale).servicesHub;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(params.locale, "/usluge"),
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: absoluteUrl(params.locale, "/usluge"),
      type: "website",
      locale: LOCALE_META[params.locale].ogLocale,
    },
  };
}

export default function UslugeHub({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const t = dict.servicesHub;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-16 bg-alu-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow text-alu-steel mb-5">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight max-w-3xl leading-[1.06]">
            {t.title}
          </h1>
          <p className="mt-5 text-white/65 text-base max-w-2xl leading-relaxed">
            {t.intro}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {getServicePages(locale).map((s) => (
            <Link
              key={s.id}
              href={localizePath(locale, `/usluge/${s.id}`)}
              className="group relative rounded-sm overflow-hidden border border-alu-line bg-alu-gray hover:border-alu-blue transition-colors duration-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={s.heroImage}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h2 className="text-xl font-semibold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                  {s.name}
                </h2>
                <p className="text-sm text-alu-text leading-relaxed mb-4">
                  {s.intro[0]}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-alu-blue">
                  {dict.common.learnMore}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer locale={locale} />
      <WhatsAppFAB />
    </main>
  );
}
