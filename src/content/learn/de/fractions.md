---

title: "Gestapelte Verhältnisse, die lesbar bleiben"
description: "frac, dfrac, tfrac und Kettenbrüche mit amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Gestapelte Verhältnisse, die lesbar bleiben

Brüche sind der erste Punkt, an dem die LaTeX-Ausgabe einem Textverarbeitungsprogramm deutlich überlegen ist: ein echter gestapelter Zähler und Nenner mit einer Regel dazwischen, deren Größe an die umgebende Mathematik angepasst ist. Der Kernbefehl ist „\frac“. Entscheidend ist, wie sich seine Größe mit dem Kontext ändert und wie man dies überschreibt, wenn die automatische Auswahl die Lesbarkeit beeinträchtigt.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

„\frac{a}{b}“ nimmt zwei Argumente in Klammern, zuerst den Zähler und dann den Nenner, und setzt sie gestapelt über einer horizontalen Linie. Seine Größe ist kontextabhängig. In der Anzeigemathematik (innerhalb von „\[ ... \]“ oder einer „Gleichung“-Umgebung) wird der Bruch in voller Größe angezeigt. In der Inline-Mathematik (innerhalb von „$ ... $“) wird es kleiner und kompakter gesetzt, sodass die Zeilen des Absatzes nicht auseinandergedrückt werden.

Manchmal möchte man das außer Kraft setzen. „\dfrac“ von „amsmath“ erzwingt den Anzeigestil: ein gestapelter Bruch in voller Größe sogar in der Mitte eines Satzes. Gehen Sie sparsam damit um, da ein großer Bruch in der Zeile den Zeilenabstand um ihn herum ausdehnt. „\tfrac“ ist das Gegenteil: Es erzwingt den kleinen Textstil auch in der Anzeigemathematik, was praktisch für einfache Koeffizienten wie eine Hälfte vor einem großen Ausdruck ist, bei denen ein Stapel in voller Größe zu viel Aufmerksamkeit erregen würde.

Beide Argumente können beliebige Mathematik enthalten, einschließlich anderer Brüche: „\frac{1}{1 + \frac{1}{x}}“-Verschachtelungen, und LaTeX verkleinert den inneren Bruch automatisch. Wenn die Verschachtelung jedoch zu tief wird, gibt es ein besseres Werkzeug.

## Fortsetzungsbrüche

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Verschachtelte „\frac“-Zeichen schrumpfen auf jeder Ebene, sodass die Ziffern im dritten Stock eines Kettenbruchs kaum noch lesbar sind. „\cfrac“, ebenfalls von „amsmath“, hält jede Ebene in voller Anzeigegröße und richtet die Zähler aus, was die akzeptierte Art ist, Kettenbrüche zu setzen. Sie können eine optionale Position „\cfrac[l]{1}{...}“ übergeben, um einen Zähler nach links zu verschieben, anstatt ihn zu zentrieren.

## Praktisches Urteil

Alle „\dfrac“, „\tfrac“ und „\cfrac“ erfordern „\usepackage{amsmath}“ in der Präambel; einfaches „\frac“ funktioniert auch ohne. Wenn Sie „Undefinierte Kontrollsequenz“ auf „\dfrac“ erhalten, fehlt die Paketzeile.

Bei Inline-Text ist manchmal eine durchgestrichene Form einfach besser lesbar als ein gestapelter Bruch: Wenn Sie „(a/b)“ oder „a/b“ schreiben, bleibt die Zeilenhöhe gleichmäßig und bei einfachen Verhältnissen gut lesbar. Eine gute Faustregel besteht darin, Brüche in der Anzeigemathematik zu stapeln, wo vertikaler Platz vorhanden ist, und den Schrägstrich in der Zeile zu bevorzugen, es sei denn, der Bruch ist der Punkt des Satzes. Geben Sie einen Absatz in beide Richtungen im [Live-Spielplatz](/live/) ein und vergleichen Sie; Der Unterschied im Zeilenabstand ist sofort sichtbar. Wenn mathematische Trennzeichen wie „$“ und „\[“ noch unbekannt sind, beginnen Sie mit [Grundlagen des Mathematikmodus](/learn/math-mode/).