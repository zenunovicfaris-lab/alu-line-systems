"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Ruler, Gem } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: ShieldCheck, label: "Vrhunski Materijali" },
  { icon: Ruler, label: "Precizna Ugradnja" },
  { icon: Gem, label: "Moderan Dizajn" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="o-nama"
      ref={sectionRef}
      className="relative py-28 lg:py-36 bg-white overflow-hidden"
    >
      {/* Subtle background geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, #143c5f 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,60,95,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,60,95,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-0 right-1/3 w-px h-full opacity-[0.06]"
          style={{ background: "linear-gradient(to bottom, transparent, #143c5f 40%, transparent)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/30 bg-alu-blue/5 text-alu-blue">
              O nama
            </span>

            {/* Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-alu-dark">
                Više od ugradnje.
              </h2>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-alu-blue mt-1">
                Kreiramo prostor.
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-500 text-base leading-relaxed">
                ALU LINE Systems je tim profesionalaca iz Srebrenika posvećen
                ugradnji premium aluminijskih rješenja. Specijalizovani smo za
                ograde, roletne i nadstrešnice koje kombinuju funkcionalnost,
                sigurnost i moderan dizajn.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Koristimo isključivo kvalitetne aluminijske profile i savremene
                tehnike montaže, garantujući dugovječnost i otpornost u svim
                vremenskim uslovima.
              </p>
            </div>

            {/* Feature mini-stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              {features.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: EASE }}
                  className="flex flex-col items-start gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-alu-blue/8 border border-alu-blue/15 flex items-center justify-center"
                    style={{ background: "rgba(20,60,95,0.06)" }}>
                    <Icon size={18} className="text-alu-blue" />
                  </div>
                  <span className="text-sm font-semibold text-alu-dark">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Bento Grid Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[520px]">

              {/* Large tall image — left column */}
              <motion.div
                className="relative row-span-2 rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <Image
                  src="/images/o nama/preciznost.jpg"
                  alt="Precizna ugradnja aluminijskih ograda"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-alu-dark/30 via-transparent to-transparent" />

                {/* Glass caption card */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/80 border border-white/40 rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-alu-dark text-xs font-semibold leading-snug">
                    Preciznost u svakom detalju.
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-alu-blue" />
                    <span className="text-[10px] text-gray-400 font-medium tracking-wide">ALU LINE Standard</span>
                  </div>
                </div>
              </motion.div>

              {/* Top-right smaller image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <Image
                  src="/images/o nama/alu.jpg"
                  alt="Aluminijski profili"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 280px"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 z-10">
                  <span className="text-[10px] font-semibold text-alu-blue tracking-widest uppercase">OGRADE</span>
                </div>
              </motion.div>

              {/* Bottom-right smaller image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <Image
                  src="/images/o nama/pvc.jpg"
                  alt="Nadstrešnice i roletne"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 280px"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 z-10">
                  <span className="text-[10px] font-semibold text-alu-blue tracking-widest uppercase">ROLETNE</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative floating dot grid */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, #143c5f 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
