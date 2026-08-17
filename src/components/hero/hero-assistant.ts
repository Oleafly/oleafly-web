/**
 * Stateful AI Assistant scene used by the landing-page product tour.
 * The markup mirrors the desktop app's provider settings, chat runner,
 * approval cards, source confirmation, and PDF outline navigation.
 */
import {
  anthropic,
  deepseek,
  gemini,
  groq,
  ic,
  mistral,
  openai,
  openrouter,
  zai,
} from "./hero-icons";
import { pdfPages } from "./hero-pdf";

const strip = (html: string) => html.replace(/ id="hv[A-Za-z0-9]+"/g, "");

const settingsNav = (icon: string, label: string, active = false) => `
  <div class="hv-set-nav-row${active ? " is-active" : ""}"><span>${icon}</span><b>${label}</b></div>`;

const providerCard = (
  id: string,
  logo: string,
  label: string,
  body = "",
) => `
  <div class="hv-provider-card hv-provider-${id}"${id === "openai" ? ' id="hvOpenAiProvider"' : ""}>
    <div class="hv-provider-head">
      <span class="hv-provider-chevron">${ic.chevR}</span>
      <span class="hv-provider-logo">${logo}</span>
      <span class="hv-provider-name">${label}</span>
      ${id === "openai" ? `<span class="hv-connected"><span>${ic.checkCircle}</span>Connected</span><span class="hv-get-key">Get key ${ic.externalLink}</span>` : ""}
    </div>
    ${body}
  </div>`;

const modelIds = [
  "gpt-5.6-sol",
  "gpt-5.6-terra",
  "gpt-5.6-luna",
  "gpt-5.5-pro",
  "gpt-5.5",
  "gpt-5.4",
  "gpt-5.4-mini",
  "gpt-5.3",
  "gpt-5.3-mini",
  "gpt-4.1",
];

const managerModels = modelIds.slice(0, 6).map((name) => `
  <div class="hv-managed-model"><span class="hv-switch is-on"><i></i></span><span>${name}</span><span class="hv-model-trash">${ic.trash}</span></div>`).join("");

const selectorModels = modelIds.map((name) => `
  <div class="hv-model-option${name === "gpt-5.6-sol" ? " is-target" : ""}"${name === "gpt-5.6-sol" ? ' id="hvAiModelSol"' : ""}>
    <span class="hv-model-provider">${openai}</span><span>${name}</span><span class="hv-model-check">${ic.checkCircle}</span>
  </div>`).join("");

const openAiBody = `
  <div class="hv-provider-body">
    <div class="hv-provider-copy">GPT models. The default choice.</div>
    <div class="hv-key-row">
      <div class="hv-key-input" id="hvAiKeyInput"><span class="hv-key-placeholder">Paste your API key here</span><span class="hv-key-mask">••••••••••••••••••••••••••••••••••••••••••••••</span></div>
      <span class="hv-key-save" id="hvAiSaveKey"><span class="hv-key-loader"></span>Save</span>
    </div>
    <div class="hv-key-status"><span class="hv-key-checking">Checking key...</span><span class="hv-key-valid">Key valid. Models are ready below.</span></div>
    <div class="hv-provider-ready">
      <div class="hv-provider-model-select"><span>Model</span><b>${openai}<i>gpt-5.6-sol</i>${ic.chevD}</b></div>
      <div class="hv-key-actions"><span>Replace key</span><span class="hv-delete-key">${ic.trash}</span></div>
      <div class="hv-model-manager-head"><span>Models</span><span>${ic.refresh} Refresh</span></div>
      <div class="hv-model-manager">${managerModels}</div>
    </div>
  </div>`;

const plan = `
  <div class="hv-ai-plan">
    <span class="hv-ai-plan-label">Plan</span>
    <div class="hv-ai-plan-row" id="hvAiPlan1"><i></i><span>Inventory citations used in main.tex and references.bib</span></div>
    <div class="hv-ai-plan-row" id="hvAiPlan2"><i></i><span>Search literature for papers matching each cited claim</span></div>
    <div class="hv-ai-plan-row" id="hvAiPlan3"><i></i><span>Verify every candidate citation is real</span></div>
    <div class="hv-ai-plan-row" id="hvAiPlan4"><i></i><span>Add verified BibTeX entries to references.bib</span></div>
    <div class="hv-ai-plan-row" id="hvAiPlan5"><i></i><span>Replace unresolved cites in main.tex</span></div>
    <div class="hv-ai-plan-row" id="hvAiPlan6"><i></i><span>Recompile and confirm all citations resolve</span></div>
  </div>`;

const tool = (name: string, n: number, detail = "") => `
  <div class="hv-ai-tool" data-ai-step="${n}"><span>${ic.wrench}</span><code>${name}</code><i>${ic.checkCircle}</i>${detail ? `<em>${detail}</em>` : ""}<b>${ic.chevR}</b></div>`;

const thought = (label: string, n: number, expanded = false) => `
  <div class="hv-ai-thought${expanded ? " is-expanded" : ""}" data-ai-step="${n}">
    <div class="hv-ai-thought-head"><span>${ic.brain}</span><b>${label}</b><i>${ic.chevR}</i></div>
    ${expanded ? `<div class="hv-ai-thought-body">I need sources that match the paper's actual claims:<br/>- satellite fire detection<br/>- low-power sensor networks<br/>- TinyML and quantized inference<br/><br/>I'll keep only results with verifiable DOI metadata.</div>` : ""}
  </div>`;

const assistantText = (text: string, n: number) => `<div class="hv-ai-response" data-ai-step="${n}">${text}</div>`;

const codeLine = (n: number, html: string, cls = "") => `<div class="hv-diff-line ${cls}"><span>${n}</span><code>${html}</code></div>`;

const bibDiff = [
  codeLine(1, "@article{open_science2015,", "del"),
  codeLine(2, "&nbsp;&nbsp;title = {Estimating the Reproducibility of Psychological Science},", "del"),
  codeLine(1, "@article{giglio2003,", "add"),
  codeLine(2, "&nbsp;&nbsp;author = {Giglio, Louis and Descloitres, Jacques and Justice, Christopher O.},", "add"),
  codeLine(3, "&nbsp;&nbsp;title = {An Enhanced Contextual Fire Detection Algorithm for {MODIS}},", "add"),
  codeLine(4, "&nbsp;&nbsp;journal = {Remote Sensing of Environment},", "add"),
  codeLine(5, "&nbsp;&nbsp;year = {2003}, doi = {10.1016/S0034-4257(03)00184-6}", "add"),
  codeLine(6, "}", "add"),
].join("");

const texDiff = [
  codeLine(20, "Wildfire ignition can develop faster than sparse satellite revisit cycles and", ""),
  codeLine(21, "manual reports~\\cite{hastie2009}. Dense ground networks provide local measurements", "del"),
  codeLine(21, "manual reports~\\cite{giglio2003,schroeder2014}. Dense ground networks provide local measurements", "add"),
  codeLine(22, "but create a difficult systems trade-off: radios consume most of a node's energy,", ""),
  codeLine(23, "yet delayed communication can hide the earliest evidence~\\cite{wilkinson2016}.", "del"),
  codeLine(23, "yet delayed communication can hide the earliest evidence~\\cite{dampage2022,adumanu2018}.", "add"),
].join("");

const approval = (kind: "bib" | "main", toolName: string, file: string, line: number, lines: string) => `
  <div class="hv-ai-approval hv-ai-approval-${kind}">
    <div class="hv-approval-in">
      <div class="hv-approval-head"><span class="hv-ai-mark">${ic.sparkles}</span><div><b>The assistant wants to change your files</b><p><code>${toolName}</code><span>${ic.fileText}${file}</span><em>line ${line}</em></p></div></div>
      <div class="hv-diff">
        <div class="hv-diff-head">${ic.fileText}<code>${file}</code><span>first change · L${line}</span></div>
        <div class="hv-diff-code">${lines}</div>
      </div>
      <div class="hv-approval-actions"><span class="hv-reject">${ic.x} Reject</span><span class="hv-always"${kind === "main" ? ' id="hvAlwaysMain"' : ""}>${ic.checkCircle} Always allow</span><span class="hv-approve"${kind === "bib" ? ' id="hvApproveBib"' : ""}>${ic.checkCircle} Approve</span></div>
    </div>
  </div>`;

const outlineItems = [
  "Introduction",
  "System design",
  "Deployment and evaluation",
  "Results",
  "Ablations, safety, and limitations",
  "Conclusion",
  "References",
].map((name) => `<div class="hv-outline-row"${name === "References" ? ' id="hvAiOutlineRefs"' : ""}>${name}</div>`).join("");

const codeEntries = [
  ["giglio2003", "An Enhanced Contextual Fire Detection Algorithm for MODIS", "2003"],
  ["schroeder2014", "The New VIIRS 375 m Active Fire Detection Data Product", "2014"],
  ["dampage2022", "Forest Fire Detection System Using Wireless Sensor Networks", "2022"],
  ["adumanu2018", "Energy-Harvesting Wireless Sensor Networks: A Review", "2018"],
  ["adelantado2017", "Understanding the Limits of LoRaWAN", "2017"],
  ["bai2018", "An Empirical Evaluation of Generic Convolutional Networks", "2018"],
  ["jacob2018", "Quantization and Training of Neural Networks", "2018"],
  ["ray2022", "A Review on TinyML", "2022"],
  ["geifman2017", "Selective Classification for Deep Neural Networks", "2017"],
].map(([key, title, year], i) => `
  <div class="hv-code-entry"><span class="hv-code-ln">${i * 5 + 1}</span><code><b>@article</b><i>{</i><u>${key}</u>,</code></div>
  <div class="hv-code-entry"><span class="hv-code-ln">${i * 5 + 2}</span><code>&nbsp;&nbsp;title = <i>{</i>${title}<i>}</i>,</code></div>
  <div class="hv-code-entry"><span class="hv-code-ln">${i * 5 + 3}</span><code>&nbsp;&nbsp;year = <i>{</i><u>${year}</u><i>}</i>,</code></div>
  <div class="hv-code-entry"><span class="hv-code-ln">${i * 5 + 4}</span><code><i>}</i></code></div>`).join("");

const nav = `
  <nav class="hv-settings-nav">
    <div class="hv-settings-label">Settings</div>
    ${settingsNav(ic.gear, "General")}
    ${settingsNav(ic.palette, "Appearance")}
    ${settingsNav(ic.bookMarked, "Dictionary")}
    ${settingsNav(ic.database, "Data Storage")}
    ${settingsNav(ic.sparkles, "AI Research Assistant", true)}
    ${settingsNav(ic.cpu, "LaTeX Engine")}
    ${settingsNav(ic.hardDrive, "Downloads")}
    ${settingsNav(ic.blocks, "Integrations")}
    ${settingsNav(ic.keyboard, "Keyboard Shortcuts")}
    ${settingsNav(ic.plug, "MCP")}
    ${settingsNav(ic.flask, "Experimentation")}
    ${settingsNav(ic.lifeBuoy, "Help & About")}
    <div class="hv-settings-advanced"><span>Show Advanced</span><span class="hv-switch is-on"><i></i></span></div>
  </nav>`;

const settingsModal = `
  <div class="hv-settings-layer">
    <div class="hv-settings-backdrop"></div>
    <div class="hv-settings-modal">
      ${nav}
      <section class="hv-settings-main">
        <header><b>AI Research Assistant</b><span id="hvAiCloseSettings">${ic.x}</span></header>
        <div class="hv-settings-scroll">
          <div class="hv-settings-tabs"><span class="hv-set-tab-providers">Providers and keys</span><span class="hv-set-tab-instructions" id="hvAiInstructionsTab">Instructions</span><span>Personas</span></div>
          <div class="hv-provider-tab">
            <p class="hv-provider-intro">Connect any providers you use below. Keys are stored locally only. Saving one sets it as the default.<br/>You can switch between configured providers and models from the dropdown in the chat panel.</p>
            <div class="hv-provider-list">
              ${providerCard("openai", openai, "OpenAI", openAiBody)}
              ${providerCard("anthropic", anthropic, "Anthropic")}
              ${providerCard("google", gemini, "Google Gemini")}
              ${providerCard("zai", zai, "Z.AI (GLM Coding Plan)")}
              ${providerCard("groq", groq, "Groq")}
              ${providerCard("openrouter", openrouter, "OpenRouter")}
              ${providerCard("deepseek", deepseek, "DeepSeek")}
              ${providerCard("mistral", mistral, "Mistral")}
            </div>
          </div>
          <div class="hv-instructions-tab">
            <div class="hv-instruction-block"><b>Default chat model</b><p>Used whenever you start a new chat. You can still switch models for an individual conversation from the chat panel.</p><div class="hv-default-model" id="hvAiDefaultModel">${openai}<span class="hv-default-model-value">gpt-5.6-sol</span>${ic.chevD}</div></div>
            <div class="hv-model-menu"><span class="hv-model-group">OpenAI</span>${selectorModels}</div>
            <div class="hv-instruction-block"><b>Custom instructions</b><p>Added to every AI request as your personal style and preferences. The assistant follows these on top of its built-in behavior. They can't override its tools or safety rules.</p><div class="hv-custom-instructions" id="hvAiCustomInstructions"><span class="hv-instructions-value"></span><span class="hv-instructions-placeholder">e.g. Review for venue style, verify citations, and never invent bibliographic metadata.</span><i class="hv-type-caret"></i></div><span class="hv-save-instructions" id="hvAiSaveInstructions"><span class="hv-save-idle">Save instructions</span><span class="hv-save-done">${ic.checkCircle} Saved</span></span></div>
            <div class="hv-capabilities"><b>Agent capabilities</b><p><span class="hv-checkbox">${ic.checkCircle}</span><strong>Allow PDF page capture for AI</strong><small>Lets the agent rasterize compiled pages for vision layout checks. Disable if you prefer not to send page images to your provider.</small></p><div class="hv-tools-summary">${ic.sparkles}<b>The assistant currently supports these tools</b>${ic.chevR}</div></div>
          </div>
        </div>
      </section>
    </div>
  </div>`;

export const assistantScene = `
<section class="hv-scene hv-assistant-scene" data-scene="assistant" data-chat="connect" data-provider="closed" data-settings-tab="providers" data-ai-pane="pdf" data-ai-compile="done">
  <div class="hv-ai-chat">
    <div class="hv-ai-chat-head">
      <span class="hv-ai-usage" id="hvAiUsage">${ic.badgeDollar}</span>
      <span id="hvAiNewChat">${ic.plus}</span><span>${ic.history}</span><span>${ic.panelRight}</span>
      <div class="hv-usage-popover">
        <section><b>Last run</b><strong>~$0.0065</strong><dl><dt>Steps</dt><dd>1</dd><dt>Input</dt><dd>5,144</dd><dt>Output</dt><dd>467</dd></dl></section>
        <section><b>This chat</b><strong>~$0.044</strong><dl><dt>Runs</dt><dd>1</dd><dt>Steps</dt><dd>3</dd><dt>Tokens</dt><dd>39,035</dd></dl></section>
        <p>Costs are estimates based on public model pricing, not billing totals.</p>
      </div>
    </div>
    ${plan}
    <div class="hv-ai-chat-body">
      <div class="hv-ai-connect">
        <span class="hv-ai-orb">${ic.sparkles}</span><b>Connect an AI provider to continue</b><p>Bring your own API key (OpenAI, Anthropic, Groq, and more) or run a model locally with Ollama. The assistant can read and edit files, compile your project, and verify the PDF.</p><span class="hv-connect-provider" id="hvAiConnect">${ic.sparkles} Connect a provider</span><small>Run a local model with Ollama</small>
      </div>
      <div class="hv-ai-welcome">
        <span class="hv-ai-orb">${ic.sparkles}</span><b>How can I help with your research?</b><p>Working on "EdgeSense: Energy Aware Wildfire Detection"</p>
        <div class="hv-ai-suggestions">
          <span id="hvAiFindPapers">${ic.search} Find papers to cite</span><span>${ic.bookOpen} Write a literature review</span><span>${ic.wrench} Fix any source errors in my document</span><span>${ic.filePlus} Create a new section called 'Publications'</span><span>${ic.quote} Find every citation in the project</span><span>${ic.refresh} Recompile and check for errors</span>
        </div>
        <small>${ic.bookOpen} Import your Zotero or EndNote library</small>
      </div>
      <div class="hv-ai-run-scroll" id="hvAiRunScroll">
        <div class="hv-ai-user-message">Find papers to cite</div>
        ${thought("Thinking...", 1)}
        ${thought("Thought for 10s", 2)}
        ${tool("update_todos", 2.1)}
        ${tool("read_file", 2.2)}
        ${tool("read_file", 2.3)}
        ${tool("read_file", 2.4)}
        ${assistantText("I'll inspect the current citations first, then search for papers that actually support the claims.", 2.5)}
        ${thought("Thinking...", 3, true)}
        ${tool("literature_search", 4.1)}
        ${tool("literature_search", 4.2)}
        ${tool("alphaxiv_search", 4.3)}
        ${assistantText("Quick audit: three citation keys do not resolve, and two existing entries point to unrelated papers. I'm searching for better matches on wildfire sensing, TinyML, and low-power networks.", 4.4)}
        ${tool("literature_search", 5.1)}
        ${tool("literature_search", 5.2)}
        ${tool("verify_citation", 5.3)}
        ${tool("verify_citation", 5.4)}
        ${assistantText("Four solid matches so far: MODIS fire detection, a field-tested sensor-network detector, an energy-harvesting survey, and a TinyML review. I'm checking the DOI metadata before I touch the bibliography.", 5.5)}
        ${tool("verify_citation", 6.1)}
        ${tool("update_todos", 6.2)}
        ${assistantText("The citations check out. I'll add nine verified entries to references.bib, then place them beside the claims they support.", 6.3)}
        ${tool("write_file", 7.1, "Approved")}
        ${assistantText("The bibliography is in place. Next I'm replacing the unresolved keys in main.tex with the verified sources.", 7.2)}
        ${tool("replace_in_file", 8.1, "Always allowed")}
        ${tool("compile", 9.1)}
        ${tool("verify_pdf_pages", 9.2)}
        ${assistantText("Done. I added nine verified references, replaced the three unresolved keys, and recompiled the paper. The two-page PDF now has a complete IEEE bibliography with no missing citations.", 10)}
        <div class="hv-ai-restore" data-ai-step="10.1">${ic.refresh} Restore code to before this response</div>
      </div>
    </div>
    ${approval("bib", "write_file", "references.bib", 1, bibDiff)}
    ${approval("main", "replace_in_file", "main.tex", 21, texDiff)}
    <div class="hv-ai-composer">
      <div class="hv-ai-composer-box"><span id="hvAiComposerText">Ask AI to help with your document...</span><div><i>${ic.paperclip}</i><i>${ic.sparkles}</i><b>Prompts ${ic.chevD}</b><em>${openai}<span>gpt-5.6-sol</span>${ic.chevD}</em><i>${ic.mic ?? ""}</i><strong>${ic.arrowUp}</strong></div></div>
    </div>
  </div>
  <div class="hv-vsplit hv-ai-vsplit"><span class="hv-vthumb"></span></div>
  <div class="hv-ai-preview">
    <div class="hv-pv-bar">
      <span class="hv-logs">${ic.scrollText}<span>Logs</span></span>
      <span class="hv-ai-pdf-status"><span class="hv-ai-status-ok">${ic.checkCircle}</span><span class="hv-ai-status-spin"></span><span class="hv-ai-status-time">4.3s</span></span>
      <span class="hv-pv-right">
        <span class="hv-ib-s" id="hvAiOutlineBtn">${ic.listTree}</span><span class="hv-ib-s">${ic.search}</span><span class="hv-ib-s">${ic.maximize}</span><span class="hv-ib-s">${ic.zoomOut}</span><span class="hv-zoom"><span>105%</span>${ic.chevD}</span><span class="hv-ib-s">${ic.zoomIn}</span>
        <span class="hv-pgnav"><span class="hv-ib-s">${ic.chevU}</span><span class="hv-pgbox" id="hvAiPageNumber">1</span><span class="hv-pgof">of 2</span><span class="hv-ib-s">${ic.chevD}</span></span>
        <span class="hv-pgmode"><span class="hv-ib-s is-on">${ic.file}</span><span class="hv-ib-s">${ic.columns2}</span></span><span class="hv-ib-s">${ic.contrast}</span><span class="hv-ib-s">${ic.refresh}</span><span class="hv-ib-s">${ic.ellipsis}</span>
      </span>
    </div>
    <div class="hv-ai-preview-body">
      <div class="hv-ai-pdf-pages">${strip(pdfPages)}</div>
      <div class="hv-ai-stale"><i></i>Stale</div>
      <aside class="hv-ai-outline"><header>${ic.list}<b>Document outline</b><span>${ic.x}</span></header><div>${outlineItems}</div></aside>
    </div>
    <div class="hv-ai-code-view"><div class="hv-ai-code-tabs"><span class="is-on">${ic.fileText} references.bib <i>${ic.x}</i></span><b>${ic.plus}</b></div><div class="hv-ai-code-toolbar"><span>${ic.undo}</span><span>${ic.redo}</span><i></i><b>${ic.bold}</b><b>${ic.italic}</b><b>${ic.underline}</b><b>${ic.code}</b><i></i><span>${ic.search}</span></div><div class="hv-ai-code-scroll">${codeEntries}</div></div>
  </div>
  ${settingsModal}
</section>`;
