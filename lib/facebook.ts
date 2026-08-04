// Facebook Graph API sloj za „Izvedeni radovi".
//
// Povlači objave sa Facebook stranice i mapira ih u Project oblik.
// Vraća null ako integracija nije konfigurisana (nema env varijabli) ili ako
// API zakaže — pozivalac (lib/projects.ts) tada koristi statički fallback.
//
// PREDUSLOV: FB_PAGE_ID i dugoročni FB_PAGE_ACCESS_TOKEN (idealno System User
// token preko Meta Business Suite). Token izdaje admin stranice.
//
// NAPOMENA o slikama: full_picture / *.fbcdn.net URL-ovi su potpisani i ISTIČU.
// Za produkciju ih treba jednom preuzeti i keširati (Vercel Blob) pa čuvati
// stabilan URL u manifestu. Ovaj modul za sada vraća direktne FB URL-ove;
// keširanje se dodaje u app/api/facebook/refresh kad token bude dostupan.

import type { Project } from "./projects";

const GRAPH = "https://graph.facebook.com/v21.0";

type FbSubattachment = {
  media?: { image?: { src?: string } };
};

type FbPost = {
  id: string;
  message?: string;
  created_time?: string;
  permalink_url?: string;
  full_picture?: string;
  attachments?: {
    data?: Array<{
      media_type?: string;
      media?: { image?: { src?: string } };
      subattachments?: { data?: FbSubattachment[] };
    }>;
  };
};

function collectImages(post: FbPost): string[] {
  const urls = new Set<string>();
  if (post.full_picture) urls.add(post.full_picture);
  for (const att of post.attachments?.data ?? []) {
    const single = att.media?.image?.src;
    if (single) urls.add(single);
    for (const sub of att.subattachments?.data ?? []) {
      const src = sub.media?.image?.src;
      if (src) urls.add(src);
    }
  }
  return Array.from(urls);
}

function mapPost(post: FbPost): Project | null {
  const images = collectImages(post);
  if (images.length === 0) return null; // samo objave sa fotografijom

  const message = (post.message ?? "").trim();
  const [firstLine, ...restLines] = message.split("\n").filter(Boolean);
  const title = (firstLine ?? "Novi rad").slice(0, 80);
  const subtitle = restLines.join(" ").slice(0, 160);
  const year = post.created_time ? post.created_time.slice(0, 4) : "";

  return {
    id: post.id,
    title,
    subtitle,
    location: "",
    year,
    images,
    permalink: post.permalink_url,
    source: "facebook",
  };
}

export async function fetchFacebookProjects(): Promise<Project[] | null> {
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FB_PAGE_ID;
  if (!token || !pageId) return null; // integracija još nije konfigurisana

  const tag = process.env.FB_POST_TAG?.toLowerCase();
  const fields =
    "id,message,created_time,permalink_url,full_picture,attachments{media_type,media,subattachments}";
  const url = `${GRAPH}/${pageId}/published_posts?fields=${encodeURIComponent(
    fields,
  )}&limit=25&access_token=${token}`;

  try {
    const res = await fetch(url, {
      // Keširaj rezultat; osvježava se cron-om preko revalidateTag("fb-projects").
      next: { revalidate: 21600, tags: ["fb-projects"] },
    });

    if (!res.ok) {
      console.error("[facebook] fetch nije uspio:", res.status, await res.text());
      return null;
    }

    const json = (await res.json()) as { data?: FbPost[] };
    let posts = json.data ?? [];

    if (tag) {
      posts = posts.filter((p) => (p.message ?? "").toLowerCase().includes(tag));
    }

    const projects = posts
      .map(mapPost)
      .filter((p): p is Project => p !== null);

    return projects;
  } catch (err) {
    console.error("[facebook] greška pri povlačenju objava:", err);
    return null;
  }
}
