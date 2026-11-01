// Lokalizirani pristup uslužnim i lokacijskim stranicama.
// Prijevodi nose samo tekst; slike i veze dolaze iz bosanskog izvora.
import type { Locale } from "@/lib/i18n/config";
import { slugFor } from "@/lib/i18n/slugs";
import { SERVICE_PAGES, LOCATION_PAGES } from "./bs";
import * as de from "./de";
import * as sl from "./sl";
import type {
  ServicePage,
  LocationPage,
  ServiceTranslation,
  LocationTranslation,
} from "./types";

export * from "./types";

const TRANSLATIONS: Record<
  Exclude<Locale, "bs">,
  { SERVICES: ServiceTranslation[]; LOCATIONS: LocationTranslation[] }
> = { de, sl };

export function getServicePages(locale: Locale): ServicePage[] {
  if (locale === "bs") return SERVICE_PAGES.map((p) => ({ ...p, id: p.slug }));
  const byId = new Map(TRANSLATIONS[locale].SERVICES.map((t) => [t.id, t]));
  return SERVICE_PAGES.map((base) => {
    const slug = slugFor(locale, "usluge", base.slug);
    const t = byId.get(base.slug);
    if (!t) return { ...base, id: base.slug, slug };
    const { galleryAlts, ...text } = t;
    return {
      ...base,
      ...text,
      slug,
      gallery: base.gallery.map((g, i) => ({
        src: g.src,
        alt: galleryAlts[i] ?? g.alt,
      })),
    };
  });
}

export function getLocationPages(locale: Locale): LocationPage[] {
  if (locale === "bs") return LOCATION_PAGES.map((p) => ({ ...p, id: p.slug }));
  const byId = new Map(TRANSLATIONS[locale].LOCATIONS.map((t) => [t.id, t]));
  return LOCATION_PAGES.map((base) => {
    const slug = slugFor(locale, "lokacije", base.slug);
    const t = byId.get(base.slug);
    return t ? { ...base, ...t, slug } : { ...base, id: base.slug, slug };
  });
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getServicePages(locale).find((s) => s.slug === slug);
}

export function getLocationBySlug(locale: Locale, slug: string) {
  return getLocationPages(locale).find((l) => l.slug === slug);
}
