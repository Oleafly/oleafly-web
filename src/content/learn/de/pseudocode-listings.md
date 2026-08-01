---

title: "Algorithmen und Quellenverzeichnisse"
description: "algorithm2e-Skizze und Auflistungen für echten Code."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algorithmen und Quellenverzeichnisse

In den Aufsätzen wird Code in zwei unterschiedlichen Formen präsentiert, und LaTeX verfügt für jede über ein eigenes Tool. Pseudocode ist eine idealisierte Skizze eines Algorithmus, gesetzt mit Schlüsselwörtern und Mathematik, und das Paket „algorithm2e“ verarbeitet ihn. Quellauflistungen sind echter Code, der wörtlich in einer Monospace-Schriftart wiedergegeben wird, und das Paket „listings“ verarbeitet diese. Die Wahl des falschen Werkzeugs ist die übliche Ursache für Reibungsverluste, daher ist es hilfreich, beides zu erkennen.

## Pseudocode mit algorithm2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Die Paketoptionen legen den visuellen Stil fest: „ruled“ zeichnet horizontale Linien über und unter dem Algorithmus und platziert die Beschriftung oben, wie es die meisten Veranstaltungsorte erwarten, während „vlined“ eine kleine vertikale Linie zeichnet, die die Ausdehnung jedes Blocks markiert, sodass die Verschachtelung ohne starke Einrückung lesbar bleibt. Die „algorithm“-Umgebung ist eine Gleitkommazahl, wie eine Zahl, daher trägt sie die „\caption“, die ihr eine Nummer gibt, die „\ref“ zitieren kann.

Darin setzt „\While{condition}{body}“ die Schleife mit einem fett gedruckten Schlüsselwort, der Bedingung und dem Textkörper als eingerückten Block. „\For“, „\If“ und „\Return“ folgen demselben Muster. Anweisungen enden mit „\;“, das das Abschlusszeichen der Zeile ausgibt und eine neue Zeile beginnt. Das zu vergessen ist der klassische Anfängerfehler: Die Zeilen laufen zusammen. Da es sich um gewöhnliches LaTeX handelt, funktioniert Mathematik wie „$\theta$“ inline, wozu Pseudocode dient: die Aktualisierungsregel in Notation und nicht in einer bestimmten Sprache zu beschreiben.

## Echter Code mit Auflistungen

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

Die „lstlisting“-Umgebung reproduziert ihren Inhalt exakt, behält Leerzeichen bei und behandelt Sonderzeichen wörtlich, sodass Sie Code einfügen können, ohne etwas zu maskieren. Die Option „Sprache=Python“ aktiviert die Schlüsselworthervorhebung für diese Sprache, und „listings“ kennt Dutzende anderer Sprachen. Standardmäßig ist die Ausgabe einfach. Die meisten Leute fügen in der Präambel einmalig „\lstset{basicstyle=\ttfamily\small, zahlen=left}“ hinzu, um eine monospaced Schriftart in sinnvoller Größe mit Zeilennummern zu erhalten. Um eine Datei direkt einzubinden, anstatt sie einzufügen, liest „\lstinputlisting[sprache=Python]{train.py}“ sie von der Festplatte, wodurch das Dokument mit der tatsächlichen Quelle synchronisiert bleibt. Wenn Sie eine farbige Hervorhebung mit hoher Wiedergabetreue wünschen, ist das „Minted“-Paket die stärkere Alternative, allerdings auf Kosten eines externen Tools und einer Shell-Escape-Funktion.

## Zwischen ihnen wählen

Verwenden Sie Pseudocode im Hauptteil der Arbeit, um die Idee zu kommunizieren, und reservieren Sie wörtliche Auflistungen für Artefakte, bei denen es auf den genauen Code ankommt, wie etwa Anhänge oder Werkzeugbeschreibungen. Ein häufiger Fehler besteht darin, ein „lstlisting“ ohne die Option „[fragile]“ in einen Beamer-Frame zu platzieren, was mit einem undurchsichtigen Fehler fehlschlägt; Die gleiche Vorsichtsmaßnahme erscheint in [einem ersten Beamer-Deck](/learn/beamer-basics/).