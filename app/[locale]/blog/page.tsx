import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getPosts } from "@/lib/blog";
import { LOCALE_META, type Locale } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor, localizePath } from "@/lib/i18n/paths";
import { getDictionary, formatDate } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Metadata {
  const t = getDictionary(params.locale).blogHub;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternatesFor(params.locale, "/blog"),
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: absoluteUrl(params.locale, "/blog"),
      type: "website",
      locale: LOCALE_META[params.locale].ogLocale,
    },
  };
}

export default function BlogHub({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = getDictionary(locale).blogHub;
  const [featured, ...rest] = getPosts(locale);
  const postHref = (id: string) => localizePath(locale, `/blog/${id}`);

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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          <Link
            href={postHref(featured.id)}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 rounded-sm overflow-hidden border border-alu-line bg-alu-gray hover:border-alu-blue transition-colors duration-200"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs text-alu-text mb-4">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} className="text-alu-blue" />
                  {formatDate(featured.date, locale)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-alu-blue" />
                  {featured.readingMinutes} min
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight mb-4 group-hover:text-alu-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-alu-text leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-alu-blue">
                {t.readGuide}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </Link>

          {/* Rest */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rest.map((p) => (
              <Link
                key={p.id}
                href={postHref(p.id)}
                className="group rounded-sm overflow-hidden border border-alu-line bg-alu-gray hover:border-alu-blue transition-colors duration-200 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-alu-text mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} className="text-alu-blue" />
                      {formatDate(p.date, locale)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-alu-blue" />
                      {p.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-alu-text leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer locale={locale} />
      <WhatsAppFAB />
    </main>
  );
}
