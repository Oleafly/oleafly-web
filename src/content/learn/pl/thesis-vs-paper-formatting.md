---

title: "Formatowanie pracy dyplomowej a formatowanie papieru"
description: "Zajęcia uniwersyteckie, tematyka tytułowa, rozdziały, marginesy oprawy i ponowne wykorzystanie materiałów papierowych."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formatowanie pracy dyplomowej a formatowanie papieru

Artykuł jest formatowany dla wydawcy. Praca dyplomowa jest sformatowana na potrzeby szkoły wyższej, zupełnie innej bestii, rządzącej się zupełnie innymi zasadami. Jeśli napisałeś tylko prace magisterskie, szablon pracy dyplomowej zaskoczy Cię w specyficzny sposób.

## Kto ustala zasady

Artykuły: miejsce zapewnia zajęcia ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) i wszyscy na całym świecie korzystają z tego samego. Tezy: Twoja uczelnia ustanawia własną klasę lub stronę zawierającą zasady typograficzne (marginesy, odstępy między wierszami, treść strony tytułowej) i żadne dwa uniwersytety nie są zgodne. Najpierw uzyskaj oficjalne zajęcia ze strony swojego wydziału lub szkoły wyższej. Jeśli jest stary i nie chce się skompilować, jest to na tyle powszechne, że ma [własną lekcję](/learn/fix-broken-template/).

## Różnice strukturalne

| Aspekt | Papier | Teza |
|---|---|---|
| Jednostka najwyższego poziomu | `\sekcja` | `\rozdział` |
| Baza klas | klasa miejsca | pochodna `książkowa`/`raportowa' |
| Sprawa przednia | tytuł + streszczenie | strona tytułowa, oświadczenie, streszczenie, spis treści, spisy rycin i tabel |
| Długość | 8 do 30 stron | 80 do 300 stron |
| Układ | często dwukolumnowe | pojedyncza kolumna, duże odstępy |
| Boki | jednostronny PDF | często dwustronny do druku |

Rozdziały zmieniają wszystko w dalszej części książki: numeracja zmienia się na „3.2”, liczby na „Rysunek 3.1”, a każdy rozdział zwykle otwiera się na nowej (czasami po prawej stronie) stronie.

## Front to połowa sukcesu

Pierwsza sekwencja tematyczna pracy dyplomowej zazwyczaj obejmuje: stronę tytułową, deklarację oryginalności, streszczenie, podziękowania, spis treści, spis rycin, spis tabel, a następnie rozdział 1. Większość z nich jest zautomatyzowana:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

Rzymsko-arabski taniec numeracji stron przyprawia każdego raz, [numery tytułów i stron](/learn/front-mater-page-numbers/) dobrze to opisują.

## Drukowanie dwustronne i marginesy oprawy

Prace drukowane są zazwyczaj dwustronne (opcja klasy „twoside”), co powoduje, że marginesy są asymetryczne: margines wewnętrzny jest szerszy, aby przetrwać oprawę. Regulamin Twojej uczelni będzie mówił np. „lewy margines 35 mm, inne 25 mm”, co w dokumencie dwustronnym oznacza *wewnętrzny*, a nie lewy. Nie walcz z tym za pomocą ręcznego `\hspace`, opcja klasy plus ustawienia `geometrii` radzą sobie z tym:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

„openright” wymusza umieszczanie rozdziałów na stronach prawych, co jest standardem w przypadku kopii oprawionych.

## Ponowne wykorzystanie artykułów jako rozdziałów

Większość prac dyplomowych pochłania opublikowane artykuły, a większość uniwersytetów wyraźnie na to pozwala. Mechanika: usuń z każdego artykułu preambułę miejsca, w razie potrzeby obniż jego sekcję, ujednolić notację i makra w rozdziałach oraz połącz bibliografie w jedną. Trzymanie każdego rozdziału w osobnym pliku ułatwia zarządzanie tym zadaniem. [Podział rozdziałów na pliki](/learn/split-chapter-files/) pokazuje konfigurację `\input`/`\include`, która utrzymuje rozsądną kompilację 200-stronicową.

Jedno szczere ostrzeżenie: zajęcia z prac dyplomowych na uniwersytecie zwykle zajmują dużo pakietów, więc pierwsza kompilacja na świeżej maszynie może spowodować usunięcie partii pakietów, zanim się powiedzie. Niech zakończy się raz, a kolejne kompilacje będą szybkie.