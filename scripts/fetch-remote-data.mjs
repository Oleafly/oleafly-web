// Refreshes build-time data for /templates (and optionally /deadlines).
// On any fetch failure the committed snapshot in src/data/ is left untouched,
// so builds stay green offline.
//
// Also refreshes the /deadlines board data.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { parse as parseYaml } from "yaml";

const PACKS_BASE = "https://raw.githubusercontent.com/Oleafly/template-packs/main";
const DEADLINES_URL = "https://ccfddl.com/conference/allconf.yml";

/**
 * Website ships curated packs only.
 *
 * The template-packs repo also publishes bulk `open-*` community packs
 * (1.5k+ templates). Building a detail page for each of those × every
 * locale produces ~30k static pages and an 80+ MiB sitemap-0.xml, which
 * Cloudflare Pages rejects (25 MiB per-file limit).
 */
export function isWebsiteTemplatePack(pack) {
  return typeof pack?.id === "string" && !pack.id.startsWith("open-");
}

async function fetchText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.text();
}

async function refreshTemplates() {
  const catalog = JSON.parse(await fetchText(`${PACKS_BASE}/catalog.json`));
  const websiteCatalog = catalog.filter(isWebsiteTemplatePack);
  const skipped = catalog.length - websiteCatalog.length;
  if (skipped > 0) {
    console.log(
      `templates: skipping ${skipped} open-* pack(s) (website keeps curated packs only)`,
    );
  }

  const packs = [];
  for (const pack of websiteCatalog) {
    const templates = [];
    const byTemplate = new Map();
    for (const f of pack.files) {
      const [tplId, ...rest] = f.name.split("/");
      if (!byTemplate.has(tplId)) byTemplate.set(tplId, {});
      byTemplate.get(tplId)[rest.join("/")] = f.url;
    }
    for (const [tplId, files] of byTemplate) {
      const manifestUrl = files["template.json"];
      if (!manifestUrl) continue;
      const manifest = JSON.parse(await fetchText(manifestUrl));
      const mainUrl = files[manifest.main_doc ?? "main.tex"];
      const source = mainUrl ? await fetchText(mainUrl) : "";
      templates.push({
        id: tplId,
        name: manifest.name ?? tplId,
        description: manifest.description ?? "",
        category: manifest.category ?? "",
        engine: manifest.engine ?? "xetex",
        mainDoc: manifest.main_doc ?? "main.tex",
        license: manifest.license?.spdx ?? "",
        source,
      });
    }
    packs.push({
      id: pack.id,
      label: pack.label,
      description: pack.description,
      count: pack.count,
      templates,
    });
  }
  writeFileSync("src/data/template-packs.json", `${JSON.stringify({ packs }, null, 2)}\n`);
  const templateCount = packs.reduce((n, p) => n + p.templates.length, 0);
  console.log(`templates: refreshed ${packs.length} packs (${templateCount} templates)`);
}

async function refreshDeadlines() {
  const entries = parseYaml(await fetchText(DEADLINES_URL));
  const venues = [];
  for (const entry of entries ?? []) {
    const confs = entry?.confs ?? [];
    if (confs.length === 0) continue;
    const conf = confs.reduce((a, b) => ((b?.year ?? 0) > (a?.year ?? 0) ? b : a));
    const deadlines = [];
    for (const t of conf?.timeline ?? []) {
      for (const [key, kind] of [
        ["abstract_deadline", "abstract"],
        ["deadline", "paper"],
      ]) {
        const v = t?.[key];
        if (typeof v === "string" && v.trim() && v.trim().toLowerCase() !== "tbd") {
          deadlines.push({ kind, at: v.trim() });
        }
      }
    }
    if (deadlines.length === 0) continue;
    const core = typeof entry?.rank?.core === "string" ? entry.rank.core.trim() : "";
    const ccf = entry?.rank?.ccf != null ? String(entry.rank.ccf).trim() : "";
    venues.push({
      id: String(conf?.id ?? ""),
      title: `${entry?.title ?? ""} ${conf?.year ?? ""}`.trim(),
      full_name: entry?.description ?? "",
      sub: entry?.sub ?? "",
      rank: core || (ccf ? `CCF-${ccf}` : ""),
      link: conf?.link ?? "",
      timezone: String(conf?.timezone ?? ""),
      deadlines,
      conf_date: String(conf?.date ?? ""),
      place: String(conf?.place ?? ""),
    });
  }
  const out = { generated_at: new Date().toISOString(), venues };
  writeFileSync("src/data/deadlines.json", `${JSON.stringify(out)}\n`);
  console.log(`deadlines: refreshed ${venues.length} venues`);
}

async function main() {
  for (const [name, task] of [
    ["templates", refreshTemplates],
    // Disabled while /deadlines is off the site. Re-enable with the page.
    // ["deadlines", refreshDeadlines],
  ]) {
    try {
      await task();
    } catch (e) {
      const snapshot =
        name === "templates" ? "src/data/template-packs.json" : "src/data/deadlines.json";
      try {
        readFileSync(snapshot);
        console.warn(`${name}: fetch failed (${e}); using committed snapshot`);
      } catch {
        console.error(`${name}: fetch failed and no snapshot exists`);
        process.exit(1);
      }
    }
  }
}

// Only fetch when invoked as a script (`node scripts/fetch-remote-data.mjs`),
// not when imported by unit tests.
const isMain =
  process.argv[1] != null &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isMain) {
  await main();
}
