"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const brands = [
  { name: "REHAU", src: "/images/Brendovi/REHAU.png" },
  { name: "Salamander", src: "/images/Brendovi/Salamander.png" },
  { name: "Schuco", src: "/images/Brendovi/Schuco.png" },
  { name: "VEKA", src: "/images/Brendovi/VEKA.png" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="pocetna"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-alu-dark"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-img.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Directional overlay — heavier on the left where text sits */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,18,23,0.92) 0%, rgba(15,18,23,0.78) 40%, rgba(15,18,23,0.35) 100%)",
        }}
      />
      <div
        className="hero-gradient-overlay absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(15,18,23,0.85) 0%, rgba(15,18,23,0.2) 55%, rgba(15,18,23,0.4) 100%)",
        }}
      />

      {/* Content — left aligned */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-40"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow — spec label */}
          <motion.p
            variants={itemVariants}
            className="eyebrow text-white/55 mb-8"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Srebrenik, BiH · Izrada i montaža
          </motion.p>

          {/* H1 — concrete, commanding */}
          <motion.h1
            variants={itemVariants}
            className="text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold text-white tracking-[-0.03em]"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.45)" }}
          >
            Aluminijske ograde,
            <br />
            kapije i roletne{" "}
            <span className="font-light text-white/55">po mjeri</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-base md:text-lg text-white/70 leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Izrađujemo i montiramo sami, bez podizvođača, uz pisanu garanciju na
            rad. Radimo u BiH, Hrvatskoj, Sloveniji i Austriji.
          </motion.p>

          {/* Authority line — proof without pills */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-medium text-white/60"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            <span>10+ godina iskustva</span>
            <span className="w-px h-3.5 bg-white/25" />
            <span>Vlastita izrada i montaža</span>
            <span className="w-px h-3.5 bg-white/25" />
            <span>Pisana garancija</span>
          </motion.div>

          {/* CTAs — phone primary */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="tel:+38762543464"
              className="group flex items-center justify-center gap-2.5 px-7 py-4 bg-alu-blue text-white font-semibold rounded-sm text-sm tracking-wide transition-colors duration-200 hover:bg-alu-light"
            >
              <Phone size={16} />
              Pozovi: 062 543 464
            </a>
            <a
              href="#projekti"
              className="group flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-sm text-sm tracking-wide text-white border border-white/25 hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
            >
              Pogledaj izvedene projekte
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Brand strip — quiet, bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.9, ease: EASE }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-alu-dark/40 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="text-[10px] text-white/40 tracking-[0.22em] uppercase font-medium flex-shrink-0">
            Sistemi s kojima radimo
          </span>
          <div className="flex items-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative h-5 md:h-6 w-16 md:w-20 opacity-50 hover:opacity-90 transition-opacity duration-300"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="80px"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                  className="brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
