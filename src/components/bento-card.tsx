"use client";
// Shared bento-card scaffolding: one place for the MagicCard defaults and the
// bento typography, so every card grid on the landing page stays identical.
import type { ReactNode } from "react";

import { MagicCard } from "@/components/magicui/magic-card";
import { cn } from "@/lib/utils";

export const CARD_TEXT = "text-[15px] font-semibold text-[#f7f8f8]";
export const CARD_DESC = "text-[13px] leading-relaxed text-[#8a8f98]";

export function BentoCard({
  children,
  className,
  ...rest
}: Readonly<{ children?: ReactNode; className?: string; key?: string }>) {
  return (
    <MagicCard
      className={cn("rounded-lg", className)}
      gradientSize={240}
      gradientColor="#1c1e22"
      gradientOpacity={0.85}
      gradientFrom="#2563eb"
      gradientTo="#34b44a"
      {...rest}
    >
      {children}
    </MagicCard>
  );
}
