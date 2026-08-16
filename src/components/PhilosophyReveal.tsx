"use client";

// TextReveal requires its children to be a literal string, but Astro passes
// slotted children as React nodes — so the copy lives here and the island is
// mounted with no children.
import { TextReveal } from "@/components/magicui/text-reveal";

const COPY =
  "Your thesis shouldn't need five subscriptions. Your AI shouldn't guess at edits it never checked. Your references shouldn't take an afternoon. Your first PDF shouldn't wait in a build queue. Your tools shouldn't cost more than your research. One free app. All of it.";

export function PhilosophyReveal() {
  return <TextReveal>{COPY}</TextReveal>;
}
