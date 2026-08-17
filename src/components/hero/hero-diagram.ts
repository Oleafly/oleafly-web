import { ic, leaf } from "./hero-icons";

export const diagramSource = String.raw`\definecolor{c0F172A}{HTML}{0F172A}
\definecolor{c1E293B}{HTML}{1E293B}
\definecolor{cC7C7CC}{HTML}{C7C7CC}
\definecolor{cCDEDD0}{HTML}{CDEDD0}
\definecolor{cCFE8F8}{HTML}{CFE8F8}
\definecolor{cDAD2F0}{HTML}{DAD2F0}
\definecolor{cE9E9EC}{HTML}{E9E9EC}
\definecolor{cEEF2C3}{HTML}{EEF2C3}
\definecolor{cF9D7D9}{HTML}{F9D7D9}
\definecolor{cFDE3C7}{HTML}{FDE3C7}
\definecolor{cFFFFFF}{HTML}{FFFFFF}
\begin{tikzpicture}[>={Triangle[length=0.313cm,width=0.313cm]}]
  \node (n1_mds37) at (6.25,-21.75) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1cm] {Inputs};
  \node (n2_hnw3j) at (6.25,-20.075) [draw=c1E293B, line width=0.025cm, fill=cF9D7D9, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Input Embedding};
  \node (n3_x9vjf) at (4.25,-18.175) [circle, draw=c1E293B, line width=0.025cm, fill=cFFFFFF, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=0.85cm, minimum height=0.85cm] {};
  \node (n4_aa0b6) at (6.25,-18.175) [circle, draw=c1E293B, line width=0.025cm, fill=cFFFFFF, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=0.85cm, minimum height=0.85cm] {+};
  \node (n5_lbeum) at (2.625,-19.375) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=3.5cm, minimum height=1cm] {Positional Encoding};
  \node (n6_gr85r) at (6.25,-16.325) [draw=c1E293B, line width=0.025cm, fill=cFDE3C7, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Multi-Head Attention};
  \node (n7_it3d0) at (6.25,-14.575) [draw=c1E293B, line width=0.025cm, fill=cEEF2C3, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Add \& Norm};
  \node (n8_0ae9p) at (6.25,-12.575) [draw=c1E293B, line width=0.025cm, fill=cCFE8F8, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Feed Forward};
  \node (n9_31jhg) at (6.25,-10.825) [draw=c1E293B, line width=0.025cm, fill=cEEF2C3, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Add \& Norm};
  \node (n11_3mv5b) at (1.875,-13.575) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=1.25cm, minimum height=0.75cm] {N×};
  \node (n12_y6hil) at (16.25,-21.75) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1cm] {Outputs (shifted right)};
  \node (n13_oukbf) at (16.25,-20.075) [draw=c1E293B, line width=0.025cm, fill=cF9D7D9, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Output Embedding};
  \node (n14_e6m10) at (16.25,-18.175) [circle, draw=c1E293B, line width=0.025cm, fill=cFFFFFF, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=0.85cm, minimum height=0.85cm] {+};
  \node (n15_te7fn) at (18.25,-18.175) [circle, draw=c1E293B, line width=0.025cm, fill=cFFFFFF, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=0.85cm, minimum height=0.85cm] {};
  \node (n16_otz7n) at (19.875,-19.375) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=3.5cm, minimum height=1cm] {Positional Encoding};
  \node (n17_nw4kz) at (16.25,-16.325) [draw=c1E293B, line width=0.025cm, fill=cFDE3C7, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Masked Multi-Head Attention};
  \node (n18_feep8) at (16.25,-14.575) [draw=c1E293B, line width=0.025cm, fill=cEEF2C3, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Add \& Norm};
  \node (n19_9lw0g) at (16.25,-12.575) [draw=c1E293B, line width=0.025cm, fill=cFDE3C7, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Multi-Head Attention};
  \node (n20_lz6h6) at (16.25,-10.825) [draw=c1E293B, line width=0.025cm, fill=cEEF2C3, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Add \& Norm};
  \node (n21_iyi8d) at (16.25,-8.825) [draw=c1E293B, line width=0.025cm, fill=cCFE8F8, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Feed Forward};
  \node (n22_hapki) at (16.25,-7.075) [draw=c1E293B, line width=0.025cm, fill=cEEF2C3, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.15cm] {Add \& Norm};
  \node (n24_qwbl3) at (19.375,-11.825) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=1.25cm, minimum height=0.75cm] {N×};
  \node (n25_isnp1) at (16.25,-4.8) [draw=c1E293B, line width=0.025cm, fill=cDAD2F0, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.1cm] {Linear};
  \node (n26_ggail) at (16.25,-2.8) [draw=c1E293B, line width=0.025cm, fill=cCDEDD0, rounded corners=0.1cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.25cm, minimum height=1.1cm] {Softmax};
  \node (n27_76g5v) at (16.25,-0.875) [text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=4.5cm, minimum height=1.25cm] {Output Probabilities};
  \begin{scope}[on background layer]
    \node (n10_ma9el) at (6.25,-13.575) [draw=cC7C7CC, line width=0.025cm, fill=cE9E9EC, rounded corners=0.4cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=5.5cm, minimum height=7.65cm] {};
    \node (n23_egiii) at (16.25,-11.7) [draw=cC7C7CC, line width=0.025cm, fill=cE9E9EC, rounded corners=0.4cm, text=c0F172A, font=\rmfamily\fontsize{10}{12}\selectfont, inner sep=0pt, outer sep=0pt, minimum width=5.5cm, minimum height=11.4cm] {};
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-21.25) -- (6.25,-20.75) -- (6.25,-21.15) -- (6.25,-20.65);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-19.5) -- (6.25,-19) -- (6.25,-19.1) -- (6.25,-18.6);
    \draw[->, line width=0.05cm] (n3_x9vjf.east) to[out=0, in=180] (n4_aa0b6.west);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-17.75) -- (6.25,-17.25) -- (6.25,-17.4) -- (6.25,-16.9);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-15.75) -- (6.25,-15.25) -- (6.25,-15.65) -- (6.25,-15.15);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-14) -- (6.25,-13.5) -- (6.25,-13.65) -- (6.25,-13.15);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (6.25,-12) -- (6.25,-11.5) -- (6.25,-11.9) -- (6.25,-11.4);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-21.25) -- (16.25,-20.75) -- (16.25,-21.15) -- (16.25,-20.65);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-19.5) -- (16.25,-19) -- (16.25,-19.1) -- (16.25,-18.6);
    \draw[->, line width=0.05cm] (n15_te7fn.west) to[out=180, in=0] (n14_e6m10.east);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-17.75) -- (16.25,-17.25) -- (16.25,-17.4) -- (16.25,-16.9);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-15.75) -- (16.25,-15.25) -- (16.25,-15.65) -- (16.25,-15.15);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-14) -- (16.25,-13.5) -- (16.25,-13.65) -- (16.25,-13.15);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-12) -- (16.25,-11.5) -- (16.25,-11.9) -- (16.25,-11.4);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-10.25) -- (16.25,-9.75) -- (16.25,-9.9) -- (16.25,-9.4);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-8.25) -- (16.25,-7.75) -- (16.25,-8.15) -- (16.25,-7.65);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-6.5) -- (16.25,-6) -- (16.25,-5.925) -- (16.25,-5.85) -- (16.25,-5.35);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-4.25) -- (16.25,-3.75) -- (16.25,-3.85) -- (16.25,-3.35);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.25,-2.25) -- (16.25,-1.75) -- (16.25,-2) -- (16.25,-1.5);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (8.375,-10.825) -- (8.875,-10.825) -- (11.25,-10.825) -- (11.25,-12.575) -- (13.625,-12.575) -- (14.125,-12.575);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (5.825,-18.175) -- (5.325,-18.175) -- (3.625,-18.175) -- (3.625,-14.575) -- (4.125,-14.575);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (4.125,-14.575) -- (4.1,-14.575) -- (3.625,-14.575) -- (3.625,-10.825) -- (4.125,-10.825);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (16.675,-18.175) -- (17.175,-18.175) -- (18.875,-18.175) -- (18.875,-14.575) -- (18.375,-14.575);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (18.375,-14.575) -- (18.875,-14.575) -- (18.875,-10.825) -- (18.4,-10.825) -- (18.375,-10.825);
    \draw[->, line width=0.05cm, rounded corners=0.125cm] (18.375,-10.825) -- (18.875,-10.825) -- (18.875,-7.075) -- (18.4,-7.075) -- (18.375,-7.075);
  \end{scope}
\end{tikzpicture}`;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const sourceLines = diagramSource.split("\n").map((line, i) => {
  const highlighted = esc(line).replace(/(\\[A-Za-z@]+)/g, '<span class="hv-dgm-cmd">$1</span>');
  return `<div class="hv-dgm-code-line" data-dgm-line="${i + 1}"><span class="hv-dgm-ln">${i + 1}</span><code>${highlighted || " "}</code></div>`;
}).join("");

const transformerGraphic = (variant: "dark" | "light", interactive = false) => `
<div class="hv-dgm-art is-${variant}${interactive ? " is-interactive" : ""}">
  <svg class="hv-dgm-wires" viewBox="0 0 800 570" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs><marker id="dgmArrow${variant}${interactive ? "i" : ""}" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7Z"/></marker></defs>
    <g marker-end="url(#dgmArrow${variant}${interactive ? "i" : ""})">
      <path d="M221 528V513M221 484V462M221 440V419M221 390V375M221 346V325M221 296V281"/>
      <path d="M556 528V513M556 484V462M556 440V419M556 390V375M556 346V325M556 296V281M556 252V231M556 202V187M556 159V130M556 103V80M556 53V34"/>
      <path d="M165 451H210M612 451H567"/>
      <path d="M210 451H112V361H150M150 361H112V267H150"/>
      <path d="M292 267H388V311H485"/>
      <path d="M567 451H665V361H627M627 361H665V267H627M627 267H665V173H627"/>
    </g>
  </svg>
  <div class="hv-dgm-output">Output Probabilities</div>
  <div class="hv-dgm-box softmax">Softmax</div>
  <div class="hv-dgm-box linear">Linear</div>
  <div class="hv-dgm-stack encoder">
    <div class="hv-dgm-box norm top">Add &amp; Norm</div><div class="hv-dgm-box feed">Feed Forward</div><div class="hv-dgm-box norm">Add &amp; Norm</div><div class="hv-dgm-box attention">Multi-Head Attention</div>
  </div>
  <div class="hv-dgm-repeat encoder-repeat"${interactive ? ' id="hvDiagramNodeTarget"' : ""}>N×</div>
  <div class="hv-dgm-stack decoder">
    <div class="hv-dgm-box norm top">Add &amp; Norm</div><div class="hv-dgm-box feed">Feed Forward</div><div class="hv-dgm-box norm">Add &amp; Norm</div><div class="hv-dgm-box attention">Multi-Head Attention</div><div class="hv-dgm-box norm">Add &amp; Norm</div><div class="hv-dgm-box attention masked">Masked Multi-Head<br/>Attention</div>
  </div>
  <div class="hv-dgm-repeat decoder-repeat">N×</div>
  <div class="hv-dgm-plus plus-left">+</div><div class="hv-dgm-dot dot-left"></div><div class="hv-dgm-pos pos-left">Positional Encoding</div><div class="hv-dgm-box embed embed-left">Input Embedding</div><div class="hv-dgm-base base-left">Inputs</div>
  <div class="hv-dgm-plus plus-right">+</div><div class="hv-dgm-dot dot-right"></div><div class="hv-dgm-pos pos-right">Positional Encoding</div><div class="hv-dgm-box embed embed-right">Output Embedding</div><div class="hv-dgm-base base-right">Outputs (shifted right)</div>
  <div class="hv-dgm-minimap"><span></span><span></span></div>
</div>`;

const toolbar = `
<div class="hv-dgm-shapes" aria-label="Diagram shapes">
  <span>□</span><span>▭</span><span>○</span><span>◯</span><span>◇</span><span>▱</span><span>T</span><span>Σ</span><span>${ic.code}</span>
</div>
<div class="hv-dgm-help">Drag Shapes to Move · Drag Handles to Connect · Space + Drag to Pan · Double-Click to Edit Text</div>
<div class="hv-dgm-zoom"><b>＋</b><b>−</b><b>⌗</b></div>`;

const codePane = (cls = "") => `<div class="hv-dgm-code ${cls}"><div class="hv-dgm-snips">Snippets　□　○　→　—　{ }</div><div class="hv-dgm-code-scroll">${sourceLines}</div></div>`;

const previewPane = `<div class="hv-dgm-preview-pane"><div class="hv-dgm-previewbar"><b>PREVIEW</b><span>PNG scale</span><span class="hv-dgm-select">2x　⌄</span><span>Background</span><i></i><button class="hv-dgm-preview-close" type="button" aria-label="Minimize preview">${ic.panelRightClose}</button></div><div class="hv-dgm-paper">${transformerGraphic("light")}</div><div class="hv-dgm-compile-overlay"><span class="hv-dgm-spinner"></span><span>Compiling...</span></div></div>`;

const diagramProjects = [
  { title: "diagram", color: "#1982c4", type: "Diagram", updated: "today" },
  { title: "Catalyst Screening Data Report", color: "#8eead9", updated: "Jul 15" },
  { title: "Alex Chen - Google Resume", color: "#c9b4ed", type: "Resume", updated: "Jul 15" },
  { title: "Sleep and Memory Consolidation — Evidence Map", color: "#fff9c9", updated: "Jul 14", fav: true },
  { title: "EdgeSense: Energy Aware Wildfire Detection", color: "#ffcbd0", updated: "Jul 13" },
  { title: "Neural Operators for Parametric PDEs", color: "#ffcbd0", updated: "Jul 13" },
  { title: "Theo Martins — HCI Researcher Resume", color: "#fff9c9", type: "Resume", updated: "Jul 12" },
  { title: "ieee-journal", color: "#1982c4", updated: "Jul 12" },
];

const diagramBook = (project: (typeof diagramProjects)[number], index: number) => `
  <article class="hv-space-book hv-dgm-space-book"${index === 0 ? ' id="hvDiagramBook"' : ""}>
    <div class="hv-space-cover" style="--book:${project.color}">
      <span class="hv-space-bookmark${project.fav ? " is-on" : ""}">${ic.bookmark}</span>
      <div class="hv-space-label"><small>↕ &nbsp;TECTONIC</small><b>${project.title}</b></div>
      <span class="hv-space-pages"></span>
    </div>
    <div class="hv-space-meta"><span>${project.type ?? "Document"}</span><span>Updated ${project.updated}</span></div>
  </article>`;

const library = `
<div class="hv-dgm-home">
  <div class="hv-space-library">
    <div class="hv-home-glow"></div><div class="hv-home-dots"></div>
    <header class="hv-space-top">
      <span class="hv-home-import">${ic.folderInput}<span>Import</span></span>
      <span class="hv-space-topbtn">${ic.sliders}</span>
      <span class="hv-space-topbtn">${ic.bookmark}<b>6</b></span>
    </header>
    <main class="hv-space-shelf">${diagramProjects.map(diagramBook).join("")}</main>
    <nav class="hv-space-dock">
      <span class="hv-space-dockbtn is-primary">${ic.plus}<em>New project</em></span>
      <span class="hv-space-dockbtn">${ic.search}</span>
      <span class="hv-space-dockbtn">${ic.penTool}</span>
      <span class="hv-space-dockbtn">${ic.sun}</span>
      <span class="hv-space-dockbtn">${ic.gear}</span>
    </nav>
  </div>
</div>`;

const standaloneTop = `
<header class="hv-dgm-topbar">
  <div class="hv-dgm-breadcrumb"><span class="hv-dgm-brand">${leaf}<b>Oleafly</b></span><i>›</i><span>diagram.tikz</span><span>${ic.arrowUp}</span></div>
  <div class="hv-dgm-mode"><button id="hvDiagramDraw">${ic.squareDashedMousePointer} Draw</button><button id="hvDiagramCode">${ic.code} Code</button></div>
  <div class="hv-dgm-top-actions"><button class="hv-dgm-primary" id="hvDiagramCompile"><span class="hv-dgm-compile-play">${ic.play}</span><span class="hv-dgm-compile-spin"></span><span class="hv-dgm-compile-re">${ic.refresh}</span><span id="hvDiagramCompileLabel">Compile</span></button><button class="hv-dgm-icon" id="hvDiagramSave">${ic.save}${ic.chevD}</button><button class="hv-dgm-icon" id="hvDiagramDownloadStandalone">${ic.download}${ic.chevD}</button></div>
</header>`;

const saveMenu = `
<div class="hv-dgm-save-menu">
  <div class="hv-dgm-project-menu">
    <div id="hvDiagramNewProject">${ic.save}<b>New project</b></div>
    <span id="hvDiagramAttention">Attention Is All You Need</span><span>Federated Learning Data Flow</span><span>Catalyst Screening Data Report</span><span>Mangrove Canopy Drone Survey</span><span>NSF Progress Report — Year 2</span>
  </div>
  <div class="hv-dgm-save-main"><b id="hvDiagramSaveToProject"><i>${ic.chevR}</i><span>Save to project</span>${ic.folderTree}</b><span>${ic.save} Save Figure</span></div>
</div>`;

const toast = `<div class="hv-dgm-toast"><button class="hv-dgm-toast-close" type="button">×</button><span>✓</span><b id="hvDiagramToastText">Saved to figures/diagram.png</b><button class="hv-dgm-toast-action" type="button">Show in folder</button></div>`;

const appTop = `
<header class="hv-dgm-app-top"><div class="hv-dgm-app-brand">${leaf}<b>Oleafly</b><span>›</span><i></i><span>diagram</span></div><div class="hv-dgm-layout"><button id="hvDiagramSourceView">${ic.squarePen}</button><button>${ic.columns2}</button><button>${ic.fileText}</button></div><div class="hv-dgm-app-actions"><button class="hv-dgm-primary" id="hvDiagramRecompile">${ic.refresh}<span id="hvDiagramRecompileLabel">Recompile</span>${ic.chevD}</button><button id="hvDiagramDownload">${ic.download}</button><button>◴</button><button>⌘</button><span>◉　prajwal-svm</span><button>${ic.layoutGrid}</button></div></header>`;

const editorRail = `<aside class="hv-dgm-app-rail"><span>${ic.fileText}</span><span>${ic.search}</span><span>${ic.gitBranch}<b>3</b></span><i></i><span>${ic.searchCheck}</span><span>${ic.sparkles}</span><div></div><span>▣</span><span>?</span><span>${ic.sun}</span><span>⚙</span></aside>`;

const inspector = `
<aside class="hv-dgm-inspector"><div><b>SHAPE</b><span>⌘　⌃　⌄　⌗</span></div><label>Label (LaTeX)</label><strong>N×</strong><label>Fill <i></i></label><label>Border <i></i></label><label>Border style <em>Solid　⌄</em></label><label>Border width <em>1px　⌄</em></label><label>Corner radius <em>0px　⌄</em></label><label>Font size <em id="hvDiagramFontSize">11pt　⌄</em></label><label>Font <em>Serif　⌄</em></label><label>Font color <i class="navy"></i></label><div class="hv-dgm-font-menu" id="hvDiagramFontMenu"><span>8pt</span><span>9pt</span><span>10pt</span><span>✓　11pt</span><span>12pt</span><span>14pt</span><span id="hvDiagramFont16">16pt</span><span>18pt</span><span>20pt</span><span>24pt</span><span>28pt</span></div></aside>`;

const projectShell = `
<div class="hv-dgm-project">
  ${appTop}${editorRail}
  <div class="hv-dgm-filetab">main.tex　×</div>
  <div class="hv-dgm-formatbar">↶　↷　T⌄　 <b>B</b>　<i>I</i>　<u>U</u>　 ‹›　🔗　@　◇　✳　❞　▧　▦　⋯ <div class="hv-dgm-inner-mode"><button id="hvDiagramInnerCode">Code</button><button id="hvDiagramInnerCanvas">Canvas</button><span>ⓘ　⌕</span></div></div>
  <main class="hv-dgm-project-main">
    <section class="hv-dgm-project-left"><div class="hv-dgm-project-source">${codePane("is-project")}</div><div class="hv-dgm-project-canvas">${toolbar}${transformerGraphic("dark", true)}${inspector}</div></section>
    <section class="hv-dgm-project-right"><div class="hv-dgm-pdf-tools"><span>▤ Logs　<b>✓ 1.4s</b></span><span>⌗　−　131%⌄　＋　◐　↻　${ic.download}<i class="hv-dgm-project-close" aria-label="Minimize preview">${ic.panelRightClose}</i></span></div><div class="hv-dgm-project-paper">${transformerGraphic("light")}</div></section>
  </main>
  <div class="hv-dgm-download-menu"><span>${ic.fileArchive} Export source (.zip)</span><span>${ic.fileText} Export as PDF (vector image)</span><span id="hvDiagramPng">${ic.image} Export as PNG (raster image)</span></div>
</div>`;

const saveSheet = `<div class="hv-dgm-sheet-backdrop"></div><div class="hv-dgm-save-sheet"><label>Save As:</label><div class="hv-dgm-sheet-input"><span id="hvDiagramFilenameText">diagram.png</span><i></i></div><label>Tags:</label><div></div><label>Where:</label><strong>📁 Desktop　⌃</strong><button>⌄</button><footer><button>Cancel</button><button id="hvDiagramFileSave">Save</button></footer></div>`;

export const diagramScene = `
<section class="hv-scene hv-fullbleed hv-diagram-scene" data-scene="diagram" data-diagram-state="draw">
  <div class="hv-dgm-standalone">
    ${standaloneTop}
    <div class="hv-dgm-standalone-main"><div class="hv-dgm-draw-pane">${toolbar}${transformerGraphic("dark")}</div>${codePane("is-standalone")}${previewPane}</div>
    ${saveMenu}
  </div>
  ${library}
  ${projectShell}
  ${toast}
  ${saveSheet}
</section>`;
