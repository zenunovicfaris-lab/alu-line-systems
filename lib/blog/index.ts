import type { Locale } from "@/lib/i18n/config";
import { slugFor } from "@/lib/i18n/slugs";
import { localizePath } from "@/lib/i18n/paths";
import { BLOG_POSTS } from "./bs";
import { POSTS as DE_POSTS } from "./de";
import { POSTS as SL_POSTS } from "./sl";
import type { BlogPost, BlogTranslation } from "./types";

export * from "./types";

const TRANSLATIONS: Record<Exclude<Locale, "bs">, BlogTranslation[]> = {
  de: DE_POSTS,
  sl: SL_POSTS,
};

/** Najnoviji prvi. */
export function getPosts(locale: Locale): BlogPost[] {
  const byId = new Map(
    locale === "bs" ? [] : TRANSLATIONS[locale].map((t) => [t.id, t])
  );
  return BLOG_POSTS.map((base): BlogPost => {
    const href = localizePath(locale, base.relatedService.href);
    const slug = slugFor(locale, "blog", base.slug);
    const t = byId.get(base.slug);
    if (!t) {
      return { ...base, id: base.slug, slug, relatedService: { ...base.relatedService, href } };
    }
    const { relatedServiceLabel, ...text } = t;
    return {
      ...base,
      ...text,
      slug,
      relatedService: { label: relatedServiceLabel, href },
    };
  }).sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(locale: Locale, slug: string) {
  return getPosts(locale).find((p) => p.slug === slug);
}

export function getPostById(locale: Locale, id: string) {
  return getPosts(locale).find((p) => p.id === id);
}
