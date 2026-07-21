import type { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
  ...props
}: AnimatedShinyTextProps) {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "text-neutral-400/80",

        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%]",

        // Shine gradient
        "bg-gradient-to-r from-transparent via-white/80 via-50% to-transparent",

        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
