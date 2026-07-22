import FaqAccordion from "./FaqAccordion";
import type { FaqItem } from "@/lib/content";

export default function FaqSection({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow text-alu-blue mb-4">Česta pitanja</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight">
            Pitanja i odgovori
          </h2>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
