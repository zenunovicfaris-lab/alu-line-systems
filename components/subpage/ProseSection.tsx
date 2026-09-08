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
            {s.table && (
              <div className="mt-2 -mx-6 px-6 overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-sm">
                  {s.table.caption && (
                    <caption className="text-left text-alu-text/70 text-sm pb-3">
                      {s.table.caption}
                    </caption>
                  )}
                  <thead>
                    <tr className="bg-alu-gray">
                      {s.table.head.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="border border-alu-blue/15 px-3 py-2 text-left font-semibold text-alu-dark"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row[0]} className="align-top">
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`border border-alu-blue/15 px-3 py-2 text-alu-text ${
                              ci === 0 ? "font-medium text-alu-dark" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
