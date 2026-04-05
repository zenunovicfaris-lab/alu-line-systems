"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// All images — loaded in lightbox
const installedImages = [
  "/images/vrata postavljena/Bijela Vrata.jpeg",
  "/images/vrata postavljena/Bijela vrata 2.jpeg",
  "/images/vrata postavljena/Bijela vrata 3.jpeg",
  "/images/vrata postavljena/smedja vrata.jpeg",
  "/images/vrata postavljena/smedja vrata 2.jpeg",
  "/images/vrata postavljena/smedja vrata 3.jpeg",
  "/images/vrata postavljena/smedja vrata 4.jpeg",
  "/images/vrata postavljena/smedja vrata 5.jpeg",
  "/images/vrata postavljena/smedja vrata 6.jpeg",
  "/images/vrata postavljena/smedja vrata 7.jpeg",
  "/images/vrata postavljena/steka.jpeg",
  "/images/vrata postavljena/steka 2.jpeg",
  "/images/vrata postavljena/brava.jpeg",
  "/images/vrata postavljena/brava 2.jpeg",
];

const catalogImages = [
  "/images/vrata katalog/Model e-1.jpeg",
  "/images/vrata katalog/Model e-2.jpeg",
  "/images/vrata katalog/Model e-5.jpeg",
  "/images/vrata katalog/Model e-7.jpeg",
  "/images/vrata katalog/Model f-2.jpeg",
  "/images/vrata katalog/Model f-3.jpeg",
  "/images/vrata katalog/Model f-4.jpeg",
  "/images/vrata katalog/Model f-6.jpeg",
  "/images/vrata katalog/Model f-7.jpeg",
  "/images/vrata katalog/Model ml-7.jpeg",
  "/images/vrata katalog/Model ml-8.jpeg",
  "/images/vrata katalog/Model ml-11.jpeg",
  "/images/vrata katalog/Model ml-12.jpeg",
  "/images/vrata katalog/Model ml-13.jpeg",
  "/images/vrata katalog/Model mo-1.jpeg",
  "/images/vrata katalog/Model mo-2.jpeg",
  "/images/vrata katalog/Model mo-3.jpeg",
  "/images/vrata katalog/Model mo-4.jpeg",
  "/images/vrata katalog/Model mo-5.jpeg",
  "/images/vrata katalog/Model mo-6.jpeg",
];

// 6 hero images shown in the grid per tab (indices into the full arrays above)
const installedHeroes = [0, 3, 6, 9, 1, 4];
const catalogHeroes = [0, 4, 9, 14, 2, 7];

function HeroCard({
  src,
  lightboxIndex,
  cardIndex,
  onOpen,
}: {
  src: string;
  lightboxIndex: number;
  cardIndex: number;
  onOpen: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: cardIndex * 0.07 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl hover:shadow-black/15 transition-shadow duration-500"
      onClick={() => onOpen(lightboxIndex)}
    >
      <Image
        src={src}
        alt={`Vrata — slika ${cardIndex + 1}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
        className="transition-transform duration-600 group-hover:scale-[1.06]"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-alu-dark/0 group-hover:bg-alu-dark/50 transition-colors duration-400 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <ZoomIn size={18} className="text-white" />
          </div>
          <span className="text-white text-sm font-semibold tracking-wide">
            Pogledaj galeriju
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={onClose}
      >
        <X size={18} className="text-white" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
        <span className="text-white/70 text-xs font-medium tracking-wide">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={(e) => { e.stopPropagation(); prev(); }}
      >
        <ChevronLeft size={20} className="text-white" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="relative w-full"
            style={{ maxHeight: "85vh" }}
          >
            <Image
              src={images[current]}
              alt={`Vrata — slika ${current + 1}`}
              width={1200}
              height={900}
              style={{ objectFit: "contain", maxHeight: "85vh", width: "100%", height: "auto" }}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next */}
      <button
        className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={(e) => { e.stopPropagation(); next(); }}
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 max-w-lg overflow-x-auto px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative flex-shrink-0 w-12 h-9 rounded-md overflow-hidden border-2 transition-all duration-200 ${
              i === current ? "border-white opacity-100" : "border-transparent opacity-40 hover:opacity-70"
            }`}
          >
            <Image src={src} alt="" fill sizes="48px" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function DoorGallerySection() {
  const [activeTab, setActiveTab] = useState<"installed" | "catalog">("installed");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const activeImages = activeTab === "installed" ? installedImages : catalogImages;
  const heroIndices = activeTab === "installed" ? installedHeroes : catalogHeroes;

  return (
    <section
      id="galerija-vrata"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Top edge line */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-15"
        style={{
          background:
            "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading + tabs */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 36 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12"
        >
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border border-alu-blue/25 text-alu-blue mb-5">
              Galerija
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-alu-dark leading-tight tracking-tight mb-3">
              Galerija vrata
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              Izaberite tab - pogledajte naše realizacije ili kataloške modele
              koje nudimo.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 self-start md:self-auto flex-shrink-0">
            {(
              [
                { key: "installed", label: "Postavljena vrata" },
                { key: "catalog", label: "Katalog vrata" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-alu-dark"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 2×3 hero grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {heroIndices.map((imgIdx, cardIdx) => (
              <HeroCard
                key={`${activeTab}-${imgIdx}`}
                src={activeImages[imgIdx]}
                lightboxIndex={imgIdx}
                cardIndex={cardIdx}
                onOpen={(idx) => setLightboxIndex(idx)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* "View all" hint */}
        <motion.p
          key={`hint-${activeTab}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-xs text-gray-400 mt-5 tracking-wide"
        >
          Kliknite na sliku za pregled svih {activeImages.length} fotografija
        </motion.p>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-12"
        >
          <div>
            <p className="text-lg font-semibold text-alu-dark mb-1">
              Naručite svoja vrata
            </p>
            <p className="text-sm text-gray-400">
              Besplatna konsultacija - odaberite model, mi se pobrinemo za
              sve ostalo.
            </p>
          </div>
          <a
            href="#kontakt"
            className="group flex items-center gap-2.5 px-7 py-3.5 bg-alu-dark text-white font-semibold rounded-xl text-sm tracking-wide hover:bg-alu-blue transition-colors duration-200 flex-shrink-0"
          >
            Kontaktirajte nas
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={activeImages}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
