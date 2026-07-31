import readingTime from "reading-time";

/** Strip light markdown so reading-time counts words, not fences. */
export function stripMarkdownLight(source: string): string {
  return source
    .replace(/^---[\s\S]*?---\s*/m, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/^#+\s+/gm, "")
    .replace(/[*_~>|-]+/g, " ");
}

export function blogReadingTime(source: string): {
  text: string;
  minutes: number;
  words: number;
} {
  const stats = readingTime(stripMarkdownLight(source), { wordsPerMinute: 220 });
  const minutes = Math.max(1, Math.ceil(stats.minutes));
  return {
    text: `${minutes} min read`,
    minutes,
    words: stats.words,
  };
}
