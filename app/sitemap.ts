import type { MetadataRoute } from "next";
import { SERVICE_PAGES, LOCATION_PAGES } from "@/lib/content/bs";
import { BLOG_POSTS } from "@/lib/blog/bs";
import { LOCALES } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/i18n/paths";

type Entry = MetadataRoute.Sitemap[number];

// Svaka stranica ide u sitemap na svim jezicima, s hreflang alternativama.
function localized(
  bsPath: string,
  rest: Omit<Entry, "url" | "alternates">
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, absoluteUrl(l, bsPath)])
  );
  return LOCALES.map((l) => ({
    url: absoluteUrl(l, bsPath),
    ...rest,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...localized("/", { lastModified, changeFrequency: "monthly", priority: 1 }),
    ...localized("/usluge", { lastModified, changeFrequency: "monthly", priority: 0.8 }),
    ...localized("/lokacije", { lastModified, changeFrequency: "monthly", priority: 0.8 }),
    ...localized("/blog", { lastModified, changeFrequency: "weekly", priority: 0.7 }),
    ...SERVICE_PAGES.flatMap((s) =>
      localized(`/usluge/${s.slug}`, {
        lastModified,
        changeFrequency: "monthly",
        priority: 0.9,
      })
    ),
    ...LOCATION_PAGES.flatMap((l) =>
      localized(`/lokacije/${l.slug}`, {
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    ),
    ...BLOG_POSTS.flatMap((p) =>
      localized(`/blog/${p.slug}`, {
        lastModified: new Date(p.date),
        changeFrequency: "yearly",
        priority: 0.6,
      })
    ),
  ];
}
