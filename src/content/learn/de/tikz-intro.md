---

title: "Dein erstes TikZ-Bild"
description: "Knoten, Kanten, eine Drei-Box-Pipeline, die Vektor bleibt."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Dein erstes TikZ-Bild

TikZ ist eine Zeichensprache, die in Ihrem LaTeX-Dokument lebt. Anstatt ein Diagramm zu importieren, das aus einem anderen Tool exportiert wurde, beschreiben Sie es im Text und der Compiler zeichnet es. Der Vorteil besteht darin, dass es sich bei der Ausgabe um Vektorgrafiken mit den eigenen Schriftarten Ihres Dokuments handelt, sodass Beschriftungen genau mit dem umgebenden Text übereinstimmen und bei jedem Zoom scharf bleiben. Der Preis besteht darin, dass Sie Koordinaten und Optionen schreiben, anstatt Kästchen zu ziehen. Bei Diagrammen, die aus Kästchen und Pfeilen bestehen, lohnt sich der Kompromiss normalerweise. Hier ist eine Drei-Box-Pipeline, das kanonische erste Bild:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Knoten

Ein Knoten ist ein an einer Position platzierter Inhalt, normalerweise Text, optional mit einer darum gezeichneten Form. In „\node[draw, abgerundete Ecken] (a) {Input};“ sagen die Optionen in eckigen Klammern aus, dass der Rand des Knotens gezeichnet und seine Ecken abgerundet werden sollen, „(a)“ gibt dem Knoten einen Namen, auf den Sie später verweisen können, und „{Input}“ ist der darin enthaltene Text. Der zweite Knoten verwendet „right=of a“ aus der „positioning“-Bibliothek, wodurch er rechts vom Knoten „a“ in dem durch „node distance=1.5cm“ in den Umgebungsoptionen festgelegten Abstand platziert wird. Platzieren Sie Knoten relativ zueinander und nicht an absoluten Koordinaten. Das gesamte Diagramm wird dann angepasst, wenn eine Beschriftung länger wird.

## Kanten

Eine Kante ist eine Linie, die zwei Punkte verbindet. Da die Knoten benannt sind, verbinden Sie sie mit Namen: „\draw (a) -- (b);“ zeichnet eine gerade Linie vom Knoten „a“ zum Knoten „b“. TikZ beginnt und endet die Linie an den Knotengrenzen und nicht an deren Mittelpunkten. Die Option „[-Latex]“ legt den Pfeilspitzenstil aus der „arrows.meta“-Bibliothek fest und verleiht der Linie am Ziel eine feste Pfeilspitze. Der Tipp gilt einmal pro Pfad, am Ende, weshalb im Beispiel zwei „\draw“-Befehle verwendet werden. Ein einzelner Pfad „(a) – (b) – (c)“ würde eine Pfeilspitze nur bei „c“ platzieren.

## Wohin als nächstes?

Wickeln Sie das „tikzpicture“ in eine „figure“-Umgebung ein, wenn es eine Beschriftung und eine Nummer benötigt, genau wie ein Bild. TikZ-Code wird in diesen In-Page-Vorschauen nicht gerendert. Kompilieren Sie daher das Snippet in einem Projekt, um das Ergebnis zu sehen. In Oleafly kann der Diagram Composer auch bearbeitbare TikZ als Ausgangspunkt erstellen. Der häufigste Anfängerfehler besteht darin, das Semikolon zu vergessen, das jeden TikZ-Befehl beendet, was zu einem langen, verwirrenden Fehler führt. Wenn ein Diagramm über drei Felder hinauswächst, fahren Sie mit [Knoten und Pfeile](/learn/tikz-nodes-arrows/) und [ausgerichtete Flussdiagrammfelder](/learn/tikz-flowchart/) fort.