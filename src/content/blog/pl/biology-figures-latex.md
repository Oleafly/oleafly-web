---

title: "Artykuły z biologii i nauk przyrodniczych: ryciny, tablice wielopanelowe i współautorzy"
description: "Praktyczny LaTeX do mokrych laboratoriów i biologii obliczeniowej: figury wielopanelowe, rozdzielczość, uzupełnienia, notacja statystyczna i współpraca bez wzajemnego nadpisywania."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Manuskrypty z zakresu nauk przyrodniczych są na pierwszym miejscu. Recenzenci przeglądają talerz, zanim to zrobią
przeczytaj swoją prozę, więc postać musi nieść roszczenie bez machania ręką
podpis. LaTeX radzi sobie z tym dobrze, jeśli traktujesz liczby jako pierwszorzędne
pliki projektu zamiast czegoś, co wklejasz o 2 w nocy przed uzupełnieniem
ostateczny termin.

Grupy pracujące w mokrych laboratoriach i grupy obliczeniowe borykają się z tymi samymi problemami: panele bez wspólnych elementów
słupki skali, artefakty JPEG na plamach, uzupełnienia, których nie można skompilować, oraz a
kilkunastu współautorów redagujących jeden akapit. Poniżej znajduje się to, co faktycznie działa.

## Figury wielopanelowe

Recenzenci oczekują paneli (a)(b)(c) pod jednym podpisem. Możesz:

1. Zbuduj płytkę poza TeX-em (Illustrator, Inkscape, eksport na Fidżi) i upuść
   w pojedynczym pliku PDF lub PNG, lub
2. Asembluj w TeX-ie z „podpisem”, gdy każdy panel jest własnym plikiem:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Odwołuj się do paneli jako Rysunek ~\ref{fig:exp}a w tekście tylko w przypadku stylu dziennika
pozwala na to. Wiele obiektów preferuje „Rysunek 2A” z zastosowaniem jednego schematu
wszędzie. Więcej o tym wzorze:
[panele a, b, c](/learn/subfigures-abc/).

Nazwij pliki spójnie (`fig03_western_a.pdf`), aby nikt nie wymyślił
`final_gel_NEW.png` tydzień przesłania.

## Rozdzielczość, kolor i formaty plików

Przechowuj archiwa mikroskopowe w formacie TIFF lub PDF o wysokiej rozdzielczości. Dla wersji papierowej PDF
sam, użyj grafiki wektorowej dla schematów i PNG/PDF w wystarczającej rozdzielczości
dane rastrowe. Pomiń adnotacje i żele w formacie JPEG on-line. Artefakty kompresji
należy to czytać jako niechlujstwo naukowe, nawet jeśli eksperyment jest w porządku.

Zanim zaprojektujesz sześciokolorową paletę, sprawdź opłaty za kolory i zasady drukowania
działa tylko na skalibrowanym monitorze. Niektóre czasopisma chcą CMYK; inni się nawracają
źle, bez pytania. Gdy żądają wersji klucza bezpiecznych w skali szarości
liczby, daj im je.

Umieść słupki skali i jednostki intensywności na panelu, a nie tylko w podpisie. Jeśli
dane dotyczące ponownego układu produkcji, osadzone podziałki przetrwały; notatki zawierające wyłącznie podpisy
często nie.

## Schematy a panele danych

„Kreskówkę ścieżki” należy oddzielić od „oznaczenia ilościowego plamy”.
Kreskówki mogą być TikZ lub zewnętrzną grafiką wektorową. Panele danych powinny znajdować się blisko
eksport analiz, dzięki czemu można je ponownie wygenerować, gdy recenzent sobie tego zażyczy
inna normalizacja. Zanotuj ścieżkę skryptu analizy w uwagach nagłówkowych lub a
uzupełnienie powtarzalności, jeśli czasopismo na to pozwala.

## Dodatki, które wciąż się kompilują

Gigantyczne stoły, dodatkowe żele i fotosy filmowe stanowią odrębny dodatek
dokumentu lub wyraźnego załącznika. Kilka zasad, które oszczędzają bólów głowy:

Etykiety muszą być unikalne, jeśli główny i dodatkowy mają tę samą kompilację. Jeśli tak jest
oddzielne projekty, napisz „Rysunek S3” zwykłym tekstem i nie polegaj na `\ref`
w plikach PDF. Zachowaj krótką listę wskazującą, które stwierdzenia w tekście głównym wskazują, do którego
uzupełnij elementy, aby nic nie dryfowało.

Dodatek, który nie zawiera tygodnia złożenia, jest nadal Twój
problem, nawet jeśli główny plik PDF wygląda na czysty.

## Chaos wielu autorów

Artykuły z biologii często mają wielu współautorów na różnych poziomach umiejętności LaTeX. Własny
pliki według sekcji (`results.tex`, `methods.tex`, `figs.tex`), łącz przez
Git i zdecyduj, kto będzie opiekował się plikiem `.bib` (jedna osoba czy współdzielona grupa Zotero
eksport).

Lokalny folder projektu jest łatwiejszy do spakowania dla współpracownika niż chmura
projektu, do którego tracą dostęp po ukończeniu studiów. Prawdziwa historia Git przewyższa e-mail
załączniki o nazwie `manuscript_JM_edits_FINAL.docx`, które ktoś ponownie konwertuje
do TeX-a ręcznie. Punkt kontrolny po udanych kompilacjach; przywrócić po połączeniu
idzie źle; zachowaj prywatnego pilota.

Jeśli niektórzy współautorzy edytują tylko Worda, wyeksportuj dla nich DOCX lub PDF i zachowaj plik `.tex`
jako źródło prawdy. Zobacz
[współautorzy posługujący się tylko językiem Word](/learn/collaborator-uses-word/).

## Metody i notacja statystyczna

Zdefiniuj raz makra statystyczne, aby wartości p nie pojawiały się zarówno jako `$p$`, jak i
`p=` w tym samym artykule:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Podaj korektę testu, n i wielokrotnego porównania w metodach lub tabeli
notatki, nie tylko w legendzie postaci, która jest przycinana w produkcji. Gęsty
artykuły korzystają z krótkiej listy notacji. Sprawdzanie ref/cytowania na żywo w a
redaktor badań przechwytuje `\ref` do usuniętego panelu, zanim zrobi to recenzent.

## Podpisy zawierające twierdzenie

Dobry podpis mówi, co zostało zmierzone, w jakim systemie i co czytelnik
powinien zauważyć. Unikaj opcji „Zobacz tekst”. Nie umieszczaj metod w podpisie that
należą do sekcji metod. Litery panelu (pogrubione lub nawiasy) powinny
dopasować styl domu.

## Lista kontrolna liczb przed przesłaniem

Zanim naciśniesz „Prześlij”, przejdź raz po liczbach:

- Wszystkie główne liczby cytowane w kolejności (lub w dowolnej kolejności, na jaką pozwala czasopismo).
- Panele oznakowane; paski skali tam, gdzie mają one znaczenie.
- Brak bałaganu JPEG na panelach ilościowych.
- Kompiluje dodatek; Numery S nie uległy przetasowaniu.
- Sprawdzono politykę kolorystyczną; rozmiary plików poniżej limitów portalu.
- Obrazy źródłowe i skrypty nadal można znaleźć w archiwum projektu lub laboratorium.

## Westerny, żele i kontrast

Nie należy nadmiernie przetwarzać plam w pliku PDF. Dzienniki i czytelnicy szukają kontrastu
gry. Przechowuj surowe pliki w archiwum laboratoryjnym i wysyłaj panele pasujące do
zastosowana kwantyfikacja. Jeśli zmienisz układ paneli, zaktualizuj każdy panel w tekście
list tego samego dnia, a nie „później”.

## Filmy i dodatki interaktywne

Gdy dziennik pozwala na wyświetlanie filmów, udostępniaj je zgodnie z instrukcjami i umieszczaj
nadal plus podpis w pliku PDF. Nie polegaj na osobistym łączu z chmurą
umiera po ukończeniu studiów.

Podstawą tych artykułów są liczby. LaTeX to tylko ramka. Upewnij się
rama nie jest tym, co zawodzi w noc poprzedzającą złożenie.