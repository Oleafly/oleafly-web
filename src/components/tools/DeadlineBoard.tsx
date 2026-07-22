"use client";

import { useEffect, useMemo, useState } from "react";

export interface Venue {
  id: string;
  title: string;
  full_name: string;
  sub: string;
  rank: string;
  link: string;
  timezone: string;
  deadlines: { kind: string; at: string }[];
  conf_date: string;
  place: string;
}

function instant(at: string, timezone: string): Date {
  const m = at.trim().match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2}):(\d{2})$/);
  if (!m) return new Date(Number.NaN);
  const tz = timezone.trim();
  const offset = tz === "AoE" ? -12 : Number(tz.match(/^UTC([+-]\d+)$/)?.[1] ?? 0);
  return new Date(
    Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4]), Number(m[5]), Number(m[6])) -
      offset * 3_600_000,
  );
}

function nextDeadline(v: Venue, now: Date): { kind: string; when: Date } | null {
  let best: { kind: string; when: Date } | null = null;
  for (const d of v.deadlines) {
    const when = instant(d.at, v.timezone);
    if (Number.isNaN(when.getTime()) || when <= now) continue;
    if (!best || when < best.when) best = { kind: d.kind, when };
  }
  return best;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function DeadlineBoard({ venues }: { venues: Venue[] }) {
  const [now, setNow] = useState(() => new Date());
  const [sub, setSub] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  const subs = useMemo(
    () => [...new Set(venues.map((v) => v.sub).filter(Boolean))].sort(),
    [venues],
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return venues
      .filter((v) => {
        if (sub && v.sub !== sub) return false;
        if (q && !v.title.toLowerCase().includes(q) && !v.full_name.toLowerCase().includes(q)) return false;
        return nextDeadline(v, now) !== null;
      })
      .sort((a, b) => {
        const na = nextDeadline(a, now);
        const nb = nextDeadline(b, now);
        return (na?.when.getTime() ?? 0) - (nb?.when.getTime() ?? 0);
      });
  }, [venues, sub, query, now]);

  return (
    <div>
      <div className="dl-filters">
        <button type="button" className={`dl-chip${sub === null ? " active" : ""}`} onClick={() => setSub(null)}>
          All
        </button>
        {subs.map((s) => (
          <button
            key={s}
            type="button"
            className={`dl-chip${sub === s ? " active" : ""}`}
            onClick={() => setSub(sub === s ? null : s)}
          >
            {s}
          </button>
        ))}
        <input
          className="dl-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search conferences"
          aria-label="Search conferences"
        />
        <span className="dl-count">{shown.length} upcoming</span>
      </div>
      <div className="dl-grid">
        {shown.slice(0, 60).map((v) => {
          const next = nextDeadline(v, now);
          if (!next) return null;
          const ms = next.when.getTime() - now.getTime();
          const s = Math.floor(ms / 1000);
          return (
            <div key={v.id} className="dl-card">
              <div className="dl-card-title">
                <span>{v.title}</span>
                {v.rank && <span className="dl-rank">{v.rank}</span>}
                <span className="dl-sub">{v.sub}</span>
              </div>
              <div className="dl-full">{v.full_name}</div>
              <div className="dl-countdown">
                {pad(Math.floor(s / 86400))}d : {pad(Math.floor((s % 86400) / 3600))}h :{" "}
                {pad(Math.floor((s % 3600) / 60))}m : {pad(s % 60)}s
                <span className="dl-kind">{next.kind}</span>
              </div>
              <div className="dl-meta">
                {v.conf_date}
                {v.place ? ` · ${v.place}` : ""}
              </div>
              {v.link && (
                <a className="dl-link" href={v.link} target="_blank" rel="noopener noreferrer">
                  official call
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
