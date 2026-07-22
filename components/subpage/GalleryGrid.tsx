"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function GalleryGrid({
  heading,
  images,
}: {
  heading: string;
  images: { src: string; alt: string }[];
}) {
  if (!images.length) return null;

  return (
    <section className="relative py-16 lg:py-24 bg-alu-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow text-alu-blue mb-4">Galerija</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: (i % 3) * 0.06 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden bg-alu-dark group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
