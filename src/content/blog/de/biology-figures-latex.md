---

title: "Arbeiten zu Biologie und Biowissenschaften: Abbildungen, Tafeln mit mehreren Tafeln und Mitautoren"
description: "Praktisches LaTeX für Nasslabore und Computerbiologie: Multi-Panel-Abbildungen, Auflösung, Ergänzungen, Statistiknotation und Zusammenarbeit, ohne sich gegenseitig zu überschreiben."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Life-Science-Manuskripte stehen an erster Stelle. Rezensenten überfliegen den Teller, bevor sie
Lesen Sie Ihre Prosa, also muss die Figur den Anspruch tragen, ohne mit der Hand zu winken
die Bildunterschrift. LaTeX bewältigt das gut, wenn Sie Zahlen als erstklassig behandeln
Projektdateien anstelle von etwas, das Sie um 2 Uhr morgens vor der Ergänzung einfügen
Frist.

Nasslabor- und Computergruppen stoßen auf die gleichen Probleme: Panels ohne gemeinsame Nutzung
Maßstabsbalken, JPEG-Artefakte auf Blots, Ergänzungen, die nicht kompiliert werden können, und a
Dutzende Co-Autoren bearbeiten einen Absatz. Nachfolgend erfahren Sie, was tatsächlich funktioniert.

## Mehrteilige Figuren

Gutachter erwarten (a)(b)(c) Panels unter einer Überschrift. Sie können entweder:

1. Erstellen Sie die Platte außerhalb von TeX (Illustrator, Inkscape, Fidschi-Export) und legen Sie sie ab
   in einem einzigen PDF oder PNG, oder
2. Assemblieren Sie in TeX mit „subcaption“, wenn jedes Panel eine eigene Datei ist:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Verweisen Sie im Text nur dann auf Panels als Figure~\ref{fig:exp}a, wenn es sich um den Journalstil handelt
erlaubt es. Viele Veranstaltungsorte bevorzugen „Abbildung 2A“ mit einem angewendeten Schema
überall. Mehr zu diesem Muster:
[Panels a, b, c](/learn/subfigures-abc/).

Benennen Sie Dateien konsistent (`fig03_western_a.pdf`), damit niemand etwas erfindet
`final_gel_NEW.png` die Woche der Einreichung.

## Auflösung, Farbe und Dateiformate

Bewahren Sie Mikroskopie-Archive als hochauflösendes TIFF oder PDF auf. Für das Papier-PDF
selbst, verwenden Sie Vektorgrafiken für Schaltpläne und PNG/PDF mit ausreichender Auflösung für
Rasterdaten. Überspringen Sie JPEG-Online-Anmerkungen und Gele. Komprimierungsartefakte
als schlampige Wissenschaft gelesen werden, selbst wenn das Experiment in Ordnung ist.

Überprüfen Sie die Farbgebühren und Druckregeln, bevor Sie eine Palette mit sechs Farben entwerfen
Funktioniert nur auf Ihrem kalibrierten Monitor. Einige Zeitschriften wünschen CMYK; andere konvertieren
schlecht, ohne zu fragen. Wenn sie graustufensichere Versionen des Schlüssels anfordern
Zahlen, gib ihnen diese.

Platzieren Sie Maßstabsbalken und Intensitätseinheiten auf dem Panel, nicht nur in der Beschriftung. Wenn
Die Figuren wurden in der Produktion neu gestaltet, eingebettete Maßstabsbalken sind erhalten; Nur-Beschriftungsnotizen
oft nicht.

## Schaltpläne vs. Datentafeln

Halten Sie „Cartoon des Signalwegs“ getrennt von „Quantifizierung des Blots“.
Cartoons können TikZ oder externe Vektorgrafiken sein. Datentafeln sollten in der Nähe bleiben
den Analyseexport, sodass Sie sie neu generieren können, wenn ein Prüfer dies wünscht
unterschiedliche Normalisierung. Notieren Sie sich den Pfad des Analyseskripts in den Beschriftungsnotizen oder a
Ergänzung zur Reproduzierbarkeit, wenn die Zeitschrift dies zulässt.

## Ergänzungen, die noch kompiliert werden

Riesige Tische, Extra-Gelände und Filmstills gehören in eine eigene Ergänzung
Dokument oder einen übersichtlichen Anhang. Ein paar Regeln, die Kopfschmerzen ersparen:

Beschriftungen müssen eindeutig sein, wenn Haupt- und Ergänzungsdatei eine Kompilierung gemeinsam nutzen. Wenn sie es sind
Trennen Sie Projekte, schreiben Sie „Abbildung S3“ im Klartext und verlassen Sie sich nicht auf „\ref“.
über PDFs hinweg. Führen Sie eine kurze Liste darüber, welche Haupttextansprüche auf welche verweisen
Ergänzungsartikel, damit nichts verrutscht.

Eine Ergänzung, die nicht in der Woche der Einreichung zusammengestellt wird, bleibt Ihnen vorbehalten
Problem, auch wenn das Haupt-PDF sauber aussieht.

## Chaos bei mehreren Autoren

Bei Biologiearbeiten gibt es oft viele Co-Autoren mit unterschiedlichen LaTeX-Kenntnissen. Eigen
Dateien nach Abschnitt (`results.tex`, `methods.tex`, `figs.tex`), zusammenführen
Git und entscheiden Sie, wer die „.bib“ verwaltet (eine Person oder eine gemeinsame Zotero-Gruppe).
exportieren).

Ein lokaler Projektordner lässt sich für einen Mitarbeiter einfacher komprimieren als eine Cloud
Projekt, zu dem sie nach dem Abschluss keinen Zugang mehr haben. Echte Git-Historie schlägt E-Mail
Anhänge mit dem Namen „manuscript_JM_edits_FINAL.docx“, die jemand zurückkonvertiert
per Hand in TeX umwandeln. Checkpoint nach erfolgreichen Kompilierungen; Wiederherstellung bei einer Zusammenführung
geht schief; Behalten Sie eine private Fernbedienung.

Wenn einige Co-Autoren nur Word bearbeiten, exportieren Sie für sie DOCX oder PDF und behalten Sie „.tex“ bei
als Quelle der Wahrheit. Siehe
[Mitautoren, die nur Word sprechen](/learn/collaborator-uses-word/).

## Methoden und Statistiknotation

Definieren Sie statistische Makros einmal, damit p-Werte nicht sowohl als „$p$“ als auch angezeigt werden
`p=` im selben Artikel:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Geben Sie den Test, n und die Mehrfachvergleichskorrektur in Methoden oder Tabellen an
Notizen, nicht nur in einer Figurenlegende, die in der Produktion beschnitten wird. Dicht
Arbeiten profitieren von einer kurzen Notationsliste. Live-Referenz-/Zitat-Check-in a
Der Forschungsredakteur fängt einen „\ref“ zu einem gelöschten Panel ab, bevor der Prüfer dies tut.

## Bildunterschriften, die den Anspruch tragen

Eine gute Bildunterschrift sagt aus, was gemessen wurde, in welchem System und was der Leser erwartet
sollte es merken. Vermeiden Sie „Siehe Text“. Geben Sie keine Methoden in die Überschrift ein
gehören in den Methodenbereich. Panel-Buchstaben (fett oder in Klammern) sollten
passend zum Hausstil.

## Checkliste für Zahlen vor der Einreichung

Bevor Sie auf „Senden“ klicken, gehen Sie die Zahlen einmal durch:

- Alle Hauptfiguren werden in der angegebenen Reihenfolge zitiert (oder in welcher Reihenfolge auch immer die Zeitschrift es zulässt).
- Tafeln beschriftet; Maßstabsbalken, wo sie wichtig sind.
- Kein JPEG-Durcheinander bei quantitativen Panels.
- Ergänzung kompiliert; Die S-Nummern wurden nicht neu gemischt.
- Farbrichtlinie überprüft; Dateigrößen unter Portalgrenzen.
- Quellbilder und Skripte sind weiterhin im Projekt- oder Laborarchiv auffindbar.

## Western, Gels und Kontrast

Überbearbeiten Sie die Blots für das PDF nicht. Zeitschriften und Leser achten auf Kontraste
Spiele. Bewahren Sie Rohdateien im Laborarchiv auf und versenden Sie Panels, die mit dem übereinstimmen
Quantifizierung verwendet. Wenn Sie Panels neu anordnen, aktualisieren Sie jedes In-Text-Panel
Brief noch am selben Tag, nicht „später“.

## Filme und interaktive Beilagen

Wenn die Zeitschrift Filme zulässt, hosten Sie sie so, wie sie es vorschreiben, und platzieren Sie sie
noch plus Bildunterschrift im PDF. Verlassen Sie sich nicht auf einen persönlichen Cloud-Link
stirbt nach dem Abschluss.

Zahlen sind das Rückgrat dieser Arbeiten. LaTeX ist nur der Rahmen. Stellen Sie sicher
Es ist nicht der Rahmen, der in der Nacht vor der Einreichung scheitert.