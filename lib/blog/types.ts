import type { FaqItem } from "@/lib/content/types";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPostBase = {
  slug: string;
  title: string; // H1 na stranici
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  heroImage: string;
  date: string; // ISO
  readingMinutes: number;
  body: Block[];
  faq: FaqItem[];
  /** href je bosanska putanja (npr. /usluge/nadstresnice); lokalizira se pri prikazu. */
  relatedService: { label: string; href: string };
};

export type BlogPost = BlogPostBase & { id: string };

export type BlogTranslation = Omit<
  BlogPostBase,
  "slug" | "heroImage" | "date" | "readingMinutes" | "relatedService"
> & {
  id: string;
  relatedServiceLabel: string;
};
