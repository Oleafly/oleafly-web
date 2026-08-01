---

title: "Eine PDF-Seite als Grafik"
description: "Enthält Grafiken mit Seitenauswahl und PDF-Seiten für Anhänge."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Eine PDF-Seite als Grafik

PDF ist das beste Abbildungsformat, das LaTeX verarbeiten kann. Im Gegensatz zu PNG oder JPG werden in einer PDF-Datei Vektordaten gespeichert, sodass Linien und Beschriftungen bei jeder Zoomstufe scharf bleiben und die darin enthaltenen Schriftarten mit der Datei übertragen werden. Tools wie Matplotlib, Inkscape und draw.io exportieren alle PDF-Dateien, was bedeutet, dass das Diagramm, das Sie an anderer Stelle gezeichnet haben, direkt in Ihr Dokument eingefügt werden kann. Aber PDFs bringen einen Nachteil mit sich, den Bilder nicht haben: Ein PDF kann viele Seiten enthalten, und Sie müssen LaTeX mitteilen, welche Sie möchten.

## Eine Seite aus einem mehrseitigen PDF herausziehen

Das Paket „\includegraphics“ des „graphicx“-Pakets akzeptiert neben den üblichen Größenschlüsseln auch eine „page“-Option:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Hier wählt „page=1“ die erste Seite von „diagram.pdf“ aus und „width=\textwidth“ skaliert diese Seite auf die volle Breite des Textblocks. Wenn Sie „Seite“ weglassen, verwendet LaTeX stillschweigend Seite eins, was normalerweise das ist, was Sie wollen, Sie aber überraschen kann, wenn ein Plotskript mehrere Figuren in eine einzige Datei schreibt. Sie können dasselbe PDF mehrmals mit unterschiedlichen „Seiten“-Werten einbinden, einmal pro Abbildungsumgebung, jeweils mit eigener Beschriftung und Beschriftung.

Schließen Sie den Befehl in eine normale „Abbildung“-Umgebung ein, sodass er eine Beschriftung und eine Nummer erhält, genau wie Sie es für [jedes andere Bild](/learn/insert-images/) tun würden. Die enthaltene Seite wird auf ihren eigenen Begrenzungsrahmen zugeschnitten. Wenn Ihr Quell-PDF also großzügige Ränder hat, sieht die Abbildung gepolstert aus. Exportieren Sie es erneut mit einem engen Begrenzungsrahmen oder schneiden Sie es einmal mit einem Tool wie „pdfcrop“ zu, anstatt den Leerraum mit negativen Abständen zu bekämpfen.

## Ganze Dokumente mit pdfpages einfügen

Manchmal möchte man überhaupt keine Figur. Sie möchten, dass ganze Seiten wörtlich in Ihr Dokument eingefügt werden: ein ergänzendes PDF, ein unterschriebenes Formular, ein veröffentlichter Fragebogen in einem Anhang zur Abschlussarbeit. Das ist die Aufgabe des Pakets „pdfpages“:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

Der Wert „pages=-“ bedeutet jede Seite. Sie können auch „pages=2-5“ für einen Bereich oder „pages={1,3,7}“ für eine bestimmte Liste schreiben. Jede eingefügte Seite füllt ihre eigene Ausgabeseite, behält ihr ursprüngliches Layout und ist an der Seitennummerierung Ihres Dokuments beteiligt, sodass der Anhang fortlaufend gelesen wird. Fügen Sie die Option „pagecommand={}“ hinzu, wenn Kopf- oder Fußzeilen Ihrer Dokumentklasse über den eingefügten Seiten gedruckt werden und Sie möchten, dass sie unterdrückt oder angepasst werden.

## Welches Werkzeug für welche Aufgabe

Verwenden Sie „\includegraphics[page=...]“, wenn sich der PDF-Inhalt wie eine Figur verhalten soll, d. h. er schwebt, trägt eine Beschriftung und wird im Text referenziert. Verwenden Sie „\includepdf“, wenn die Seiten in voller Größe für sich allein stehen sollen. Der häufigste Fehler besteht darin, „pdfpages“ für ein Diagramm zu verwenden, wodurch Sie eine vollständige Seite ohne Beschriftung und ohne Referenz erhalten, die Sie nicht mit „\ref“ zitieren können. Wenn die Leser jemals „siehe Abbildung 3“ sehen, gehört das in eine Figurenumgebung.