---

title: "Gleichungen, die nicht passen"
description: "Mehrzeilig und geteilt, wenn das Maß zu schmal ist."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Gleichungen, die nicht passen

Früher oder später erzeugt eine Ableitung eine Gleichung, die breiter ist als der Textblock, und LaTeX lässt sie bis zum Rand laufen, anstatt zu raten, wo sie gebrochen werden soll. In zwei „amsmath“-Umgebungen können Sie die Pause selbst platzieren: „multline“ für einen einzelnen langen Ausdruck und „split“ für eine Pause, die ausgerichtet bleiben soll.

## mehrzeilig

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

„Multiline“ eignet sich für eine lange Formel ohne natürlichen Ausrichtungspunkt. Sie wählen den Umbruch mit „\\“ und die Umgebung übernimmt das Layout: Die erste Zeile wird linksbündig gesetzt, die letzte rechtsbündig und alle Mittelzeilen werden zentriert. Der gesamte Ausdruck erhält eine Gleichungsnummer, die in der letzten Zeile platziert wird. Die Konvention besteht darin, vor einem binären Operator umzubrechen, sodass das „+“ die Fortsetzungszeile öffnet und der Leser auf einen Blick sieht, dass der Ausdruck fortgesetzt wird.

## Teilt

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

„split“ erzeugt ebenfalls eine einzelne Zahl, richtet ihre Linien jedoch wie „align“ aus, wobei „&“ den Ausrichtungspunkt markiert. Es handelt sich nicht um eine eigenständige Umgebung; Es befindet sich in „Equation“ oder einer anderen Anzeigeumgebung, die die Zahl liefert. Hier steht das „&“ vor dem Gleichheitszeichen in der ersten Zeile, und die Fortsetzung beginnt mit „&\quad“, einem leeren Ausrichtungspunkt, gefolgt von einem Leerquadrat, sodass die zweite Zeile direkt hinter dem Gleichheitszeichen eingerückt wird. Dieser Einzug zeigt dem Leser, dass es sich immer noch um die rechte Seite handelt und nicht um eine neue Gleichung.

## Zwischen ihnen wählen

Verwenden Sie „Mehrzeilen“, wenn die Gleichung eine lange Summe ohne Struktur ist, die es wert ist, ausgerichtet zu werden. Verwenden Sie „split“, wenn es ein Gleichheitszeichen gibt, unter dem die Fortsetzung hängen soll. Wenn Sie mehrere wirklich getrennte Gleichungen haben, ist keine davon richtig; Das ist eine Aufgabe für „Align“, die in [mehrzeilige Gleichungen, die aneinandergereiht werden] (/learn/align-equations/) behandelt wird.

Bevor Sie zu einem der beiden greifen, sollten Sie darüber nachdenken, die Mathematik neu zu formulieren. Durch Benennen eines Unterausdrucks im vorhergehenden Satz, Faktorisieren oder Aufteilen in zwei Gleichungen lässt sich die Breite oft unter Kontrolle bringen und auch die Lesbarkeit verbessern. Ziehen Sie das dem Schrumpfen des Typs vor. Ein zusammengedrücktes Display liest sich fast immer schlechter als ein sauberer Bruch.

Ein Fehler, den Sie kennen sollten: „Split“ allein, ohne eine einschließende „Gleichung“, stoppt mit einem „Package amsmath Error“. Wickeln Sie es zuerst ein und kompilieren Sie es dann. Mit beiden Umgebungen kann man im [Live-Spielplatz](/live/) schnell experimentieren.