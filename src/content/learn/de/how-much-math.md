---

title: "Wie viel Mathematik braucht eine Arbeit?"
description: "Notation als Präzision, Symboldisziplin, wann man Gleichungen nummeriert und konsistent bleibt."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# Wie viel Mathematik braucht eine Arbeit?

Genau so viel, wie Ihre Ansprüche erfordern, und kein Symbol mehr. Mathematik in einer Arbeit ist kein Signal für fortgeschrittene Kenntnisse; es ist ein Präzisionswerkzeug. Die am besten geschriebenen Arbeiten verwenden Notation, bei der Prosa mehrdeutig wäre, und Prosa, bei der Notation Rauschen wäre.

## Notation ist Präzision, keine Dekoration

Schreiben Sie $f: \mathcal{X} \to \mathcal{Y}$, wenn der Leser die Domäne und die Kodomäne genau kennen muss. Schreiben Sie „Das Modell ordnet Bilder Beschriftungen zu“, wenn dies nicht der Fall ist. Ein Absatz, der schlichtes Englisch sein könnte, aber als Symbolsuppe wiedergegeben wird, sieht nicht streng aus, er wirkt ausweichend, und Rezensenten übersetzen ihn zurück, um zu überprüfen, ob tatsächlich etwas behauptet wird. Bevor Sie eine Aussage formalisieren, fragen Sie: Schließt die Symbolversion eine Fehlinterpretation aus, die die Prosaversion zulässt? Wenn nicht, behalten Sie die Prosa.

## Definieren Sie jedes Symbol einmal und definieren Sie es dann nie neu

Das Arbeitsgedächtnis des Lesers ist Ihre knappste Ressource. Die Disziplin:

- Führen Sie jedes Symbol bei der ersten Verwendung ein: „Sei $n$ die Anzahl der Proben.“
- Eine Bedeutung pro Symbol für das gesamte Papier. Wenn $\alpha$ in Abschnitt 3 eine Lernrate ist, kann es in Abschnitt 5 kein Signifikanzniveau sein.
- Bei notationsintensiven Arbeiten lohnt sich schon früh eine kleine Notationstabelle.

| Gewohnheit | Wirkung auf den Leser |
|---|---|
| Bei der ersten Verwendung definiertes Symbol | Muss nie rückwärts jagen |
| Ein Symbol, eine Bedeutung | Hinterfragt niemals den Kontext |
| Notationstabelle | Hat eine Karte für die gesamte Zeitung |

## Nummerieren Sie Gleichungen nur, wenn Sie darauf verweisen

Eine Gleichungsnummer ist ein Versprechen: „Wir werden darauf zurückweisen.“ Durch die Nummerierung von allem werden die Gleichungen, die wichtig sind, unter den Gleichungen vergraben, die keine Rolle spielen.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Referenzieren Sie es mit „\eqref{eq:loss}“. Für die Anzeige von Mathematik, die Sie nie zitieren, verwenden Sie „\[ ... \]“ oder die markierten Umgebungen und überspringen Sie die Zahl. Die Referenzierungsmaschinerie wird in [Querverweise](/learn/cross-references/) behandelt.

## Theoremumgebungen, in einem Atemzug

Wenn Ihre Arbeit Dinge beweist, verpacken Sie Behauptungen in „Theorem“-, „Lemma“- und „Beweis“-Umgebungen, anstatt „Theorem 1“ handschriftlich fett zu schreiben: Sie nummerieren sich selbst, weisen saubere Querverweise auf und geben genau an, was behauptet wird und was ein Kommentar ist. Einrichtung und Verwendung live in [Theoreme und Beweise](/learn/theorems-proofs/).

## Konsistenz ist die halbe Miete

Wählen Sie Konventionen aus und halten Sie sie während der gesamten Arbeit ein:

- Vektoren fett ($\mathbf{x}$) oder mit Pfeil versehen, niemals beides.
- Matrizen in Großbuchstaben fett, Skalare kursiv in Kleinbuchstaben.
- Sätze in Tafel oder kalligraphisch ($\mathbb{R}$, $\mathcal{D}$), konsistent.
- Gleiche Konvention in Abbildungen und Tabellen wie im Text.

Benutzerdefinierte Makros machen die Konsistenz kostengünstig: Definieren Sie „\newcommand{\vx}{\mathbf{x}}“ einmal und eine späte Notationsänderung ist eine einzeilige Bearbeitung statt einer papierweiten Suche.

## Auf den Veranstaltungsort kalibrieren

Ein Theorieveranstaltungsort erwartet formale Aussagen und vollständige Beweise. Ein angewandter Veranstaltungsort erwartet ein sauberes Problem-Setup und möglicherweise eine Verlustfunktion. Lesen Sie drei akzeptierte Beiträge von Ihrem Zielort und gleichen Sie deren Dichte ab. Beginnen Sie für die Funktionsweise des Schreibens mit dem [Mathe-Modus](/learn/math-mode/) und lassen Sie das [Mathe-Symbole-Spickzettel](/learn/math-symbols-cheatsheet/) in einem Tab geöffnet.