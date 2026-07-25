"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Institution {
  id: string;
  display_name: string;
  country_code: string | null;
  type: string | null;
  works_count: number;
  cited_by_count: number;
  homepage_url: string | null;
  ror: string | null;
}

const COUNTRIES: [string, string][] = [
  ["", "All countries"],
  ["US", "United States"],
  ["GB", "United Kingdom"],
  ["DE", "Germany"],
  ["FR", "France"],
  ["CN", "China"],
  ["JP", "Japan"],
  ["IN", "India"],
  ["CA", "Canada"],
  ["AU", "Australia"],
  ["CH", "Switzerland"],
  ["NL", "Netherlands"],
  ["KR", "South Korea"],
  ["SG", "Singapore"],
  ["BR", "Brazil"],
];

const fmt = (n: number) => (n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${Math.round(n / 1000)}k` : String(n));

export default function LabSearch() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [results, setResults] = useState<Institution[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const search = useMemo(
    () => async (q: string, cc: string) => {
      if (!q.trim()) {
        setResults(null);
        return;
      }
      abortRef.current?.abort();
      const ac = new AbortController();
      abortRef.current = ac;
      setBusy(true);
      setError(null);
      try {
        const filter = cc ? `&filter=country_code:${cc}` : "";
        const url = `https://api.openalex.org/institutions?search=${encodeURIComponent(q.trim())}${filter}&per-page=24`;
        const res = await fetch(url, { signal: ac.signal });
        if (!res.ok) throw new Error(`OpenAlex returned HTTP ${res.status}`);
        const data = await res.json();
        setResults(
          (data.results ?? []).map((r: Record<string, unknown>) => ({
            id: String(r.id ?? ""),
            display_name: String(r.display_name ?? ""),
            country_code: (r.country_code as string) ?? null,
            type: (r.type as string) ?? null,
            works_count: Number(r.works_count ?? 0),
            cited_by_count: Number(r.cited_by_count ?? 0),
            homepage_url: (r.homepage_url as string) ?? null,
            ror: (r.ror as string) ?? null,
          })),
        );
      } catch (e) {
        if (!(e instanceof DOMException && e.name === "AbortError")) {
          setError(String(e instanceof Error ? e.message : e));
        }
      } finally {
        setBusy(false);
      }
    },
    [],
  );

  useEffect(() => {
    const t = setTimeout(() => void search(query, country), 350);
    return () => clearTimeout(t);
  }, [query, country, search]);

  return (
    <div>
      <div className="dl-filters">
        <input
          className="dl-search"
          style={{ maxWidth: 420, flex: 2 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. computational neuroscience, MIT, Max Planck"
          aria-label="Search research institutions"
        />
        <select
          className="dl-search"
          style={{ maxWidth: 200 }}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Country filter"
        >
          {COUNTRIES.map(([code, label]) => (
            <option key={code || "all"} value={code}>
              {label}
            </option>
          ))}
        </select>
        {busy && <span className="dl-count">Searching...</span>}
        {results && !busy && <span className="dl-count">{results.length} results</span>}
      </div>
      {error && <p className="tool-error">{error}</p>}
      {!results && !error && (
        <p className="tool-hint">
          Search millions of research institutions worldwide. Queries go directly from your
          browser to the open OpenAlex API; nothing passes through our servers.
        </p>
      )}
      <div className="dl-grid">
        {results?.map((r) => (
          <div key={r.id} className="dl-card">
            <div className="dl-card-title">
              <span>{r.display_name}</span>
              {r.country_code && <span className="dl-sub">{r.country_code}</span>}
            </div>
            <div className="dl-meta">
              {r.type ?? "institution"} · {fmt(r.works_count)} works · {fmt(r.cited_by_count)} citations
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {r.homepage_url && (
                <a className="dl-link" href={r.homepage_url} target="_blank" rel="noopener noreferrer">
                  website
                </a>
              )}
              {r.ror && (
                <a className="dl-link" href={r.ror} target="_blank" rel="noopener noreferrer">
                  ROR record
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
