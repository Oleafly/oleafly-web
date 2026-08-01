---

title: "Równania wieloliniowe, które się pokrywają"
description: "wyrównywanie, zbieranie, dzielenie, mnożenie i notowanie."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Równania wieloliniowe, które się układają

Wyprowadzenie kilku kroków wygląda najlepiej, gdy znaki równości są ułożone w jednej kolumnie, dzięki czemu oko może śledzić, co zmieniło się z wiersza na wiersz. Pakiet `amsmath` zapewnia do tego środowisko `align` oraz małą rodzinę krewnych w przypadkach, gdy wyrównanie nie jest tym, czego chcesz.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Jak Align czyta

Każda linia to jedno równanie zakończone znakiem „\\”; ostatnia linia nie potrzebuje niczego. Znak „&” oznacza punkt wyrównania, a znak „&” każdej linii znajduje się w tej samej kolumnie. Umieszczanie „&” bezpośrednio przed znakiem równości jest standardowym zwyczajem, więc znaki równości układają się w stos, a lewa strona zwisa w lewo. Każda linia otrzymuje swój własny numer równania; napisz `align*`, aby nie numerować żadnego, lub dodaj `\notag` do poszczególnych linii, aby pominąć tylko te, jak pokazano w [liczby i wskaźniki do równań](/learn/number-equations/).

Środowisko samodzielnie otwiera funkcję matematyczną, więc nie może znajdować się wewnątrz `\[ ... \]` lub `$ ... $`; zagnieżdżanie go w innym środowisku matematycznym powoduje mylące błędy.

## Rodzina

| Koperta | Cel |
| --- | --- |
| `wyrównaj` | Kilka linii ustawionych |
| `wyrównaj*` | To samo, bez numeru |
| „zbierać” | Kilka linii, wyśrodkowanych |
| `podział` | Wielowierszowy numer pojedynczego równania |
| `wieloliniowe` | Długie równanie rozbite bez wyrównania |

„zbieranie” obsługuje kilka równań bez wspólnego punktu wyrównania; centruje każdą linię i numeruje każdą z nich. Opcja „split” tworzy jedno wielowierszowe równanie pod jedną liczbą i musi znajdować się wewnątrz „równania”. „multline” przerywa jedną zbyt długą formułę bez wyrównania, pierwsza linia jest skierowana w lewo, a ostatnia w prawo. Dwa ostatnie omówiono szczegółowo w [równaniach, które nie pasują](/learn/break-long-equations/).

O tym, którego użyć, decydują dwa pytania: czy linie są oddzielnymi równaniami, czy jednym równaniem przerwanym i czy istnieje punkt wyrównania, który warto ułożyć w stos? Oddziel i wyrównaj: „wyrównaj”. Oddzielne i skupione: „zbieraj”. Pojedynczy i wyrównany: „split”. Pojedynczy i niewyrównany: `multiline`.

## Typowe błędy

Linia bez `&` nadal się kompiluje, ale centruje się niezależnie i nic się nie układa. Dwa znaki „&” w wierszu rozpoczynają drugą parę kolumn, co oznacza „wyrównanie” jako drugą kolumnę równań ustawionych obok siebie; jeśli na wyjściu znajdują się równania biegnące w prawo, policz ampersandy. Końcowy `\\` w ostatnim wierszu dodaje pusty wiersz, który pojawia się jako nieparzysta pionowa spacja pod blokiem. Wpisz trzyetapowe wyprowadzenie w [placu zabaw na żywo](/live/), aby zobaczyć, jak układa się w całość.