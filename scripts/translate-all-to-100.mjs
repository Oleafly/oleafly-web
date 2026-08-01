/**
 * Drive UI + content + templates to 100% composite for every non-English locale.
 * Sequential to avoid GTX 429s. Re-runnable (skips existing work).
 *
 *   node scripts/translate-all-to-100.mjs
 *   node scripts/translate-all-to-100.mjs --locales=es,fr,de
 *   node scripts/translate-all-to-100.mjs --skip-ui
 *   node scripts/translate-all-to-100.mjs --only-phase=content
 */
import { spawn } from "node:child_process";
import { writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const statusPath = path.join(root, "src/i18n/translate-all-status.json");

const ALL = [
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

const args = process.argv.slice(2);
const localesArg = args.find((a) => a.startsWith("--locales="));
const skipUi = args.includes("--skip-ui");
const skipTemplates = args.includes("--skip-templates");
const skipContent = args.includes("--skip-content");
const onlyPhase = args.find((a) => a.startsWith("--only-phase="))?.split("=")[1];
const LOCALES = localesArg
  ? localesArg
      .split("=")[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  : ALL;

function run(cmd, cmdArgs) {
  return new Promise((resolve, reject) => {
    console.log(`\n$ ${cmd} ${cmdArgs.join(" ")}`);
    const child = spawn(cmd, cmdArgs, {
      cwd: root,
      stdio: "inherit",
      env: process.env,
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited ${code}`));
    });
  });
}

function writeStatus(patch) {
  let cur = {};
  try {
    if (existsSync(statusPath)) cur = JSON.parse(readFileSync(statusPath, "utf8"));
  } catch {
    /* ignore */
  }
  const next = {
    ...cur,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(statusPath, JSON.stringify(next, null, 2), "utf8");
}

async function coverageSnapshot() {
  await run("node", ["scripts/i18n-coverage.mjs"]);
  const report = JSON.parse(
    readFileSync(path.join(root, "src/i18n/coverage-report.json"), "utf8"),
  );
  return report;
}

function incompleteLocales(report, locales) {
  const out = [];
  for (const loc of locales) {
    const r = report.byLocale?.[loc];
    if (!r) {
      out.push(loc);
      continue;
    }
    if (r.composite < 100) out.push(loc);
  }
  return out;
}

async function main() {
  writeStatus({
    phase: "start",
    locales: LOCALES,
    startedAt: new Date().toISOString(),
    done: false,
  });

  console.log("=== translate-all-to-100 ===");
  console.log("Locales:", LOCALES.join(", "));

  let report = await coverageSnapshot();
  let todo = incompleteLocales(report, LOCALES);
  console.log("Incomplete composites:", todo.join(", ") || "(none)");
  writeStatus({ phase: "coverage-initial", incomplete: todo, reportAt: report.generatedAt });

  if (todo.length === 0) {
    writeStatus({ phase: "done", done: true, incomplete: [] });
    console.log("\nAll requested locales already at 100% composite.");
    return;
  }

  const doUi = !skipUi && onlyPhase !== "content" && onlyPhase !== "templates";
  const doTpl =
    !skipTemplates && onlyPhase !== "content" && onlyPhase !== "ui";
  const doContent =
    !skipContent && onlyPhase !== "templates" && onlyPhase !== "ui";

  // Phase 1: UI dictionary (all incomplete + any UI gap)
  if (doUi) {
    const uiTodo = LOCALES.filter((loc) => {
      const r = report.byLocale?.[loc];
      return !r || r.ui.pct < 100;
    });
    if (uiTodo.length) {
      writeStatus({ phase: "ui", uiTodo });
      await run("node", [
        "scripts/translate-ui-gtx.mjs",
        `--locales=${uiTodo.join(",")}`,
      ]);
    } else {
      console.log("\nUI: all complete, skip");
    }
  }

  // Phase 2: templates
  if (doTpl) {
    const tplTodo = LOCALES.filter((loc) => {
      const r = report.byLocale?.[loc];
      return !r || r.templates.templatePct < 100;
    });
    if (tplTodo.length) {
      writeStatus({ phase: "templates", tplTodo });
      await run("node", [
        "scripts/translate-site-content.mjs",
        `--locales=${tplTodo.join(",")}`,
        "--only=templates",
      ]);
    } else {
      console.log("\nTemplates: all complete, skip");
    }
  }

  // Phase 3: learn + blog per locale (bodies are the long tail)
  if (doContent) {
    for (const loc of LOCALES) {
      const r = report.byLocale?.[loc];
      const learnNeed = !r || r.learn.metaPct < 100 || r.learn.bodyPct < 100;
      const blogNeed = !r || r.blog.metaPct < 100 || r.blog.bodyPct < 100;
      if (!learnNeed && !blogNeed) {
        console.log(`\nContent ${loc}: already full, skip`);
        continue;
      }
      writeStatus({ phase: "content", locale: loc, learnNeed, blogNeed });
      if (learnNeed) {
        await run("node", [
          "scripts/translate-site-content.mjs",
          `--locales=${loc}`,
          "--only=learn",
        ]);
      }
      if (blogNeed) {
        await run("node", [
          "scripts/translate-site-content.mjs",
          `--locales=${loc}`,
          "--only=blog",
        ]);
      }
      // Refresh mid-run snapshot
      try {
        report = await coverageSnapshot();
        todo = incompleteLocales(report, LOCALES);
        writeStatus({
          phase: "content-progress",
          justFinished: loc,
          incomplete: todo,
        });
      } catch (e) {
        console.warn("coverage refresh failed", e.message);
      }
    }
  }

  report = await coverageSnapshot();
  todo = incompleteLocales(report, LOCALES);
  writeStatus({
    phase: todo.length ? "incomplete" : "done",
    done: todo.length === 0,
    incomplete: todo,
    finishedAt: new Date().toISOString(),
  });

  if (todo.length) {
    console.log("\nStill incomplete:", todo.join(", "));
    console.log("Re-run this script to continue filling gaps.");
    process.exitCode = 2;
  } else {
    console.log("\n✓ All locales at 100% composite.");
  }
}

main().catch((e) => {
  console.error(e);
  writeStatus({ phase: "error", error: String(e?.message || e), done: false });
  process.exit(1);
});
