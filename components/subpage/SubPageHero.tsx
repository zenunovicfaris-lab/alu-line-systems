"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Crumb = { label: string; href: string };

export default function SubPageHero({
  badge,
  title,
  intro,
  image,
  crumbs,
}: {
  badge: string;
  title: string;
  intro: string[];
  image: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative min-h-[68vh] flex items-end overflow-hidden bg-alu-dark">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
          className="opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,22,32,0.75) 0%, rgba(15,22,32,0.55) 40%, rgba(15,22,32,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap"
        >
          {crumbs.map((c, i) => (
            <span key={c.href} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-white/30" />}
              {i < crumbs.length - 1 ? (
                <Link
                  href={c.href}
                  className="hover:text-white transition-colors"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/80">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/40 bg-alu-blue/10 text-white/90 mb-5"
        >
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-3xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          className="mt-6 max-w-2xl flex flex-col gap-3"
        >
          {intro.map((p, i) => (
            <p key={i} className="text-white/70 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="tel:+38762543464"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-alu-blue text-white font-semibold rounded-2xl text-sm hover:bg-alu-light transition-colors duration-200"
          >
            <Phone size={16} />
            Pozovi: 062 543 464
          </a>
          <a
            href="/#kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
          >
            Zatraži besplatnu ponudu
            <ChevronRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
