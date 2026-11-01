import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  SECTIONS,
  isLocale,
  isSection,
  sectionFromPublic,
} from "@/lib/i18n/config";
import { slugFor } from "@/lib/i18n/slugs";

// MAINTENANCE MODE — postavi na false da vratiš cijeli sajt
const MAINTENANCE_MODE = false;

// Rute žive u app/[locale]/... s internim nazivima sekcija (usluge, lokacije, blog).
// - /usluge/x            → rewrite na /bs/usluge/x (bosanski bez prefiksa)
// - /bs/usluge/x         → 308 na /usluge/x (bez duplikata)
// - /de/leistungen/x     → rewrite na /de/usluge/x
// - /de/usluge/roletne   → 308 na /de/leistungen/rollladen (samo javni nazivi)
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  const parts = pathname.split("/").filter(Boolean);

  if (MAINTENANCE_MODE && parts.at(-1) !== "maintenance") {
    url.pathname = `/${DEFAULT_LOCALE}/maintenance`;
    return NextResponse.rewrite(url);
  }

  const [first, segment, ...rest] = parts;

  if (first === DEFAULT_LOCALE) {
    url.pathname = `/${parts.slice(1).join("/")}`;
    return NextResponse.redirect(url, 308);
  }

  if (isLocale(first)) {
    if (!segment) return NextResponse.next();
    const section = sectionFromPublic(first, segment);
    if (section && section !== segment) {
      url.pathname = `/${[first, section, ...rest].join("/")}`;
      return NextResponse.rewrite(url);
    }
    if (!section && isSection(segment)) {
      const [slug, ...tail] = rest;
      const localized = slug ? [slugFor(first, segment, slug), ...tail] : [];
      url.pathname = `/${[first, SECTIONS[segment][first], ...localized].join("/")}`;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Preskoči Next interne rute i statičke fajlove (slike, favicon, video...)
  matcher: ["/((?!_next/static|_next/image|images|hero-video.mp4|.*\\..*).*)"],
};
