---

title: "Twój pierwszy raport z laboratorium w LaTeX-ie jako student"
description: "Od zera do raportu kompilacji: szablon, równania, rysunki, odnośniki i ścieżka kompilacji niewymagająca ręcznego administrowania TeX Live."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Nie musisz znać języka LaTeX, aby ukończyć raport laboratoryjny. Potrzebujesz szablonu, a
kilka poleceń i przycisk kompilacji, który działa od pierwszego dnia. Wszystko inne może
poczekaj, aż późniejszy kurs poprosi o dokument potwierdzający pracę dyplomową.

Jest to krótka ścieżka, która przedkłada czysty plik PDF nad doskonały skład.

## Jeśli możesz, pomiń instalację wielogigabajtową

Desktopowy edytor badań z dołączonym silnikiem (na przykład
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) przeniesie Cię do pliku PDF
bez administrowania TeX Live. Otrzymujesz szablony, karty błędów na linii
zepsuty, PDF obok źródła z opcją „kliknij, aby przejść” i historia plików bez rozszerzenia
osobny kurs Git. Jeśli Twój instruktor wymaga określonej dystrybucji lub
Na odwrocie postępuj zgodnie z notatkami z kursu. W przeciwnym razie zoptymalizuj na początek.

Edytory w chmurze też są w porządku, jeśli kurs już z nich korzysta. Celem jest plik PDF
na czas, a nie tożsamość łańcucha narzędzi.

## Ukradnij szkielet, a następnie usuń jego połowę

Zacznij od prostego szablonu „artykułu”:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Więcej szczegółów: [skompiluj swój pierwszy plik PDF](/learn/first-document/) i
[krótka instrukcja](/learn/cheatsheet/).

Usuń sekcje, o które nie pyta Twoja rubryka. Nie kopiuj pracy dyplomowej składającej się z 40 pakietów
preambuła „na wszelki wypadek”. Dzięki dodatkowym pakietom początkujący otrzymują błędy, których nie mogą
przeczytaj.

## Równania do laboratorium, a nie do podręcznika

W linii: `$F = ma$`. Wyświetlacz:

```latex
\[
  v = v_0 + at
\]
```

Numeruj tylko to, co cytujesz później, za pomocą `\eqref`. Jeżeli pomoc techniczna poprosiła o niepewność,
umieść to w zdaniu lub małej tabelce, a nie w dziesięciowierszowym „wyrównaniu”, którego nie robisz
jeszcze zrozumieć. Ułamki zwykłe: `\frac{a}{b}`. Pierwiastki kwadratowe: `\sqrt{x}`.

Gdy dziennik kompilacji powie coś przerażającego, napraw tylko pierwszy błąd
przekompiluj. Późniejsze błędy są często szumem z pierwszego.

## Jedna figura, dobrze zrobiona

Eksportuj wykres jako plik PDF lub PNG z narzędzia analitycznego. Dołącz to do:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

W tekście: `Rysunek~\ref{fig:vr} pokazuje...`. Podpis pod rysunkiem. Etykieta
po napisie. Jeśli rysunek przeniesie się na niewłaściwą stronę, zmniejsz nieco szerokość
zanim będziesz walczyć z opcjami rozmieszczania przez godzinę:
[umieszczenie pływaka](/learn/figure-wrong-position/).

## Stoły bez cierpienia

Dla kilku wierszy wystarczy prosta tabela. Umieść powyżej podpis ze słowem „tabela”.
+ `\podpis`. Dopasuj liczby, aby TA mógł je zeskanować. Nie potrzebujesz
„zakładki” przeznaczone do publikacji w laboratorium 1, ale jeśli możesz, unikaj zupy z pionowymi liniami.

## Referencje bez schematu bibliografii doktoranckiej

W przypadku trzech cytatów działa lista ręczna:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Aby uzyskać więcej, wyeksportuj plik .bib z Google Scholar lub Zotero i wyczyść klucze w ten sposób
są krótkie i czytelne. Uszkodzone cytaty są drukowane jako `[?]`:
[usuwanie tajemniczych znaków cytowań](/learn/citation-question-mark/).

Cytuj podręcznik laboratoryjny i podręcznik w sposób wymagany w kursie (IEEE, APA-ish lub
prosta lista numerowana). Dopasowanie rubryki równa się dopasowaniu dziennika.

## Typowe błędy początkujących

- Zapominanie o `\usepackage{graphicx}` przed `\includegraphics`
- Znaki specjalne, takie jak `%` i `_` w tekście bez zmiany znaczenia
- Niedopasowane ograniczniki matematyczne `$`
- Nazwy plików ze spacjami („moja fabuła.pdf”), które zawiera przerwa
- Edycja innego folderu niż ten, który skompilowałeś

Zwolnij, napraw pierwszą linię dziennika, skompiluj ponownie.

## Oddaj plik PDF, zachowaj źródło

Prześlij to, o co prosi LMS (zazwyczaj PDF). Zachowaj `.tex` i cyfry w pliku a
folder, który nadal będziesz mieć po zakończeniu kursu. W przyszłości ponownie użyjesz szkieletu
do następnego raportu. Nawet jeśli twój redaktor automatycznie przechowuje historię Git
lepiej: możesz odzyskać wersję sprzed usunięcia prawidłowego równania.

## Pierwsza sesja trwająca 90 minut

Jeśli zaczynasz dziś wieczorem:

1. Otwórz szablon lub wklej powyższy szkielet.
2. Wypełnij tytuł, nazwę i nagłówki sekcji z rubryki.
3. Dodaj jedno równanie, o którym już wiesz, że jest poprawne.
4. Eksportuj jedną działkę; uwzględnij to; opisz to; zacytuj to w wynikach.
5. Dodaj dwa odniesienia zgodnie z instrukcją kursu.
6. Kompiluj, aż plik PDF będzie wyglądał jak raport, a nie pusty artykuł.

Zatrzymaj się, gdy rubryka zostanie zakryta. Nie spędzaj nocy na opcjach pakietu.

## Gdy coś się zepsuje

Przeczytaj tylko pierwszy błąd. Typowe poprawki: brakujący `$`, brakujący pakiet dla
grafika, zła nazwa pliku, dodatkowe `}`. Zapisz wcześniej kopię wersji kompilacyjnej
duże zmiany, dzięki czemu możesz wrócić. Jeśli preambuła kolegi z klasy pasuje do kursu,
pożyczaj minimalne pakiety, z których korzystali, a nie cały stos prac dyplomowych.

## Jak wygląda sukces

Otwiera się plik PDF, marginesy wyglądają rozsądnie, rysunki mają podpisy, a równania tak
czytelny, a rubryki mają wyraźne nagłówki. To wystarczy na pierwszy raz
Raport z laboratorium LaTeX. Perfekcja typograficzna może poczekać na papier, którego faktycznie potrzebuje
to.