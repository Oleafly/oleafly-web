---

title: "Dwa panele w jednym rzędzie"
description: "ministrony obok siebie bez wojny pakietowej."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Dwa panele w jednym rzędzie

Czasami chcesz mieć dwa obrazy obok siebie, każdy z własnym podpisem i własnym numerem rysunku. Nie potrzebujesz do tego specjalnego pakietu. Zwykłe pola „ministrony” w pojedynczym środowisku „figury” spełniają swoje zadanie, a ponieważ oba obrazy znajdują się w jednym elemencie pływającym, LaTeX nigdy nie może ich rozdzielić na różne strony.

## Wzór

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

„Ministrona” to pudełko zachowujące się jak miniaturowa strona: ma stałą, wybraną przez Ciebie szerokość, a jej zawartość jest zawijana i układana w stosy w obrębie tej szerokości. Tutaj każda ministrona zajmuje `0,48\textwidth`, co oznacza 48 procent szerokości tekstu. To celowo pozostawia 4 procent nieodebrane, a „\hfill” pomiędzy dwoma polami to rozciągliwa przestrzeń, która rozszerza się, aby ją wypełnić, wypychając jeden panel do lewego marginesu, a drugi do prawego. Jeśli ustawisz obie szerokości na `0,5\textwidth`, będą one sumować dokładnie szerokość linii bez miejsca na separację, a drugie pole spadnie do następnej linii, co jest najczęstszym powodem, dla którego układy obok siebie tajemniczo układają się w pionie.

Wewnątrz każdej ministrony parametr `width=\linewidth` skaluje obraz do szerokości otaczającego go pola, a nie do całej strony. Zamiast tego użycie `\textwidth` powoduje częsty błąd, który powoduje, że każdy obraz ma szerokość równego bloku pełnego tekstu, co gwarantuje przepełnienie.

Zwróć uwagę, gdzie znajdują się podpisy: wewnątrz każdej ministrony. Daje to każdemu panelowi pełny podpis z własnym numerem, więc na tej figurze powstają, powiedzmy, Rysunek 3 i Rysunek 4, umieszczone w jednym rzędzie. Zewnętrzne opcje umieszczania `[htbp]` informują LaTeX-a, że ​​może umieścić element zmiennoprzecinkowy tutaj, na górze strony, na dole lub na stronie zmiennoprzecinkowej, w preferowanej kolejności.

## Wyrównywanie wierzchołków i mieszanie zawartości

Jeśli dwa obrazy mają różną wysokość, ich wyrównanie w pionie może wyglądać niewłaściwie, ponieważ ministrony domyślnie są wyrównywane do środka. Napisz `\begin{minipage}[t]{0.48\textwidth}`, aby zamiast tego wyrównać je do góry. Ministrony również nie dbają o to, co zawierają, więc ten sam układ umieszcza rysunek obok tabeli lub obraz obok akapitu tekstu objaśniającego, do czego nie są przeznaczone pakiety w stylu podfigurek.

## Kiedy zamiast tego używać figur podrzędnych

Jedyne, czego ten wzór nie może dać, to panele oznaczone (a) i (b) pod jednym wspólnym podpisem i pojedynczym numerem. Gdy będziesz potrzebować „Rysunku 5(a)” zamiast dwóch niezależnych figur, przełącz się na [figury podrzędne](/learn/subfigures-abc/). Ogólna zasada: ministrony są przeznaczone dla figurek, które przypadkiem są sąsiadami, podczas gdy podfigury dotyczą jednej figurki, która tak się składa, że ​​ma części.