"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type Category = "Ograde";

const galleryItems = [
  {
    id: 1,
    category: "Ograde" as Category,
    title: "Balkonska Ograda – Model Kruška",
    subtitle: "Međugorje",
    tall: true,
    src: "/images/projekti/medjugorje-1.jpg",
  },
  {
    id: 2,
    category: "Ograde" as Category,
    title: "Grilje Ograda – Dvorište",
    subtitle: "Bileća",
    tall: false,
    src: "/images/projekti/bileca-2.jpg",
  },
  {
    id: 3,
    category: "Ograde" as Category,
    title: "Aluminijska Ograda – Antracit",
    subtitle: "Banovići",
    tall: false,
    src: "/images/projekti/banovici-3.jpg",
  },
  {
    id: 4,
    category: "Ograde" as Category,
    title: "Grilje Model – Ograda i Kapija",
    subtitle: "Montaža",
    tall: true,
    src: "/images/projekti/grilje-2.jpg",
  },
  {
    id: 5,
    category: "Ograde" as Category,
    title: "Montaža Balkonske Ograde",
    subtitle: "Međugorje",
    tall: false,
    src: "/images/projekti/medjugorje-3.jpg",
  },
  {
    id: 6,
    category: "Ograde" as Category,
    title: "Lamele Ograda – Betonski Stubovi",
    subtitle: "Banovići",
    tall: false,
    src: "/images/projekti/banovici-1.jpg",
  },
];

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${
        item.tall ? "row-span-2" : "row-span-1"
      }`}
      style={{ minHeight: item.tall ? "420px" : "200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real image with scale on hover */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Category tag */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/40">
        <span className="text-[10px] font-bold tracking-widest text-alu-blue uppercase">
          {item.category}
        </span>
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(15,22,32,0.85) 0%, rgba(15,22,32,0.4) 50%, transparent 100%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Text slide-up on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute bottom-0 left-0 right-0 z-20 p-5"
          >
            <p className="text-white font-bold text-base leading-snug">
              {item.title}
            </p>
            <p className="text-white/50 text-xs mt-1 font-medium">
              {item.subtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function GallerySection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="galerija"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-px opacity-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
          }}
        />
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #143c5f 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/30 bg-alu-blue/5 text-alu-blue mb-5">
            Galerija radova
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-alu-dark leading-tight tracking-tight mb-5">
            Naši realizovani projekti
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Pogledajte neke od naših najreprezentativnijih projekata ugradnje
            aluminijskih ograda, roletni i nadstrešnica.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
