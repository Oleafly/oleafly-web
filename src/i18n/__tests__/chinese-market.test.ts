import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { t } from "../t";
import { en } from "../ui/en";
import { dictionaries } from "../ui/index";
import catalog from "../template-catalog.generated.json";

const root = path.resolve(import.meta.dirname, "../../..");

describe("Chinese market (zh-cn + zh-tw)", () => {
  for (const locale of ["zh-cn", "zh-tw"] as const) {
    it(`${locale} landing hero differs from English`, () => {
      expect(t(locale, "landing.lede")).not.toBe(en["landing.lede"]);
      expect(t(locale, "landing.pill")).not.toBe(en["landing.pill"]);
      expect(t(locale, "landing.h1.write")).not.toBe(en["landing.h1.write"]);
      expect(t(locale, "landing.bento.import.name")).not.toBe(
        en["landing.bento.import.name"],
      );
      expect(t(locale, "landing.library.h2")).not.toBe(en["landing.library.h2"]);
      expect(t(locale, "landing.ai.h2")).not.toBe(en["landing.ai.h2"]);
      // CJK script present
      expect(t(locale, "landing.lede")).toMatch(/[\u4e00-\u9fff]/);
    });

    it(`${locale} keeps product tokens in landing copy`, () => {
      const lede = t(locale, "landing.lede");
      expect(lede).toMatch(/LaTeX/);
      expect(lede).toMatch(/Git|Markdown|Typst/);
    });

    it(`${locale} dictionary covers all English keys`, () => {
      const dict = dictionaries[locale];
      for (const key of Object.keys(en) as (keyof typeof en)[]) {
        expect(typeof dict[key], `${locale}:${key}`).toBe("string");
        expect(dict[key].length, `${locale}:${key}`).toBeGreaterThan(0);
      }
    });
  }

  it("Simplified vs Traditional differ on key strings", () => {
    // 撰写 vs 撰寫, 免费 vs 免費
    expect(t("zh-cn", "landing.h1.write")).toBe("撰写");
    expect(t("zh-tw", "landing.h1.write")).toBe("撰寫");
    expect(t("zh-cn", "landing.pill")).toMatch(/免费/);
    expect(t("zh-tw", "landing.pill")).toMatch(/免費/);
  });

  it("has learn + blog content for both Chinese locales", () => {
    for (const locale of ["zh-cn", "zh-tw"] as const) {
      const learnDir = path.join(root, "src/content/learn", locale);
      const blogDir = path.join(root, "src/content/blog", locale);
      expect(existsSync(learnDir)).toBe(true);
      expect(existsSync(blogDir)).toBe(true);
      const learn = readdirSync(learnDir).filter((f) => f.endsWith(".md"));
      const blog = readdirSync(blogDir).filter((f) => f.endsWith(".md"));
      expect(learn.length).toBeGreaterThanOrEqual(139);
      expect(blog.length).toBe(19);
      const first = readFileSync(path.join(learnDir, "first-document.md"), "utf8");
      expect(first).not.toMatch(/title:\s*"Compile your first PDF"/);
    }
  });

  it("template catalog covers zh-cn and zh-tw", () => {
    for (const locale of ["zh-cn", "zh-tw"] as const) {
      const block = (catalog as Record<string, { templates: object; packs: object }>)[
        locale
      ];
      expect(block, locale).toBeTruthy();
      expect(Object.keys(block.templates).length).toBeGreaterThanOrEqual(100);
      expect(Object.keys(block.packs).length).toBeGreaterThanOrEqual(11);
    }
  });
});
