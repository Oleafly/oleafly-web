"use client";
// Same card construction as BentoSection: MagicCard chrome (pointer-tracking
// gradient border) + bento typography, for static landing sections. Cards with
// a visual key get a bento-style animated vignette in the top area with the
// text block bottom-anchored; text-only cards (roadmap) stay top-anchored.
import { BentoCard, CARD_TEXT, CARD_DESC } from "@/components/bento-card";
import { cn } from "@/lib/utils";

export type CardVisual = "latex" | "agent" | "refs" | "resume" | "git" | "pdf";

export interface LandingCard {
  readonly name: string;
  readonly desc: string;
  readonly badge?: string;
  readonly visual?: CardVisual;
}

const chip =
  "rounded-[4px] border px-1.5 py-[2px] font-mono text-[9.5px] leading-none";

function LatexVisual() {
  return (
    <div className="flex flex-col gap-[5px] font-mono text-[10px] text-[#7d828b]">
      <span>
        \begin{"{document}"}<span className="ml-[1px] inline-block h-[11px] w-[5px] animate-blink bg-[#60a5fa] align-[-1px]" />
      </span>
      <span className="text-[#a4a9b2]">Hello, world.</span>
      <span className="mt-[2px] w-fit rounded bg-[#34b44a]/15 px-1.5 py-[2px] text-[9.5px] text-[#4ec46a]">
        PDF compiled ✓
      </span>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className={cn(chip, "border-white/10 text-[#a4a9b2]")}>edit</span>
      <span className="text-[10px] text-[#7d828b]">→</span>
      <span className={cn(chip, "border-white/10 text-[#a4a9b2]")}>compile</span>
      <span className="text-[10px] text-[#7d828b]">→</span>
      <span className={cn(chip, "animate-pulse border-[#4ec46a]/40 bg-[#34b44a]/15 text-[#4ec46a]")}>
        verify ✓
      </span>
    </div>
  );
}

function RefsVisual() {
  return (
    <div className="flex flex-col gap-[5px]">
      <span className={cn(chip, "w-fit border-[#60a5fa]/40 text-[#60a5fa]")}>
        doi:10.1145/3576915
      </span>
      <span className="font-mono text-[10px] text-[#4ec46a]">
        @article{"{gatto24}"} ✓
      </span>
    </div>
  );
}

function ResumeVisual() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-[34px] w-[26px] flex-col gap-[3px] rounded-[3px] border border-white/15 bg-white/[0.04] p-[5px]">
        <span className="h-[2px] w-full rounded bg-white/30" />
        <span className="h-[2px] w-3/4 rounded bg-white/20" />
        <span className="h-[2px] w-full rounded bg-white/15" />
        <span className="h-[2px] w-2/3 rounded bg-white/10" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className={cn(chip, "w-fit border-[#4ec46a]/40 bg-[#34b44a]/15 text-[#4ec46a]")}>
          1 page ✓
        </span>
        <span className="font-mono text-[9.5px] text-[#7d828b]">fork ×3 · per application</span>
      </div>
    </div>
  );
}

function GitVisual() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <span className="size-[7px] rounded-full bg-[#60a5fa]" />
        <span className="h-[2px] w-4 bg-white/15" />
        <span className="size-[7px] rounded-full bg-[#60a5fa]/70" />
        <span className="h-[2px] w-4 bg-white/15" />
        <span className="size-[7px] animate-pulse rounded-full bg-[#4ec46a]" />
      </div>
      <span className={cn(chip, "border-white/10 text-[#a4a9b2]")}>
        <span className="text-[#4ec46a]">+42</span> <span className="text-[#e78ba0]">−7</span>
      </span>
    </div>
  );
}

function PdfVisual() {
  return (
    <div className="flex flex-wrap gap-1.5">
      {["PDF", "DOCX", "HTML", "ZIP"].map((f, i) => (
        <span
          key={f}
          className={cn(
            chip,
            i === 0 ? "border-[#f7bc55]/40 text-[#f7bc55]" : "border-white/10 text-[#a4a9b2]",
          )}
        >
          {f}
        </span>
      ))}
    </div>
  );
}

const VISUALS: Record<CardVisual, () => React.ReactElement> = {
  latex: LatexVisual,
  agent: AgentVisual,
  refs: RefsVisual,
  resume: ResumeVisual,
  git: GitVisual,
  pdf: PdfVisual,
};

export function LandingCards({
  cards,
  columns = 3,
}: {
  cards: LandingCard[];
  columns?: 3 | 4;
}) {
  const colClass = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className={`mt-7 grid grid-cols-1 gap-[18px] sm:grid-cols-2 ${colClass}`}>
      {cards.map((card) => {
        const Visual = card.visual ? VISUALS[card.visual] : null;
        return (
          <BentoCard key={card.name}>
            <div
              className={cn(
                "relative flex h-full flex-col overflow-hidden p-5",
                Visual ? "min-h-[190px]" : "min-h-[150px] justify-start",
              )}
            >
              {Visual ? (
                <div className="flex flex-1 items-center justify-center py-1 opacity-90">
                  <Visual />
                </div>
              ) : null}
              <div className="relative z-10 flex flex-col gap-1.5">
                {card.badge ? (
                  <span className="w-fit rounded-full border border-[#60a5fa]/40 bg-[#60a5fa]/10 px-2 py-[2px] font-mono text-[9px] font-medium tracking-[0.05em] text-[#60a5fa]">
                    {card.badge}
                  </span>
                ) : null}
                <h3 className={CARD_TEXT}>{card.name}</h3>
                <p className={CARD_DESC}>{card.desc}</p>
              </div>
            </div>
          </BentoCard>
        );
      })}
    </div>
  );
}
