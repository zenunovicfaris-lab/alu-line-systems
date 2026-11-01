import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import SubPageHero from "@/components/subpage/SubPageHero";
import FaqSection from "@/components/subpage/FaqSection";
import BlogContent from "@/components/blog/BlogContent";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { getPosts, getPostBySlug } from "@/lib/blog";
import { LOCALES, LOCALE_META, type Locale } from "@/lib/i18n/config";
import { absoluteUrl, alternatesFor, localizePath } from "@/lib/i18n/paths";
import { getDictionary, fmt, formatDate } from "@/lib/i18n";

type Params = { locale: Locale; slug: string };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    getPosts(locale).map((p) => ({ locale, slug: p.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.locale, params.slug);
  if (!post) return {};
  const bsPath = `/blog/${post.id}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: alternatesFor(params.locale, bsPath),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: absoluteUrl(params.locale, bsPath),
      type: "article",
      locale: LOCALE_META[params.locale].ogLocale,
      publishedTime: post.date,
      images: [{ url: post.heroImage, alt: post.title }],
    },
  };
}

export default function BlogPostRoute({ params }: { params: Params }) {
  const { locale } = params;
  const post = getPostBySlug(locale, params.slug);
  if (!post) notFound();

  const dict = getDictionary(locale);
  const t = dict.blogPost;
  const href = (bsPath: string) => localizePath(locale, bsPath);
  const url = absoluteUrl(locale, `/blog/${post.id}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `${SITE_URL}${post.heroImage}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: locale,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: BUSINESS.name },
        publisher: {
          "@type": "Organization",
          name: BUSINESS.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo/alu-line.png`,
          },
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
            name: dict.nav.blog,
            item: absoluteUrl(locale, "/blog"),
          },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: post.metaTitle,
        inLanguage: locale,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  const otherPosts = getPosts(locale)
    .filter((p) => p.id !== post.id)
    .slice(0, 3);
  const service = post.relatedService.label;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge={dict.nav.blog}
        title={post.title}
        intro={[post.excerpt]}
        image={post.heroImage}
        crumbs={[
          { label: dict.common.home, href: href("/") },
          { label: dict.nav.blog, href: href("/blog") },
          { label: post.title, href: href(`/blog/${post.id}`) },
        ]}
      />

      <article className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Meta */}
          <div className="flex items-center gap-5 text-sm text-alu-text mb-10 pb-8 border-b border-alu-line">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} className="text-alu-blue" />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-alu-blue" />
              {fmt(t.readTime, { n: post.readingMinutes })}
            </span>
          </div>

          <BlogContent body={post.body} />

          {/* Related service CTA */}
          <div className="mt-12 p-8 rounded-sm bg-alu-dark">
            <p className="eyebrow text-alu-steel mb-3">{t.needQuote}</p>
            <h3 className="text-xl font-semibold text-white mb-6">
              {fmt(t.ctaTitle, { service })}
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="tel:+38762543464"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-alu-blue text-white font-semibold rounded-sm text-sm hover:bg-alu-light transition-colors"
              >
                {fmt(dict.common.call, { phone: dict.common.phoneDisplay })}
              </a>
              <Link
                href={post.relatedService.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                {fmt(t.ctaLink, { service })}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <FaqSection items={post.faq} locale={locale} />

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="py-14 lg:py-20 bg-alu-gray border-t border-alu-line">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-alu-dark mb-7">
              {t.readAlso}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  href={href(`/blog/${p.id}`)}
                  className="group p-6 rounded-sm border border-alu-line bg-white hover:border-alu-blue transition-colors duration-200"
                >
                  <h3 className="text-base font-semibold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-alu-text leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer locale={locale} />
      <WhatsAppFAB />
    </main>
  );
}
