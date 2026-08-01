---

title: "Skumulowane współczynniki, które pozostają czytelne"
description: "frac, dfrac, tfrac i dalsze ułamki z amsmath."
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

# Ułożone współczynniki, które pozostają czytelne

Ułamki są pierwszym miejscem, w którym dane wyjściowe LaTeX-a wyraźnie przewyższają edytor tekstu: prawdziwy licznik i mianownik ułożony w stos z regułą pomiędzy nimi, dobraną tak, aby pasowała do otaczającej matematyki. Podstawowym poleceniem jest `\frac`. Liczy się to, jak zmienia się jego rozmiar w zależności od kontekstu i jak to zmienić, gdy automatyczny wybór pogarsza czytelność.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` pobiera dwa argumenty w nawiasach klamrowych, najpierw licznik, potem mianownik, i składa je ułożone na linijce poziomej. Jego rozmiar zależy od kontekstu. W matematyce wyświetlania (wewnątrz `\[ ... \]` lub w środowisku `równania`) ułamek jest ustawiany w pełnym rozmiarze. W matematyce wbudowanej (wewnątrz `$ ... $`) jest on mniejszy i bardziej zwarty, więc nie powoduje rozsunięcia linii akapitu.

Czasami chcesz to zastąpić. `\dfrac`, z `amsmath`, wymusza styl wyświetlania: pełnowymiarowy ułamek skumulowany nawet w środku zdania. Używaj go oszczędnie, ponieważ wysoki ułamek w linii rozciąga odstępy między wierszami wokół niego. `\tfrac` jest odwrotnie: wymusza styl małego tekstu nawet w matematyce wyświetlanej, co jest przydatne w przypadku prostych współczynników, takich jak połowa przed dużym wyrażeniem, gdzie pełnowymiarowy stos przyciągałby zbyt wiele uwagi.

Obydwa argumenty mogą zawierać dowolną matematykę, łącznie z innymi ułamkami: `\frac{1}{1 + \frac{1}{x}}` gniazd, a LaTeX automatycznie zmniejsza ułamek wewnętrzny. Kiedy jednak zagnieżdżanie staje się głębokie, istnieje lepsze narzędzie.

## Ciągłe ułamki

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Zagnieżdżone zmniejszanie `\frac` na każdym poziomie, więc na trzecim piętrze ułamka ciągłego cyfry są ledwo czytelne. `\cfrac`, również z `amsmath`, utrzymuje każdy poziom w pełnym rozmiarze i wyrównuje liczniki, co jest akceptowanym sposobem składowania ułamków ciągłych. Możesz przekazać opcjonalną pozycję `\cfrac[l]{1}{...}`, aby przesunąć licznik w lewo zamiast go wyśrodkować.

## Praktyczny osąd

Wszystkie `\dfrac`, `\tfrac` i `\cfrac` wymagają `\usepackage{amsmath}` w preambule; zwykły `\frac` działa bez niego. Jeśli w `\dfrac` pojawi się komunikat „Niezdefiniowana sekwencja kontrolna”, oznacza to, że brakuje linii pakietu.

W przypadku tekstu wbudowanego czasami forma ukośna jest po prostu bardziej czytelna niż ułamek skumulowany: pisanie „(a/b)” lub „a/b” pozwala zachować równą wysokość linii i czytać dobrze w przypadku prostych proporcji. Dobrą zasadą jest układanie ułamków w stos w matematyce wyświetlanej, gdzie jest miejsce w pionie, i preferowanie ukośnika w wierszu, chyba że ułamek jest punktem zdania. Wpisz akapit w obie strony na [żywym placu zabaw](/live/) i porównaj; różnica w odstępach między wierszami jest natychmiast widoczna. Jeśli ograniczniki matematyczne, takie jak `$` i `\[`, są nadal nieznane, zacznij od [podstawy trybu matematycznego](/learn/math-mode/).