---

title: "Spis treści, wykazy rycin, wykazy tabel"
description: "spis treści i dlaczego drugie przejście ma znaczenie."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Spis treści, wykazy rycin, wykazy tabel

Spisu treści w LaTeX-ie nie można zbudować ani utrzymać. Upuszczasz pojedyncze polecenie tam, gdzie chcesz, a LaTeX składa wpisy z nagłówków, które już napisałeś. To samo dotyczy zestawienia rycin i zestawienia tabel, w których zamiast nagłówków gromadzone są podpisy. To jedno z miejsc, w których zadeklarowanie struktury opłaca się bezpośrednio: zmień nazwę sekcji lub przesuń figurę, a sprawa frontu sama się naprawi.

## Trzy polecenia

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` drukuje spis treści w miejscu, w którym się pojawia, zwykle zaraz po stronie tytułowej lub streszczeniu. Każdy ponumerowany `\rozdział`, `\sekcja` i `\podsekcja` pojawia się wraz ze swoim numerem, tytułem i stroną, aż do głębokości określonej przez licznik `todgłębienia` opisany w [lekcji nagłówków](/learn/sections/). `\listoffigures` i `\listoftables` robią to samo dla podpisów rysunków i tabel, przeciągając tekst z każdego `\caption{...}`. W artykułach są one niezwykłe, ale tezy zwykle wymagają obu, umieszczonych na własnych stronach po spisie treści.

## Dlaczego drugie przejście ma znaczenie

Skompiluj **dwa razy** po zmianach strukturalnych. To nie jest przesąd. Tak działa mechanizm. Podczas kompilacji LaTeX nie może wiedzieć, na stronie 2, co znajdzie się na stronie 47, więc zapisuje każdy nagłówek i numer ostatniej strony do pliku pomocniczego (`.toc`, `.lof`, `.lot`). `\tableofcontents` odczytuje plik pozostały z poprzedniego uruchomienia. W świeżym projekcie plik ten jeszcze nie istnieje, więc pierwsza kompilacja generuje pusty spis treści. Po dodaniu lub przeniesieniu sekcji spis treści będzie wyświetlał nieaktualne tytuły lub nieprawidłowe numery stron aż do następnego uruchomienia. Druga kompilacja czyta świeżo napisany plik i wszystko się zgadza. Redaktorzy, którzy uruchamiają latexmk lub jego odpowiednik, zajmują się powtórkami za Ciebie i dlatego mogłeś nigdy tego nie zauważyć. Jeśli spis treści kiedykolwiek będzie wyglądał nieprawidłowo, skompiluj go jeszcze raz, zanim zaczniesz debugować cokolwiek innego.

## Sekcje oznaczone gwiazdką i spis treści

Sekcje oznaczone gwiazdką wymagają `\addcontentsline{toc}{section}{Title}`, jeśli mają pojawić się w spisie treści. Nagłówek oznaczony gwiazdką, taki jak `\sekcja*{Podziękowania}` celowo pomija zarówno numerację, jak i plik zawartości, więc jeśli chcesz, aby znalazł się na liście, sam dodaj wpis. Trzy argumenty polecenia to plik do zapisu („toc”), poziom wpisu („sekcja”) i tekst do wyświetlenia. Umieść wiersz bezpośrednio po nagłówku oznaczonym gwiazdką, tak aby zapisany numer strony był prawidłowy.

Warto wykształcić jeden nawyk: zanim udostępnisz plik PDF, spójrz na spis treści pod kątem charakterystycznych oznak nieaktualnej wersji, takich jak znaki zapytania, brakujące wpisy lub ostatni wpis, który kończy się przed ostatnim rozdziałem. Prawie zawsze jest to wyleczone przez jeszcze jedną kompilację. Złapanie tego samemu jest tańsze niż złapanie tego przez recenzenta. Te same pomocnicze moce taneczne `\ref` i przyjaciele, omówione w [odsyłaczach](/learn/cross-references/).