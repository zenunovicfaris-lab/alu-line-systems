"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Facebook } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "10+", label: "godina iskustva" },
  { value: "100+", label: "klijenata" },
  { value: "Europa", label: "tržište" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="kontakt"
      className="relative py-16 lg:py-24 bg-alu-dark overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div className="max-w-xl">
            <p className="eyebrow text-alu-steel mb-4">Kontakt</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.1] tracking-tight">
              Izmjerimo i damo ponudu, bez obaveze
            </h2>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs md:text-right">
            Izlazimo na teren, izmjerimo i dajemo ponudu po mjeri.
          </p>
        </motion.div>

        {/* Main grid: info (7) / map (5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="lg:col-span-7 flex flex-col gap-3"
          >
            {/* Phone — primary tap target */}
            <a
              href="tel:+38762543464"
              className="group flex items-center justify-between gap-4 p-5 rounded-sm bg-alu-blue hover:bg-alu-light transition-colors duration-200"
            >
              <div className="flex items-center gap-4 min-w-0">
                <Phone size={20} className="text-white flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    Telefon · WhatsApp · Viber
                  </p>
                  <p className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
                    062 543 464
                  </p>
                </div>
              </div>
              <ArrowRight
                size={19}
                className="text-white/80 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>

            {/* Location + hours */}
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-sm overflow-hidden border border-white/10">
              <div className="flex items-start gap-3 p-4 bg-alu-dark">
                <MapPin size={16} className="text-alu-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.16em] mb-0.5">
                    Lokacija
                  </p>
                  <p className="text-white text-sm font-medium leading-snug">
                    Srebrenik, BiH
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-alu-dark">
                <Clock size={16} className="text-alu-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.16em] mb-0.5">
                    Radno vrijeme
                  </p>
                  <p className="text-white text-sm font-medium leading-snug">
                    Pon - Sub: 08 - 17h
                  </p>
                </div>
              </div>
            </div>

            {/* CTA + social */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+38762543464"
                className="flex-1 group flex items-center justify-center gap-2.5 px-6 py-3.5 border border-white/25 text-white font-semibold rounded-sm text-sm tracking-wide hover:border-white/60 hover:bg-white/5 transition-colors duration-200"
              >
                Zatraži besplatnu ponudu
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584092785799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[50px] h-[50px] flex-shrink-0 rounded-sm border border-white/15 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-200"
              >
                <Facebook size={17} />
              </a>
            </div>
          </motion.div>

          {/* Map — supporting, not dominant */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="lg:col-span-5 rounded-sm overflow-hidden border border-white/10 min-h-[200px] lg:min-h-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11323.73!2d18.4908!3d44.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c7c2b0e6a5555%3A0x400fd4a5de3fbd0!2sSrebrenik!5e0!3m2!1sbs!2sba!4v1700000000000!5m2!1sbs!2sba"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.82)",
                minHeight: "200px",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ALU LINE Systems - Srebrenik"
            />
          </motion.div>
        </div>

        {/* Stats — thin strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
          className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-white">{s.value}</span>
              <span className="text-[11px] text-white/35 tracking-wide uppercase font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
