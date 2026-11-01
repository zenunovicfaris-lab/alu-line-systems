// Prevedeni slugovi po id-u (id = bosanski slug). Mala mapa koju koriste i
// klijentske komponente (switcher), pa sadržaj stranica ne ide u bundle.
import type { Locale, Section } from "./config";

type SlugMap = Record<string, Record<Exclude<Locale, "bs">, string>>;

export const SLUGS: Record<Section, SlugMap> = {
  usluge: {
    "aluminijske-ograde": { de: "aluminiumzaun", sl: "aluminijaste-ograje" },
    "aluminijske-kapije": { de: "aluminium-tore", sl: "aluminijasta-dvoriscna-vrata" },
    "ograde-za-dvoriste": { de: "gartenzaun", sl: "dvoriscne-ograje" },
    "balkonske-ograde": { de: "balkongelaender", sl: "balkonske-ograje" },
    "aluminijske-ograde-cijena": { de: "aluminiumzaun-preis", sl: "aluminijaste-ograje-cena" },
    roletne: { de: "rollladen", sl: "rolete" },
    "garazna-i-sekcijska-vrata": { de: "garagentore-sektionaltore", sl: "garazna-in-sekcijska-vrata" },
    nadstresnice: { de: "ueberdachungen-carports", sl: "nadstreski" },
    "drvena-vrata": { de: "holztueren", sl: "lesena-vrata" },
  },
  lokacije: {
    srebrenik: { de: "srebrenik", sl: "srebrenik" },
    tuzla: { de: "tuzla", sl: "tuzla" },
    gracanica: { de: "gracanica", sl: "gracanica" },
    gradacac: { de: "gradacac", sl: "gradacac" },
    slovenija: { de: "slowenien", sl: "slovenija" },
    hrvatska: { de: "kroatien", sl: "hrvaska" },
    austrija: { de: "oesterreich", sl: "avstrija" },
  },
  blog: {
    "ograda-za-dvoriste-vrste-i-kako-izabrati": {
      de: "gartenzaun-arten-richtig-waehlen",
      sl: "dvoriscna-ograja-vrste-in-izbira",
    },
    "panelna-ili-aluminijska-ograda": {
      de: "doppelstabmattenzaun-oder-aluminiumzaun",
      sl: "panelna-ali-aluminijasta-ograja",
    },
    "aluminijska-ili-kovana-ograda": {
      de: "aluminiumzaun-oder-schmiedeeisenzaun",
      sl: "aluminijasta-ali-kovana-ograja",
    },
    "ograda-za-balkon-aluminijske-balkonske-ograde": {
      de: "balkongelaender-aus-aluminium",
      sl: "aluminijaste-balkonske-ograje",
    },
    "koliko-kosta-aluminijska-ograda": {
      de: "was-kostet-ein-aluminiumzaun",
      sl: "koliko-stane-aluminijasta-ograja",
    },
    "koliko-kosta-aluminijska-nadstresnica": {
      de: "was-kostet-eine-aluminium-ueberdachung",
      sl: "koliko-stane-aluminijast-nadstresek",
    },
  },
};

export function slugFor(locale: Locale, section: Section, id: string): string {
  if (locale === "bs") return id;
  return SLUGS[section][id]?.[locale] ?? id;
}

export function idFromSlug(
  locale: Locale,
  section: Section,
  slug: string
): string | undefined {
  if (locale === "bs") return slug in SLUGS[section] ? slug : undefined;
  return Object.keys(SLUGS[section]).find(
    (id) => SLUGS[section][id][locale] === slug
  );
}
