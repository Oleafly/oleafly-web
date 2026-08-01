---

title: "Indizes, die nicht explodieren"
description: "Klammern für Mehrzeichenskripte, Primzahlen und Punkte."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indizes, die nicht explodieren

Tiefgestellte und hochgestellte Zeichen sind die erste mathematische Syntax, die jeder in LaTeX lernt, und auch die Quelle der ersten verwirrenden Ausgabe, die jeder produziert. Der Unterstrich „_“ verringert das Folgende, das Caret „^“ erhöht es und beide gelten für genau ein Zeichen, sofern Sie nichts anderes angeben. Diese Ein-Zeichen-Regel steckt hinter fast jedem verstümmelten Index, den Sie jemals sehen werden.

## Die Grundformen

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

„x_i“ fügt ein einzelnes „i“ an der tiefgestellten Position ein und „x^2“ löst eine einzelne „2“ aus. Da „_“ und „^“ nur das nächste Token erfassen, muss alles, was länger als ein Zeichen ist, in geschweifte Klammern eingeschlossen werden: „x_{ij}“ stellt beide Buchstaben tief und „x^{2n}“ erhöht das gesamte „2n“. Sie können sowohl einen tiefgestellten als auch einen hochgestellten Index in beliebiger Reihenfolge an dasselbe Symbol anhängen, und LaTeX stapelt sie korrekt: „x_i^2“. Auch Skripte können verschachtelt werden. In „x_{i_j}“ ist „j“ ein Index von „i“, das selbst ein Index von „x“ ist, und jede Ebene wird zunehmend kleiner eingestellt.

Mehrzeichenskripte **müssen** geschweifte Klammern verwenden: „x_ij“ ist „x_i“, dann „j“. LaTeX meldet dies nicht als Fehler, da „x_i“ gefolgt von einer Variablen „j“ vollkommen zulässige Mathematik ist. Die Formel lässt sich zusammenfassen, sieht auf den ersten Blick fast richtig aus und bedeutet etwas anderes. Machen Sie es sich frühzeitig zur Gewohnheit, eine Zahnspange zu tragen. Halten Sie sich im Zweifelsfall an das Skript.

Die gleiche Falle taucht in Grenzen und Grenzen auf. „\sum_i=1^n“ macht nicht das, wonach es aussieht. Die korrekte Form ist „\sum_{i=1}^{n}“, wobei das gesamte „i=1“ ein tiefgestellter Index in Klammern ist. Wenn Sie „_“ oder „^“ vollständig außerhalb des Mathematikmodus verwenden, erhalten Sie den klassischen Fehler, der in [Fehlender Dollar eingefügt](/learn/missing-dollar/) behandelt wird.

## Primzahlen und Punkte

```latex
f' f'' \dot{x} \ddot{x}
```

Bei Ableitungen benötigen Sie selten einen wörtlichen hochgestellten Index. Der Apostroph-Schlüssel erzeugt eine Primzahl: „f“ wird als f mit einer Primzahl, „f“ mit zwei Primzahlen dargestellt, und LaTeX übernimmt die Erhöhung und Abstände selbst, sodass „f^{\prime}“ nicht erforderlich ist. Für Zeitableitungen im physikalischen Stil platziert „\dot{x}“ einen einzelnen Punkt über dem x und „\ddot{x}“ zwei. Da es sich um Akzente handelt, setzen sie ihre Argumente in geschweifte Klammern.

Noch eine Feinheit: Wenn Sie nach einer Primzahl einen hochgestellten Index benötigen, verketten Sie diese einfach, wie in „f“^2“. LaTeX kombiniert sie zu einem einzigen hochgestellten Cluster.

## Überprüfen Sie Ihre Ausgabe

Der schnellste Weg, die Klammerregel zu verinnerlichen, besteht darin, „x_ij“ und „x_{ij}“ nebeneinander im [Live-Spielplatz] (/live/) einzugeben und zu beobachten, wie der Unterschied dargestellt wird. Immer wenn ein Index in einem kompilierten Dokument geringfügig falsch aussieht, ist das erste, was überprüft werden muss, ein fehlendes Klammerpaar.