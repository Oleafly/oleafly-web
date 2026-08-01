---

title: "Drei-Regel-Tabellen"
description: "Oberregel, Mittelregel, Unterregel und Überspringen vertikaler Linien."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Drei-Regeltabellen

Öffnen Sie ein beliebiges, gut gesetztes Tagebuch und sehen Sie sich die Tabellen an. Fast alle haben das gleiche Design: eine Regel oben, eine Regel unter der Kopfzeile, eine Regel unten und sonst nichts. Keine vertikalen Linien, kein Raster. Dies ist der „Booktabs“-Stil, benannt nach dem Paket, das ihn implementiert, und der Wechsel zu ihm ist normalerweise die größte visuelle Verbesserung, die Sie an LaTeX-Tabellen vornehmen können. Das Paket stellt drei Befehle bereit, die den drei Regeln zugeordnet sind:

```latex
\toprule
...
\midrule
...
\bottomrule
```

In einer vollständigen Tabelle sehen sie so aus:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Was die Regeln ersetzen

Ohne „booktabs“ zeichnet man Linien mit „\hline“ und vertikalen Balken in der Spaltenangabe, wie in „{|l|c|c|}“. Das Ergebnis ist ein Käfig: jede Zelle ist eingesperrt, der Text ist entgegen den Regeln eng, weil „\hline“ keinen Raum zum Atmen bietet. Die „booktabs“-Befehle ersetzen „\hline“ durch Regeln, die über integrierte vertikale Auffüllung verfügen, und „\toprule“ und „\bottomrule“ sind etwas schwerer als „\midrule“, sodass die Tabelle einen sichtbaren Rahmen und eine leichtere Inneneinteilung hat. Dieser Abstands- und Gewichtsunterschied ist der ganze Trick. Die Daten haben Platz, der Header ist klar abgegrenzt und nichts konkurriert mit den Zahlen.

Vertikale Regeln werden einfach weggelassen. Die Spaltenausrichtung zeigt dem Leser bereits, wo eine Spalte endet und die nächste beginnt, und vertikale Linien fügen meist Tinte hinzu, ohne die Klarheit zu erhöhen. Die „Booktabs“-Dokumentation geht so weit, dass sie ihre Unterstützung verweigert.

## Teilregeln für gruppierte Header

Wenn sich eine Überschrift über mehrere Spalten erstreckt, beispielsweise „Scores“ über Genauigkeit und F1, verwenden Sie „\cmidrule“, um nur diese Spalten zu unterstreichen:

```latex
\cmidrule(lr){2-3}
```

Der Bereich „{2-3}“ gibt an, welche Spalten die Regel abdeckt, und die Option „(lr)“ schneidet das linke und rechte Ende ein wenig ab, damit benachbarte Regeln nicht zu einer langen Zeile verschmelzen. Dies wird mit „\multicolumn“ gepaart, angezeigt in [Zellen, die sich über Zeilen oder Spalten erstrecken](/learn/merged-cells/).

## Zahlen und Ausrichtung

Eine Maßtabelle liest sich am besten, wenn die Dezimalpunkte übereinstimmen. Das „siunitx“-Paket stellt einen „S“-Spaltentyp bereit, der Zahlen auf dem Dezimalzeichen automatisch ausrichtet, sodass „0,9“ und „0,88“ auch bei unterschiedlichen Ziffernzahlen korrekt untereinander stehen. Die Übernahme lohnt sich, sobald Ihre Tabellen echte Daten enthalten.

Der häufigste Fehler ist das Mischen von Systemen: ein „\hline“ hier, ein „\midrule“ dort und eine Spaltenspezifikation mit Balken, die von einer Vorlage übrig geblieben sind. Wählen Sie den Drei-Regel-Stil und wenden Sie ihn auf jede Tabelle im Dokument an. Konsistenz ist vor allem das, was den Stil gewollt wirken lässt. Eine vollständige Anleitung zum umgebenden „table“-Float finden Sie in [einer Tabelle, die wie ein Papiertisch aussieht](/learn/create-table/).