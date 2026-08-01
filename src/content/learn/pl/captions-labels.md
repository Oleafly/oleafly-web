---

title: "Napisy pasujące do numeru"
description: "Umieść etykietę po podpisie, aby numer się trzymał."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Podpisy pasujące do numeru

Odsyłacze to jedna z rzeczy, które LaTeX robi lepiej niż edytor tekstu. Nigdy nie wpisujesz ręcznie „Rysunku 3”. Zamiast tego dołączasz etykietę do figury i pozwalasz, aby LaTeX wypełnił liczbę wszędzie tam, gdzie jest wymieniona, tak aby liczby pozostały poprawne niezależnie od tego, ile razy zmienisz kolejność, wstawisz lub usuniesz. Mechanizm ma jedną zasadę, która potyka się prawie każdego przynajmniej raz: kolejność `\caption` i `\label` ma znaczenie.

## Dlaczego kolejność ma znaczenie

Polecenie `\caption` spełnia dwa zadania. Drukuje tekst podpisu pod rysunkiem lub tabelą i wykonuje licznik, zamieniając ten element pływający w rysunek 3. Polecenie `\label` robi coś głupszego, niż ludzie się spodziewają: rejestruje ostatnio przypisany numer, cokolwiek się stanie. Nie ma pojęcia, że ​​znajduje się „wewnątrz figury”. Zatem etykieta musi znajdować się po podpisie:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Jeśli umieścisz `\label` przed `\caption`, podpis nie przekroczył jeszcze licznika cyfr, więc etykieta przechwytuje najnowszy numer z zupełnie innego miejsca, zwykle z bieżącej sekcji. Następnie w tekście pojawi się informacja „patrz rysunek 2.4”, podczas gdy rysunek jest w rzeczywistości rysunkiem 7. Jest to klasyczny objaw: odniesienia wskazujące na numery sekcji zamiast na numery rysunków prawie zawsze oznaczają etykietę umieszczoną zbyt wcześnie. Najbezpieczniejszym zwyczajem jest pisanie `\label` w wierszu bezpośrednio po `\caption`, za każdym razem, zarówno na rysunkach, jak i w tabelach.

## Odniesienie do etykiety

W swoim tekście napisz odniesienie w następujący sposób:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` rozwija się do samej liczby i sam wprowadzasz słowo „Rysunek”. `~` pomiędzy nimi jest spacją nierozdzielającą, która uniemożliwia LaTeXowi kończenie linii po "Rysunku" i rozpoczynanie następnej linią "3". Przedrostki takie jak `fig:`, `tab:`, `sec:` i `eq:` to czysta konwencja, LaTeX ich nie interpretuje, ale zapewniają czytelność etykiet i zapobiegają przypadkowemu wspólnemu nazwaniu rysunku i tabeli.

Zauważ, że `\pageref{fig:neat}` podaje numer strony, na której wylądowała ilustracja, co jest przydatne w długich dokumentach, w których element pływakowy może oddalić się od wzmianki. Aby zapoznać się z pełnym omówieniem poleceń odnoszących się do odwołań, zobacz [objaśnienie każdego polecenia](/learn/każde-polecenie-objaśnienie/).

## Kompiluj dwukrotnie i inne pułapki

Odniesienia są rozpoznawane w trakcie wykonywania kompilatora: pierwszy przebieg zapisuje pozycje etykiet do pliku `.aux`, a drugi przebieg odczytuje je z powrotem. Do tego drugiego przebiegu odniesienia są drukowane jako pogrubione znaki zapytania, więc „?” w pliku PDF zwykle oznacza po prostu „skompiluj ponownie”, a nie, że coś jest uszkodzone. Większość redaktorów, w tym Oleafly, automatycznie ponownie uruchamia przepustki. Jeśli `??` przetrwa wielokrotne kompilacje, etykieta nie istnieje. Prawdopodobne przyczyny to literówka w nazwie etykiety lub `\caption`, który usunąłeś, pozostawiając `\label`.