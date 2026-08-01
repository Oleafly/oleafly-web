---

title: "Wektory i pogrubione symbole"
description: "mathbf, pogrubiony symbol i spójne makro wektorowe."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Wektory i pogrubione symbole

Wiele pól pogrubia wektory i macierze: **x** dla wektora, **A** dla macierzy, pogrubienie beta dla wektora współczynników. W LaTeX-ie istnieją dwa różne pogrubione polecenia matematyczne i nie można ich stosować zamiennie. Wiedza, po który sięgnąć i zamknięcie wyboru w makrze, pozwala zachować spójność zapisu w całej pracy.

## Dwa polecenia

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` zmienia swój argument na pionową, pogrubioną czcionkę rzymską. Działa to dobrze w przypadku liter łacińskich, więc `\mathbf{A}` daje ci solidną, pionową, pogrubioną literę A, której wiele tekstów używa do oznaczania macierzy. Jego ograniczeniem jest to, że obejmuje tylko litery i cyfry: `\mathbf{\beta}` nie robi nic przydatnego, ponieważ pogrubiona czcionka rzymska po prostu nie ma greckich glifów, a wersja beta drukuje bez zmian.

`\boldsymbol`, dostarczany przez `amsmath` (technicznie rzecz biorąc, przez maszynę podobną do `bm` w `amsbsy`, którą ładuje `amsmath`), ośmiela każdy symbol, który mu podasz, zachowując jednocześnie jego kształt. `\boldsymbol{\beta}` tworzy pogrubioną kursywę beta, a `\boldsymbol{x}` tworzy pogrubioną kursywę x, pasującą do skośnego stylu zwykłych zmiennych matematycznych. Jeśli zgodnie z konwencją wektory są pisane pogrubioną kursywą, jest to polecenie, którego potrzebujesz.

Zatem praktyczny podział jest następujący: pionowe, pogrubione litery łacińskie, użyj `\mathbf`; cokolwiek greckiego lub pogrubienie, które powinno pozostać kursywą, użyj `\boldsymbol`.

## Zdefiniuj makra raz

Zamiast wpisywać te polecenia w całym dokumencie, zdefiniuj makra semantyczne w preambule:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Teraz napiszesz `\vect{x}` dla wektora i `\mat{A}` dla macierzy. „[1]” oznacza, że ​​każde makro przyjmuje jeden argument, a „#1” oznacza miejsce, w którym ten argument się znajduje. Opłacalność przychodzi później: jeśli czasopismo wymaga, aby wektory były pogrubione pionowo zamiast pogrubionej kursywy, edytujesz jedną linię tak, aby `\vect` zawinęło `\mathbf`, a każdy wektor w artykule został zaktualizowany przy następnej kompilacji. To pokonuje funkcję „znajdź i zamień” w dwustu równaniach.

Makra sprawiają również, że intencja jest czytelna w źródle. Za sześć miesięcy `\vect{w}` powie ci, że w jest wektorem; goły `\boldsymbol{w}` informuje tylko, że jest pogrubiony.

## Częsty błąd

Nie udawaj pogrubionej greki z `\textbf` w matematyce i nie używaj do tego `\mathbf` zakładając, że zadziałało. Skompiluj i przyjrzyj się uważnie: niepogrubiona wersja beta obok pogrubionych sąsiadów jest łatwa do przeoczenia na ekranie i oczywista w druku. Jeśli chcesz szybko przyjrzeć się kandydatom, wklej wiersz taki jak `\boldsymbol{\beta} \mathbf{\beta} \beta` do [żywego placu zabaw](/live/) i porównaj trzy obok siebie. Aby pogrubić całe równania, łącznie z symbolami takimi jak `\suma`, spójrz na polecenie `\bm` pakietu `bm`, które obsługuje więcej klas symboli niż `\boldsymbol`.

Pogrubienie w bieżącym tekście to inny temat z różnymi poleceniami; zobacz [podkreślenie w tekście](/learn/bold-italic/).