import { PREFIXED_LOCALES, isLocale, type Locale } from "./locales";

/** Static paths for every non-default locale (URL prefix). */
export function prefixedLocalePaths() {
  return PREFIXED_LOCALES.map((lang) => ({ params: { lang } }));
}

/** Resolve and validate a [lang] route param. */
export function requirePrefixedLocale(lang: string | undefined): Locale {
  if (!lang || !isLocale(lang) || lang === "en") {
    throw new Error(`Invalid prefixed locale: ${lang}`);
  }
  return lang;
}
