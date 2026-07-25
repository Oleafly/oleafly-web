"use client";

import { useEffect, useMemo, useState } from "react";

type Align = "l" | "c" | "r";

export function buildTable(
  cells: string[][],
  aligns: Align[],
  opts: { booktabs: boolean; headerRow: boolean; caption: string },
): string {
  const colSpec = aligns.join("");
  const esc = (s: string) => s.replace(/([%$&#_{}])/g, "\\$1");
  const row = (r: string[]) => `    ${r.map(esc).join(" & ")} \\\\`;
  const lines: string[] = [];
  lines.push("\\begin{table}[htbp]");
  lines.push("  \\centering");
  if (opts.caption) lines.push(`  \\caption{${esc(opts.caption)}}`);
  lines.push(`  \\begin{tabular}{${colSpec}}`);
  if (opts.booktabs) {
    lines.push("    \\toprule");
    if (opts.headerRow && cells.length > 0) {
      lines.push(row(cells[0]));
      lines.push("    \\midrule");
      for (const r of cells.slice(1)) lines.push(row(r));
    } else {
      for (const r of cells) lines.push(row(r));
    }
    lines.push("    \\bottomrule");
  } else {
    lines.push("    \\hline");
    for (const [i, r] of cells.entries()) {
      lines.push(row(r));
      if (i === 0 && opts.headerRow) lines.push("    \\hline");
    }
    lines.push("    \\hline");
  }
  lines.push("  \\end{tabular}");
  lines.push("\\end{table}");
  return lines.join("\n");
}

function resize(cells: string[][], rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => cells[r]?.[c] ?? ""),
  );
}

export default function TableGenerator() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [cells, setCells] = useState<string[][]>(() =>
    resize(
      [
        ["Method", "Metric A", "Metric B"],
        ["Baseline", "0.71", "0.64"],
        ["Ours", "0.83", "0.79"],
      ],
      3,
      3,
    ),
  );
  const [aligns, setAligns] = useState<Align[]>(["l", "c", "c"]);
  const [booktabs, setBooktabs] = useState(true);
  const [headerRow, setHeaderRow] = useState(true);
  const [caption, setCaption] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCells((prev) => resize(prev, rows, cols));
    setAligns((prev) => Array.from({ length: cols }, (_, i) => prev[i] ?? "c"));
  }, [rows, cols]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const code = useMemo(
    () => buildTable(cells, aligns, { booktabs, headerRow, caption }),
    [cells, aligns, booktabs, headerRow, caption],
  );

  return (
    <div className="tool-split">
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>Table editor</span>
          <span className="tool-count">
            {rows} x {cols}
          </span>
        </div>
        <div className="table-controls">
          <label>
            Rows
            <input
              type="number"
              min={1}
              max={20}
              value={rows}
              onChange={(e) => setRows(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
            />
          </label>
          <label>
            Columns
            <input
              type="number"
              min={1}
              max={10}
              value={cols}
              onChange={(e) => setCols(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
            />
          </label>
          <label className="table-check">
            <input type="checkbox" checked={booktabs} onChange={(e) => setBooktabs(e.target.checked)} />
            booktabs rules
          </label>
          <label className="table-check">
            <input type="checkbox" checked={headerRow} onChange={(e) => setHeaderRow(e.target.checked)} />
            first row is header
          </label>
        </div>
        <div className="table-grid-scroll">
          <table className="table-grid">
            <thead>
              <tr>
                {aligns.map((a, c) => (
                  <th key={`align-${c}-${a}`}>
                    <select
                      value={a}
                      aria-label={`Column ${c + 1} alignment`}
                      onChange={(e) =>
                        setAligns((prev) => prev.map((x, i) => (i === c ? (e.target.value as Align) : x)))
                      }
                    >
                      <option value="l">left</option>
                      <option value="c">center</option>
                      <option value="r">right</option>
                    </select>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cells.map((r, ri) => (
                <tr key={`row-${ri}-${r.length}`}>
                  {r.map((v, ci) => (
                    <td key={`cell-${ri}-${ci}`}>
                      <input
                        value={v}
                        aria-label={`Row ${ri + 1} column ${ci + 1}`}
                        onChange={(e) =>
                          setCells((prev) =>
                            prev.map((row, i) =>
                              i === ri ? row.map((cell, j) => (j === ci ? e.target.value : cell)) : row,
                            ),
                          )
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tool-actions">
          <input
            className="table-caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption (optional)"
            aria-label="Table caption"
          />
        </div>
      </div>
      <div className="tool-pane">
        <div className="tool-pane-head">
          <span>LaTeX output</span>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              void navigator.clipboard.writeText(code);
              setCopied(true);
            }}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="tool-code">{code}</pre>
        {booktabs && (
          <p className="tool-hint" style={{ padding: "0 16px 16px" }}>
            Requires <code>\usepackage{"{booktabs}"}</code> in your preamble.
          </p>
        )}
      </div>
    </div>
  );
}
