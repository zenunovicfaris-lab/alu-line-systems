"use client";

import { createContext, useContext } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n/paths";

const LocaleContext = createContext<{ locale: Locale; dict: Dictionary } | null>(
  null
);

export function LocaleProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  );
}

function useLocaleContext() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("LocaleProvider nedostaje u layoutu");
  return ctx;
}

export function useLocale() {
  return useLocaleContext().locale;
}

export function useT() {
  return useLocaleContext().dict;
}

/** Bosanska putanja → putanja u trenutnom jeziku. */
export function useLocalizePath() {
  const locale = useLocale();
  return (bsPath: string) => localizePath(locale, bsPath);
}
