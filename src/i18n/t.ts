import { DEFAULT_LOCALE, type Locale } from "./locales";
import { en, type UiDict, type UiKey } from "./ui/en";
import { dictionaries } from "./ui/index";

/**
 * Translate a UI key for a locale. Falls back to English if the key is missing.
 * Supports simple `{name}` interpolation.
 */
export function t(
  locale: Locale | string | undefined,
  key: UiKey | string,
  vars?: Record<string, string | number>,
): string {
  const loc = (locale && locale in dictionaries ? locale : DEFAULT_LOCALE) as Locale;
  const dict: UiDict = dictionaries[loc] ?? en;
  let s: string = (dict as Record<string, string>)[key] ?? (en as Record<string, string>)[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}

export function getDict(locale: Locale | string | undefined): UiDict {
  const loc = (locale && locale in dictionaries ? locale : DEFAULT_LOCALE) as Locale;
  return dictionaries[loc] ?? en;
}
