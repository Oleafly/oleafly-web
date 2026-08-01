/**
 * Track i18n coverage across UI strings, learn/blog content, and template catalog.
 *
 *   node scripts/i18n-coverage.mjs
 *   node scripts/i18n-coverage.mjs --markdown
 *   node scripts/i18n-coverage.mjs --json
 *   node scripts/i18n-coverage.mjs --fail-under=80   # exit 1 if any target locale UI < 80%
 */
import { readdirSync, readFileSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const asMd = args.includes("--markdown");
const asJson = args.includes("--json");
const writeReadme = args.includes("--write-readme");
const failUnderArg = args.find((a) => a.startsWith("--fail-under="));
const FAIL_UNDER = failUnderArg ? Number(failUnderArg.split("=")[1]) : null;

/** All non-English locales — ship bar is 100% composite on every one. */
const TARGET_LOCALES = [
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
];

function loadEnKeys() {
  const raw = readFileSync(path.join(root, "src/i18n/ui/en.ts"), "utf8");
  const en = {};
  const re = /"([^"]+)":\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(raw))) {
    en[m[1]] = m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n").replace(/\\u00b7/g, "·");
  }
  const re2 = /"([^"]+)":\s*\n\s*"((?:\\.|[^"\\])*)"/g;
  while ((m = re2.exec(raw))) {
    if (!en[m[1]]) en[m[1]] = m[2].replace(/\\"/g, '"');
  }
  return en;
}

function loadGenerated() {
  const p = path.join(root, "src/i18n/ui/generated.ts");
  if (!existsSync(p)) return {};
  const src = readFileSync(p, "utf8");
  const out = {};
  const re = /\n  ("?[a-z0-9-]+"?):\s*\{/g;
  let m;
  const starts = [];
  while ((m = re.exec(src))) {
    starts.push({ code: m[1].replace(/"/g, ""), index: m.index + m[0].length });
  }
  for (const { code, index: bodyStart } of starts) {
    let depth = 1,
      j = bodyStart;
    while (j < src.length && depth > 0) {
      if (src[j] === "{") depth++;
      else if (src[j] === "}") depth--;
      j++;
    }
    const body = src.slice(bodyStart, j - 1);
    const dict = {};
    const pairRe = /"((?:\\.|[^"\\])*)":\s*"((?:\\.|[^"\\])*)"/g;
    let pm;
    while ((pm = pairRe.exec(body))) {
      try {
        dict[JSON.parse(`"${pm[1]}"`)] = JSON.parse(`"${pm[2]}"`);
      } catch {
        dict[pm[1]] = pm[2];
      }
    }
    out[code] = dict;
  }
  return out;
}

/**
 * Parse hand-written locale partials from ui/index.ts (const es = d({ ... })).
 * Returns Record<locale, Partial<dict>>. Best-effort for coverage counting.
 */
function loadIndexHandOverrides() {
  const p = path.join(root, "src/i18n/ui/index.ts");
  if (!existsSync(p)) return {};
  const src = readFileSync(p, "utf8");
  const out = {};
  // Map const names to locale codes
  const nameToLoc = {
    es: "es",
    ptBr: "pt-br",
    fr: "fr",
    de: "de",
    it: "it",
    nl: "nl",
    pl: "pl",
    ru: "ru",
    uk: "uk",
    tr: "tr",
    ar: "ar",
    hi: "hi",
    zhCn: "zh-cn",
    zhTw: "zh-tw",
    ja: "ja",
    ko: "ko",
    vi: "vi",
  };
  for (const [name, loc] of Object.entries(nameToLoc)) {
    const re = new RegExp(
      `const ${name}\\s*=\\s*d\\(\\{([\\s\\S]*?)\\}\\s*\\);`,
    );
    const m = src.match(re);
    if (!m) continue;
    const body = m[1];
    const dict = {};
    const pairRe = /"((?:\\.|[^"\\])*)":\s*"((?:\\.|[^"\\])*)"/g;
    let pm;
    while ((pm = pairRe.exec(body))) {
      try {
        dict[JSON.parse(`"${pm[1]}"`)] = JSON.parse(`"${pm[2]}"`);
      } catch {
        /* skip */
      }
    }
    out[loc] = dict;
  }
  return out;
}

function hasLocaleScript(text, locale) {
  if (!text) return false;
  if (locale.startsWith("zh") || locale === "ja") {
    return /[\u4e00-\u9fff]/.test(text);
  }
  if (locale === "ko") return /[\uac00-\ud7af]/.test(text);
  if (locale === "hi") return /[\u0900-\u097f]/.test(text);
  if (locale === "ar") return /[\u0600-\u06ff]/.test(text);
  if (locale === "ru" || locale === "uk") return /[\u0400-\u04ff]/.test(text);
  // Latin locales: not equal to English-looking sole ASCII? Check common stopwords
  if (["es", "pt-br", "fr", "de", "it", "nl", "pl", "tr", "vi"].includes(locale)) {
    // translated if contains non-ascii or locale-specific words and isn't pure EN sample
    if (/[^\x00-\x7f]/.test(text)) return true;
    const markers = {
      es: /\b(el|la|los|las|para|con|una|que|del)\b/i,
      "pt-br": /\b(para|com|uma|não|você)\b/i,
      fr: /\b(les|des|pour|avec|une|dans)\b/i,
      de: /\b(und|der|die|das|für|mit|nicht)\b/i,
      it: /\b(per|con|una|che|del|non)\b/i,
      nl: /\b(van|voor|met|een|niet|het)\b/i,
      pl: /\b(nie|dla|jest|się|oraz)\b/i,
      tr: /\b(bir|için|ile|ve|değil)\b/i,
      vi: /\b(của|và|cho|với|không)\b/i,
    };
    return markers[locale] ? markers[locale].test(text) : false;
  }
  return false;
}

function enLearnFiles() {
  return readdirSync(path.join(root, "src/content/learn")).filter((f) => f.endsWith(".md"));
}
function enBlogFiles() {
  return readdirSync(path.join(root, "src/content/blog")).filter((f) => f.endsWith(".md"));
}

function contentCoverage(collection, locale, files) {
  const dir = path.join(root, "src/content", collection, locale);
  if (!existsSync(dir)) {
    return {
      files: 0,
      expected: files.length,
      metaTranslated: 0,
      bodyTranslated: 0,
      metaPct: 0,
      bodyPct: 0,
    };
  }
  let meta = 0,
    body = 0;
  for (const file of files) {
    const p = path.join(dir, file);
    if (!existsSync(p)) continue;
    const raw = readFileSync(p, "utf8");
    const parts = raw.split("---");
    const fm = parts[1] || "";
    const bodyText = parts.slice(2).join("---");
    const titleM = fm.match(/title:\s*["']?(.+?)["']?\s*$/m);
    const title = titleM ? titleM[1].replace(/^["']|["']$/g, "") : "";
    // EN title from source
    const enRaw = readFileSync(path.join(root, "src/content", collection, file), "utf8");
    const enFm = enRaw.split("---")[1] || "";
    const enTitleM = enFm.match(/title:\s*["']?(.+?)["']?\s*$/m);
    const enTitle = enTitleM ? enTitleM[1].replace(/^["']|["']$/g, "") : "";
    if (title && title !== enTitle) meta++;
    else if (hasLocaleScript(title, locale)) meta++;

    if (hasLocaleScript(bodyText, locale)) body++;
  }
  const n = files.length;
  return {
    files: readdirSync(dir).filter((f) => f.endsWith(".md")).length,
    expected: n,
    metaTranslated: meta,
    bodyTranslated: body,
    metaPct: n ? Math.round((meta / n) * 1000) / 10 : 0,
    bodyPct: n ? Math.round((body / n) * 1000) / 10 : 0,
  };
}

function templateCoverage(locale) {
  const p = path.join(root, "src/i18n/template-catalog.generated.json");
  if (!existsSync(p)) return { packs: 0, templates: 0, packPct: 0, templatePct: 0 };
  const cat = JSON.parse(readFileSync(p, "utf8"));
  const block = cat[locale];
  if (!block) return { packs: 0, templates: 0, packPct: 0, templatePct: 0 };
  const packs = Object.keys(block.packs || {}).length;
  const templates = Object.keys(block.templates || {}).length;
  // expected from data
  const data = JSON.parse(readFileSync(path.join(root, "src/data/template-packs.json"), "utf8"));
  const expPacks = data.packs.length;
  const expTpl = data.packs.reduce((n, p) => n + p.templates.length, 0);
  return {
    packs,
    templates,
    expectedPacks: expPacks,
    expectedTemplates: expTpl,
    packPct: expPacks ? Math.round((packs / expPacks) * 1000) / 10 : 0,
    templatePct: expTpl ? Math.round((templates / expTpl) * 1000) / 10 : 0,
  };
}

/** Brand / product tokens intentionally identical across locales. */
function isBrandOrTechOnly(s) {
  if (!s) return false;
  const t = s.trim();
  return (
    /^(Oleafly|GitHub|RSS|LaTeX|Typst|Markdown|BibTeX|KaTeX|SyncTeX|MCP|PDF|DOI|arXiv|AGPL-3\.0|FAQ)$/i.test(
      t,
    ) ||
    /^LaTeX\s*[·+]\s*Typst\s*[·+]\s*Markdown$/i.test(t) ||
    /^LaTeX \+ Typst \+ Markdown$/i.test(t)
  );
}

function uiCoverage(en, generated, hand, locale) {
  const keys = Object.keys(en);
  let translated = 0;
  let missing = 0;
  const stillEnglish = [];
  const merged = { ...(hand[locale] || {}), ...(generated[locale] || {}) };
  for (const k of keys) {
    const v = merged[k];
    if (v && v !== en[k]) {
      translated++;
    } else if (isBrandOrTechOnly(en[k])) {
      // Same string as English by design (brand/tech)
      translated++;
    } else {
      missing++;
      if (stillEnglish.length < 8) stillEnglish.push(k);
    }
  }
  return {
    total: keys.length,
    translated,
    missing,
    pct: keys.length ? Math.round((translated / keys.length) * 1000) / 10 : 0,
    sampleMissing: stillEnglish,
  };
}

function pctBar(pct, width = 12) {
  const filled = Math.round((pct / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

function buildReport() {
  const en = loadEnKeys();
  const generated = loadGenerated();
  const hand = loadIndexHandOverrides();
  const learnFiles = enLearnFiles();
  const blogFiles = enBlogFiles();

  // All locales from locales.ts
  const localesRaw = readFileSync(path.join(root, "src/i18n/locales.ts"), "utf8");
  const locales = [...localesRaw.matchAll(/"([a-z]{2}(?:-[a-z]+)?)"/g)]
    .map((m) => m[1])
    .filter((l, i, a) => a.indexOf(l) === i && l !== "en");

  const byLocale = {};
  for (const locale of locales) {
    byLocale[locale] = {
      ui: uiCoverage(en, generated, hand, locale),
      learn: contentCoverage("learn", locale, learnFiles),
      blog: contentCoverage("blog", locale, blogFiles),
      templates: templateCoverage(locale),
    };
  }

  // Overall for targets
  const targets = TARGET_LOCALES.filter((l) => locales.includes(l));
  const summary = {
    generatedAt: new Date().toISOString(),
    enUiKeys: Object.keys(en).length,
    enLearn: learnFiles.length,
    enBlog: blogFiles.length,
    locales: locales.length + 1, // +en
    switcherIncludesChinese: locales.includes("zh-cn") && locales.includes("zh-tw"),
    byLocale,
    targets,
  };

  // Composite score per target: weighted UI 40%, learn meta 15%, learn body 20%, blog meta 10%, blog body 10%, templates 5%
  for (const locale of locales) {
    const r = byLocale[locale];
    const score =
      r.ui.pct * 0.4 +
      r.learn.metaPct * 0.15 +
      r.learn.bodyPct * 0.2 +
      r.blog.metaPct * 0.1 +
      r.blog.bodyPct * 0.1 +
      r.templates.templatePct * 0.05;
    r.composite = Math.round(score * 10) / 10;
  }

  return summary;
}

function toMarkdown(report) {
  const lines = [];
  lines.push(`## i18n coverage`);
  lines.push(``);
  lines.push(`Generated: \`${report.generatedAt}\``);
  lines.push(``);
  lines.push(`| Surface | English source |`);
  lines.push(`|---------|----------------|`);
  lines.push(`| UI strings | ${report.enUiKeys} keys |`);
  lines.push(`| Learn lessons | ${report.enLearn} |`);
  lines.push(`| Blog posts | ${report.enBlog} |`);
  lines.push(`| Locales in switcher | ${report.locales} (incl. English) |`);
  lines.push(
    `| Chinese in switcher | ${report.switcherIncludesChinese ? "yes — 简体中文 + 繁體中文" : "NO"} |`,
  );
  lines.push(``);
  lines.push(`### Target markets (composite score)`);
  lines.push(``);
  lines.push(
    `| Locale | Composite | UI | Learn meta | Learn body | Blog meta | Blog body | Templates |`,
  );
  lines.push(`|--------|-----------|----|------------|------------|-----------|-----------|-----------|`);
  for (const locale of report.targets) {
    const r = report.byLocale[locale];
    if (!r) continue;
    lines.push(
      `| \`${locale}\` | **${r.composite}%** | ${r.ui.pct}% | ${r.learn.metaPct}% | ${r.learn.bodyPct}% | ${r.blog.metaPct}% | ${r.blog.bodyPct}% | ${r.templates.templatePct}% |`,
    );
  }
  lines.push(``);
  lines.push(`### All locales`);
  lines.push(``);
  lines.push(`| Locale | UI % | Learn body % | Blog body % | Templates % | Composite |`);
  lines.push(`|--------|------|--------------|-------------|-------------|-----------|`);
  for (const locale of Object.keys(report.byLocale).sort()) {
    const r = report.byLocale[locale];
    lines.push(
      `| \`${locale}\` | ${r.ui.pct}% | ${r.learn.bodyPct}% | ${r.blog.bodyPct}% | ${r.templates.templatePct}% | ${r.composite}% |`,
    );
  }
  lines.push(``);
  lines.push(`### How to refresh`);
  lines.push(``);
  lines.push("```bash");
  lines.push("# Coverage report");
  lines.push("pnpm i18n:coverage");
  lines.push("pnpm i18n:coverage -- --markdown");
  lines.push("");
  lines.push("# Fill content (meta or full body; code fences protected)");
  lines.push("node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=learn");
  lines.push("node scripts/translate-site-content.mjs --locales=zh-cn,zh-tw --only=blog");
  lines.push("");
  lines.push("# Fill UI dictionary overrides");
  lines.push("node scripts/translate-ui-gtx.mjs --locales=zh-cn,zh-tw");
  lines.push("```");
  lines.push(``);
  lines.push(
    `**Note:** LaTeX/Typst source, URL slugs, and product tokens (LaTeX, Git, BibTeX, …) stay untranslated by design.`,
  );
  return lines.join("\n");
}

function printTable(report) {
  console.log("\n=== Oleafly i18n coverage ===\n");
  console.log(
    `EN sources: ${report.enUiKeys} UI keys · ${report.enLearn} learn · ${report.enBlog} blog · ${report.locales} locales`,
  );
  console.log(
    `Chinese in switcher: ${report.switcherIncludesChinese ? "YES (zh-cn, zh-tw)" : "NO"}`,
  );
  console.log("");
  console.log(
    "Locale   UI%        Learn meta/body   Blog meta/body   Tpl%   Composite",
  );
  console.log(
    "------   ---------  ----------------  ----------------  -----  ---------",
  );
  for (const locale of report.targets) {
    const r = report.byLocale[locale];
    if (!r) continue;
    console.log(
      `${locale.padEnd(8)} ${String(r.ui.pct).padStart(5)}% ${pctBar(r.ui.pct)}  ${String(r.learn.metaPct).padStart(5)}/${String(r.learn.bodyPct).padStart(5)}  ${String(r.blog.metaPct).padStart(5)}/${String(r.blog.bodyPct).padStart(5)}  ${String(r.templates.templatePct).padStart(5)}  ${String(r.composite).padStart(5)}%`,
    );
  }
  console.log("");
  // gaps
  for (const locale of ["zh-cn", "zh-tw", "ja", "ko"]) {
    const r = report.byLocale[locale];
    if (!r) continue;
    if (r.learn.bodyPct < 100 || r.blog.bodyPct < 100) {
      console.log(
        `GAP ${locale}: learn body ${r.learn.bodyTranslated}/${r.learn.expected}, blog body ${r.blog.bodyTranslated}/${r.blog.expected}`,
      );
    }
  }
}

function updateReadme(mdSection) {
  const readmePath = path.join(root, "README.md");
  let readme = readFileSync(readmePath, "utf8");
  const start = "<!-- i18n-coverage:start -->";
  const end = "<!-- i18n-coverage:end -->";
  const block = `${start}\n${mdSection}\n${end}`;
  if (readme.includes(start) && readme.includes(end)) {
    readme = readme.replace(new RegExp(`${start}[\\s\\S]*?${end}`), block);
  } else {
    // append before end or at end
    readme = readme.trimEnd() + "\n\n" + block + "\n";
  }
  writeFileSync(readmePath, readme);
  console.log("Updated README.md i18n coverage section");
}

const report = buildReport();

if (asJson) {
  console.log(JSON.stringify(report, null, 2));
} else if (asMd) {
  console.log(toMarkdown(report));
} else {
  printTable(report);
}

// Always write machine-readable snapshot for CI / dashboards
const outDir = path.join(root, "src/i18n");
writeFileSync(path.join(outDir, "coverage-report.json"), JSON.stringify(report, null, 2));
writeFileSync(path.join(outDir, "coverage-report.md"), toMarkdown(report));
console.log("\nWrote src/i18n/coverage-report.{json,md}");

if (writeReadme) {
  updateReadme(toMarkdown(report));
}

if (FAIL_UNDER != null) {
  let bad = false;
  for (const locale of report.targets) {
    const r = report.byLocale[locale];
    if (r && r.ui.pct < FAIL_UNDER) {
      console.error(`FAIL: ${locale} UI ${r.ui.pct}% < ${FAIL_UNDER}%`);
      bad = true;
    }
  }
  if (bad) process.exit(1);
}
