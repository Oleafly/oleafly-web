---

title: "Mehrzeilige Gleichungen, die in einer Reihe stehen"
description: "Ausrichten, Sammeln, Teilen, Mehrzeilig und Markieren."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Mehrzeilige Gleichungen, die in einer Reihe stehen

Eine Ableitung aus mehreren Schritten sieht am besten aus, wenn die Gleichheitszeichen in einer Spalte gestapelt sind, sodass das Auge verfolgen kann, was sich von Zeile zu Zeile geändert hat. Das „amsmath“-Paket stellt dafür die „align“-Umgebung sowie eine kleine Familie von Verwandten für Fälle bereit, in denen die Ausrichtung nicht das ist, was Sie wollen.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## So lautet die Ausrichtung

Jede Zeile ist eine Gleichung, die mit „\\“ endet; Die letzte Zeile braucht keine. Das „&“ markiert den Ausrichtungspunkt und das „&“ jeder Zeile landet in derselben Spalte. Das Platzieren von „&“ unmittelbar vor dem Gleichheitszeichen ist die Standardgewohnheit, sodass die Gleichheitszeichen gestapelt werden und die linken Seiten nach links hängen. Jede Zeile erhält eine eigene Gleichungsnummer; Schreiben Sie „align*“ in die Zahl „none“ oder fügen Sie „\notag“ zu einzelnen Zeilen hinzu, um nur diese zu überspringen, wie in [Zahlen und Zeiger für Gleichungen](/learn/number-equations/) gezeigt.

Die Umgebung öffnet die Anzeigemathematik selbst, daher darf sie nicht in „\[ ... \]“ oder „$ ... $“ stehen; Das Verschachteln in einer anderen mathematischen Umgebung führt zu verwirrenden Fehlern.

## Die Familie

| Env | Zweck |
| --- | --- |
| `ausrichten` | Mehrere Zeilen, ausgerichtet |
| `align*` | Gleiches, nicht nummeriertes |
| `versammeln` | Mehrere Zeilen, zentriert |
| „gespalten“ | Mehrzeilige Einzelgleichungsnummer |
| `mehrzeilig` | Lange Gleichung ohne Ausrichtung gebrochen |

„gather“ verarbeitet mehrere Gleichungen ohne gemeinsamen Ausrichtungspunkt; es zentriert jede Zeile und nummeriert jede einzelne. „split“ erstellt eine mehrzeilige Gleichung unter einer einzelnen Zahl und muss innerhalb von „equation“ stehen. „multiline“ bricht eine überlange Formel ohne Ausrichtung um, die erste Zeile wird linksbündig und die letzte Zeile wird rechtsbündig. Die letzten beiden werden ausführlich in [Gleichungen, die nicht passen](/learn/break-long-equations/) behandelt.

Zwei Fragen entscheiden darüber, welche verwendet werden soll: Handelt es sich bei den Linien um separate Gleichungen oder um eine gebrochene Gleichung, und gibt es einen Ausrichtungspunkt, der es wert ist, gestapelt zu werden? Trennen und ausrichten: `align`. Getrennt und zentriert: „versammeln“. Einzeln und ausgerichtet: „geteilt“. Einzeln und nicht ausgerichtet: „multiline“.

## Häufige Fehler

Eine Zeile ohne „&“ wird trotzdem kompiliert, aber sie zentriert sich unabhängig und nichts wird ausgerichtet. Zwei „&“ in einer Zeile beginnen ein zweites Spaltenpaar, das „align“ als zweite Spalte nebeneinander stehender Gleichungen liest; Wenn Ihre Ausgabe nach rechts verlaufende Gleichungen enthält, zählen Sie Ihre kaufmännischen Und-Zeichen. Ein nachgestelltes „\\“ in der letzten Zeile fügt eine leere Zeile hinzu, die als ungerader vertikaler Leerraum unter dem Block erscheint. Geben Sie im [Live-Spielplatz](/live/) eine dreistufige Ableitung ein, um zu beobachten, wie die Ausrichtung zusammenkommt.