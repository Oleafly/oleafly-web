---

title: "Ausgerichtete Flussdiagrammkästen"
description: "Positionieren Sie die Bibliothek so, dass die Spalten eine gemeinsame Kante haben."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Ausgerichtete Flussdiagrammfelder

Ein Flussdiagramm sieht aus genau einem Grund amateurhaft aus: Kästchen, die fast aneinandergereiht sind. TikZ vermeidet das Problem strukturell, da jede Box relativ zu einer anderen platziert ist, sodass eine Spalte von Boxen durch Konstruktion und nicht durch bloßes Hinsehen eine gemeinsame Achse hat. Die zweite Zutat ist ein benannter Stil, daher sind sich alle Boxen hinsichtlich ihrer Form und Mindestgröße einig. Hier ist ein vertikaler dreistufiger Ablauf:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Einen Stil einmal definieren

Die Zeile „box/.style={...}“ erstellt einen wiederverwendbaren Stil mit dem Namen „box“. Sein Inhalt sind gewöhnliche Knotenoptionen: „Zeichnen“ gibt dem Knoten einen Rand, „abgerundete Ecken“ macht ihn weicher, „Ausrichten=Mitte“ zentriert mehrzeiligen Text innerhalb des Knotens und „Minimale Breite=2,8 cm“ erzwingt, dass jedes Kästchen mindestens diese Breite hat, damit kurze Beschriftungen nicht zu winzigen Kästchen schrumpfen. Von da an wendet „\node[box]“ den gesamten Satz an. Wenn Sie eine Füllfarbe oder eine größere Breite wünschen, ändern Sie eine Zeile und das gesamte Diagramm wird aktualisiert. Das ist ein Diagramm, das Sie pflegen, nicht eines, das Sie neu zeichnen.

## Abstand in zwei Richtungen

„Knotenabstand=10 mm und 14 mm“ legt die Standardabstände fest, die von der „Positionierungs“-Bibliothek verwendet werden: Der erste Wert ist der vertikale Abstand, der zweite der horizontale. Wenn dies vorhanden ist, platziert „below=of i“ das Prozessfeld 10 mm unter dem Eingabefeld, Kante an Kante, und perfekt zentriert darauf. Eine zweite Spalte würde „right=of p“ verwenden und 14 mm seitlich landen. Da jede Platzierung einen vorhandenen Knoten verkettet, bedeutet das Einfügen eines Schritts, einen Knoten hinzuzufügen und eine „below=of“-Referenz zu aktualisieren. Alles stromabwärts verschiebt sich mit ihm. Sie können den Abstand pro Knoten auch überschreiben, wie in „unten = 15 mm von i“.

## Die Stufen verbinden

Jedes „\draw[-Latex] (i) -- (p);“ zeichnet einen Pfeil von einem benannten Knoten zum nächsten, wobei „-Latex“ am Zielende eine feste Pfeilspitze aus der „arrows.meta“-Bibliothek auswählt. Die Pfeile verbinden sich automatisch an den Knotengrenzen. Zeichnen Sie für einen Entscheidungszweig von bestimmten Ankern, zum Beispiel „(p.east)“, um von der rechten Seite zu gehen, und verlegen Sie die Route mit Biegungen wie „-- ++(2,0) |-“, sobald das Diagramm Ecken benötigt.

Die TikZ-Ausgabe wird in diesen In-Page-Vorschauen nicht gerendert. Kompilieren Sie daher das Snippet, um es anzuzeigen. Der klassische Fehler in Flussdiagrammen besteht darin, „nur dieses eine Mal“ ein paar Kästchen mit absoluten Koordinaten zu platzieren: Diese Kästchen sind diejenigen, die nach der nächsten Bearbeitung falsch ausgerichtet sind. Halten Sie jede Platzierung relativ und sehen Sie sich [Knoten und Pfeile](/learn/tikz-nodes-arrows/) für die zugrunde liegenden Platzierungsoptionen an.