---

title: "Skonstruuj pracę magisterską w LaTeX-ie, zanim wybuchnie panika"
description: "Temat główny, rozdział zawiera akronimy, pliki zajęć uniwersyteckich, szybkość kompilacji i historię Git dla studentów studiów magisterskich i doktoranckich."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

Praca dyplomowa to długi artykuł z dołączoną biurokracją. LaTeX obsługuje długie
dobrze papier. Biurokracja to zazwyczaj akta uniwersyteckie napisane w 2009 roku
i ostatnio testowany na innym TeX Live.

Rozpocznij tworzenie struktury wcześnie, nawet jeśli rozdziały są nadal puste. Przenoszenie treści pomiędzy
plików w ostatnim miesiącu jest to, jak zrywają się odniesienia i ścieżki rysunków.

## Zaakceptuj plik klasy, resztę zabezpiecz

Umieść w projekcie uniwersytet `.cls` (oraz wymagane pliki `.bst`/logo).
Nie przepisuj klasy. Umieść tam swoje makra, pakiety i zawartość rozdziałów
pliki, które kontrolujesz:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Jeśli klasa zepsuje się na nowoczesnym silniku, dokonaj selekcji za pomocą
[pliki zajęć uniwersyteckich, które nie zostaną skompilowane](/learn/fix-broken-template/).
Dokument, który silnik akceptuje biuro pracy dyplomowej (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) zanim zainwestujesz w `fontspec`.

## Sprawa pierwszoplanowa, jakiej oczekują komisje

Numery stron rzymskich na streszczenie, dedykację, podziękowania, spis treści, spisy
rysunki/tabele; arabski dla głównych rozdziałów. Zajęcia z książek/raportów ujawniają
`\frontem` / `\głównym tematem`; szablony oparte na artykułach wymagają instrukcji
`\numerowanie stron`. Przewodnik:
[rzymski, potem arabski](/learn/front-matter-page-numbers/).

Treść strony tytułowej często musi odpowiadać wzorowi programu Word ze szkoły wyższej.
Skopiuj dokładnie treść. Kreatywność tutaj powoduje odrzucenie pliku PDF przez a
lista kontrolna.

## Rozdziały jako pliki

Jeden korzeń, wiele zawiera:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Możesz samodzielnie tworzyć rozdziały, nawet jeśli współautorzy pomagają w pracach nad pracą dyplomową.
Trzymaj figury pod `figurami/rozdziałem 3/`, aby ścieżki pozostały stabilne przy zmianie kolejności.
Użyj `\includeonly{chapters/methods}` podczas pisania, aby skompilować pełną pracę dyplomową
nie są kosztem każdego równania edycja:
[podzielone pliki rozdziałów](/learn/split-chapter-files/).

Etykiety powinny być unikalne w całym projekcie („eq:ch3-main”, a nie „eq:main” w
każdy plik). Widoki struktury całego projektu i pomoc w sprawdzaniu referencji na żywo w witrynie a
200-stronicowe drzewo.

## Akronimy i symbole

Pakiety glosariuszy są potężne i wybredne. W przypadku wielu prac ręcznych
wystarczy lista symboli z przodu. Jeśli potrzebujesz automatycznego rozwijania
akronimy, zaplanuj jeden dzień na naukę „glosariuszy-dodatkowych” przed tygodniem
poddania się, a nie w jego trakcie.

Zdefiniuj makra matematyczne w `macros.tex` i traktuj ten plik jako wspólne prawo. Notacja
który dryfuje między rozdziałem 2 a rozdziałem 5, jest prezentem dla pedantycznego egzaminatora.

## Bibliografia

Jeden `.bib` na całą pracę lub mały zestaw starannie połączony. Stabilne klawisze.
Sprawdź poprawność przed miękkim związaniem:
[Walidator BibTeX](/tools/bibtex-validator/). Dopasuj styl do działu
pragnienia (liczbowe, z rokiem autora, style humanistyczne z dużą ilością przypisów). Nie mieszać
biblatex i klasyczne stosy BibTeX w jednej preambule.

## Prędkość

Kompilacja pełnej pracy dyplomowej przebiega powoli. Tryb roboczy dla rysunków, `\includeonly` i
TikZ uzewnętrznia zakup kilka godzin wstecz. Uwagi:
[krótsze oczekiwanie na plik PDF](/learn/speed-up-compilation/).

Co tydzień przeprowadzaj rytuał „pełnej kompilacji”, aby nadal widzieć błędy między rozdziałami
wcześnie.

## Kopia zapasowa to nie to samo, co historia

Kopia Dropbox jest kopią zapasową. Git to opowieść o tym, jak zmieniła się argumentacja.
Zatwierdź, gdy rozdział się skompiluje. Wyślij do prywatnego pilota GitHub lub GitLab.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) inicjuje
prawdziwe repozytorium na projekt, punkty kontrolne po udanych kompilacjach i bezczynnych edycjach,
i przywraca jednym kliknięciem, obok widoków struktury całego projektu i SyncTeX
które nadal działają w plikach rozdziałów. To sprawia, że ​​nawyk jest trudniejszy do pominięcia.
Możesz osiągnąć tę samą dyscyplinę, korzystając z dowolnego edytora i uważnego Gita; teza
nie powinno zależeć od pamiętania o „git init” w osiemnastym miesiącu.

## Pętle opinii komisji

Eksportuj plik PDF dla czytelników, którzy nie będą otwierać kodu źródłowego. Śledź komentarze w sprawach lub
udostępniony dokument, ale zastosuj zmiany w TeX-ie. Kiedy członek komisji zwraca a
zeskanowany plik PDF ze znacznikami, nazwij plik datą i wersją, aby wiedzieć, która
źródło zatwierdziło, do którego się odnosiło.

## Lista kontrolna w miękkiej i twardej oprawie

Zanim wydrukujesz lub zdeponujesz:

- Plik zajęć i silnik odpowiadają zasadom biura pracy dyplomowej.
- Numeracja stron tytułowych jest prawidłowa; strona z podpisami, jeśli jest to wymagane.
- Rozwiązano wszystkie `\ref`/`\cite`; nie `[?]`.
- W razie potrzeby wyszczególniono rysunki i tabele; napisy spójne.
- Marginesy i rozmiar czcionki spełniają wymagania listy kontrolnej PDF (wydrukuj stronę testową).
- Źródło + PDF + skrót zatwierdzenia zarchiwizowany po złożeniu depozytu.

## Ryciny, tabele i „lista” stron

Wiele biur prac dyplomowych wymaga wykazu rycin i tabel. Napisy muszą być
spójne i nie umieszczaj całej sekcji metod w 20-liniowym podpisie. Użyj
krótkie tytuły list i dłuższe podpisy wyjaśniające w treści, jeśli
klasa obsługuje opcjonalne krótkie podpisy.

## Plagiat i wcześniejsze publikacje

Jeśli rozdziały stanowią remiks opublikowanych artykułów, postępuj zgodnie z uniwersyteckimi zasadami dotyczącymi włączania
i pozwolenie współautora. Zachowaj zaakceptowany plik PDF każdego poprzedniego artykułu i tezę
rozdział o kontroli wersji z notatką o tym, co się zmieniło (notacja, rozszerzona
eksperymenty, ujednolicone wprowadzenie).

## Zacznij w tym miesiącu, a nie w tym, w którym piszesz

Utwórz szkielet, proponując kontur. Puste rozdziały, które się kompilują
liczyć jako postęp. Większość paniki na późnym etapie to zadłużenie strukturalne i upór
class, a nie lukę w nauce. Spłać ten dług wcześniej.