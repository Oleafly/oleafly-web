/**
 * Translate full English UI dictionary into locale overrides via free GTX.
 * Merges into src/i18n/ui/generated.ts (preserves existing keys).
 *
 *   node scripts/translate-ui-gtx.mjs --locales=hi
 *   node scripts/translate-ui-gtx.mjs --locales=hi,ar,tr,vi
 *   node scripts/translate-ui-gtx.mjs --locales=hi --prefix=landing.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { translateGtx } from "./lib-gtx.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const args = process.argv.slice(2);
const localesArg = args.find((a) => a.startsWith("--locales="));
const prefixArg = args.find((a) => a.startsWith("--prefix="));
const LOCALES = localesArg
  ? localesArg.split("=")[1].split(",").map((s) => s.trim()).filter(Boolean)
  : ["hi"];
const PREFIX = prefixArg ? prefixArg.split("=")[1] : "";

function loadEn(raw) {
  const en = {};
  const re = /"([^"]+)":\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(raw))) {
    en[m[1]] = m[2]
      .replace(/\\"/g, '"')
      .replace(/\\n/g, "\n")
      .replace(/\\u00b7/g, "·");
  }
  const re2 = /"([^"]+)":\s*\n\s*"((?:\\.|[^"\\])*)"/g;
  while ((m = re2.exec(raw))) {
    if (!en[m[1]]) en[m[1]] = m[2].replace(/\\"/g, '"');
  }
  return en;
}

function parseGenerated(src) {
  const out = {};
  // match "es": { or es: {
  const re = /\n  ("?[a-z0-9-]+"?):\s*\{/g;
  let m;
  const starts = [];
  while ((m = re.exec(src))) {
    const code = m[1].replace(/"/g, "");
    starts.push({ code, index: m.index + m[0].length });
  }
  for (let i = 0; i < starts.length; i++) {
    const { code, index: bodyStart } = starts[i];
    let depth = 1;
    let j = bodyStart;
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

function emit(code, dict) {
  const keys = Object.keys(dict).sort();
  let s = `  ${JSON.stringify(code)}: {\n`;
  for (const k of keys) {
    s += `    ${JSON.stringify(k)}: ${JSON.stringify(dict[k])},\n`;
  }
  s += `  },\n`;
  return s;
}

async function tr(text, locale) {
  if (!text?.trim()) return text;
  // Keep pure brand/tech alone
  if (
    /^(Oleafly|GitHub|LaTeX|Typst|Markdown|BibTeX|KaTeX|SyncTeX|MCP|PDF|DOI|arXiv|AGPL-3\.0|RSS|FAQ)$/i.test(
      text.trim(),
    )
  ) {
    return text;
  }
  return translateGtx(text, locale);
}

async function main() {
  const en = JSON.parse(await readFile(path.join(root, "src/i18n/ui/en.json"), "utf8"));
  let keys = Object.keys(en);
  if (PREFIX) keys = keys.filter((k) => k.startsWith(PREFIX));
  console.log(`English keys: ${Object.keys(en).length} (translating ${keys.length})`);
  console.log(`Locales: ${LOCALES.join(", ")}`);

  const genPath = path.join(root, "src/i18n/ui/generated.ts");
  let genRaw = await readFile(genPath, "utf8");
  const blocks = parseGenerated(genRaw);

  for (const locale of LOCALES) {
    if (!blocks[locale]) blocks[locale] = {};
    console.log(`\n→ ${locale}`);
    let i = 0;
    for (const key of keys) {
      i++;
      const src = en[key];
      // Skip if already different from English
      if (blocks[locale][key] && blocks[locale][key] !== src) {
        process.stdout.write(`  [${i}/${keys.length}] ${key} (skip existing)\n`);
        continue;
      }
      process.stdout.write(`  [${i}/${keys.length}] ${key.slice(0, 48)}… `);
      try {
        const out = await tr(src, locale);
        blocks[locale][key] = out;
        console.log("ok");
      } catch (e) {
        console.log("FAIL", e.message || e);
        blocks[locale][key] = src;
      }
      await sleep(120);
    }
  }

  // Preserve locale order: es, zh-cn, ja, ko first, then others alpha
  const preferred = ["es", "zh-cn", "ja", "ko", "hi", "ar", "tr", "vi", "pt-br", "fr", "de", "it", "nl", "pl", "ru", "uk", "zh-tw"];
  const order = [
    ...preferred.filter((l) => blocks[l]),
    ...Object.keys(blocks).filter((l) => !preferred.includes(l)).sort(),
  ];

  let out = `/* Auto-generated UI translations — do not hand-edit; merge via scripts/translate-ui-gtx.mjs */\n`;
  out += `import type { UiDict } from "./en";\n\n`;
  out += `export const generatedOverrides: Record<string, Partial<UiDict>> = {\n`;
  for (const loc of order) out += emit(loc, blocks[loc]);
  out += `};\n`;
  await writeFile(genPath, out, "utf8");
  console.log("\nWrote", genPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
