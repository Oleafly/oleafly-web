---

title: "Zellen, die sich über Zeilen oder Spalten erstrecken"
description: "mehrspaltig, mehrzeilig, cmidrule unter gruppierten Überschriften."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Zellen, die sich über Zeilen oder Spalten erstrecken

Echte Tabellen benötigen oft zusammengeführte Zellen. Eine Überschrift wie „Scores“, die sich über zwei Metrikspalten befindet, erstreckt sich über mehrere Spalten, und ein Modellname, der für zwei Ergebniszeilen gilt, erstreckt sich über mehrere Zeilen. LaTeX behandelt die beiden Richtungen mit unterschiedlichen Werkzeugen: „\multicolumn“ ist eingebaut, während „\multirow“ aus dem gleichnamigen Paket stammt. Hier ist eine kompakte Tabelle, die beides verwendet, plus eine Teilregel von „booktabs“:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Spaltenübergreifend

„\multicolumn{2}{c}{Scores}“ ersetzt zwei gewöhnliche Zellen durch eine. Das erste Argument gibt an, wie viele Spalten aufgenommen werden sollen, das zweite ist eine Spaltenspezifikation nur für diese Zelle, hier „c“ für zentriert, und das dritte ist der Inhalt. Beachten Sie das einzelne „&“ davor: Die erste Spalte dieser Zeile ist absichtlich leer, daher beginnt „Scores“ in Spalte 2 und deckt die Spalten 2 und 3 ab. Da das zweite Argument den Spaltentyp lokal überschreibt, ist „\multicolumn{1}{c}{...}“ auch der Standardtrick, um eine einzelne Kopfzelle über einer linksbündigen Spalte zu zentrieren.

## Die Teilregel

„\cmidrule(lr){2-3}“ zeichnet eine horizontale Linie nur unter den Spalten 2 bis 3, die den gruppierten Header visuell mit seinen Spalten verknüpft. Die Option „(lr)“ schneidet die Regel an ihrem linken und rechten Ende leicht ab, sodass benachbarte „\cmidrule“ sich nicht berühren und als separate Gruppenmarkierungen gelesen werden. Dies ist ein „Booktabs“-Befehl, und das Zuschneiden ist eines der Details, die diese Tabellen eher gesetzt als gezeichnet aussehen lassen. Der vollständige Drei-Regel-Stil wird in [Drei-Regel-Tabellen](/learn/booktabs-beautiful/) behandelt.

## Zeilenübergreifend

„\multirow{2}{*}{Ours}“ gibt „Ours“ vertikal zentriert über 2 Zeilen aus. Das erste Argument ist die Zeilenanzahl, das zweite ist die Zellenbreite, wobei „*“ die natürliche Breite des Inhalts bedeutet, und das dritte ist der Inhalt selbst. Der Befehl reserviert nur visuellen Platz, daher muss die zweite Zeile immer noch eine leere erste Zelle liefern, weshalb die folgende Zeile mit einem bloßen „&“ beginnt. Wenn Sie diese leere Zelle vergessen, wird jeder Wert in der Zeile um eine Spalte nach links verschoben, und die Fehlermeldung zur Fehlausrichtung zeigt auf die falsche Zeile. Überprüfen Sie daher zuerst die Zeile nach einem „\multirow“.

## Eine praktische Grenze

Zusammengeführte Zellen werden am besten in Überschriften und kurzen Zeilengruppen aufbewahrt. Eine Tabelle, in der sich Datenzellen in beide Richtungen erstrecken, ist schwer zu lesen und schwieriger zu pflegen, da jede hinzugefügte Zeile Sie dazu zwingt, die Bereiche neu zu zählen. Wenn Sie feststellen, dass „\multirow“ in „\multicolumn“ verschachtelt ist, sollten Sie stattdessen eine Umstrukturierung der Tabelle in Betracht ziehen.