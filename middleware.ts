import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// MAINTENANCE MODE — postavi na false da vratiš cijeli sajt
const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Pusti samu maintenance stranicu da se prikaže bez petlje
  if (pathname === "/maintenance") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url);
}

export const config = {
  // Preskoči Next interne rute i statičke fajlove (slike, favicon, video...)
  matcher: ["/((?!_next/static|_next/image|images|hero-video.mp4|.*\\..*).*)"],
};
