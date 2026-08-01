---

title: "Bildunterschriften, die der Nummer entsprechen"
description: "Platzieren Sie das Etikett nach der Überschrift, damit die Nummer haften bleibt."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Bildunterschriften, die der Nummer entsprechen

Querverweise gehören zu den Dingen, die LaTeX besser kann als ein Textverarbeitungsprogramm. Sie geben „Abbildung 3“ niemals von Hand ein. Stattdessen versehen Sie die Abbildung mit einer Beschriftung und lassen LaTeX die Nummer überall dort einfügen, wo sie erwähnt wird, sodass die Nummern korrekt bleiben, egal wie viel Sie neu anordnen, einfügen oder löschen. Der Mechanismus hat eine Regel, die fast jeden mindestens einmal zum Stolpern bringt: Die Reihenfolge von „\caption“ und „\label“ ist wichtig.

## Warum die Reihenfolge wichtig ist

Der Befehl „\caption“ erledigt zwei Aufgaben. Es druckt den Beschriftungstext unter Ihrer Abbildung oder Tabelle und schaltet den Zähler weiter, wodurch dieser Float in Abbildung 3 umgewandelt wird. Der Befehl „\label“ macht etwas Dümmeres, als die Leute erwarten: Er zeichnet die zuletzt zugewiesene Nummer auf, was auch immer das sein mag. Es hat keine Ahnung, dass es sich „in einer Figur“ befindet. Die Beschriftung muss also nach der Überschrift stehen:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Wenn Sie „\label“ vor „\caption“ setzen, hat die Beschriftung den Ziffernzähler noch nicht erhöht, sodass die Beschriftung die aktuellste Zahl von einer anderen Stelle, normalerweise dem aktuellen Abschnitt, erfasst. Ihr Text sagt dann „siehe Abbildung 2.4“, obwohl es sich bei der Abbildung tatsächlich um Abbildung 7 handelt. Dies ist das klassische Symptom: Verweise, die auf Abschnittsnummern statt auf Abbildungsnummern verweisen, bedeuten fast immer, dass die Beschriftung zu früh platziert wurde. Die sicherste Angewohnheit besteht darin, sowohl in Abbildungen als auch in Tabellen jedes Mal „\label“ in die Zeile direkt nach „\caption“ zu schreiben.

## Verweis auf das Etikett

Schreiben Sie in Ihrem Text die Referenz wie folgt:

```latex
Figure~\ref{fig:neat}
```

„\ref{fig:neat}“ erweitert sich auf die bloße Zahl, und Sie geben das Wort „Figure“ selbst ein. Das „~“ zwischen ihnen ist ein geschütztes Leerzeichen, das verhindert, dass LaTeX jemals eine Zeile nach „Figure“ beendet und die nächste mit „3“ beginnt. Präfixe wie „fig:“, „tab:“, „sec:“ und „eq:“ sind reine Konventionen, LaTeX interpretiert sie nicht, aber sie halten Ihre Beschriftungen lesbar und verhindern, dass eine Abbildung und eine Tabelle versehentlich einen Namen teilen.

Beachten Sie, dass „\pageref{fig:neat}“ die Seitenzahl angibt, auf der die Abbildung gelandet ist, was in langen Dokumenten nützlich ist, in denen ein Float weit von seiner Erwähnung abweichen kann. Eine vollständige Übersicht über die Referenzierungsbefehle finden Sie unter [jeder Befehl erklärt](/learn/every-command-explained/).

## Zweimal kompilieren und andere Fallstricke

Referenzen werden über Compiler-Läufe hinweg aufgelöst: Der erste Durchgang schreibt Beschriftungspositionen in die „.aux“-Datei und der zweite Durchgang liest sie zurück. Bis zu diesem zweiten Durchgang werden Verweise als fett gedruckte Fragezeichen angezeigt, sodass „??“ in Ihrem PDF normalerweise nur „erneut kompilieren“ bedeutet und nicht bedeutet, dass irgendetwas kaputt ist. Die meisten Editoren, darunter auch Oleafly, führen die Durchläufe automatisch für Sie durch. Wenn „??“ wiederholte Kompilierungen überlebt, ist die Bezeichnung nicht vorhanden. Wahrscheinliche Ursachen sind ein Tippfehler im Labelnamen oder eine „\caption“, die Sie gelöscht haben, während Sie „\label“ zurückgelassen haben.