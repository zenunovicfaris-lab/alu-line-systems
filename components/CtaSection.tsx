"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const highlights = [
  "Besplatna konsultacija",
  "Ponuda po mjeri",
  "Profesionalna montaža",
];

const stats = [
  { value: "10+", label: "godina iskustva" },
  { value: "500+", label: "zadovoljnih klijenata" },
  { value: "BiH · HR · SLO", label: "tržišta" },
];

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-alu-dark">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projekti/banovici-1.jpg"
          alt="ALU LINE projekt"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-50"
          priority
        />
      </div>

      {/* Cinematic overlay — dark bottom, slight top */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(15,22,32,0.97) 0%, rgba(15,22,32,0.70) 45%, rgba(15,22,32,0.45) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 py-24 text-center"
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border border-white/15 text-white/45 mb-8"
        >
          Kontakt
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Vaš projekat<br />
          <span style={{ color: "#5a9fd4" }}>počinje ovdje.</span>
        </motion.h2>

        {/* Highlight list */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: EASE, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10"
        >
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-white/70 text-sm font-medium">
              <Check size={14} className="text-alu-light flex-shrink-0" />
              {item}
            </li>
          ))}
        </motion.ul>

        {/* CTA button */}
        <motion.a
          href="#kontakt"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
          className="group inline-flex items-center gap-3 px-9 py-4 bg-alu-blue text-white font-semibold rounded-2xl text-base tracking-wide hover:bg-alu-light transition-colors duration-200 shadow-lg shadow-alu-blue/20 mb-16"
        >
          Zatraži ponudu
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </motion.a>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="border-t border-white/10 pt-10 grid grid-cols-3 gap-6"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-xl md:text-2xl font-bold text-white">{s.value}</span>
              <span className="text-[11px] text-white/35 tracking-wide uppercase font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
