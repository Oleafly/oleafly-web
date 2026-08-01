---

title: "Kommutative Diagramme"
description: "Tikz-CD-Pfeile und Beschriftungen ohne Koordinatensuppe."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Kommutative Diagramme

Ein kommutatives Diagramm ist ein Gitter aus Objekten, die durch beschriftete Pfeile verbunden sind, das Standardbild in der Kategorientheorie, Algebra und Topologie. Raw TikZ kann einen zeichnen, aber das Platzieren jedes Knotens nach Koordinaten ist langsam und spröde. Das Paket „tikz-cd“ verpackt TikZ in eine Matrix-ähnliche Syntax: Sie legen die Objekte wie eine Tabelle an und beschreiben jeden Pfeil durch seine Richtung.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Lesen der Syntax

Das Raster funktioniert wie eine Matrix: „&“ trennt Spalten und „\\“ trennt Zeilen, daher hat dieses Diagramm A und B in der oberen Zeile und C und D in der unteren Zeile. Jedes „\arrow[...]“ gehört zu der Zelle, in die es geschrieben wird, und zeigt von dieser weg. Die erste Option ist die Richtung, geschrieben mit den Buchstaben „r“, „l“, „u“ und „d“: „\arrow[r]“ geht eine Zelle nach rechts, „\arrow[d]“ eine Zelle nach unten. Die Buchstaben werden kombiniert und wiederholen sich für Diagonalen und längere Strecken, sodass „rd“ eine Stufe nach rechts unten steht und „rr“ sich über zwei Spalten erstreckt.

Eine Beschriftung in Anführungszeichen reitet auf dem Pfeil. Standardmäßig sitzt es auf einer Seite; eine Primzahl nach dem abschließenden Anführungszeichen, wie in „g“, dreht es auf die andere Seite. Im Beispiel behalten die Primzahlen alle vier Beschriftungen auf der Außenseite des Quadrats, was der üblichen sauberen Anordnung entspricht.

## Weitere Pfeiloptionen

Nach der Richtung und Beschriftung werden weitere Optionen gestapelt, um den Stil des Pfeils zu ändern. „Haken“ biegt den Schwanz in einen Inklusionspfeil, „zwei Köpfe“ verdoppelt den Kopf für eine Surjektion, „gestrichelt“ markiert eine Karte, die Sie behaupten statt anzunehmen, und „Rechtspfeil“ erzeugt den Doppelpfeil, der für natürliche Transformationen verwendet wird. Ein typischer universeller Eigenschaftspfeil lautet „\arrow[rd, dashed, „\exists u“‘]“. Wenn sich ein Diagramm beengt anfühlt, helfen Abstandsoptionen in der Umgebung, zum Beispiel „\begin{tikzcd}[column sep=large]“.

## Praktische Hinweise

„tikz-cd“ lädt TikZ selbst, sodass keine separate „\usepackage{tikz}“-Zeile erforderlich ist und Diagramme mit einer Standard-Engine und ohne externes Zeichentool kompiliert werden. Der häufigste Strukturfehler ist ein ungleichmäßiges Raster: Zeilen mit unterschiedlich vielen „&“-Trennzeichen verschieben Objekte in die falschen Spalten und Pfeile landen dann an ungeraden Stellen. Beginnen Sie mit einem Arbeitsquadrat wie dem oben abgebildeten, vergrößern Sie es Zeile für Zeile oder Spalte und kompilieren Sie es im Laufe der Zeit neu. Diagramme lassen sich viel einfacher mit dem Auge debuggen als anhand der Quelle, und der [Live-Spielplatz](/live/) gibt Ihnen dieses Feedback während der Eingabe.