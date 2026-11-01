import Link from "next/link";
import { Phone, Facebook } from "lucide-react";
import { getServicePages, getLocationPages } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import { localizePath } from "@/lib/i18n/paths";
import { getDictionary } from "@/lib/i18n";

const quickLinks = [
  { id: "home", href: "/#pocetna" },
  { id: "services", href: "/usluge" },
  { id: "locations", href: "/lokacije" },
  { id: "blog", href: "/blog" },
  { id: "projects", href: "/#projekti" },
  { id: "contact", href: "/#kontakt" },
] as const;

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const href = (bsPath: string) => localizePath(locale, bsPath);

  return (
    <footer
      className="relative border-t"
      style={{ background: "#060a10", borderColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-widest text-white">
                ALU <span className="text-alu-blue">LINE</span>
              </span>
              <span className="text-[9px] font-medium tracking-[0.3em] text-white/25 mt-1">
                SYSTEMS
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t.footer.about}
            </p>
            {/* Phone */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="tel:+38762543464"
                aria-label={t.footer.phoneAria}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-alu-blue/60 hover:bg-alu-blue/10 transition-all duration-300"
              >
                <Phone size={16} />
              </a>
              <span className="text-gray-500 text-sm">{t.common.phoneDisplay}</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61584092785799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.facebookAria}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-alu-blue/60 hover:bg-alu-blue/10 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584092785799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
              >
                Alu Line Systems Facebook
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={href(link.href)}
                    className="group flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-alu-blue transition-all duration-300 overflow-hidden" />
                    {t.nav[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase">
              {t.footer.services}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {getServicePages(locale).map((s) => (
                <li key={s.id}>
                  <Link
                    href={href(`/usluge/${s.id}`)}
                    className="group flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-2.5 h-px flex-shrink-0 bg-alu-blue opacity-70" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Locations */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase">
              {t.footer.locations}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {getLocationPages(locale).map((l) => (
                <li key={l.id}>
                  <Link
                    href={href(`/lokacije/${l.id}`)}
                    className="group flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-2.5 h-px flex-shrink-0 bg-alu-blue opacity-70" />
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; 2026 ALU LINE Systems. {t.footer.rights}
          </p>
          <p className="text-gray-600 text-xs">
            {t.footer.madeBy}{" "}
            <a
              href="https://www.zt-media.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors duration-200"
              style={{ color: "#F46129" }}
            >
              ZT Media
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
