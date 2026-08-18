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
