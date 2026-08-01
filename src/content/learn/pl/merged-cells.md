---

title: "Komórki obejmujące wiersze lub kolumny"
description: "wielokolumnowe, wielowierszowe, cmidrule pod zgrupowanymi nagłówkami."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Komórki obejmujące wiersze lub kolumny

Prawdziwe tabele często wymagają scalonych komórek. Nagłówek taki jak „Wyniki”, który znajduje się nad dwiema kolumnami metrycznymi, obejmuje kolumny, a nazwa modelu, która ma zastosowanie do dwóch wierszy wyników, obejmuje wiersze. LaTeX obsługuje te dwa kierunki za pomocą różnych narzędzi: `\multicolumn` jest wbudowane, podczas gdy `\multirow` pochodzi z pakietu o tej samej nazwie. Oto kompaktowa tabela, która używa obu, plus częściowa reguła z `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Kolumny łączone

`\multicolumn{2}{c}Wyniki}` zastępuje dwie zwykłe komórki jedną. Pierwszy argument określa liczbę kolumn do wchłonięcia, drugi to specyfikacja kolumny tylko dla tej komórki, tutaj „c” oznacza wyśrodkowanie, a trzeci to zawartość. Zwróć uwagę na samotny znak „&” przed nim: pierwsza kolumna tego wiersza jest celowo pusta, więc „Wyniki” zaczynają się w kolumnie 2 i obejmują kolumny 2 i 3. Ponieważ drugi argument lokalnie zastępuje typ kolumny, `\multicolumn{1}{c}{...}` jest także standardową sztuczką polegającą na wyśrodkowaniu pojedynczej komórki nagłówka nad kolumną wyrównaną do lewej.

## Reguła częściowa

`\cmidrule(lr){2-3}` rysuje poziomą linię tylko pod kolumnami od 2 do 3, która wizualnie łączy zgrupowany nagłówek z kolumnami. Opcja `(lr)` przycina lekko regułę na jej lewym i prawym końcu, więc sąsiednie `\cmidrule' nie dotykają się i nie są odczytywane jako oddzielne znaczniki grupy. Jest to polecenie `booktabs`, a przycinanie jest jednym ze szczegółów, które sprawiają, że te tabele wyglądają na spisane, a nie narysowane. Pełny styl oparty na trzech regułach opisano w [tabelach z trzema regułami](/learn/booktabs-beautiful/).

## Łączenie wierszy

`\multirow{2}{*}Nasze}` wypisuje „Nasze” wyśrodkowane w pionie w 2 rzędach. Pierwszy argument to liczba wierszy, drugi to szerokość komórki, gdzie „*” oznacza naturalną szerokość treści, a trzeci to sama treść. Polecenie rezerwuje tylko przestrzeń wizualną, więc drugi wiersz musi nadal zawierać pustą pierwszą komórkę, dlatego też kolejny wiersz zaczyna się od gołego znaku „&”. Zapomnienie o tej pustej komórce powoduje przesunięcie każdej wartości w wierszu o jedną kolumnę w lewo, a komunikat o błędzie nieprawidłowego wyrównania wskazuje na niewłaściwą linię, więc sprawdź najpierw wiersz po `\wielowierszu`.

## Praktyczny limit

Scalone komórki najlepiej trzymać w nagłówkach i grupach krótkich wierszy. Tabela, w której komórki danych rozciągają się w obu kierunkach, jest trudna do odczytania i trudniejsza w utrzymaniu, ponieważ każdy dodany wiersz zmusza do ponownego przeliczenia zakresów. Jeśli zauważysz, że zagnieżdżasz `\multirow` w `\multicumn`, rozważ zamiast tego przebudowę tabeli.