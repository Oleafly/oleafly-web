---

title: "Dirac-Notation"
description: "Bremspaket für BHs, Kets und Matrixelemente."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Dirac-Notation

Die Quantenmechanik schreibt Zustände als Kets, ihre Dualen als Bras und innere Produkte als eingeklammerte Paare. Das manuelle Erstellen der Notation aus „\langle“, „|“ und „\rangle“ funktioniert, ist aber mühsam und die Trennzeichen wachsen nicht mit dem Inhalt. Das Paket „braket“ stellt Befehle bereit, die die Notation zusammenstellen und alles passend anpassen.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Was jeder Befehl bewirkt

`\braket{\psi|\phi}` legt das vollständige Innenprodukt fest: spitze Klammern außen, ein vertikaler Balken zwischen den beiden Zuständen, alle in der Höhe übereinstimmend. Mit zwei Balken wird „\braket{\psi|A|\phi}“ zum Matrixelement des Operators A zwischen den beiden Zuständen, der Form, die für Erwartungswerte und Störungsberechnungen verwendet wird. Das Paket stellt auch „\bra{\psi}“ und „\ket{\phi}“ für die beiden Hälften einzeln bereit. Ein Bare Ket ist die übliche Art, einen Staat in der Prosa zu benennen.

„\set{\vec{x}|x > 0}“ ist ein Bonus aus demselben Paket: Mengenerstellungsnotation mit geschweiften Klammern und einem Mittelstrich, nützlich weit über die Physik hinaus.

Die Größe ist der eigentliche Grund, das Paket zu verwenden. Geben Sie einen Bruch oder eine Summe in „\braket“ ein und die Klammern und Balken werden entsprechend gestreckt. Ein von Hand erstelltes „\langle ... \rangle“ benötigt „\left“ und „\right“ an jedem Trennzeichen und neigt immer noch dazu, aus den Proportionen zu geraten.

## Alternativen und Nachbarn

Das „Physics“-Paket bietet einen ähnlichen Satz, einschließlich „\bra“, „\ket“, „\ev“ für Erwartungswerte und „\mel“ für Matrixelemente sowie Abkürzungen für Ableitungen und Kommutatoren. Beide Pakete definieren „\bra“ und „\ket“, also wählen Sie eines pro Dokument aus, anstatt beide zu laden. In einer Vorlage, in der Sie keine Pakete hinzufügen können, „\langle \psi | \phi \rangle` mit `\left`/`\right` um große Inhalte herum erzeugt die gleiche Ausgabe mit mehr Eingabe.

Für Feynman-Diagramme, die oft in denselben Dokumenten enthalten sind, bauen Pakete wie „tikz-feynman“ auf TikZ auf; Das ist eine eigenständige Zeichenfähigkeit, die im Geiste [kommutativen Diagrammen](/learn/commutative-diagrams/) näher kommt als allem auf dieser Seite.

Der häufigste Fehler besteht darin, „<\psi|\phi>“ mit den Winkelzeichen der Tastatur einzugeben. Das sind die Kleiner-als- und Größer-als-Beziehungen, daher platziert LaTeX sie als Vergleiche und zeichnet sie auf der falschen Höhe. Echte Dirac-Klammern kommen von „\langle“ und „\rangle“ oder besser von den oben genannten Befehlen. Der Unterschied wird deutlich, sobald Sie beide Formen im [Live-Spielplatz](/live/) nebeneinander stellen.