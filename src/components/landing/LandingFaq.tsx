"use client";
// FAQ accordion in the bento/MagicCard family: same pointer-tracking border
// and typography as every other card grid on the landing page.
import { useState } from "react";

import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

const Q_TEXT = "text-[15px] font-semibold text-[#f7f8f8]";
const A_TEXT = "text-[13px] leading-relaxed text-[#8a8f98]";

export interface FaqItem {
  q: string;
  a: string;
}

export function LandingFaq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-7 flex flex-col gap-[10px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <MagicCard
            key={item.q}
            className="rounded-lg"
            gradientSize={240}
            gradientColor="#1c1e22"
            gradientOpacity={0.85}
            gradientFrom="#2563eb"
            gradientTo="#34b44a"
          >
            <div>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={Q_TEXT}>{item.q}</span>
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
                  <p className={cn(A_TEXT, "px-5 pb-4")}>{item.a}</p>
                </div>
              </div>
            </div>
          </MagicCard>
        );
      })}
    </div>
  );
}
