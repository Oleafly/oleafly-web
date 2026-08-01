---

title: "Methode, Ergebnisse, Diskussion: der Maschinenraum"
description: "Reproduzierbarkeit, Ergebnisse, die Fragen beantworten, Ablationen und ehrliche Einschränkungen."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Methode, Ergebnisse, Diskussion: der Maschinenraum

In der Mitte einer Arbeit steckt die eigentliche Wissenschaft. Hier richtet auch vage Formulierung den größten Schaden an, da diese Abschnitte nach Präzision bewertet werden. Hier ist, was jeder dem Leser schuldet.

## Methode: Reproduzierbarkeit ist die Messlatte

Der Test für einen Methodenteil ist eindeutig: Könnte ein kompetenter Peer Ihre Arbeit anhand des Textes und Ihres ergänzenden Materials reproduzieren? Das bedeutet konkrete Details, keine Stimmung. Geben Sie die genauen Einstellungen, Datenaufteilungen, Vorverarbeitungsschritte und Hyperparameter an oder geben Sie genau an, wo sie sich befinden („vollständige Einstellungen in Anhang B“).

Eine nützliche Disziplin: Führen Sie beim Schreiben eine laufende Liste aller Entscheidungen, die Sie getroffen haben. Jedes steht entweder im Methodenabschnitt, im Anhang oder im veröffentlichten Code. Wenn es nirgendwohin führt, wird ein Rezensent es finden.

## Ergebnisse: Beantworten Sie die von Ihnen gestellten Fragen

Starke Experimentabschnitte beginnen mit der Angabe der Fragen, die die Experimente beantworten, oft wörtlich: „Wir fragen: (1) Bewahrt das Beschneiden die Genauigkeit? (2) Woher kommt die Beschleunigung?“ Dann beantwortet jeder Unterabschnitt eine Frage. Ergebnisse, die eine gestellte Frage nicht beantworten, sind trivial, und Gutachter bemerken die Diskrepanz zwischen Behauptungen und Beweisen schneller als alles andere.

## Tabellen vs. Plots

| Verwenden Sie eine Tabelle, wenn | Verwenden Sie ein Diagramm, wenn |
|---|---|
| Genaue Werte zählen | Der Trend zählt |
| Vergleich von Methoden anhand fester Benchmarks | Verhalten über eine Sweep-Variable hinweg anzeigen |
| Wenige Zahlen, hohe Präzision | Viele Zahlen, eine Form |

Die klassische Regel: Tabellen zum Nachschlagen, Diagramme zum Vergleich der Form. Mehr darüber, wie man beides lesbar macht, finden Sie in [Abbildungen, Tabellen und Vergleiche](/learn/figures-tables-comparisons/), mit LaTeX-Mechaniken in [Tabellen](/learn/create-table/) und [Untertitel und Beschriftungen](/learn/captions-labels/).

## Ablationen, in einem Absatz

Bei einer Ablation wird jeweils eine Komponente Ihrer Methode entfernt, um zu zeigen, dass sie ihren Platz verdient. Wenn Ihre Methode aus drei Teilen besteht und das Gesamtsystem jede zweiteilige Variante übertrifft, ist jeder Teil gerechtfertigt. Gutachter in empirischen Bereichen behandeln Ablationen als Grundvoraussetzungen: Ein Methodenabschnitt, der fünf Komponenten vorstellt und sie nie einzeln testet, gilt als nicht unterstützt. Normalerweise reicht ein kompakter Tisch aus.

## Diskussion vs. Fazit

Diese verschmelzen so oft, dass die Leute vergessen, dass sie unterschiedlich sind. Die Diskussion interpretiert: Was bedeuten die Ergebnisse, wo waren sie überraschend, was zeigen sie nicht? Das Fazit fasst zusammen: Woran sollte sich der Leser erinnern und was kommt als nächstes? Eine Diskussion fügt neues Denken hinzu. Eine Schlussfolgerung fügt absichtlich nichts Neues hinzu. Wenn Ihre Schlussfolgerung eine Behauptung enthält, die nirgendwo anders vorkommt, verschieben Sie sie.

## Einschränkungen: jetzt Standard, tatsächlich nützlich

Die Abschnitte zu expliziten Einschränkungen wurden an vielen Veranstaltungsorten von „optional“ zu „erwartet“ verschoben, und einige erfordern sie. Betrachten Sie Ihre Meinung als ein Mittel zur Glaubwürdigkeit, nicht als ein Geständnis. Geben Sie die tatsächlichen Grenzen an: Datensätze, die Sie nicht getestet haben, Annahmen, die Sie für den Nachweis benötigen, Rechenkosten, Fehlerfälle, die Sie beobachtet haben. Rezensenten würden diese sowieso finden. Wenn Sie sie zuerst benennen, verwandeln Sie Schwächen in Beweise dafür, dass Sie Ihre eigene Arbeit verstehen, und das ist weitaus besser, als wenn ein Rezensent in einer öffentlichen Rezension schreibt: „Die Autoren erkennen das nicht an.“

## Ein struktureller Tipp

Schreiben Sie zuerst den Ergebnisabschnitt anhand Ihrer tatsächlichen Zahlen. Schreiben Sie dann den Methodenabschnitt, um genau zu erklären, was zu diesen Zahlen geführt hat, und die Diskussion, um sie zu interpretieren. Wenn Sie in Lesereihenfolge schreiben, werden Sie dazu verleitet, die Methode zu beschreiben, die Sie ausführen wollten, und nicht die, die Sie ausgeführt haben.