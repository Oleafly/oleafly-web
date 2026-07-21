"use client";

// The "Built like a code editor" bento grid, composed as a single island.
// Magic UI bento-grid layout; every card is a MagicCard (pointer-tracking
// border + glow). The Diagram Composer holds the 2x2 hero slot; four cards
// (Code intelligence, Slash commands, Citations, Command palette) have a
// `visual` slot ready for product screenshots.
import { cn } from "@/lib/utils";
import { AI_LOGO_COLORS, AI_LOGO_PATHS } from "@/components/ai-logos";
import { MagicCard } from "@/components/magicui/magic-card";
import { DotPattern } from "@/components/magicui/dot-pattern";

const CARD_TEXT = "text-[15px] font-semibold text-[#f7f8f8]";
const CARD_DESC = "text-[13px] leading-relaxed text-[#8a8f98]";

function Card({
  className,
  visual,
  icon,
  name,
  desc,
}: {
  className?: string;
  visual?: React.ReactNode;
  icon?: React.ReactNode;
  name: string;
  desc: string;
}) {
  return (
    <MagicCard
      className={cn("rounded-lg", className)}
      gradientSize={240}
      gradientColor="#1c1e22"
      gradientOpacity={0.85}
      gradientFrom="#2563eb"
      gradientTo="#34b44a"
    >
      <div className="relative flex h-full min-h-[176px] flex-col justify-end overflow-hidden p-5">
        {visual}
        <div className="relative z-10 flex flex-col gap-1.5">
          {icon ? <span className="text-[#8a8f98]">{icon}</span> : null}
          <h3 className={CARD_TEXT}>{name}</h3>
          <p className={CARD_DESC}>{desc}</p>
        </div>
      </div>
    </MagicCard>
  );
}

// TikZ-style flow diagram for the Diagram Composer card, drawn over a dot
// grid, with the compile-verified badge the feature is known for.
function DiagramVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[148px] [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
    >
      <DotPattern width={20} height={20} cr={0.9} className="fill-white/[0.1]" />
      <div className="absolute left-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-[3px] rounded-md border border-white/10 bg-[#0d0e10]/95 p-1 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        <span className="flex size-5 items-center justify-center rounded-[4px] bg-[rgba(37,99,235,0.25)] text-[#a8c3f5]">
          <svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
        </span>
        <span className="flex size-5 items-center justify-center text-[#7d828b]">
          <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
        </span>
        <span className="flex size-5 items-center justify-center text-[#7d828b]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1 L9 5 L5 9 L1 5 Z" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        </span>
        <span className="flex size-5 items-center justify-center text-[#7d828b]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5 H8 M6 2.5 L9 5 L6 7.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        </span>
        <span className="my-[2px] h-px w-4 bg-white/10" />
        <span className="flex size-5 items-center justify-center font-mono text-[11px] text-[#7d828b]">+</span>
        <span className="flex size-5 items-center justify-center font-mono text-[11px] text-[#7d828b]">−</span>
        <span className="flex size-5 items-center justify-center text-[#7d828b]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3.5 V1 H3.5 M6.5 1 H9 V3.5 M9 6.5 V9 H6.5 M3.5 9 H1 V6.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
        </span>
      </div>
      <svg viewBox="0 0 560 300" className="absolute inset-0 size-full p-6 pl-14">
        <defs>
          <marker
            id="dc-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path
              d="M 0 1 L 9 5 L 0 9"
              fill="none"
              stroke="#7d828b"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </marker>
        </defs>
        <g fontFamily="JetBrains Mono, monospace" fontSize="13" textAnchor="middle">
          <g className="dc-n1">
            <rect x="40" y="52" width="128" height="44" rx="8" fill="rgba(37,99,235,0.09)" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" />
            <text x="104" y="79" fill="#a8c3f5">Input</text>
          </g>
          <g className="dc-n2">
            <rect x="226" y="52" width="128" height="44" rx="8" fill="rgba(37,99,235,0.09)" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" />
            <text x="290" y="79" fill="#a8c3f5">Encoder</text>
          </g>
          <g className="dc-n3">
            <rect x="412" y="52" width="128" height="44" rx="8" fill="rgba(37,99,235,0.09)" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" />
            <text x="476" y="79" fill="#a8c3f5">Decoder</text>
          </g>
          <g className="dc-out">
            <rect x="226" y="170" width="128" height="44" rx="8" fill="rgba(52,180,74,0.08)" stroke="rgba(52,180,74,0.5)" strokeWidth="1.5" />
            <text x="290" y="197" fill="#8fd6a0">Output</text>
          </g>
          <line className="dc-a1" pathLength={1} x1="168" y1="74" x2="220" y2="74" stroke="#7d828b" strokeWidth="1.5" markerEnd="url(#dc-arrow)" />
          <line className="dc-a2" pathLength={1} x1="354" y1="74" x2="406" y2="74" stroke="#7d828b" strokeWidth="1.5" markerEnd="url(#dc-arrow)" />
          <path className="dc-c1" pathLength={1} d="M 476 96 C 476 140 360 150 360 178" fill="none" stroke="#7d828b" strokeWidth="1.5" markerEnd="url(#dc-arrow)" />
          <path className="dc-c2" pathLength={1} d="M 104 96 C 104 140 220 150 220 178" fill="none" stroke="#7d828b" strokeWidth="1.5" markerEnd="url(#dc-arrow)" />
        </g>
        <g className="dc-badge" fontFamily="JetBrains Mono, monospace" fontSize="11">
          <rect x="404" y="238" width="136" height="26" rx="13" fill="rgba(52,180,74,0.1)" stroke="rgba(52,180,74,0.4)" strokeWidth="1" />
          <text x="472" y="255" textAnchor="middle" fill="#7ed492">TikZ · compiled ✓</text>
        </g>
      </svg>
    </div>
  );
}

// SyncTeX card: source and PDF panes; a cursor clicks a PDF line and the
// matching source line lights up, then the reverse. Pure CSS loop (st-*
// keyframes in magicui.css).
function SyncTexVisual() {
  const texLines = ["\\section{Results}", "We evaluate on", "\\cite{gatto24}"];
  const pdfWidths = ["w-3/5", "w-11/12", "w-4/5"];
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-5 top-4 bottom-[124px] flex gap-2"
    >
      <div className="relative flex-1 overflow-hidden rounded-md border border-white/10 bg-[#0d0e10] p-2">
        <div className="mb-1 font-mono text-[7px] uppercase tracking-wider text-[#8b9096]">main.tex</div>
        <div className="flex flex-col gap-[5px]">
          {texLines.map((l, i) => (
            <div
              key={i}
              className={cn(
                "rounded-[3px] px-1 py-[1px] font-mono text-[8px] leading-[1.4] text-[#7d828b] whitespace-nowrap",
                i === 1 && "st-hl-a",
                i === 2 && "st-hl-b"
              )}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-md border border-white/10 bg-[#101113] p-2">
        <div className="mb-1 font-mono text-[7px] uppercase tracking-wider text-[#8b9096]">PDF</div>
        <div className="flex flex-col gap-[7px] pt-[2px]">
          {pdfWidths.map((w, i) => (
            <div
              key={i}
              className={cn(
                "h-[5px] rounded-full bg-[#3a3d42]",
                w,
                i === 1 && "st-hl-a",
                i === 2 && "st-hl-b"
              )}
            />
          ))}
        </div>
      </div>
      <div className="st-cursor absolute z-10 size-3 rounded-full border-[1.5px] border-white bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
    </div>
  );
}

// "From one page to six hundred": pages keep dropping onto a stack while a
// page counter climbs to 600 and the compile bar fills (pg-* keyframes).
function PagesVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-5 top-4 bottom-[124px] flex items-center justify-between"
    >
      <div className="relative h-[64px] w-16">
        <div className="absolute bottom-0 left-3 h-[52px] w-10 -rotate-6 rounded-[3px] border border-white/10 bg-[#121316]" />
        <div className="absolute bottom-0 left-4 h-[52px] w-10 rotate-3 rounded-[3px] border border-white/10 bg-[#15161a]" />
        <div className="pg-drop absolute bottom-0 left-3.5 h-[52px] w-10 rounded-[3px] border border-white/20 bg-[#191b1f] p-1.5">
          <div className="mb-1 h-[3px] w-6 rounded bg-white/15" />
          <div className="mb-1 h-[2px] w-5 rounded bg-white/10" />
          <div className="h-[2px] w-6 rounded bg-white/10" />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="relative h-4 w-28 text-right font-mono text-[10.5px]">
          <span className="pg-c1 absolute right-0 text-[#8a8f98]">page 1</span>
          <span className="pg-c2 absolute right-0 text-[#8a8f98]">page 214</span>
          <span className="pg-c3 absolute right-0 text-[#8a8f98]">page 487</span>
          <span className="pg-c4 absolute right-0 text-[#7ed492]">600 pages ✓</span>
        </div>
        <div className="h-[3px] w-28 overflow-hidden rounded-full bg-white/10">
          <div className="pg-bar h-full rounded-full bg-[#3b82f6]" />
        </div>
        <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#8b9096]">still smooth</span>
      </div>
    </div>
  );
}

// Slash commands: type "/" mid-sentence, the insert menu opens, figure lands.
function SlashVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex flex-col items-start gap-[5px]">
      <div className="font-mono text-[9px] text-[#7d828b]">
        …shown in Figure 3. <span className="sl-type inline-block overflow-hidden whitespace-nowrap border-r-[1.5px] border-[#3b82f6] align-bottom text-[#c9cdd6]">/fig</span>
      </div>
      <div className="sl-menu w-full max-w-[150px] rounded-md border border-white/10 bg-[#0d0e10] p-1 font-mono text-[8.5px] leading-[1.6] text-[#8a8f98] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        <div className="sl-i1 rounded-[3px] px-1.5">/figure</div>
        <div className="rounded-[3px] px-1.5">/table</div>
        <div className="rounded-[3px] px-1.5">/cite</div>
      </div>
    </div>
  );
}

// Command palette: types a query, results appear, the match gets picked.
function PaletteVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex items-start justify-center">
      <div className="w-full max-w-[230px] rounded-md border border-white/10 bg-[#0d0e10] shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-2 py-[5px] font-mono text-[9px] text-[#c9cdd6]">
          <span className="text-[#8b9096]">⌘K</span>
          <span className="cp-type overflow-hidden whitespace-nowrap border-r-[1.5px] border-[#3b82f6] pr-[1px]">recompile</span>
        </div>
        <div className="p-1 font-mono text-[8.5px] leading-[1.5] text-[#8a8f98]">
          <div className="cp-r cp-r1 rounded-[3px] px-1.5 py-[1px]">▸ Recompile document</div>
          <div className="cp-r rounded-[3px] px-1.5 py-[1px]">Set recompile delay</div>
          <div className="cp-r rounded-[3px] px-1.5 py-[1px]">Recompile on save</div>
        </div>
      </div>
    </div>
  );
}

// Code intelligence: rename a label once, every file updates.
function RenameToken() {
  return (
    <span className="relative inline-block align-baseline">
      <span className="invisible">fig:pipeline</span>
      <span className="ci-old absolute left-0 top-0 rounded-[2px]">fig:pipeline</span>
      <span className="ci-new absolute left-0 top-0 rounded-[2px]">fig:arch</span>
    </span>
  );
}
function CodeIntelVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-4 bottom-[116px] flex flex-col justify-center gap-[6px] font-mono text-[8.5px] text-[#7d828b]">
      <div className="ci-chip self-end rounded-full border border-white/15 bg-[#141517] px-2 py-[1px] text-[8px] text-[#c9cdd6]">F2 · rename symbol</div>
      <div className="rounded-md border border-white/10 bg-[#0d0e10] px-2 py-[4px] whitespace-nowrap">
        <span className="text-[#8b9096]">intro.tex&nbsp;&nbsp;</span>\ref{"{"}<RenameToken />{"}"}
      </div>
      <div className="rounded-md border border-white/10 bg-[#0d0e10] px-2 py-[4px] whitespace-nowrap">
        <span className="text-[#8b9096]">results.tex&nbsp;</span>\ref{"{"}<RenameToken />{"}"}
      </div>
    </div>
  );
}

// Citations: paste a DOI, get BibTeX, the \cite lands at the cursor.
function CitationsVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex flex-col justify-start gap-[5px] font-mono">
      <div className="ct-doi self-start rounded border border-white/15 bg-[#141517] px-1.5 py-[1px] text-[8.5px] text-[#c9cdd6]">doi:10.1145/3576915.3616679</div>
      <div className="ct-bib self-stretch rounded border border-white/10 bg-[#0d0e10] px-1.5 py-[3px] text-[8px] leading-[1.55] text-[#7d828b]">
        @inproceedings{"{"}<span className="text-[#7cabf8]">gatto24</span>,<br />
        &nbsp;&nbsp;title = {"{"}Raft-based KV stores{"}"}, …
      </div>
      <div className="ct-cite self-end rounded-full border border-[rgba(52,180,74,0.4)] bg-[rgba(52,180,74,0.1)] px-2 py-[1px] text-[8.5px] text-[#7ed492]">\cite{"{"}gatto24{"}"} inserted ✓</div>
    </div>
  );
}

// Spell & grammar: the typo gets the squiggle, Hunspell offers the fix,
// the word heals. All offline.
function SpellVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-4 bottom-[116px] flex flex-col items-start justify-center gap-[7px]">
      <div className="font-mono text-[10px] text-[#8a8f98]">
        The{" "}
        <span className="relative inline-block">
          <span className="invisible">experiment</span>
          <span className="sg-bad absolute left-0 top-0">experment</span>
          <span className="sg-good absolute left-0 top-0">experiment</span>
        </span>{" "}
        ran offline.
      </div>
      <div className="sg-pop rounded-md border border-white/15 bg-[#141517] px-2 py-[2px] font-mono text-[8.5px] text-[#c9cdd6]">
        experiment · Hunspell, on-device
      </div>
    </div>
  );
}

// Horizontal "profile stack" of AI providers: real brand marks in their real
// colors on neutral circles (multicolor brands ship their palette inside the
// SVG; monochrome brands use their official on-dark treatment).
const PROVIDERS: Array<[string, string]> = [
  ["OpenAI", "openai"],
  ["Anthropic", "anthropic"],
  ["Groq", "groq"],
  ["OpenRouter", "openrouter"],
  ["DeepSeek", "deepseek"],
  ["Mistral", "mistral"],
  ["xAI", "xai"],
  ["Z.AI", "zai"],
  ["Ollama", "ollama"],
];

function ProviderStack() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-6 flex items-center">
      {PROVIDERS.map(([name, key], i) => (
        <div
          key={name}
          title={name}
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#141517] shadow-[0_2px_8px_rgba(0,0,0,0.6)]",
            i > 0 && "-ml-2"
          )}
          style={{
            color: AI_LOGO_COLORS[key] ?? undefined,
            zIndex: PROVIDERS.length - i,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            fillRule="evenodd"
            dangerouslySetInnerHTML={{ __html: AI_LOGO_PATHS[key] }}
          />
        </div>
      ))}
    </div>
  );
}

export function BentoSection() {
  return (
    <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-3 md:grid-cols-3">
      <Card
        className="min-h-[420px] md:col-span-2 md:row-span-2"
        visual={<DiagramVisual />}
        name="Diagram Composer"
        desc="Describe a diagram, or select the paragraph that explains it. The AI writes the TikZ, compiles just the figure in isolation, looks at the render to fix overlaps and spacing, then inserts editable TikZ at your cursor. No AI key? The manual Figure Playground composes figures fully offline."
      />
      <Card
        visual={<SyncTexVisual />}
        name="SyncTeX, word-level"
        desc="⌘-click a word in the PDF and land on that exact word in the source. Jump back with ⌘⇧J."
      />
      <Card
        visual={<CodeIntelVisual />}
        name="Code intelligence"
        desc="Go to definition, find references, and rename a label, citation key, or macro across every file."
      />
      <Card
        visual={<SlashVisual />}
        name="Slash commands"
        desc="Type / for a Notion-style insert menu: /figure, /table, /section, /cite, /math."
      />
      <Card
        visual={<CitationsVisual />}
        name="Citations by DOI"
        desc="Paste a DOI, arXiv id, or URL. Oleafly fetches the BibTeX, dedupes it, and inserts the \cite."
      />
      <Card
        visual={<PaletteVisual />}
        name="Command palette"
        desc="⌘K fuzzy-searches every action in the app: projects, files, settings, the lot."
      />
      <Card
        visual={<ProviderStack />}
        name="Bring your own AI"
        desc="Nine providers or local Ollama, all behind the same per-change approval. MCP clients like Claude Code and Cursor connect the same way. Or turn AI off. The editor doesn't need it."
      />
      <Card
        visual={<SpellVisual />}
        name="Offline spell & grammar"
        desc="Hunspell and Harper run as WASM on your machine, masking commands and math so only prose is checked."
      />
      <Card
        visual={<PagesVisual />}
        name="From one page to six hundred"
        desc="The editor and virtualized PDF viewer stay smooth whether it's a one-page resume or a book-length thesis."
      />
    </div>
  );
}
