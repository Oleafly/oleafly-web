import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";

/**
 * Content entry ids are either:
 *   - `my-slug`                 → English (default)
 *   - `es/my-slug`              → Spanish
 *   - `zh-cn/my-slug`           → Simplified Chinese
 */
export function entryLocale(id: string): Locale {
  const slash = id.indexOf("/");
  if (slash === -1) return DEFAULT_LOCALE;
  const maybe = id.slice(0, slash);
  return isLocale(maybe) && maybe !== DEFAULT_LOCALE ? maybe : DEFAULT_LOCALE;
}

export function entrySlug(id: string): string {
  const slash = id.indexOf("/");
  if (slash === -1) return id;
  const maybe = id.slice(0, slash);
  if (isLocale(maybe) && maybe !== DEFAULT_LOCALE) return id.slice(slash + 1);
  return id;
}

/** True if this entry belongs to the given locale (including English root ids). */
export function entryMatchesLocale(id: string, locale: Locale): boolean {
  return entryLocale(id) === locale;
}

type HasId = { id: string };

/**
 * Pick collection entries for a locale. If a slug has no translation,
 * fall back to the English entry (so every page is reachable in every language).
 */
export function entriesForLocale<T extends HasId>(
  all: T[],
  locale: Locale,
): { entries: T[]; fallbackIds: Set<string> } {
  const bySlug = new Map<string, { preferred?: T; en?: T }>();

  for (const e of all) {
    const loc = entryLocale(e.id);
    const slug = entrySlug(e.id);
    const bucket = bySlug.get(slug) ?? {};
    if (loc === DEFAULT_LOCALE) bucket.en = e;
    if (loc === locale) bucket.preferred = e;
    bySlug.set(slug, bucket);
  }

  const entries: T[] = [];
  const fallbackIds = new Set<string>();

  for (const [, bucket] of bySlug) {
    if (locale === DEFAULT_LOCALE) {
      if (bucket.en) entries.push(bucket.en);
      continue;
    }
    if (bucket.preferred) {
      entries.push(bucket.preferred);
    } else if (bucket.en) {
      entries.push(bucket.en);
      fallbackIds.add(bucket.en.id);
    }
  }

  return { entries, fallbackIds };
}

export function isFallbackEntry(id: string, locale: Locale, fallbackIds: Set<string>): boolean {
  if (locale === DEFAULT_LOCALE) return false;
  return fallbackIds.has(id) || entryLocale(id) === DEFAULT_LOCALE;
}
