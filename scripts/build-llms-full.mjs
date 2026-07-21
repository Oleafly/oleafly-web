// Concatenate every docs page into public/llms-full.txt so AI crawlers can
// ingest the full documentation in one request. Runs before astro build.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DOCS = "src/content/docs/docs";
const SITE = "https://oleafly.com/docs";

const out = [
  "# Oleafly: full documentation",
  "",
  "> Oleafly is a free, open-source, local-first LaTeX studio for Mac, Windows, and Linux.",
  "> This file is the complete documentation in one page. Per-page index: https://oleafly.com/llms.txt",
  "",
];

async function collect(dir, urlPrefix) {
  const entries = (await readdir(dir, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name));
  for (const e of entries) {
    if (e.isDirectory()) {
      await collect(join(dir, e.name), `${urlPrefix}/${e.name}`);
      continue;
    }
    if (!e.name.endsWith(".md") && !e.name.endsWith(".mdx")) continue;
    if (e.name.startsWith("index.")) continue;
    const slug = e.name.replace(/\.mdx?$/, "");
    let body = await readFile(join(dir, e.name), "utf8");
    const fm = body.match(/^---\n([\s\S]*?)\n---\n/);
    let title = slug;
    if (fm) {
      const t = fm[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
      if (t) title = t[1];
      body = body.slice(fm[0].length);
    }
    // strip imports/components from mdx-ish content, keep prose
    body = body.replace(/^import .*$/gm, "").replace(/<[A-Z][^>]*\/>/g, "").trim();
    out.push(`\n---\n\n# ${title}`, `Source: ${urlPrefix}/${slug}/`, "", body);
  }
}

await collect(DOCS, SITE);
await writeFile("public/llms-full.txt", out.join("\n") + "\n");
console.log(`llms-full.txt: ${(out.join("\n").length / 1024).toFixed(0)}KB from docs`);
