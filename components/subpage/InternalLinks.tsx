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
    <section className="relative py-14 lg:py-20 bg-alu-gray border-t border-alu-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-alu-dark mb-7">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between gap-3 px-5 py-4 rounded-sm border border-alu-line bg-white hover:border-alu-blue transition-colors duration-200"
            >
              <span className="text-sm font-semibold text-alu-dark group-hover:text-alu-blue transition-colors">
                {l.label}
              </span>
              <ArrowRight
                size={15}
                className="text-alu-steel group-hover:text-alu-blue group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
