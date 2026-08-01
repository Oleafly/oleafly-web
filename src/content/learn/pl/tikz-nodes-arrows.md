---

title: "Węzły i strzałki"
description: "Nazwane węzły, względne rozmieszczenie, końcówki strzałek."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Węzły i strzałki

Prawie każdy diagram TikZ ogranicza się do dwóch składników. Węzeł to umieszczony fragment treści, zwykle oznaczony prostokąt lub okrąg. Krawędź to linia lub strzałka łącząca dwa węzły. Gdy już będziesz mógł umieszczać węzły i łączyć je, schematy blokowe, potoki i diagramy blokowe będą tymi samymi ćwiczeniami w różnych rozmiarach. Poniższy przykład umieszcza dwa nazwane pola i rysuje między nimi opisaną strzałkę:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Nazywanie i umieszczanie węzłów

W `\node[draw] (src) {Source};` opcje nawiasów nadają styl węzłowi, a `draw` oznacza narysowanie jego krawędzi, bez czego otrzymasz pływający tekst. `(src)` to nazwa węzła, a `{Source}` to jego zawartość. Nazwa jest ważną częścią: pozwala innym poleceniom odnosić się do tego węzła bez znajomości jego współrzędnych.

Drugi węzeł pokazuje, dlaczego to ma znaczenie. Wartość `right=2cm of src` pochodzi z biblioteki `positioning` i umieszcza `dst` dwa centymetry na prawo od `src`, mierząc pomiędzy ich krawędziami. Biblioteka udostępnia także kombinacje „lewy=z”, „powyżej=z”, „poniżej=z” oraz kombinacje ukośne, takie jak „nad prawym=z”. Zbuduj w ten sposób diagram (każdy węzeł względem istniejącego), a układ pozostanie nienaruszony, gdy tekst zmieni rozmiar. Współrzędne bezwzględne, takie jak „węzeł w (4,2)” nadal mają zastosowanie, ale zbudowany na nich diagram wymaga ręcznej zmiany numeracji za każdym razem, gdy rośnie jedno pole.

## Rysowanie strzałki

`\draw (src) -- (dst);` rysuje linię prostą pomiędzy dwoma nazwanymi węzłami, a TikZ automatycznie zaczyna i kończy linię na granicach węzłów, a nie na ich środkach. Opcja `[-{Latex}]` określa końcówki strzałek: nic przed łącznikiem oznacza brak końcówki, a `Latex` po wybraniu pełnego grotu strzałki z biblioteki `arrows.meta` w miejscu docelowym. Zapisanie `{Latex}-{Latex}` dałoby podwójną strzałkę.

„Węzeł[powyżej] {krawędź}” ścieżki środkowej to etykieta dołączona do samej linii. Węzeł zapisany wewnątrz ścieżki jest domyślnie umieszczany w tym punkcie ścieżki, w połowie drogi, a „powyżej” przesuwa go tuż nad linią, tak aby tekst nie znajdował się na obrysie. Jest to standardowy sposób opisywania przejść i przepływów danych.

## Nawyki, które się opłacają

Nazwij każdy węzeł, nawet na małych diagramach. Nie można połączyć się z nienazwanymi węzłami, a małe diagramy rzadko pozostają małe. Z tego samego powodu preferuj umieszczanie względne od „pozycjonowania” zamiast współrzędnych bezwzględnych. Każda instrukcja TikZ kończy się średnikiem. Pominięcie jednego z nich jest najczęstszym błędem TikZ, a komunikaty często odbiegają od prawdziwego problemu. Aby uporządkować wiele pól w uporządkowane wiersze i kolumny, przejdź do [wyrównanych pól schematu blokowego](/learn/tikz-flowchart/).