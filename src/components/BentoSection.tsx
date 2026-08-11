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

const CARD_TEXT = "text-[15px] font-extrabold text-[#1c1610]";
const CARD_DESC = "text-[13px] leading-relaxed text-[#6b5f50] font-semibold";

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
      className={cn(
        "rounded-[20px] border-[4px] border-[#2a2218] bg-[#fff9ed] shadow-[5px_6px_0_#2a2218]",
        className,
      )}
      gradientSize={240}
      gradientColor="#f8ebcf"
      gradientOpacity={0.4}
      gradientFrom="#f5c518"
      gradientTo="#5aa3e0"
    >
      <div className="relative flex h-full min-h-[160px] flex-col justify-end overflow-hidden p-4 sm:min-h-[176px] sm:p-5">
        {visual}
        <div className="relative z-20 mt-auto flex flex-col gap-1.5 bg-gradient-to-t from-[#fff9ed] via-[#fff9ed]/95 to-transparent pt-6 sm:pt-8">
          {icon ? <span className="text-[#6b5f50]">{icon}</span> : null}
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
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[140px] overflow-hidden rounded-t-[16px] sm:bottom-[168px]"
    >
      <DotPattern
        width={16}
        height={16}
        cr={1.15}
        className="fill-[#2a2218]/[0.22]"
      />
      <div className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-[3px] rounded-xl border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-1.5 shadow-[2px_3px_0_#2a2218] sm:left-4 sm:flex">
        <span className="flex size-6 items-center justify-center rounded-md border-2 border-[#2a2218] bg-[#cce6ff] text-[#1a4a7a]">
          <svg width="10" height="10" viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
        </span>
        <span className="flex size-6 items-center justify-center text-[#2a2218]">
          <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
        </span>
        <span className="flex size-6 items-center justify-center text-[#2a2218]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 1 L9 5 L5 9 L1 5 Z" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
        </span>
        <span className="flex size-6 items-center justify-center text-[#2a2218]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 5 H8 M6 2.5 L9 5 L6 7.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </span>
        <span className="my-[2px] h-px w-5 bg-[#2a2218]/30" />
        <span className="flex size-6 items-center justify-center font-mono text-[12px] font-bold text-[#2a2218]">+</span>
        <span className="flex size-6 items-center justify-center font-mono text-[12px] font-bold text-[#2a2218]">−</span>
        <span className="flex size-6 items-center justify-center text-[#2a2218]">
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3.5 V1 H3.5 M6.5 1 H9 V3.5 M9 6.5 V9 H6.5 M3.5 9 H1 V6.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
        </span>
      </div>
      <svg viewBox="0 0 560 300" className="absolute inset-0 size-full p-4 sm:p-6 sm:pl-16">
        {/* Edges under nodes. Filled triangle tips are separate polygons (not
            SVG markers) so dash-draw animations never leave open V chevrons. */}
        <g fill="none" stroke="#2a2218" strokeWidth="2.5" strokeLinecap="round">
          {/* Input → Encoder (line ends just before tip) */}
          <line className="dc-a1" pathLength={1} x1="168" y1="72" x2="204" y2="72" />
          {/* Encoder → Decoder */}
          <line className="dc-a2" pathLength={1} x1="354" y1="72" x2="390" y2="72" />
          {/* Input → Output: curve ends just above the tip on Output top-left */}
          <path className="dc-c2" pathLength={1} d="M 104 96 C 104 142 248 152 248 156" />
          {/* Decoder → Output: curve ends just above the tip on Output top-right */}
          <path className="dc-c1" pathLength={1} d="M 476 96 C 476 142 332 152 332 156" />
        </g>
        {/* Filled arrowheads — solid triangles pointing into the target node.
            Tip classes only animate opacity (no dash), so they never render as open V's. */}
        <g fill="#2a2218" stroke="none">
          {/* → Encoder */}
          <polygon className="dc-t1" points="218,72 204,65 204,79" />
          {/* → Decoder */}
          <polygon className="dc-t2" points="404,72 390,65 390,79" />
          {/* ↓ into Output (left) */}
          <polygon className="dc-t4" points="248,168 240,156 256,156" />
          {/* ↓ into Output (right) */}
          <polygon className="dc-t3" points="332,168 324,156 340,156" />
        </g>
        <g fontFamily="Nunito, system-ui, sans-serif" fontSize="14" fontWeight="800" textAnchor="middle">
          <g className="dc-n1">
            <rect x="40" y="48" width="128" height="48" rx="12" fill="#cce6ff" stroke="#2a2218" strokeWidth="2.5" />
            <text x="104" y="78" fill="#1a4a7a">Input</text>
          </g>
          <g className="dc-n2">
            <rect x="226" y="48" width="128" height="48" rx="12" fill="#ffe8a8" stroke="#2a2218" strokeWidth="2.5" />
            <text x="290" y="78" fill="#2a2218">Encoder</text>
          </g>
          <g className="dc-n3">
            <rect x="412" y="48" width="128" height="48" rx="12" fill="#ffd0c8" stroke="#2a2218" strokeWidth="2.5" />
            <text x="476" y="78" fill="#2a2218">Decoder</text>
          </g>
          <g className="dc-out">
            <rect x="226" y="168" width="128" height="48" rx="12" fill="#c8f5d8" stroke="#2a2218" strokeWidth="2.5" />
            <text x="290" y="198" fill="#1f8a45">Output</text>
          </g>
        </g>
        <g className="dc-badge" fontFamily="Nunito, system-ui, sans-serif" fontSize="12" fontWeight="800">
          <rect x="392" y="236" width="148" height="28" rx="14" fill="#c8f5d8" stroke="#2a2218" strokeWidth="2" />
          <text x="466" y="255" textAnchor="middle" fill="#1f8a45">TikZ · compiled ✓</text>
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
      <div className="relative flex-1 overflow-hidden rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-2 shadow-[2px_2px_0_#2a2218]">
        <div className="mb-1 font-mono text-[7px] font-extrabold uppercase tracking-wider text-[#6b5f50]">main.tex</div>
        <div className="flex flex-col gap-[5px]">
          {texLines.map((l, i) => (
            <div
              key={i}
              className={cn(
                "rounded-[4px] px-1 py-[1px] font-mono text-[8px] font-semibold leading-[1.4] text-[#2a2218] whitespace-nowrap",
                i === 1 && "st-hl-a",
                i === 2 && "st-hl-b"
              )}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff6e4] p-2 shadow-[2px_2px_0_#2a2218]">
        <div className="mb-1 font-mono text-[7px] font-extrabold uppercase tracking-wider text-[#6b5f50]">PDF</div>
        <div className="flex flex-col gap-[7px] pt-[2px]">
          {pdfWidths.map((w, i) => (
            <div
              key={i}
              className={cn(
                "h-[6px] rounded-full border border-[#2a2218]/20 bg-[#d8cbb0]",
                w,
                i === 1 && "st-hl-a",
                i === 2 && "st-hl-b"
              )}
            />
          ))}
        </div>
      </div>
      <div className="st-cursor absolute z-10 size-3.5 rounded-full border-[2.5px] border-[#2a2218] bg-[#f5c518] shadow-[2px_2px_0_#2a2218]" />
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
        <div className="absolute bottom-0 left-3 h-[52px] w-10 -rotate-6 rounded-[3px] border border-[#2a2218]/25 bg-[#ffe8a8]" />
        <div className="absolute bottom-0 left-4 h-[52px] w-10 rotate-3 rounded-[3px] border border-[#2a2218]/25 bg-[#ffd0c8]" />
        <div className="pg-drop absolute bottom-0 left-3.5 h-[52px] w-10 rounded-[3px] border border-[#2a2218]/35 bg-[#c8f5d8] p-1.5">
          <div className="mb-1 h-[3px] w-6 rounded bg-[#2a2218]/15" />
          <div className="mb-1 h-[2px] w-5 rounded bg-[#2a2218]/10" />
          <div className="h-[2px] w-6 rounded bg-[#2a2218]/10" />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <div className="relative h-4 w-28 text-right font-mono text-[10.5px]">
          <span className="pg-c1 absolute right-0 text-[#6a5d4c]">page 1</span>
          <span className="pg-c2 absolute right-0 text-[#6a5d4c]">page 214</span>
          <span className="pg-c3 absolute right-0 text-[#6a5d4c]">page 487</span>
          <span className="pg-c4 absolute right-0 text-[#1f8a45]">600 pages ✓</span>
        </div>
        <div className="h-[3px] w-28 overflow-hidden rounded-full bg-[#2a2218]/10">
          <div className="pg-bar h-full rounded-full bg-[#5aa3e0]" />
        </div>
        <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#6a5d4c]">still smooth</span>
      </div>
    </div>
  );
}

// Slash commands: type "/" mid-sentence, the insert menu opens, figure lands.
function SlashVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex flex-col items-start gap-2">
      <div className="font-mono text-[9.5px] font-semibold text-[#6b5f50]">
        …shown in Figure 3.{" "}
        <span className="sl-type inline-block overflow-hidden whitespace-nowrap border-r-[2px] border-[#5aa3e0] align-bottom font-bold text-[#2a2218]">
          /fig
        </span>
      </div>
      <div className="sl-menu w-full max-w-[160px] rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-1.5 font-mono text-[9px] font-bold leading-[1.7] text-[#6b5f50] shadow-[3px_3px_0_#2a2218]">
        <div className="sl-i1 rounded-md px-2 py-[2px]">/figure</div>
        <div className="rounded-md px-2 py-[2px]">/table</div>
        <div className="rounded-md px-2 py-[2px]">/cite</div>
      </div>
    </div>
  );
}

// Command palette: types a query, results appear, the match gets picked.
function PaletteVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex items-start justify-center">
      <div className="cp-panel w-full max-w-[230px] rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] shadow-[3px_3px_0_#2a2218]">
        <div className="flex items-center gap-1.5 border-b-[2.5px] border-[#2a2218] px-2.5 py-[6px] font-mono text-[9.5px] font-bold text-[#2a2218]">
          <span className="rounded border-[1.5px] border-[#2a2218] bg-[#ffe8a8] px-1 py-px text-[8px] font-extrabold text-[#2a2218]">
            ⌘K
          </span>
          <span className="cp-type overflow-hidden whitespace-nowrap border-r-[2px] border-[#5aa3e0] pr-[1px]">
            recompile
          </span>
        </div>
        <div className="p-1.5 font-mono text-[9px] font-semibold leading-[1.65] text-[#6b5f50]">
          <div className="cp-r cp-r1 rounded-md px-2 py-[2px]">▸ Recompile document</div>
          <div className="cp-r rounded-md px-2 py-[2px]">Set recompile delay</div>
          <div className="cp-r rounded-md px-2 py-[2px]">Recompile on save</div>
        </div>
      </div>
    </div>
  );
}

// Code intelligence: rename a label once, every file updates.
function RenameToken() {
  return (
    <span className="relative inline-block align-baseline font-bold">
      <span className="invisible">fig:pipeline</span>
      <span className="ci-old absolute left-0 top-0 rounded-[3px] px-0.5">fig:pipeline</span>
      <span className="ci-new absolute left-0 top-0 rounded-[3px] px-0.5">fig:arch</span>
    </span>
  );
}
function CodeIntelVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-4 bottom-[116px] flex flex-col justify-center gap-2 font-mono text-[9px] font-semibold text-[#6b5f50]">
      <div className="ci-chip self-end rounded-full border-[2.5px] border-[#2a2218] bg-[#ffe8a8] px-2.5 py-[2px] text-[8px] font-extrabold text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
        F2 · rename symbol
      </div>
      <div className="ci-row rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-[5px] whitespace-nowrap shadow-[2px_2px_0_#2a2218]">
        <span className="text-[#6b5f50]">intro.tex&nbsp;&nbsp;</span>\ref{"{"}<RenameToken />{"}"}
      </div>
      <div className="ci-row rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-[5px] whitespace-nowrap shadow-[2px_2px_0_#2a2218]">
        <span className="text-[#6b5f50]">results.tex&nbsp;</span>\ref{"{"}<RenameToken />{"}"}
      </div>
    </div>
  );
}

// Citations: paste a DOI, get BibTeX, the \cite lands at the cursor.
function CitationsVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex flex-col justify-start gap-[5px] font-mono">
      <div className="ct-doi self-start rounded border border-[#2a2218]/30 bg-[#fff9ed] px-1.5 py-[1px] text-[8.5px] text-[#2a2218]">doi:10.1145/3576915.3616679</div>
      <div className="ct-bib self-stretch rounded border border-[#2a2218]/25 bg-[#fff9ed] px-1.5 py-[3px] text-[8px] leading-[1.55] text-[#6a5d4c]">
        @inproceedings{"{"}<span className="text-[#2a6db5]">gatto24</span>,<br />
        &nbsp;&nbsp;title = {"{"}Raft-based KV stores{"}"}, …
      </div>
      <div className="ct-cite self-end rounded-full border border-[rgba(42,34,24,0.35)] bg-[rgba(78,207,116,0.2)] px-2 py-[1px] text-[8.5px] text-[#1f8a45]">\cite{"{"}gatto24{"}"} inserted ✓</div>
    </div>
  );
}

// Spell & grammar: the typo gets the squiggle, Hunspell offers the fix,
// the word heals. All offline.
function SpellVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-4 bottom-[116px] flex flex-col items-start justify-center gap-2.5">
      <div className="rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-3 py-2.5 font-mono text-[11px] font-semibold text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
        The{" "}
        <span className="relative inline-block">
          <span className="invisible font-bold">experiment</span>
          <span className="sg-bad absolute left-0 top-0 font-bold">experment</span>
          <span className="sg-good absolute left-0 top-0 font-bold">experiment</span>
        </span>{" "}
        ran offline.
      </div>
      <div className="sg-pop rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-[3px] font-mono text-[8.5px] font-extrabold text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
        experiment · Hunspell, on-device ✓
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
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-0 mb-3 flex min-h-[48px] max-w-full items-center overflow-x-auto pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mb-4 sm:min-h-[52px]"
    >
      {PROVIDERS.map(([name, key], i) => (
        <div
          key={name}
          title={name}
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-full border-[2.5px] border-[#2a2218] bg-[#fff9ed] shadow-[2px_2px_0_#2a2218]",
            i > 0 && "-ml-2.5"
          )}
          style={{
            color: AI_LOGO_COLORS[key] ?? undefined,
            zIndex: PROVIDERS.length - i,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="currentColor"
            fillRule="evenodd"
            dangerouslySetInnerHTML={{ __html: AI_LOGO_PATHS[key] }}
          />
        </div>
      ))}
    </div>
  );
}

// Three engines: active file tab cycles LaTeX → Typst → Markdown; shared
// library line stays put. eng-* keyframes.
function EnginesVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 mb-2 flex min-h-[100px] w-full flex-1 flex-col justify-center gap-3 font-mono"
    >
      <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
        <span className="eng-t1 rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-1.5 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          main.tex
        </span>
        <span className="eng-t2 rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-1.5 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          paper.typ
        </span>
        <span className="eng-t3 rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-1.5 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          notes.md
        </span>
      </div>
      <div className="eng-line flex items-center gap-1.5 self-start rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-[3px] text-[8.5px] font-extrabold uppercase tracking-[0.08em] text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
        <span className="eng-dot inline-block size-2 rounded-full border border-[#2a2218] bg-[#4ecf74]" />
        one library · one Git history
      </div>
    </div>
  );
}

// Import: paper.pdf morphs across a comic connector into main.tex; local ✓ pops.
function ImportVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mb-3 flex min-h-[108px] flex-1 flex-col items-center justify-center gap-3 font-mono text-[10px] font-bold"
    >
      <div className="flex items-center gap-2.5">
        <span className="im-src rounded-lg border-[2.5px] border-[#2a2218] bg-[#ffd0c8] px-2.5 py-1.5 text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
          paper.pdf
        </span>
        <span className="relative flex h-[14px] w-14 items-center">
          <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#2a2218]/25" />
          <span className="im-dot absolute top-1/2 size-[10px] -translate-y-1/2 rounded-full border-[2px] border-[#2a2218] bg-[#5aa3e0] shadow-[1px_1px_0_#2a2218]" />
          <span className="im-arrow absolute right-0 top-1/2 -translate-y-1/2 text-[12px] leading-none text-[#2a2218]">▸</span>
        </span>
        <span className="im-out rounded-lg border-[2.5px] border-[#2a2218] bg-[#cce6ff] px-2.5 py-1.5 text-[#1a4a7a] shadow-[2px_2px_0_#2a2218]">
          main.tex
        </span>
      </div>
      <span className="im-badge rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-0.5 text-[9.5px] font-extrabold text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
        local ✓
      </span>
    </div>
  );
}

// Visual editor: a Code ⇄ Visual segmented toggle flips, and the LaTeX
// source morphs into rendered prose (and back). ve-* keyframes.
function VisualEditorVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[120px] sm:bottom-[148px] [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
    >
      <DotPattern width={20} height={20} cr={0.9} className="fill-[#2a2218]/[0.14]" />
      <div className="ve-toggle absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center rounded-full border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-[3px] font-mono text-[9px] font-extrabold shadow-[3px_3px_0_#2a2218] sm:top-5 sm:text-[10px]">
        <span className="ve-knob absolute left-[3px] top-[3px] h-[calc(100%-6px)] w-[56px] rounded-full border-[2px] border-[#2a2218] bg-[#cce6ff]" />
        <span className="ve-label-code relative z-10 w-[56px] px-2 py-[4px] text-center text-[#2a2218]">Code</span>
        <span className="ve-label-vis relative z-10 w-[56px] px-2 py-[4px] text-center text-[#6b5f50]">Visual</span>
      </div>
      <div className="absolute inset-x-3 top-[52px] bottom-3 overflow-hidden rounded-xl border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-3 shadow-[3px_3px_0_#2a2218] sm:inset-x-8 sm:top-[64px] sm:bottom-4 sm:p-4">
        {/* code face */}
        <div className="ve-code absolute inset-4 font-mono text-[11px] font-semibold leading-[1.85] text-[#6b5f50]">
          <div>
            <span className="font-bold text-[#1a4a7a]">\section</span>
            {"{"}
            <span className="text-[#2a2218]">Results</span>
            {"}"}
          </div>
          <div>
            We find that <span className="font-bold text-[#1a4a7a]">\textbf</span>
            {"{"}local-first{"}"}
          </div>
          <div>
            editing <span className="font-bold text-[#1a4a7a]">\emph</span>
            {"{"}wins{"}"} in every
          </div>
          <div>benchmark we ran.</div>
        </div>
        {/* rendered face — dark ink on cream so it stays readable */}
        <div className="ve-prose absolute inset-4 text-[12.5px] font-semibold leading-[1.8] text-[#6b5f50]">
          <div className="mb-1.5 text-[16px] font-extrabold text-[#1a1410]">3&ensp;Results</div>
          <div>
            We find that{" "}
            <span className="rounded bg-[#ffe8a8] px-0.5 font-extrabold text-[#2a2218]">local-first</span>{" "}
            editing <span className="italic text-[#1a4a7a]">wins</span> in every benchmark we ran.
          </div>
          <span className="ve-caret ml-[1px] inline-block h-[14px] w-[2px] translate-y-[2px] rounded-sm bg-[#2a2218]" />
        </div>
        <div className="ve-badge absolute bottom-3 right-3 rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-[3px] font-mono text-[8.5px] font-extrabold text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
          unsupported LaTeX stays visible ✓
        </div>
      </div>
    </div>
  );
}

// Reference libraries: .bib/.ris/.xml/.rdf chips queue up and merge into
// references.bib with a dedupe badge. zl-* keyframes.
function LibraryImportVisual() {
  const files: Array<[string, string, string]> = [
    ["library.bib", "zl-f1", "bg-[#cce6ff]"],
    ["papers.ris", "zl-f2", "bg-[#ffe8a8]"],
    ["endnote.xml", "zl-f3", "bg-[#ffd0c8]"],
    ["zotero.rdf", "zl-f4", "bg-[#e8d5ff]"],
  ];
  // Relative (not absolute) so chips stay in the visual band above the title
  // instead of sliding under the Card's z-20 text gradient.
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 mb-2 flex min-h-[118px] w-full flex-1 flex-col justify-start gap-2 font-mono"
    >
      <div className="flex flex-wrap gap-1.5">
        {files.map(([name, cls, bg]) => (
          <span
            key={name}
            className={cn(
              cls,
              bg,
              "rounded-md border-[2.5px] border-[#2a2218] px-1.5 py-[2px] text-[8.5px] font-bold text-[#2a2218] shadow-[1.5px_1.5px_0_#2a2218]",
            )}
          >
            {name}
          </span>
        ))}
      </div>
      <div className="zl-merge flex items-center gap-1.5 self-start rounded-md border-[2.5px] border-[#2a2218] bg-[#cce6ff] px-2 py-[3px] text-[8.5px] font-extrabold text-[#1a4a7a] shadow-[2px_2px_0_#2a2218]">
        → references.bib
      </div>
      <div className="zl-badge self-start rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-[2px] text-[8.5px] font-extrabold text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
        142 entries · 9 duplicates removed ✓
      </div>
    </div>
  );
}

// Research connectors: a query goes out, papers come back, one citation gets
// verified against Crossref. rs-* keyframes.
function ResearchVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 mb-2 flex min-h-[100px] w-full flex-1 flex-col justify-start gap-2 font-mono"
    >
      <div className="rs-q self-start rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2 py-[3px] text-[8.5px] font-bold text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
        “raft consensus in KV stores”
      </div>
      <div className="rs-r1 self-stretch rounded-lg border-[2.5px] border-[#2a2218] bg-[#cce6ff] px-2 py-[4px] text-[8px] font-semibold text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
        <span className="font-extrabold text-[#1a4a7a]">alphaXiv</span>
        <span className="text-[#6b5f50]"> · Ongaro &amp; Ousterhout, 2014</span>
      </div>
      <div className="rs-v self-end rounded-full border-[2.5px] border-[#2a2218] bg-[#c8f5d8] px-2.5 py-[2px] text-[8.5px] font-extrabold text-[#1f8a45] shadow-[2px_2px_0_#2a2218]">
        DOI verified via Crossref ✓
      </div>
    </div>
  );
}

// Agent memory: a sticky note lands, then plan items check off one by one.
// am-* keyframes.
function MemoryVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 top-3 bottom-[116px] flex flex-col justify-start gap-[6px] font-mono [mask-image:linear-gradient(to_bottom,black_72%,transparent)]">
      <div className="am-note self-start rounded border border-[#f7bc55]/30 bg-[#f59e0b]/[0.08] px-1.5 py-[2px] text-[8.5px] text-[#f7bc55]">
        ◈ remembered: “IEEE format, biblatex”
      </div>
      <div className="rounded-md border border-[#2a2218]/25 bg-[#fff9ed] p-1.5 text-[8.5px] leading-[1.8] text-[#6a5d4c]">
        <div className="am-t1 flex items-center gap-1.5"><span className="am-box">✓</span> Fix undefined refs</div>
        <div className="am-t2 flex items-center gap-1.5"><span className="am-box">✓</span> Recompile chapter 3</div>
        <div className="am-t3 flex items-center gap-1.5"><span className="am-box"></span> Verify PDF output</div>
      </div>
    </div>
  );
}

// Detachable preview: PDF pops out of the app into a reserved right dock.
// Flex reserves both slots so card overflow-hidden never crops the travel.
function DetachVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-0 mb-2 flex min-h-[148px] w-full items-center justify-center"
    >
      <div className="flex h-[112px] w-full max-w-[240px] items-center justify-center gap-2 px-1">
        {/* App chrome + source of the detach */}
        <div className="relative h-[84px] w-[118px] shrink-0 rounded-md border-[2.5px] border-[#2a2218] bg-[#fff9ed] p-1.5 shadow-[2px_2px_0_#2a2218]">
          <div className="mb-1 flex gap-[3px]">
            <span className="size-[5px] rounded-full border border-[#2a2218] bg-[#ef5a45]" />
            <span className="size-[5px] rounded-full border border-[#2a2218] bg-[#f5c518]" />
          </div>
          <div className="flex h-[calc(100%-10px)] gap-1">
            <div className="flex-1 rounded-[3px] border border-[#2a2218]/20 bg-[#cce6ff]/60" />
            <div className="pv-ghost flex-1 rounded-[3px] border-2 border-dashed border-[#2a2218]/40" />
          </div>
          {/* Starts nested over the dashed pane; animates into the dock on the right */}
          <div className="pv-win absolute left-[56px] top-[14px] z-10 h-[56px] w-[48px] rounded-[5px] border-[2.5px] border-[#2a2218] bg-[#fff6e4] p-1.5 shadow-[2px_3px_0_#2a2218]">
            <div className="mb-[4px] h-[3px] w-6 rounded bg-[#2a2218]/25" />
            <div className="mb-[3px] h-[2.5px] w-full rounded bg-[#2a2218]/18" />
            <div className="mb-[3px] h-[2.5px] w-4/5 rounded bg-[#2a2218]/18" />
            <div className="h-[2.5px] w-full rounded bg-[#2a2218]/18" />
          </div>
        </div>
        {/* Reserved dock: empty space the PDF lands in (keeps layout stable) */}
        <div className="h-[64px] w-[56px] shrink-0" />
      </div>
    </div>
  );
}

// Make it yours: comic statusline types :wq; accent swatches pop in sequence.
function YoursVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-5 top-4 bottom-[116px] flex flex-col items-start justify-center gap-3"
    >
      <div className="my-bar flex w-full max-w-[200px] items-center justify-between rounded-lg border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2.5 py-[6px] font-mono text-[10px] font-bold shadow-[2px_3px_0_#2a2218]">
        <span className="my-mode text-[#1f8a45]">-- NORMAL --</span>
        <span className="my-type overflow-hidden whitespace-nowrap border-r-[2px] border-[#5aa3e0] pr-[1px] text-[#2a2218]">
          :wq
        </span>
      </div>
      <div className="flex items-center gap-[7px]">
        {["#5aa3e0", "#4ecf74", "#8b5cf6", "#f5c518", "#f472b6"].map((c, i) => (
          <span
            key={c}
            className={cn(
              "size-[14px] rounded-full border-[2.5px] border-[#2a2218] shadow-[1.5px_1.5px_0_#2a2218]",
              `my-d${i + 1}`,
            )}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
      <span className="my-label font-mono text-[8.5px] font-extrabold uppercase tracking-[0.12em] text-[#6b5f50]">
        accent · themes · layouts
      </span>
    </div>
  );
}

// Export: main.tex fans into comic format chips that light up one by one.
function ExportVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mb-3 flex min-h-[108px] flex-1 items-center justify-center gap-3 font-mono text-[10px] font-bold"
    >
      <span className="ex-src rounded-lg border-[2.5px] border-[#2a2218] bg-[#ffe8a8] px-2.5 py-1.5 text-[#2a2218] shadow-[2px_2px_0_#2a2218]">
        main.tex
      </span>
      <span className="ex-arrow text-[14px] leading-none text-[#2a2218]">→</span>
      <span className="flex flex-col gap-1.5">
        <span className="ex-c1 rounded-md border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2 py-1 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          PDF
        </span>
        <span className="ex-c2 rounded-md border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2 py-1 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          DOCX
        </span>
        <span className="ex-c3 rounded-md border-[2.5px] border-[#2a2218] bg-[#fff9ed] px-2 py-1 text-[#6b5f50] shadow-[2px_2px_0_#2a2218]">
          HTML
        </span>
      </span>
    </div>
  );
}

export type BentoCardCopy = { name: string; desc: string };

/** Order must match the visual layout below. Translated copy is passed from Astro via t(). */
export type BentoCards = {
  import: BentoCardCopy;
  export: BentoCardCopy;
  yours: BentoCardCopy;
  visual: BentoCardCopy;
  synctex: BentoCardCopy;
  codeIntel: BentoCardCopy;
  slash: BentoCardCopy;
  citations: BentoCardCopy;
  library: BentoCardCopy;
  palette: BentoCardCopy;
  byoai: BentoCardCopy;
  research: BentoCardCopy;
  spell: BentoCardCopy;
  memory: BentoCardCopy;
  pages: BentoCardCopy;
  pdfViewer: BentoCardCopy;
  diagram: BentoCardCopy;
  engines: BentoCardCopy;
};

const EN_FALLBACK: BentoCards = {
  import: {
    name: "Import what you have",
    desc: "Reconstruct many text-based PDFs into editable LaTeX locally, convert DOCX through a managed Pandoc, or let a vision model transcribe a photo of a page. Optional AI refinement after.",
  },
  export: {
    name: "Export where you're going",
    desc: "PDF always; DOCX, HTML, Markdown, and more through Pandoc-backed contextual export menus. Or grab the whole project as a source ZIP.",
  },
  yours: {
    name: "Make it yours",
    desc: "Vim mode, light and dark themes, accent colors, seven layout presets, and editable keyboard shortcuts. An editor should fit your hands.",
  },
  visual: {
    name: "Write in Code or Visual",
    desc: "Flip any LaTeX or Markdown document into a visual editor: headings, lists, bold, links, edited directly, with coordinated undo across both modes. Unsupported commands stay visible as raw blocks instead of being silently dropped, so the round-trip back to source is non-destructive.",
  },
  synctex: {
    name: "SyncTeX, word-level",
    desc: "⌘-click a word in the PDF and land on that exact word in the source. Jump back with ⌘⇧J.",
  },
  codeIntel: {
    name: "Code intelligence",
    desc: "Go to definition, find references, and rename a label, citation key, or macro across every file.",
  },
  slash: {
    name: "Slash commands",
    desc: "Type / for a Notion-style insert menu: /figure, /table, /section, /cite, /math.",
  },
  citations: {
    name: "Citations by DOI",
    desc: "Paste a DOI, arXiv id, or URL. Oleafly fetches the BibTeX, dedupes it, and inserts the \\cite.",
  },
  library: {
    name: "Bring your whole library",
    desc: "Batch-import BibTeX, RIS, EndNote XML, and Zotero RDF. Everything is deduped against your project before a single entry lands in the .bib.",
  },
  palette: {
    name: "Command palette",
    desc: "⌘K fuzzy-searches every action in the app: projects, files, settings, the lot.",
  },
  byoai: {
    name: "Bring your own AI",
    desc: "Nine providers or local Ollama, all behind the same per-change approval. MCP clients like Claude Code and Cursor connect the same way. Or turn AI off. The editor doesn't need it.",
  },
  research: {
    name: "Research on tap",
    desc: "The agent searches alphaXiv and OpenAlex, pulls paper content, and verifies citations against Crossref before they enter your bibliography.",
  },
  spell: {
    name: "Offline spell & grammar",
    desc: "Hunspell and Harper run as WASM on your machine, masking commands and math so only prose is checked.",
  },
  memory: {
    name: "An agent that remembers",
    desc: "Durable per-project memory notes and a visible plan checklist survive across chats, so the AI picks up where it left off.",
  },
  pages: {
    name: "From one page to six hundred",
    desc: "The editor and virtualized PDF viewer stay smooth whether it's a one-page resume or a book-length thesis.",
  },
  pdfViewer: {
    name: "A PDF viewer for real reading",
    desc: "Detach the preview to a second monitor, read two-page spreads, invert colors for late nights, or go fullscreen to present.",
  },
  diagram: {
    name: "Diagram Composer",
    desc: "Describe a diagram and the AI writes the TikZ, compiles the figure in isolation, and fixes overlaps by looking at the render. Or draw it yourself: shapes, edges, and an inspector on a real canvas that round-trips with the generated TikZ. Export transparent high-res PNGs, fully offline.",
  },
  engines: {
    name: "Three engines, one workspace",
    desc: "LaTeX, Typst, and Markdown projects side by side in the same library, with the same Git history, preview, search, and AI workflow.",
  },
};

export function BentoSection({ cards }: { cards?: BentoCards }) {
  const c = { ...EN_FALLBACK, ...cards };
  return (
    <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Card visual={<ImportVisual />} name={c.import.name} desc={c.import.desc} />
      <Card visual={<ExportVisual />} name={c.export.name} desc={c.export.desc} />
      <Card visual={<YoursVisual />} name={c.yours.name} desc={c.yours.desc} />
      <Card
        className="min-h-[300px] sm:min-h-[360px] md:col-span-2 md:row-span-2 md:min-h-[420px]"
        visual={<VisualEditorVisual />}
        name={c.visual.name}
        desc={c.visual.desc}
      />
      <Card visual={<SyncTexVisual />} name={c.synctex.name} desc={c.synctex.desc} />
      <Card visual={<CodeIntelVisual />} name={c.codeIntel.name} desc={c.codeIntel.desc} />
      <Card visual={<SlashVisual />} name={c.slash.name} desc={c.slash.desc} />
      <Card visual={<CitationsVisual />} name={c.citations.name} desc={c.citations.desc} />
      <Card visual={<LibraryImportVisual />} name={c.library.name} desc={c.library.desc} />
      <Card visual={<PaletteVisual />} name={c.palette.name} desc={c.palette.desc} />
      <Card visual={<ProviderStack />} name={c.byoai.name} desc={c.byoai.desc} />
      <Card visual={<ResearchVisual />} name={c.research.name} desc={c.research.desc} />
      <Card visual={<SpellVisual />} name={c.spell.name} desc={c.spell.desc} />
      <Card visual={<MemoryVisual />} name={c.memory.name} desc={c.memory.desc} />
      <Card visual={<PagesVisual />} name={c.pages.name} desc={c.pages.desc} />
      <Card
        className="min-h-[260px] sm:min-h-[300px]"
        visual={<DetachVisual />}
        name={c.pdfViewer.name}
        desc={c.pdfViewer.desc}
      />
      <Card
        className="min-h-[300px] sm:min-h-[360px] md:col-span-2 md:row-span-2 md:min-h-[420px]"
        visual={<DiagramVisual />}
        name={c.diagram.name}
        desc={c.diagram.desc}
      />
      <Card visual={<EnginesVisual />} name={c.engines.name} desc={c.engines.desc} />
    </div>
  );
}
