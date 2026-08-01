import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  isLocale,
  PREFIXED_LOCALES,
  type Locale,
} from "../locales";
import {
  absoluteLocaleUrl,
  hreflangAlternates,
  localePath,
  normalizePath,
  parseLocalePath,
} from "../paths";
import {
  entriesForLocale,
  entryLocale,
  entryMatchesLocale,
  entrySlug,
  isFallbackEntry,
} from "../content";
import { t } from "../t";
import { en, type UiKey } from "../ui/en";
import { dictionaries } from "../ui/index";

describe("locales", () => {
  it("includes English as default and CJK locales", () => {
    expect(DEFAULT_LOCALE).toBe("en");
    expect(LOCALES).toContain("en");
    expect(LOCALES).toContain("zh-cn");
    expect(LOCALES).toContain("ja");
    expect(LOCALES).toContain("ko");
    expect(LOCALES).toContain("es");
  });

  it("gives every locale a flag image ISO, emoji, and native label", () => {
    for (const code of LOCALES) {
      const meta = LOCALE_META[code];
      // Regional-indicator flag pairs (e.g. 🇺🇸) or other emoji
      expect(meta.flag.length, code).toBeGreaterThanOrEqual(2);
      expect(meta.flag, code).not.toMatch(/^[A-Za-z]{2}$/);
      // Image flags (flagcdn) — required for Windows/Linux where emoji flags fail
      expect(meta.flagIso, code).toMatch(/^[a-z]{2}$/);
      expect(meta.nativeLabel.length).toBeGreaterThan(0);
      expect(meta.lang.length).toBeGreaterThan(0);
      expect(["ltr", "rtl"]).toContain(meta.dir);
    }
  });

  it("uses country-associated flags for CJK", () => {
    expect(LOCALE_META["zh-cn"].flag).toBe("🇨🇳");
    expect(LOCALE_META["zh-cn"].flagIso).toBe("cn");
    expect(LOCALE_META.ja.flag).toBe("🇯🇵");
    expect(LOCALE_META.ja.flagIso).toBe("jp");
    expect(LOCALE_META.ko.flag).toBe("🇰🇷");
    expect(LOCALE_META.ko.flagIso).toBe("kr");
  });

  it("isLocale accepts only known codes", () => {
    expect(isLocale("ja")).toBe(true);
    expect(isLocale("zh-cn")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("xx")).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it("prefixes every non-English locale", () => {
    expect(PREFIXED_LOCALES).not.toContain("en");
    expect(PREFIXED_LOCALES).toContain("ja");
    expect(PREFIXED_LOCALES.length).toBe(LOCALES.length - 1);
  });
});

describe("paths", () => {
  it("normalizePath forces leading and trailing slashes", () => {
    expect(normalizePath("learn")).toBe("/learn/");
    expect(normalizePath("/learn")).toBe("/learn/");
    expect(normalizePath("/")).toBe("/");
  });

  it("localePath leaves English unprefixed and prefixes others", () => {
    expect(localePath("en", "/learn/")).toBe("/learn/");
    expect(localePath("ja", "/learn/")).toBe("/ja/learn/");
    expect(localePath("zh-cn", "/tools/")).toBe("/zh-cn/tools/");
    expect(localePath("ko", "/")).toBe("/ko/");
    expect(localePath("en", "/")).toBe("/");
  });

  it("localePath preserves hash anchors", () => {
    expect(localePath("ja", "/#features")).toBe("/ja/#features");
    expect(localePath("en", "/docs/overview/#install")).toBe(
      "/docs/overview/#install",
    );
  });

  it("parseLocalePath strips known locale prefixes", () => {
    expect(parseLocalePath("/ja/learn/foo/")).toEqual({
      locale: "ja",
      path: "/learn/foo/",
    });
    expect(parseLocalePath("/zh-cn/")).toEqual({
      locale: "zh-cn",
      path: "/",
    });
    expect(parseLocalePath("/learn/")).toEqual({
      locale: "en",
      path: "/learn/",
    });
    // "en" is never a URL prefix
    expect(parseLocalePath("/en/learn/").locale).toBe("en");
  });

  it("hreflangAlternates covers every locale", () => {
    const alts = hreflangAlternates("/blog/");
    expect(alts).toHaveLength(LOCALES.length);
    const ja = alts.find((a) => a.locale === "ja");
    expect(ja?.hreflang).toBe("ja");
    expect(ja?.href).toBe("https://oleafly.com/ja/blog/");
    const en = alts.find((a) => a.locale === "en");
    expect(en?.href).toBe("https://oleafly.com/blog/");
  });

  it("absoluteLocaleUrl joins site + path", () => {
    expect(absoluteLocaleUrl("ko", "/privacy/", "https://example.com")).toBe(
      "https://example.com/ko/privacy/",
    );
  });
});

describe("content entries", () => {
  it("parses locale-prefixed and root ids", () => {
    expect(entryLocale("hello")).toBe("en");
    expect(entryLocale("es/hello")).toBe("es");
    expect(entryLocale("zh-cn/hello")).toBe("zh-cn");
    expect(entryLocale("ja/foo/bar")).toBe("ja");
    expect(entrySlug("es/hello")).toBe("hello");
    expect(entrySlug("hello")).toBe("hello");
    expect(entrySlug("zh-cn/a/b")).toBe("a/b");
  });

  it("does not treat unknown prefixes as locales", () => {
    expect(entryLocale("not-a-locale/x")).toBe("en");
    expect(entrySlug("not-a-locale/x")).toBe("not-a-locale/x");
  });

  it("entriesForLocale prefers translation then falls back to English", () => {
    const all = [
      { id: "alpha" },
      { id: "beta" },
      { id: "ja/alpha" },
      { id: "es/beta" },
    ];
    const ja = entriesForLocale(all, "ja");
    expect(ja.entries.map((e) => e.id).sort()).toEqual(["beta", "ja/alpha"]);
    expect(ja.fallbackIds.has("beta")).toBe(true);
    expect(ja.fallbackIds.has("alpha")).toBe(false);

    const en = entriesForLocale(all, "en");
    expect(en.entries.map((e) => e.id).sort()).toEqual(["alpha", "beta"]);
    expect(en.fallbackIds.size).toBe(0);
  });

  it("isFallbackEntry and entryMatchesLocale", () => {
    const { fallbackIds } = entriesForLocale(
      [{ id: "a" }, { id: "ja/b" }],
      "ja",
    );
    expect(isFallbackEntry("a", "ja", fallbackIds)).toBe(true);
    expect(isFallbackEntry("ja/b", "ja", fallbackIds)).toBe(false);
    expect(entryMatchesLocale("ja/b", "ja")).toBe(true);
    expect(entryMatchesLocale("a", "ja")).toBe(false);
  });
});

describe("t() and dictionaries", () => {
  it("returns English for default locale", () => {
    expect(t("en", "nav.learn")).toBe(en["nav.learn"]);
    expect(t("en", "landing.h1.write")).toBe("Write");
  });

  it("interpolates variables", () => {
    expect(t("en", "common.readingTime", { n: 5 })).toBe("5 min read");
    expect(t("ja", "common.readingTime", { n: 3 })).toContain("3");
  });

  it("falls back to English for missing keys / bad locale", () => {
    expect(t("xx" as Locale, "nav.learn")).toBe(en["nav.learn"]);
    expect(t(undefined, "nav.learn")).toBe(en["nav.learn"]);
  });

  it("localizes CJK landing main content differently from English", () => {
    for (const locale of ["zh-cn", "ja", "ko"] as const) {
      expect(t(locale, "landing.lede")).not.toBe(en["landing.lede"]);
      expect(t(locale, "landing.library.h2")).not.toBe(en["landing.library.h2"]);
      expect(t(locale, "landing.ai.h2")).not.toBe(en["landing.ai.h2"]);
      expect(t(locale, "landing.privacy.h2")).not.toBe(
        en["landing.privacy.h2"],
      );
      expect(t(locale, "landing.dl.h2")).not.toBe(en["landing.dl.h2"]);
      // flags of real translation: non-ASCII
      expect(t(locale, "landing.lede")).toMatch(/[^\u0000-\u007f]/);
    }
  });

  it("localizes Spanish landing sections (generated overrides)", () => {
    expect(t("es", "landing.lede")).not.toBe(en["landing.lede"]);
    expect(t("es", "landing.h1.write")).toMatch(/Escribe|escrib/i);
  });

  it("keeps technical tokens untranslated in CJK copy", () => {
    for (const locale of ["zh-cn", "ja", "ko"] as const) {
      const lede = t(locale, "landing.lede");
      expect(lede).toMatch(/LaTeX/);
      expect(lede).toMatch(/Typst|Markdown|Git/);
      expect(t(locale, "landing.chip3")).toMatch(/LaTeX/);
    }
  });

  it("covers critical landing keys for zh-cn, ja, ko", () => {
    const critical: UiKey[] = [
      "landing.title",
      "landing.description",
      "landing.lede",
      "landing.h1.write",
      "landing.h1.likeCode",
      "landing.heroRotate1",
      "landing.library.h2",
      "landing.git.h2",
      "landing.ai.h2",
      "landing.preflight.h2",
      "landing.resume.h2",
      "landing.privacy.h2",
      "landing.loop.h2",
      "landing.craft.h2",
      "landing.dl.h2",
      "tools.h1",
      "tools.bibtex.fullName",
    ];
    for (const locale of ["zh-cn", "ja", "ko"] as const) {
      const dict = dictionaries[locale];
      for (const key of critical) {
        expect(dict[key], `${locale}:${key}`).toBeTruthy();
        expect(dict[key], `${locale}:${key}`).not.toBe(en[key]);
      }
    }
  });

  it("every dictionary has every English key (merge completeness)", () => {
    const keys = Object.keys(en) as UiKey[];
    for (const locale of LOCALES) {
      const dict = dictionaries[locale];
      for (const key of keys) {
        expect(typeof dict[key], `${locale}:${key}`).toBe("string");
        expect(dict[key].length, `${locale}:${key}`).toBeGreaterThan(0);
      }
    }
  });
});
