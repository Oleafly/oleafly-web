---

title: "Operatoren, die Sie einmal erfinden"
description: "DeclareMathOperator für argmin, argmax und ähnliche Namen."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operatoren, die Sie einmal erfinden

LaTeX wird mit benannten Operatoren wie „\sin“, „\log“ und „\max“ ausgeliefert, die in aufrechter Schrift mit korrektem Abstand um sie herum gedruckt werden. Es wird nicht mit „\argmin“ oder „\argmax“ ausgeliefert, auch wenn sie in Optimierungspapieren ständig verwendet werden. Wenn Sie „argmin“ im Mathematikmodus als einfache Buchstaben eingeben, behandelt LaTeX dies als Produkt von sechs Variablen: Die Buchstaben werden kursiv, zusammengedrückt und ohne Operatorabstand ausgegeben. Geben Sie den Operator selbst einmal in der Präambel an.

## Deklaration des Operators

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Hier ist, was jedes Stück bewirkt. „\DeclareMathOperator“ kommt von „amsmath“ und erstellt einen neuen Befehl, dessen Argument als Operatortext gesetzt wird: aufrechte lateinische Buchstaben, wobei die Abstandsregeln, die LaTeX bereits für „\max“ und „\lim“ anwendet, gelten. Das erste Argument ist der Befehlsname, den Sie eingeben, das zweite ist der Text, der tatsächlich gedruckt wird. Das „\,“ in „arg\,min“ fügt einen dünnen Leerraum zwischen den beiden Wörtern ein, was sich besser liest, als sie zusammenzuführen.

Der Stern nach „\DeclareMathOperator“ ist wichtig. Eine mit einem Sternchen versehene Deklaration bewirkt, dass sich der Operator wie „\lim“ verhält: In der Anzeigemathematik wird alles, was Sie mit „_“ anhängen, direkt unter dem Operator platziert, anstatt rechts unten nachgestellt zu werden. Das ist genau das, was Sie für „\argmin_\theta“ wollen, wobei die Variable, über die optimiert wird, unten erscheinen sollte. Ohne den Stern bleibt der Index an der Seite, was bei Operatoren wie „\log_2“ üblich ist. In der Inline-Mathematik bleibt der Index in beiden Richtungen an der Seite, um eine Dehnung der Zeilenhöhe zu vermeiden.

## Wiederverwendung des Musters

Die gleiche Technik deckt jeden Operator ab, den Ihr Fachgebiet verwendet und den LaTeX nicht kennt. Einige häufige:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Beachten Sie, dass „\tr“, „\rank“ und „\diag“ nicht markiert sind, da ihre Indizes, sofern vorhanden, an die Seite gehören. Nur Operatoren im Limit-Stil wie „\esssup“ erhalten den Stern.

Operatoren in der Präambel zu deklarieren, anstatt „\mathrm{argmin}“ inline zu schreiben, zahlt sich doppelt aus. Die Notation bleibt im gesamten Dokument konsistent, und wenn ein Tagebuch eine andere Darstellung erfordert, ändern Sie eine Zeile, anstatt jede Gleichung durchzugehen. Probieren Sie die Deklaration und die Anzeigezeile zusammen im [Live-Spielplatz](/live/) aus, um zu sehen, wie sich die markierte tiefgestellte Platzierung verhält.

Ein häufiger Fehler: Einen Operator zu deklarieren, dessen Name mit einem vorhandenen Befehl kollidiert, wie zum Beispiel „\max“ oder „\deg“. LaTeX stoppt mit der Fehlermeldung „bereits definiert“. Wählen Sie einen neuen Namen oder verwenden Sie „\renewcommand“ nur, wenn Sie wirklich beabsichtigen, das Original zu ersetzen.