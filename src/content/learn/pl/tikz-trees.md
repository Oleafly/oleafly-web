---

title: "Drzewa i proste wykresy"
description: "pokrętła składni i odstępów podrzędnych."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Drzewa i proste wykresy

Hierarchie pojawiają się stale: drzewa analizy, drzewa decyzyjne, układy plików, taksonomie. Rysowanie pojedynczych pudełek za pomocą „pozycjonowania” działa, ale ręczne utrzymywanie rodzeństwa w równomiernym rozmieszczeniu i równomiernych odstępach między poziomami jest żmudne. Biblioteka TikZ „trees” pozwala zamiast tego opisać samą hierarchię za pomocą zagnieżdżonych operacji „dziecko” i obliczyć układ:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Czytanie składni potomnej

Zdjęcie zawiera jedno stwierdzenie. Zaczyna się od korzenia, `\węzeł{A}`, a każde `dziecko{...}` dołączone do niego deklaruje jedno poddrzewo. Dziecko zwykle zawiera „węzeł{...}” dla własnej etykiety i może zawierać dalsze operacje „dziecko”, w ten sposób „C” otrzymuje dzieci „D” i „E”. Zagnieżdżenie nawiasów odzwierciedla zagnieżdżenie drzewa, dzięki czemu można odczytać strukturę bezpośrednio z wcięcia. TikZ umieszcza każdy poziom poniżej poprzedniego i automatycznie rysuje łączące się krawędzie. Instrukcja one kończy się pojedynczym średnikiem po ostatnim nawiasie. Brakujący lub dodatkowy średnik wewnątrz struktury jest tutaj częstą przyczyną błędów.

## Trzy pokrętła układu

Opcje u góry kontrolują wygląd i odstępy. `każdy węzeł/.style={draw, koło, minimalny rozmiar=7mm}` stosuje styl do wszystkich węzłów jednocześnie: każdy otrzymuje narysowaną ramkę, okrągły kształt i minimalną średnicę 7 mm, tak aby pojedyncze litery tworzyły jednolite okręgi. „Odległość poziomu = 12 mm” ustawia pionową szczelinę między rodzicem a jego dziećmi. „Odległość rodzeństwa = 18 mm” ustawia poziomą szczelinę pomiędzy sąsiednimi dziećmi tego samego rodzica.

Odległość między rodzeństwem to pokrętło, które będziesz regulować najczęściej. Biblioteka „drzewa” rezerwuje tę samą szerokość dla każdego poddrzewa na danym poziomie, więc szerokie poddrzewa mogą kolidować, jeśli wartość jest zbyt mała. Standardowym rozwiązaniem jest zwiększenie odstępów w pobliżu szczytu, gdzie poddrzewa są najszersze, z ustawieniami dla poszczególnych poziomów, takimi jak `poziom 1/.style={odległość rodzeństwa=36mm}` i `poziom 2/.style={odległość rodzeństwa=18mm}`. Jeśli Twoje etykiety różnią się znacznie szerokością, przełącz się z okręgów na prostokąty, usuwając „okrąg” ze wspólnego stylu.

## Poza małymi drzewami

Krawędzie przejmują stylizację poprzez „krawędź z elementu nadrzędnego/.styl”, na przykład w celu dodania grotów strzałek lub grubszych linii. W przypadku drzew mających więcej niż kilkanaście węzłów lub w przypadku ogólnych grafów z cyklami biblioteka „drzew” staje się ograniczona. Pakiet „leśny” obsługuje duże drzewa z automatycznym pakowaniem. Biblioteka `graphs` z algorytmami `graphdrawing` obejmuje dowolne wykresy, chociaż ta ścieżka wymaga LuaLaTeX. TikZ nie renderuje się w tych podglądach na stronie, więc skompiluj przykład, aby zobaczyć układ. Zacznij od podstaw w [swoim pierwszym obrazku TikZ](/learn/tikz-intro/), jeśli ta składnia jest nowa.