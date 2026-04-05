"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: 1,
    title: "Grilje ograda - Međugorje",
    subtitle: "Balkonska ograda model Kruška sa stabilnim rukohvatom",
    location: "Međugorje",
    year: "2024",
    images: [
      "/images/projekti/medjugorje-1.jpg",
      "/images/projekti/medjugorje-2.jpg",
      "/images/projekti/medjugorje-3.jpg",
      "/images/projekti/medjugorje-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Grilje ograda sa kapijom - Bileća",
    subtitle: "Ograda s maksimalnom privatnošću, izrađena i montirana po mjeri",
    location: "Bileća",
    year: "2024",
    images: [
      "/images/projekti/bileca-1.jpg",
      "/images/projekti/bileca-2.jpg",
      "/images/projekti/bileca-3.jpg",
      "/images/projekti/bileca-4.jpg",
    ],
  },
  {
    id: 3,
    title: "Grilje ograda i kapija - ugradnja",
    subtitle: "Moderni dizajn i sigurnost - projekt po mjeri klijenta",
    location: "BiH",
    year: "2024",
    images: [
      "/images/projekti/grilje-1.jpg",
      "/images/projekti/grilje-2.jpg",
      "/images/projekti/grilje-3.jpg",
      "/images/projekti/grilje-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Aluminijska ograda - Banovići",
    subtitle: "Antracit lamele 8×2 cm, ugradnja između betonskih stubova",
    location: "Banovići",
    year: "2025",
    images: [
      "/images/projekti/banovici-1.jpg",
      "/images/projekti/banovici-2.jpg",
      "/images/projekti/banovici-3.jpg",
      "/images/projekti/banovici-4.jpg",
    ],
  },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────

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

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

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
        className="relative max-w-5xl w-full mx-16 md:mx-24"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.22, ease: EASE }}
          >
            <Image
              src={images[current]}
              alt={`Projekt — slika ${current + 1}`}
              width={1200}
              height={900}
              style={{ objectFit: "contain", maxHeight: "82vh", width: "100%", height: "auto" }}
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
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto px-4 max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current
                ? "border-white opacity-100"
                : "border-transparent opacity-35 hover:opacity-65"
            }`}
          >
            <Image src={src} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// ── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: EASE, delay: index * 0.07 }}
        className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-alu-dark cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-500"
        onClick={() => setLightboxOpen(true)}
      >
        {/* Hero image */}
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 group-hover:scale-[1.04]"
          priority={index === 0}
        />

        {/* Persistent bottom gradient — always visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,22,32,0.88) 0%, rgba(15,22,32,0.45) 35%, transparent 65%)",
          }}
        />

        {/* Location badge — top left */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase bg-black/50 backdrop-blur-sm text-white/80 border border-white/10">
            <MapPin size={9} />
            {project.location} · {project.year}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-1.5">
              {project.title}
            </h3>
            <p className="text-sm text-white/55 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* CTA button */}
          <button
            className="group/btn flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-xl bg-alu-blue text-white text-sm font-semibold tracking-wide hover:bg-alu-light transition-colors duration-200 self-start sm:self-auto"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
          >
            Pogledaj galeriju
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
            />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={project.images}
            startIndex={0}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <section
      id="projekti"
      className="relative py-24 lg:py-32 bg-alu-gray overflow-hidden"
    >
      {/* Top edge line */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 36 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border border-alu-blue/25 text-alu-blue mb-5">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-alu-dark leading-tight tracking-tight mb-4">
            Izvedeni projekti<br />
            <span className="text-alu-text font-normal">širom BiH.</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            Međugorje · Bileća · Banovići · i još mnogo više
          </p>
        </motion.div>

        {/* Project cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 28 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-12"
        >
          <div>
            <p className="text-lg font-semibold text-alu-dark mb-1">
              Vaš projekat ovdje?
            </p>
            <p className="text-sm text-gray-400">
              Kontaktirajte nas - besplatna konsultacija i ponuda po mjeri.
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
    </section>
  );
}
