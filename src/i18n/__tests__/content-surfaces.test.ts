import { readdirSync, existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import catalog from "../template-catalog.generated.json";
import { localizeTemplate, localizePack } from "../template-catalog";
import { t } from "../t";

const root = path.resolve(import.meta.dirname, "../../..");

describe("learn content locales (ja/ko/zh-cn)", () => {
  for (const locale of ["ja", "ko", "zh-cn"] as const) {
    it(`has translated titles for all English learn lessons (${locale})`, () => {
      const enDir = path.join(root, "src/content/learn");
      const locDir = path.join(enDir, locale);
      const enFiles = readdirSync(enDir).filter((f) => f.endsWith(".md"));
      expect(enFiles.length).toBeGreaterThan(100);
      expect(existsSync(locDir)).toBe(true);
      const locFiles = readdirSync(locDir).filter((f) => f.endsWith(".md"));
      expect(locFiles.length).toBe(enFiles.length);

      // Spot-check a few known lessons are not still English titles
      const sample = readFileSync(path.join(locDir, "first-document.md"), "utf8");
      expect(sample).toMatch(/^title:\s*"/m);
      expect(sample).not.toMatch(/title:\s*"Compile your first PDF"/);
    });
  }
});

describe("blog content locales (ja/ko/zh-cn)", () => {
  for (const locale of ["ja", "ko", "zh-cn"] as const) {
    it(`has all blog posts for ${locale}`, () => {
      const en = readdirSync(path.join(root, "src/content/blog")).filter((f) =>
        f.endsWith(".md"),
      );
      const loc = readdirSync(path.join(root, "src/content/blog", locale)).filter(
        (f) => f.endsWith(".md"),
      );
      expect(loc.length).toBe(en.length);
    });
  }

  it("localized blog posts use non-English titles", () => {
    for (const locale of ["ja", "ko", "zh-cn"] as const) {
      const body = readFileSync(
        path.join(root, `src/content/blog/${locale}/git-for-research-papers.md`),
        "utf8",
      );
      expect(body).not.toMatch(
        /title:\s*"Git for research papers: you don't need to be a software engineer"/,
      );
      // Prefer full body translation when present
      const afterFm = body.split("---")[2] ?? "";
      if (!/Researchers already use Git for code/.test(afterFm)) {
        expect(afterFm).toMatch(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/);
      }
    }
  });
});

describe("template catalog", () => {
  it("covers ja/ko/zh-cn packs and templates", () => {
    for (const locale of ["ja", "ko", "zh-cn"] as const) {
      const block = (catalog as Record<string, { packs: object; templates: object }>)[
        locale
      ];
      expect(block, locale).toBeTruthy();
      expect(Object.keys(block.packs).length).toBeGreaterThanOrEqual(11);
      expect(Object.keys(block.templates).length).toBeGreaterThanOrEqual(100);
    }
  });

  it("localizeTemplate returns non-English names for CJK", () => {
    const ja = localizeTemplate("ja", "grant-proposal", {
      name: "Grant Proposal",
      description: "A funding proposal",
      category: "Theses & Reports",
    });
    expect(ja.name).not.toBe("Grant Proposal");
    expect(ja.name.length).toBeGreaterThan(0);

    const pack = localizePack("zh-cn", "cv-collection", {
      label: "CV & resume style collection",
      description: "x",
    });
    expect(pack.label).not.toBe("CV & resume style collection");
  });

  it("templates UI chrome is localized", () => {
    expect(t("ja", "templates.filterPack")).not.toBe(t("en", "templates.filterPack"));
    expect(t("ko", "templates.allTemplates")).not.toBe(
      t("en", "templates.allTemplates"),
    );
    expect(t("zh-cn", "learn.allTracks")).not.toBe(t("en", "learn.allTracks"));
  });
});
