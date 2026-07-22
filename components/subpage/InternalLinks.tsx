import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InternalLinks({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  if (!links.length) return null;

  return (
    <section className="relative py-16 lg:py-20 bg-alu-gray border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-xl font-bold text-alu-dark mb-8">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-gray-100 bg-white hover:border-alu-blue/30 hover:shadow-lg hover:shadow-alu-blue/5 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-alu-dark group-hover:text-alu-blue transition-colors">
                {l.label}
              </span>
              <ArrowRight
                size={15}
                className="text-alu-blue/40 group-hover:text-alu-blue group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
