import type { ProseSection as ProseSectionType } from "@/lib/content";

export default function ProseSection({
  sections,
  background = "white",
}: {
  sections: ProseSectionType[];
  background?: "white" | "gray";
}) {
  if (!sections.length) return null;

  return (
    <section
      className={`relative py-16 lg:py-24 ${
        background === "gray" ? "bg-alu-gray" : "bg-white"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        {sections.map((s) => (
          <div key={s.heading} className="flex flex-col gap-4 border-l-2 border-alu-blue/30 pl-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight">
              {s.heading}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-alu-text text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
