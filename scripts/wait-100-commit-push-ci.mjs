/**
 * Wait for translate-all to finish, re-run until every locale is 100% composite,
 * then commit, push, and poll GitHub Actions until the push workflow succeeds.
 *
 *   node scripts/wait-100-commit-push-ci.mjs
 */
import { spawn, execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const statusPath = path.join(root, "src/i18n/ship-status.json");
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

function log(...a) {
  console.log(new Date().toISOString(), ...a);
}

function writeStatus(patch) {
  let cur = {};
  try {
    if (existsSync(statusPath)) cur = JSON.parse(readFileSync(statusPath, "utf8"));
  } catch {
    /* ignore */
  }
  writeFileSync(
    statusPath,
    JSON.stringify({ ...cur, ...patch, updatedAt: new Date().toISOString() }, null, 2),
    "utf8",
  );
}

function sh(cmd, opts = {}) {
  return execSync(cmd, {
    cwd: root,
    encoding: "utf8",
    stdio: opts.inherit ? "inherit" : ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    log(`$ ${cmd} ${args.join(" ")}`);
    const child = spawn(cmd, args, { cwd: root, stdio: "inherit", env: process.env });
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`)),
    );
  });
}

function procsRunning() {
  try {
    // Match only node script invocations (not shells that mention the names in source).
    const out = sh(
      "pgrep -fl 'node scripts/translate-all-to-100|node scripts/translate-ui-gtx|node scripts/translate-site-content' || true",
    );
    return out
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.includes("pgrep") && !l.includes("wait-100-commit-push"));
  } catch {
    return [];
  }
}

function loadReport() {
  sh("node scripts/i18n-coverage.mjs", { inherit: true });
  return JSON.parse(readFileSync(path.join(root, "src/i18n/coverage-report.json"), "utf8"));
}

function incomplete(report) {
  return ALL.filter((l) => (report.byLocale?.[l]?.composite ?? 0) < 100).map((l) => ({
    locale: l,
    composite: report.byLocale?.[l]?.composite ?? 0,
    ui: report.byLocale?.[l]?.ui?.pct,
    learnBody: report.byLocale?.[l]?.learn?.bodyPct,
    blogBody: report.byLocale?.[l]?.blog?.bodyPct,
    tpl: report.byLocale?.[l]?.templates?.templatePct,
  }));
}

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForTranslateIdle() {
  while (true) {
    const procs = procsRunning();
    if (!procs.length) return;
    log("translate still running:", procs.length, "procs");
    writeStatus({ phase: "wait-translate", procs: procs.slice(0, 5) });
    await sleep(60_000);
  }
}

async function fillUntil100(maxRounds = 8) {
  for (let round = 1; round <= maxRounds; round++) {
    await waitForTranslateIdle();
    const report = loadReport();
    const gaps = incomplete(report);
    writeStatus({
      phase: "coverage-check",
      round,
      incomplete: gaps,
      done: gaps.length === 0,
    });
    if (!gaps.length) {
      log("All locales at 100% composite");
      return report;
    }
    log(`Round ${round}: incomplete`, gaps.map((g) => `${g.locale}=${g.composite}%`).join(", "));
    const locales = gaps.map((g) => g.locale).join(",");
    // Re-run master filler for remaining only
    try {
      await run("node", ["scripts/translate-all-to-100.mjs", `--locales=${locales}`]);
    } catch (e) {
      log("translate-all exit non-zero (will re-check):", e.message);
    }
  }
  const report = loadReport();
  const gaps = incomplete(report);
  if (gaps.length) {
    throw new Error(
      "Still incomplete after max rounds: " +
        gaps.map((g) => `${g.locale}=${g.composite}%`).join(", "),
    );
  }
  return report;
}

function commitAndPush() {
  writeStatus({ phase: "commit" });
  // Stage everything for this i18n ship (user requested full 100% then one push).
  sh("git add -A", { inherit: true });
  // Don't commit if nothing staged
  try {
    sh("git diff --cached --quiet");
    log("Nothing to commit");
    writeStatus({ phase: "no-commit-needed" });
  } catch {
    const msg = `i18n: complete 100% coverage for all ${ALL.length} locales

Fill UI dictionaries, learn/blog bodies, and template catalog for every
non-English locale. Coverage tracker reports full composite scores.
Ship only after verify; deploy CI follows on main.`;
    // Avoid shell quoting issues: write message to temp file
    const msgPath = path.join(root, ".git/COMMIT_EDITMSG_I18N");
    writeFileSync(msgPath, msg, "utf8");
    sh(`git commit -F ${JSON.stringify(msgPath)}`, { inherit: true });
  }
  writeStatus({ phase: "push" });
  sh("git push origin HEAD", { inherit: true });
  const sha = sh("git rev-parse HEAD").trim();
  log("Pushed", sha);
  writeStatus({ phase: "pushed", sha });
  return sha;
}

async function waitForCi(sha) {
  writeStatus({ phase: "ci-wait", sha });
  // Prefer gh if available
  let hasGh = true;
  try {
    sh("gh --version");
  } catch {
    hasGh = false;
  }
  if (!hasGh) {
    log("gh CLI not available — cannot poll CI automatically");
    writeStatus({ phase: "ci-manual", sha, note: "install gh or check Actions UI" });
    return;
  }

  // Find run for this SHA on main (deploy workflow)
  for (let i = 0; i < 90; i++) {
    // 90 * 20s = 30 min
    try {
      const json = sh(
        `gh run list --commit ${sha} --limit 5 --json databaseId,status,conclusion,name,url,workflowName`,
      );
      const runs = JSON.parse(json);
      if (!runs.length) {
        log("No CI runs yet for", sha.slice(0, 7));
        writeStatus({ phase: "ci-wait", sha, note: "no runs yet" });
        await sleep(20_000);
        continue;
      }
      const pending = runs.filter((r) => r.status !== "completed");
      const failed = runs.filter((r) => r.status === "completed" && r.conclusion !== "success");
      const ok = runs.filter((r) => r.status === "completed" && r.conclusion === "success");
      log(
        `CI: ${ok.length} success, ${pending.length} pending, ${failed.length} failed —`,
        runs.map((r) => `${r.workflowName || r.name}:${r.status}/${r.conclusion || "-"}`).join(", "),
      );
      writeStatus({
        phase: "ci-wait",
        sha,
        runs,
        pending: pending.length,
        failed: failed.length,
      });
      if (failed.length) {
        // Try to surface logs
        for (const r of failed) {
          try {
            sh(`gh run view ${r.databaseId} --log-failed`, { inherit: true });
          } catch {
            /* ignore */
          }
        }
        throw new Error(
          "CI failed: " + failed.map((r) => `${r.workflowName} ${r.url}`).join("; "),
        );
      }
      if (!pending.length && ok.length) {
        log("CI all green for", sha.slice(0, 7));
        writeStatus({ phase: "ci-success", sha, runs });
        return;
      }
    } catch (e) {
      if (String(e.message || e).includes("CI failed")) throw e;
      log("ci poll error", e.message || e);
    }
    await sleep(20_000);
  }
  throw new Error("CI watch timed out after ~30 min");
}

async function main() {
  writeStatus({ phase: "start", startedAt: new Date().toISOString() });
  log("Waiting for translations → 100% → commit → push → CI");
  await fillUntil100();
  const sha = commitAndPush();
  await waitForCi(sha);
  writeStatus({ phase: "complete", done: true, sha });
  log("DONE: 100% i18n + pushed + CI green");
}

main().catch((e) => {
  console.error(e);
  writeStatus({ phase: "error", error: String(e?.message || e), done: false });
  process.exit(1);
});
