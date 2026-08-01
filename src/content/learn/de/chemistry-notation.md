---

title: "Chemische Formeln und Strukturen"
description: "mhchem-Reaktionen und eine Chemfig-Skizze."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Chemische Formeln und Strukturen

Die chemische Notation bekämpft die Standardeinstellungen von LaTeX. Im Mathematikmodus werden Elementsymbole kursiv dargestellt, als wären sie Variablen, und im Textmodus gibt es überhaupt keine Indizes. Zwei Pakete teilen die Arbeit auf. „mhchem“ gibt Formeln und Reaktionen aus der einfachen Notation des Chemikers ein und „chemfig“ zeichnet Strukturdiagramme.

## Formeln und Reaktionen mit mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

Die Option „version=4“ wählt die aktuelle Syntax aus. Alles Chemische kommt in „\ce{...}“, das seinen Inhalt so liest, wie ein Chemiker ihn schreibt. In „\ce{H2O}“ wird die 2 automatisch zu einem Index und die Elementsymbole bleiben aufrecht, wie es die Konvention erfordert. In der Reaktion erhält das „+“ den richtigen Abstand, „->“ wird zu einem Reaktionspfeil und die 2 vor CO wird als stöchiometrischer Koeffizient erkannt, sodass sie auf der Grundlinie in voller Größe bleibt.

Die gleiche Notation wird vergrößert. Ladungen werden hochgestellt, sodass „\ce{SO4^2-}“ Sulfat mit seiner 2-Ladung ergibt. Materiezustände werden in Klammern angehängt, wie in „\ce{H2O(l)}“; Gleichgewichtspfeile werden mit „<=>“ geschrieben; und „\ce{^{14}C}“ platziert eine Isotopenzahl vor dem Symbol. „\ce“ funktioniert sowohl im Text- als auch im Mathematikmodus, sodass eine Formel ohne zusätzliche Trennzeichen in einem Satz stehen kann.

## Strukturen mit Chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` zeichnet Strukturen aus einem kompakten linearen Code. Atome werden als ihre Symbole geschrieben und „-“ stellt eine Bindung zum nächsten Atom her. Eine in Klammern gesetzte Zahl gibt die Richtung der Bindung in Schritten von 45 Grad gegen den Uhrzeigersinn von Osten aus an: „[2]“ zeigt gerade nach oben und „[6]“ gerade nach unten. Klammern öffnen Zweige vom aktuellen Atom, sodass „C(-[2]H)(-[6]H)“ um ein Wasserstoffatom nach oben und eines nach unten wächst, während die Hauptkette nach rechts weiterläuft. Das Beispiel ist flach gezeichnetes Methan: ein zentraler Kohlenstoff, der an vier Wasserstoffatome gebunden ist. Doppel- und Dreifachbindungen werden mit „=“ und „~“ geschrieben, und für zyklische und aromatische Strukturen gibt es eine eigene Ringsyntax.

## Praktische Hinweise

Halten Sie die beiden Werkzeuge in ihren Spuren. Verwenden Sie „mhchem“ für alles, was von links nach rechts als Formel oder Gleichung gelesen werden kann, und „chemfig“, wenn die Geometrie des Moleküls der Punkt ist. Beide kompilieren mit einer Standard-LaTeX-Engine und ohne externes Zeichenprogramm.

Der übliche Anfängerfehler besteht darin, Formeln im bloßen Mathematikmodus zu schreiben. „$H_2O$“ kompiliert, aber es setzt das H und das O kursiv wie Variablen, was konventionell falsch ist. „\ce{H2O}“ erzeugt die aufrechte Form mit weniger Tipparbeit. Beide Pakete können im [Live-Spielplatz](/live/) ausprobiert werden.