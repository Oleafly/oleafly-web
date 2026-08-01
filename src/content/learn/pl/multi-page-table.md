---

title: "Tabele dłuższe niż jedna strona"
description: "powtarzające się nagłówki i stopki longtable."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tabele dłuższe niż jedna strona

Zwykłe środowisko „tabelowe” to element zmiennoprzecinkowy, który musi mieścić się na jednej stronie. Daj mu sześćdziesiąt wierszy, a LaTeX albo umieści go na stronie pływającej i pozwoli mu się przepełnić, albo odłoży go na zawsze. Rozwiązaniem jest pakiet `longtable`, który składa tabelę, która dzieli strony na strony i powtarza nagłówek na każdej z nich, tak jak ma to miejsce w przypadku wydruku w arkuszu kalkulacyjnym.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Jak działają bloki nagłówka

„Longtable” zaczyna się od maksymalnie czterech bloków deklaracji przed rzeczywistymi wierszami danych. Wszystko powyżej `\endfirsthead` to nagłówek wydrukowany raz, na samym początku tabeli. Wszystko pomiędzy `\endfirsthead` i `\endhead` to nagłówek powtarzany u góry każdej kolejnej strony, dlatego w przykładzie dwukrotnie pojawia się ta sama linia „Klucz i wartość”. Blok kończący się na `\endfoot` jest drukowany na dole każdej strony, której dotyka tabela, tutaj jest to tylko zamykająca `\bottomrule`. Istnieje również „\endlastfoot” dla materiału, który powinien pojawić się tylko pod ostatnimi wierszami, np. linią sumy. Jeśli potrzebujesz wskazówki dotyczącej kontynuacji, typowym wzorcem jest `\midrule \multicolumn{2}{r}kontynuacja na następnej stronie} \\` w stopce i prawdziwa `\dolna reguła` w ostatniej stopie.

Po deklaracjach następują wiersze danych, zapisane dokładnie tak, jak w zwykłej tabeli, ze znakami „&” między komórkami i znakami „\\” na końcu każdego wiersza. Reguły „booktabs” działają bez zmian. Zobacz [tabele z trzema regułami](/learn/booktabs-beautiful/), aby dowiedzieć się, co zastępują.

## To nie jest pływak i co to oznacza

Najważniejszą różnicę w zachowaniu można ująć w jednym zdaniu: „longtable” nie jest pływakiem. Zaczyna się dokładnie tam, gdzie go umieścisz w źródle, kończy się w miejscu podziału stron i nie przyjmuje argumentu `[htbp]`. Zmienia to również sposób działania napisów. Nie zawijaj `longtable` w środowisku `table`. Zamiast tego wstaw `\caption{...}\\` wewnątrz samej tabeli, jako pierwszą linię bloku pierwszego nagłówka, a będzie on ponumerowany w tej samej kolejności, co inne tabele.

## Zanim zaczniesz na nim polegać, musisz wiedzieć dwie rzeczy

Po pierwsze, szerokość kolumn jest ustalana globalnie, więc LaTeX może potrzebować kilku przebiegów kompilacji, zanim kolumny przestaną się przesuwać. Kontynuuj kompilację, aż układ się uspokoi. Po drugie, elementu „longtable” nie można używać w układzie dwukolumnowym, co wyklucza go w przypadku większości szablonów konferencji. W dokumentach tych realistyczne opcje obejmują zmniejszenie tabeli, podzielenie jej na części lub przeniesienie do jednokolumnowego dodatku.