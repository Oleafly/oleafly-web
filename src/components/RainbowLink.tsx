// RainbowButton's asChild uses Radix Slot, which needs a real React element
// child — Astro-slotted children arrive as opaque nodes, so the anchor is
// composed here instead. Pure CSS animation: renders statically, no hydration.
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function RainbowLink({
  href,
  label,
  size = "lg",
}: {
  href: string;
  label: string;
  size?: "default" | "sm" | "lg";
}) {
  return (
    <RainbowButton asChild size={size}>
      <a href={href} rel="noopener" style={{ textDecoration: "none" }}>
        {label}
      </a>
    </RainbowButton>
  );
}
