// Fail the build if dist/ contains a file Cloudflare Pages cannot host.
// Pages rejects any individual asset larger than 25 MiB.
// https://developers.cloudflare.com/pages/platform/limits/
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const LIMIT_BYTES = 25 * 1024 * 1024;
const root = process.argv[2] ?? "dist";

/** @type {{ path: string; bytes: number }[]} */
const oversized = [];

/**
 * @param {string} dir
 */
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const bytes = statSync(full).size;
    if (bytes > LIMIT_BYTES) {
      oversized.push({ path: relative(process.cwd(), full), bytes });
    }
  }
}

try {
  walk(root);
} catch (e) {
  console.error(`check-dist-cloudflare-limits: cannot read ${root}: ${e}`);
  process.exit(1);
}

if (oversized.length === 0) {
  console.log(
    `check-dist-cloudflare-limits: ok (no file in ${root}/ exceeds 25 MiB)`,
  );
  process.exit(0);
}

console.error(
  "check-dist-cloudflare-limits: Cloudflare Pages rejects files > 25 MiB:",
);
for (const f of oversized.sort((a, b) => b.bytes - a.bytes)) {
  const mib = (f.bytes / (1024 * 1024)).toFixed(1);
  console.error(`  ${f.path}  (${mib} MiB)`);
}
process.exit(1);
