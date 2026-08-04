"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: 5,
    title: "Ograda sa kamenim stubovima",
    subtitle: "Antracit lamele u kombinaciji s kamenom oblogom stubova",
    location: "Austria, Graz",
    year: "2026",
    images: [
      "/images/projekti/kamena-ograda-1.jpg",
      "/images/projekti/kamena-ograda-2.jpg",
      "/images/projekti/kamena-ograda-3.jpg",
      "/images/projekti/kamena-ograda-4.jpg",
      "/images/projekti/kamena-ograda-5.jpg",
    ],
  },
  {
    id: 6,
    title: "Balkonska ograda - terasa",
    subtitle: "Aluminijska ograda s okruglim profilima za krovnu terasu",
    location: "Slovenia",
    year: "2026",
    images: [
      "/images/projekti/terasa-ograda-1.jpg",
      "/images/projekti/terasa-ograda-2.jpg",
      "/images/projekti/terasa-ograda-3.jpg",
      "/images/projekti/terasa-ograda-4.jpg",
      "/images/projekti/terasa-ograda-5.jpg",
    ],
  },
  {
    id: 7,
    title: "Dekorativna ograda - dizajn stabla",
    subtitle: "Lasersko rezanje po mjeri, motiv stabla na balkonskim ogradama",
    location: "BiH",
    year: "2026",
    images: [
      "/images/projekti/stablo-ograda-1.jpg",
      "/images/projekti/stablo-ograda-2.jpg",
      "/images/projekti/stablo-ograda-3.jpg",
      "/images/projekti/stablo-ograda-4.jpg",
      "/images/projekti/stablo-ograda-5.jpg",
    ],
  },
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
    subtitle: "Moderan dizajn i sigurnost, projekt po mjeri klijenta",
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

// Lightbox

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
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
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
    return () => {
      document.body.style.overflow = "";
    };
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
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={onClose}
      >
        <X size={18} className="text-white" />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
        <span className="text-white/70 text-xs font-medium tracking-wide">
          {current + 1} / {images.length}
        </span>
      </div>

      <button
        className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <ChevronLeft size={20} className="text-white" />
      </button>

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
              alt={`Projekt - slika ${current + 1}`}
              width={1200}
              height={900}
              style={{
                objectFit: "contain",
                maxHeight: "82vh",
                width: "100%",
                height: "auto",
              }}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <ChevronRight size={20} className="text-white" />
      </button>

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
            <Image
              src={src}
              alt=""
              fill
              sizes="56px"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// Lead project — large, full width

function LeadProject({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE }}
        className="group relative w-full aspect-[16/10] md:aspect-[21/9] rounded-sm overflow-hidden bg-alu-dark cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 group-hover:scale-[1.02]"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(15,18,23,0.95) 0%, rgba(15,18,23,0.4) 45%, rgba(15,18,23,0.05) 75%, transparent 100%)",
          }}
        />
        {/* Spec label — top left */}
        <div className="absolute top-5 left-5 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] uppercase text-white/80">
          <MapPin size={11} />
          {project.location} · {project.year}
        </div>
        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-white/65 leading-relaxed">
              {project.subtitle}
            </p>
          </div>
          <span className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-alu-dark text-sm font-semibold tracking-wide group-hover:bg-alu-blue group-hover:text-white transition-colors duration-200 self-start">
            Pogledaj galeriju
            <ArrowRight size={14} />
          </span>
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

// Catalog card — photo with caption below (index of real work)

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
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE, delay: (index % 2) * 0.06 }}
        className="group cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      >
        <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-alu-dark">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-alu-dark/0 group-hover:bg-alu-dark/25 transition-colors duration-300" />
        </div>
        {/* Caption below — spec-sheet style */}
        <div className="flex items-start justify-between gap-4 pt-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-alu-text mb-1.5">
              <MapPin size={11} className="text-alu-blue" />
              {project.location} · {project.year}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-alu-dark leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-alu-text leading-relaxed mt-1">
              {project.subtitle}
            </p>
          </div>
          <ArrowRight
            size={16}
            className="flex-shrink-0 mt-1 text-alu-steel group-hover:text-alu-blue group-hover:translate-x-0.5 transition-all duration-200"
          />
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

// Section

export default function ProjectsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const [showAll, setShowAll] = useState(false);
  const [lead, ...rest] = projects;
  const visibleRest = showAll ? rest : rest.slice(0, 4);

  return (
    <section
      id="projekti"
      className="relative py-20 lg:py-28 bg-alu-gray overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 12 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10"
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-alu-blue mb-4">Izvedeni radovi</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-alu-dark leading-[1.08] tracking-tight">
              Stvarni projekti, izrađeni i montirani po mjeri
            </h2>
          </div>
          <p className="text-alu-text text-sm leading-relaxed max-w-xs md:text-right">
            Od prvog mjerenja na terenu do montaže. Kliknite na projekat za
            galeriju fotografija.
          </p>
        </motion.div>

        {/* Lead project */}
        <LeadProject project={lead} />

        {/* Catalog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 mt-10">
          {visibleRest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Show more / less */}
        {rest.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-sm border border-alu-dark/20 bg-transparent text-alu-dark font-semibold text-sm tracking-wide hover:border-alu-blue hover:text-alu-blue transition-colors duration-200"
            >
              {showAll ? "Prikaži manje" : `Prikaži još projekata`}
              {showAll ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
          </div>
        )}

        {/* CTA band */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 12 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-alu-line pt-10"
        >
          <div>
            <p className="text-lg font-semibold text-alu-dark mb-1">
              Želite ovakav rad kod sebe?
            </p>
            <p className="text-sm text-alu-text">
              Javite se za izlazak na teren i ponudu po mjeri, bez obaveze.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+38762543464"
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-alu-blue text-white font-semibold rounded-sm text-sm tracking-wide hover:bg-alu-light transition-colors duration-200"
            >
              <Phone size={15} />
              062 543 464
            </a>
            <a
              href="#kontakt"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm border border-alu-dark/20 text-alu-dark font-semibold text-sm tracking-wide hover:border-alu-blue hover:text-alu-blue transition-colors duration-200"
            >
              Zatraži ponudu
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
