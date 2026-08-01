---

title: "Macierze i tablice"
description: "kolumny pmatrix, bmatrix, vmatrix i niestandardowe tablice."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Macierze i tablice

Macierz w LaTeX-ie to siatka komórek: „&” oddziela kolumny, „\\” oddziela wiersze, a środowisko otacza siatkę odpowiednią parą ograniczników. Środowiska matrix pochodzą z `amsmath`, więc ten pakiet musi znajdować się w preambule, zanim cokolwiek się skompiluje.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Środowiska matrixowe

Wszyscy trzej mają to samo ciało. Zmieniają się tylko otaczające je ograniczniki. `pmatrix` zawija siatkę w nawiasy, co jest najpopularniejszym stylem w przypadku macierzy i wektorów. „bmatrix” używa nawiasów kwadratowych, a „vmatrix” używa pojedynczych pionowych kresek, co jest standardowym zapisem wyznacznika. Istnieje również zwykła „macierz” bez ograniczników, „Bmatrix” z nawiasami klamrowymi i „Vmatrix” z podwójnymi słupkami oznaczającymi normy. Wewnątrz „a i b” wypełnia dwie kolumny wiersza, „\\” rozpoczyna następny wiersz, a każdy wiersz powinien zawierać tę samą liczbę separatorów „&”.

Te środowiska muszą pojawić się w trybie matematycznym. Zawiń je w `\[ ... \]` lub użyj ich w równaniu. Dla małej macierzy w środku zdania `smallmatrix`, również z `amsmath`, ustawia wersję zwartą, która nie rozciąga linii: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Tablica niestandardowa

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Jeśli potrzebujesz kontroli dla poszczególnych kolumn, ogólnym narzędziem jest „tablica”. Jego obowiązkowym argumentem jest specyfikacja kolumny: tutaj `r|cc` deklaruje kolumnę wyrównaną do prawej, linię pionową, a następnie dwie wyśrodkowane kolumny. Litery wyrównania to `l`, `c` i `r`, a `|` rysuje regułę między kolumnami. `\hline` pomiędzy wierszami rysuje poziomą linię na całej szerokości. „tablica” nie rysuje własnych zewnętrznych ograniczników. Połącz go z `\left(` i `\right)`, jeśli chcesz. Jest to działający w trybie matematycznym rodzeństwo środowiska tabelarycznego używanego w tabelach tekstowych.

## Typowe błędy

Błąd „Dodatkowa karta wyrównania została zmieniona na \cr” oznacza, że ​​wiersz ma więcej separatorów `&` niż pozwala na to liczba kolumn, co zwykle prowadzi do brakującego `\\` na końcu poprzedniego wiersza. „Środowisko niezdefiniowane” oznacza, że ​​brakuje `\usepackage{amsmath}`. Macierz wklejona poza trybem matematycznym kończy się niepowodzeniem i wyświetla się komunikat „Wstawiono brakujące $”. Zobacz [podstawy trybu matematycznego](/learn/math-mode/), jeśli ograniczniki są nowe. Porównywanie dwóch na dwa w każdym stylu ogranicznika zajmuje kilka sekund na [żywym placu zabaw](/live/).