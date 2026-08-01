---

title: "Wzory i struktury chemiczne"
description: "reakcje mhchem i szkic chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Wzory i struktury chemiczne

Notacja chemiczna zwalcza domyślne ustawienia LaTeX-a. W trybie matematycznym symbole elementów są pisane kursywą, tak jakby były zmiennymi, a w trybie tekstowym nie ma żadnych indeksów dolnych. Pracę dzielą dwa pakiety. „mhchem” składa wzory i reakcje na podstawie zwykłej notacji chemicznej, a „chemfig” rysuje diagramy strukturalne.

## Wzory i reakcje z mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

Opcja `version=4` wybiera bieżącą składnię. Wszystkie substancje chemiczne trafiają do `\ce{...}`, który odczytuje ich zawartość tak, jak pisze chemik. W `\ce{H2O}` 2 automatycznie staje się indeksem dolnym, a symbole elementów pozostają pionowe, zgodnie z konwencją. W reakcji „+” otrzymuje odpowiednie odstępy, „->” staje się strzałką reakcji, a 2 przed CO jest rozpoznawane jako współczynnik stechiometryczny, więc pozostaje w pełnym rozmiarze na linii bazowej.

Ten sam zapis zwiększa skalę. Ładunki przemieszczają się jako indeksy górne, więc `\ce{SO4^2-}` daje siarczan z jego ładunkiem 2. Stany skupienia podaje się w nawiasach, np. `\ce{H2O(l)}`; strzałki równowagi są zapisane jako `<=>`; i `\ce{^{14}C}` umieszcza numer izotopu przed symbolem. `\ce` działa zarówno w trybie tekstowym, jak i matematycznym, więc formuła może znajdować się w zdaniu bez dodatkowych ograniczników.

## Struktury z chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` rysuje struktury z zwartego kodu liniowego. Atomy są zapisywane jako ich symbole, a „-” rysuje wiązanie z następnym atomem. Liczba w nawiasach określa kierunek wiązania w krokach co 45 stopni w kierunku przeciwnym do ruchu wskazówek zegara od wschodu: „[2]” wskazuje prosto w górę i „[6]” prosto w dół. Nawiasy otwierają gałęzie od bieżącego atomu, więc „C(-[2]H)(-[6]H)` powoduje wzrost jednego wodoru w górę i jednego w dół, podczas gdy główny łańcuch biegnie dalej w prawo. Przykładem jest metan ciągniony na płasko: centralny węgiel związany z czterema wodorami. Wiązania podwójne i potrójne są zapisywane jako „=” i „~”, a dla struktur cyklicznych i aromatycznych istnieje dedykowana składnia pierścieniowa.

## Uwagi praktyczne

Trzymaj oba narzędzia na swoich pasach. Użyj „mhchem” do wszystkiego, co czyta się od lewej do prawej, jako wzór lub równanie, i „chemfig”, gdy chodzi o geometrię cząsteczki. Obydwa kompilują się przy użyciu standardowego silnika LaTeX i bez zewnętrznego programu do rysowania.

Typowym błędem początkujących jest pisanie formuł w trybie czystej matematyki. `$H_2O$` kompiluje się, ale ustawia H i O kursywą jak zmienne, co jest błędne zgodnie z konwencją. `\ce{H2O}` tworzy formę pionową przy mniejszej liczbie wpisań. Obydwa pakiety można wypróbować na [live placu zabaw](/live/).