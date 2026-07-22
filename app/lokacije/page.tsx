import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { SITE_URL } from "@/lib/site";
import { LOCATION_PAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lokacije | Gdje Radimo — Srebrenik, Tuzla, Gračanica, Gradačac",
  description:
    "ALU LINE Systems radi u Srebreniku, Tuzli, Gračanici, Gradačcu i okolini. Aluminijske ograde, roletne i vrata po mjeri, uz montažu i garanciju. Pozovite 062 543 464.",
  alternates: { canonical: "/lokacije" },
  openGraph: {
    title: "Lokacije | ALU LINE Systems",
    description:
      "Radimo u Srebreniku, Tuzli, Gračanici, Gradačcu i okolini.",
    url: `${SITE_URL}/lokacije`,
    type: "website",
    locale: "bs_BA",
  },
};

export default function LokacijeHub() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-36 pb-16 bg-alu-dark overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow text-alu-steel mb-5">Lokacije</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight max-w-3xl leading-[1.06]">
            Gdje radimo
          </h1>
          <p className="mt-5 text-white/65 text-base max-w-2xl leading-relaxed">
            Iz Srebrenika pokrivamo Tuzlanski kanton i okolinu. Izaberite grad i
            saznajte više o našim uslugama u vašem mjestu.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {LOCATION_PAGES.map((l) => (
            <Link
              key={l.slug}
              href={`/lokacije/${l.slug}`}
              className="group flex items-start gap-5 p-7 rounded-sm border border-alu-line bg-alu-gray hover:border-alu-blue transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 bg-alu-blue/10">
                <MapPin size={19} className="text-alu-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                  {l.city}
                </h2>
                <p className="text-sm text-alu-text leading-relaxed mb-4">
                  {l.intro[0]}
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
