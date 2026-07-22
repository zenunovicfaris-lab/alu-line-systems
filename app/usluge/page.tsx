import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SITE_URL } from "@/lib/site";
import { SERVICE_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Usluge | Aluminijske Ograde, Roletne, Vrata i Nadstrešnice",
  description:
    "Pregled usluga ALU LINE Systems: aluminijske ograde i kapije, roletne, rolo i sekcijska vrata te nadstrešnice. Izrada po mjeri, montaža i garancija. Srebrenik, BiH.",
  alternates: { canonical: "/usluge" },
  openGraph: {
    title: "Usluge | ALU LINE Systems",
    description:
      "Aluminijske ograde, roletne, vrata i nadstrešnice — po mjeri, uz montažu i garanciju.",
    url: `${SITE_URL}/usluge`,
    type: "website",
    locale: "bs_BA",
  },
};

export default function UslugeHub() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-16 bg-alu-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow text-alu-steel mb-5">Usluge</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight max-w-3xl leading-[1.06]">
            Šta izrađujemo i ugrađujemo
          </h1>
          <p className="mt-5 text-white/65 text-base max-w-2xl leading-relaxed">
            Aluminijske ograde i kapije, roletne, rolo i sekcijska vrata te
            nadstrešnice. Sve po mjeri, uz montažu i pisanu garanciju.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {SERVICE_PAGES.map((s) => (
            <Link
              key={s.slug}
              href={`/usluge/${s.slug}`}
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
                  Saznaj više
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
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
