import FaqAccordion from "./FaqAccordion";
import type { FaqItem } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n";

export default function FaqSection({
  items,
  locale,
}: {
  items: FaqItem[];
  locale: Locale;
}) {
  if (!items.length) return null;
  const t = getDictionary(locale).subpage;

  return (
    <section className="relative py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="eyebrow text-alu-blue mb-4">{t.faqEyebrow}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight">
            {t.faqTitle}
          </h2>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
