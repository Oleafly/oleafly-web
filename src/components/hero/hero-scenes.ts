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
export const citeScene = `
<section class="hv-scene" data-scene="cite">
  <aside class="hv-side">
    <div class="hv-panel-head">
      <span class="hv-ph-ic">${ic.searchCode}</span><span class="hv-ph-label">References</span>
      <span class="hv-warn-badge">4</span>
    </div>
    <div class="hv-ref-seg"><span class="is-on">References &middot; 12</span><span>Citations &middot; 8</span><span>Symbols &middot; 4</span></div>
    <div class="hv-filter hv-ref-filter">${ic.search}<span>Filter&hellip;</span></div>
    <div class="hv-refs">
      <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Unresolved citations <span class="hv-rtag warn">4</span></div>
      <div class="hv-rrow ind"><span class="hv-rkey">hastie2009</span><span class="hv-rtag danger">main.tex:21</span></div>
      <div class="hv-rrow ind"><span class="hv-rkey">vaswani2017</span><span class="hv-rtag danger">main.tex:28</span></div>
      <div class="hv-rrow"><span class="hv-schev">${ic.chevD}</span>Bibliography <span class="hv-rtag">12</span></div>
      <div class="hv-rrow ind"><span class="hv-schev">${ic.chevD}</span>references.bib</div>
      <div class="hv-rrow ind2"><span class="hv-rkey">wilkinson2016</span><span class="hv-rtag">2016</span></div>
      <div class="hv-rrow ind2 hv-refdesc">The FAIR Guiding Principles for scientific&hellip;</div>
      <div class="hv-rrow ind2"><span class="hv-rkey">warden2019</span><span class="hv-rtag">2019</span></div>
      <div class="hv-rrow ind2 hv-refdesc">TinyML: Machine Learning with Ultra-Low&hellip;</div>
    </div>
  </aside>
  ${strip(editorPane)}
  <div class="hv-modal-backdrop"></div>
  <div class="hv-dialog">
    <div class="hv-dlg-head"><span class="hv-dlg-title">${ic.at} Add citation</span>${iconBtn(ic.x, "hv-ib-s")}</div>
    <div class="hv-dlg-search">${ic.search}<span class="hv-dlg-q">10.1038/sdata.2016.18</span><span class="hv-dlg-go">Look up</span></div>
    <div class="hv-dlg-chips">
      <span class="hv-chip">DOI: 10.1038/sdata.2016.18</span>
      <span class="hv-chip">arXiv: 1907.02057</span>
      <span class="hv-chip">Title: &ldquo;TinyML&rdquo;</span>
    </div>
    <pre class="hv-dlg-bib"><span class="t-cmd">@article</span><span class="t-br">&#123;</span><span class="t-key">wilkinson2016</span>,
  title   = <span class="t-br">&#123;</span>The FAIR Guiding Principles for scientific
             data management and stewardship<span class="t-br">&#125;</span>,
  author  = <span class="t-br">&#123;</span>Wilkinson, Mark D. and Dumontier, Michel
             and Aalbersberg, IJsbrand Jan and others<span class="t-br">&#125;</span>,
  journal = <span class="t-br">&#123;</span>Scientific Data<span class="t-br">&#125;</span>,
  year    = <span class="t-num">2016</span>,
<span class="t-br">&#125;</span></pre>
    <div class="hv-dlg-foot"><span class="hv-btn-ghost">Cancel</span><span class="hv-btn-primary">Add to .bib and cite</span></div>
  </div>
</section>`;
