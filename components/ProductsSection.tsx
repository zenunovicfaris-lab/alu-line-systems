"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Fence,
  DoorOpen,
  ArrowRight,
  Phone,
  MapPin,
  Shield,
  Ruler,
  Zap,
  Blinds,
  CheckCircle2,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: Fence,
    title: "Aluminijske Ograde & Kapije",
    points: [
      "Dvorišne ograde",
      "Balkonske ograde",
      "Grilje ograde",
      "Ulazne i pješačke kapije",
    ],
  },
  {
    icon: DoorOpen,
    title: "Rolo & Sekcijska Vrata",
    points: [
      "Garažna rolo vrata",
      "Sekcijska vrata",
      "Industrijska vrata",
      "Daljinsko upravljanje",
    ],
  },
  {
    icon: Blinds,
    title: "Roletne",
    points: [
      "Nadgradne roletne",
      "Podgradne roletne",
      "Za ALU i PVC sisteme",
      "Energetska efikasnost",
    ],
  },
];

const perks = [
  { icon: Ruler, title: "Izrada po mjeri", desc: "Bez kompromisa" },
  { icon: Zap, title: "Brzo i precizno", desc: "Pouzdana montaža" },
  { icon: Shield, title: "Kvalitet koji traje", desc: "Garancija na rad" },
  { icon: MapPin, title: "Široko područje", desc: "BiH · HR · SLO · AT" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const perksRef = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const perksInView = useInView(perksRef, { once: true, margin: "-60px" });

  return (
    <section
      id="usluge"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-px opacity-15"
          style={{
            background:
              "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #143c5f 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,60,95,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,60,95,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
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
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/30 bg-alu-blue/5 text-alu-blue mb-5">
            Prodaja & Ugradnja
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-alu-dark leading-tight tracking-tight mb-5">
            Šta nudimo
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Ne pristajte na prosjek. Prodaja i profesionalna ugradnja
            aluminijskih ograda, kapija, rolo vrata, sekcijskih vrata i roletni
            - s garancijom kvaliteta.
          </p>
        </motion.div>

        {/* Services — 3 columns */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {services.map(({ icon: Icon, title, points }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-gray-100 bg-alu-gray hover:border-alu-blue/30 hover:shadow-xl hover:shadow-alu-blue/5 transition-all duration-500"
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-alu-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(20,60,95,0.07)",
                  border: "1px solid rgba(20,60,95,0.12)",
                }}
              >
                <Icon size={24} className="text-alu-blue" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-alu-dark tracking-tight mb-5">
                {title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm text-gray-500"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-alu-blue flex-shrink-0"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#kontakt"
                className="flex items-center gap-2 text-alu-blue text-sm font-semibold mt-6 pt-5 border-t border-gray-100"
                whileHover="hover"
              >
                <span>Zatraži ponudu</span>
                <motion.span
                  variants={{ hover: { x: 5 } }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <ArrowRight size={14} />
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Perks row */}
        <motion.div
          ref={perksRef}
          initial={{ opacity: 0, y: 30 }}
          animate={perksInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {perks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 p-4 rounded-xl bg-alu-gray border border-gray-100"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(20,60,95,0.07)",
                  border: "1px solid rgba(20,60,95,0.1)",
                }}
              >
                <Icon size={18} className="text-alu-blue" />
              </div>
              <div>
                <p className="text-sm font-bold text-alu-dark leading-tight">
                  {title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={perksInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <p className="text-gray-400 text-sm font-medium">
            Radimo brzo, precizno i pouzdano - izaberi profesionalce.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="tel:+38762543464"
              className="flex items-center gap-2.5 px-6 py-3.5 bg-alu-blue text-white font-semibold rounded-2xl text-sm transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(20,60,95,0.5), 0 12px 40px rgba(20,60,95,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={16} />
              Pozovi: 062 543 464
            </motion.a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-sm font-semibold text-alu-blue hover:underline underline-offset-4 transition-all"
            >
              Ili pošalji upit online
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
