import { Check } from "lucide-react";
import type { Block } from "@/lib/blog";

export default function BlogContent({ body }: { body: Block[] }) {
  return (
    <div className="flex flex-col gap-5">
      {body.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-semibold text-alu-dark tracking-tight mt-6"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "table") {
          return (
            <div key={i} className="overflow-x-auto -mx-1 my-2">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr>
                    {block.headers.map((h) => (
                      <th
                        key={h}
                        className="text-left font-semibold text-alu-dark bg-alu-gray border border-alu-line px-4 py-3"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={`border border-alu-line px-4 py-3 text-alu-text ${
                            ci === 0 ? "font-semibold text-alu-dark" : ""
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
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="flex flex-col gap-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-sm bg-alu-blue/10 flex items-center justify-center">
                    <Check size={12} className="text-alu-blue" />
                  </span>
                  <span className="text-alu-text leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-alu-text text-base leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
