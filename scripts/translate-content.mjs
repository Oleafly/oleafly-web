/**
 * Generate per-locale translations of blog + learn frontmatter (title, description)
 * and full markdown bodies into src/content/{blog,learn}/{locale}/.
 *
 * Usage:
 *   node scripts/translate-content.mjs              # all locales, titles+bodies
 *   node scripts/translate-content.mjs --meta-only  # title/description only (faster)
 *   node scripts/translate-content.mjs --locales=es,fr,de
 *   node scripts/translate-content.mjs --collection=blog
 */
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translate } from "google-translate-api-x";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const ALL_LOCALES = [
  "es", "pt-br", "fr", "de", "it", "nl", "pl", "ru", "uk", "tr",
  "ar", "hi", "zh-cn", "zh-tw", "ja", "ko", "vi",
];

// google-translate-api-x language codes
const TO_CODE = {
  es: "es",
  "pt-br": "pt",
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
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
  ja: "ja",
  ko: "ko",
  vi: "vi",
};

const args = process.argv.slice(2);
const metaOnly = args.includes("--meta-only");
const localesArg = args.find((a) => a.startsWith("--locales="));
const collectionArg = args.find((a) => a.startsWith("--collection="));
const LOCALES = localesArg
  ? localesArg.split("=")[1].split(",").map((s) => s.trim()).filter(Boolean)
  : ALL_LOCALES;
const COLLECTIONS = collectionArg
  ? [collectionArg.split("=")[1]]
  : ["blog", "learn"];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function tr(text, to, retries = 4) {
  if (!text || !text.trim()) return text;
  const lang = TO_CODE[to] || to;
  for (let i = 0; i < retries; i++) {
    try {
      // Chunk long bodies (~4000 chars) to stay under free API limits
      if (text.length > 3500) {
        const chunks = [];
        let rest = text;
        while (rest.length) {
          let cut = Math.min(3500, rest.length);
          if (cut < rest.length) {
            const nl = rest.lastIndexOf("\n\n", cut);
            if (nl > 1000) cut = nl;
          }
          chunks.push(rest.slice(0, cut));
          rest = rest.slice(cut);
        }
        const out = [];
        for (const c of chunks) {
          const r = await translate(c, { to: lang, forceTo: true, autoCorrect: false });
          out.push(typeof r.text === "string" ? r.text : String(r));
          await sleep(600);
        }
        return out.join("\n\n");
      }
      const r = await translate(text, { to: lang, forceTo: true, autoCorrect: false });
      return typeof r.text === "string" ? r.text : String(r);
    } catch (e) {
      const wait = 800 * (i + 1);
      console.warn(`  translate retry ${i + 1}/${retries}: ${e.message || e}`);
      await sleep(wait);
    }
  }
  throw new Error(`Failed to translate to ${to}`);
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\n/, "");
  /** @type {Record<string, string>} */
  const data = {};
  // Only pull simple string keys we need (title, description) with quoted values
  for (const key of ["title", "description"]) {
    const m = fm.match(new RegExp(`^${key}:\\s*["']([\\s\\S]*?)["']\\s*$`, "m"));
    if (m) data[key] = m[1].replace(/\\"/g, '"');
    else {
      const m2 = fm.match(new RegExp(`^${key}:\\s*"((?:\\\\.|[^"\\\\])*)"`, "m"));
      if (m2) data[key] = m2[1].replace(/\\"/g, '"');
    }
  }
  // YAML double-quoted multiline-ish: title: "...."
  if (!data.title) {
    const m = fm.match(/^title:\s*(.+)$/m);
    if (m) data.title = m[1].replace(/^["']|["']$/g, "").trim();
  }
  if (!data.description) {
    const m = fm.match(/^description:\s*(.+)$/m);
    if (m) data.description = m[1].replace(/^["']|["']$/g, "").trim();
  }
  return { fm, data, body, raw };
}

function replaceFrontmatterField(fm, key, value) {
  const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const re = new RegExp(`^${key}:\\s*.+$`, "m");
  if (re.test(fm)) return fm.replace(re, `${key}: "${escaped}"`);
  return `${fm}\n${key}: "${escaped}"`;
}

async function processFile(collection, file, locale) {
  const srcPath = path.join(root, "src/content", collection, file);
  const raw = await readFile(srcPath, "utf8");
  const { fm, data, body } = parseFrontmatter(raw);
  if (!fm) {
    console.warn(`skip (no frontmatter): ${collection}/${file}`);
    return;
  }

  const title = data.title || file.replace(/\.md$/, "");
  const description = data.description || "";

  process.stdout.write(`  ${locale} ${collection}/${file} … `);
  const titleT = await tr(title, locale);
  await sleep(500);
  const descT = description ? await tr(description, locale) : "";
  await sleep(500);

  let newFm = replaceFrontmatterField(fm, "title", titleT);
  if (description) newFm = replaceFrontmatterField(newFm, "description", descT);

  let newBody = body;
  if (!metaOnly && body.trim()) {
    // Protect fenced code blocks from translation
    const blocks = [];
    const masked = body.replace(/```[\s\S]*?```/g, (m) => {
      const i = blocks.length;
      blocks.push(m);
      return `\n@@CODEBLOCK_${i}@@\n`;
    });
    const bodyT = await tr(masked, locale);
    newBody = bodyT.replace(/@@CODEBLOCK_(\d+)@@/g, (_, i) => blocks[Number(i)] || "");
    await sleep(600);
  }

  const outDir = path.join(root, "src/content", collection, locale);
  await mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, file);
  const out = `---\n${newFm}\n---\n\n${newBody.trimStart()}`;
  await writeFile(outPath, out, "utf8");
  console.log("ok");
}

async function main() {
  console.log("Locales:", LOCALES.join(", "));
  console.log("Collections:", COLLECTIONS.join(", "));
  console.log(metaOnly ? "Mode: meta-only (title/description)" : "Mode: full (title/description/body)");

  for (const collection of COLLECTIONS) {
    const dir = path.join(root, "src/content", collection);
    const files = (await readdir(dir)).filter((f) => f.endsWith(".md"));
    console.log(`\n${collection}: ${files.length} English source files`);
    for (const locale of LOCALES) {
      console.log(`\n→ ${locale}`);
      for (const file of files) {
        try {
          await processFile(collection, file, locale);
        } catch (e) {
          console.error(`FAIL ${collection}/${locale}/${file}:`, e.message || e);
        }
      }
    }
  }
  console.log("\nDone.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
