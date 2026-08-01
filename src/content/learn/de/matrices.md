---

title: "Matrizen und Arrays"
description: "pmatrix-, bmatrix-, vmatrix- und benutzerdefinierte Array-Spalten."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrizen und Arrays

Eine Matrix in LaTeX ist ein Raster aus Zellen: „&“ trennt die Spalten, „\\“ trennt die Zeilen und eine Umgebung umschließt das Raster mit dem richtigen Trennzeichenpaar. Die Matrixumgebungen stammen von „amsmath“, daher muss dieses Paket in Ihrer Präambel vorhanden sein, bevor irgendetwas davon kompiliert wird.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Die Matrixumgebungen

Alle drei teilen sich den gleichen Körper. Lediglich die umgebenden Trennzeichen ändern sich. „pmatrix“ umschließt das Gitter in Klammern, dem gebräuchlichsten Stil für Matrizen und Vektoren. „bmatrix“ verwendet eckige Klammern und „vmatrix“ verwendet einzelne vertikale Balken, die Standardnotation für eine Determinante. Es gibt auch eine einfache „Matrix“ ohne Trennzeichen, „Bmatrix“ mit geschweiften Klammern und „Vmatrix“ mit doppelten Balken für Normen. Darin füllen „a & b“ die beiden Spalten einer Zeile, „\\“ beginnt die nächste Zeile und jede Zeile sollte die gleiche Anzahl von „&“-Trennzeichen enthalten.

Diese Umgebungen müssen im Mathematikmodus erscheinen. Wickeln Sie sie in „\[ ... \]“ ein oder verwenden Sie sie innerhalb einer Gleichung. Für eine kleine Matrix in der Mitte eines Satzes legt „smallmatrix“, ebenfalls aus „amsmath“, eine kompakte Version fest, die die Linie nicht streckt: „$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$“.

## Benutzerdefiniertes Array

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Wenn Sie eine spaltenweise Steuerung benötigen, ist „Array“ das allgemeine Werkzeug. Sein obligatorisches Argument ist eine Spaltenspezifikation: Hier deklariert „r|cc“ eine rechtsbündige Spalte, eine vertikale Linie und dann zwei zentrierte Spalten. Die Ausrichtungsbuchstaben sind „l“, „c“ und „r“, und „|“ zeichnet eine Linie zwischen Spalten. „\hline“ zwischen Zeilen zeichnet eine horizontale Linie über die gesamte Breite. „Array“ zeichnet keine eigenen äußeren Trennzeichen. Kombinieren Sie es mit „\left(“ und „\right)“, wenn Sie sie möchten. Es ist der mathematische Modus der „tabular“-Umgebung, die für Tabellen im Text verwendet wird.

## Häufige Fehler

Der Fehler „Zusätzliche Ausrichtungsregisterkarte wurde in \cr geändert“ bedeutet, dass eine Zeile mehr „&“-Trennzeichen hat, als die Spaltenanzahl zulässt, was normalerweise auf ein fehlendes „\\“ am Ende der vorherigen Zeile zurückzuführen ist. „Umgebung pmatrix undefiniert“ bedeutet, dass „\usepackage{amsmath}“ fehlt. Eine außerhalb des Mathematikmodus eingefügte Matrix schlägt mit „Fehlendes $ eingefügt“ fehl. Siehe [Grundlagen des Mathematikmodus](/learn/math-mode/), wenn die Trennzeichen neu sind. Der Vergleich eines Zwei-mal-zwei in jedem Trennzeichenstil dauert auf dem [Live-Spielplatz](/live/) Sekunden.