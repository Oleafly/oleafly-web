---

title: "pt, em, Textbreite"
description: "Absolute und schriftartrelative Einheiten, die Sie tatsächlich festlegen."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, Textbreite

Fast jeder Layoutbefehl in LaTeX benötigt eine Länge: vertikaler Abstand, Bildbreiten, Ränder, Linienstärken. Eine Länge ist eine Zahl plus einer Einheit, und die Wahl der Einheit entscheidet darüber, ob sich das Layout anpasst, wenn sich die Schriftgröße oder die Seitengeometrie ändert, oder an dem Tag, an dem dies der Fall ist, umbricht.

| Einheit | Bedeutung |
| --- | --- |
| `pt` | Punkt (Basis) |
| `em` | Schriftrelative Breite |
| `ex` | Schriftrelative Höhe |
| „cm“ / „mm“ / „in“ | Absolut |
| `\textwidth` | Breite des Textblocks |
| `\linewidth` | Breite der aktuellen Spalte/Miniseite |

## Absolute und relative Einheiten

„pt“ ist der Punkt des Druckers, die Basiseinheit von TeX. Schriftgrößen und viele interne Standardeinstellungen werden in Punkten angegeben, und ein Zoll entspricht nach TeXs Berechnung 72,27 pt. „cm“, „mm“ und „in“ sind die bekannten absoluten Einheiten, die geeignet sind, wenn eine Anforderung wirklich physischer Natur ist, beispielsweise ein vorgeschriebener Rand von einem Zoll.

„em“ und „ex“ skalieren mit der aktuellen Schriftart: Ein em entspricht ungefähr der Schriftgröße, ausgedrückt als Breite, und ein ex entspricht etwa der Höhe eines Kleinbuchstabens x. Ihr Vorteil ist die Verhältnismäßigkeit. Ein „\vspace{1em}“ bleibt optisch konsistent, wenn das Dokument vom Typ 10pt auf 12pt wechselt, wobei ein fest codiertes „\vspace{12pt}“ zu eng oder zu locker wird.

## Längen, die Ihnen das Dokument gibt

„\textwidth“ ist die Breite des Textblocks der Seite. „\linewidth“ ist die Breite des aktuellen Containers, die in normalem Text „\textwidth“ entspricht, innerhalb einer Miniseite, einer Liste oder einer Spalte jedoch kleiner wird. Eine Dezimalzahl vorne skaliert eine davon, und das ist die Standardmethode zur Größenbestimmung von Zahlen:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

Die erste Zeile fügt einen vertikalen Leerraum ein. Mit der zweiten Option wird das Bild auf die halbe Breite des Textblocks eingestellt. Wenn sich also die Ränder jemals ändern, wird die Abbildung mit ihnen neu skaliert und läuft nie in den Rand über. Innerhalb einer Miniseite oder einem zweispaltigen Layout bevorzugen Sie „0,5\linewidth“, da „\textwidth“ dort breiter ist als der Platz, den Sie tatsächlich haben.

Auch Längen sind einstellbar. „\setlength{\parindent}{0pt}“ entfernt den Absatzeinzug und der gleiche Befehl passt die meisten benannten Layoutlängen an.

Der häufigste Fehler besteht darin, Zahlen in Zentimetern anzugeben. Dies funktioniert so lange, bis sich die Dokumentklasse, das Papierformat oder die Ränder ändern und dann jede Figur manuell neu abgestimmt werden muss. Breiten, die als Bruchteile von „\textwidth“ oder „\linewidth“ ausgedrückt werden, bleiben von all diesen Änderungen unberührt, weshalb sie in Vorlagen fast ausschließlich verwendet werden.