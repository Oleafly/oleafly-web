"use client";

// The Oleafly quill rendered as ASCII particles on canvas (Aceternity
// ascii-art style). Each character has a home cell; the pointer pushes
// nearby particles away and a spring pulls them back. Static single frame
// under prefers-reduced-motion.
import { useEffect, useRef } from "react";

const QUILL =
  "M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z";
const CHARS = "@%#*+=~·";
const GREENS = ["#34B44A", "#4ec46a", "#7ed492", "#2b8f3c", "#8fd6a0"];

export function AsciiQuill({ size = 380 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = size;
    const H = size;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Rasterize the quill path on a small grid; every filled cell becomes
    // one character particle.
    const G = Math.max(8, Math.round(size / 40));
    const cols = Math.floor(W / G);
    const rows = Math.floor(H / G);
    const off = document.createElement("canvas");
    off.width = cols;
    off.height = rows;
    const octx = off.getContext("2d");
    if (!octx) return;
    octx.scale(cols / 24, rows / 24);
    octx.fillStyle = "#fff";
    octx.fill(new Path2D(QUILL));
    const data = octx.getImageData(0, 0, cols, rows).data;

    type Particle = {
      hx: number;
      hy: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      ch: string;
      color: string;
      px: number;
    };
    const parts: Particle[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (data[(y * cols + x) * 4 + 3] > 100) {
          const px = x * G + G / 2;
          const py = y * G + G / 2;
          parts.push({
            hx: px,
            hy: py,
            x: px,
            y: py,
            vx: 0,
            vy: 0,
            ch: CHARS[Math.floor(Math.random() * CHARS.length)],
            color: GREENS[Math.floor(Math.random() * GREENS.length)],
            px: G * (0.85 + Math.random() * 0.4),
          });
        }
      }
    }

    let mx = -9999;
    let my = -9999;
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const R = size * 0.18;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const p of parts) {
        ctx.fillStyle = p.color;
        ctx.font = `${p.px}px ui-monospace, Menlo, monospace`;
        ctx.fillText(p.ch, p.x, p.y);
      }
    };

    let raf = 0;
    const tick = () => {
      for (const p of parts) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < R * R) {
          const d = Math.max(10, Math.sqrt(d2));
          const f = ((R - d) / R) * 5;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }
        p.vx += (p.hx - p.x) * 0.03;
        p.vy += (p.hy - p.y) * 0.03;
        p.vx *= 0.86;
        p.vy *= 0.86;
        p.x += p.vx;
        p.y += p.vy;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw();
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [size]);

  return <canvas ref={ref} aria-hidden="true" style={{ display: "block", maxWidth: "100%" }} />;
}
