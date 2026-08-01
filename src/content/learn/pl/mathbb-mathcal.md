---

title: "Tablica, skrypt, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm i kiedy pojawi się każdy alfabet."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Tablica, skrypt, Fraktur

Matematyka używa więcej niż jednego alfabetu. Liczby rzeczywiste otrzymują pogrubione na tablicy R, Lagrange'y - kaligraficzne L, algebra Liego - Fraktur g, a każda z nich jest odrębnym poleceniem w LaTeX-ie, a nie włączaną czcionką. Stosowane konsekwentnie alfabety informują czytelnika, jaki rodzaj przedmiotu nazywa się literą, zanim zrobi to otaczające zdanie.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Cztery alfabety

| Polecenie | Spójrz | Typowe zastosowanie |
| --- | --- | --- |
| `\mathbb{R}` | Tablica | Zestawy liczb |
| `\mathcal{L}` | Kaligraficzne | Lagrangiany, strata |
| `\mathfrak{g}` | Fraktura | Algebry kłamstwa |
| `\mathrm{d}` | Pionowo | Różniczki, nazwy operatorów |

`\mathbb` tworzy pogrubioną tablicę, podwójne znaki używane prawie wyłącznie w zestawach liczbowych: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Pochodzi z pakietu `amssymb` i obejmuje tylko wielkie litery. Czcionka nie zawiera małych liter, więc argument zawierający małe litery powoduje wyświetlenie błędnych glifów lub niczego przydatnego.

`\mathcal` podaje kaligraficzne wielkie litery, typowy wybór dla Lagrangianów, funkcje straty i rodziny zbiorów. Obejmuje również tylko wielkie litery i działa w rdzeniu LaTeX bez dodatkowego pakietu.

`\mathfrak`, również z `amssymb`, to Fraktur, w obu przypadkach dostępne. Małe litery Fraktur nazywają algebry Liego, a wielkie litery pojawiają się w algebrze i teorii mnogości, między innymi dla ideałów i kardynałów.

`\mathrm` nie jest alfabetem dekoracyjnym, ale przejściem do pionowej litery rzymskiej w matematyce. Jest to właściwe narzędzie do wszystkiego, co jest raczej notacją niż zmienną: różnicą w `\mathrm{d}x`, jednostkach lub tekstowych etykietach podrzędnych, takich jak `x_{\mathrm{max}}`. W przypadku operatorów nazwanych, takich jak tr i rank, istnieje lepszy mechanizm, opisany w [operatorach, które wymyślisz raz](/learn/argmin-argmax/).

## Uwagi praktyczne

Jeśli `\mathcal` wygląda zbyt prosto dla twoich celów, pakiet `mathrsfs` dodaje `\mathscr`, bardziej ozdobny skrypt często używany do krążków i algebr sigma. Obydwa mogą współistnieć i oznaczać różne obiekty w tym samym artykule.

Częstym błędem jest traktowanie tych alfabetów jako dekoracji. Każde z nich ma konwencjonalne znaczenie w większości dziedzin, a czytelnik, który zobaczy `\mathbb{A}`, będzie oczekiwał czegoś przypominającego zbiór i doprawionego liczbami. Przed przypisaniem liter sprawdź konwencje swojego pola, a po przypisaniu zachowaj jeden alfabet na obiekt w całym dokumencie. Wszystkie cztery renderują się obok siebie w ciągu kilku sekund na [placu zabaw na żywo](/live/).