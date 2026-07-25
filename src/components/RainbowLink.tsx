// RainbowButton's asChild uses Radix Slot, which needs a real React element
// child — Astro-slotted children arrive as opaque nodes, so the anchor is
// composed here instead. Pure CSS animation: renders statically, no hydration.
// Optional platformAware adds OS glyph + label rewrite via PlatformDownloadInit.
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { APPLE_PATH, WINDOWS_PATH, LINUX_PATH } from "@/lib/os-icons";

export function RainbowLink({
  href,
  label,
  size = "lg",
  platformAware = false,
  labelTemplate,
}: {
  href: string;
  label: string;
  size?: "default" | "sm" | "lg";
  platformAware?: boolean;
  /** After detect, {os} becomes Mac / Windows / Linux */
  labelTemplate?: string;
}) {
  return (
    <RainbowButton asChild size={size}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={platformAware ? "dl-platform" : undefined}
        data-dl-label={platformAware ? labelTemplate || "Download for {os}" : undefined}
        style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
      >
        {platformAware ? (
          <svg
            className="dl-icon"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="currentColor"
          >
            <path data-os="mac" d={APPLE_PATH} />
            <path data-os="windows" d={WINDOWS_PATH} hidden />
            <path data-os="linux" d={LINUX_PATH} hidden />
          </svg>
        ) : null}
        <span className="dl-label">{label}</span>
      </a>
    </RainbowButton>
  );
}
