"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Facebook } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "10+", label: "godina iskustva" },
  { value: "500+", label: "klijenata" },
  { value: "BiH · HR · SLO", label: "tržišta" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="kontakt" className="relative py-24 lg:py-32 bg-alu-dark overflow-hidden">
      {/* Subtle radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(20,60,95,0.25) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border border-alu-blue/30 text-alu-blue mb-5">
            Kontakt
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Započnimo vaš<br />
            <span className="text-alu-text font-normal">projekat zajedno.</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Kontaktirajte nas za besplatnu konsultaciju i ponudu po mjeri.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* LEFT — Info + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Phone */}
            <a
              href="tel:+38762543464"
              className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-alu-blue/50 hover:bg-white/[0.07] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-alu-blue/15 border border-alu-blue/25">
                <Phone size={17} className="text-alu-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Telefon</p>
                <p className="text-white text-base font-bold">062 543 464</p>
              </div>
              <ArrowRight size={15} className="text-white/20 group-hover:text-alu-blue transition-colors duration-200" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-alu-blue/15 border border-alu-blue/25">
                <MapPin size={17} className="text-alu-blue" />
              </div>
              <div>
                <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Lokacija</p>
                <p className="text-white text-sm font-medium">Srebrenik, Bosna i Hercegovina</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-alu-blue/15 border border-alu-blue/25">
                <Clock size={17} className="text-alu-blue" />
              </div>
              <div>
                <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-widest mb-0.5">Radno vrijeme</p>
                <p className="text-white text-sm font-medium">Pon - Sub: 08:00 - 17:00</p>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="tel:+38762543464"
              className="group flex items-center justify-center gap-3 mt-2 px-8 py-4 bg-alu-blue text-white font-semibold rounded-2xl text-sm tracking-wide hover:bg-alu-light transition-colors duration-200"
            >
              Zatraži besplatnu ponudu
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            {/* Social */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-[11px] text-white/25 tracking-widest uppercase font-medium">Pratite nas</span>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61584092785799"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/35 hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <Facebook size={15} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
            className="rounded-2xl overflow-hidden"
            style={{ minHeight: "440px", border: "1px solid rgba(20,60,95,0.35)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11323.73!2d18.4908!3d44.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c7c2b0e6a5555%3A0x400fd4a5de3fbd0!2sSrebrenik!5e0!3m2!1sbs!2sba!4v1700000000000!5m2!1sbs!2sba"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(180deg) saturate(0.7) brightness(0.82)",
                minHeight: "440px",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ALU LINE Systems - Srebrenik"
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-white/[0.07] grid grid-cols-3 gap-6 text-center"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-xl md:text-2xl font-bold text-white">{s.value}</span>
              <span className="text-[11px] text-white/30 tracking-wide uppercase font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
