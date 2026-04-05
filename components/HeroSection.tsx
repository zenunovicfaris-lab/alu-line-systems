"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const brands = [
  { name: "REHAU", src: "/images/Brendovi/REHAU.png" },
  { name: "Salamander", src: "/images/Brendovi/Salamander.png" },
  { name: "Schuco", src: "/images/Brendovi/Schuco.png" },
  { name: "VEKA", src: "/images/Brendovi/VEKA.png" },
];

const trustPills = [
  "Aluminijske ograde",
  "Roletne i nadstrešnice",
  "Precizna montaža",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);

  return (
    <section
      id="pocetna"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-alu-dark"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Solid base overlay */}
      <div
        className="hero-solid-overlay absolute inset-0 z-[1]"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />

      {/* Gradient overlay */}
      <div
        className="hero-gradient-overlay absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-52 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-10"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Image
              src="/images/logo/alu-line.png"
              alt="ALU LINE Systems"
              width={72}
              height={72}
              className="object-contain opacity-90"
            />
          </motion.div>

          {/* Badge — clean, minimal */}
          <motion.div variants={itemVariants}>
            <span
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-[0.2em] uppercase border border-white/15 text-white/50"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
            >
              <span className="w-1 h-1 rounded-full bg-alu-light inline-block" />
              ALU LINE Systems
            </span>
          </motion.div>

          {/* H1 */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold md:font-bold leading-[1.0] tracking-[-0.02em]"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
            >
              <span className="block text-white/95 mb-2" style={{ fontWeight: "inherit" }}>Aluminijum koji</span>
              <span className="block text-white" style={{ fontWeight: "inherit" }}>
                definiše{" "}
                <span style={{ color: "#5a9fd4" }}>
                  stil.
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base md:text-lg text-white/55 leading-relaxed tracking-wide"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
            Profesionalna ugradnja aluminijskih ograda, roletni i nadstrešnica
            - izvršena s preciznošću i pažnjom prema detaljima koji
            čine razliku.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {trustPills.map((label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide border border-white/10 text-white/35 bg-white/[0.04]"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto"
          >
            <motion.a
              href="#projekti"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 bg-alu-blue text-white font-semibold rounded-xl text-sm tracking-wide transition-colors duration-200 hover:bg-alu-light"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Pogledaj Projekte
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href="#kontakt"
              className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 font-semibold rounded-xl text-sm tracking-wide transition-all duration-200 bg-white/15 text-white border border-white/25 hover:bg-white/25 hover:border-white/45 sm:bg-transparent sm:hover:bg-white/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              Kontaktirajte Nas
              <ArrowRight
                size={15}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Brand strip — trust section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1, ease: EASE }}
        className="absolute bottom-16 left-0 right-0 z-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-[10px] text-white/40 tracking-[0.3em] uppercase font-medium mb-5">
            Brendovi s kojima surađujemo
          </p>
          <div className="border-t border-white/10 pt-5">
            <div className="flex items-center justify-center gap-10 md:gap-16">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="relative h-7 md:h-9 w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: "drop-shadow(0 1px 4px rgba(255,255,255,0.15))" }}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    sizes="112px"
                    style={{ objectFit: "contain" }}
                    className="brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-[11rem] left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        onClick={() => {
          document
            .querySelector("#projekti")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            size={18}
            className="text-white/25 group-hover:text-white/50 transition-colors duration-200"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
