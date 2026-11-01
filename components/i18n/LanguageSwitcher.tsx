"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_META } from "@/lib/i18n/config";
import { localizePath, parsePath } from "@/lib/i18n/paths";
import { useLocale, useT } from "./LocaleProvider";
import Flag from "./Flag";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Linkovi na istu stranicu u svakom jeziku (+ trenutni #hash). */
function useLanguageLinks() {
  const pathname = usePathname();
  const { bsPath } = parsePath(pathname);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  return LOCALES.map((l) => ({
    locale: l,
    href: localizePath(l, bsPath) + hash,
    ...LOCALE_META[l],
  }));
}

export function LanguageDropdown({ scrolled }: { scrolled: boolean }) {
  const locale = useLocale();
  const t = useT();
  const links = useLanguageLinks();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const current = LOCALE_META[locale];

  // Zatvaranje klikom van menija
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  // Fokus na aktivni jezik pri otvaranju (tastatura)
  useEffect(() => {
    if (open) itemRefs.current[LOCALES.indexOf(locale)]?.focus();
  }, [open, locale]);

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = itemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    const i = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(i + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(i - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t.switcher.change} (${current.name})`}
        className={`flex items-center gap-2 h-9 pl-1.5 pr-2.5 rounded-full border text-xs font-semibold tracking-wider transition-colors duration-300 ${
          scrolled
            ? "border-alu-line bg-white text-alu-dark hover:border-alu-blue/40"
            : "border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
        }`}
      >
        <Flag code={current.flag} size={22} />
        {current.short}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""} ${
            scrolled ? "text-gray-400" : "text-white/60"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label={t.switcher.label}
            onKeyDown={onMenuKeyDown}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute right-0 top-full mt-3 w-56 origin-top-right rounded-2xl bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(15,18,23,0.35)] ring-1 ring-black/5"
          >
            <p className="px-3 pt-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              {t.switcher.label}
            </p>
            {links.map((l, i) => {
              const active = l.locale === locale;
              return (
                <Link
                  key={l.locale}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  href={l.href}
                  hrefLang={l.locale}
                  lang={l.locale}
                  role="menuitem"
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl outline-none transition-colors duration-150 focus-visible:bg-alu-gray hover:bg-alu-gray ${
                    active ? "bg-alu-blue/[0.06]" : ""
                  }`}
                >
                  <Flag code={l.flag} size={24} />
                  <span className="flex-1 text-sm font-medium text-alu-dark">
                    {l.name}
                  </span>
                  {active ? (
                    <Check size={16} className="text-alu-blue" />
                  ) : (
                    <span className="text-[11px] font-semibold tracking-wider text-gray-400">
                      {l.short}
                    </span>
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Mobilni meni: tri zastavice kao segmentirani izbor. */
export function LanguageSegmented({ onSelect }: { onSelect?: () => void }) {
  const locale = useLocale();
  const t = useT();
  const links = useLanguageLinks();

  return (
    <div>
      <p className="px-1 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        {t.switcher.label}
      </p>
      <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-gray-100">
        {links.map((l) => {
          const active = l.locale === locale;
          return (
            <Link
              key={l.locale}
              href={l.href}
              hrefLang={l.locale}
              lang={l.locale}
              aria-current={active ? "true" : undefined}
              onClick={onSelect}
              className={`flex flex-col items-center gap-1.5 py-2.5 rounded-xl text-[11px] font-medium transition-all duration-200 ${
                active
                  ? "bg-white text-alu-dark shadow-sm"
                  : "text-gray-500 hover:text-alu-dark"
              }`}
            >
              <Flag code={l.flag} size={26} />
              {l.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
