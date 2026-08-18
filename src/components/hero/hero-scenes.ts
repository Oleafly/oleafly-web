/**
 * Scene markup for the hero app replica. The Project View scene is the
 * animated one; the other four are faithful static stills of the same
 * EdgeSense project, ready to grow their own flows later.
 */
import { ic, github, leaf, iconBtn } from "./hero-icons";
import { editorPane } from "./hero-editor";
import { previewPane } from "./hero-pdf";
export { assistantScene } from "./hero-assistant";
export { homeScene } from "./hero-home";
export { diagramScene } from "./hero-diagram";

/* ------------------------------------------------------ source tree panel */
const treeRow = (icon: string, tint: string, name: string, opts: { star?: boolean; active?: boolean } = {}) =>
  `<div class="hv-trow${opts.active ? " is-active" : ""}">${opts.star ? `<span class="hv-star">${ic.star}</span>` : `<span class="hv-star-slot"></span>`}<span class="hv-fic" style="color:${tint}">${icon}</span><span class="hv-trow-name">${name}</span></div>`;

const structRow = (
  lead: string,
  icon: string,
  name: string,
  prov: string,
  cls = "",
) =>
  `<div class="hv-srow${cls}">${lead}<span class="hv-sic">${icon}</span><span class="hv-srow-name">${name}</span><span class="hv-prov">${prov}</span></div>`;

const chev = `<span class="hv-schev">${ic.chevD}</span>`;
const bullet = `<span class="hv-sbullet">${ic.circleDot}</span>`;

export const sourceTree = `
<aside class="hv-tree">
  <div class="hv-tree-in">
    <div class="hv-panel-head">
      <span class="hv-ph-ic">${ic.folderTree}</span>
      <span class="hv-ph-label">Source Tree</span>
      <span class="hv-ph-actions">${iconBtn(ic.filePlus, "hv-ib-xs")}${iconBtn(ic.folderPlus, "hv-ib-xs")}${iconBtn(ic.import, "hv-ib-xs")}</span>
    </div>
    <div class="hv-tree-files">
      ${treeRow(github, "#f97316", ".gitignore")}
      ${treeRow(ic.fileText, "#0ea5e9", "main.tex", { star: true, active: true })}
      ${treeRow(ic.fileJson, "#eab308", "project.json")}
      ${treeRow(ic.fileType, "#818cf8", "README.md")}
      ${treeRow(ic.fileText, "#f59e0b", "references.bib")}
      ${treeRow(ic.fileText, "#f59e0b", "refs.bib")}
    </div>
    <div class="hv-tree-grip" id="hvGrip"><span></span></div>
    <div class="hv-structure">
      <div class="hv-struct-head">
        <span class="hv-schev">${ic.chevD}</span>
        <span class="hv-ph-ic">${ic.listTree}</span>
        <span class="hv-ph-label2">Structure</span>
        <span class="hv-count">38</span>
      </div>
      <div class="hv-filter">${ic.search}<span>Filter project map&hellip;</span></div>
      <div class="hv-struct-rows">
        ${structRow(chev, `<span style="color:#0ea5e9">${ic.fileText}</span>`, "main.tex", "main.tex:19:1")}
        ${structRow(bullet, ic.heading, "Introduction", "main.tex:19:1", " ind")}
        ${structRow(bullet, ic.heading, "Introduction", "main.tex:19:1", " ind")}
        ${structRow(chev, ic.heading, "System design", "main.tex:26:1", " ind")}
        ${structRow(bullet, ic.hash, "fig:architecture", "main.tex:43:8", " ind2")}
        ${structRow(bullet, ic.heading, "System design", "main.tex:26:1", " ind")}
        ${structRow(chev, ic.heading, "Deployment and evaluation", "main.tex:45:1", " ind")}
        ${structRow(bullet, ic.hash, "tab:results", "main.tex:56:69", " ind2")}
        ${structRow(bullet, ic.heading, "Deployment and evaluation", "main.tex:45:1", " ind")}
        ${structRow(bullet, ic.box, "equation", "main.tex:50:1", " ind")}
        ${structRow(bullet, ic.heading, "Results", "main.tex:65:1", " ind")}
        ${structRow(bullet, ic.heading, "Results", "main.tex:65:1", " ind")}
        ${structRow(bullet, ic.box, "figure", "main.tex:71:1", " ind")}
        ${structRow(bullet, ic.heading, "Ablations, safety, and limitat&hellip;", "main.tex:81:1", " ind")}
        ${structRow(bullet, ic.heading, "Ablations, safety, and limitat&hellip;", "main.tex:81:1", " ind")}
        ${structRow(chev, ic.heading, "Conclusion", "main.tex:87:1", " ind")}
        ${structRow(bullet, ic.bookOpen, "fair", "main.tex:92:1", " ind2")}
        ${structRow(bullet, ic.bookOpen, "tinyml", "main.tex:93:1", " ind2")}
      </div>
    </div>
  </div>
</aside>`;

/* --------------------------------------------------- cite hover popover */
const citePopover = `
<div class="hv-citepop" id="hvCitePop">
  <div class="hv-cp-head"><span class="hv-cp-dot"></span><span>Undefined reference</span></div>
  <div class="hv-cp-sym">
    <div class="hv-cp-title">bibentry &middot; wilkinson2016</div>
    <div class="hv-cp-detail">@article<br/>@article{wilkinson2016,<br/>references.bib:11</div>
  </div>
</div>`;

/* ------------------------------------------------------------- project */
export const projectScene = `
<section class="hv-scene" data-scene="project">
  ${sourceTree}
  <div class="hv-tsplit" id="hvTSplit"><span class="hv-vthumb"></span></div>
  ${editorPane}
  <div class="hv-vsplit" id="hvSplit"><span class="hv-vthumb"></span></div>
  ${previewPane}
  ${citePopover}
</section>`;

const strip = (html: string) => html.replace(/ id="hv[A-Za-z0-9]+"/g, "");

/* ----------------------------------------------------------- citations */
/** Editor copy for the Citations flow: project ids stripped, then the flow's
 * own cursor anchors added (the @ toolbar button and the insertion span). */
const citeEditor = strip(editorPane)
  .replace(`<span class="hv-ib-s">${ic.at}</span>`, `<span class="hv-ib-s" id="hvCAt">${ic.at}</span>`)
  .replace('<span class="hv-cite-ins">', '<span class="hv-cite-ins" id="hvCIns">');

/** Tree + structure copy with an anchor on the "figure" structure row. */
const citeTree = strip(sourceTree).replace(
  '<span class="hv-srow-name">figure</span>',
  '<span class="hv-srow-name" id="hvCFig">figure</span>',
);

const pickRow = (bibkey: string, meta: string) =>
  `<div class="hv-cpick-row"><span class="hv-cpick-key">${bibkey}</span><span class="hv-cpick-meta">${meta}</span></div>`;

const citeUsage = (bibkey: string, locs: string, danger = false) =>
  `<div class="hv-rrow ind"><span class="hv-rkey">${bibkey}</span><span class="hv-rtag${danger ? " danger" : ""}">${locs}</span></div>`;

const symRow = (icon: string, name: string, prov: string) =>
  `<div class="hv-rrow ind"><span class="hv-sic">${icon}</span><span class="hv-rkey">${name}</span><span class="hv-rtag">${prov}</span></div>`;

/* ------------------------------------------------------ versions & git */

/* one diff row: n = line number, kind = "" | "del" | "add" */
const dRow = (n: number | "", html: string, kind = "") =>
  `<div class="hv-gd-row${kind ? ` is-${kind}` : ""}"><span class="hv-gd-ln">${n}</span><span class="hv-gd-ct">${html}</span></div>`;
const dBand = (n: number) => `<div class="hv-gd-band">&#124; ${n} unchanged lines &#124;</div>`;

const tk = {
  cmd: (s: string) => `<span class="t-cmd">${s}</span>`,
  br: (s: string) => `<span class="t-br">${s}</span>`,
  env: (s: string) => `<span class="t-env">${s}</span>`,
  key: (s: string) => `<span class="t-key">${s}</span>`,
};
const diffCtx = [
  dRow(9, `${tk.cmd("\\begin")}${tk.br("{")}${tk.env("document")}${tk.br("}")}${tk.cmd("\\maketitle")}`),
  dRow(10, `${tk.cmd("\\begin")}${tk.br("{")}${tk.env("abstract")}${tk.br("}")}`),
  dRow(11, `We present EdgeSense, a low-power wildfire early-warning system that fuses thermal,`),
  dRow(12, `particulate, humidity, and wind observations across a mesh of battery-powered`),
];
const diffTail = [
  dRow(14, `In a 16-week controlled field deployment, EdgeSense detected 94.1${tk.cmd("\\%")} of burn events`),
  dRow(15, `at 0.7 false alarms per node-week while reducing radio energy by 63${tk.cmd("\\%")} relative to`),
  dRow(16, `periodic streaming. Results use a synthetic but realistic demo dataset.`),
  dRow(17, `${tk.cmd("\\end")}${tk.br("{")}${tk.env("abstract")}${tk.br("}")}`),
];
const diffPane = `
<div class="hv-gd">
  <div class="hv-gd-bar">
    <span class="hv-gd-mode">${ic.gitCompare}Working &#8646; Index</span>
    <span class="hv-gd-nav">${ic.chevU}${ic.chevD}<i></i><b class="is-on">${ic.columns2}</b><b>${ic.rows}</b></span>
  </div>
  <div class="hv-gd-panes">
    <div class="hv-gd-pane">
      ${dBand(8)}${diffCtx.join("")}
      ${dRow(13, `nodes. A gated temporal model runs locally and transmits only uncertain windows.`, "del")}
      ${diffTail.join("")}${dBand(78)}
    </div>
    <div class="hv-gd-pane">
      ${dBand(8)}${diffCtx.join("")}
      ${dRow(13, `nodes. A gated temporal model runs locally and transmits only uncertain windows<span class="hv-gd-w">~${tk.cmd("\\cite")}${tk.br("{")}${tk.key("lecun2015deep")}${tk.br("}")}</span>.`, "add")}
      ${diffTail.join("")}${dBand(78)}
    </div>
  </div>
</div>`;

/** Editor copy for the Versions & Git flow: the tab strip gains a
 * "main.tex (Working Tree)" tab and the diff pane sits inside the editor,
 * swapped in for the toolbar+code while [data-git-diff] is set. */
const gitEditor = strip(editorPane)
  .replace(
    `<span class="hv-tab is-active">main.tex<span class="hv-tab-x">${ic.x}</span></span>`,
    `<span class="hv-tab hv-gtab-main">main.tex<span class="hv-tab-x">${ic.x}</span></span><span class="hv-tab hv-gtab-diff">main.tex&nbsp;<i>(Working Tree)</i><span class="hv-tab-x">${ic.x}</span></span>`,
  )
  .replace('<div class="hv-code">', `${diffPane}<div class="hv-code">`);

const commitRow = (label: string, msg: string, meta: string, opts: { cls?: string; actions?: string } = {}) =>
  `<div class="hv-gh-row${opts.cls ? ` ${opts.cls}` : ""}">
    <div class="hv-gh-main">
      <span class="hv-gh-label">${label}<span class="hv-gh-pencil">${ic.pencil}</span></span>
      <span class="hv-gh-msg">${msg}</span>
      <span class="hv-gh-meta">${meta}</span>
    </div>
    ${opts.actions ?? `<span class="hv-gh-restore">${ic.rotateCcw}Restore</span>`}
  </div>`;

export const historyScene = `
<section class="hv-scene" data-scene="history">
  <aside class="hv-git">
    <div class="hv-git-in">
      <div class="hv-panel-head">
        <span class="hv-ph-ic">${ic.gitBranch}</span><span class="hv-ph-label">Source Control</span>
        <span class="hv-ph-actions">${iconBtn(ic.refresh, "hv-ib-xs")}</span>
      </div>
      <div class="hv-git-meta">
        <span class="hv-git-branch">${ic.gitBranch}main</span>
        <span class="hv-git-ahead"><i class="hv-git-up">&uarr;1</i></span>
      </div>
      <div class="hv-git-groups">
        <div class="hv-git-ghead hv-git-staged-head">Staged <span class="hv-rtag">1</span></div>
        <div class="hv-git-row hv-git-staged-row"><span class="hv-git-st m">M</span><span class="hv-git-fname">main.tex</span></div>
        <div class="hv-git-ghead hv-git-changes-head">Changes <span class="hv-rtag hv-git-chg-n">1</span></div>
        <div class="hv-git-row" id="hvGChange"><span class="hv-git-st m">M</span><span class="hv-git-fname">main.tex</span><span class="hv-git-stage" id="hvGStage">${ic.plus}</span></div>
        <div class="hv-git-clean">No changes. Your working tree is clean.</div>
      </div>
      <div class="hv-git-foot">
        <div class="hv-git-msg" id="hvGMsg"><span class="hv-git-msg-ph">Commit message</span><span class="hv-git-msg-t" id="hvGMsgText"></span><span class="hv-type-caret"></span></div>
        <div class="hv-git-btns">
          <span class="hv-git-commit">${ic.plus}Commit</span>
          <span class="hv-git-push" id="hvGPush"><span class="hv-git-push-spin"></span><span class="hv-git-push-t">Commit &amp; Push</span></span>
        </div>
        <div class="hv-git-status">${ic.checkCircle}Pushed to origin/main</div>
        <div class="hv-git-remote">github.com/prajwal-svm/edgesense-paper</div>
      </div>
    </div>
  </aside>
  ${gitEditor}
  <div class="hv-modal-backdrop hv-gh-backdrop"></div>
  <div class="hv-gh-modal">
    <div class="hv-gh-head">${ic.history}<b>Version History</b><span class="hv-gh-git">Git</span><span class="hv-gh-x" id="hvGClose">${ic.x}</span></div>
    <div class="hv-gh-tabs"><span class="hv-gh-seg"><span class="hv-gh-tab-all" id="hvGTabAll">All History</span><span class="hv-gh-tab-labels" id="hvGTabLabels">Labels</span></span></div>
    <div class="hv-gh-rows">
      ${commitRow("Manual Commit", "Add deep-learning citation", "Aug 17, 2026, 7:02 PM &middot; f4a9c21", { cls: "hv-gh-new" })}
      ${commitRow("Compile V12", "Update: main.tex", "Aug 17, 2026, 6:47 PM &middot; 9f3e2a1")}
      ${commitRow("AI checkpoint", "Oleafly AI checkpoint", "Aug 17, 2026, 6:31 PM &middot; 4c8d7b2")}
      ${commitRow("Compile V11", "Update: main.tex, references.bib", "Aug 17, 2026, 6:24 PM &middot; b7e1d90", {
        actions: `<span class="hv-gh-restore" id="hvGRestore">${ic.rotateCcw}Restore</span><span class="hv-gh-confirm"><span class="hv-gh-overwrite">Overwrite all</span><span class="hv-gh-cancel" id="hvGCancel">Cancel</span></span>`,
      })}
      ${commitRow("Compile V10", "Update: main.tex", "Aug 16, 2026, 11:12 PM &middot; 2c5f8a3")}
      ${commitRow("Manual Commit", "Initial import from IEEE template", "Aug 14, 2026, 9:03 AM &middot; 07d41ce")}
    </div>
  </div>
</section>`;

/* --------------------------------------------------- polish & submit */
/** Editor copy for the Polish & Submit flow: a Code|Visual switch and a
 * word-count anchor in the toolbar, rename markers on both gelman2013 keys,
 * and the visual-editor pane swapped in under [data-pl-visual]. */
const visualPane = `
<div class="hv-vis">
  <div class="hv-vis-doc">
    <h3>Results</h3>
    <p><span class="hv-vis-sel" id="hvPVisSel">EdgeSense retains 98.3% of the streaming baseline&rsquo;s recall</span> while using 37% of its radio energy&nbsp;<i class="hv-vis-cite">gelman2014</i>. Peer voting removes 31% of fog-related false alarms&nbsp;<i class="hv-vis-cite">hastie2009</i>. At the median observed solar input, the modeled service interval rises from 11 to 29 months. Performance degrades gracefully when one sensing channel is unavailable.</p>
    <h3>Ablations, safety, and limitations</h3>
    <p>Removing peer voting increases false alarms by 44%; removing wind direction reduces recall by 3.8 points&nbsp;<i class="hv-vis-cite">lundberg2017</i>. EdgeSense is advisory: alerts require confirmation by the incident-management system.</p>
  </div>
</div>`;

const polishEditor = strip(editorPane)
  .replace(
    `<span class="hv-ib-s hv-etb-type">`,
    `<span class="hv-wys"><i class="hv-wys-side" id="hvPCodeBtn">Code</i><i class="hv-wys-side" id="hvPVisBtn">Visual</i></span><span class="hv-div"></span><span class="hv-ib-s hv-etb-type">`,
  )
  .replace(`<span class="hv-ib-s">${ic.bold}</span>`, `<span class="hv-ib-s" id="hvPBold">${ic.bold}</span>`)
  .replace(`<span class="hv-ib-s">${ic.info}</span>`, `<span class="hv-ib-s" id="hvPInfo">${ic.info}</span>`)
  .replaceAll('<span class="t-key">gelman2013</span>', '<span class="t-key hv-pl-ren">gelman2013</span>')
  .replace('<div class="hv-code">', `${visualPane}<div class="hv-code">`);

const polishPreview = strip(previewPane)
  .replace('<span class="hv-syncw">', '<span class="hv-syncw" id="hvPSyncW">')
  .replace(
    `<span class="hv-pgmode only-done"><span class="hv-ib-s is-on">${ic.file}</span><span class="hv-ib-s">${ic.columns2}</span></span>`,
    `<span class="hv-pgmode only-done"><span class="hv-ib-s hv-pg-one">${ic.file}</span><span class="hv-ib-s hv-pg-two" id="hvPTwoPage">${ic.columns2}</span></span>`,
  );

/** Preflight ring gauge (circumference 100 → dasharray = score). */
const pfRing = (score: number, color: string, label: string) => `
<div class="hv-pf-gauge">
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="15.9" fill="none" stroke="rgba(255,255,255,.09)" stroke-width="3.4"/>
    <circle class="hv-pf-arc" cx="20" cy="20" r="15.9" fill="none" stroke="${color}" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="${score} 100" transform="rotate(-90 20 20)"/>
  </svg>
  <b>${score}</b><i>${label}</i>
</div>`;

const pfIssue = (icon: string, tint: string, title: string, meta: string) =>
  `<div class="hv-pf-issue"><span class="hv-pf-iic" style="color:${tint}">${icon}</span><span class="hv-pf-itxt"><b>${title}</b><i>${meta}</i></span><span class="hv-pf-chev">${ic.chevR}</span></div>`;

const preflightPanel = `
<aside class="hv-pf">
  <div class="hv-pf-in">
    <div class="hv-panel-head">
      <span class="hv-ph-ic">${ic.shieldCheck}</span><span class="hv-ph-label">Preflight</span>
      <span class="hv-ph-actions">${iconBtn(ic.info, "hv-ib-xs")}</span>
    </div>
    <div class="hv-pf-cards">
      <div class="hv-pf-card">
        <div class="hv-pf-head"><span class="hv-pf-check"></span>${ic.fileText}<b>ATS readiness</b><span class="hv-pf-run">${ic.play}Run</span><span class="hv-pf-hchev">${ic.chevD}</span></div>
      </div>
      <div class="hv-pf-card is-open">
        <div class="hv-pf-head"><span class="hv-pf-check is-on">${ic.checkCircle}</span>${ic.user}<b>Accessibility</b><span class="hv-pf-rerun">${ic.play}Re-run</span><span class="hv-pf-hchev">${ic.chevU}</span></div>
        <div class="hv-pf-body">
          <div class="hv-pf-lab">For research, government, and published PDFs</div>
          <div class="hv-pf-desc">Checks screen-reader readiness against Section 508 / WCAG: missing alt text, document language, reading order, and whether the PDF is tagged.</div>
          ${pfRing(82, "#f59e0b", "Access")}
          <div class="hv-pf-lab">Compiled output</div>
          ${pfIssue(ic.circleAlert, "#f59e0b", "PDF is missing a language and title", "ACCESSIBILITY")}
          ${pfIssue(ic.info, "#8a8f98", "Not Section 508 / PDF-UA ready: this PDF is not tagged", "ACCESSIBILITY")}
        </div>
      </div>
      <div class="hv-pf-card is-open">
        <div class="hv-pf-head"><span class="hv-pf-check is-on">${ic.checkCircle}</span>${ic.link}<b>References &amp; assets</b><span class="hv-pf-rerun">${ic.play}Re-run</span><span class="hv-pf-hchev">${ic.chevU}</span></div>
        <div class="hv-pf-body">
          <div class="hv-pf-lab">For research and multi-file documents</div>
          <div class="hv-pf-desc">Finds undefined citations and cross-references, duplicate labels, and missing figures before they break your PDF at submission.</div>
          ${pfRing(72, "#f59e0b", "Refs")}
          ${pfIssue(ic.circleAlert, "#ef4444", "3 citations have no bibliography entry", "REFERENCES &middot; main.tex")}
        </div>
      </div>
    </div>
  </div>
</aside>`;

export const polishScene = `
<section class="hv-scene" data-scene="polish">
  ${preflightPanel}
  ${polishEditor}
  <div class="hv-vsplit"><span class="hv-vthumb"></span></div>
  ${polishPreview}
  <div class="hv-modal-backdrop hv-pl-backdrop"></div>
  <div class="hv-rn-modal">
    <div class="hv-rn-title">Rename <b>gelman2013</b></div>
    <div class="hv-rn-input"><span class="hv-rn-old">gelman2013</span><span class="hv-rn-new" id="hvPRnNew"></span><span class="hv-type-caret"></span></div>
    <div class="hv-rn-hint">2 edits across 1 file</div>
    <div class="hv-dlg-foot"><span class="hv-btn-ghost">Cancel</span><span class="hv-btn-primary" id="hvPRnGo">Rename</span></div>
  </div>
  <div class="hv-wc-modal">
    <div class="hv-wc-title">Word count</div>
    <div class="hv-wc-file">main.tex</div>
    <div class="hv-wc-row"><span>Words</span><b>1,284</b></div>
    <div class="hv-wc-row"><span>Characters</span><b>8,946</b></div>
    <div class="hv-wc-row"><span>Lines</span><b>95</b></div>
    <div class="hv-dlg-foot"><span class="hv-btn-ghost" id="hvPWcClose">Close</span></div>
  </div>
  <div class="hv-cite-toast hv-pl-toast"><span class="hv-toast-ic">${ic.checkCircle}</span><span>Renamed to <b>&quot;gelman2014&quot;</b> (2 edits in 1 file)</span></div>
</section>`;

export const citeScene = `
<section class="hv-scene" data-scene="cite">
  <div class="hv-cite-left">
    ${citeTree}
    <aside class="hv-side">
      <div class="hv-panel-head">
        <span class="hv-ph-ic">${ic.searchCode}</span><span class="hv-ph-label">References</span>
        <span class="hv-warn-badge">4</span>
      </div>
      <div class="hv-ref-seg"><span id="hvCSegRefs" class="is-on">References &middot; <i class="hv-cite-c12">12</i><i class="hv-cite-c13">13</i></span><span id="hvCSegCites">Citations &middot; 8</span><span id="hvCSegSyms">Symbols &middot; 4</span></div>
      <div class="hv-filter hv-ref-filter">${ic.search}<span>Filter&hellip;</span></div>
      <div class="hv-refs hv-reflist" data-view="refs">
        <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Unresolved citations <span class="hv-rtag warn">4</span></div>
        <div class="hv-rrow ind"><span class="hv-rkey">hastie2009</span><span class="hv-rtag danger">main.tex:21</span></div>
        <div class="hv-rrow ind"><span class="hv-rkey">vaswani2017</span><span class="hv-rtag danger">main.tex:28</span></div>
        <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Bibliography <span class="hv-rtag"><i class="hv-cite-c12">12</i><i class="hv-cite-c13">13</i></span></div>
        <div class="hv-rrow ind"><span class="hv-schev">${ic.chevD}</span>references.bib</div>
        <div class="hv-rrow ind2 hv-cite-newrow"><span class="hv-rkey">lecun2015deep</span><span class="hv-rtag">2015</span></div>
        <div class="hv-rrow ind2 hv-refdesc hv-cite-newrow">Deep learning &mdash; Nature 521, 436&ndash;444</div>
        <div class="hv-rrow ind2"><span class="hv-rkey">wilkinson2016</span><span class="hv-rtag">2016</span></div>
        <div class="hv-rrow ind2 hv-refdesc">The FAIR Guiding Principles for scientific&hellip;</div>
        <div class="hv-rrow ind2"><span class="hv-rkey">warden2019</span><span class="hv-rtag">2019</span></div>
        <div class="hv-rrow ind2 hv-refdesc">TinyML: Machine Learning with Ultra-Low&hellip;</div>
      </div>
      <div class="hv-refs hv-reflist" data-view="cites">
        <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Citations in main.tex <span class="hv-rtag">8</span></div>
        ${citeUsage("hastie2009", "21 &middot; 67 &middot; 89", true)}
        ${citeUsage("wilkinson2016", "23 &middot; 46")}
        ${citeUsage("vaswani2017", "28 &middot; 85", true)}
        ${citeUsage("gelman2013", "29 &middot; 67")}
        ${citeUsage("lundberg2017", "48 &middot; 83", true)}
      </div>
      <div class="hv-refs hv-reflist" data-view="syms">
        <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Labels <span class="hv-rtag">4</span></div>
        ${symRow(ic.hash, "fig:architecture", "main.tex:43")}
        ${symRow(ic.hash, "tab:results", "main.tex:56")}
        ${symRow(ic.box, "equation", "main.tex:50")}
        ${symRow(ic.box, "figure", "main.tex:71")}
      </div>
    </aside>
  </div>
  ${citeEditor}
  <div class="hv-askai" id="hvCAskAi">${ic.sparkles}Ask AI</div>
  <div class="hv-cpick" id="hvCPick">
    <div class="hv-cpick-search">${ic.search}<span>Key, author, or title&hellip;</span></div>
    ${pickRow("ba2016", "Ba, Jimmy Lei and Kiros, Jamie Ryan and Hinton, Geoffrey E. &middot; 2016&hellip;")}
    ${pickRow("bahdanau2015", "Bahdanau, Dzmitry and Cho, Kyunghyun and Bengio, Yoshua &middot; 2015&hellip;")}
    ${pickRow("cheng2016", "Cheng, Jianpeng and Dong, Li and Lapata, Mirella &middot; 2016 &middot; Long S&hellip;")}
    ${pickRow("cho2014", "Cho, Kyunghyun and van Merri&euml;nboer, Bart and Gulcehre, Cagl&hellip;")}
    ${pickRow("gehring2017", "Gehring, Jonas and Auli, Michael and Grangier, David and Yarats&hellip;")}
    ${pickRow("hochreiter1997", "Hochreiter, Sepp and Schmidhuber, J&uuml;rgen &middot; 1997 &middot; Neural Com&hellip;")}
    <div class="hv-cpick-find" id="hvCFind">${ic.plus}Find and add a new citation&hellip;</div>
  </div>
  <div class="hv-modal-backdrop"></div>
  <div class="hv-dialog">
    <div class="hv-dlg-head"><span class="hv-dlg-title">${ic.at} Add citation</span>${iconBtn(ic.x, "hv-ib-s")}</div>
    <div class="hv-dlg-search">${ic.search}<span class="hv-dlg-q"><i class="hv-dlg-ph">DOI, arXiv id, URL, or a paper title&hellip;</i><i class="hv-dlg-val">10.1038/nature14539</i></span><span class="hv-dlg-go" id="hvCLookup"><span class="hv-dlg-spin"></span><span class="hv-dlg-go-t">Look up</span></span></div>
    <div class="hv-dlg-note">Only the identifier or title is sent, to doi.org, arXiv, or Crossref.</div>
    <div class="hv-dlg-empty">
      <div class="hv-dlg-help">Paste a DOI, an arXiv id, or a URL to fetch the entry directly, or type a title to search Crossref. Try one:</div>
      <div class="hv-dlg-chips">
        <span class="hv-chip" id="hvCChipDoi">DOI: 10.1038/nature14539</span>
        <span class="hv-chip">arXiv: 1706.03762</span>
        <span class="hv-chip">Title: Attention is all you need</span>
      </div>
    </div>
    <div class="hv-dlg-result">
      <pre class="hv-dlg-bib"><span class="t-cmd">@article</span><span class="t-br">&#123;</span><span class="t-key">lecun2015deep</span>,
  author  = <span class="t-br">&#123;</span>LeCun, Yann and Bengio, Yoshua and Hinton, Geoffrey<span class="t-br">&#125;</span>,
  title   = <span class="t-br">&#123;</span>Deep learning<span class="t-br">&#125;</span>,
  journal = <span class="t-br">&#123;</span>Nature<span class="t-br">&#125;</span>,
  volume  = <span class="t-num">521</span>,
  pages   = <span class="t-br">&#123;</span>436--444<span class="t-br">&#125;</span>,
  year    = <span class="t-num">2015</span>,
  doi     = <span class="t-br">&#123;</span>10.1038/nature14539<span class="t-br">&#125;</span>,
<span class="t-br">&#125;</span></pre>
      <div class="hv-dlg-foot"><span class="hv-btn-ghost">Cancel</span><span class="hv-btn-primary" id="hvCAddBib">Add to .bib and cite</span></div>
    </div>
  </div>
  <div class="hv-cite-toast"><span class="hv-toast-ic">${ic.checkCircle}</span><span>Added <b>\\cite&#123;lecun2015deep&#125;</b> &middot; references.bib</span></div>
</section>`;
