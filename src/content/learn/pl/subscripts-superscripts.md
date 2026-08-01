---

title: "Indeksy, które nie eksplodują"
description: "Nawiasy klamrowe do pism wieloznakowych, liczb pierwszych, kropek."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indeksy, które nie eksplodują

Indeksy dolne i górne to pierwsza składnia matematyczna, której każdy uczy się w LaTeX-ie, a także źródło pierwszych mylących wyników, które wszyscy tworzą. Podkreślenie `_` obniża następujący znak, karetka `^` podnosi go i oba odnoszą się do dokładnie jednego znaku, chyba że powiesz inaczej. Ta zasada jednego znaku kryje się za prawie każdym zniekształconym indeksem, jaki kiedykolwiek zobaczysz.

## Podstawowe formularze

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` stawia pojedyncze `i` w pozycji indeksu dolnego, a `x^2` podnosi pojedyncze `2`. Ponieważ `_` i `^` chwytają tylko następny token, wszystko, co jest dłuższe niż jeden znak, musi być ujęte w nawiasy klamrowe: `x_{ij}` oznacza obie litery, a `x^{2n}` podnosi całe `2n`. Do tego samego symbolu można dołączyć zarówno indeks dolny, jak i górny, w dowolnej kolejności, a LaTeX ułoży je poprawnie: `x_i^2`. Skrypty również się zagnieżdżają. W `x_{i_j}` `j` jest indeksem dolnym `i`, które samo w sobie jest indeksem dolnym `x`, a każdy poziom jest coraz mniejszy.

Skrypty wieloznakowe **muszą** używać nawiasów klamrowych: `x_ij` to `x_i`, a następnie `j`. LaTeX nie zgłasza tego jako błędu, ponieważ „x_i”, po którym następuje zmienna „j”, jest całkowicie legalną matematyką. Formuła się kompiluje, na pierwszy rzut oka wygląda prawie dobrze i oznacza coś innego. Wcześnie wypracuj nawyk noszenia aparatu ortodontycznego. W razie wątpliwości przygotuj scenariusz.

Ta sama pułapka pojawia się w granicach i granicach. `\sum_i=1^n` nie robi tego, na co wygląda. Poprawna forma to `\sum_{i=1}^{n}`, gdzie całe `i=1` jest jednym indeksem dolnym w nawiasach klamrowych. Jeśli użyjesz `_` lub `^` poza trybem matematycznym, otrzymasz klasyczny błąd omówiony w [Wstawiono brakujący dolar](/learn/missing-dollar/).

## Liczby pierwsze i kropki

```latex
f' f'' \dot{x} \ddot{x}
```

W przypadku instrumentów pochodnych rzadko potrzebujesz dosłownego indeksu górnego. Klawisz apostrofu tworzy liczbę pierwszą: `f'` renderuje jako f z jedną liczbą pierwszą, `f''' z dwoma, a LaTeX sam obsługuje podnoszenie i odstępy, więc nie ma potrzeby stosowania `f^{\prime}`. W przypadku pochodnych czasu w stylu fizycznym `\dot{x}` umieszcza pojedynczą kropkę nad x, a `\ddot{x}` umieszcza dwa. To są akcenty, więc swoje argumenty biorą w nawiasach klamrowych.

Jeszcze jedna subtelność: jeśli potrzebujesz indeksu górnego po liczbie pierwszej, po prostu połącz je, jak w przypadku `f'^2`. LaTeX łączy je w jeden klaster indeksu górnego.

## Sprawdź swoje dane wyjściowe

Najszybszym sposobem na internalizację reguły nawiasów klamrowych jest wpisanie obok siebie `x_ij` i `x_{ij}` w [live placu zabaw](/live/) i obejrzenie renderowania różnicy. Ilekroć indeks w skompilowanym dokumencie wygląda na błędny, pierwszą rzeczą, którą należy sprawdzić, jest brakująca para nawiasów klamrowych.