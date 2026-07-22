import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
import { SITE_URL } from "@/lib/site";
import { BLOG_POSTS_SORTED } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog i Vodiči | Savjeti o Ogradama, Roletnama i Vratima",
  description:
    "Praktični vodiči o aluminijskim ogradama, roletnama i vratima: kako izabrati, poređenja materijala i šta utiče na cijenu. Savjeti od ALU LINE Systems.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog i Vodiči | ALU LINE Systems",
    description:
      "Savjeti o aluminijskim ogradama, roletnama i vratima: izbor, poređenja i cijene.",
    url: `${SITE_URL}/blog`,
    type: "website",
    locale: "bs_BA",
  },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")}.${String(
    d.getMonth() + 1
  ).padStart(2, "0")}.${d.getFullYear()}.`;
}

export default function BlogHub() {
  const [featured, ...rest] = BLOG_POSTS_SORTED;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-16 bg-alu-dark overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(20,60,95,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/40 bg-alu-blue/10 text-white/90 mb-5">
            Blog i vodiči
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.05]">
            Savjeti prije nego izaberete
          </h1>
          <p className="mt-5 text-white/70 text-base max-w-2xl leading-relaxed">
            Poređenja materijala, kako izabrati i šta utiče na cijenu. Kratki,
            praktični vodiči iz naše svakodnevne prakse.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 rounded-2xl overflow-hidden border border-gray-100 bg-alu-gray hover:shadow-xl hover:shadow-alu-blue/5 transition-all duration-500"
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
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} className="text-alu-blue" />
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-alu-blue" />
                  {featured.readingMinutes} min
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-alu-dark tracking-tight mb-4 group-hover:text-alu-blue transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-alu-blue">
                Pročitaj vodič
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
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-alu-gray hover:shadow-xl hover:shadow-alu-blue/5 transition-all duration-500 flex flex-col"
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
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={12} className="text-alu-blue" />
                      {formatDate(p.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-alu-blue" />
                      {p.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
