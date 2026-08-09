import { describe, expect, it } from "vitest";
import { isWebsiteTemplatePack } from "../fetch-remote-data.mjs";

describe("isWebsiteTemplatePack", () => {
  it("keeps curated packs", () => {
    expect(isWebsiteTemplatePack({ id: "academic-writing" })).toBe(true);
    expect(isWebsiteTemplatePack({ id: "cv-collection" })).toBe(true);
    expect(isWebsiteTemplatePack({ id: "venue-classes" })).toBe(true);
  });

  it("drops bulk open-* community packs that blow up static builds", () => {
    expect(isWebsiteTemplatePack({ id: "open-cv" })).toBe(false);
    expect(isWebsiteTemplatePack({ id: "open-misc" })).toBe(false);
    expect(isWebsiteTemplatePack({ id: "open-thesis" })).toBe(false);
  });

  it("rejects malformed pack entries", () => {
    expect(isWebsiteTemplatePack(null)).toBe(false);
    expect(isWebsiteTemplatePack({})).toBe(false);
    expect(isWebsiteTemplatePack({ id: 12 })).toBe(false);
  });
});
