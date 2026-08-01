---

title: "Algorytmy i wykazy źródeł"
description: "szkic algorytmu2e i listy prawdziwego kodu."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algorytmy i wykazy źródeł

W artykułach przedstawiono kod w dwóch różnych formach, a LaTeX ma dla każdej z nich osobne narzędzie. Pseudokod to wyidealizowany szkic algorytmu, złożony ze słów kluczowych i matematyki, a pakiet `algorithm2e` go obsługuje. Listy źródłowe to prawdziwy kod odtworzony dosłownie i czcionką o stałej szerokości, a pakiet `listings` obsługuje je. Wybór niewłaściwego narzędzia jest częstym źródłem tarć, dlatego warto przyjrzeć się obydwom.

## Pseudokod z algorytmem2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Opcje pakietu ustalają styl wizualny: „ruled” rysuje poziome linie nad i pod algorytmem i umieszcza podpis na górze, zgodnie z konwencją, jakiej oczekuje większość miejsc, podczas gdy „vlined” rysuje małą pionową linię oznaczającą zasięg każdego bloku, dzięki czemu zagnieżdżenie pozostaje czytelne bez dużych wcięć. Środowisko `algorytmu` jest zmiennoprzecinkowe, podobnie jak figura, więc zawiera `\caption`, który podaje numer, który `\ref` może zacytować.

Wewnątrz `\While{condition}{body}` ustawia pętlę za pomocą pogrubionego słowa kluczowego, warunku i treści w postaci wciętego bloku. `\For`, `\If` i `\Return` działają według tego samego wzorca. Instrukcje kończą się znakiem `\;`, który wypisuje terminator linii i rozpoczyna nową linię. Zapominanie o tym jest klasycznym błędem początkujących: linie biegną razem. Ponieważ jest to zwykły LaTeX, matematyka typu `$\theta$` działa inline i do tego właśnie służy pseudokod: do opisywania reguły aktualizacji w notacji, a nie w jakimkolwiek konkretnym języku.

## Prawdziwy kod z listami

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

Środowisko `lstlisting' dokładnie odtwarza jego zawartość, zachowując białe znaki i dosłownie traktując znaki specjalne, dzięki czemu możesz wkleić kod bez konieczności uciekania przed niczym. Opcja `language=Python` włącza podświetlanie słów kluczowych dla tego języka, a `listings` zna dziesiątki innych. Domyślnie wynik jest zwykły. Większość ludzi dodaje jednorazowe `\lstset{basicstyle=\ttfamily\small, Numbers=left}` w preambule, aby uzyskać czcionkę o stałej szerokości i rozsądnym rozmiarze z numerami linii. Aby dołączyć plik bezpośrednio zamiast wklejać, `\lstinputlisting[language=Python]{train.py}` odczytuje go z dysku, co zapewnia synchronizację artykułu z rzeczywistym źródłem. Jeśli chcesz kolorowego podświetlenia o wysokiej wierności, pakiet „minted” jest silniejszą alternatywą, kosztem konieczności zewnętrznego narzędzia i ucieczki powłoki.

## Wybieranie między nimi

Użyj pseudokodu w treści papierowej, aby przekazać pomysł i zarezerwuj dosłowne listy dla artefaktów, w których liczy się dokładny kod, takich jak dodatki lub opisy narzędzi. Częstym błędem jest umieszczenie `lstlisting` w ramce Beamera bez opcji `[fragile]`, co kończy się niepowodzeniem z powodu nieprzezroczystego błędu; ta sama uwaga pojawia się w [pierwszej talii Beamer](/learn/beamer-basics/).