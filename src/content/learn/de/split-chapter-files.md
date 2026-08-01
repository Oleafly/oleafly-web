---

title: "Eine Stammdatei, viele Kapitel"
description: "include vs input, includeonly und Kapitel für Kapitel entwerfen."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Eine Stammdatei, viele Kapitel

Irgendwann ab dem zweiten Kapitel wird es schwierig, eine These in einer einzelnen „.tex“-Datei zu bearbeiten: Scrollen ersetzt das Denken, und jede Kompilierung verarbeitet alles. Die Standardlösung ist eine Stammdatei, die die Klasse und die Präambel enthält, wobei sich jedes Kapitel in einer eigenen Datei befindet. Die Stammdatei fügt sie zusammen.

## Die Root-Datei

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

„main.tex“ ist die einzige Datei, die Sie jemals kompilieren. Jedes „\include“ benennt eine andere Datei ohne die Erweiterung „.tex“, verwendet auf jeder Plattform Schrägstriche und zieht deren Inhalt an dieser Stelle ein. Die Kapiteldateien selbst enthalten nur Inhalte, die normalerweise mit „\chapter{...}“ beginnen. Sie haben keine eigene „\documentclass“- und „document“-Umgebung, da es sich um Fragmente dieses Dokuments und nicht um Dokumente handelt.

## Einschließen versus Eingabe

Die beiden Einschlussbefehle verhalten sich unterschiedlich und die Unterschiede entscheiden darüber, welcher Befehl wo verwendet wird. „\include“ beginnt eine neue Seite vor dem Material, was zu Kapiteln passt, und schreibt für jede eingebundene Datei eine separate „.aux“-Datei, was eine selektive Kompilierung ermöglicht. „\input“ ist eine einfache Texteinfügung: kein Seitenumbruch, kein separates „.aux“ und es kann in einer anderen Eingabe verschachtelt werden. Das macht „\input“ zum richtigen Werkzeug für Fragmente, die kleiner als ein Kapitel sind, wie zum Beispiel eine große Tabelle, die in einer eigenen Datei oder einer gemeinsam genutzten [Makrodatei](/learn/custom-commands/) aufbewahrt wird. Eine strukturelle Regel, die Sie beachten sollten, ist, dass „\include“ nicht in einer eingebundenen Datei verschachtelt werden kann, während „\input“ überall verwendet werden kann.

## Kapitel für Kapitel entwerfen

```latex
\includeonly{chapters/methods}
```

In der Präambel platziert „\includeonly“ weist LaTeX an, nur die aufgelisteten Dateien zu verarbeiten, während weiterhin die gespeicherten „.aux“-Daten aller anderen gelesen werden. Die Kompilierung wird erheblich schneller, und da die Beschriftungen und Seitenzahlen der anderen Kapitel aus ihren „.aux“-Dateien wiedergegeben werden, bleiben Querverweise und Nummerierungen in dem Kapitel, das Sie entwerfen, korrekt. Diese zweite Hälfte ist der Grund, dies dem Auskommentieren von „\include“-Zeilen vorzuziehen, wodurch die anderen Kapitel vollständig vergessen werden und jedes „\ref“ in „??“ umgewandelt wird.

Kommentieren Sie die Zeile „\includeonly“ für vollständige Builds und führen Sie immer eine vollständige Kompilierung durch, bevor Sie eine PDF-Datei freigeben, da veraltete „.aux“-Daten hinter den in ausgeschlossenen Kapiteln vorgenommenen Änderungen zurückbleiben können. Welche Dateien im resultierenden Ordner Ihnen gehören und welche generiert werden, erfahren Sie unter [die Dateien in einem echten Projekt](/learn/latex-file-types/).