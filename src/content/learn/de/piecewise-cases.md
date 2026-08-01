---

title: "Stückweise Definitionen"
description: "Die Cases-Umgebung für Bedingungen unter einer einzelnen Funktion."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Stückweise Definitionen

Eine stückweise Funktion liefert unterschiedliche Formeln für verschiedene Teile ihrer Domäne: den absoluten Wert, die ReLU-Aktivierung, einen Steuerklassenplan. Die Satzkonvention ist eine einzelne hohe linke geschweifte Klammer mit einer Zeile pro Fall, wobei jede Zeile die Formel und die Bedingung anzeigt, unter der sie gilt. Das Paket „amsmath“ stellt die Umgebung „cases“ bereit, die genau dieses Layout ohne manuelle Größenanpassung der Klammern erzeugt.

## Die Cases-Umgebung

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Lesen Sie dies Zeile für Zeile: Das Ganze befindet sich in „\[ ... \]“, es handelt sich also um eine Anzeigemathematik in einer eigenen Zeile. „f(x) =“ ist gewöhnliche Mathematik, und dann öffnet „\begin{cases}“ den stückweisen Block. Innerhalb jeder Zeile befinden sich zwei durch „&“ getrennte Spalten: links die Formel, rechts die Bedingung. Zeilen enden mit „\\“, mit der Ausnahme, dass die letzte Zeile keins benötigt. Beim Kompilieren zeichnet LaTeX eine linke geschweifte Klammer, die hoch genug ist, um beide Zeilen zu umfassen, und richtet die Formeln in einer Spalte und die Bedingungen in einer anderen aus.

Das „&“ leistet hier echte Arbeit. Ohne sie wäre jede Zeile ein einzelner Blob und die Bedingungen würden nicht vertikal ausgerichtet sein. Damit teilen sich „x^2“ und „-x“ eine linke Kante, und „x \ge 0“ und „x < 0“ teilen sich ihre eigene linke Kante, was die Definition durchsuchbar macht.

Damit dies kompiliert werden kann, müssen zwei Dinge vorhanden sein. Erstens „\usepackage{amsmath}“ in der Präambel, da „cases“ nicht Teil des LaTeX-Kerns ist. Zweitens muss sich die Umgebung im Mathematikmodus befinden. „cases“ erstellt Mathe-Inhalte, öffnet den Mathe-Modus jedoch nicht selbst. Wenn eines davon fehlt, erhalten Sie die Fehlermeldung „Umgebungsfälle undefiniert“ oder „Fehlendes $ eingefügt“. Letzteres wird in [Fehlender Dollar eingefügt](/learn/missing-dollar/) erklärt.

## Wörter hinzufügen

Die meisten veröffentlichten stückweisen Definitionen enthalten das Wort „wenn“ und oft ein abschließendes „sonst“. Da es sich bei der Bedingungsspalte um den Mathematikmodus handelt, benötigen einfache Wörter „\text{...}“, um in der Dokumentschriftart mit dem richtigen Abstand angezeigt zu werden:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Beachten Sie das Leerzeichen in „\text{if }“. Der Mathematikmodus ignoriert von Ihnen eingegebene Leerzeichen, aber Leerzeichen innerhalb von „\text“ sind real. Wenn Sie also eins vor die schließende Klammer setzen, wird „if“ von der folgenden Bedingung getrennt.

## Varianten und ein häufiger Fehler

Wenn die Formeln große Brüche sind und eng aussehen, bietet das „mathtools“-Paket „dcases“, einen Drop-in-Ersatz, der jede Formel im Anzeigestil festlegt. Es gibt auch „Rcases“ für die spiegelbildliche Situation, bei der die Zahnspange rechts hingehört.

Der häufigste Fehler ist das Vergessen von „\\“ zwischen Zeilen, wodurch zwei Fälle stillschweigend in einer langen Zeile zusammengeführt werden. Wenn in Ihrer kompilierten Ausgabe Bedingungen angezeigt werden, die in Formeln ausgeführt werden, zählen Sie zuerst Ihre Zeilenumbrüche. Auf dem [Spielplatz](/live/) können Sie live mit der Umgebung experimentieren.