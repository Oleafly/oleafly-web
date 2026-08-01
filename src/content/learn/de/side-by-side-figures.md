---

title: "Zwei Paneele in einer Reihe"
description: "Miniseiten nebeneinander ohne Paketkrieg."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Zwei Paneele in einer Reihe

Manchmal möchten Sie zwei Bilder nebeneinander, jedes mit einer eigenen Bildunterschrift und einer eigenen Abbildungsnummer. Dafür benötigen Sie kein spezielles Paket. Einfache „Minipage“-Boxen innerhalb einer einzelnen „Figuren“-Umgebung erledigen den Job, und da sich beide Bilder in einem Float befinden, kann LaTeX sie niemals auf verschiedene Seiten aufteilen.

## Das Muster

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Eine „Minipage“ ist eine Box, die sich wie eine Miniaturseite verhält: Sie hat eine feste Breite, die Sie wählen, und ihr Inhalt wird innerhalb dieser Breite umbrochen und gestapelt. Hier benötigt jede Miniseite „0,48\textwidth“, also 48 Prozent der Textbreite. Dadurch bleiben absichtlich 4 Prozent unbeansprucht, und das „\hfill“ zwischen den beiden Feldern ist dehnbarer Raum, der sich ausdehnt, um ihn auszufüllen, wodurch ein Feld an den linken Rand und das andere an den rechten Rand verschoben wird. Wenn Sie beide Breiten auf „0,5\textwidth“ setzen, würden sie genau die Zeilenbreite ergeben, ohne Platz für irgendeine Trennung, und das zweite Kästchen würde auf die nächste Zeile fallen, was der häufigste Grund dafür ist, dass nebeneinander liegende Layouts auf mysteriöse Weise vertikal gestapelt werden.

Innerhalb jeder Miniseite skaliert „width=\linewidth“ das Bild auf die Breite des umgebenden Felds, nicht auf die gesamte Seite. Bei der Verwendung von „\textwidth“ kommt es jedoch häufig zu einem Fehler, der dazu führt, dass jedes Bild so breit wird wie der vollständige Textblock, was einen Überlauf garantiert.

Beachten Sie, wo sich die Überschriften befinden: auf jeder Miniseite. Dadurch erhält jedes Feld eine vollständige Beschriftung mit einer eigenen Nummer, sodass diese Abbildung beispielsweise Abbildung 3 und Abbildung 4 in einer Reihe ergibt. Die äußeren „[htbp]“-Platzierungsoptionen teilen LaTeX mit, dass es das Float hier, oben auf einer Seite, unten oder auf einer Float-Seite in dieser bevorzugten Reihenfolge platzieren kann.

## Spitzen ausrichten und Inhalte mischen

Wenn die beiden Bilder unterschiedliche Höhen haben, kann ihre vertikale Ausrichtung falsch aussehen, da Minipages standardmäßig in der Mitte ausgerichtet sind. Schreiben Sie stattdessen „\begin{minipage}[t]{0.48\textwidth}“, um sie oben auszurichten. Minipages kümmern sich auch nicht darum, was sie enthalten, daher platziert dasselbe Layout eine Abbildung neben einer Tabelle oder ein Bild neben einem Absatz mit erläuterndem Text, wofür Pakete im Subfigure-Stil nicht konzipiert sind.

## Wann sollten stattdessen Unterfiguren verwendet werden?

Das Einzige, was Ihnen dieses Muster nicht bieten kann, sind die mit (a) und (b) beschrifteten Felder unter einer einzigen gemeinsamen Überschrift und einer einzigen Ziffernnummer. Sobald Sie „Abbildung 5(a)“ anstelle von zwei unabhängigen Figuren möchten, wechseln Sie zu [subfigures](/learn/subfigures-abc/). Faustregel: Miniseiten sind für Figuren gedacht, die zufällig Nachbarn sind, während Unterfiguren für eine Figur gedacht sind, die zufällig Teile hat.