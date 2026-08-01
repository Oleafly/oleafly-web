---

title: "Panele oznaczone a, b, c"
description: "podtytuł dla rysunków wielopanelowych pod jednym podpisem."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Panele oznaczone a, b, c

W artykułach stale potrzebne są figury wielopanelowe: architektura w panelu (a), krzywa uczenia się w (b), ablacja w (c), wszystkie mają ten sam numer ryciny i jeden ogólny podpis. Najprostszym sposobem na zbudowanie tego jest pakiet `subcaption`, który udostępnia środowisko `subfigure`, które automatycznie obsługuje litery (a), (b), podpisy dla poszczególnych paneli i odniesienia.

## Wzór

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Oto, co robi każdy element. Zewnętrzne środowisko „figure” jest normalnym środowiskiem zmiennoprzecinkowym, a „[htbp]” zawiera listę miejsc docelowych, które LaTeX może wypróbować, w kolejności: tutaj w tekście, na górze strony, na dole strony lub na dedykowanej stronie zmiennoprzecinkowej. Każda „podfigura” jest ramką o określonej szerokości, tutaj „0,48\textwidth” (48 procent szerokości tekstu). Dwa panele o wartości 0,48 pozostawiają niewielką szczelinę, a „\hfill” pomiędzy nimi rozciąga się, tak że panele przylegają do lewego i prawego marginesu. Wewnątrz każdego panelu `width=\linewidth` skaluje obraz do szerokości panelu, a nie całej strony. Ten ostatni szczegół jest tym, w którym ludzie najczęściej się mylą.

`\caption` wewnątrz `podfigury` tworzy małą etykietę w stylu „(a) First” pod tym panelem. „\caption” na końcu, wewnątrz „rysunku”, ale na zewnątrz „podfigury”, to główny podpis zawierający numer rysunku. Zachowaj każdą „etykietę” bezpośrednio po „\podpisie”, ponieważ etykieta rejestruje ostatni wydany numer, jak wyjaśniono w [podpisy i etykiety](/learn/captions-labels/).

## Panele referencyjne

W przypadku powyższych etykiet `\ref{fig:p}` wypisuje liczbę cyfr, powiedzmy 2, podczas gdy `\ref{fig:p-a}` wypisuje 2a. Jeśli chcesz samą literę, `\subref{fig:p-a}` wypisuje tylko "a", przydatne w przypadku zdań takich jak "panele (a) i (b)". To jest prawdziwa korzyść z „podpisów” zamiast ręcznego wpisywania „(a)” pod obrazami. Litery zmieniają numerację po dodaniu lub zmianie kolejności paneli, a każde odniesienie pozostaje prawidłowe.

## Wiersze, odstępy i częsty błąd

W przypadku trzeciego panelu albo zmniejsz szerokość do około „0,31\textwidth” i dodaj kolejną „podfigurę” z „\hfill” pomiędzy każdą parą, albo rozpocznij nowy wiersz, pozostawiając pustą linię między rzędami podfigurów. Pusta linia w wierszu jest jednak klasycznym błędem: każda pusta linia pomiędzy dwoma środowiskami „podfigurek” rozpoczyna nowy akapit, który powoduje ułożenie paneli pionowo, a nie obok siebie. Jeśli panele nie chcą być umieszczone w jednym rzędzie, poszukaj najpierw pustej linii i pamiętaj, że `%` na końcu linii komentuje niewidoczną przestrzeń na końcu linii, która może również spowodować, że panel będzie zbyt szeroki, aby się zmieścił.