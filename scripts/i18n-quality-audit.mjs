// Read-only translation quality audit for src/i18n/ui.
// Checks: placeholder integrity, brand-token preservation, untranslated
// strings (identical to EN for non-cognate locales), suspicious glossary hits.
import { readFileSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const enRaw = readFileSync(root + "src/i18n/ui/en.json", "utf8");
const genRaw = readFileSync(root + "src/i18n/ui/generated.ts", "utf8");

function parseEn(raw) {
  return JSON.parse(raw);
}

function parseGenerated(src) {
  // nested: "es": { "key": "val", ... },
  const locales = {};
  const re = /\n {2}("?[a-z0-9-]+"?):\s*\{/g;
  const starts = [];
  let m;
  while ((m = re.exec(src))) starts.push({ code: m[1].replaceAll('"', ""), start: m.index + m[0].length });
  for (let i = 0; i < starts.length; i++) {
    const end = i + 1 < starts.length ? starts[i + 1].start : src.length;
    const body = src.slice(starts[i].start, end);
    const dict = {};
    const re2 = /"([^"]+)":\s*"((?:\\.|[^"\\])*)"/g;
    let mm;
    while ((mm = re2.exec(body))) dict[mm[1]] = mm[2].replaceAll('\\"', '"').replace(/\\n/g, "\n");
    locales[starts[i].code] = dict;
  }
  return locales;
}

const en = parseEn(enRaw);
const locales = parseGenerated(genRaw);

const BRAND = ["Oleafly", "LaTeX", "Typst", "SyncTeX", "BibTeX", "Overleaf"];
// locales where an identical-to-EN string is a red flag (non-Latin scripts)
const NON_COGNATE = new Set(["ja", "ko", "zh-cn", "zh-tw", "ru", "uk", "hi", "ar", "tr"]);
// known-bad glossary (wrong-sense machine translations spotted by sampling)
const BAD_SENSES = [
  { re: /red el[ée]ctrica/i, why: 'ES "Red eléctrica" = power grid, not grid layout' },
  { re: /rede el[ée]trica/i, why: 'PT "rede elétrica" = power grid' },
  { re: /git hub|git-hub/i, why: '"GitHub" split/hyphenated' },
  { re: /\bpdi[f]?\b.*archi/i, why: "possible PDF/artifact mistranslation" },
];

const report = {};
for (const [code, dict] of Object.entries(locales)) {
  const issues = { placeholder: [], brand: [], untranslated: [], badSense: [] };
  for (const [key, enVal] of Object.entries(en)) {
    const t = dict[key];
    if (t === undefined) continue;
    // 1. placeholder integrity
    const enPh = [...enVal.matchAll(/\{[a-z]+\}/g)].map((x) => x[0]).sort((a, b) => a.localeCompare(b)).join(",");
    const tPh = [...t.matchAll(/\{[a-z]+\}/g)].map((x) => x[0]).sort((a, b) => a.localeCompare(b)).join(",");
    if (enPh !== tPh) issues.placeholder.push(`${key}: EN{${enPh}} → ${code}{${tPh}} "${t.slice(0, 60)}"`);
    // 2. brand preservation (only when EN has it)
    for (const b of BRAND) {
      if (enVal.includes(b) && !t.includes(b) && !/title|brand/i.test(key)) {
        issues.brand.push(`${key}: EN has ${b} → ${code}: "${t.slice(0, 60)}"`);
      }
    }
    // 3. untranslated (identical) for non-cognate locales, only real sentences
    if (NON_COGNATE.has(code) && t === enVal && enVal.length > 15 && /[a-z]{4}/.test(enVal)) {
      issues.untranslated.push(`${key}: "${enVal.slice(0, 50)}"`);
    }
    // 4. bad-sense glossary
    for (const { re, why } of BAD_SENSES) {
      if (re.test(t)) issues.badSense.push(`${key}: "${t.slice(0, 60)}" — ${why}`);
    }
  }
  const counts = Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, v.length]));
  if (Object.values(counts).some((n) => n > 0)) report[code] = { counts, issues };
}

// summary
console.log("locales:", Object.keys(locales).length, "| en keys:", Object.keys(en).length);
for (const [code, r] of Object.entries(report)) {
  console.log(`\n### ${code}: ${JSON.stringify(r.counts)}`);
  for (const [kind, list] of Object.entries(r.issues)) {
    for (const item of list.slice(0, 5)) console.log(`  [${kind}] ${item}`);
    if (list.length > 5) console.log(`  … +${list.length - 5} more [${kind}]`);
  }
}
const clean = Object.keys(locales).filter((c) => !report[c]);
console.log("\nno flags:", clean.join(", "));
