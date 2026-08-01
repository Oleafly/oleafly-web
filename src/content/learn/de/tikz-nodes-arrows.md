---

title: "Knoten und Pfeile"
description: "Benannte Knoten, relative Platzierung, Pfeilspitzen."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Knoten und Pfeile

Fast jedes TikZ-Diagramm reduziert sich auf zwei Zutaten. Ein Knoten ist ein positionierter Inhalt, normalerweise ein beschriftetes Feld oder ein Kreis. Eine Kante ist eine Linie oder ein Pfeil, der zwei Knoten verbindet. Sobald Sie Knoten platzieren und verbinden können, sind Flussdiagramme, Pipelines und Blockdiagramme in unterschiedlichen Größen ein und dieselbe Übung. Das folgende Beispiel platziert zwei benannte Felder und zeichnet einen beschrifteten Pfeil dazwischen:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Knoten benennen und platzieren

In „\node[draw] (src) {Source};“ formatieren die Klammeroptionen den Knoten, und „draw“ bedeutet, seinen Rand zu zeichnen, ohne dass Sie schwebenden Text erhalten. „(src)“ ist der Name des Knotens und „{Source}“ ist sein Inhalt. Der Name ist der entscheidende Teil: Er ermöglicht es anderen Befehlen, auf diesen Knoten zu verweisen, ohne seine Koordinaten zu kennen.

Der zweite Knoten zeigt, warum das wichtig ist. „right=2cm of src“ stammt aus der „positioning“-Bibliothek und platziert „dst“ zwei Zentimeter rechts von „src“, gemessen zwischen ihren Rändern. Die Bibliothek bietet auch „left=of“, „above=of“, „below=of“ und diagonale Kombinationen wie „above right=of“. Erstellen Sie auf diese Weise ein Diagramm (jeder Knoten relativ zu einem vorhandenen), und das Layout bleibt erhalten, wenn sich die Textgröße ändert. Absolute Koordinaten wie „\node at (4,2)“ haben immer noch Verwendungsmöglichkeiten, aber ein darauf basierendes Diagramm muss jedes Mal manuell neu nummeriert werden, wenn ein Kästchen wächst.

## Den Pfeil zeichnen

„\draw (src) -- (dst);“ zeichnet eine gerade Linie zwischen den beiden benannten Knoten, und TikZ beginnt und endet die Linie automatisch an den Knotenrändern und nicht an ihren Mittelpunkten. Die Option „[-{Latex}]“ gibt die Pfeilspitzen an: Nichts vor dem Bindestrich bedeutet keine Schwanzspitze, und „Latex“ danach wählt eine feste Pfeilspitze aus der „arrows.meta“-Bibliothek am Ziel aus. Das Schreiben von „{Latex}-{Latex}“ würde einen Doppelpfeil ergeben.

Der mittlere Pfad „Knoten[above] {Kante}“ ist eine Beschriftung, die an der Linie selbst angebracht ist. Ein innerhalb eines Pfads geschriebener Knoten wird an diesem Punkt des Pfads platziert, standardmäßig auf halber Strecke, und „oben“ verschiebt ihn direkt über die Linie, sodass der Text nicht auf dem Strich sitzt. Dies ist die Standardmethode zum Kommentieren von Übergängen und Datenflüssen.

## Gewohnheiten, die sich auszahlen

Benennen Sie jeden Knoten, auch in kleinen Diagrammen. Mit unbenannten Knoten kann keine Verbindung hergestellt werden und kleine Diagramme bleiben selten klein. Aus dem gleichen Grund bevorzugen Sie eine relative Platzierung gegenüber der „Positionierung“ gegenüber absoluten Koordinaten. Jede TikZ-Anweisung endet mit einem Semikolon. Das Auslassen eines Fehlers ist der häufigste TikZ-Fehler, und die Meldungen weisen oft weit vom eigentlichen Problem ab. Um viele Felder in ordentlichen Zeilen und Spalten anzuordnen, fahren Sie mit [ausgerichtete Flussdiagrammfelder](/learn/tikz-flowchart/) fort.