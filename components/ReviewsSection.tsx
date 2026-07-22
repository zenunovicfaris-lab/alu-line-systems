"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const reviews = [
  {
    name: "Nedim Kovačević",
    location: "Bileća",
    text: "Grilje ograda sa kapijom izgleda fantastično. Komšije stalno pitaju gdje smo radili. Ekipa je korektna i drži se dogovorenog roka.",
  },
  {
    name: "Emir Hadžić",
    location: "Srebrenik",
    text: "Ugradili su nam aluminijsku ogradu oko cijelog dvorišta. Kvalitet materijala je odličan, a majstori su bili precizni i uredni.",
  },
  {
    name: "Amina Delić",
    location: "Tuzla",
    text: "Naručili smo roletne za cijelu kuću. Brza isporuka, profesionalna ugradnja i fer cijena. Definitivno ćemo opet sarađivati.",
  },
];

function Attribution({ name, location }: { name: string; location: string }) {
  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="w-6 h-px bg-alu-blue" />
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-semibold text-alu-dark">{name}</span>
        <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-alu-steel">
          {location}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });

  const [featured, ...rest] = reviews;

  return (
    <section className="relative py-20 lg:py-28 bg-alu-gray overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 12 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-2xl mb-14"
        >
          <p className="eyebrow text-alu-blue mb-4">Riječi klijenata</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-alu-dark leading-[1.08] tracking-tight">
            Ono što kažu ljudi za koje smo radili
          </h2>
        </motion.div>

        <div ref={bodyRef} className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 gap-y-12">
          {/* Featured quote */}
          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-7"
          >
            <span
              className="block text-alu-blue/25 leading-none select-none"
              style={{ fontSize: "5rem", height: "2.5rem" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-2xl md:text-[1.75rem] font-light text-alu-dark leading-[1.4] tracking-tight">
              {featured.text}
            </blockquote>
            <Attribution name={featured.name} location={featured.location} />
          </motion.figure>

          {/* Supporting quotes */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pt-6">
            {rest.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 14 }}
                animate={bodyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.1 }}
                className={i > 0 ? "pt-10 border-t border-alu-line" : ""}
              >
                <blockquote className="text-base md:text-lg font-light text-alu-dark/90 leading-relaxed">
                  {r.text}
                </blockquote>
                <Attribution name={r.name} location={r.location} />
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
