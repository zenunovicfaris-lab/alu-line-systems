// Prevođenje putanja između jezika. "Bosanska putanja" (npr. /usluge/roletne)
// je kanonski oblik iz kojeg se izvode putanje za ostale jezike.
import {
  LOCALES,
  DEFAULT_LOCALE,
  SECTIONS,
  isLocale,
  isSection,
  sectionFromPublic,
  type Locale,
} from "./config";
import { slugFor, idFromSlug } from "./slugs";
import { SITE_URL } from "@/lib/site";

/** Bosanska putanja → putanja u traženom jeziku. Čuva #hash. */
export function localizePath(locale: Locale, bsPath: string): string {
  const [path, hash] = bsPath.split("#");
  const [, section, slug] = path.split("/");
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;

  let out: string;
  if (isSection(section)) {
    out = `${prefix}/${SECTIONS[section][locale]}`;
    if (slug) out += `/${slugFor(locale, section, slug)}`;
  } else {
    out = `${prefix}${path === "/" ? "" : path}` || "/";
  }
  return hash !== undefined ? `${out}#${hash}` : out;
}

/** Javna putanja iz browsera → jezik + bosanska putanja. */
export function parsePath(pathname: string): { locale: Locale; bsPath: string } {
  const parts = pathname.split("/").filter(Boolean);
  let locale: Locale = DEFAULT_LOCALE;
  if (isLocale(parts[0]) && parts[0] !== DEFAULT_LOCALE) {
    locale = parts.shift() as Locale;
  }
  const [segment, slug] = parts;
  if (!segment) return { locale, bsPath: "/" };

  const section = sectionFromPublic(locale, segment);
  if (!section) return { locale, bsPath: `/${parts.join("/")}` };
  if (!slug) return { locale, bsPath: `/${section}` };
  return {
    locale,
    bsPath: `/${section}/${idFromSlug(locale, section, slug) ?? slug}`,
  };
}

/** canonical + hreflang alternates za Next metadata. */
export function alternatesFor(locale: Locale, bsPath: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = localizePath(l, bsPath);
  languages["x-default"] = localizePath(DEFAULT_LOCALE, bsPath);
  return { canonical: localizePath(locale, bsPath), languages };
}

/** Apsolutni URL (za JSON-LD i Open Graph). */
export function absoluteUrl(locale: Locale, bsPath: string): string {
  const path = localizePath(locale, bsPath);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
