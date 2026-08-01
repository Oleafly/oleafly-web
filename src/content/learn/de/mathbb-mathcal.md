---

title: "Tafel, Skript, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm und wann jedes Alphabet angezeigt wird."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Tafel, Skript, Fraktur

Die Mathematik verwendet mehr als ein Alphabet. Die reellen Zahlen erhalten ein tafelfettes R, ein Lagrange-Operator ein kalligraphisches L, eine Lie-Algebra ein Fraktur-g, und jedes davon ist ein eigener Befehl in LaTeX und keine Schriftart, die Sie einschalten. Bei konsequenter Verwendung sagen die Alphabete dem Leser, welche Art von Objekt ein Buchstabe benennt, bevor der umgebende Satz dies tut.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Die vier Alphabete

| Befehl | Schauen Sie | Typische Verwendung |
| --- | --- | --- |
| `\mathbb{R}` | Tafel | Zahlensätze |
| `\mathcal{L}` | Kalligrafisch | Lagrange-Funktionen, Verlust |
| `\mathfrak{g}` | Fraktur | Lügenalgebren |
| `\mathrm{d}` | Aufrecht | Differentiale, Operatornamen |

„\mathbb“ erzeugt Tafelfett, die doppelten Buchstaben, die fast ausschließlich für Zahlenmengen verwendet werden: „\mathbb{N}“, „\mathbb{Z}“, „\mathbb{Q}“, „\mathbb{R}“, „\mathbb{C}“. Es stammt aus dem Paket „amssymb“ und deckt nur Großbuchstaben ab. Die Schriftart hat kein Kleinbuchstabenalphabet, daher gibt ein Kleinbuchstabenargument falsche Glyphen oder nichts Sinnvolles aus.

„\mathcal“ gibt kalligraphische Großbuchstaben an, die übliche Wahl für Lagrange-Funktionen, Verlustfunktionen und Mengenfamilien. Es deckt auch nur Großbuchstaben ab und funktioniert im Kern-LaTeX ohne zusätzliches Paket.

„\mathfrak“, ebenfalls von „amssymb“, ist Fraktur, wobei beide Fälle verfügbar sind. Fraktur in Kleinbuchstaben bezeichnet Lie-Algebren, und die Großbuchstaben erscheinen in der Algebra und der Mengenlehre, unter anderem für Ideale und Kardinalzahlen.

„\mathrm“ ist kein dekoratives Alphabet, sondern ein Wechsel zum aufrechten Latein innerhalb der Mathematik. Es ist das richtige Werkzeug für alles, was eher eine Notation als eine Variable ist: das Differential in „\mathrm{d}x“, Einheiten oder textuelle Unterbezeichnungen wie „x_{\mathrm{max}}“. Für benannte Operatoren wie tr und rank gibt es einen besseren Mechanismus, der in [Operatoren, die Sie einmal erfinden](/learn/argmin-argmax/) behandelt wird.

## Praktische Hinweise

Wenn „\mathcal“ für Ihren Zweck zu einfach erscheint, fügt das Paket „mathrsfs“ „\mathscr“ hinzu, ein kunstvolleres Skript, das häufig für Garben und Sigma-Algebren verwendet wird. Die beiden können nebeneinander existieren und unterschiedliche Objekte in derselben Arbeit bezeichnen.

Der häufige Fehler besteht darin, diese Alphabete als Dekoration zu behandeln. Jedes hat in den meisten Bereichen eine konventionelle Bedeutung, und ein Leser, der „\mathbb{A}“ sieht, wird etwas Mengenartiges und Zahlenartiges erwarten. Überprüfen Sie die Konventionen Ihres Fachgebiets, bevor Sie Buchstaben zuweisen, und behalten Sie nach der Zuweisung ein Alphabet pro Objekt für das gesamte Dokument bei. Alle vier rendern in Sekundenschnelle nebeneinander im [Live-Spielplatz](/live/).