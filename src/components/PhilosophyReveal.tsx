"use client";

// TextReveal requires its children to be a literal string, but Astro passes
// slotted children as React nodes — so the copy lives here and the island is
// mounted with no children.
import { TextReveal } from "@/components/magicui/text-reveal";

const COPY =
  "Your resume shouldn't need a subscription. Your writing shouldn't stop when the Wi-Fi does. Your thesis shouldn't live only on someone else's servers. Your files belong to you.";

export function PhilosophyReveal() {
  return <TextReveal>{COPY}</TextReveal>;
}
