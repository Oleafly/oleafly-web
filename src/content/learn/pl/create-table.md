---

title: "Stół przypominający papierowy stół"
description: "tabelaryczne, reguły zakładek, podpis, etykieta."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Stół wyglądający jak papierowy stół

Tabele w LaTeX-ie wykorzystują dwa zagnieżdżone środowiska z różnymi zadaniami. Wewnętrzna „tabela” buduje siatkę komórek. Zewnętrzna „tabela” czyni tę siatkę pływającą, więc może zawierać liczbę, podpis i etykietę, dzięki czemu LaTeX może umieścić ją tam, gdzie jest miejsce na stronie. Dodaj pakiet `booktabs` dla linii poziomych, a wynik będzie wyglądał jak tabela z opublikowanej pracy, a nie zrzut ekranu arkusza kalkulacyjnego.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## Środowisko zewnętrzne

Argument `[htbp]` wskazuje, gdzie LaTeX może umieścić element zmiennoprzecinkowy: tutaj, w tekście, na górze strony, na dole lub na osobnej stronie elementów zmiennoprzecinkowych. Próbuje je w tej kolejności, a przyznanie wszystkich czterech zapobiega daleko odsunięciu się stołu; mechanikę wyjaśniono w [gdzie faktycznie lądują pływaki](/learn/position-figures/). `\centring` centruje siatkę w poziomie. `\caption` drukuje numerowany podpis i, zgodnie z konwencją, podpisy tabel znajdują się nad tabelą, w przeciwieństwie do podpisów rysunków, które znajdują się poniżej. `\label` musi nastąpić po `\caption`, ponieważ etykieta rejestruje ostatnio wydany numer, zgodnie z opisem w [podpisach i etykietach](/learn/captions-labels/). Po umieszczeniu etykiety `Table~\ref{tab:results}` w tekście zawsze wyświetla właściwą liczbę.

## Wewnętrzna siatka

`{lcc}` po `\begin{tabular}` deklaruje jedną kolumnę na literę: `l` jest wyrównane do lewej, `c` jest wyśrodkowane, a `r` będzie wyrównane do prawej. Trzy litery oznaczają trzy kolumny, a każdy wiersz musi zawierać dokładnie tyle komórek. W wierszu znak „&” oddziela komórki, a znak „\\” kończy wiersz. Kolumny tekstowe zwykle najlepiej czytać z wyrównaniem do lewej strony, natomiast krótkie kolumny liczbowe są zwykle wyśrodkowane.

Te trzy reguły pochodzą z zakładek książkowych. `\toprule` otwiera tabelę, `\midrule` oddziela wiersz nagłówka od danych, a `\bottomrule` zamyka go. Zastępują one zwykłe polecenie `\hline` i mają odpowiednio dostrojone odstępy powyżej i poniżej, co w dużej mierze powoduje, że tabela wygląda na profesjonalnie ustawioną. Żadnych pionowych linii i żadnej reguły między wierszami danych: styl „booktabs” celowo pomija oba. Uzasadnienie przedstawiono w [tabelach z trzema regułami](/learn/booktabs-beautiful/).

## Uwagi praktyczne

Najczęstsze błędy początkujących to niedopasowanie liczby separatorów `&` do zadeklarowanych kolumn oraz zapomniane `\\` na końcu wiersza, co powoduje mylące komunikaty o błędach wskazujące następny wiersz. Jeśli nie chcesz liczyć komórek ręcznie, zbuduj siatkę wizualnie za pomocą [generatora tabel](/tools/table-generator/) i wklej wynik do swojego dokumentu.