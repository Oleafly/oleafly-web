---

title: "Recherchieren Sie Diagramme in TikZ, wenn PowerPoint nicht ausreicht"
description: "Wann man Pipelines, Automaten und kommutative Diagramme in TeX zeichnet, damit sie für das Journal neu eingefärbt werden, im Druck scharf bleiben und als Quelle im Repo weiterleben."
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint-Diagramme werden im PDF zu unscharfen Rechtecken. TikZ-Diagramme bleiben
Vektor, passen Sie die Schriftarten des Dokuments an und ändern Sie die Farbe, wenn ein Journal Graustufen erfordert
oder ein anderer Akzent. Der Handel verläuft in der ersten Stunde steiler. Danach klein
Änderungen sind Textunterschiede, keine Screenshot-Archäologie.

Du brauchst TikZ nicht für jede Figur. Fotografien, rohe Mikroskoprahmen und
Dichte Diagramme aus Matplotlib bleiben normalerweise im PDF/PNG-Format. Verwenden Sie TikZ, wenn die
Figur ist Struktur: Pipelines, Automaten, Architekturkästen, Kategoriediagramme,
einfache Bäume.

## Fangen Sie klein an

Eine Pipeline mit drei Knoten lehrt das Modell:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Benennen Sie Knoten. Verbinden Sie mit „--“ oder expliziten Ankern („(a.east)“). Lieber Verwandter
Platzierung („rechts=von a“) über magischen Koordinaten, an die Sie sich nie erinnern werden.
Lektionen: [erstes TikZ-Bild](/learn/tikz-intro/),
[Knoten und Pfeile](/learn/tikz-nodes-arrows/).

## Stile schlagen einmalige Optionen

Definieren Sie Stile einmal, damit jedes Feld übereinstimmt:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Wenn das Tagebuch dickere Linien oder Monochrom erfordert, ändern Sie den Stil, nicht
zwanzig Knoten. Färben Sie mit benannten Farben oder einem kleinen Palettenmakro, damit Sie es austauschen können
Akzente setzen, ohne nach Hex-Codes zu suchen.

## CS und Engineering: Flussdiagramme, die aufeinander abgestimmt sind

Verwenden Sie die „Positionierungs“-Bibliothek („below=of“, „right=of“), damit die Boxen ein gemeinsames Raster haben.
Bei manuellen absoluten Koordinaten verfallen Diagramme, wenn Sie einen Knoten einfügen. Behalten
Text kurz; Geben Sie Details in die Bildunterschrift ein. Anleitung:
[ausgerichtete Flussdiagramme](/learn/tikz-flowchart/).

Trennen Sie bei neuronalen Netz- oder Systemskizzen „Blöcke“ von „Anmerkungen“.
Anmerkungen können kleinere Schriftartknoten ohne Rahmen sein, sodass der Hauptpfad erhalten bleibt
in zweispaltiger Breite lesbar.

## Mathematik und Theorie: Kommutative Diagramme

„tikz-cd“ ist der übliche Pfad für Diagramme im Kategoriestil, ohne jedes zu platzieren
Knoten von Hand:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Anleitung: [kommutative Diagramme](/learn/commutative-diagrams/). Für Bäume und
beweistheoretische Diagramme, spezialisierte Bibliotheken vorhanden; Beginnen Sie einfach vor Ihnen
Importieren Sie die Hälfte des CTAN.

## Zeit externalisieren und kompilieren

Ein Papier mit zwanzig TikZ-Figuren verlangsamt die vollständige Kompilierung. Optionen:

- Fügen Sie jede Figur in eine eigene Datei ein und geben Sie sie ein.
- Verwenden Sie die „externe“ Bibliothek, damit Bilder zu zwischengespeicherten PDFs werden.
- Entwerfen Sie mit „\tikzexternaldisable“, wenn Sie sich nur für Prosa interessieren.

Für Folien exportieren: Kompilieren Sie ein „eigenständiges“ TikZ-Dokument in PDF und konvertieren Sie es in PNG
Nur wenn das Deck-Tool kein PDF verarbeiten kann. Behalten Sie die „.tex“-Datei als Quelle der Wahrheit bei.

## Canvas-Tools vs. handgeschriebenes TikZ

Einige Forschungseditoren enthalten eine Diagramm-Leinwand, die bearbeitbare TikZ ausgibt (z
Beispiel Oleafly's Diagram Composer: Zeichnen, Code optimieren, Abbildung kompilieren,
einfügen). Das ist nützlich für Geometrie, die Sie ziehen können. Handgeschriebenes TikZ gewinnt immer noch
für enge kommutative Diagramme und hochregelmäßige Gitter. So oder so, verpflichten Sie sich
TikZ-Quelle, nicht nur ein PNG.

## Diagramme im Repo behalten

Bewahren Sie Abbildungsquellen neben dem Papier auf:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Wenn das Journal dickere Zeilen benötigt, bearbeiten Sie die Quelle und kompilieren neu. Wenn ein
Co-Autor „verbessert“ einen Screenshot in einem Slide-Tool, Sie haben das einzige verloren
editierbare Version.

## Häufige Fehlermodi

Ein Überlauf in zwei Spalten kommt häufig vor. Skalieren Sie als letzten Ausweg mit „\resizebox“;
Neugestaltung für die Breite zuerst. Eine andere Möglichkeit besteht darin, dass die Schriftarten nicht übereinstimmen: Standarddokument bevorzugen
Schriftarten über fest codierte Schriftfamilien innerhalb von TikZ, sofern die Zeitschrift dies nicht erfordert.
Überprüfen Sie den Kontrast für Gespräche, denn unsichtbares Grau auf Projektoren ist ein Klassiker
Falle. Und unbeschriftete Pfeile zwingen die Bildunterschrift dazu, jede Kante zu erklären, was bedeutet
Das Diagramm ist unvollständig.

## Ebenen und Überlagerungen

Bei Vorträgen und Aufsätzen mit einer gemeinsamen Abbildung bauen Sie das Diagramm in Schichten auf: Basis
Zuerst Kästchen, dann Pfeile, dann Beschriftungen. Kommentieren Sie Ebenen beim Debuggen aus
Platzierung. Beamer-Overlays („\pause“, „\onslide“) können eine Pipeline Schritt für Schritt anzeigen
Schritt von derselben TikZ-Quelle, wenn Sie die Knotennamen stabil halten.

## Barrierefreiheit und Druck

Kodieren Sie die Bedeutung nicht nur in Rot vs. Grün. Verwenden Sie auch den Form- oder Linienstil.
Überprüfen Sie die Abbildung in Graustufen. Untertitel sollten immer noch Sinn ergeben, wenn der Leser dies tut
Farbenblindheit oder Drucken auf einem Schwarzweiß-Labordrucker.

## Ein Workflow, der funktioniert

Skizzieren Sie 30 Sekunden lang auf Papier und erstellen Sie dann das kleinste TikZ, das das zeigt
Anspruch. Definieren Sie Stile einmal und verwenden Sie sie wieder. Kompilieren Sie die Figur alleine, bis sie fertig ist
richtig aussieht, legen Sie es in das Papier und lassen Sie die Überschrift die Behauptung tragen. Begehen
die „.tex“.

PowerPoint eignet sich gut für eine einmalige Laborbesprechung. Für das PDF wird ein Tagebuch gedruckt,
Vektorquelle, die Sie neu einfärben können, schlägt eine weitere Runde von „Können Sie das Bearbeitbare senden?“
Datei?"