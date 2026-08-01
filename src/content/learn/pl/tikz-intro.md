---

title: "Twoje pierwsze zdjęcie TikZ"
description: "Węzły, krawędzie, potok składający się z trzech pól, który pozostaje wektorem."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Twoje pierwsze zdjęcie TikZ

TikZ to język rysowania znajdujący się w dokumencie LaTeX. Zamiast importować diagram wyeksportowany z innego narzędzia, opisujesz go tekstem, a kompilator go rysuje. Zaletą jest to, że wydruk jest grafiką wektorową przy użyciu własnych czcionek dokumentu, dzięki czemu etykiety dokładnie dopasowują się do otaczającego tekstu i pozostają ostre przy każdym powiększeniu. Koszt polega na tym, że zamiast przeciągać pola, piszesz współrzędne i opcje. W przypadku diagramów zbudowanych z pudełek i strzałek kompromis jest zwykle tego wart. Oto potok składający się z trzech pól, kanoniczny pierwszy obraz:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Węzły

Węzeł to fragment treści, zazwyczaj tekst, umieszczony w danym miejscu, opcjonalnie z narysowanym wokół niego kształtem. W `\node[rysuj, zaokrąglone rogi] (a) {Input};` opcje w nawiasach kwadratowych mówią o narysowaniu granicy węzła i zaokrągleniu jego rogów, `(a)` nadaje węzłowi nazwę, do której możesz się później odwołać, a `{Input}` to tekst wewnątrz. Drugi węzeł używa `right=of a` z biblioteki `positioning`, która umieszcza go na prawo od węzła `a` w odległości określonej przez `węzeł odległość = 1,5 cm` w opcjach środowiska. Umieść węzły względem siebie, a nie według współrzędnych bezwzględnych, a cały diagram dostosuje się, gdy jedna etykieta stanie się dłuższa.

## Krawędzie

Krawędź to linia łącząca dwa punkty. Ponieważ węzły mają nazwy, łączysz je po nazwie: `\draw (a) -- (b);` rysuje linię prostą od węzła `a` do węzła `b`. TikZ zaczyna i kończy linię na granicach węzłów, a nie na ich środkach. Opcja `[-Latex]` ustawia styl końcówki strzałki z biblioteki `arrows.meta`, nadając linii solidny grot strzałki w miejscu docelowym. Wskazówka ma zastosowanie raz na ścieżkę, na jej końcu, dlatego w przykładzie użyto dwóch poleceń `\draw`. Pojedyncza ścieżka `(a) -- (b) -- (c)` umieściłaby grot strzałki tylko w `c`.

## Gdzie dalej iść

Zawiń `tikzpicture` w środowisku `figure`, jeśli potrzebuje podpisu i numeru, dokładnie tak jak obraz. Kod TikZ nie jest renderowany w tych podglądach na stronie, więc skompiluj fragment kodu w projekcie, aby zobaczyć wynik. W Oleafly Diagram Composer może również stworzyć edytowalny TikZ jako punkt wyjścia. Najczęstszym błędem początkujących jest zapomnienie średnika kończącego każde polecenie TikZ, co powoduje długi i mylący błąd. Kiedy diagram przekroczy trzy pola, kontynuuj z [węzłami i strzałkami](/learn/tikz-nodes-arrows/) i [wyrównanymi polami schematu blokowego](/learn/tikz-flowchart/).