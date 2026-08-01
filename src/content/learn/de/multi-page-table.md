---

title: "Tabellen, die länger als eine Seite sind"
description: "Lange Tabellenkopf- und -fußzeilen, die sich wiederholen."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tabellen, die länger als eine Seite sind

Eine gewöhnliche „Tabellen“-Umgebung ist eine Float-Umgebung, und eine Float-Umgebung muss auf eine einzelne Seite passen. Geben Sie ihm sechzig Zeilen und LaTeX schiebt es entweder auf eine Float-Seite und lässt es überlaufen oder verschiebt es für immer. Die Lösung ist das „longtable“-Paket, das eine Tabelle schreibt, die über mehrere Seiten verteilt ist und deren Kopfzeile auf jeder Seite wiederholt wird, so wie es bei einem Tabellenausdruck der Fall ist.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## So funktionieren die Header-Blöcke

Eine „Longtable“ beginnt mit bis zu vier Deklarationsblöcken vor den eigentlichen Datenzeilen. Alles über „\endfirsthead“ ist die Kopfzeile, die einmal ganz am Anfang der Tabelle gedruckt wird. Alles zwischen „\endfirsthead“ und „\endhead“ ist die Kopfzeile, die oben auf jeder nachfolgenden Seite wiederholt wird, weshalb die gleiche „Key & Value“-Zeile im Beispiel zweimal erscheint. Der Block, der mit „\endfoot“ endet, wird am Ende jeder Seite gedruckt, die die Tabelle berührt, hier nur ein abschließendes „\bottomrule“. Es gibt auch „\endlastfoot“ für Material, das nur unter den letzten Zeilen erscheinen soll, wie zum Beispiel eine Summenzeile. Wenn Sie einen Fortsetzungshinweis wünschen, ist ein gängiges Muster „\midrule \multicolumn{2}{r}{Fortsetzung auf der nächsten Seite} \\` im Fußblock und das eigentliche „\bottomrule“ im letzten Fußblock.

Nach den Deklarationen folgen die Datenzeilen, die genau wie in einer normalen „Tabelle“ geschrieben werden, mit „&“ zwischen den Zellen und „\\“ am Ende jeder Zeile. Die „Booktabs“-Regeln funktionieren unverändert. Was sie ersetzen, erfahren Sie in [Drei-Regel-Tabellen](/learn/booktabs-beautiful/).

## Kein Float, und was das bedeutet

Der wichtigste Verhaltensunterschied wird in einem Satz ausgedrückt: „longtable“ ist kein Float. Es beginnt genau dort, wo Sie es in der Quelle platzieren, bricht dort ab, wo die Seiten umbrechen, und akzeptiert kein „[htbp]“-Argument. Dadurch ändert sich auch die Funktionsweise von Untertiteln. Sie binden eine „Longtable“ nicht in eine „Table“-Umgebung ein. Fügen Sie stattdessen „\caption{...}\\“ in die Tabelle selbst ein, als erste Zeile des ersten Kopfblocks, und sie wird in der gleichen Reihenfolge wie Ihre anderen Tabellen nummeriert.

## Zwei Dinge, die Sie wissen sollten, bevor Sie sich darauf verlassen

Erstens werden die Spaltenbreiten global festgelegt, sodass LaTeX möglicherweise mehrere Kompilierungsdurchgänge benötigt, bevor die Spalten nicht mehr verschoben werden. Kompilieren Sie weiter, bis das Layout festgelegt ist. Zweitens kann „longtable“ nicht in einem zweispaltigen Layout verwendet werden, was dies für die meisten Konferenzvorlagen ausschließt. In diesen Dokumenten besteht die realistische Option darin, die Tabelle zu verkleinern, sie in Teile aufzuteilen oder sie in einen einspaltigen Anhang zu verschieben.