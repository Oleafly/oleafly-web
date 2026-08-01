import { DEFAULT_LOCALE, LOCALES, type Locale } from "./locales";

/**
 * Map a BCP-47 language tag (or navigator.language) to an Oleafly locale.
 * Returns null if there is no supported match (caller should keep English).
 *
 * Order of specificity: exact code → language-region rules → bare language.
 * Never uses geo-IP — browser language only.
 */
export function matchBrowserLocale(
  tag: string | null | undefined,
): Locale | null {
  if (!tag || typeof tag !== "string") return null;
  const raw = tag.trim().replace(/_/g, "-").toLowerCase();
  if (!raw) return null;

  // Exact site code (zh-cn, pt-br, …)
  if ((LOCALES as readonly string[]).includes(raw)) {
    return raw as Locale;
  }

  const [lang, region] = raw.split("-");

  // Chinese: region / script decide simplified vs traditional
  if (lang === "zh") {
    // Hans → zh-cn; Hant / TW / HK / MO → zh-tw; default Hans (mainland + generic zh)
    if (region === "tw" || region === "hk" || region === "mo" || region === "hant") {
      return "zh-tw";
    }
    if (region === "cn" || region === "sg" || region === "hans" || !region) {
      return "zh-cn";
    }
    return "zh-cn";
  }

  // Portuguese: BR (and generic pt) → pt-br
  if (lang === "pt") {
    return "pt-br";
  }

  // Bare language equals a site locale (ja, ko, hi, es, …)
  if ((LOCALES as readonly string[]).includes(lang)) {
    return lang as Locale;
  }

  return null;
}

/**
 * Pick the first supported locale from navigator.languages-style list.
 * Skips English so we only "suggest" when the browser prefers something else.
 */
export function preferLocaleFromBrowserLanguages(
  languages: readonly string[] | null | undefined,
): Locale | null {
  if (!languages?.length) return null;
  for (const tag of languages) {
    const matched = matchBrowserLocale(tag);
    if (matched && matched !== DEFAULT_LOCALE) return matched;
  }
  return null;
}
