/**
 * Oleafly site locales. English is the default root locale (no URL prefix).
 * Other locales are served under `/{code}/…`.
 */
export const DEFAULT_LOCALE = "en" as const;

/** Order = language switcher order. English first, then major markets (CN/JA/KO), then others. */
const ALL_LOCALES = [
  "en",
  "zh-cn",
  "zh-tw",
  "ja",
  "ko",
  "es",
  "pt-br",
  "fr",
  "de",
  "hi",
  "it",
  "nl",
  "pl",
  "ru",
  "uk",
  "tr",
  "ar",
  "vi",
] as const;

export type Locale = (typeof ALL_LOCALES)[number];

/**
 * Locales temporarily hidden from the published site: no URL routes, no
 * language-switcher entries, no hreflang alternates, no browser-language
 * matching. Content and UI translations stay on disk untouched — delete a
 * code from this list to bring the locale back.
 */
export const HIDDEN_LOCALES: readonly Locale[] = ["it", "nl", "pl"];

/** Locales the site actually serves and links to (ALL_LOCALES minus hidden). */
export const LOCALES: readonly Locale[] = ALL_LOCALES.filter(
  (code) => !HIDDEN_LOCALES.includes(code),
);

export type LocaleMeta = {
  /** BCP-47 / HTML lang */
  lang: string;
  /** Native language name for the switcher */
  nativeLabel: string;
  /** English label (for accessibility / admin) */
  label: string;
  dir: "ltr" | "rtl";
  /** Intl locale for dates */
  dateLocale: string;
  /**
   * Flag emoji (decorative). Prefer `flagIso` + image for reliable cross-platform
   * rendering — Windows often cannot draw emoji flags.
   */
  flag: string;
  /** ISO 3166-1 alpha-2 country code for flag images (flagcdn.com). */
  flagIso: string;
};

/** Absolute flag image URL (PNG). Reliable on Windows/Linux where emoji flags fail. */
export function flagImageUrl(iso: string, width = 40): string {
  return `https://flagcdn.com/w${width}/${iso.toLowerCase()}.png`;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: {
    lang: "en",
    nativeLabel: "English",
    label: "English",
    dir: "ltr",
    dateLocale: "en-US",
    flag: "🇺🇸",
    flagIso: "us",
  },
  es: {
    lang: "es",
    nativeLabel: "Español",
    label: "Spanish",
    dir: "ltr",
    dateLocale: "es",
    flag: "🇪🇸",
    flagIso: "es",
  },
  "pt-br": {
    lang: "pt-BR",
    nativeLabel: "Português",
    label: "Portuguese (Brazil)",
    dir: "ltr",
    dateLocale: "pt-BR",
    flag: "🇧🇷",
    flagIso: "br",
  },
  fr: {
    lang: "fr",
    nativeLabel: "Français",
    label: "French",
    dir: "ltr",
    dateLocale: "fr",
    flag: "🇫🇷",
    flagIso: "fr",
  },
  de: {
    lang: "de",
    nativeLabel: "Deutsch",
    label: "German",
    dir: "ltr",
    dateLocale: "de",
    flag: "🇩🇪",
    flagIso: "de",
  },
  it: {
    lang: "it",
    nativeLabel: "Italiano",
    label: "Italian",
    dir: "ltr",
    dateLocale: "it",
    flag: "🇮🇹",
    flagIso: "it",
  },
  nl: {
    lang: "nl",
    nativeLabel: "Nederlands",
    label: "Dutch",
    dir: "ltr",
    dateLocale: "nl",
    flag: "🇳🇱",
    flagIso: "nl",
  },
  pl: {
    lang: "pl",
    nativeLabel: "Polski",
    label: "Polish",
    dir: "ltr",
    dateLocale: "pl",
    flag: "🇵🇱",
    flagIso: "pl",
  },
  ru: {
    lang: "ru",
    nativeLabel: "Русский",
    label: "Russian",
    dir: "ltr",
    dateLocale: "ru",
    flag: "🇷🇺",
    flagIso: "ru",
  },
  uk: {
    lang: "uk",
    nativeLabel: "Українська",
    label: "Ukrainian",
    dir: "ltr",
    dateLocale: "uk",
    flag: "🇺🇦",
    flagIso: "ua",
  },
  tr: {
    lang: "tr",
    nativeLabel: "Türkçe",
    label: "Turkish",
    dir: "ltr",
    dateLocale: "tr",
    flag: "🇹🇷",
    flagIso: "tr",
  },
  ar: {
    lang: "ar",
    nativeLabel: "العربية",
    label: "Arabic",
    dir: "rtl",
    dateLocale: "ar",
    flag: "🇸🇦",
    flagIso: "sa",
  },
  hi: {
    lang: "hi",
    nativeLabel: "हिन्दी",
    label: "Hindi",
    dir: "ltr",
    dateLocale: "hi",
    flag: "🇮🇳",
    flagIso: "in",
  },
  "zh-cn": {
    lang: "zh-CN",
    nativeLabel: "简体中文",
    label: "Chinese (Simplified)",
    dir: "ltr",
    dateLocale: "zh-CN",
    flag: "🇨🇳",
    flagIso: "cn",
  },
  "zh-tw": {
    lang: "zh-TW",
    nativeLabel: "繁體中文",
    label: "Chinese (Traditional)",
    dir: "ltr",
    dateLocale: "zh-TW",
    flag: "🇹🇼",
    flagIso: "tw",
  },
  ja: {
    lang: "ja",
    nativeLabel: "日本語",
    label: "Japanese",
    dir: "ltr",
    dateLocale: "ja",
    flag: "🇯🇵",
    flagIso: "jp",
  },
  ko: {
    lang: "ko",
    nativeLabel: "한국어",
    label: "Korean",
    dir: "ltr",
    dateLocale: "ko",
    flag: "🇰🇷",
    flagIso: "kr",
  },
  vi: {
    lang: "vi",
    nativeLabel: "Tiếng Việt",
    label: "Vietnamese",
    dir: "ltr",
    dateLocale: "vi",
    flag: "🇻🇳",
    flagIso: "vn",
  },
};

/** Locales that appear as a URL prefix (everything except English). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Starlight / Astro locale config object (root = English). */
export function starlightLocales() {
  const locales: Record<
    string,
    { label: string; lang?: string; dir?: "rtl" | "ltr" }
  > = {
    root: {
      label: LOCALE_META.en.nativeLabel,
      lang: LOCALE_META.en.lang,
    },
  };
  for (const code of PREFIXED_LOCALES) {
    const m = LOCALE_META[code];
    locales[code] = {
      label: m.nativeLabel,
      lang: m.lang,
      ...(m.dir === "rtl" ? { dir: "rtl" as const } : {}),
    };
  }
  return locales;
}
