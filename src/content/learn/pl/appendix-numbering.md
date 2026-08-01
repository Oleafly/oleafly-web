---

title: "Dodatki, które zmieniają numerację w sposób czysty"
description: "dodatek, rozdziały A/B, liczniki, które pozostają spójne."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Dodatki, które zmieniają numerację w sposób czysty

Dodatek zawiera materiał, który wspiera tekst główny, ale go przerywa: długie korekty, instrumenty badawcze, dodatkowe tabele, szczegóły implementacji. Czytelnicy oczekują, że dodatki będą oznaczone literami A, B, C, a nie kontynuowania numeracji rozdziałów, i oczekują, że materiał w środku będzie podążał za nimi, więc rysunek w dodatku A to rysunek A.1, a nie rysunek 47. W LaTeX-ie jest to pojedynczy przełącznik, a nie praca restrukturyzacyjna.

## Przełącznik

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` to deklaracja, a nie środowisko: nie ma czego zamykać. Od miejsca, w którym się pojawi, liczniki cięcia resetują się i przełączają na litery. W klasach `report` i `book` każdy `\rozdział' po nim staje się Dodatkiem A, Dodatkiem B itd., a `\sekcja' w środku staje się A.1. Nadal piszesz tylko własny tekst nagłówka; etykieta „Dodatek A” i napisy pochodzą z zajęć, dokładnie tak, jak numery rozdziałów przed zmianą.

W `artykule`, który nie ma rozdziałów, `\appendix` zmienia etykietę na `\sekcję`: pierwsza sekcja po niej staje się Dodatkiem A. Wszystko dalej pozostaje automatycznie spójne. Spis treści zawiera nagłówki oznaczone literami, a `\etykieta` umieszczona w dodatku prowadzi poprzez `\ref` do "A" lub "A.2" bez żadnej specjalnej obsługi.

## Co renumeruje, a co nie

W „raporcie” i „książce” ryciny, tabele i równania są ponumerowane w rozdziałach, więc wychwytują literę za darmo: pierwszą cyfrą w Załączniku B jest Rysunek B.1. W „artykule” liczniki te przebiegają w sposób ciągły przez cały dokument, a „dodatek” ich nie dotyka, więc numeracja równań po prostu jest kontynuowana. To normalne w przypadku krótkiego artykułu; Walcz z tym tylko wtedy, gdy lokal wyraźnie prosi o numery z przedrostkiem A.

## Kiedy chcesz więcej

Pakiet „dodatek” dodaje udoskonalenia, których brakuje zwykłemu przełącznikowi. Jego środowisko `appendices` może wydrukować słowo „Dodatek” w każdym nagłówku i w spisie treści (`\usepackage[toc,titletoc,title]{appendix}`) i może wstawić stronę oddzielającą ogłaszającą dodatki. W przypadku pracy magisterskiej, której szablon jeszcze tego nie obsługuje, opcje te oszczędzają ręcznego majsterkowania.

Częstym błędem jest samodzielne wpisanie etykiety w nagłówku, jak w `\rozdziale{Dodatek A: Dodatkowe dowody}`. Klasa dodaje własną etykietę, więc wynik będzie brzmiał: „Dodatek A Dodatek A: Dodatkowe dowody”. Nadaj nagłówkowi jedynie tytuł i pozwól maszynie numerującej wykonać swoje jedyne zadanie. Jeśli masz pojedynczy dodatek, jedyny „Dodatek A” jest pytaniem stylistycznym; większość miejsc to akceptuje, a niektórzy wolą nieliterowany `\chapter*{Dodatek}`.