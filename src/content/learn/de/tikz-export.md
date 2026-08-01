---

title: "Eigenständiges TikZ in PDF oder PNG"
description: "eigenständige Klasse und externe Caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Eigenständiges TikZ in PDF oder PNG

Ein TikZ-Bild befindet sich normalerweise in einem Papier, aber oft benötigen Sie das Diagramm als eigene Datei: um es in einem Foliensatz wiederzuverwenden, um es einem Co-Autor zu übergeben, der in Word arbeitet, um es dort hochzuladen, wo ein PNG erforderlich ist, oder einfach um zu vermeiden, bei jedem Dokumentaufbau eine teure Zeichnung neu zu kompilieren. Genau dafür gibt es die Dokumentenklasse „Standalone“. Es setzt ein Bild auf eine Seite, die auf die Bildgröße zugeschnitten ist:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Was die Klassenoptionen bewirken

Die Option „tikz“ lädt das TikZ-Paket für Sie und weist „standalone“ an, die Ausgabeseite eng um das „tikzpicture“ herum zuzuschneiden, sodass die resultierende PDF-Datei genau so groß wie die Zeichnung ist und keine Seitenränder aufweist. Die Option „border=2pt“ fügt auf allen Seiten ein Zweipunktpolster hinzu, das verhindert, dass Striche, die genau auf dem Begrenzungsrahmen liegen, von Betrachtern oder Druckern abgeschnitten werden. Kompilieren Sie diese Datei wie jedes andere Dokument und die Ausgabe ist eine kleine, eng beschnittene PDF-Datei, die nur das Diagramm enthält.

Bevorzugen Sie PDF, da es sich um einen Vektor handelt: Es lässt sich auf jede beliebige Größe skalieren, ohne zu verwischen. Das Einfügen in ein anderes Dokument mit „\includegraphics“ funktioniert wie unter [Eine PDF-Seite als Grafik](/learn/include-pdf-as-figure/) beschrieben. Wenn wirklich eine Rasterkopie erforderlich ist, konvertieren Sie das kompilierte PDF, anstatt die Zeichnung neu zu erstellen. Befehlszeilentools wie „pdftoppm -png -r 300 Figure.pdf Figure“ erzeugen ein PNG mit 300 dpi und „pdf2svg“ oder Inkscape erzeugen SVG. Exportieren Sie mit 300 dpi oder mehr, wenn das PNG gedruckt werden soll.

## Bilder mit externalize zwischenspeichern

In einem großen Dokument werden TikZ-Bilder bei jeder Kompilierung neu gezeichnet, und eine Handvoll komplexer Plots können die Erstellungszeit dominieren. Die „externe“ Bibliothek behebt dieses Problem, indem sie jedes Bild einmal in ein eigenes PDF kompiliert und dann die zwischengespeicherte Datei wiederverwendet, bis sich der Code des Bildes ändert:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

Die Option „Präfix“ behält die generierten Dateien in ihrem eigenen Ordner. Durch die Externalisierung wird der Compiler in einem Modus ausgeführt, der Unterkompilierungen erzeugt. Daher muss Shell-Escape aktiviert sein und er interagiert schlecht mit einigen Setups. Wenn Ihnen das nicht gelingt, verschieben Sie jedes große Bild in eine eigene „eigenständige“ Datei und fügen Sie die kompilierten PDFs hinzu. Dadurch erhalten Sie das gleiche manuelle Caching mit weniger Maschinen. Kompilierungszeiten im Allgemeinen werden unter [kürzeres Warten auf das PDF](/learn/speed-up-compilation/) behandelt.

Ein häufiger Fehler verdient eine Warnung: Erstellen Sie keinen Screenshot eines gerenderten Diagramms, um ein PNG zu erhalten. Screenshots erfassen die Bildschirmauflösung, die in einer Folienvorschau akzeptabel aussieht und überall sonst unscharf aussieht. Konvertieren Sie aus dem PDF, wobei Sie die Auflösung selbst wählen können.