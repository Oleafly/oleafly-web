"use client";
// FAQ accordion in the bento/MagicCard family: same pointer-tracking border
// and typography as every other card grid on the landing page.
import { useState } from "react";

import { BentoCard, CARD_TEXT, CARD_DESC } from "@/components/bento-card";
import { cn } from "@/lib/utils";

export interface FaqItem {
  readonly q: string;
  readonly a: string;
}

export function LandingFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-7 flex flex-col gap-[10px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <BentoCard key={item.q}>
            <div>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={CARD_TEXT}>{item.q}</span>
                <span
                  className={cn(
                    "shrink-0 text-lg font-normal text-[#8a8f98] transition-transform duration-300",
                    isOpen && "rotate-45 text-[#60a5fa]",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className={cn(CARD_DESC, "px-5 pb-4")}>{item.a}</p>
                </div>
              </div>
            </div>
          </BentoCard>
        );
      })}
    </div>
  );
}
