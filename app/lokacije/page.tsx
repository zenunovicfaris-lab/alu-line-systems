import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollToTop from "@/components/ScrollToTop";
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(20,60,95,0.3) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/40 bg-alu-blue/10 text-white/90 mb-5">
            Lokacije
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight max-w-3xl leading-[1.05]">
            Gdje radimo
          </h1>
          <p className="mt-5 text-white/70 text-base max-w-2xl leading-relaxed">
            Iz Srebrenika pokrivamo Tuzlanski kanton i okolinu. Izaberite grad i
            saznajte više o našim uslugama u vašem mjestu.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LOCATION_PAGES.map((l) => (
            <Link
              key={l.slug}
              href={`/lokacije/${l.slug}`}
              className="group flex items-start gap-5 p-7 rounded-2xl border border-gray-100 bg-alu-gray hover:border-alu-blue/30 hover:shadow-xl hover:shadow-alu-blue/5 transition-all duration-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(20,60,95,0.07)",
                  border: "1px solid rgba(20,60,95,0.12)",
                }}
              >
                <MapPin size={20} className="text-alu-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-alu-dark mb-2 group-hover:text-alu-blue transition-colors">
                  {l.city}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
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
      <ScrollToTop />
    </main>
  );
}
