---

title: "Numerisch, Autorenjahr, Zeitschriftenstile"
description: "Tauschen Sie Stile aus, ohne die Datenbank neu zu schreiben."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Numerisch, Autorenjahr, Zeitschriftenstile

Ein Zitierstil steuert zwei Dinge: wie die In-Text-Markierung aussieht, z. B. „[12]“ im Vergleich zu „(Knuth, 1984)“, und wie jeder Eintrag in der Referenzliste formatiert ist. Die gute Nachricht ist, dass der Stil völlig unabhängig von Ihrer „.bib“-Datenbank ist. Sie können eine Arbeit von numerisch auf Autorenjahr umstellen oder sie für eine andere Zeitschrift neu formatieren, indem Sie eine Zeile in der Präambel ändern. Ihre Einträge bleiben unverändert.

## Stilwechsel mit klassischem BibTeX

Bei BibTeX befindet sich der Stil im Befehl „\bibliographystyle{...}“, der eine „.bst“-Datei benennt. Tauschen Sie das Argument aus und kompilieren Sie es neu:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Zeitschriften und Konferenzen versenden normalerweise ihre eigene „.bst“-Datei, zum Beispiel „IEEEtran.bst“ oder „ACM-Reference-Format.bst“. Platzieren Sie diese Datei neben Ihrer „main.tex“ und benennen Sie sie in „\bibliographystyle“. Beachten Sie, dass eine „.bst“-Datei in einem einzigen Schritt gebacken wird; Wenn der Veranstaltungsort Zitate nach Autorenjahr wünscht, benötigen Sie auch das Paket „natbib“, um Befehle wie „\citep“ und „\citet“ zu erhalten.

## Stil ändern mit biblatex

Bei biblatex ist der Stil eine Option auf dem Paket selbst:

```latex
\usepackage[style=authoryear]{biblatex}
```

Andere gebräuchliche Werte sind „style=numeric“, „style=numeric-comp“ für komprimierte Bereiche wie „[3-6]“, „style=alphabetic“ und „style=apa“ oder „style=ieee“ aus Add-on-Paketen. Da biblatex-Stile in LaTeX und nicht in der alten „.bst“-Sprache geschrieben sind, lassen sie sich viel einfacher anpassen, um beispielsweise die Zeichensetzung zu ändern oder URLs zu löschen.

## Nach dem Wechsel ordnungsgemäß neu kompilieren

Nach jeder Stiländerung enthalten die alten Hilfsdateien immer noch Daten, die mit dem vorherigen Stil formatiert wurden. Führen Sie daher einen vollständigen Zyklus durch: einmal kompilieren, das Backend ausführen („bibtex“ für klassisches BibTeX, „biber“ für biblatex), dann noch zweimal kompilieren, damit Querverweise ausgeglichen werden. Oleafly führt diesen Zyklus für Sie durch, aber wenn Zitate nach einem manuellen Wechsel veraltet aussehen, können Sie die Dateien „.aux“ und „.bbl“ löschen und von Grund auf neu erstellen, um das Problem zu beheben.

## Welche Familie sollten Sie verwenden?

Wenn der Zielort eine „.bst“-Datei oder eine Klasse bereitstellt, die BibTeX erwartet, verwenden Sie das klassische BibTeX. Das ist bei den meisten Zeitschriften immer noch der Fall. Wenn Sie das Format selbst steuern, wie bei einer Abschlussarbeit oder einem Vorabdruck, ist biblatex die leistungsfähigere Wahl. Die Kompromisse werden in [Classic BibTeX oder biblatex](/learn/bibtex-vs-biblatex/) und die Befehlsunterschiede in [Natbib-Gewohnheiten vs. Biblatex-Befehlen](/learn/natbib-vs-biblatex/) behandelt.