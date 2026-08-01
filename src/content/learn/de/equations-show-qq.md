---

title: "Fragezeichen statt Zahlen"
description: "Etiketten benötigen einen weiteren Durchgang; Beschriftungsplatzierung nach Bildunterschriften."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Fragezeichen statt Zahlen

Sie kompilieren, und an der Stelle, an der eine Zahl oder Gleichungsnummer stehen sollte, wird im PDF „??“ angezeigt. Das ist kein Fehler in Ihrer Quelle. Auf diese Weise rendert LaTeX eine Referenz, die es noch nicht auflösen kann, und die Korrektur erfolgt normalerweise nur durch erneutes Kompilieren.

## Warum ein Durchgang nicht ausreicht

LaTeX liest Ihr Dokument in einem einzigen Durchgang von oben nach unten. Wenn es auf ein „\label“ trifft, schreibt es die aktuelle Nummer in die „.aux“-Datei; Wenn es auf ein „\ref“ trifft, sucht es die Nummer in der „.aux“-Datei, die beim vorherigen Lauf geschrieben wurde. Bei einer Neukompilierung gibt es keine vorherige Ausführung, daher wird jede Referenz als „??“ ausgegeben. Der zweite Durchgang liest die fertige „.aux“-Datei und trägt die Zahlen ein. Der mitgelieferte Compiler von Oleafly führt die Durchgänge automatisch erneut aus, bis sich die Zahlen stabilisieren. Wenn Sie „pdflatex“ jedoch manuell steuern, ist die zweite Kompilierung Ihre Aufgabe.

## Wann ?? überlebt einen zweiten Durchgang

Wenn die Fragezeichen weiterhin bestehen, führen Sie drei Prüfungen durch. Vergleichen Sie zunächst die Schreibweise in „\ref“ Zeichen für Zeichen mit „\label“. Bei Beschriftungen wird die Groß-/Kleinschreibung beachtet und ein Leerzeichen zählt. Überprüfen Sie zweitens, wo sich das Etikett befindet. „\label“ zeichnet den Wert des zuletzt gestuften Zählers auf, und in einem Float ist es „\caption“, der den Zähler schreitet, daher muss die Beschriftung nach der Beschriftung stehen:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Eine vor der Überschrift platzierte Beschriftung lässt sich problemlos kompilieren, wählt aber den falschen Zähler aus, normalerweise den aktuellen Abschnitt, sodass die Referenz eine plausible, aber falsche Zahl anstelle von „??“ ausgibt. Diese Variante ist schlimmer, weil sie leicht zu übersehen ist. Drittens: Wenn die „.aux“-Datei mitten im Lauf gelöscht wurde oder eine Kompilierung unterbrochen wurde, sind die aufgezeichneten Beschriftungen möglicherweise unvollständig; Neukompilierung aus einem sauberen Zustand.

## Die Warnungen lesen

Das Protokoll sagt Ihnen, in welchem ​​Fall Sie sich befinden. „Es gab undefinierte Referenzen“ bedeutet, dass mindestens ein „\ref“ nichts gefunden hat. „Beschriftung(en) haben sich möglicherweise geändert. Wiederholen, um Querverweise richtig zu machen“ bedeutet, dass das Problem durch einen weiteren Durchgang behoben wird. „Label multiply definiert“ bedeutet, dass zwei „\label“-Befehle einen Namen teilen und LaTeX stillschweigend einen davon verwendet, also umbenennen, bis jedes Label eindeutig ist. Eine Namenskonvention mit den Präfixen „eq:“, „fig:“ und „tab:“ macht Kollisionen seltener und erleichtert die Suche nach der Quelle. Der Etiketten-Workflow selbst wird in [Zahlen und Zeiger für Gleichungen](/learn/number-equations/) behandelt.