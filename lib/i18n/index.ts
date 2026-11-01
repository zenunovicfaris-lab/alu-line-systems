import type { Locale } from "./config";
import bs, { type Dictionary } from "./dictionaries/bs";
import de from "./dictionaries/de";
import sl from "./dictionaries/sl";

export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { bs, sl, de };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

/** Popunjava {placeholder} u tekstu iz rječnika. */
export function fmt(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (m, key) =>
    key in vars ? String(vars[key]) : m
  );
}

/** Datum u lokalnom formatu: bs 15.06.2026. · de 15.06.2026 · sl 15. 6. 2026 */
export function formatDate(iso: string, locale: Locale) {
  const d = new Date(iso);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const pad = (n: number) => String(n).padStart(2, "0");
  if (locale === "sl") return `${day}. ${month}. ${year}`;
  if (locale === "de") return `${pad(day)}.${pad(month)}.${year}`;
  return `${pad(day)}.${pad(month)}.${year}.`;
}
