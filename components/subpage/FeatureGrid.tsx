"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
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
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-alu-dark tracking-tight mb-4">
            {heading}
          </h2>
          {subheading && (
            <p className="text-gray-500 text-base leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="group p-7 rounded-2xl border border-gray-100 bg-alu-gray hover:border-alu-blue/30 hover:shadow-xl hover:shadow-alu-blue/5 transition-all duration-500"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(20,60,95,0.07)",
                  border: "1px solid rgba(20,60,95,0.12)",
                }}
              >
                <CheckCircle2 size={20} className="text-alu-blue" />
              </div>
              <h3 className="text-lg font-bold text-alu-dark mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
