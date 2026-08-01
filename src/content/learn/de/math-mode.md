---

title: "Mathematik, die in einem Satz (oder allein) steht"
description: "Inline-Mathematik, Anzeigemathematik, Gleichungsumgebungen und wann sich Nummerieren lohnt."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Mathematik, die in einem Satz (oder allein) steht

LaTeX behandelt Mathematik als separaten Modus mit eigenen Schriftarten und Abstandsregeln. Jede Variable, Formel und jedes Symbol muss im Mathematikmodus leben, egal ob es sich um ein einzelnes n in einem Satz oder eine vollständige Gleichung handelt. Es gibt zwei Arten: Inline-Mathematik fließt innerhalb eines Absatzes und Anzeigemathematik wird zentriert in einer eigenen Zeile angezeigt, mit oder ohne Zahl.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Inline-Mathematik

Ein Paar Dollarzeichen, wie in „$E=mc^2$“, legt die Formel auf die Textgröße innerhalb der Zeile fest. Die Buchstaben werden in Mathe-Kursivschrift angezeigt und der Abstand um das Gleichheitszeichen wird für Sie übernommen. „\(E=mc^2\)“ ist die entsprechende LaTeX-native Form. Es erzeugt eine identische Ausgabe, und da sich die öffnenden und schließenden Trennzeichen unterscheiden, ergibt ein nicht geschlossenes Trennzeichen eine klarere Fehlermeldung. Verwenden Sie Inline-Mathematik sogar für einen einzelnen Variablennamen, damit das n in Ihrer Prosa mit dem n in Ihren Gleichungen übereinstimmt.

## Mathematik anzeigen

„\[ ... \]“ platziert eine Formel auf einer eigenen zentrierten Linie ohne Zahl. Es ist die richtige Wahl für einmalige Gleichungen, auf die Sie nie wieder zurückgreifen. Vermeiden Sie die alte Form „$$ ... $$“. Es ist reines TeX und nicht LaTeX und führt in manchen Situationen zu leicht falschen vertikalen Abständen.

## Nummerierte Gleichungen

Die Umgebung „Gleichung“ zeigt die Formel mit einer Zahl am Rand an. „\label{eq:energy}“ fügt dieser Zahl einen Namen hinzu, und an anderer Stelle schreiben Sie „Equation~\ref{eq:energy}“ oder, wenn „amsmath“ geladen ist, „\eqref{eq:energy}“, wodurch die Klammern selbst hinzugefügt werden. Das „~“ ist ein geschütztes Leerzeichen, sodass das Wort und die Zahl in einer Zeile bleiben. Referenzen werden beim zweiten Kompilieren aufgelöst. Wenn Sie „??“ in der Ausgabe sehen, lesen Sie [Fragezeichen statt Zahlen](/learn/equations-show-qq/).

## Die zu ladenden Pakete

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Fast jedes mathematische Dokument lädt diese drei. „amsmath“ stellt die Umgebungen und Befehle bereit, die in den meisten dieser Lektionen vorausgesetzt werden, einschließlich „align“ und „\eqref“. „amssymb“ und „amsfonts“ fügen Symbolschriftarten und zusätzliche Alphabete wie „\mathbb“ hinzu. Fügen Sie die Zeile einmal in die Präambel ein und vergessen Sie sie.

Der klassische Anfängerfehler ist die Mathe-Syntax außerhalb des Mathe-Modus: Ein Unterstrich im Klartext stoppt die Kompilierung mit „Fehlendes $ eingefügt“, was [seine eigene Lektion](/learn/missing-dollar/) hat. Um ein Gefühl für die beiden Modi zu bekommen, geben Sie einen Satz mit „$x_i$“ inline und derselben Formel in „\[ ... \]“ in den [Live-Spielplatz](/live/) ein und vergleichen Sie, wie jeder auf der Seite steht.