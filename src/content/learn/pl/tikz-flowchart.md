---

title: "Wyrównane pola schematu blokowego"
description: "pozycjonowanie biblioteki tak, aby kolumny miały wspólną krawędź."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Wyrównane pola schematu blokowego

Schemat blokowy wygląda amatorsko z jednego powodu: pola, które prawie się pokrywają. TikZ pozwala uniknąć tego problemu pod względem konstrukcyjnym, ponieważ każde pudełko jest umieszczone względem drugiego, więc kolumna pudełek ma wspólną oś ze względu na konstrukcję, a nie gałkę oczną. Drugim składnikiem jest nazwany styl, więc wszystkie pudełka są zgodne co do kształtu i minimalnego rozmiaru. Oto pionowy, trzyetapowy przepływ:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Jednorazowe zdefiniowanie stylu

Linia `box/.style={...}` tworzy styl wielokrotnego użytku o nazwie `box`. Jego zawartość to zwykłe opcje węzła: „draw” nadaje węzłowi obramowanie, „zaokrąglone rogi” zmiękcza je, „align=center” centruje wieloliniowy tekst wewnątrz węzła, a „minimalna szerokość=2,8 cm” wymusza na każdym polu co najmniej tę szerokość, aby krótkie etykiety nie kurczyły się do małych pudełek. Od tego momentu `\node[box]` stosuje cały zestaw. Jeśli chcesz uzyskać kolor wypełnienia lub większą szerokość, zmień jedną linię, a cały wykres zostanie zaktualizowany. To jest diagram, który utrzymujesz, a nie ten, który przerysowujesz.

## Odstępy w dwóch kierunkach

`odległość węzła=10mm i 14mm` ustawia domyślne odstępy używane przez bibliotekę `pozycjonowania`: pierwsza wartość to odległość pionowa, druga pozioma. Po wykonaniu tej czynności polecenie „below=of i” umieszcza pole procesowe 10 mm poniżej pola wejściowego, od krawędzi do krawędzi i idealnie na nim wyśrodkowane. Druga kolumna użyłaby „right=of p” i wylądowałaby 14 mm w bok. Ponieważ każde umiejscowienie łączy istniejący węzeł, wstawienie kroku oznacza dodanie jednego węzła i aktualizację odniesienia „poniżej”. Wszystko poniżej przesuwa się wraz z nim. Możesz także zastąpić odległość na węzeł, jak w przypadku „poniżej = 15 mm i”.

## Łączenie stopni

Każde `\draw[-Latex] (i) -- (p);` rysuje strzałkę od jednego nazwanego węzła do następnego, przy czym `-Latex` wybiera solidny grot strzałki z biblioteki `arrows.meta` na końcu docelowym. Strzałki łączą się automatycznie na granicach węzłów. W przypadku gałęzi decyzyjnej rysuj z określonych kotwic, na przykład „(p.east)”, aby wyjść z prawej strony, i wyznaczaj trasę z zakrętami, takimi jak `-- ++(2,0) |-`, gdy wykres wymaga narożników.

Dane wyjściowe TikZ nie są renderowane w tych podglądach na stronie, więc skompiluj fragment, aby go zobaczyć. Klasycznym błędem w schematach blokowych jest umieszczenie kilku pól ze współrzędnymi bezwzględnymi „tylko ten jeden raz”: to właśnie te pola zostaną przesunięte po kolejnej edycji. Zachowaj względność każdego miejsca docelowego i zobacz [węzły i strzałki](/learn/tikz-nodes-arrows/), aby zapoznać się z podstawowymi opcjami umieszczania.