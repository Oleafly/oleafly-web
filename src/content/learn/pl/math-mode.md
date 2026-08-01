---

title: "Matematyka zawarta w zdaniu (lub samodzielnie)"
description: "Matematyka wbudowana, matematyka wyświetlana, środowiska równań i kiedy warto numerować."
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

# Matematyka zawarta w zdaniu (lub samodzielnie)

LaTeX traktuje matematykę jako odrębny tryb z własnymi czcionkami i regułami odstępów. Każda zmienna, formuła i symbol muszą działać w trybie matematycznym, niezależnie od tego, czy jest to pojedyncze n w zdaniu, czy pełne równanie. Istnieją dwa rodzaje: matematyka wbudowana przepływa w akapicie i matematyka wyświetlana jest wyśrodkowana w osobnej linii, z liczbą lub bez.

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

## Wbudowana matematyka

Para znaków dolara, jak w przypadku `$E=mc^2$`, ustawia formułę na rozmiar tekstu wewnątrz wiersza. Litery są pisane kursywą matematyczną, a odstępy wokół znaku równości są obsługiwane za Ciebie. `\(E=mc^2\)` jest odpowiednikiem formy natywnej dla LaTeX-a. Daje identyczne wyjście, a ponieważ jego ograniczniki otwierające i zamykające różnią się, niezamknięty daje wyraźniejszy komunikat o błędzie. Używaj wbudowanej matematyki nawet w przypadku pojedynczej nazwy zmiennej, tak aby n w twoim prozie odpowiadało n w twoich równaniach.

## Wyświetl obliczenia matematyczne

`\[ ... \]` umieszcza formułę w osobnej linii środkowej, bez liczby. Jest to właściwy wybór w przypadku jednorazowych równań, do których nigdy nie będziesz wracać. Unikaj starej formy `$$ ... $$`. Jest to zwykły TeX, a nie LaTeX i w niektórych sytuacjach tworzy nieco nieprawidłowe odstępy w pionie.

## Równania numerowane

Środowisko „równanie” wyświetla formułę z liczbą na marginesie. `\label{eq:energy}` dołącza nazwę do tej liczby, a gdzie indziej piszesz `Równanie~\ref{eq:energy}` lub, z załadowanym `amsmath`, `\eqref{eq:energy}`, co dodaje same nawiasy. `~` jest spacją nierozdzielającą, więc słowo i liczba pozostają w jednym wierszu. Referencje są rozpoznawane przy drugiej kompilacji. Jeśli w wynikach zobaczysz „???”, zobacz [znaki zapytania zamiast liczb](/learn/equations-show-qq/).

## Pakiety do załadowania

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Prawie każdy dokument matematyczny ładuje te trzy. `amsmath` zapewnia środowiska i polecenia stosowane w większości tych lekcji, w tym `align` i `\eqref`. `amssymb` i `amsfonts` dodają czcionki symboliczne i dodatkowe alfabety, takie jak `\mathbb`. Umieść tę linijkę w preambule raz i zapomnij o niej.

Klasycznym błędem dla początkujących jest składnia matematyczna poza trybem matematycznym: podkreślenie w zwykłym tekście zatrzymuje kompilację z „wstawionym brakującym $”, który zawiera [własną lekcję] (/learn/missing-dollar/). Aby zapoznać się z obydwoma trybami, wpisz zdanie zawierające `$x_i$` w wierszu i tę samą formułę w `\[ ... \]` w [placu zabaw na żywo](/live/) i porównaj położenie każdego z nich na stronie.