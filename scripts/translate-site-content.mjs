/**
 * Translate learn + blog content and template catalog for target locales.
 *
 * Usage:
 *   node scripts/translate-site-content.mjs --locales=ja,ko,zh-cn
 *   node scripts/translate-site-content.mjs --locales=ja --only=learn
 *   node scripts/translate-site-content.mjs --locales=ja --only=blog --meta-only
 *   node scripts/translate-site-content.mjs --locales=ja,ko,zh-cn --only=templates
 */
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translateGtx } from "./lib-gtx.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const args = process.argv.slice(2);
const localesArg = args.find((a) => a.startsWith("--locales="));
const onlyArg = args.find((a) => a.startsWith("--only="));
const metaOnly = args.includes("--meta-only");
const LOCALES = localesArg
  ? localesArg.split("=")[1].split(",").map((s) => s.trim()).filter(Boolean)
  : ["ja", "ko", "zh-cn", "es"];
const ONLY = onlyArg ? onlyArg.split("=")[1] : "all"; // all|learn|blog|templates

async function tr(text, locale) {
  if (!text?.trim()) return text;
  // Keep pure tech tokens
  if (/^(LaTeX|Typst|Markdown|BibTeX|KaTeX|SyncTeX|Git|GitHub|Oleafly|PDF|DOI|arXiv)$/i.test(text.trim())) {
    return text;
  }
  return translateGtx(text, locale);
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return null;
  const fm = raw.slice(3, end).trimEnd();
  const body = raw.slice(end + 4).replace(/^\n/, "");
  const get = (key) => {
    const m = fm.match(new RegExp(`^${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`, "m"));
    if (m) return m[1].replace(/\\"/g, '"');
    const m2 = fm.match(new RegExp(`^${key}:\\s*'(.*)'\\s*$`, "m"));
    if (m2) return m2[1];
    const m3 = fm.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    if (m3) return m3[1].replace(/^["']|["']$/g, "").trim();
    return "";
  };
  return { fm, body, title: get("title"), description: get("description") };
}

function setFmField(fm, key, value) {
  const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const re = new RegExp(`^${key}:\\s*.+$`, "m");
  if (re.test(fm)) return fm.replace(re, `${key}: "${escaped}"`);
  return `${fm}\n${key}: "${escaped}"`;
}

async function translateBody(body, locale) {
  if (!body?.trim()) return body;
  const blocks = [];
  // Protect fenced code + inline LaTeX-ish heavy lines lightly
  const masked = body.replace(/```[\s\S]*?```/g, (m) => {
    const i = blocks.length;
    blocks.push(m);
    return `\n@@CODEBLOCK_${i}@@\n`;
  });
  // Translate by paragraphs to keep structure
  const paras = masked.split(/\n{2,}/);
  const out = [];
  for (const p of paras) {
    if (!p.trim()) {
      out.push(p);
      continue;
    }
    if (/^@@CODEBLOCK_\d+@@$/.test(p.trim())) {
      out.push(p);
      continue;
    }
    // Skip pure code-ish / table fences without language
    if (/^(\||\s{4}|\$\$)/.test(p) && p.length < 80) {
      out.push(p);
      continue;
    }
    try {
      out.push(await tr(p, locale));
    } catch {
      out.push(p);
    }
    await sleep(150);
  }
  return out
    .join("\n\n")
    .replace(/@@CODEBLOCK_(\d+)@@/g, (_, i) => blocks[Number(i)] || "");
}

function bodyLooksTranslated(body, locale) {
  if (!body?.trim()) return true;
  if (locale.startsWith("zh") || locale === "ja") return /[\u4e00-\u9fff]/.test(body);
  if (locale === "ko") return /[\uac00-\ud7af]/.test(body);
  if (locale === "hi") return /[\u0900-\u097f]/.test(body);
  if (locale === "ar") return /[\u0600-\u06ff]/.test(body);
  if (locale === "ru" || locale === "uk") return /[\u0400-\u04ff]/.test(body);
  return /[^\x00-\x7f]/.test(body) && body.length > 80;
}

async function processCollection(collection, locale) {
  const dir = path.join(root, "src/content", collection);
  const files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
  const outDir = path.join(dir, locale);
  await mkdir(outDir, { recursive: true });
  console.log(`\n${collection}/${locale}: ${files.length} files`);

  for (const file of files) {
    const outPath = path.join(outDir, file);
    // Skip full re-translate when body already has target-language script
    if (!metaOnly && existsSync(outPath)) {
      try {
        const existing = await readFile(outPath, "utf8");
        const ep = parseFrontmatter(existing);
        if (ep && bodyLooksTranslated(ep.body, locale)) {
          process.stdout.write(`  ${file} … skip(existing)\n`);
          continue;
        }
      } catch {
        /* translate */
      }
    }

    const srcPath = path.join(dir, file);
    const raw = await readFile(srcPath, "utf8");
    const parsed = parseFrontmatter(raw);
    if (!parsed) {
      console.warn(`  skip ${file}`);
      continue;
    }
    process.stdout.write(`  ${file} … `);
    try {
      const titleT = await tr(parsed.title || file.replace(/\.md$/, ""), locale);
      await sleep(120);
      const descT = parsed.description
        ? await tr(parsed.description, locale)
        : "";
      await sleep(120);
      let newFm = setFmField(parsed.fm, "title", titleT);
      if (parsed.description) newFm = setFmField(newFm, "description", descT);

      let newBody = parsed.body;
      if (!metaOnly) {
        newBody = await translateBody(parsed.body, locale);
      }

      const out = `---\n${newFm}\n---\n\n${newBody.trimStart()}`;
      await writeFile(outPath, out, "utf8");
      console.log("ok");
    } catch (e) {
      console.log("FAIL", e.message || e);
    }
  }
}

async function processTemplates(locales) {
  const data = JSON.parse(
    await readFile(path.join(root, "src/data/template-packs.json"), "utf8"),
  );
  const dest = path.join(root, "src/i18n/template-catalog.generated.json");
  /** @type {Record<string, any>} */
  let out = {};
  try {
    out = JSON.parse(await readFile(dest, "utf8"));
  } catch {
    out = {};
  }

  const expTpl = data.packs.reduce((n, p) => n + p.templates.length, 0);
  for (const locale of locales) {
    const existing = out[locale];
    const have = existing?.templates ? Object.keys(existing.templates).length : 0;
    if (have >= expTpl && existing?.packs && Object.keys(existing.packs).length >= data.packs.length) {
      console.log(`\ntemplates/${locale}: skip (already ${have}/${expTpl})`);
      continue;
    }
    console.log(`\ntemplates/${locale}`);
    out[locale] = { packs: {}, templates: {}, categories: {} };

    // categories first
    const cats = new Set();
    for (const p of data.packs) {
      for (const t of p.templates) cats.add(t.category);
    }
    for (const cat of cats) {
      out[locale].categories[cat] = await tr(cat, locale);
      await sleep(100);
      process.stdout.write(".");
    }
    console.log(" categories");

    for (const pack of data.packs) {
      process.stdout.write(`  pack ${pack.id} … `);
      out[locale].packs[pack.id] = {
        label: await tr(pack.label, locale),
        description: await tr(pack.description, locale),
      };
      await sleep(120);
      for (const t of pack.templates) {
        out[locale].templates[t.id] = {
          name: await tr(t.name, locale),
          description: await tr(t.description, locale),
          category: out[locale].categories[t.category] || t.category,
        };
        await sleep(100);
      }
      console.log(`${pack.templates.length} templates`);
    }
    // Persist after each locale so partial progress survives crashes
    await writeFile(dest, JSON.stringify(out, null, 2), "utf8");
  }

  await writeFile(dest, JSON.stringify(out, null, 2), "utf8");
  console.log("\nwrote", dest, "locales:", Object.keys(out).join(", "));
}

async function main() {
  console.log("Locales:", LOCALES.join(", "));
  console.log("Only:", ONLY, "metaOnly:", metaOnly);

  if (ONLY === "all" || ONLY === "learn") {
    for (const locale of LOCALES) await processCollection("learn", locale);
  }
  if (ONLY === "all" || ONLY === "blog") {
    for (const locale of LOCALES) await processCollection("blog", locale);
  }
  if (ONLY === "all" || ONLY === "templates") {
    await processTemplates(LOCALES);
  }
  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
