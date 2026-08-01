---

title: "Bäume und einfache Diagramme"
description: "untergeordnete Syntax- und Abstandsknöpfe."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Bäume und einfache Diagramme

Hierarchien tauchen ständig auf: Analysebäume, Entscheidungsbäume, Dateilayouts, Taxonomien. Das Zeichnen eines Kästchens nach dem anderen mit „Positionierung“ funktioniert, aber es ist mühsam, die Geschwister gleichmäßig zu verteilen und die Ebenen von Hand gleichmäßig zu beabstanden. Mit der TikZ-Bibliothek „trees“ können Sie stattdessen die Hierarchie selbst mithilfe verschachtelter „untergeordneter“ Operationen beschreiben und das Layout für Sie berechnen:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Lesen der untergeordneten Syntax

Das Bild enthält eine einzige Aussage. Es beginnt mit der Wurzel „\node{A}“, und jedes daran angehängte „child{...}“ deklariert einen Unterbaum. Ein Kind enthält normalerweise einen „Knoten{...}“ für seine eigene Bezeichnung und kann weitere „Kind“-Operationen enthalten, wodurch „C“ die Kinder „D“ und „E“ erhält. Die Verschachtelung der geschweiften Klammern spiegelt die Verschachtelung des Baums wider, sodass Sie die Struktur direkt an der Einrückung ablesen können. TikZ platziert jede Ebene unter der vorherigen und zeichnet die Verbindungskanten automatisch ein. Die one-Anweisung endet mit einem einzelnen Semikolon nach der letzten Klammer. Ein fehlendes oder zusätzliches Semikolon innerhalb der Struktur ist hier die übliche Fehlerursache.

## Die drei Layout-Regler

Die Optionen oben steuern Aussehen und Abstand. „every node/.style={draw, circle, Minimum size=7mm}“ wendet einen Stil auf alle Knoten gleichzeitig an: Jeder erhält einen gezeichneten Rand, eine kreisförmige Form und einen Mindestdurchmesser von 7 mm, sodass einzelne Buchstaben gleichmäßige Kreise erzeugen. „level distance=12mm“ legt den vertikalen Abstand zwischen einem übergeordneten Element und seinen untergeordneten Elementen fest. „Geschwisterabstand=18mm“ legt den horizontalen Abstand zwischen benachbarten Kindern desselben Elternteils fest.

Der Geschwisterabstand ist der Knopf, den Sie am häufigsten einstellen werden. Die Bibliothek „trees“ reserviert für jeden Teilbaum auf einer bestimmten Ebene die gleiche Breite, sodass breite Teilbäume kollidieren können, wenn der Wert zu klein ist. Die Standardlösung besteht darin, den Abstand oben zu vergrößern, wo die Teilbäume am breitesten sind, mit Einstellungen pro Ebene wie „level 1/.style={sibling distance=36mm}“ und „level 2/.style={sibling distance=18mm}“. Wenn sich die Breite Ihrer Etiketten stark unterscheidet, wechseln Sie von Kreisen zu Rechtecken, indem Sie „Kreis“ aus dem gemeinsamen Stil entfernen.

## Jenseits kleiner Bäume

Kanten übernehmen den Stil über „edge from parent/.style“, um beispielsweise Pfeilspitzen oder dickere Linien hinzuzufügen. Für Bäume über etwa einem Dutzend Knoten hinaus oder für allgemeine Graphen mit Zyklen wird die „Bäume“-Bibliothek zu einer Einschränkung. Das Paket „Wald“ verarbeitet große Bäume mit automatischer Verpackung. Die „Graphs“-Bibliothek mit den „Graphdrawing“-Algorithmen deckt beliebige Graphen ab, allerdings erfordert dieser Pfad LuaLaTeX. TikZ rendert in diesen In-Page-Vorschauen nicht. Kompilieren Sie daher das Beispiel, um das Layout zu sehen. Beginnen Sie mit den Grundlagen in [Ihrem ersten TikZ-Bild](/learn/tikz-intro/), wenn diese Syntax neu ist.