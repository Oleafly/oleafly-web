---

title: "Ein Papier, von oben nach unten"
description: "Ein Rundgang durch jeden Teil einer Forschungsarbeit und die Aufgabe, die jeder Teil erfüllt."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Ein Papier, von oben nach unten

Forschungsarbeiten wirken einschüchternd, bis Ihnen klar wird, dass sie jedes Mal aus demselben Dutzend Teilen und in ungefähr derselben Reihenfolge zusammengesetzt sind. Sobald Sie die Aufgabe der einzelnen Teile kennen, können Sie Arbeiten schneller lesen und schreiben, ohne auf eine leere Seite starren zu müssen. Hier ist die Tour.

## Die vordere Angelegenheit

| Teil | Es ist ein Job |
|---|---|
| Titel | Sorgen Sie dafür, dass der richtige Leser mit dem Scrollen aufhört. |
| Autoren | Sagen Sie, wer die Arbeit gemacht hat und wem Sie eine E-Mail senden möchten. |
| Abstrakt | Verkaufen Sie die gesamte Zeitung in 150–250 Wörtern. |
| Schlüsselwörter | Helfen Sie Suchmaschinen und Indexierern, Sie korrekt einzuordnen. |

Der Titel und die Zusammenfassung machen den größten Teil der Rekrutierung aus. Neunzig Prozent Ihrer potenziellen Leser werden nichts anderes sehen, weshalb [die Zusammenfassung eine eigene Lektion erhält](/learn/write-an-abstract/) und die [Titelseite ihre eigene LaTeX-Mechanik hat](/learn/title-page/).

## Der Körper

| Teil | Es ist ein Job |
|---|---|
| Einführung | Erklären Sie, warum das Problem wichtig ist und was Sie dazu beitragen. |
| Verwandte Arbeiten | Platzieren Sie Ihre Arbeit zwischen allem, was vorher war. |
| Methode | Beschreiben Sie genau genug, was Sie getan haben, um es reproduzieren zu können. |
| Experimente / Ergebnisse | Beweisen Sie, dass die Methode funktioniert. |
| Diskussion | Interpretieren Sie die Beweise ehrlich, auch dort, wo sie schwach sind. |
| Fazit | Wiederholen Sie das Fazit und weisen Sie darauf hin, was als nächstes kommt. |

Der Körper ist ein Argument, das in Etappen erzählt wird: Hier ist ein Problem, hier ist unsere Idee, hier ist der Beweis, dass es funktioniert, hier ist, was es bedeutet. Wenn ein Abschnitt dieses Argument nicht vorrückt, wird es aufgefüllt. Weitere Informationen hierzu finden Sie unter [Einführung und verwandte Arbeiten](/learn/introduction-and-lated-work/) und in den [Maschinenraumabschnitten](/learn/methods-results-discussion/).

## Die Hintergrundsache

| Teil | Es ist ein Job |
|---|---|
| Danksagungen | Danken Sie Geldgebern, Helfern und Gutachtern von Entwürfen. |
| Referenzen | Listen Sie jede von Ihnen zitierte Quelle auf, formatiert nach den Regeln des Veranstaltungsortes. |
| Anhang | Halten Sie Beweise, zusätzliche Tabellen und Details bereit, die den Fluss unterbrechen würden. |
| Ergänzendes Material | Tragen Sie Code, Daten und Videos bei sich, die nicht in ein PDF passen. |

Referenzen sind keine Dekoration, sondern die Beweismittel, auf denen Ihre Ansprüche stehen. Siehe [Fußnoten, Referenzen und Anhänge](/learn/footnotes-references-appendix/), um zu erfahren, wer was liest, und [Zitate](/learn/add-citations/) für die LaTeX-Mechanik.

## Das Skelett in LaTeX

Das meiste davon ist direkt auf Befehle zurückzuführen, die Sie bereits kennen:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Abschnittsbefehle übernehmen die Nummerierung und das Inhaltsverzeichnis für Sie, wie unter [Abschnitte und Struktur](/learn/sections/) beschrieben.

## Wohin als nächstes?

Wenn Sie mit dem Genre der Veröffentlichungen noch nicht vertraut sind, beginnen Sie mit [was eine wissenschaftliche Arbeit eigentlich ist] (/learn/what-is-a-research-paper/). Wenn Sie dabei sind, einen zu schreiben, geht der Rest dieses Tracks die einzelnen Teile der Reihe nach durch, von [Abstracts](/learn/write-an-abstract/) bis hin zu [wie viel Mathematik Sie tatsächlich benötigen](/learn/how-much-math/). Lesen Sie den Teil, an dem Sie hängen bleiben, schreiben Sie ihn und wiederholen Sie ihn.