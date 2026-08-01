---

title: "Ihr erster Laborbericht in LaTeX als Student"
description: "Von Null bis zum Kompilierungsbericht: Vorlage, Gleichungen, Abbildungen, Referenzen und ein Kompilierungspfad, der keine manuelle Verwaltung von TeX Live erfordert."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Sie müssen LaTeX nicht beherrschen, um einen Laborbericht fertigzustellen. Sie benötigen eine Vorlage, a
wenige Befehle und eine Kompilierungsschaltfläche, die vom ersten Tag an funktioniert. Alles andere kann
Warten Sie, bis in einem späteren Kurs eine Abschlussarbeit verlangt wird.

Dies ist ein kurzer Weg, bei dem ein sauberes PDF Vorrang vor einem perfekten Schriftsatz hat.

## Überspringen Sie die Multi-Gigabyte-Installation, wenn Sie können

Ein Desktop-Rechercheeditor mit einer gebündelten Engine (z. B
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) führt Sie zu einem PDF
ohne TeX Live zu verwalten. Sie erhalten Vorlagen und Fehlerkarten in der Zeile
kaputt, PDF neben der Quelle mit Click-to-Jump und Dateiverlauf ohne
separater Git-Kurs. Wenn Ihr Lehrer eine bestimmte Verteilung benötigt oder
Befolgen Sie auf der Rückseite die Kursnotizen. Ansonsten für den Start optimieren.

Cloud-Editoren sind auch in Ordnung, wenn sie im Kurs bereits verwendet werden. Das Ziel ist ein PDF
pünktlich, keine Toolchain-Identität.

## Stehle ein Skelett und lösche dann die Hälfte davon

Beginnen Sie mit einer einfachen „Artikel“-Vorlage:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Weitere Einzelheiten: [Erstellen Sie Ihr erstes PDF](/learn/first-document/) und die
[Kurzreferenz](/learn/cheatsheet/).

Löschen Sie Abschnitte, nach denen Ihre Rubrik nicht fragt. Kopieren Sie keine Abschlussarbeit mit 40 Paketen
Präambel „nur für den Fall.“ Durch zusätzliche Pakete erhalten Anfänger Fehler, die sie nicht machen können
lesen.

## Gleichungen für das Labor, nicht für ein Lehrbuch

Inline: `$F = ma$`. Anzeige:

```latex
\[
  v = v_0 + at
\]
```

Nummerieren Sie nur das, was Sie später zitieren, mit „\eqref“. Wenn der TA um Unsicherheit bittet,
Fügen Sie es in einen Satz oder eine kleine Tabelle ein, nicht in ein zehnzeiliges „Alignment“, das Sie nicht tun
Verstehe es noch. Brüche: `\frac{a}{b}`. Quadratwurzeln: `\sqrt{x}`.

Wenn das Kompilierungsprotokoll etwas Beängstigendes sagt, beheben Sie dann nur den ersten Fehler
neu kompilieren. Spätere Fehler sind oft ein Nebeneffekt des ersten Fehlers.

## Eine Figur, gut gemacht

Exportieren Sie eine Darstellung als PDF oder PNG aus Ihrem Analysetool. Fügen Sie es hinzu mit:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

Im Text: `Figure~\ref{fig:vr} zeigt...`. Bildunterschrift unter der Abbildung. Etikett
nach der Bildunterschrift. Wenn die Abbildung auf die falsche Seite verschoben wird, verkleinern Sie die Breite leicht
Bevor Sie eine Stunde lang um Platzierungsoptionen kämpfen:
[Float-Platzierung](/learn/figure-wrong-position/).

## Tische ohne Leiden

Für ein paar Zeilen reicht eine einfache „Tabelle“. Fügen Sie oben eine Überschrift mit „Tabelle“ ein
+ `\caption`. Richten Sie die Zahlen so aus, dass der TA sie scannen kann. Das brauchst du nicht
„Booktabs“ in Publikationsqualität in Labor 1, aber vermeiden Sie vertikale Liniensuppe, wenn Sie können.

## Referenzen ohne einen PhD-Bibliographie-Workflow

Für drei Zitate funktioniert eine manuelle Liste:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Für weitere Informationen exportieren Sie eine „.bib“ aus Google Scholar oder Zotero und bereinigen Sie die Schlüssel damit
sie sind kurz und lesbar. Defekte Zitate werden als „[?]“ gedruckt:
[geheimnisvolle Zitatzeichen löschen](/learn/citation-question-mark/).

Zitieren Sie das Laborhandbuch und das Lehrbuch so, wie es im Kurs verlangt wird (IEEE, APA-artig oder
eine einfache nummerierte Liste). Die Übereinstimmung mit der Rubrik schlägt die Übereinstimmung mit einem Tagebuch.

## Häufige Anfängerfehler

- „\usepackage{graphicx}“ vor „\includegraphics“ vergessen
- Sonderzeichen wie „%“ und „_“ im Text ohne Escapezeichen
- Nicht übereinstimmende mathematische Trennzeichen „$“.
- Dateinamen mit Leerzeichen („my plot.pdf“), die break enthalten
- Bearbeiten eines anderen Ordners als dem, den Sie kompilieren

Machen Sie langsamer, korrigieren Sie die erste Protokollzeile und kompilieren Sie neu.

## Reichen Sie das PDF ein, behalten Sie die Quelle

Senden Sie, was das LMS verlangt (normalerweise PDF). Behalten Sie die „.tex“-Datei und die Zahlen in einem
Ordner, der Ihnen nach Kursende noch zur Verfügung steht. In Zukunft werden Sie das Skelett wiederverwenden
für den nächsten Bericht. Wenn Ihr Editor den Git-Verlauf automatisch speichert, sogar
Besser: Sie können eine Version wiederherstellen, bevor Sie die richtige Gleichung gelöscht haben.

## Eine 90-minütige erste Sitzung

Wenn Sie heute Abend beginnen:

1. Öffnen Sie eine Vorlage oder fügen Sie das Skelett oben ein.
2. Geben Sie Titel, Namen und Abschnittsüberschriften aus der Rubrik ein.
3. Fügen Sie eine Gleichung hinzu, von der Sie bereits wissen, dass sie richtig ist.
4. Exportieren Sie ein Diagramm. schließe es ein; beschrifte es; Zitieren Sie es in den Ergebnissen.
5. Fügen Sie zwei Referenzen hinzu, wie im Kurs verlangt.
6. Kompilieren Sie, bis das PDF wie ein Bericht und nicht wie ein leerer Artikel aussieht.

Hören Sie auf, wenn die Rubrik abgedeckt ist. Übernachten Sie nicht bei Pauschalangeboten.

## Wenn etwas kaputt geht

Nur den ersten Fehler lesen. Häufige Korrekturen: fehlendes „$“, fehlendes Paket für
Grafiken, falscher Dateiname, zusätzliches „}“. Speichern Sie zuvor eine Kopie einer Kompilierungsversion
Große Änderungen, damit Sie zurückgehen können. Wenn die Einleitung eines Klassenkameraden für den Kurs funktioniert,
Leihen Sie sich die von ihnen verwendeten Mindestpakete aus, nicht den gesamten Stapel Ihrer Abschlussarbeiten.

## Wie Erfolg aussieht

Das PDF wird geöffnet, die Ränder sehen angemessen aus, die Abbildungen haben Überschriften, die Gleichungen auch
lesbar und die Rubrikelemente sind klar überschrieben. Das reicht für eine Premiere
LaTeX-Laborbericht. Typografische Perfektion kann auf ein Papier warten, das tatsächlich benötigt wird
es.