---

title: "Lassen Sie eine Figur fallen"
description: "Grafikx, Breite, Pfade, PDF vs. PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Lass eine Figur fallen

LaTeX verfügt über keine integrierte Bildunterstützung. Alles stammt aus dem „graphicx“-Paket, das den Befehl „\includegraphics“ bereitstellt, und per Konvention ist das Bild in eine „figure“-Umgebung eingebunden, sodass es eine Beschriftung und eine Nummer tragen kann. Dies ist das Muster, das Sie hunderte Male verwenden werden:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Was jede Zeile bewirkt

Die Zeile „\usepackage{graphicx}“ steht in Ihrer Präambel vor „\begin{document}“ und muss nur einmal erscheinen, egal wie viele Bilder Sie einfügen.

Die „figure“-Umgebung macht das Bild schwebend, was bedeutet, dass LaTeX wählt, wo es landet, anstatt es genau an dieser Stelle im Text festzunageln. Die „[htbp]“-Buchstaben sind Ihre Platzierungspräferenzen: „h“ bedeutet hier, wo der Code erscheint, „t“ bedeutet der obere Rand einer Seite, „b“ bedeutet der untere Rand einer Seite und „p“ bedeutet eine separate Seite mit Floats. LaTeX probiert sie in dieser Reihenfolge aus und verwendet die erste, die eine anständige Seite erzeugt. Wenn Ihre Figur überraschend an einen überraschenden Ort driftet, ist das normales Float-Verhalten, und [wo Floats tatsächlich landen] (/learn/position-figures/) erklärt, wie man damit umgeht.

„\centering“ zentriert das Bild horizontal innerhalb des Textblocks. „width=0.8\textwidth“ skaliert das Bild auf 80 Prozent der Textbreite und behält dabei sein Seitenverhältnis bei. Dies ist fast immer besser als die Angabe einer absoluten Größe in Zentimetern, da es sich anpasst, wenn sich die Ränder des Dokuments ändern. Der Dateipfad ist relativ zum Projektstammverzeichnis, daher bedeutet „figures/pipeline.pdf“ einen „figures“-Ordner neben Ihrer Hauptdatei „.tex“. Schließlich gibt „\caption“ die nummerierte Überschrift aus und „\label“ zeichnet die Nummer auf, damit „\ref{fig:pipeline}“ sie aus dem Text zitieren kann. Die Beschriftung muss nach der Beschriftung stehen, aus Gründen, die in [Bildunterschriften und Beschriftungen](/learn/captions-labels/) behandelt werden.

## Welches Dateiformat verwendet werden soll

Bevorzugen Sie PDF für alle Vektoren, also Diagramme, Diagramme und Flussdiagramme, da Vektorgrafiken bei jedem Zoom und jeder Druckgröße scharf bleiben. Verwenden Sie PNG für Screenshots und andere pixelbasierte Bilder. JPG eignet sich für Fotos, bei denen Komprimierungsartefakte unsichtbar sind. Vermeiden Sie es überhaupt, textlastige Inhalte als Screenshots einzubetten, da diese im Druck unscharf werden und nicht durchsucht werden können.

Ändern Sie auch die Größe großer Fotos, bevor Sie sie einfügen. Ein 12-Megapixel-Foto, das in einer Breite von 8 Zentimetern angezeigt wird, bläht das PDF auf und verlangsamt jede Kompilierung, während eine auf etwa 300 dpi herunterskalierte Version in gedruckter Größe identisch aussieht.

## Der Fehler, den es zu vermeiden gilt

Bekämpfen Sie den Float nicht am ersten Tag, indem Sie allein „[h]“ fordern. LaTeX weigert sich oft und führt dann die Figur und alles dahinter bis zum Ende des Kapitels weiter. Schreiben Sie „[htbp]“, platzieren Sie den Abbildungscode in der Nähe des Absatzes, der zuerst darauf verweist, und überlassen Sie die Nachverfolgung den Zahlen und Referenzen.