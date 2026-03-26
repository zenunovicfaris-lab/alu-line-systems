"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: 1,
    title:
      "Montaža balkonske grilje ograde sa rukohvatom – model kruška u Međugorju",
    text: 'Elegantna i čvrsta balkonska ograda u prepoznatljivom "Kruška" dizajnu donosi sigurnost i estetsku vrijednost svakom objektu. Izrađena od kvalitetnih materijala, sa preciznom montažom i stabilnim rukohvatom, ova ograda je dugotrajno rješenje za vaš balkon ili terasu.\nIdealna kombinacija funkcionalnosti i klasične ljepote – birajte pouzdanost i stil koji traje.',
    location: "Međugorje",
    images: [
      "/images/projekti/medjugorje-1.jpg",
      "/images/projekti/medjugorje-2.jpg",
      "/images/projekti/medjugorje-3.jpg",
      "/images/projekti/medjugorje-4.jpg",
    ],
  },
  {
    id: 2,
    title: "Grilje ograda – ugradnja kod domaćina u Bilećoj",
    text: "Sigurnost i stil na prvom mjestu.\nModerna grilje ograda koja pruža maksimalnu privatnost i vrhunski izgled vašeg dvorišta. Izrada po mjeri, kvalitetni materijali i dug vijek trajanja.\n✔ Privatnost bez kompromisa\n✔ Moderan dizajn\n✔ Izrada i ugradnja\n📞 Javite se i osigurajte svoj prostor već danas!",
    location: "Bileća",
    images: [
      "/images/projekti/bileca-1.jpg",
      "/images/projekti/bileca-2.jpg",
      "/images/projekti/bileca-3.jpg",
      "/images/projekti/bileca-4.jpg",
    ],
  },
  {
    id: 3,
    title: "Završena montaža grilje modela ograde i kapije",
    text: "Spoj modernog dizajna, sigurnosti i kvaliteta izrade.\nSvaki projekat radimo po mjeri i želji klijenta.",
    location: null,
    images: [
      "/images/projekti/grilje-1.jpg",
      "/images/projekti/grilje-2.jpg",
      "/images/projekti/grilje-3.jpg",
      "/images/projekti/grilje-4.jpg",
    ],
  },
  {
    id: 4,
    title: "Moderna aluminijska ograda u antracit boji",
    text: "Lamele dimenzija 8×2 cm, ugradnja između betonskih stubova. Elegantna, dugotrajna i laka za održavanje.\nUspješna montaža – Banovići.",
    location: "Banovići",
    images: [
      "/images/projekti/banovici-1.jpg",
      "/images/projekti/banovici-2.jpg",
      "/images/projekti/banovici-3.jpg",
      "/images/projekti/banovici-4.jpg",
    ],
  },
];

function ImageScroller({ images, title }: { images: string[]; title: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/scroller">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover/scroller:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronLeft size={18} className="text-alu-dark" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover/scroller:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronRight size={18} className="text-alu-dark" />
      </button>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 snap-start rounded-lg overflow-hidden bg-gray-100"
            style={{ width: "280px", height: "320px" }}
          >
            <Image
              src={src}
              alt={`${title} — slika ${i + 1}`}
              fill
              sizes="280px"
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm">
        <span className="text-[10px] text-white font-medium">
          {images.length} fotografija
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-alu-blue/5 transition-shadow duration-500"
    >
      {/* Header — like a FB post header */}
      <div className="flex items-center gap-3 px-6 pt-5 pb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(20,60,95,0.08)",
            border: "1px solid rgba(20,60,95,0.15)",
          }}
        >
          <span className="text-alu-blue text-xs font-black">AL</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-alu-dark">ALU LINE Systems</p>
          {project.location && (
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
              <MapPin size={10} />
              {project.location}
            </p>
          )}
        </div>
      </div>

      {/* Post title */}
      <div className="px-6 pb-3">
        <h3 className="text-lg font-bold text-alu-dark leading-snug">
          {project.title}
        </h3>
      </div>

      {/* Post text */}
      <div className="px-6 pb-4">
        {project.text.split("\n").map((line, i) => (
          <p key={i} className="text-gray-500 text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>

      {/* Image scroller */}
      <div className="px-3 pb-5">
        <ImageScroller images={project.images} title={project.title} />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projekti"
      className="relative py-24 lg:py-32 bg-alu-gray overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-px opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #143c5f 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/30 bg-alu-blue/5 text-alu-blue mb-5">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-alu-dark leading-tight tracking-tight mb-5">
            Naši uspješni projekti
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Pogledajte kako pretvaramo vizije naših klijenata u stvarnost.
            Svaki projekat izrađen po mjeri, s pažnjom na svaki detalj.
          </p>
        </motion.div>

        {/* Projects feed */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Hide scrollbar globally for image scroller */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
