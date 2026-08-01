---

title: "Charaktere, die die Quelle zerstören"
description: "So geben Sie Prozent, Dollar, kaufmännisches Und, Unterstrich und geschweifte Klammern ein, ohne die Zeile zu unterbrechen."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Zeichen, die die Quelle zerstören

LaTeX reserviert eine Handvoll alltäglicher Zeichen als Syntax, und wenn Sie eines eingeben, bei dem Sie das wörtliche Zeichen meinen, wird entweder die Kompilierung gestoppt oder die Ausgabe stillschweigend entstellt. Für jedes reservierte Zeichen gibt es ein Escapezeichen, und der gesamte Satz passt in eine kleine Tabelle.

| Char | Code |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## Was die Charaktere unentdeckt tun

„%“ beginnt einen Kommentar, daher wird alles von ihm bis zum Ende der Zeile verworfen. Das ist der übliche „Mein Satz ist verschwunden“-Fehler: Schreiben Sie 50 % in einen Bericht und der Rest der Zeile verschwindet ohne jegliche Fehlermeldung. „$“ schaltet den Mathematikmodus um, sodass ein verirrter Wert den Text stillschweigend kursiv schreibt oder Fehler auslöst, die weit vom Tippfehler entfernt sind. „&“ ist die Ausrichtungsregisterkarte in Tabellen und „Align“-Blöcken; Außerhalb davon schlägt es mit „Falsch platzierte Ausrichtungsregisterkarte“ fehl. „#“ markiert Makroparameter. „_“ und „^“ gehören zum Mathematikmodus und rufen im Text „Fehlendes $ eingefügt“ hervor, was [eine eigene Lektion hat](/learn/missing-dollar/). „~“ ist ein geschütztes Leerzeichen, daher wird eine in eine URL oder einen Pfad eingegebene Tilde stillschweigend zu einem Leerzeichen. „\“ startet jeden Befehl, weshalb es sich nicht selbst entkommen kann: „\\“ ist ein Zeilenumbruch und das Literalzeichen benötigt „\textbackslash“.

## Flucht in der Praxis

Für die ersten sechs Zeichen ist das Escape ein Backslash-Präfix und funktioniert in anderen Befehlen genauso:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Beachten Sie, dass der Unterstrich auch innerhalb von „\texttt“ sein Escape-Zeichen benötigt. Den beiden Escape-Befehlen im Befehlsstil, „\textasciitilde“ und „\textbackslash“, sollte beim nächsten Buchstaben ein „{}“ oder ein Leerzeichen folgen, damit der Befehlsname das folgende Wort nicht verschluckt.

Überspringen Sie bei ganzen Codeabschnitten, Pfaden oder URLs das Escape-Zeichen vollständig. „\verb|...|“ und die „verbatim“-Umgebung geben ihre Inhalte genau so aus, wie sie eingegeben wurden, wobei jedes Sonderzeichen deaktiviert ist, und „\url{...}“ des „url“-Pakets verarbeitet Links komplett mit Tilden.

Die Charaktere, die am härtesten beißen, sind diejenigen, die stillschweigend versagen, und „%“ führt diese Liste an. Eingefügter Text ist der übliche Schuldige: URLs, Shell-Befehle und Finanzzahlen enthalten alle reservierte Zeichen. Wenn ein Satz im PDF fehlt, durchsuchen Sie diese Zeile der Quelle vor allem nach einem bloßen „%“.