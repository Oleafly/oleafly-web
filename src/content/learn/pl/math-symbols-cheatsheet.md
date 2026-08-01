---

title: "Symboliczna karta na biurko"
description: "Akcenty, duże operatory, zestawy liczb i elastyczne ograniczniki na jednej stronie."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Karta na biurko z symbolem

Ta strona jest raczej kartą referencyjną niż lekcją. Akcenty, duże operatory, zbiory liczb i ograniczniki, które obejmują większość codziennej matematyki, wszystko w jednym miejscu. Każde polecenie tutaj działa tylko w trybie matematycznym, a zestawy liczb wymagają `\usepackage{amssymb}` w preambule. Aby zapoznać się z alfabetem greckim i podstawowymi zależnościami, zobacz [Symbole greckie i codzienne](/learn/greek-letters/). Aby dowiedzieć się, jak działa sam tryb matematyczny, zacznij od [podstawy trybu matematycznego](/learn/math-mode/).

## Akcenty

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Polecenie | Renderuje jako | Znaczenie konwencjonalne |
| --- | --- | --- |
| `\kapelusz{x}` | x z daszkiem | Estymatory, wektory jednostkowe, operatory |
| `\bar{x}` | x z paskiem | Przykładowe środki, złożone koniugaty |
| `\tylda{x}` | x z tyldą | Aproksymacje, zmienne transformowane |
| `\vec{x}` | x ze strzałką | Wektory |
| `\kropka{x}`, `\ddot{x}` | jedna lub dwie kropki | Instrumenty pochodne pierwszego i drugiego czasu |
| `\widehat{xyz}`, `\overline{xyz}` | rozciągnięty akcent | Akcenty nad wyrażeniami wieloliterowymi |

Proste akcenty pasują do jednej litery; warianty „szeroki” i „ponad” rozciągają się na wszystko, co znajduje się w nawiasach klamrowych.

## Duzi operatorzy

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Polecenie | Znaczenie |
| --- | --- |
| `\suma_{i=1}^n` | Suma z dolną i górną granicą |
| `\prod_{i=1}^n` | Produkt |
| `\int_a^b` | Całka oznaczona |
| `\punkt` | Całka konturowa |
| `\lim_{x \do 0}` | Limit |
| `\max_{x}`, `\inf_{x}` | Maksimum, minimum powyżej zmiennej |

Granice są dołączane przy użyciu zwykłej składni indeksu dolnego i górnego, w nawiasach klamrowych, jeśli są dłuższe niż jeden znak. W matematyce wyświetlanej sumy, iloczyny i limity umieszczają swoje granice powyżej i poniżej symbolu. Całki trzymają swoje z boku. Taka jest standardowa konwencja.

## Zestawy liczb

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Są to liczby naturalne, całkowite, wymierne, rzeczywiste i liczby zespolone, zaznaczone pogrubioną czcionką. Alfabet `\mathbb` i jego odpowiedniki są omówione w [Tablica, skrypt, Fraktur](/learn/mathbb-mathcal/).

## Ograniczniki

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` i `\right` zwiększają swoje ograniczniki do wysokości zamkniętego materiału, więc nawiasy wokół wysokiego ułamka otaczają go zamiast przycinać na wysokości tekstu. Muszą przyjść parami. Aby pokazać tylko jedną stronę, zamknij `\right.`, a niewidzialny partner spełni warunki parowania. Nawiasy klamrowe są znakami specjalnymi, więc ustawione nawiasy klamrowe są zapisywane jako `\{` i `\}`. Nawiasy kątowe dla iloczynów wewnętrznych to `\lange` i `\rangle`, a nigdy nie są to znaki mniejszości i większości na klawiaturze, które są symbolami relacji o niewłaściwym kształcie i odstępach.

Dowolny wiersz tej karty można wkleić do [aktywnego placu zabaw](/live/), aby zobaczyć wyrenderowany formularz obok źródła.