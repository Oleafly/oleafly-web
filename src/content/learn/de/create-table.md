---

title: "Ein Tisch, der wie ein Papiertisch aussieht"
description: "tabellarisch, Booktabs-Regeln, Bildunterschrift, Beschriftung."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Ein Tisch, der wie ein Papiertisch aussieht

Tabellen in LaTeX verwenden zwei verschachtelte Umgebungen mit unterschiedlichen Aufgaben. Die innere „Tabelle“ bildet das Zellengitter. Die äußere „Tabelle“ macht das Raster zu einem schwebenden Raster, sodass es eine Zahl, eine Beschriftung und eine Beschriftung enthalten kann und LaTeX es dort platzieren kann, wo auf der Seite Platz ist. Fügen Sie das Paket „booktabs“ für die horizontalen Regeln hinzu und das Ergebnis sieht aus wie eine Tabelle aus einem veröffentlichten Artikel und nicht wie ein Screenshot einer Tabellenkalkulation.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## Die äußere Umgebung

Das Argument „[htbp]“ listet auf, wo LaTeX den Float platzieren darf: hier im Text, oben auf einer Seite, unten oder auf einer separaten Seite mit Floats. Es probiert sie in dieser Reihenfolge aus, und wenn alle vier zugelassen werden, wird verhindert, dass die Tabelle weit abdriftet; Die Mechanik wird in [wo Floats tatsächlich landen](/learn/position-figures/) erklärt. „\centering“ zentriert das Gitter horizontal. Mit „\caption“ wird die nummerierte Bildunterschrift gedruckt. Konventionsgemäß werden Tabellenunterschriften oberhalb der Tabelle angezeigt, im Gegensatz zu Abbildungsunterschriften, die darunter liegen. „\label“ muss nach „\caption“ stehen, da ein Label die zuletzt ausgegebene Nummer aufzeichnet, wie in [Untertitel und Labels](/learn/captions-labels/) beschrieben. Wenn die Beschriftung vorhanden ist, gibt „Table~\ref{tab:results}“ in Ihrem Text immer die richtige Zahl aus.

## Das innere Gitter

Das „{lcc}“ nach „\begin{tabular}“ deklariert eine Spalte pro Buchstabe: „l“ ist linksbündig, „c“ ist zentriert und „r“ wäre rechtsbündig. Drei Buchstaben bedeuten drei Spalten, und jede Zeile muss genau so viele Zellen enthalten. Innerhalb einer Zeile trennt „&“ Zellen und „\\“ beendet die Zeile. Textspalten lassen sich normalerweise am besten linksbündig lesen, während kurze numerische Spalten üblicherweise zentriert sind.

Die drei Regeln stammen von „booktabs“. „\toprule“ öffnet die Tabelle, „\midrule“ trennt die Kopfzeile von den Daten und „\bottomrule“ schließt sie. Diese ersetzen den einfachen „\hline“-Befehl und verfügen über korrekt abgestimmte Abstände oben und unten, was vor allem der Grund dafür ist, dass die Tabelle professionell eingerichtet aussieht. Keine vertikalen Linien und keine Regel zwischen Datenzeilen: Der „Booktabs“-Stil lässt beides absichtlich weg. Die Begründung ist in [Drei-Regel-Tabellen](/learn/booktabs-beautiful/) dargelegt.

## Praktische Hinweise

Die häufigsten Anfängerfehler sind eine Nichtübereinstimmung zwischen der Anzahl der „&“-Trennzeichen und den deklarierten Spalten sowie ein vergessenes „\\“ am Ende einer Zeile. Beides führt zu verwirrenden Fehlermeldungen, die auf die nächste Zeile verweisen. Wenn Sie Zellen lieber nicht manuell zählen möchten, erstellen Sie das Raster visuell mit dem [Tabellengenerator] (/tools/table-generator/) und fügen Sie das Ergebnis in Ihr Dokument ein.