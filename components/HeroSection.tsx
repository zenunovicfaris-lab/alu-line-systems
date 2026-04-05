"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
<<<<<<< HEAD
import { ArrowRight, ChevronDown } from "lucide-react";
=======
import { ArrowRight, ChevronDown, Star } from "lucide-react";
>>>>>>> d3d293180ec731a4305f256d37a995109187e020

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
<<<<<<< HEAD
      staggerChildren: 0.14,
      delayChildren: 0.2,
=======
      staggerChildren: 0.12,
      delayChildren: 0.3,
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
    },
  },
};

const itemVariants = {
<<<<<<< HEAD
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
=======
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
  },
};

const brands = [
  { name: "REHAU", src: "/images/Brendovi/REHAU.png" },
  { name: "Salamander", src: "/images/Brendovi/Salamander.png" },
  { name: "Schuco", src: "/images/Brendovi/Schuco.png" },
  { name: "VEKA", src: "/images/Brendovi/VEKA.png" },
];

<<<<<<< HEAD
const trustPills = [
  "Aluminijske ograde",
  "Roletne i nadstrešnice",
  "Precizna montaža",
];

=======
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
<<<<<<< HEAD
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-8%"]);
=======
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-10%"]);
>>>>>>> d3d293180ec731a4305f256d37a995109187e020

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

<<<<<<< HEAD
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
=======
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] hero-gradient" />

      {/* Extra darken overlay for readability */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,22,32,0.6) 0%, rgba(15,22,32,0.4) 50%, rgba(15,22,32,0.7) 100%)",
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
        }}
      />

      {/* Main Content */}
      <motion.div
<<<<<<< HEAD
        className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-36 pb-52 text-center"
=======
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-44 text-center"
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
<<<<<<< HEAD
          className="flex flex-col items-center gap-10"
=======
          className="flex flex-col items-center gap-8"
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Image
              src="/images/logo/alu-line.png"
              alt="ALU LINE Systems"
<<<<<<< HEAD
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
=======
              width={90}
              height={90}
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/40 bg-alu-blue/10 text-alu-blue backdrop-blur-sm animate-glow-pulse">
              <Star size={10} fill="currentColor" />
              Kvalitet. Preciznost. Dizajn.
              <Star size={10} fill="currentColor" />
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
            </span>
          </motion.div>

          {/* H1 */}
<<<<<<< HEAD
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
=======
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight">
              <span className="block text-white">Aluminijum koji</span>
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(135deg, #143c5f 0%, #5a9fd4 50%, #143c5f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 30px rgba(20, 60, 95, 0.6))",
                }}
              >
                definiše stil.
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
<<<<<<< HEAD
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
=======
            className="max-w-2xl text-base md:text-lg text-white/60 leading-relaxed font-light"
          >
            Profesionalna ugradnja aluminijskih ograda, roletni i nadstrešnica.
            Svaki projekat &mdash; izveden s preciznošću i pažnjom prema
            detaljima koji čine razliku.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <motion.a
              href="#projekti"
              className="group flex items-center gap-3 px-8 py-4 bg-alu-blue text-white font-semibold rounded-2xl text-sm tracking-wide transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 30px rgba(20, 60, 95, 0.6), 0 20px 60px rgba(20, 60, 95, 0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Pogledaj Projekte
              <motion.span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </motion.span>
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
            </motion.a>

            <motion.a
              href="#kontakt"
<<<<<<< HEAD
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
=======
              className="group flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-2xl text-sm tracking-wide border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              Kontaktirajte Nas
              <ArrowRight
                size={16}
                className="opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Brand Logos — bottom */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8, ease: EASE }}
        className="absolute bottom-8 left-0 right-0 z-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-[10px] text-white/25 tracking-[0.3em] uppercase font-medium mb-5">
            Brendovi s kojima surađujemo
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-14">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="relative h-8 md:h-10 w-20 md:w-28 opacity-40 hover:opacity-70 transition-opacity duration-300"
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
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
<<<<<<< HEAD
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-[11rem] left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
=======
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
        onClick={() => {
          document
            .querySelector("#projekti")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
<<<<<<< HEAD
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            size={18}
            className="text-white/25 group-hover:text-white/50 transition-colors duration-200"
=======
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-alu-blue/60 transition-colors"
        >
          <ChevronDown
            size={14}
            className="text-white/50 group-hover:text-alu-blue transition-colors"
>>>>>>> d3d293180ec731a4305f256d37a995109187e020
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
