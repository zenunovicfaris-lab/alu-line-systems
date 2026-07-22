import FaqAccordion from "./FaqAccordion";
import type { FaqItem } from "@/lib/content";

export default function FaqSection({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-alu-blue/30 bg-alu-blue/5 text-alu-blue mb-5">
            Česta pitanja
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-alu-dark tracking-tight">
            Pitanja i odgovori
          </h2>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
