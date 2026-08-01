---

title: "Abstracts, die den Klick verdienen"
description: "Eine Formel mit vier Sätzen für Abstracts, plus LaTeX und die zu vermeidenden Fehler."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Abstracts, die den Klick verdienen

Ihre Zusammenfassung ist der einzige Teil der Arbeit, den die meisten Leute jemals lesen werden. Rezensenten nutzen es, um zu entscheiden, wie mürrisch sie sein sollen, Suchmaschinen nutzen es, um Sie einzustufen, und vielbeschäftigte Forscher nutzen es, um zu entscheiden, ob es sich lohnt, das PDF zu öffnen. Seine Aufgabe ist einfach und brutal: Verkaufen Sie die gesamte Zeitung in 150–250 Wörtern.

## Die Vier-Satz-Formel

Sie können eine solide Zusammenfassung verfassen, indem Sie vier Fragen der Reihe nach beantworten. Jede Antwort besteht aus einem oder zwei Sätzen.

| Satz | Frage, die es beantwortet |
|---|---|
| Kontext | Um welchen Problembereich handelt es sich und warum ist das wichtig? |
| Lücke | Was fehlt oder ist bei aktuellen Ansätzen fehlerhaft? |
| Beitrag | Was haben Sie gebaut, bewiesen oder entdeckt? |
| Ergebnis | Wie lautet die Schlagzeile bzw. das Ergebnis? |

Zum Beispiel: „Das Training großer Modelle ist teuer. Bestehende Komprimierungsmethoden gehen zu viel Genauigkeit gegen Geschwindigkeit ein. Wir führen eine Pruning-Technik ein, die die Genauigkeit beibehält, indem sie auf redundante Aufmerksamkeitsköpfe abzielt. Bei drei Benchmarks werden die Inferenzkosten um 40 % gesenkt, bei einem Genauigkeitsverlust von weniger als 0,5 %.“ Vier Sätze, ganzes Papier.

Erweitern Sie jeden Schlag nach Bedarf, aber behalten Sie die Reihenfolge bei. Die Leser erwarten den Trichter: breit, schmal, unserer, Beweis.

## Zusammenfassung vs. Einführung

Die Leute verwechseln diese ständig. Die Zusammenfassung ist der Filmtrailer: Sie verfälscht absichtlich das Ende, weil Forscher das Ergebnis wissen wollen, bevor sie eine Stunde investieren. Die Einleitung ist der erste Akt: Sie baut die Argumentation langsam auf, zitiert die Literatur und verdient jede Behauptung. Schreiben Sie niemals eine Zusammenfassung, die neckt („Wir untersuchen, ob…“), wenn Sie das Ergebnis angeben könnten. Siehe [Einführungen und verwandte Arbeiten](/learn/introduction-and-verwandte-arbeit/) für den ersten Akt.

## Das LaTeX

Die „abstract“-Umgebung steht in den meisten Artikelklassen hinter „\maketitle“:

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Einige Journalklassen möchten die Zusammenfassung vor „\maketitle“ oder verwenden ihren eigenen Befehl, also überprüfen Sie die Vorlage. Mehr zum umgebenden Titelthema in [der Titelseiten-Lektion](/learn/title-page/).

## Häufige Fehler

- **Zitate in der Zusammenfassung.** Zusammenfassungen werden einzeln in Datenbanken und Indexierungsdiensten angezeigt, wobei „[12]“ auf nichts verweist. Benennen Sie die frühere Arbeit bei Bedarf in Worten und speichern Sie „\cite“ für den Text.
- **Vage Behauptungen.** „Verbessert die Leistung erheblich“ sagt dem Leser nichts. „Reduziert die Inferenzkosten um 40 %“ bringt den Klick. Geben Sie Ihre beste konkrete Zahl ein.
- **Schreiben Sie es zuerst.** Die Zusammenfassung fasst einen vorhandenen Artikel zusammen. Entwerfen Sie es frühzeitig, wenn es Ihnen beim Nachdenken hilft, aber schreiben Sie es zuletzt neu, wenn Sie wissen, was Sie tatsächlich gezeigt haben.
- **Sprengung des Wortbudgets.** Veranstaltungsorte setzen Beschränkungen voraus, oft 150–250 Wörter. Jeder Satz, der kein Kontext, keine Lücke, kein Beitrag oder kein Ergebnis ist, kann gelöscht werden.

## Ein kurzer Selbsttest

Decken Sie alles außer Ihrem Abstract ab und geben Sie es einem Kollegen. Wenn sie Ihnen sagen können, was Sie getan haben und warum es wichtig ist, funktioniert es. Wenn sie sagen: „Klingt interessant, was haben Sie gefunden?“, fehlt Ihr Ergebnissatz oder ist vage. Korrigieren Sie diesen einen Satz und die Zusammenfassung passt normalerweise zusammen.