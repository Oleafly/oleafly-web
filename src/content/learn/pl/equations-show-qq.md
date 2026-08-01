---

title: "Znaki zapytania zamiast cyfr"
description: "Etykiety wymagają kolejnej przepustki; umieszczenie etykiety po podpisach."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Znaki zapytania zamiast liczb

Kompilujesz i tam, gdzie powinna znajdować się liczba lub numer równania, plik PDF pokazuje „?”. To nie jest błąd w twoim źródle. W ten sposób LaTeX renderuje odniesienie, którego nie może jeszcze rozwiązać, a poprawka zwykle po prostu kompiluje się ponownie.

## Dlaczego jedno przejście nie wystarczy

LaTeX czyta dokument od góry do dołu w jednym przebiegu. Kiedy napotka `\label`, zapisuje bieżący numer do pliku `.aux`; kiedy napotka `\ref`, szuka numeru w górę od pliku `.aux` zapisanego w poprzednim uruchomieniu. W świeżej kompilacji nie ma żadnego poprzedniego uruchomienia, więc każde odwołanie jest wypisywane jako `?`. Drugi przebieg odczytuje wypełniony plik `.aux` i wypełnia liczby. Kompilator dołączony do Oleafly wykonuje się ponownie automatycznie, aż liczby się ustalą, ale jeśli ręcznie uruchomisz `pdflatex`, druga kompilacja będzie Twoim zadaniem.

## Gdy ?? przetrwa drugie przejście

Jeśli znaki zapytania nadal występują, wykonaj trzy kontrole. Najpierw porównaj pisownię w `\ref` z `\label` znak po znaku; w etykietach rozróżniana jest wielkość liter i liczą się niepotrzebne spacje. Po drugie, sprawdź, gdzie znajduje się etykieta. `\label` rejestruje wartość ostatnio wykonanego licznika, a w zmiennoprzecinkowym to `\caption` przesuwa licznik, więc etykieta musi znajdować się po podpisie:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Etykieta umieszczona przed podpisem kompiluje się bez zarzutu, ale wskazuje niewłaściwy licznik, zwykle bieżącą sekcję, więc odwołanie wypisuje wiarygodną, ​​ale błędną liczbę zamiast „?”. Ten wariant jest gorszy, bo łatwo go przeoczyć. Po trzecie, jeśli plik `.aux` został usunięty w połowie lub kompilacja została przerwana, nagrane etykiety mogą być niekompletne; przekompiluj ponownie z czystego stanu.

## Czytanie ostrzeżeń

Dziennik informuje, w którym przypadku się znajdujesz. „Były niezdefiniowane odniesienia” oznacza, że ​​co najmniej jedno `\ref` nic nie znalazło. „Etykiety mogły ulec zmianie. Uruchom ponownie, aby uzyskać prawidłowe odniesienia” oznacza, że ​​inny przebieg naprawi problem. „Zdefiniowane mnożenie etykiet” oznacza, że ​​dwa polecenia `\label` mają tę samą nazwę, a LaTeX dyskretnie używa jednej z nich, więc zmieniaj nazwy, aż każda etykieta będzie unikalna. Konwencja nazewnictwa z przedrostkami `eq:`, `fig:` i `tab:` sprawia, że ​​kolizje są rzadkie, a wyszukiwanie źródła łatwiejsze; sam przepływ pracy z etykietami jest omówiony w [liczbach i wskaźnikach do równań](/learn/number-equations/).