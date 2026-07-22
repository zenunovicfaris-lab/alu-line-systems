"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { Feature } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FeatureGrid({
  heading,
  subheading,
  features,
}: {
  heading: string;
  subheading?: string;
  features: Feature[];
}) {
  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow text-alu-blue mb-4">Ponuda</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="text-alu-text text-base leading-relaxed mt-3">
              {subheading}
            </p>
          )}
        </div>

        {/* Spec list — two columns of rows, hairline separated */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-alu-line">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: EASE, delay: (i % 2) * 0.05 }}
              className="flex items-start gap-4 py-6 border-b border-alu-line"
            >
              <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-sm bg-alu-blue/10 flex items-center justify-center">
                <Check size={14} className="text-alu-blue" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-alu-dark mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-alu-text leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
