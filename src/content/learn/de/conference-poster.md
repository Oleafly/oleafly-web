---

title: "Poster im A0-Format"
description: "Tikzposter, Beamerposter oder Geometrie plus TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Poster im A0-Format

Ein Konferenzplakat ist eine einzelne Seite, normalerweise A0 oder A1, die aus anderthalb Metern Entfernung lesbar sein muss. LaTeX kommt mit dem Format gut zurecht, da der Poster die Gleichungen, Abbildungen und das Literaturverzeichnis der Arbeit direkt wiederverwenden kann. Eine normale Dokumentklasse reicht jedoch nicht aus: Schriftarten, Ränder und Spaltenlayout benötigen alle Versionen im Postermaßstab. Drei Ansätze decken fast jedes verfügbare LaTeX-Poster ab.

## Die drei Optionen

Die „tikzposter“-Klasse ist der direkteste Weg zu einem modernen akademischen Poster. Es organisiert Inhalte in farbigen Blöcken, die in Spalten angeordnet sind, liefert mehrere vollständige Themen und verwaltet selbst das große Papierformat und die skalierten Schriftarten. Ein Skelett sieht so aus:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Die Klassenoptionen legen eine 25-Punkt-Basisschriftart, A0-Papier und Hochformat fest. Jedes „\column{0.5}“ nimmt einen Bruchteil der Posterbreite ein und jeder „\block{title}{content}“ wird zu einem betitelten Panel. Durch Ändern von „\usetheme“ wird jeder Block auf einmal neu gestaltet.

Das „beamerposter“-Paket erweitert Beamer auf Postergrößen, sodass das Thema, die Farben und die „Block“-Umgebungen eines Decks auf einen einzigen riesigen Rahmen übertragen werden. Dies ist die natürliche Wahl, wenn Ihre Gruppe bereits Beamer-Stile verwendet und viele Universitätsplakatvorlagen darauf basieren.

Die dritte Option ist eine einfache Dokumentklasse mit dem Paket „geometry“, das die Abmessungen A0 und TikZ zur Dekoration festlegt. Dies gibt die volle Kontrolle über jeden Millimeter und ist die Art und Weise, wie die meisten stark gestalteten Poster hergestellt werden. Das Säulengerüst bauen Sie jedoch selbst, also planen Sie Echtzeit dafür ein.

## Praktische Ratschläge

Welchen Weg Sie auch wählen, beginnen Sie mit einer Arbeitsvorlage und nicht mit einer leeren Datei, beispielsweise einer aus der [Galerie](/templates/), und ersetzen Sie den Inhalt Block für Block. Stellen Sie das Papierformat und die Ausrichtung gleich am ersten Tag ein, da eine spätere Änderung jede manuell eingestellte Breite beeinträchtigt. Der Fließtext sollte nach dem Drucken etwa 24 bis 32 Punkte lang sein; Alles unter 20 Punkten wird ungelesen bleiben. Bevorzugen Sie Vektorfiguren. Ein für eine Papierspalte exportiertes Diagramm wird bei der Skalierung auf Posterbreite zu Brei. Erstellen Sie daher Figuren in Postergröße neu, anstatt sie zu strecken.

Der häufigste Fehler besteht darin, das Poster wie komprimiertes Papier zu behandeln. Planen Sie etwa ein Drittel der Wortzahl Ihres ersten Entwurfs ein, lassen Sie Zahlen die Argumente tragen und überprüfen Sie das Ergebnis, indem Sie einen Block der PDF-Datei im Originalformat auf A4 drucken, um die tatsächliche Schriftgröße zu beurteilen, bevor Sie die Datei an einen Plotter senden.