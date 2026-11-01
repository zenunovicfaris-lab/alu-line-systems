// Sadržaj za uslužne i lokacijske stranice (SEO).
// Svaka stranica ima jedinstven title/description i tekst.

export type FaqItem = { q: string; a: string };
export type Feature = { title: string; desc: string };

export type ProseTable = { caption?: string; head: string[]; rows: string[][] };

export type ProseSection = {
  heading: string;
  paragraphs: string[];
  /** Opciona tabela ispod pasusa (cilja table featured snippet). */
  table?: ProseTable;
};

/** Izvorni (bosanski) zapis. Bosanski slug je ujedno id stranice u svim jezicima. */
export type ServicePageBase = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  /** Pun <title> (zaobilazi brend template). Koristi kad treba precizna duzina <= 60. */
  metaTitleFull?: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  body: ProseSection[];
  features: Feature[];
  gallery: { src: string; alt: string }[];
  faq: FaqItem[];
  /** Id-evi (bs slugovi) blog postova. */
  relatedPostSlugs?: string[];
  /** Kurirani linkovi na srodne usluge (id-evi). Ako je prazno, linkuje se na sve ostale. */
  relatedServiceSlugs?: string[];
  /** Keyword-rich anchor tekst kad na ovu stranicu linkuje neka druga. */
  linkLabel?: string;
};

export type LocationPageBase = {
  slug: string;
  city: string;
  cityLocative: string; // "u Tuzli"
  h1: string;
  metaTitle: string;
  /** Pun <title> (zaobilazi brend template). */
  metaTitleFull?: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  body: ProseSection[];
  faq: FaqItem[];
};

/** Lokalizirana stranica: `slug` je u jeziku stranice, `id` je bosanski slug. */
export type ServicePage = ServicePageBase & { id: string };
export type LocationPage = LocationPageBase & { id: string };

/** Prijevod: samo tekst. Slike, povezani id-evi i slug dolaze iz izvora / mape slugova. */
export type ServiceTranslation = Omit<
  ServicePageBase,
  "slug" | "heroImage" | "gallery" | "relatedPostSlugs" | "relatedServiceSlugs"
> & {
  id: string;
  /** Alt tekstovi galerije, istim redom kao u izvoru. */
  galleryAlts: string[];
};

export type LocationTranslation = Omit<LocationPageBase, "slug" | "heroImage"> & {
  id: string;
};
