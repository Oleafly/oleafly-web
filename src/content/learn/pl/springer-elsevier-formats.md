---

title: "Formaty Springer, Elsevier i LNCS"
description: "llncs, czasopisma Springer Nature i elsarticle: klasy jednokolumnowe i źródło przystosowane do kamery."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Formaty Springer, Elsevier i LNCS

Poza ekosystemami IEEE i ACM dominuje dwóch wydawców: Springer (w tym Springer Nature) i Elsevier. Ich zajęcia wyglądają jaśniej niż dwukolumnowe style konferencji i jest to zgodne z projektem. Wydawca składa ostateczną wersję.

## LNCS: koń pociągowy postępowania

Jeśli Twoja konferencja publikuje w Notatkach z wykładów z informatyki (lub w jego rodzeństwach LNAI i LNBI), piszesz w `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Artykuły LNCS są jednokolumnowe, używają indeksu górnego „\inst{}”, aby przyporządkować autorów do instytutów i mają słynący z napiętego domyślnego budżetu na stronę (często od 12 do 16 stron łącznie z odniesieniami). Klasa nie jest domyślnie dostępna w każdej dystrybucji TeX-a. Pobierz zestaw autorski ze strony LNCS firmy Springer. Jej styl bibliografii to `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Dzienniki Springer Nature

Czasopisma Springera historycznie używały `svjour3` i migrowały do ​​nowszej klasy `sn-jnl` z opcjami stylu dla każdej rodziny czasopism (`sn-mathphys-num`, `sn-basic` i inne). Na stronie czasopisma „Wskazówki dotyczące przesyłania” wymieniono dokładną klasę i opcję. Nie zgaduj: dwa czasopisma Springera mogą chcieć różnych klas.

## Elsevier: elsarticle

Czasopisma Elsevier dzielą jedną klasę, „elsarticle”:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

Opcja „preprint” zapewnia obszerną pojedynczą kolumnę z podwójnymi odstępami do recenzji, a opcja „końcowa” z „1p”, „3p” lub „5p” naśladuje układ druku czasopisma. Style bibliografii to „elsarticle-num” (numerowane) lub „elsarticle-harv” (rok autora), odpowiadające temu, z czego korzysta czasopismo.

## Szybkie porównanie

| Wydawca | Klasa | Kolumny | Styl śliniaczka |
|---|---|---|---|
| Springer LNCS | `llncs` | jeden | `splncs04` |
| Dzienniki Springer Nature | `sn-jnl` (było `svjour3`) | jeden | opcja na czasopismo |
| Elsevier | `elsarticle` | jeden (recenzja) | `elsarticle-num` / `-harv` |

## Dlaczego pojedyncza kolumna? Ponieważ nie jesteś zecerem

Klasy te renderują *rękopis*, a nie ostatnią stronę. Zespół produkcyjny wydawcy ponownie składa zaakceptowane artykuły w układzie redakcji czasopisma. Dlatego też „przesyłanie źródła gotowego do użycia w aparacie” oznacza tutaj coś konkretnego: przesyłasz pliki `.tex`, `.bib` i rysunki, a nie tylko plik PDF, dzięki czemu produkcja może odbudować i zmienić styl papieru. Praktyczne konsekwencje:

- Dbaj o czystość źródła i możliwość jego kompilacji od momentu świeżego zamówienia: żadnych ścieżek bezwzględnych, żadnych brakujących danych
- Nie naruszaj odstępów ani marginesów. Produkcja i tak to usuwa (i może [zostać oznaczony](/learn/page-limits-without-crimes/))
- Korzystaj ze standardowych pakietów. Egzotyczne są przepisywane przez producentów lub odsyłane do Ciebie

Klasy te opierają się na sporej liczbie pakietów, więc minimalna instalacja może spowodować pobranie kilku przy pierwszej kompilacji. Jeśli ktoś nie pojawi się, zobacz [instalowanie brakujących pakietów](/learn/install-missing-package/). Jeśli szablon od razu zawiera błędy, przeprowadź segregację jak każdy [uszkodzony szablon](/learn/fix-broken-template/).