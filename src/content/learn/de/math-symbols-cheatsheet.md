---

title: "Symbol-Schreibtischkarte"
description: "Akzente, große Operatoren, Zahlenmengen und dehnbare Trennzeichen auf einer Seite."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Symboltischkarte

Diese Seite ist eher eine Referenzkarte als eine Lektion. Akzente, große Operatoren, Zahlenmengen und Trennzeichen, die den Großteil der alltäglichen Mathematik abdecken, alles an einem Ort. Jeder Befehl hier funktioniert nur im Mathematikmodus und die Zahlensätze benötigen „\usepackage{amssymb}“ in der Präambel. Informationen zum griechischen Alphabet und den grundlegenden Beziehungen finden Sie unter [Griechische und alltägliche Symbole](/learn/greek-letters/). Um zu erfahren, wie der Mathematikmodus selbst funktioniert, beginnen Sie mit [Grundlagen des Mathematikmodus](/learn/math-mode/).

## Akzente

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Befehl | Wird als | gerendert Konventionelle Bedeutung |
| --- | --- | --- |
| `\hat{x}` | x mit Zirkumflex | Schätzer, Einheitsvektoren, Operatoren |
| `\bar{x}` | x mit Balken | Beispielmittel, komplexe Konjugate |
| `\tilde{x}` | x mit Tilde | Näherungen, transformierte Variablen |
| `\vec{x}` | x mit Pfeil | Vektoren |
| `\dot{x}`, `\ddot{x}` | ein oder zwei Punkte | Erste und zweite Zeitableitungen |
| `\widehat{xyz}`, `\overline{xyz}` | gestreckter Akzent | Akzente über Ausdrücken mit mehreren Buchstaben |

Die schlichten Akzente passen zu einem einzelnen Buchstaben; Die „Wide“- und „Over“-Varianten dehnen sich, um alles zu überspannen, was in den geschweiften Klammern steht.

## Große Betreiber

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Befehl | Bedeutung |
| --- | --- |
| `\sum_{i=1}^n` | Summe mit Unter- und Obergrenze |
| `\prod_{i=1}^n` | Produkt |
| `\int_a^b` | Bestimmtes Integral |
| `\oint` | Konturintegral |
| `\lim_{x \to 0}` | Grenze |
| `\max_{x}`, `\inf_{x}` | Maximum, Infimum über einer Variablen |

Grenzen werden mit der gewöhnlichen tiefgestellten und hochgestellten Syntax angehängt, mit Klammern, wenn sie länger als ein Zeichen sind. In der Anzeigemathematik platzieren Summen, Produkte und Grenzwerte ihre Grenzen oberhalb und unterhalb des Symbols. Integrale behalten ihre Seite. Das ist die Standardkonvention.

## Zahlensätze

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Dies sind die natürlichen, ganzen, rationalen, reellen und komplexen Zahlen in Fettschrift. Das „\mathbb“-Alphabet und seine Verwandten werden in [Tafel, Skript, Fraktur](/learn/mathbb-mathcal/) behandelt.

## Trennzeichen

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

„\left“ und „\right“ vergrößern ihr Trennzeichen auf die Höhe des eingeschlossenen Materials, sodass Klammern um einen hohen Bruch ihn umschließen, anstatt ihn auf Texthöhe abzuschneiden. Sie müssen paarweise kommen. Um nur eine Seite anzuzeigen, schließen Sie mit „\right“. Der unsichtbare Partner erfüllt die Paarung. Klammern sind Sonderzeichen, daher werden gesetzte Klammern mit „\{“ und „\}“ geschrieben. Spitze Klammern für innere Produkte sind „\langle“ und „\rangle“, niemals die Kleiner-als- und Größer-als-Zeichen der Tastatur, bei denen es sich um Beziehungssymbole mit falscher Form und falschem Abstand handelt.

Jede Zeile dieser Karte kann in den [Live-Spielplatz](/live/) eingefügt werden, um das gerenderte Formular neben der Quelle anzuzeigen.