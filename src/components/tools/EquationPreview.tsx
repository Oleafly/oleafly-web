"use client";

import { useEffect, useMemo, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const SAMPLE = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";

export default function EquationPreview() {
  const [input, setInput] = useState(SAMPLE);
  const [display, setDisplay] = useState(true);
  const [copied, setCopied] = useState(false);

  const rendered = useMemo(() => {
    if (!input.trim()) return { html: "", error: null as string | null };
    try {
      return {
        html: katex.renderToString(input, { displayMode: display, throwOnError: true }),
        error: null,
      };
    } catch (e) {
      return { html: "", error: String(e instanceof Error ? e.message : e) };
    }
  }, [input, display]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const wrapped = display ? `\\[ ${input} \\]` : `$${input}$`;

  return (
    <div className="tool-split">
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>LaTeX math</span>
          <span className="tool-count">{display ? "display mode" : "inline mode"}</span>
        </div>
        <textarea
          className="tool-textarea"
          style={{ minHeight: 180 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          aria-label="LaTeX math input"
        />
        <div className="tool-actions">
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setDisplay((d) => !d)}>
            {display ? "Switch to inline" : "Switch to display"}
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              void navigator.clipboard.writeText(wrapped);
              setCopied(true);
            }}
          >
            {copied ? "Copied" : "Copy LaTeX"}
          </button>
        </div>
      </div>
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>Preview</span>
        </div>
        <div className="tool-results equation-stage">
          {rendered.error ? (
            <p className="tool-error">{rendered.error}</p>
          ) : rendered.html ? (
            // biome-ignore lint: KaTeX output is trusted local rendering
            <div dangerouslySetInnerHTML={{ __html: rendered.html }} />
          ) : (
            <p className="tool-hint">Type LaTeX math on the left.</p>
          )}
        </div>
      </div>
    </div>
  );
}
