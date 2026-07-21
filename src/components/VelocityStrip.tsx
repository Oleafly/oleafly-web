"use client";

// Single-island composition of Magic UI's scroll-based-velocity rows
// (container + rows share a context that can't cross Astro island boundaries).
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

const rowClass =
  "py-1 text-4xl font-semibold tracking-tight whitespace-nowrap md:text-6xl";

export function VelocityStrip() {
  return (
    <ScrollVelocityContainer className="w-full select-none">
      <ScrollVelocityRow baseVelocity={4} direction={1} className={rowClass}>
        <span className="text-white/[0.07]">
          Edit · Compile · Commit · Verify ·{" "}
        </span>
      </ScrollVelocityRow>
      <ScrollVelocityRow baseVelocity={4} direction={-1} className={rowClass}>
        <span className="font-mono text-white/[0.06]">
          main.tex · refs.bib · figures/ · .git/ ·{" "}
        </span>
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}
