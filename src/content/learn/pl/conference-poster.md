---

title: "Plakaty na A0"
description: "tikzposter, Beamerposter lub Geometria plus TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Plakaty na A0

Plakat konferencyjny to pojedyncza strona, zwykle formatu A0 lub A1, która musi być czytelna z odległości półtora metra. LaTeX dobrze radzi sobie z formatem, ponieważ plakat może bezpośrednio ponownie wykorzystać równania, rysunki i bibliografię z artykułu. Jednak normalna klasa dokumentu tego nie obejdzie: czcionki, marginesy i układ kolumn wymagają wersji w skali plakatu. Trzy podejścia dotyczą prawie każdego plakatu LaTeX na wolności.

## Trzy opcje

Zajęcia „tikzposter” to najprostsza droga do współczesnego plakatu akademickiego. Organizuje treść w kolorowe bloki ułożone w kolumny, dostarcza kilka kompletnych motywów i sama obsługuje duży rozmiar papieru i skalowane czcionki. Szkielet wygląda tak:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Opcje zajęć ustawiają 25-punktową czcionkę bazową, papier A0 i orientację pionową. Każda `\kolumna{0.5}` zajmuje ułamek szerokości plakatu, a każdy `\block{title}treść}` staje się jednym panelem zatytułowanym. Zmiana `\usetheme` powoduje zmianę stylu każdego bloku na raz.

Pakiet „beamerposter” rozszerza Beamer do rozmiarów plakatów, więc motyw talii, kolory i środowiska „bloków” można przenieść do jednej gigantycznej ramki. Jest to naturalny wybór, gdy Twoja grupa już utrzymuje style Beamera i opiera się na nim wiele szablonów plakatów uniwersyteckich.

Trzecia opcja to zwykła klasa dokumentu z pakietem „geometria” ustawionym na wymiary A0 plus TikZ do dekoracji. Daje to pełną kontrolę nad każdym milimetrem i tak powstają najbardziej ciężko zaprojektowane plakaty, ale rusztowanie kolumnowe budujesz sam, więc zaplanuj na to prawdziwy czas.

## Praktyczne porady

Niezależnie od tego, którą drogę wybierzesz, zacznij od działającego szablonu, a nie od pustego pliku, na przykład z [galerii](/templates/) i zamień zawartość blok po bloku. Ustaw rozmiar i orientację papieru już pierwszego dnia, ponieważ ich późniejsza zmiana powoduje uszkodzenie każdej ręcznie ustawionej szerokości. Po wydrukowaniu tekst główny powinien mieć około 24–32 punktów; wszystko poniżej 20 punktów pozostanie nieprzeczytane. Preferuj figury wektorowe. Wykres wyeksportowany do kolumny papierowej zamienia się w papkę po przeskalowaniu do szerokości plakatu, dlatego należy ponownie wygenerować figury w rozmiarze plakatu, zamiast je rozciągać.

Najczęstszą porażką jest traktowanie plakatu jak skompresowanego papieru. Zaplanuj mniej więcej jedną trzecią początkowej liczby słów, pozwól, aby liczby niosły argument i sprawdź wynik, drukując jeden blok pliku PDF na formacie A4 w pełnej skali, aby ocenić prawdziwy rozmiar czcionki przed wysłaniem pliku do plotera.