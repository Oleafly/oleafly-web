---

title: "Wskaż inne części pliku PDF"
description: "label i ref, plus sprytny dla automatycznych nazw."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Wskaż inne części pliku PDF

Wpisanie ręcznie „zobacz rysunek 3” to obietnica, której nie możesz dotrzymać. Dodaj jedną cyfrę wcześniej w artykule i każdą ręcznie wpisaną liczbę po niej, która jest błędna. LaTeX rozwiązuje ten problem za pomocą dwuczęściowego mechanizmu: „\label” dołącza wybraną przez ciebie nazwę do ponumerowanej rzeczy, a „\ref” wypisuje liczbę, z którą ta rzecz się skończyła. Odwołujesz się do nazw, a kompilator utrzymuje liczby uczciwe.

## Etykieta i nr ref

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` rejestruje ostatnio przypisany numer, w tym przypadku sekcji, pod kluczem `sec:methods`. Później `\ref{sec:methods}` wypisuje tę liczbę, a `\eqref` jest wariantem amsmath, który dodaje do równań konwencję nawiasów, wyświetlając „(1)” zamiast „1”.

W tym przykładzie dwa szczegóły mają ogromne znaczenie. Po pierwsze, wewnątrz figury etykieta musi znajdować się po `\caption`, ponieważ podpis jest krokiem licznika figury; etykieta umieszczona przed nią po cichu pobiera zamiast tego numer bieżącej sekcji. Po drugie, `~` w `Figure~\ref{...}` jest spacją nierozdzielającą, która utrzymuje słowo i jego numer w tym samym wierszu, zamiast pozwalać, aby „Figura” kończyła jedną linię, a „3” zaczynała następną.

Przedrostki `sec:`, `fig:` i `eq:` są czystą konwencją. LaTeX ich nie wymaga, ale sprawiają, że klucze są czytelne i pozwalają edytorowi na automatyczne uzupełnianie grupowania etykiet według rodzaju.

## Dlaczego widzisz?

Przy pierwszej kompilacji po dodaniu etykiety `\ref` wypisuje `?`. Liczby są rozpoznawane poprzez plik `.aux` zapisany podczas poprzedniego uruchomienia, więc nowa etykieta wymaga jeszcze jednej kompilacji, aby się pojawiła; [dlaczego kompilujesz więcej niż raz](/learn/compile-to-pdf/) wyjaśnia mechanizm. Znak „???”, który przetrwa dwie kolejne kompilacje, prawie zawsze oznacza, że ​​klucz w `\ref` nie pasuje do klucza w `\label`.

## sprytnyef napisze słowo za Ciebie

Za pomocą sprytnegoef (załaduj po hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` wypisuje „Rysunek 3” wraz z nazwą typu i dostosowuje się, jeśli zamiast tego etykieta okazuje się tabelą lub równaniem. `\Cref` rozpoczyna zdanie wielką literą, a `\cref{eq:a,eq:b,eq:c}` kompresuje listę do zakresu. Zwróć uwagę na kolejność ładowania: sprytnyef jest jednym z niewielu pakietów, które muszą nastąpić po [hyperref](/learn/hyperlinks/), co jest odwrotnością zwykłej reguły. Adoptuj wcześnie. Dopasowywanie `\cref` do papieru pełnego ręcznie pisanych fraz „Figure~\ref” jest żmudne.