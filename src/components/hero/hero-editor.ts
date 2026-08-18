/**
 * Editor pane for the hero app replica: the complete EdgeSense main.tex,
 * hand-tokenized with the desktop app's dark CodeMirror palette
 * (GitHub-dark vars from packages/editor/src/theme.ts):
 *   commands #ff7b72 · braces #d2a8ff · arguments/keys #79c0ff ·
 *   env/package names #7ee787 · plain text --foreground.
 * Gutter markers mirror the app: lightbulb hints (#eab308), circle-alert
 * errors (#ef4444) on unresolved \cite lines, fold chevrons on block
 * openers; spell-check words get an amber wavy.
 */
import { ic } from "./hero-icons";

/* token helpers */
const k = (s: string) => `<span class="t-cmd">${s}</span>`; // \command
const b = (s: string) => `<span class="t-br">${s}</span>`; // { } [ ]
const a = (s: string) => `<span class="t-env">${s}</span>`; // env / package names
const key = (s: string, id = "") =>
  `<span class="t-key${id ? " hv-editkey" : ""}"${id ? ` id="${id}"` : ""}>${s}</span>`; // cite/ref keys
const num = (s: string) => `<span class="t-num">${s}</span>`;
const sp = (s: string) => `<span class="t-sp">${s}</span>`; // spell-check wavy

const bulb = `<svg viewBox="0 0 24 24" fill="none" stroke="#eab308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`;
const errIc = `<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`;
const foldIc = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

/**
 * One logical source line. mark: "bulb" | "err" | "fold" | "".
 * Error lines carry data-err so the marker can be cleared when the
 * reference is fixed during the tour.
 */
const L = (n: number, html: string, mark = "", active = false) => {
  const m =
    mark === "bulb"
      ? `<span class="hv-mark">${bulb}</span>`
      : mark === "err"
        ? `<span class="hv-mark hv-mark-err">${errIc}</span>`
        : mark === "fold"
          ? `<span class="hv-mark hv-mark-fold">${foldIc}</span>`
          : `<span class="hv-mark"></span>`;
  return `<div class="hv-cl${active ? " is-active" : ""}${mark === "err" ? " has-err" : ""}" data-l="${n}"><span class="hv-ln">${n}</span>${m}<span class="hv-ct">${html}</span></div>`;
};

export const codeLines = [
  L(1, `${k("\\documentclass")}${b("[")}conference${b("]")}${b("{")}${a("IEEEtran")}${b("}")}`, "", true),
  L(2, `${k("\\usepackage")}${b("{")}${a("amsmath,amssymb,booktabs,graphicx,xcolor,tikz")}${b("}")}`),
  L(3, `${k("\\usepackage")}${b("[")}hidelinks${b("]")}${b("{")}${a("hyperref")}${b("}")}`),
  L(4, `${k("\\usetikzlibrary")}${b("{")}${a("positioning,arrows.meta,shapes.geometric")}${b("}")}`),
  L(5, `${k("\\title")}${b("{")}EdgeSense: Energy-Aware Wildfire Detection with Collaborative Sensor Networks${b("}")}`),
  L(6, `${k("\\author")}${b("{")}${k("\\IEEEauthorblockN")}${b("{")}Nadia Flores, Min-jun Lee, and Caleb Morgan${b("}")}`),
  L(7, `${k("\\IEEEauthorblockA")}${b("{")}Center for Resilient Computing, Cascadia Institute of Technology${k("\\\\")}`),
  L(8, `Seattle, WA, USA ${k("\\quad")} ${k("\\{")}nflores,mjlee,cmorgan${k("\\}")}@example.edu${b("}")}${b("}")}`),
  L(9, `${k("\\begin")}${b("{")}${a("document")}${b("}")}${k("\\maketitle")}`, "fold"),
  L(10, `${k("\\begin")}${b("{")}${a("abstract")}${b("}")}`, "fold"),
  L(11, `We present ${sp("EdgeSense")}, a low-power wildfire early-warning system that fuses thermal,`, "bulb"),
  L(12, `particulate, humidity, and wind observations across a mesh of battery-powered`),
  // .hv-cite-ins is empty here and in the project scene; the Citations flow
  // reveals the \cite{lecun2015deep} body (and a caret) via root data-cite-*.
  L(13, `nodes. A gated temporal model runs locally and transmits only uncertain windows<span class="hv-cite-ins"><span class="hv-cins-caret"></span><span class="hv-cins-body">~${k("\\cite")}${b("{")}${key("lecun2015deep")}${b("}")}</span></span>.`),
  L(14, `In a 16-week controlled field deployment, ${sp("EdgeSense")} detected 94.1${k("\\%")} of burn events`, "bulb"),
  L(15, `at 0.7 false alarms per node-week while reducing radio energy by 63${k("\\%")} relative to`),
  L(16, `periodic streaming. Results use a synthetic but realistic demo dataset.`),
  L(17, `${k("\\end")}${b("{")}${a("abstract")}${b("}")}`),
  L(18, `${k("\\begin")}${b("{")}${a("IEEEkeywords")}${b("}")}edge computing, environmental sensing, wildfire, ${sp("TinyML")}, sensor networks${k("\\end")}${b("{")}${a("IEEEkeywords")}${b("}")}`, "bulb"),
  L(19, `${k("\\section")}${b("{")}Introduction${b("}")}`, "fold"),
  L(20, `Wildfire ignition can develop faster than sparse satellite revisit cycles and`),
  L(21, `manual reports~${k("\\cite")}${b("{")}${key("hastie2009", "hvEditKey")}<span class="hv-type-caret"></span>${b("}")}. Dense ground networks provide local measurements but create a`, "err"),
  L(22, `difficult systems trade-off: radios consume most of a node's energy, yet delaying`),
  L(23, `communication can hide the earliest evidence~${k("\\cite")}${b("{")}<span class="hv-citehot" id="hvCiteHot">${key("wilkinson2016")}</span>${b("}")}. ${sp("EdgeSense")} moves triage to the node`, "err"),
  L(24, `and treats transmission as a decision under uncertainty.`),
  L(25, `&nbsp;`),
  L(26, `${k("\\section")}${b("{")}System design${b("}")}`, "fold"),
  L(27, `Each node samples temperature, relative humidity, particulate matter, and wind`),
  L(28, `once per minute~${k("\\cite")}${b("{")}${key("vaswani2017")}${b("}")}. A 12${k("\\,")}kB ${sp("quantized")} temporal ${sp("convolutional")} network scores`, "err"),
  L(29, `five-minute windows~${k("\\cite")}${b("{")}${key("gelman2013")}${b("}")}. Scores below 0.25 are stored locally; scores between 0.25 and`, "err"),
  L(30, `${num("0.70")} trigger peer confirmation; scores above ${num("0.70")} trigger an immediate gateway`),
  L(31, `packet.`),
  L(32, `${k("\\begin")}${b("{")}${a("figure")}${b("}")}${b("[")}t${b("]")}${k("\\centering")}`, "fold"),
  L(33, `${k("\\begin")}${b("{")}${a("tikzpicture")}${b("}")}${b("[")}font=${k("\\scriptsize")},node distance=4mm,`, "bulb"),
  L(34, `n/.style=${b("{")}draw,rounded corners,fill=blue!6,minimum width=18mm,minimum height=7mm${b("}")},`),
  L(35, `a/.style=${b("{")}-${b("{")}Stealth${b("[")}length=1.7mm${b("]")}${b("}")},thick${b("}")}${b("]")}`),
  L(36, `${k("\\node")}${b("[")}n${b("]")} (s) ${b("{")}Sensors${b("}")}; ${k("\\node")}${b("[")}n,right=of s${b("]")} (f) ${b("{")}Feature buffer${b("}")};`),
  L(37, `${k("\\node")}${b("[")}n,right=of f${b("]")} (m) ${b("{")}Tiny model${b("}")}; ${k("\\node")}${b("[")}n,below=of m${b("]")} (p) ${b("{")}Peer vote${b("}")};`),
  L(38, `${k("\\node")}${b("[")}n,left=of p${b("]")} (g) ${b("{")}Gateway${b("}")};`),
  L(39, `${k("\\draw")}${b("[")}a${b("]")}(s)--(f);${k("\\draw")}${b("[")}a${b("]")}(f)--(m);${k("\\draw")}${b("[")}a${b("]")}(m)--(p);${k("\\draw")}${b("[")}a${b("]")}(p)--(g);`),
  L(40, `${k("\\draw")}${b("[")}a,bend left=25${b("]")}(m) to node${b("[")}above${b("]")}${b("{")}high confidence${b("}")}(g);`),
  L(41, `${k("\\end")}${b("{")}${a("tikzpicture")}${b("}")}`),
  L(42, `${k("\\caption")}${b("{")}${sp("EdgeSense")} performs local triage and requests peer confirmation only for ambiguous windows.${b("}")}`),
  L(43, `${k("\\label")}${b("{")}${key("fig:architecture")}${b("}")}${k("\\end")}${b("{")}${a("figure")}${b("}")}`),
  L(44, `&nbsp;`),
  L(45, `${k("\\section")}${b("{")}Deployment and evaluation${b("}")}`, "fold"),
  L(46, `We deployed 48 nodes across three ecological zones~${k("\\cite")}${b("{")}${key("wilkinson2016")}${b("}")}. Controlled burns and heated`, "err"),
  L(47, `aerosol challenges generated 186 positive windows; 11,420 background windows`),
  L(48, `captured fog, dust, vehicle exhaust, and sensor maintenance~${k("\\cite")}${b("{")}${key("lundberg2017")}${b("}")}. Splits were grouped`, "err"),
  L(49, `by day to prevent temporal leakage.`),
  L(50, `${k("\\begin")}${b("{")}${a("equation")}${b("}")}`, "fold"),
  L(51, `${k("\\mathcal")}${b("{")}L${b("}")}=-w_+y${k("\\log")} p-w_-(1-y)${k("\\log")}(1-p)+${k("\\lambda")}${k("\\lVert")}${k("\\theta")}${k("\\rVert")}_2^2.`),
  L(52, `${k("\\end")}${b("{")}${a("equation")}${b("}")}`),
  L(53, `We compare periodic streaming, fixed thresholds, an ungated neural baseline, and`),
  L(54, `${sp("EdgeSense")}. The primary metrics are event recall, false alarms per node-week,`),
  L(55, `median alert latency, and measured radio energy.`),
  L(56, `${k("\\begin")}${b("{")}${a("table")}${b("}")}${b("[")}t${b("]")}${k("\\centering")}${k("\\caption")}${b("{")}Field evaluation results.${b("}")}${k("\\label")}${b("{")}${key("tab:results")}${b("}")}`, "fold"),
  L(57, `${k("\\begin")}${b("{")}${a("tabular")}${b("}")}${b("{")}@${b("{")}${b("}")}lrrrr@${b("{")}${b("}")}${b("}")}${k("\\toprule")}`, "fold"),
  L(58, `Method & Recall & FA/wk & Latency & Energy${k("\\\\")}${k("\\midrule")}`),
  L(59, `Periodic stream & .957 & 1.8 & 72 s & 100${k("\\%")}${k("\\\\")}`),
  L(60, `Fixed threshold & .876 & 3.4 & 61 s & 41${k("\\%")}${k("\\\\")}`),
  L(61, `Ungated TCN & .946 & 1.1 & 58 s & 52${k("\\%")}${k("\\\\")}`),
  L(62, `${k("\\textbf")}${b("{")}EdgeSense${b("}")} & ${k("\\textbf")}${b("{")}.941${b("}")} & ${k("\\textbf")}${b("{")}0.7${b("}")} & ${k("\\textbf")}${b("{")}54 s${b("}")} & ${k("\\textbf")}${b("{")}37${k("\\%")}${b("}")}${k("\\\\")}${k("\\bottomrule")}`),
  L(63, `${k("\\end")}${b("{")}${a("tabular")}${b("}")}${k("\\end")}${b("{")}${a("table")}${b("}")}`),
  L(64, `&nbsp;`),
  L(65, `${k("\\section")}${b("{")}Results${b("}")}`, "fold"),
  L(66, `${sp("EdgeSense")} retains 98.3${k("\\%")} of the streaming baseline's recall while using 37${k("\\%")} of`),
  L(67, `its radio energy~${k("\\cite")}${b("{")}${key("gelman2013")}${b("}")}. Peer voting removes 31${k("\\%")} of fog-related false alarms~${k("\\cite")}${b("{")}${key("hastie2009")}${b("}")}. At the`, "err"),
  L(68, `median observed solar input, the modeled service interval rises from 11 to 29`),
  L(69, `months. Performance degrades gracefully when one sensing channel is unavailable.`),
  L(70, `&nbsp;`),
  L(71, `${k("\\begin")}${b("{")}${a("figure")}${b("}")}${b("[")}t${b("]")}${k("\\centering")}`, "fold"),
  L(72, `${k("\\begin")}${b("{")}${a("tikzpicture")}${b("}")}${b("[")}x=.72cm,y=.55cm,font=${k("\\scriptsize")}${b("]")}`, "bulb"),
  L(73, `${k("\\draw")}${b("[")}->${b("]")}(0,0)--(7,0)node${b("[")}right${b("]")}${b("{")}week${b("}")};${k("\\draw")}${b("[")}->${b("]")}(0,0)--(0,5)node${b("[")}above${b("]")}${b("{")}recall${b("}")};`),
  L(74, `${k("\\draw")}${b("[")}blue,very thick${b("]")} plot coordinates${b("{")}(0,.8)(1,1.6)(2,2.2)(3,2.8)(4,3.5)(5,4.0)(6,4.25)${b("}")};`),
  L(75, `${k("\\draw")}${b("[")}orange,very thick,dashed${b("]")} plot coordinates${b("{")}(0,.7)(1,1.3)(2,1.9)(3,2.4)(4,2.8)(5,3.1)(6,3.25)${b("}")};`),
  L(76, `${k("\\node")}${b("[")}blue${b("]")} at (5.2,4.5)${b("{")}EdgeSense${b("}")};${k("\\node")}${b("[")}orange${b("]")} at (5,2.6)${b("{")}threshold${b("}")};`),
  L(77, `${k("\\end")}${b("{")}${a("tikzpicture")}${b("}")}`),
  L(78, `${k("\\caption")}${b("{")}Cumulative detection performance remained stable across the deployment.${b("}")}`),
  L(79, `${k("\\end")}${b("{")}${a("figure")}${b("}")}`),
  L(80, `&nbsp;`),
  L(81, `${k("\\section")}${b("{")}Ablations, safety, and limitations${b("}")}`, "fold"),
  L(82, `Removing peer voting increases false alarms by 44${k("\\%")}; removing wind direction`),
  L(83, `reduces recall by 3.8 points~${k("\\cite")}${b("{")}${key("lundberg2017")}${b("}")}. ${sp("EdgeSense")} is advisory: alerts require confirmation`, "err"),
  L(84, `by the incident-management system, and nodes never autonomously dispatch a public`),
  L(85, `warning~${k("\\cite")}${b("{")}${key("vaswani2017")}${b("}")}. The deployment did not cover crown fires or winter conditions.`, "err"),
  L(86, `&nbsp;`),
  L(87, `${k("\\section")}${b("{")}Conclusion${b("}")}`, "fold"),
  L(88, `Selective communication can extend unattended sensing without hiding early`),
  L(89, `signals~${k("\\cite")}${b("{")}${key("hastie2009")}${b("}")}. The next deployment will test transfer across biomes and signed`, "err"),
  L(90, `over-the-air model updates.`),
  L(91, `${k("\\begin")}${b("{")}${a("thebibliography")}${b("}")}${b("{")}${num("2")}${b("}")}`, "fold"),
  L(92, `${k("\\bibitem")}${b("{")}${key("fair")}${b("}")} M~${k("\\cite")}${b("{")}${key("wilkinson2016")}${b("}")}. Wilkinson et al., ${k("\\emph")}${b("{")}The FAIR Guiding Principles${b("}")}, ${k("\\emph")}${b("{")}Scientific Data${b("}")}, 2016.`),
  L(93, `${k("\\bibitem")}${b("{")}${key("tinyml")}${b("}")} P. Warden and D. Situnayake, ${k("\\emph")}${b("{")}TinyML${b("}")}. O'Reilly, 2019.`),
  L(94, `${k("\\end")}${b("{")}${a("thebibliography")}${b("}")}`),
  L(95, `${k("\\end")}${b("{")}${a("document")}${b("}")}`),
];

/** Editor pane: tab strip + formatting toolbar + soft-wrapped source. */
export const editorPane = `
<div class="hv-editor">
  <div class="hv-tabs">
    <span class="hv-tab is-active">main.tex<span class="hv-tab-x">${ic.x}</span></span>
  </div>
  <div class="hv-etb">
    <span class="hv-ib-s">${ic.undo}</span><span class="hv-ib-s">${ic.redo}</span>
    <span class="hv-div"></span>
    <span class="hv-ib-s hv-etb-type">${ic.type}${ic.chevD}</span>
    <span class="hv-div"></span>
    <span class="hv-ib-s">${ic.bold}</span><span class="hv-ib-s">${ic.italic}</span><span class="hv-ib-s">${ic.underline}</span>
    <span class="hv-div"></span>
    <span class="hv-ib-s">${ic.code}</span><span class="hv-ib-s">${ic.link}</span><span class="hv-ib-s">${ic.at}</span><span class="hv-ib-s">${ic.tag}</span><span class="hv-ib-s">${ic.asterisk}</span><span class="hv-ib-s">${ic.quote}</span>
    <span class="hv-div"></span>
    <span class="hv-ib-s">${ic.image}</span><span class="hv-ib-s">${ic.table}</span>
    <span class="hv-div"></span>
    <span class="hv-ib-s">${ic.list}</span><span class="hv-ib-s">${ic.rows}</span><span class="hv-ib-s">${ic.ellipsis}</span>
    <span class="hv-etb-right">
      <span class="hv-ib-s">${ic.info}</span><span class="hv-ib-s">${ic.search}</span><span class="hv-ib-s">${ic.arrowR}</span>
    </span>
  </div>
  <div class="hv-code"><div class="hv-codein">${codeLines.join("")}</div></div>
</div>`;
