"use client";

import { useMemo, useState } from "react";

// Required/optional fields per entry type (the classic BibTeX contract).
const SPEC: Record<string, { required: string[][]; optional: string[] }> = {
  article: {
    required: [["author"], ["title"], ["journal"], ["year"]],
    optional: ["volume", "number", "pages", "month", "doi", "url"],
  },
  book: {
    required: [["title"], ["publisher"], ["year"], ["author", "editor"]],
    optional: ["volume", "series", "edition", "address", "isbn", "doi"],
  },
  inproceedings: {
    required: [["author"], ["title"], ["booktitle"], ["year"]],
    optional: ["pages", "address", "publisher", "doi"],
  },
  conference: {
    required: [["author"], ["title"], ["booktitle"], ["year"]],
    optional: ["pages", "address", "publisher"],
  },
  phdthesis: {
    required: [["author"], ["title"], ["school"], ["year"]],
    optional: ["address", "month", "type", "doi"],
  },
  mastersthesis: {
    required: [["author"], ["title"], ["school"], ["year"]],
    optional: ["address", "month", "type"],
  },
  techreport: {
    required: [["author"], ["title"], ["institution"], ["year"]],
    optional: ["type", "number", "address", "month"],
  },
  misc: {
    required: [],
    optional: ["author", "title", "year", "url", "note", "howpublished"],
  },
  unpublished: {
    required: [["author"], ["title"], ["note"]],
    optional: ["year", "month"],
  },
  proceedings: {
    required: [["title"], ["year"]],
    optional: ["editor", "publisher", "address", "volume"],
  },
  manual: {
    required: [["title"]],
    optional: ["author", "organization", "year", "edition"],
  },
  incollection: {
    required: [["author"], ["title"], ["booktitle"], ["publisher"], ["year"]],
    optional: ["editor", "chapter", "pages", "address"],
  },
};

export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
}

export interface Finding {
  key: string;
  type: string;
  level: "error" | "warning" | "ok";
  messages: string[];
}

/** Tolerant BibTeX parser: balanced-brace field values, quoted values, bare numbers. */
export function parseBib(src: string): { entries: BibEntry[]; parseErrors: string[] } {
  const entries: BibEntry[] = [];
  const parseErrors: string[] = [];
  let i = 0;
  while (i < src.length) {
    const at = src.indexOf("@", i);
    if (at < 0) break;
    const typeMatch = src.slice(at + 1).match(/^([a-zA-Z]+)\s*\{/);
    if (!typeMatch) {
      i = at + 1;
      continue;
    }
    const type = typeMatch[1].toLowerCase();
    let p = at + 1 + typeMatch[0].length;
    if (type === "comment" || type === "preamble" || type === "string") {
      i = p;
      continue;
    }
    const keyEnd = src.slice(p).search(/[,}]/);
    if (keyEnd < 0) {
      parseErrors.push(`Unterminated entry near character ${at}`);
      break;
    }
    const key = src.slice(p, p + keyEnd).trim();
    p += keyEnd;
    const fields: Record<string, string> = {};
    let depth = 1;
    while (p < src.length && depth > 0) {
      // skip separators
      while (p < src.length && /[\s,]/.test(src[p])) p++;
      if (src[p] === "}") {
        depth--;
        p++;
        break;
      }
      const nameMatch = src.slice(p).match(/^([a-zA-Z][a-zA-Z0-9_-]*)\s*=\s*/);
      if (!nameMatch) {
        const close = src.indexOf("}", p);
        parseErrors.push(`Could not read fields of "${key || type}"`);
        p = close < 0 ? src.length : close + 1;
        depth = 0;
        break;
      }
      const name = nameMatch[1].toLowerCase();
      p += nameMatch[0].length;
      let value = "";
      if (src[p] === "{") {
        let braces = 1;
        p++;
        const start = p;
        while (p < src.length && braces > 0) {
          if (src[p] === "{") braces++;
          else if (src[p] === "}") braces--;
          if (braces > 0) p++;
        }
        value = src.slice(start, p);
        p++;
      } else if (src[p] === '"') {
        p++;
        const start = p;
        while (p < src.length && src[p] !== '"') p++;
        value = src.slice(start, p);
        p++;
      } else {
        const start = p;
        while (p < src.length && !/[\s,}]/.test(src[p])) p++;
        value = src.slice(start, p);
      }
      fields[name] = value.replace(/\s+/g, " ").trim();
    }
    if (key) entries.push({ type, key, fields });
    else parseErrors.push(`Entry of type @${type} is missing a citation key`);
    i = p;
  }
  return { entries, parseErrors };
}

export function validate(entries: BibEntry[]): Finding[] {
  const findings: Finding[] = [];
  const seenKeys = new Map<string, number>();
  const doiToKeys = new Map<string, string[]>();
  for (const e of entries) {
    seenKeys.set(e.key, (seenKeys.get(e.key) ?? 0) + 1);
    const doi = e.fields.doi?.toLowerCase();
    if (doi) doiToKeys.set(doi, [...(doiToKeys.get(doi) ?? []), e.key]);
  }
  for (const e of entries) {
    const messages: string[] = [];
    let level: Finding["level"] = "ok";
    const spec = SPEC[e.type];
    if (!spec) {
      messages.push(`Unknown entry type @${e.type}`);
      level = "warning";
    } else {
      for (const group of spec.required) {
        if (!group.some((f) => e.fields[f]?.length)) {
          messages.push(`Missing required field: ${group.join(" or ")}`);
          level = "error";
        }
      }
      const known = new Set([...spec.required.flat(), ...spec.optional]);
      for (const f of Object.keys(e.fields)) {
        if (!known.has(f) && !["keywords", "abstract", "note", "url", "doi"].includes(f)) {
          messages.push(`Unusual field for @${e.type}: ${f}`);
          if (level === "ok") level = "warning";
        }
      }
    }
    if ((seenKeys.get(e.key) ?? 0) > 1) {
      messages.push("Duplicate citation key");
      level = "error";
    }
    const doi = e.fields.doi?.toLowerCase();
    if (doi && (doiToKeys.get(doi)?.length ?? 0) > 1) {
      messages.push(`Duplicate DOI shared with: ${doiToKeys.get(doi)?.filter((k) => k !== e.key).join(", ")}`);
      if (level === "ok") level = "warning";
    }
    const year = e.fields.year;
    if (year && !/^\d{4}$/.test(year)) {
      messages.push(`Year "${year}" is not a four digit number`);
      if (level === "ok") level = "warning";
    }
    findings.push({ key: e.key, type: e.type, level, messages });
  }
  return findings;
}

const SAMPLE = `@article{einstein1905,
  author  = {Einstein, Albert},
  title   = {On the Electrodynamics of Moving Bodies},
  journal = {Annalen der Physik},
  year    = {1905}
}`;

const COLORS = { error: "#eb5757", warning: "#d6a243", ok: "#34b44a" } as const;

export default function BibtexValidator() {
  const [input, setInput] = useState("");
  const result = useMemo(() => {
    if (!input.trim()) return null;
    const { entries, parseErrors } = parseBib(input);
    return { entries, parseErrors, findings: validate(entries) };
  }, [input]);

  return (
    <div className="tool-split">
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>BibTeX input</span>
          <span className="tool-count">{result ? `${result.entries.length} entries` : "0 entries"}</span>
        </div>
        <textarea
          className="tool-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`${SAMPLE}\n\nPaste your full .bib file here...`}
          spellCheck={false}
          aria-label="BibTeX input"
        />
        <div className="tool-actions">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setInput(SAMPLE)}>
            Sample
          </button>
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setInput("")}>
            Clear
          </button>
        </div>
      </div>
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>Validation results</span>
        </div>
        <div className="tool-results">
          {!result && <p className="tool-hint">Paste your .bib file to validate it instantly.</p>}
          {result?.parseErrors.map((e) => (
            <div key={e} className="tool-finding" style={{ borderLeftColor: COLORS.error }}>
              <strong>Parse problem</strong>
              <p>{e}</p>
            </div>
          ))}
          {result?.findings.map((f) => (
            <div key={f.key + f.type} className="tool-finding" style={{ borderLeftColor: COLORS[f.level] }}>
              <strong>
                @{f.type}
                {"{"}
                {f.key}
                {"}"}
              </strong>
              {f.messages.length === 0 ? (
                <p style={{ color: COLORS.ok }}>Looks good</p>
              ) : (
                f.messages.map((m) => <p key={m}>{m}</p>)
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
