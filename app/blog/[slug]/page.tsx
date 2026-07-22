import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import SubPageHero from "@/components/subpage/SubPageHero";
import FaqSection from "@/components/subpage/FaqSection";
import BlogContent from "@/components/blog/BlogContent";
import { SITE_URL, BUSINESS } from "@/lib/site";
import { BLOG_POSTS, BLOG_POSTS_SORTED, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      type: "article",
      locale: "bs_BA",
      publishedTime: post.date,
      images: [{ url: post.heroImage, alt: post.title }],
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}.${String(
    d.getMonth() + 1
  ).padStart(2, "0")}.${d.getFullYear()}.`;
}

export default function BlogPostRoute({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;

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
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_URL}/blog`,
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
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".faq-question", ".faq-answer"],
        },
      },
    ],
  };

  const otherPosts = BLOG_POSTS_SORTED.filter(
    (p) => p.slug !== post.slug
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <SubPageHero
        badge="Blog"
        title={post.title}
        intro={[post.excerpt]}
        image={post.heroImage}
        crumbs={[
          { label: "Početna", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Meta */}
          <div className="flex items-center gap-5 text-sm text-gray-400 mb-10 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <CalendarDays size={15} className="text-alu-blue" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-alu-blue" />
              {post.readingMinutes} min čitanja
            </span>
          </div>

          <BlogContent body={post.body} />

          {/* Related service CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-alu-dark text-center">
            <p className="text-white/70 text-sm mb-1">Trebate ponudu?</p>
            <h3 className="text-xl font-bold text-white mb-5">
              {post.relatedService.label} po mjeri, uz garanciju
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+38762543464"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-alu-blue text-white font-semibold rounded-2xl text-sm hover:bg-alu-light transition-colors"
              >
                Pozovi: 062 543 464
              </a>
              <Link
                href={post.relatedService.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                {post.relatedService.label} po mjeri
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <FaqSection items={post.faq} />

      {/* Other posts */}
      {otherPosts.length > 0 && (
        <section className="py-16 lg:py-20 bg-alu-gray border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-xl font-bold text-alu-dark mb-8">
              Pročitajte i ovo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-alu-blue/30 hover:shadow-lg hover:shadow-alu-blue/5 transition-all duration-300"
                >
                  <h3 className="text-base font-bold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
