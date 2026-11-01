// Jezici sajta. Bosanski je zadani i živi bez prefiksa u URL-u (/usluge),
// ostali imaju prefiks (/de/leistungen, /sl/storitve).

export const LOCALES = ["bs", "sl", "de"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "bs";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export const LOCALE_META: Record<
  Locale,
  {
    /** Naziv jezika na tom jeziku (za switcher). */
    name: string;
    short: string;
    /** Kod države za zastavicu. */
    flag: "ba" | "si" | "de";
    ogLocale: string;
  }
> = {
  bs: { name: "Bosanski", short: "BS", flag: "ba", ogLocale: "bs_BA" },
  sl: { name: "Slovenščina", short: "SL", flag: "si", ogLocale: "sl_SI" },
  de: { name: "Deutsch", short: "DE", flag: "de", ogLocale: "de_AT" },
};

/** Interni naziv sekcije (folder u app/[locale]) → javni segment po jeziku. */
export const SECTIONS = {
  usluge: { bs: "usluge", sl: "storitve", de: "leistungen" },
  lokacije: { bs: "lokacije", sl: "lokacije", de: "standorte" },
  blog: { bs: "blog", sl: "blog", de: "ratgeber" },
} as const satisfies Record<string, Record<Locale, string>>;

export type Section = keyof typeof SECTIONS;

export function isSection(value: string | undefined): value is Section {
  return !!value && value in SECTIONS;
}

/** Javni segment (npr. "leistungen") → interni naziv sekcije ("usluge"). */
export function sectionFromPublic(
  locale: Locale,
  segment: string
): Section | undefined {
  return (Object.keys(SECTIONS) as Section[]).find(
    (s) => SECTIONS[s][locale] === segment
  );
}
