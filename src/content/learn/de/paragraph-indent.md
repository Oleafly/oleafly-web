---

title: "Einzug oder Leerzeichen zwischen Absätzen"
description: "parindent, parskip, noindent für eine einzelne Zeile."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Einzug oder Leerzeichen zwischen Absätzen

In der Typografie gibt es zwei Standardmethoden, um anzuzeigen, wo ein Absatz endet und der nächste beginnt: Die erste Zeile jedes neuen Absatzes einrücken oder den vertikalen Abstand zwischen den Absätzen ohne Einzug lassen. Bücher und Zeitschriften verwenden fast immer das erste. Webseiten und Geschäftsdokumente verwenden die zweite. LaTeX verwendet standardmäßig die Buchkonvention und rückt jeden Absatz außer dem ersten nach einer Abschnittsüberschrift ein, ohne zusätzlichen Abstand zwischen den Absätzen. Wenn Sie den anderen Stil wünschen, ändern Sie zwei Längen.

## Die zwei Längen, die alles kontrollieren

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

„\parindent“ ist die Breite des Einzugs der ersten Zeile. Wenn Sie es mit „\setlength“ auf „0pt“ setzen, werden Einrückungen überall entfernt. „\parskip“ ist der vertikale Abstand zwischen Absätzen, normalerweise Null (plus etwas Dehnung); Wenn Sie den Wert auf „0,8em“ einstellen, entsteht eine sichtbare Lücke, die etwas kleiner ist als eine vollständige Leerzeile. Die Einheit „em“ skaliert mit der Schriftgröße, wodurch der Abstand proportional bleibt, wenn Sie später die [Schriftgröße] (/learn/font-size/) ändern. Fügen Sie beide Zeilen in die Präambel ein und das gesamte Dokument folgt dem Blockstil.

Wenn Sie diesen Weg gehen, beachten Sie, dass eine bloße „\parskip“-Änderung auch den Raum um Abschnittsüberschriften, Listenelemente und das Inhaltsverzeichnis erweitert, da diese ebenfalls aus Absätzen erstellt werden. Für alles, was länger als eine kurze Notiz ist, wird durch das Laden des Pakets „parskip“ („\usepackage{parskip}“) derselbe Stil angewendet, während diese Nebenwirkungen für Sie behoben werden.

## Unterdrückung eines einzelnen Einzugs

Einzelner Absatz: Setzen Sie „\noindent“ ganz am Anfang, vor dem ersten Wort. Dadurch wird der Einzug nur für diesen einen Absatz unterdrückt und ist praktisch nach einer angezeigten Gleichung, einer Codeauflistung oder einer Tabelle, wenn der folgende Text eine Fortsetzung desselben Gedankens und kein neuer Absatz ist. Die umgekehrte Situation, bei der ein Einzug erzwungen wird, wenn LaTeX einen auslässt (z. B. der erste Absatz nach einer Überschrift), wird durch das kleine Paket „indentfirst“ und nicht durch eine manuelle Korrektur behandelt.

Wo wir gerade dabei sind: Ein neuer Absatz in LaTeX wird durch eine Leerzeile in der Quelle erstellt, nicht durch „\\“. Der Befehl „\\“ ist ein Zeilenumbruch innerhalb desselben Absatzes, und wenn er zur Fälschung des Absatzabstands verwendet wird, führt dies zu unzureichenden Warnungen und ungleichmäßigen Lücken. Die [Lektion zu Absätzen und Zeilenumbrüchen](/learn/paragraphs-newlines/) deckt diese Unterscheidung vollständig ab.

## Wählen Sie einen Stil aus und halten Sie ihn gedrückt

Wählen Sie den Einzugsstil **oder** Parskip und bleiben Sie konsistent. Bei den beiden Konventionen handelt es sich um Alternativen, nicht um Ebenen: Eingerückte Absätze mit großen Lücken dazwischen sehen aus wie ein Entwurf, und null Einzug ohne Leerzeichen lässt den Leser nicht erkennen, wo Absätze überhaupt beginnen. Wenn Sie für eine Zeitschrift oder Konferenz schreiben, ändern Sie die Länge nicht. Die Klassendatei implementiert bereits die Wahl des Herausgebers und Ihre Überschreibung wird das erste sein, was der Layout-Editor zurücksetzt.