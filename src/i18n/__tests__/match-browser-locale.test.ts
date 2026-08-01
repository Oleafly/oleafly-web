import { describe, expect, it } from "vitest";
import {
  matchBrowserLocale,
  preferLocaleFromBrowserLanguages,
} from "../match-browser-locale";

describe("matchBrowserLocale", () => {
  it("maps Chinese variants", () => {
    expect(matchBrowserLocale("zh-CN")).toBe("zh-cn");
    expect(matchBrowserLocale("zh-Hans")).toBe("zh-cn");
    expect(matchBrowserLocale("zh")).toBe("zh-cn");
    expect(matchBrowserLocale("zh-TW")).toBe("zh-tw");
    expect(matchBrowserLocale("zh-HK")).toBe("zh-tw");
    expect(matchBrowserLocale("zh-Hant")).toBe("zh-tw");
  });

  it("maps common languages", () => {
    expect(matchBrowserLocale("ja")).toBe("ja");
    expect(matchBrowserLocale("ja-JP")).toBe("ja");
    expect(matchBrowserLocale("ko-KR")).toBe("ko");
    expect(matchBrowserLocale("hi-IN")).toBe("hi");
    expect(matchBrowserLocale("es-MX")).toBe("es");
    expect(matchBrowserLocale("pt-BR")).toBe("pt-br");
    expect(matchBrowserLocale("pt")).toBe("pt-br");
    expect(matchBrowserLocale("de-DE")).toBe("de");
  });

  it("returns null for English and unknown", () => {
    expect(matchBrowserLocale("en")).toBe("en"); // exact site code
    expect(matchBrowserLocale("en-US")).toBe("en");
    expect(matchBrowserLocale("xx-YY")).toBe(null);
    expect(matchBrowserLocale("")).toBe(null);
  });
});

describe("preferLocaleFromBrowserLanguages", () => {
  it("picks first non-English supported locale", () => {
    expect(preferLocaleFromBrowserLanguages(["en-US", "zh-CN", "ja"])).toBe(
      "zh-cn",
    );
    expect(preferLocaleFromBrowserLanguages(["en", "en-GB"])).toBe(null);
    expect(preferLocaleFromBrowserLanguages(["fr-FR", "en"])).toBe("fr");
  });

  it("does not use country — only language tags", () => {
    // Hindi only if browser says hi, not because "India"
    expect(preferLocaleFromBrowserLanguages(["en-IN"])).toBe(null);
    expect(preferLocaleFromBrowserLanguages(["hi-IN"])).toBe("hi");
  });
});
