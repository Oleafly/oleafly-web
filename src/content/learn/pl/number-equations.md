---

title: "Liczby i wskaźniki do równań"
description: "label, ref, eqref i numerowanie tylko tych linii, które masz na myśli."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Liczby i wskaźniki równań

Numerowanie równania jest obietnicą, że odniesiesz się do niego później. LaTeX obsługuje obie części tej obietnicy: środowisko „równania” przypisuje liczbę, a system etykiet pozwala wskazać ją z dowolnego miejsca w dokumencie, bez konieczności samodzielnego wpisywania numeru.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etykiety i odniesienia

`\begin{equation}` numeruje wyświetlaną linię. `\label{eq:bayes}` dołącza nazwę `eq:bayes` do tej liczby. Nazwę możesz wybrać, a przedrostek „eq:” odróżnia etykiety równań od rysunków i tabel. Aby to zacytować, `\ref{eq:bayes}` wypisuje samą liczbę, podczas gdy `\eqref{eq:bayes}` z `amsmath` otacza ją nawiasami, aby dopasować wygląd liczby obok równania. Preferuj `\eqref` dla równań, aby oba style były zgodne.

Ponieważ liczby są zapisywane w jednym przebiegu i odczytywane w następnym, nowa kompilacja pokazuje „?” aż do następnego przebiegu. [Znaki zapytania zamiast liczb](/learn/equations-show-qq/) obejmuje ten cykl.

Jeśli do wyświetlanego równania nie ma odniesienia, nie numeruj go. Zamiast tego użyj `\[ ... \]` lub oznaczonego gwiazdką `równania*`, aby liczby oznaczały tylko te linie, które czytelnik może chcieć ponownie znaleźć.

## Numeracja niektórych linii w wyrównaniu

Wyprowadzenia wieloliniowe domyślnie „wyrównują” każdą linię, co rzadko jest tym, czego chcesz. Dwa polecenia dostosowują to w każdym wierszu:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` pomija liczbę w swojej linii, więc tutaj krok pośredni pozostaje nienumerowany, podczas gdy pierwsza i ostatnia linia zachowują swoje numery i etykiety. Umieść każdą `\label` w linii, której nazwę, przed `\\`, tak aby powiązała się z właściwą liczbą. Skrót typu „wszystko albo nic” to „align*”, który nie numeruje niczego. Pełną rodzinę środowisk wieloliniowych omówiono w [równaniach wieloliniowych, które układają się w jedną całość](/learn/align-equations/).

Częstym błędem jest zapisywanie liczby dosłownej, jak w „patrz Równanie 3”, która przerywa się w momencie wstawienia nad nią równania. Zawsze przeglądaj etykietę i pozwól LaTeXowi na zmianę numeracji przy każdej kompilacji. Możesz na żywo oglądać aktualizację numeracji, dodając i usuwając `\notag` na [placu zabaw](/live/).