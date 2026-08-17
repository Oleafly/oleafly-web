import { ic, leaf } from "./hero-icons";
import avatar from "./avatar.png";

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const resumeSource = String.raw`\documentclass[11pt,letterpaper]{article}
\usepackage[T1]{fontenc}
\usepackage[margin=0.5in]{geometry}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage{hyperref}

% ATS-friendly: single column, real selectable text, no tables-for-layout,
% embedded subset fonts. Linear reading order so parsers extract cleanly.
\setlength{\parindent}{0pt}
\pagenumbering{gobble}
\hypersetup{colorlinks=true, urlcolor=black, linkcolor=black}

\titleformat{\section}{\large\bfseries\uppercase}{}{0em}{}[\vspace{2pt}\titlerule]
\titlespacing*{\section}{0pt}{8pt}{4pt}
\setlist[itemize]{leftmargin=14pt, itemsep=1pt, topsep=2pt, parsep=0pt}

% role{Title}{Company}{Location}{Dates}
\newcommand{\role}[4]{%
  \textbf{#1} \hfill #2 \\
  \textit{#3} \hfill \textit{#4}%
}

\begin{document}

\begin{center}
  {\Huge \textbf{Alex Chen}}\\[3pt]
  \small
  Senior Software Engineer\\[2pt]
  \href{mailto:alex.chen@gmail.com}{alex.chen@gmail.com}\,$\cdot$\,
  (650) 555-0142\,$\cdot$\,
  Mountain View, CA\,$\cdot$\,
  \href{https://alexchen.dev}{alexchen.dev}\,$\cdot$\,
  \href{https://github.com/alexchen}{github.com/alexchen}\,$\cdot$\,
  \href{https://linkedin.com/in/alexchen}{linkedin.com/in/alexchen}
\end{center}
\vspace{2pt}

\section*{Summary}
Senior Software Engineer (L5) with 9+ years designing and operating large-scale
distributed systems. Deep experience in backend infrastructure, performance, and
reliability, with a track record of shipping products used by hundreds of
millions of users and mentoring engineers toward senior roles.

\section*{Experience}
\role{Senior Software Engineer (L5)}{Google}{Mountain View, CA}{Mar 2020 -- Present}
\begin{itemize}
  \item Tech lead for a Search serving component handling 2M+ queries/second; drove a redesign that cut p99 latency 38\% and saved an estimated \$14M/year in compute.
  \item Designed and launched a globally-replicated feature store on Spanner backing 40+ ML models, adopted by 12 teams across Search and Ads.
  \item Led migration of a 300-service fleet to a new RPC framework, improving tail latency and reducing on-call pages by 45\%.
  \item Mentored 6 engineers (2 promoted to senior); ran the team's design-review and readability programs.
\end{itemize}
\vspace{3pt}
\role{Software Engineer (L4)}{Google}{Mountain View, CA}{Jul 2017 -- Mar 2020}
\begin{itemize}
  \item Built a real-time aggregation pipeline (C++, Flume) processing 8B events/day for a Search-quality dashboard used org-wide.
  \item Cut batch-job cost 30\% by reworking sharding and introducing incremental recomputation.
\end{itemize}
\vspace{3pt}
\role{Software Engineer}{Stripe}{San Francisco, CA}{Aug 2015 -- Jun 2017}
\begin{itemize}
  \item Shipped core ledger and reconciliation services for a payments platform processing \$60B+/year.
  \item Reduced a reconciliation run from 6 hours to 25 minutes via parallelization and a columnar store.
\end{itemize}

\section*{Selected Projects}
\textbf{Ratel} \hfill \href{https://github.com/alexchen/ratel}{github.com/alexchen/ratel} \\
\textit{Go, Raft, gRPC} --- open-source distributed rate limiter doing 4M+ decisions/sec/node; 1.5k GitHub stars.\par\vspace{4pt}
\textbf{tql} \hfill \href{https://github.com/alexchen/tql}{github.com/alexchen/tql} \\
\textit{Rust} --- a typed query builder for Postgres with compile-time-checked SQL.

\section*{Education}
\textbf{M.S. Computer Science} \hfill Stanford University \\
\textit{2013 -- 2015} \hfill \textit{Focus: Distributed Systems}\par\vspace{4pt}
\textbf{B.S. Computer Science} \hfill University of Illinois Urbana-Champaign \\
\textit{2009 -- 2013} \hfill \textit{GPA: 3.9 / 4.0}

\section*{Skills}
\textbf{Languages:} C++, Go, Rust, Python, Java, SQL \\
\textbf{Systems:} Spanner, Bigtable, Kubernetes, Kafka, gRPC / Protobuf, Redis \\
\textbf{Focus:} Distributed systems, performance, reliability (SLOs), system design, mentoring

\end{document}`;

const sourceLine = (line: string, index: number) => {
  const safe = esc(line) || "&nbsp;";
  const html = /^\s*%/.test(line)
    ? `<span class="hv-resume-comment">${safe}</span>`
    : safe.replace(/(\\[A-Za-z@]+\*?)/g, '<span class="hv-resume-command">$1</span>');
  return `<div class="hv-resume-line"><span class="hv-resume-ln">${index + 1}</span><code>${html}</code></div>`;
};

const resumeCode = resumeSource.split("\n").map(sourceLine).join("");

const resumeProfiles = {
  alex: {
    name: "Alex Chen", role: "Senior Software Engineer", contact: "alex.chen@gmail.com · (650) 555-0142 · Mountain View, CA · alexchen.dev · github.com/alexchen",
    summary: "Senior Software Engineer (L5) with 9+ years designing and operating large-scale distributed systems. Deep experience in backend infrastructure, performance, and reliability.",
    job1: "Senior Software Engineer (L5)", company1: "Google", place1: "Mountain View, CA", dates1: "Mar 2020 — Present",
    bullets1: ["Tech lead for a Search serving component handling 2M+ queries/second; cut p99 latency 38%.", "Designed a globally replicated feature store on Spanner backing 40+ ML models.", "Led migration of a 300-service fleet to a new RPC framework; reduced on-call pages 45%.", "Mentored six engineers and ran the team’s design-review program."],
    job2: "Software Engineer (L4)", company2: "Google", place2: "Mountain View, CA", dates2: "Jul 2017 — Mar 2020",
    bullets2: ["Built a real-time aggregation pipeline processing 8B events/day.", "Cut batch-job cost 30% with sharding and incremental computation."],
    job3: "Software Engineer", company3: "Stripe", place3: "San Francisco, CA", dates3: "Aug 2015 — Jun 2017",
    bullets3: ["Shipped ledger and reconciliation services processing $60B+/year.", "Reduced a reconciliation run from six hours to 25 minutes."],
    project1: "Ratel", project1Meta: "github.com/alexchen/ratel", project1Copy: "Go, Raft, gRPC — distributed rate limiter doing 4M+ decisions/sec/node.",
    project2: "tql", project2Meta: "github.com/alexchen/tql", project2Copy: "Rust — typed query builder for Postgres with compile-time-checked SQL.",
    education1: "M.S. Computer Science", school1: "Stanford University", education2: "B.S. Computer Science", school2: "University of Illinois Urbana-Champaign",
    skills: "C++, Go, Rust, Python, Java, SQL", systems: "Spanner, Bigtable, Kubernetes, Kafka, gRPC / Protobuf, Redis",
  },
  jane: {
    name: "Jane Doe", role: "Data Scientist", contact: "jane.doe@email.com · New York, NY · janedoe.dev · github.com/janedoe",
    summary: "Data scientist focused on trustworthy machine learning, experimentation, and decision systems used by product and research teams.",
    job1: "Senior Data Scientist", company1: "Anthropic", place1: "New York, NY", dates1: "2021 — Present",
    bullets1: ["Built evaluation systems for large language models across safety and product quality.", "Designed experiments used to guide high-impact model launches."],
    job2: "Machine Learning Engineer", company2: "Airbnb", place2: "San Francisco, CA", dates2: "2018 — 2021",
    bullets2: ["Developed ranking models and reliable offline evaluation pipelines.", "Partnered with product teams to improve marketplace search quality."],
    job3: "Data Analyst", company3: "Spotify", place3: "New York, NY", dates3: "2016 — 2018",
    bullets3: ["Created retention models and executive experimentation dashboards."],
    project1: "Model Cards", project1Meta: "janedoe.dev/model-cards", project1Copy: "Open evaluation templates for production ML systems.",
    project2: "CausalKit", project2Meta: "github.com/janedoe/causalkit", project2Copy: "Python package for reproducible causal inference workflows.",
    education1: "M.S. Statistics", school1: "Columbia University", education2: "B.S. Mathematics", school2: "University of Michigan",
    skills: "Python, R, SQL, PyTorch, JAX", systems: "Spark, dbt, BigQuery, Airflow, MLflow, Kubernetes",
  },
  morgan: {
    name: "Morgan Lee", role: "Product Engineer", contact: "morgan@hey.com · Brooklyn, NY · morganlee.design · github.com/morganlee",
    summary: "Product engineer bridging design systems and frontend infrastructure to build accessible, high-craft tools for creative teams.",
    job1: "Staff Product Engineer", company1: "Figma", place1: "New York, NY", dates1: "2022 — Present",
    bullets1: ["Led architecture for collaborative prototyping workflows used by millions.", "Created an accessible component platform shared across six product teams."],
    job2: "Senior Frontend Engineer", company2: "Notion", place2: "San Francisco, CA", dates2: "2019 — 2022",
    bullets2: ["Shipped core editor interactions and improved canvas rendering performance 42%.", "Partnered with design to establish product-wide interaction standards."],
    job3: "Interaction Designer", company3: "IDEO", place3: "Chicago, IL", dates3: "2016 — 2019",
    bullets3: ["Prototyped service experiences for health and education clients."],
    project1: "Prism", project1Meta: "morganlee.design/prism", project1Copy: "Open-source accessible color and typography toolkit.",
    project2: "Local First UI", project2Meta: "github.com/morganlee/lfui", project2Copy: "Patterns for resilient collaborative interfaces.",
    education1: "M.Des. Interaction Design", school1: "Carnegie Mellon University", education2: "B.S. Computer Science", school2: "Northwestern University",
    skills: "TypeScript, React, Rust, Swift, Figma", systems: "WebGL, Canvas, design systems, accessibility, prototyping",
  },
  typst: {
    name: "Alex Chen", role: "Research Engineer", contact: "alex@typst.app · Berlin, Germany · alexchen.dev",
    summary: "Research engineer building fast, expressive systems for scientific communication and reproducible technical publishing.",
    job1: "Research Engineer", company1: "Typst", place1: "Berlin, Germany", dates1: "2022 — Present",
    bullets1: ["Built incremental layout and diagnostics for a modern typesetting engine.", "Improved large-document render latency and editor feedback loops."],
    job2: "Software Engineer", company2: "Mozilla", place2: "Remote", dates2: "2019 — 2022",
    bullets2: ["Worked on text shaping, browser layout, and developer tooling."],
    job3: "Research Assistant", company3: "TU Berlin", place3: "Berlin, Germany", dates3: "2017 — 2019",
    bullets3: ["Published work on interactive document systems."],
    project1: "Inkstone", project1Meta: "github.com/alexchen/inkstone", project1Copy: "A small language server for technical documents.",
    project2: "Glyph", project2Meta: "alexchen.dev/glyph", project2Copy: "Experiments in high-performance text layout.",
    education1: "M.Sc. Computer Science", school1: "TU Berlin", education2: "B.Sc. Computer Science", school2: "University of Edinburgh",
    skills: "Rust, C++, TypeScript, Python", systems: "Compilers, text layout, language servers, WebAssembly",
  },
} as const;

type ResumeVariant = keyof typeof resumeProfiles;

const resumePage = (cls = "", variant: ResumeVariant = "alex") => {
  const p = resumeProfiles[variant];
  const bullets = (items: readonly string[]) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const job = (title: string, company: string, place: string, dates: string, items: readonly string[]) => `
    <div class="hv-rp-job"><b>${title}</b><span>${company}</span></div>
    <div class="hv-rp-jobmeta"><i>${place}</i><i>${dates}</i></div>${bullets(items)}`;
  return `
  <div class="hv-resume-page ${cls} is-${variant}">
    <header class="hv-rp-header"><div class="hv-rp-name">${p.name}</div><div class="hv-rp-role">${p.role}</div><div class="hv-rp-contact">${p.contact}</div></header>
    <div class="hv-rp-section">SUMMARY</div><p class="hv-rp-summary">${p.summary}</p>
    <div class="hv-rp-section">EXPERIENCE</div>
    ${job(p.job1, p.company1, p.place1, p.dates1, p.bullets1)}
    ${job(p.job2, p.company2, p.place2, p.dates2, p.bullets2)}
    ${job(p.job3, p.company3, p.place3, p.dates3, p.bullets3)}
    <div class="hv-rp-section">SELECTED PROJECTS</div>
    <div class="hv-rp-project"><b>${p.project1}</b><span>${p.project1Meta}</span></div><p><i>${p.project1Copy}</i></p>
    <div class="hv-rp-project"><b>${p.project2}</b><span>${p.project2Meta}</span></div><p><i>${p.project2Copy}</i></p>
    <div class="hv-rp-section">EDUCATION</div>
    <div class="hv-rp-project"><b>${p.education1}</b><span>${p.school1}</span></div><div class="hv-rp-project"><b>${p.education2}</b><span>${p.school2}</span></div>
    <div class="hv-rp-section">SKILLS</div><p><b>Languages:</b> ${p.skills}<br/><b>Systems:</b> ${p.systems}</p>
  </div>`;
};

type Project = {
  title: string;
  color: string;
  engine?: string;
  type?: string;
  updated: string;
  fav?: boolean;
  target?: boolean;
  preview?: boolean;
};

const projects: Project[] = [
  { title: "Alpine eDNA Pilot — Lab Notebook", color: "#fff9c9", engine: "MARKDOWN", updated: "Jul 31", fav: true },
  { title: "Mapping Pollinator Corridors — Research Poster", color: "#adf7b6", updated: "Jul 29" },
  { title: "Federated Learning Data Flow", color: "#c9b4ed", type: "Image", updated: "Jul 29", fav: true },
  { title: "Catalyst Screening Data Report", color: "#8eead9", updated: "Jul 29" },
  { title: "Mangrove Canopy Drone Survey", color: "#80e1ec", updated: "Jul 28" },
  { title: "Sleep and Memory Consolidation — Evidence Map", color: "#fff9c9", updated: "Jul 28", fav: true, target: true, preview: true },
  { title: "Urban Heat Transect Field Protocol", color: "#ffdec8", updated: "Jul 27" },
  { title: "NSF Progress Report — Year 2", color: "#82d1ec", updated: "Jul 27" },
  { title: "Arjun Rao — Computational Linguistics CV", color: "#8eead9", engine: "TYPST", updated: "Jul 11", fav: true },
  { title: "Organoid Response Profiles for Therapy Selection", color: "#ebb5e5", updated: "Jul 11", fav: true },
  { title: "STAT 214 — Causal Inference Problem Set", color: "#adf7b6", updated: "Mar 3", fav: true },
  { title: "Dextrous Manipulation — Proposal", color: "#ebb5e5", updated: "Jul 9" },
  { title: "Civic Shade and Pedestrian Heat Exposure", color: "#8eead9", updated: "Jul 8" },
  { title: "CS 271 — Approximation Algorithms PS3", color: "#ffdec8", updated: "Jul 5" },
  { title: "Weak-Lensing Mass Reconstruction of NCJ 1427", color: "#fff9c9", updated: "Jul 2" },
  { title: "Statistical Consulting Report", color: "#ebb5e5", updated: "Jun 25" },
];

const book = (p: Project, index: number) => `
  <article class="hv-space-book${p.fav ? " is-fav" : ""}${p.target ? " is-target" : ""}" data-book="${index}">
    <div class="hv-space-cover" style="--book:${p.color}">
      ${p.preview ? `<div class="hv-space-preview">${resumePage("hv-rp-book")}</div>` : ""}
      <span class="hv-space-bookmark${p.fav && !p.target ? " is-on" : ""}"${p.target ? ' id="hvHomeBookBookmark"' : ""}>${ic.bookmark}</span>
      <div class="hv-space-label"><small>↕ &nbsp;${p.engine ?? "TECTONIC"}</small><b>${p.title}</b></div>
      <span class="hv-space-pages"></span>
    </div>
    <div class="hv-space-meta"><span>${p.type ?? "Document"}</span><span>Updated ${p.updated}</span></div>
  </article>`;

const categoryRows = [
  ["All", "24"], ["AI Generated", "1"], ["Blank", "3"], ["Diagrams", "1"], ["Resume", "5"],
  ["Journals", "4"], ["Bibliographies", "1"], ["Assignments", "1"], ["Theses & Reports", "2"],
  ["Books", "1"], ["Presentations", "1"], ["Posters", "1"], ["Newsletters", "1"], ["Calendars", "1"], ["Letters", "1"],
];

const cats = categoryRows.map(([name, count], i) => `
  <div class="hv-tpl-cat${i === 0 ? " is-on" : ""}">${name === "AI Generated" ? `<span class="hv-tpl-spark">${ic.sparkles}</span>` : ""}<span>${name}</span><em>${count}</em></div>`).join("");

type Template = { name: string; engine: string; ats?: boolean; setup?: boolean; resume?: boolean; resumeVariant?: ResumeVariant; blank?: boolean; diagram?: boolean; id?: string };
const templates: Template[] = [
  { name: "ATS Software Engineer Resume", engine: "TECTONIC", resume: true, resumeVariant: "jane" },
  { name: "Blank document", engine: "TECTONIC", blank: true },
  { name: "Blank Typst document", engine: "TYPST", blank: true },
  { name: "Blank Markdown document", engine: "PANDOC", blank: true },
  { name: "Diagram / Figure", engine: "TECTONIC", diagram: true },
  { name: "ATS Resume", engine: "TECTONIC", ats: true, resume: true, resumeVariant: "jane" },
  { name: "Software Engineer Resume", engine: "TECTONIC", ats: true, resume: true, resumeVariant: "alex", id: "hvSoftwareTemplate" },
  { name: "Modern Resume", engine: "TECTONIC", ats: true, resume: true, resumeVariant: "morgan", setup: true },
  { name: "Typst Resume", engine: "TYPST", ats: true, resume: true, resumeVariant: "typst" },
];

const diagramPreview = `<div class="hv-tpl-diagram"><span>Input</span><i></i><span>Encoder</span><i></i><span>Classifier</span></div>`;
const templateCard = (t: Template, i: number) => `
  <div class="hv-tpl-card${t.ats ? " is-ats" : ""}${t.id ? " is-software" : ""}"${t.id ? ` id="${t.id}"` : ""} data-template="${i}">
    <div class="hv-tpl-page">
      ${t.setup ? `<span class="hv-tpl-setup">${ic.download} Setup</span>` : ""}
      ${t.resume ? resumePage("hv-rp-template", t.resumeVariant ?? "alex") : t.diagram ? diagramPreview : `<div class="hv-tpl-blank">${t.engine === "PANDOC" ? "Untitled Markdown Document" : "Untitled"}</div>`}
    </div>
    <b>${t.name}</b><small>${t.engine}${t.setup ? `<em>needs setup</em>` : ""}${t.ats && !t.setup ? `<i></i>` : ""}</small>
    ${t.id ? `<span class="hv-template-tip">A polished one-page software engineer resume,<br>single-column and ATS-friendly, filled in as a<br>senior example you can edit.</span>` : ""}
  </div>`;

const colors = ["#218dcc", "#fff3bd", "#ffdfca", "#ffc8cc", "#efb5e1", "#c9b4ed", "#9dbdea", "#82d1ec", "#7fe2e8", "#8eead9", "#adf7b6"];

const library = `
  <div class="hv-space-library">
    <div class="hv-home-glow"></div><div class="hv-home-dots"></div>
    <header class="hv-space-top">
      <span class="hv-home-import">${ic.folderInput}<span>Import</span></span>
      <span class="hv-space-topbtn">${ic.sliders}</span>
      <span class="hv-space-topbtn" id="hvHomeFavFilter">${ic.bookmark}<b>6</b></span>
    </header>
    <main class="hv-space-shelf">${projects.map(book).join("")}</main>
    <nav class="hv-space-dock">
      <span class="hv-space-dockbtn is-primary" id="hvHomeNewProject">${ic.plus}<em>New project</em></span>
      <span class="hv-space-dockbtn">${ic.search}</span>
      <span class="hv-space-dockbtn">${ic.penTool}</span>
      <span class="hv-space-dockbtn">${ic.sun}</span>
      <span class="hv-space-dockbtn">${ic.gear}</span>
    </nav>
  </div>`;

const templateModal = `
  <div class="hv-home-backdrop"></div>
  <section class="hv-template-modal">
    <header><b>Choose a template</b><span class="hv-tpl-import">${ic.folderInput} Import an existing project</span><span class="hv-tpl-close">${ic.x}</span></header>
    <div class="hv-template-body">
      <aside>${cats}<div class="hv-get-templates">${ic.download} Get more templates</div></aside>
      <div class="hv-template-main">
        <div class="hv-template-filters">
          <span class="hv-template-search">${ic.search} Search templates</span>
          <span class="hv-engine-filter">All engines ${ic.chevD}</span>
          <span class="hv-ats-filter" id="hvAtsFilter">${ic.checkCircle} ATS-friendly</span>
          <span class="hv-offline-filter">Offline</span>
        </div>
        <div class="hv-template-grid">${templates.map(templateCard).join("")}</div>
      </div>
    </div>
  </section>`;

const nameModal = `
  <section class="hv-name-modal">
    <header><b>Name your project</b><span>${ic.x}</span></header>
    <div class="hv-name-body">
      <aside>${resumePage("hv-rp-name-preview")}<h3>Software Engineer Resume</h3><p>CVs &amp; Resumes</p><div class="hv-name-tags"><span>ATS-friendly</span><em>Tectonic</em></div><small>MIT · Oleafly</small></aside>
      <main>
        <label>PROJECT NAME</label>
        <div class="hv-name-input" id="hvHomeNameInput"><span id="hvHomeNameText">Software Engineer Resume</span><i class="hv-name-caret"></i></div>
        <label>COVER COLOR</label>
        <div class="hv-color-row">${colors.map((color, i) => `<span class="hv-color${i === 0 ? " is-on" : ""}" style="--swatch:${color}"${i === 5 ? ' id="hvHomeLilac"' : ""}>${i === 5 ? `<em>Lilac</em><i>${ic.checkCircle}</i>` : ""}</span>`).join("")}</div>
        <div class="hv-name-actions"><span>${ic.arrowR} Back</span><button id="hvHomeCreate">Create project ${ic.arrowR}<small>⌘ ↵</small></button></div>
      </main>
    </div>
  </section>`;

const createdView = `
  <section class="hv-created-project">
    <header class="hv-created-top">
      <div class="hv-created-brand">${leaf}<b>Oleafly</b>${ic.chevR}<span></span><strong>Alex Chen - Google Resume</strong></div>
      <div class="hv-created-modes"><i>${ic.squarePen}</i><i class="is-on">${ic.columns2}</i><i>${ic.fileText}</i></div>
      <div class="hv-created-actions"><button><i class="hv-created-spinner"></i><span class="hv-created-recompile">${ic.refresh}</span><b class="hv-created-compile-label">Compile</b>${ic.chevD}</button>${ic.download}${ic.history}${ic.fork}<img class="hv-created-avatar" src="${avatar.src}" alt="" width="15" height="15" /><b>prajwal-svm</b>${ic.keyboard}${ic.layoutGrid}</div>
    </header>
    <nav class="hv-created-rail">${ic.fileText}${ic.search}<span>${ic.gitBranch}<b>3</b></span>${ic.shieldCheck}${ic.searchCheck}<i></i>${ic.sparkles}<em></em>${ic.panelLeft}${ic.help}${ic.sun}${ic.gear}</nav>
    <div class="hv-created-work">
      <section class="hv-resume-editor">
        <div class="hv-resume-tab">main.tex ${ic.x}</div>
        <div class="hv-resume-tools">${ic.undo}${ic.redo}<span>T⌄</span>${ic.bold}${ic.italic}${ic.underline}${ic.code}${ic.link}${ic.at}${ic.tag}${ic.asterisk}${ic.quote}${ic.image}${ic.table}${ic.list}${ic.rows}${ic.ellipsis}<i></i>${ic.info}${ic.search}${ic.arrowR}</div>
        <div class="hv-resume-code">${resumeCode}</div>
      </section>
      <section class="hv-created-preview">
        <div class="hv-created-pvbar"><span>${ic.scrollText} Logs <b class="hv-created-status"><i>${ic.checkCircle}</i><em>1.1s</em></b></span><span>${ic.maximize}${ic.zoomOut}<b>100%</b>${ic.chevD}${ic.zoomIn}<b class="hv-created-page-nav">⌃　1　of 1　⌄</b>${ic.contrast}${ic.refresh}${ic.download}${ic.ellipsis}</span></div>
        <div class="hv-created-compile">
          <div class="hv-cc-title">${ic.fileText}<b id="hvHomeCompileTitle">Compiling</b><i></i><span id="hvHomeCompileCount">1/3 done</span></div>
          <div class="hv-cc-bars"><i></i><i></i><i></i></div><small id="hvHomeCompileMeta">1 running · 1 queued</small>
          <div class="hv-cc-row done">${ic.checkCircle}<div><b>Language analysis</b><span>Current project revision analyzed</span></div><em>DONE</em></div>
          <div class="hv-cc-row run"><i></i><div><b>Compiling</b><span>Producing and verifying PDF output</span></div><em>RUNNING</em></div>
          <div class="hv-cc-row queued"><i></i><div><b>Rendering PDF</b><span>Waiting for verified compile output</span></div><em>QUEUED</em></div>
        </div>
        <div class="hv-created-output">${resumePage("hv-rp-created")}</div>
      </section>
    </div>
  </section>`;

export const homeScene = `
<section class="hv-scene hv-fullbleed hv-home" data-scene="home" data-home-state="library" data-home-compile="compile">
  ${library}${templateModal}${nameModal}${createdView}
</section>`;
