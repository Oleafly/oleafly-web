---

title: "Laufende Köpfe und Füße"
description: "fancyhdr-Muster für Titel und Seitenzahl."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Laufende Köpfe und Füße

Ein laufender Kopf ist der Textstreifen oben auf jeder Seite, und der laufender Fuß ist das Gegenstück unten. In einem Buch oder einer Abschlussarbeit tragen sie meist den Kapiteltitel und die Seitenzahl. In einer eingereichten Arbeit können sie eine kurze Version des Titels, der Autoren oder gar nichts enthalten. Die in LaTeX integrierten Seitenstile („plain“, „empty“, „headings“) decken die Grundlagen ab, aber sobald Sie eine bestimmte Kombination wünschen, wie z. B. Ihren Titel links und die Seitenzahl rechts, greifen Sie zum Paket „fancyhdr“.

## Das Standardrezept

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Jede Zeile hier erledigt eine Aufgabe. „\usepackage{fancyhdr}“ lädt das Paket in Ihrer Präambel. `\pagestyle{fancy}` schaltet das gesamte Dokument auf den konfigurierbaren Stil von fancyhdr um. „\fancyhf{}“ löscht alle Kopf- und Fußzeilenfelder, was wichtig ist, da fancyhdr mit Standardeinstellungen (Seitenzahl und Abschnittsmarkierungen) ausgeliefert wird, die Sie fast nie mit Ihren eigenen vermischen möchten. Wenn man von vorne beginnt, bleiben Überraschungen fern.

Die nächsten beiden Zeilen füllen die Felder wieder aus. „\fancyhead[L]{Kurztitel}“ fügt wörtlichen Text in das linke Feld der Kopfzeile ein und „\fancyhead[R]{\thepage}“ fügt die aktuelle Seitenzahl in das rechte Feld ein. „\thepage“ ist ein Befehl, der auf die Seitenzahl erweitert wird, sodass er auf jeder Seite automatisch aktualisiert wird. Es gibt ein passendes „\fancyfoot[L/C/R]{...}“, wenn Sie die Dinge lieber unten platzieren möchten.

Schließlich steuert „\headrulewidth“ die dünne horizontale Linie unter der Kopfzeile. Wenn Sie den Wert auf „0,4pt“ einstellen, wird eine Haarlinie gezeichnet. Setzen Sie es auf „0pt“, um die Regel vollständig zu entfernen. Ein „\footrulewidth“ existiert ebenfalls und ist standardmäßig Null.

## Zweiseitige Dokumente

Wenn Ihre Dokumentklasse „twoside“ (die Standardeinstellung für „book“) verwendet, wechseln die Seiten zwischen geraden und ungeraden Seiten, und die Kopfzeilen spiegeln sich normalerweise gegenseitig. fancyhdr handhabt dies mit geraden/ungerade Selektoren: „\fancyhead[LE,RO]{\thepage}“ setzt die Seitenzahl links auf geraden Seiten und rechts auf ungeraden Seiten, wo der Daumen des Lesers sie findet. Sie können dies mit „\leftmark“ und „\rightmark“ kombinieren, die die aktuellen Kapitel- und Abschnittstitel enthalten, um das klassische Buchlayout zu reproduzieren.

## Kapitelseiten und der leere Look

Die Eröffnungsseiten von Kapiteln ignorieren Ihren ausgefallenen Stil, da „\chapter“ hinter den Kulissen „\thispagestyle{plain}“ aufruft. Das ist Absicht, und die meisten Designs behalten es auch bei. Wenn Sie diese Seiten leer haben möchten, fügen Sie „\fancypagestyle{plain}{\fancyhf{}}“ hinzu, um neu zu definieren, was „plain“ bedeutet.

Eine häufige Warnung ist zu erwarten: fancyhdr beschwert sich möglicherweise darüber, dass „\headheight“ zu klein ist. Der Fix ist genau das, was in der Meldung vorgeschlagen wird, zum Beispiel „\setlength{\headheight}{14pt}“ in der Präambel oder die Übergabe von „headheight=14pt“ an das [Geometriepaket](/learn/margins-geometry/), wenn Sie es bereits verwenden. Es handelt sich um eine Layout-Reservierung, nicht um einen Fehler, aber durch die Unterdrückung bleibt Ihr Protokoll sauber und Ihr Grundlinienraster ehrlich.