"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Ruler, Zap, Shield, MapPin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    n: "01",
    title: "Aluminijske ograde i kapije",
    desc: "Dvorišne, balkonske i grilje ograde te klizne i pješačke kapije. Po mjeri vašeg placa, u boji koja se uklapa uz fasadu.",
    tags: ["Dvorišne", "Balkonske", "Klizne kapije"],
    href: "/usluge/aluminijske-ograde",
    image: "/images/projekti/terasa-ograda-1.jpg",
  },
  {
    n: "02",
    title: "Rolo i sekcijska vrata",
    desc: "Garažna rolo vrata, sekcijska i industrijska vrata s daljinskim upravljanjem. Isporuka, ugradnja i podešavanje.",
    tags: ["Rolo", "Sekcijska", "Daljinski"],
    href: "/usluge/garazna-i-sekcijska-vrata",
    image: "/images/garazna i sekcijska vrata/Garazna vrata.jpg",
  },
  {
    n: "03",
    title: "Roletne",
    desc: "Nadgradne i podgradne roletne za aluminijske i PVC sisteme. Zaštita od sunca, buke i toplotni gubici pod kontrolom.",
    tags: ["Nadgradne", "Podgradne", "ALU i PVC"],
    href: "/usluge/roletne",
    image: "/images/roletne/roletna1.jpg",
  },
  {
    n: "04",
    title: "Drvena vrata po mjeri",
    desc: "Sobna i ulazna drvena vrata po narudžbi, s dovratnikom. Odaberete model, a mjerenje i montažu preuzimamo mi.",
    tags: ["Sobna", "Ulazna", "S dovratnikom"],
    href: "/usluge/drvena-vrata",
    image: "/images/vrata katalog/Model mo-1.jpeg",
  },
  {
    n: "05",
    title: "Nadstrešnice",
    desc: "Aluminijske nadstrešnice za auto, ulaz i terasu. Trajan zaklon koji ne rđa i ne traži održavanje.",
    tags: ["Carport", "Ulaz", "Terasa"],
    href: "/usluge/nadstresnice",
    image: "/images/hero-img.jpg",
  },
];

const perks = [
  { icon: Ruler, label: "Izrada po vašim dimenzijama" },
  { icon: Zap, label: "Montaža u dogovorenom roku" },
  { icon: Shield, label: "Pisana garancija na rad" },
  { icon: MapPin, label: "BiH · HR · SLO · AT" },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: (index % 2) * 0.05 }}
    >
      <Link
        ref={ref}
        href={service.href}
        className="group grid grid-cols-[80px_1fr] sm:grid-cols-[40px_150px_1fr] items-center gap-x-4 sm:gap-x-8 py-7 sm:py-8 border-t border-alu-line hover:bg-white/70 transition-colors duration-200 -mx-4 px-4"
      >
        {/* Index — architectural */}
        <span className="hidden sm:block text-3xl font-light text-alu-steel/70 tabular-nums leading-none self-start pt-1">
          {service.n}
        </span>

        {/* Thumbnail */}
        <div className="relative aspect-square sm:aspect-[4/3] rounded-sm overflow-hidden bg-alu-dark">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="150px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>

        {/* Text — clear micro-hierarchy */}
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-alu-dark leading-tight tracking-tight group-hover:text-alu-blue transition-colors duration-200">
              {service.title}
            </h3>
            <ArrowRight
              size={18}
              className="flex-shrink-0 mt-1 text-alu-steel group-hover:text-alu-blue group-hover:translate-x-1 transition-all duration-200"
            />
          </div>
          <p className="text-sm text-alu-text leading-relaxed mt-2 max-w-xl">
            {service.desc}
          </p>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-3.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-alu-steel">
            {service.tags.map((tag, ti) => (
              <span key={tag} className="flex items-center gap-2.5">
                {ti > 0 && <span className="w-1 h-1 rounded-full bg-alu-line" />}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProductsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const perksRef = useRef<HTMLDivElement>(null);
  const perksInView = useInView(perksRef, { once: true, margin: "-60px" });

  return (
    <section id="usluge" className="relative py-20 lg:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 12 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-4"
        >
          <div className="max-w-2xl">
            <p className="eyebrow text-alu-blue mb-4">Šta radimo</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-alu-dark leading-[1.08] tracking-tight">
              Aluminijski sistemi i vrata, izrađeni i montirani sami
            </h2>
          </div>
          <p className="text-alu-text text-sm leading-relaxed max-w-xs md:text-right">
            Bez podizvođača. Za kvalitet, rok i cijenu odgovaramo mi, uz pisanu
            garanciju na svaki rad.
          </p>
        </motion.div>

        {/* Service rows */}
        <div className="border-b border-alu-line mb-14">
          {services.map((service, i) => (
            <ServiceRow key={service.href} service={service} index={i} />
          ))}
        </div>

        {/* Perks — thin spec line */}
        <motion.div
          ref={perksRef}
          initial={{ opacity: 0, y: 12 }}
          animate={perksInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mb-14"
        >
          {perks.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={18} className="text-alu-blue flex-shrink-0" />
              <p className="text-sm font-medium text-alu-dark">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="tel:+38762543464"
            className="flex items-center justify-center gap-2.5 px-7 py-4 bg-alu-blue text-white font-semibold rounded-sm text-sm tracking-wide hover:bg-alu-light transition-colors duration-200 w-full sm:w-auto"
          >
            <Phone size={16} />
            Pozovi: 062 543 464
          </a>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-alu-blue hover:text-alu-light transition-colors"
          >
            Ili pošalji upit online
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
