---

title: "Ile matematyki potrzeba na papierze"
description: "Notacja jako precyzja, dyscyplina symboli, kiedy numerować równania i zachowanie spójności."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# Ile matematyki potrzeba na papierze

Dokładnie tyle, ile wymagają Twoje roszczenia i ani jednego symbolu więcej. Matematyka w artykule nie jest oznaką wyrafinowania; jest to narzędzie precyzyjne. W najlepiej napisanych artykułach stosuje się notację, w której proza ​​byłaby niejednoznaczna, a proza, gdzie notacja byłaby szumem.

## Notacja to precyzja, a nie dekoracja

Napisz $f: \mathcal{X} \to \mathcal{Y}$, gdy czytelnik musi dokładnie znać domenę i kodomenę. Jeśli tego nie robią, napisz „model odwzorowuje obrazy na etykiety”. Akapit, który mógłby być napisany prostym angielskim, ale został przetłumaczony jako zupa-symbol, nie wygląda na rygorystyczny, raczej wymijający, więc recenzenci tłumaczą go z powrotem, aby sprawdzić, czy rzeczywiście coś jest twierdzone. Przed sformalizowaniem wypowiedzi zadaj sobie pytanie: czy wersja symboliczna wyklucza błędne odczytanie, na które pozwala wersja prozatorska? Jeśli nie, zachowaj prozę.

## Zdefiniuj każdy symbol raz i nigdy go nie definiuj ponownie

Pamięć robocza czytelnika jest Twoim najrzadszym zasobem. Dyscyplina:

- Wprowadź każdy symbol przy pierwszym użyciu: „niech $n$ będzie liczbą próbek”.
- Jedno znaczenie na symbol dla całej gazety. Jeśli $\alpha$ jest szybkością uczenia się w Sekcji 3, nie może to być poziom istotności w Sekcji 5.
- W przypadku dokumentów wymagających dużej liczby zapisów mała tabela zapisów na początku się opłaca.

| Nawyk | Wpływ na czytelnika |
|---|---|
| Symbol zdefiniowany przy pierwszym użyciu | Nigdy nie trzeba szukać wstecz |
| Jeden symbol, jedno znaczenie | Nigdy nie zastanawiaj się nad kontekstem |
| Tabela notacji | Posiada mapę całej gazety |

## Równania liczbowe tylko wtedy, gdy się do nich odwołujesz

Numer równania jest obietnicą: „wrócimy do tego”. Numerowanie wszystkiego ukrywa równania, które mają znaczenie, pod równaniami, które nie mają takiego znaczenia.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Odwołaj się do niego za pomocą `\eqref{eq:loss}`. W przypadku obliczeń matematycznych, których nigdy nie cytujesz, użyj `\[ ... \]` lub środowisk oznaczonych gwiazdką i pomiń liczbę. Mechanizm odniesienia jest omówiony w [odsyłaczach](/learn/cross-references/).

## Środowiska twierdzeń na jednym tchu

Jeśli twoja praca dowodzi pewnych rzeczy, zawrzyj twierdzenia w środowiskach „twierdzenie”, „lemat” i „dowód”, zamiast ręcznie pogrubiać „Twierdzenie 1”: numerują one same, zawierają czyste odniesienia i sygnalizują dokładnie to, co jest twierdzeniem, a co komentarzem. Konfiguracja i użytkowanie znajdują się w [twierdzeniach i dowodach](/learn/theorems-proofs/).

## Spójność to połowa sukcesu

Wybierz konwencje i trzymaj się ich przez cały artykuł:

- Wektory pogrubione ($\mathbf{x}$) lub oznaczone strzałkami, nigdy oba.
- Macierze są pisane wielkimi literami pogrubionymi, skalary kursywą małymi literami.
- Zestawy na tablicy lub kaligrafii ($\mathbb{R}$, $\mathcal{D}$), konsekwentnie.
- Taka sama konwencja na rysunkach i tabelach, jak w tekście.

Niestandardowe makra sprawiają, że spójność jest tania: zdefiniuj `\newcommand{\vx}{\mathbf{x}}` raz, a późna zmiana notacji będzie edycją w jednym wierszu, a nie szukaniem w całym dokumencie.

## Kalibruj zgodnie z miejscem

Miejsce teorii oczekuje formalnych oświadczeń i kompletnych dowodów. Zastosowane miejsce oczekuje czystej konfiguracji problemu i być może jednej funkcji straty. Przeczytaj trzy zaakceptowane artykuły z miejsca docelowego i dopasuj ich gęstość. Jeśli chodzi o mechanikę pisania dowolnego z nich, zacznij od [trybu matematycznego](/learn/math-mode/) i trzymaj [ściągawkę symboli matematycznych](/learn/math-symbols-cheatsheet/) otwartą w zakładce.