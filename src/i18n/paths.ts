import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_META,
  LOCALES,
  type Locale,
} from "./locales";

/** Normalize a path to always start with `/` and end with `/` (except bare `/`). */
export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  let p = path.startsWith("/") ? path : `/${path}`;
  // strip query/hash if any slipped in
  p = p.split("?")[0].split("#")[0];
  if (!p.endsWith("/")) p += "/";
  return p;
}

/**
 * Strip a leading locale prefix from a pathname.
 * `/es/learn/foo/` → { locale: 'es', path: '/learn/foo/' }
 * `/learn/foo/` → { locale: 'en', path: '/learn/foo/' }
 */
export function parseLocalePath(pathname: string): { locale: Locale; path: string } {
  const raw = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const parts = raw.split("/").filter(Boolean);
  if (parts.length > 0 && isLocale(parts[0]) && parts[0] !== DEFAULT_LOCALE) {
    const locale = parts[0] as Locale;
    const rest = "/" + parts.slice(1).join("/");
    return { locale, path: normalizePath(rest === "/" ? "/" : rest) };
  }
  return { locale: DEFAULT_LOCALE, path: normalizePath(raw) };
}

/**
 * Build a locale-aware URL path.
 * localePath('en', '/learn/') → '/learn/'
 * localePath('es', '/learn/') → '/es/learn/'
 * localePath('ja', '/#features') → '/ja/#features' (hash preserved if passed in path)
 */
export function localePath(locale: Locale, path: string): string {
  // Allow hash-only anchors relative to home
  let hash = "";
  let base = path;
  const hashIdx = path.indexOf("#");
  if (hashIdx >= 0) {
    hash = path.slice(hashIdx);
    base = path.slice(0, hashIdx) || "/";
  }

  let p = base || "/";
  if (!p.startsWith("/")) p = `/${p}`;

  // Home
  if (p === "/" || p === "") {
    if (locale === DEFAULT_LOCALE) return `/${hash}`;
    return `/${locale}/${hash}`;
  }

  // Ensure trailing slash for consistency with site convention (except hash-only)
  if (!p.endsWith("/")) p += "/";

  if (locale === DEFAULT_LOCALE) return `${p}${hash}`;
  return `/${locale}${p}${hash}`;
}

/** Absolute site URL for a locale + path. */
export function absoluteLocaleUrl(locale: Locale, path: string, site = "https://oleafly.com"): string {
  const rel = localePath(locale, path);
  if (rel === "/") return `${site}/`;
  return `${site}${rel}`;
}

/** hreflang alternate entries for a logical (unprefixed) path. */
export function hreflangAlternates(path: string, site = "https://oleafly.com") {
  return LOCALES.map((locale) => ({
    locale,
    hreflang: LOCALE_META[locale].lang,
    href: absoluteLocaleUrl(locale, path, site),
  }));
}

/** Short code shown in the switcher trigger (EN, ES, ZH…). */
export function localeShortCode(locale: Locale): string {
  if (locale === "pt-br") return "PT";
  if (locale === "zh-cn") return "ZH";
  if (locale === "zh-tw") return "TW";
  return locale.toUpperCase();
}
