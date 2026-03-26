"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const contactCards = [
  {
    icon: MapPin,
    label: "Lokacija",
    value: "Srebrenik, BiH",
    href: null,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "062 543 464",
    href: "tel:+38762543464",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    value: "Pon – Sub: 08:00 – 17:00",
    href: null,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section
      id="kontakt"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-alu-dark overflow-hidden"
    >
      {/* Glow accent — top right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top right, #143c5f 0%, transparent 40%)",
          opacity: 0.3,
        }}
      />
      {/* Bottom-left subtle glow */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, #143c5f 0%, transparent 70%)",
        }}
      />
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT — Info */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -60 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/40 bg-alu-blue/10 text-alu-blue">
              Kontakt
            </span>

            {/* Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white">
                Započnimo vaš
              </h2>
              <h2 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-alu-blue mt-1">
                projekat.
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Trebate kvalitetne aluminijske ograde, roletne ili nadstrešnice?
              Kontaktirajte nas za besplatne konsultacije i ponudu.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactCards.map(({ icon: Icon, label, value, href }, i) => {
                const inner = (
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(20,60,95,0.15)",
                        border: "1px solid rgba(20,60,95,0.25)",
                      }}
                    >
                      <Icon size={18} className="text-alu-blue" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-0.5">
                        {label}
                      </p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={leftInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.6,
                      ease: EASE,
                    }}
                    className="group p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-alu-blue/50 hover:bg-white/8"
                    style={{ cursor: href ? "pointer" : "default" }}
                  >
                    {href ? (
                      <a href={href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT — Map */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative h-full min-h-[440px] lg:min-h-[520px]"
          >
            <div
              className="w-full h-full rounded-3xl overflow-hidden"
              style={{ border: "1px solid rgba(20,60,95,0.35)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22656.86!2d18.4908!3d44.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c9b1234567890%3A0xabcdef1234567890!2sSrebrenik%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sba!4v1234567890!5m2!1sen!2sba"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)", minHeight: "440px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ALU LINE Systems — Srebrenik"
              />
            </div>

            {/* Floating CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={rightInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
              className="absolute bottom-5 left-5 z-10"
            >
              <a
                href="tel:+38762543464"
                className="flex items-center gap-3 px-5 py-4 bg-alu-blue text-white rounded-xl shadow-2xl shadow-alu-blue/40 hover:bg-alu-light transition-all duration-300 group"
              >
                <div>
                  <p className="text-xs text-white/60 font-medium">Besplatno</p>
                  <p className="text-sm font-bold leading-none mt-0.5">
                    Zatraži Ponudu
                  </p>
                </div>
                <motion.span
                  className="ml-1"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} className="text-white/70 group-hover:text-white transition-colors" />
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
