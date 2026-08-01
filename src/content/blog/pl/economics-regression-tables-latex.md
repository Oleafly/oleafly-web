---

title: "Ekonomia i nauki społeczne: tabele regresji akceptowane przez czasopisma"
description: "booktabs, trzyczęściowy stół, gwiazdy siunitx, notatki pod szacunkami, nawyki biblatex i wersjonowanie dokumentów roboczych dla ekonomii, politologii i socjologii."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Empiryczne nauki społeczne żyją i umierają według tabel. Źle ustawiony przecinek lub a
Gwiazda z brakującym znaczeniem może spalić cykl poprawiania i ponownego przesyłania, w którym nic nie było
związane ze strategią identyfikacji. Czasopisma dbają niemal o czytelność
tyle co współczynniki.

Poniżej znajduje się informacja dla studentów i podmiotów odpowiedzialnych za eksport, którzy eksportują ze Stata lub R, a następnie sprzątają
LaTeX ręcznie.

## zakładki nie są opcjonalne

Linie pionowe i podwójne linie poziome wyglądają jak Word z lat 90. Użyj trzech
poziome linie z `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Zobacz [tabele z trzema regułami](/learn/booktabs-beautiful/). Eksport z R
(`modelsummary`, narzędzia w stylu `estout`, starszy `stargazer`) lub Stata do LaTeX
fragmenty, a następnie samodzielnie wyczyść wiersz nagłówka. Nagłówki generowane automatycznie
zwykle zbyt szeroki lub zbyt tajemniczy dla końcowego pliku PDF.

## Notatki pod tabelą, a nie przypadkowe przypisy

`threeparttable` zachowuje tę samą szerokość podpisu, tabelarycznego i notatek:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Umieść wielkość próby, efekty stałe, skupione uwagi SE i gwiazdkę istotności
legenda tutaj. Nie wieszaj przypisu w pojedynczej komórce, tylko dla niektórych czytelników
zauważę. Etykiety paneli (A/B) należy umieścić w podpisie lub w środkowych liniach z przezroczystością
tekst, a nie legenda w stylu figur, która nigdy nie pojawia się w pliku PDF.

## Kolumny numeryczne i gwiazdki znaczenia

Typy kolumn `siunitx` (`S`) wyrównują się do przecinka dziesiętnego. Samo to sprawia, że
tabela wyników wygląda celowo. Gwiazdy dzielą czyste kolumny liczbowe, więc ty
zazwyczaj potrzebny jest niestandardowy format lub kolumna tekstowa. Typowe wzory:

Podaj współczynniki i SE w oddzielnych wierszach (standard w econ) lub zawijaj gwiazdki
więc wyrównanie nadal działa (`0.012^{***}` z dedykowanym typem kolumny).

Bądź spójny w różnych tabelach: te same progi gwiazdek, ten sam styl SE, ta sama liczba
miejsc dziesiętnych dla tej samej metryki. Recenzenci porównują tabelę 2 z tabelą 3
cel.

Wizualny pierwszy szkic jest w porządku. Przeglądarka
[generator tabel](/tools/table-generator/) może szkicować strukturę; finał
tabela powinna nadal przeglądać „zakładki” i notatki SE.

## Od oprogramowania regresyjnego do obsługi kamery

Typowa pętla wygląda tak. Zamroź skrypt estymacji i materiał siewny. Eksportuj
Fragment LaTeX lub plik CSV szacunków. Wrzuć go do skorupy stołu ze stajnią
etykiety (`tab:main`, `tab:robust`). Napisz podpis, aby skimmer wiedział
zmienną zależną, próbkę i estymator bez dwukrotnego czytania uwag.
Skompiluj, a następnie napraw przepełnione pola, wycinając kolumny; obracać tylko jako ostatni
kurort.

Jeśli tabela jest dłuższa niż strona, przełącz na „longtable” (lub podzielone panele)
przed ostatecznym terminem publikacji, a nie po tym, jak czasopismo złoży skargę na czcionki 7-punktowe.

## Cytaty: rok autora to dialekt

Większość ośrodków zajmujących się tematyką ekonomiczną i naukową oczekuje roku autorskiego. „biblatex” z
„styl=rok autora” (lub styl czasopisma) jest łatwiejszy w dłuższej perspektywie niż walka
pliki `.bst`. Jeśli laboratorium nadal używa `natbib`, nie ma problemu; po prostu nie mieszaj
oba stosy w jednej preambule. Przegląd:
[BibTeX lub biblatex](/learn/bibtex-vs-biblatex/).

Klucze powinny być stabilne („autor:rok:słowo kluczowe”). Reeksport z Zotero pod
nowe klucze w połowie projektu to sposób, w jaki `\cite` przerywa tydzień przesyłania. Sprawdź
`.bib` dla brakujących lat i czasopism:
[Walidator BibTeX](/tools/bibtex-validator/).

## Dokumenty robocze i SSRN

Wersje dokumentów roboczych zmieniają się co miesiąc. Zachowaj datę strony tytułowej w makrze:

```latex
\newcommand{\paperdate}{June 2026}
```

Podbij go, gdy ponownie wyeksportujesz plik PDF. Lokalna historia Git jest bardziej szczera niż
`final_final_v7.pdf` na dysku współdzielonym. Zatwierdź, gdy ustawiono główną tabelę
kompiluje; otaguj lub wyraźnie wyślij wiadomość dotyczącą wersji przesłanej.

Redaktor badań, który traktuje projekt jak prawdziwe repozytorium Git (checkpoints
po kompilacji, przywróceniu, opcjonalny prywatny GitHub) pasuje do pracy empirycznej
już wersje kodu. Papier i skrypty szacunkowe nie powinny żyć
w ramach różnych nawyków tworzenia kopii zapasowych.

## Identyfikacja i etyka tabelaryczna (wersja krótka)

LaTeX nie może naprawić słabego projektu, ale może sprawić, że mocny będzie czytelny.
W tytule podaj estymator i próbkę. Nie ukrywaj tego faktu
kolumna (3) umieszcza połowę próbki w przypisie, którego nikt nie czyta. Jeśli pokażesz
tabele odporności, zachowaj tę samą kolejność zmiennych zależnych, co w tabeli głównej, tj
czytelnicy mogą skanować.

## Lista kontrolna przed przesłaniem

Rzeczy, które gryzą ludzi późno:

- Tabele z trzema regułami; żadnych zasad pionowych.
- Wyrównanie dziesiętne; spójne gwiazdki i notatki SE.
- Podpis stwierdza wynik, próbkę i estymator.
- Etykiety stabilne; tekst cytuje `\ref{tab:...}`.
- Styl bibliografii jest dostosowany do miejsca; `.bib` zostało sprawdzone.
- Data dokumentu roboczego i zatwierdzenie Git zgadzają się z przesłanymi danymi.

## Pakiety replikacyjne

Więcej czasopism chce kodu i danych. Trzymaj skrypty eksportu tabeli obok papieru
repo (lub powiązane z hashem zatwierdzenia). Kiedy współczynnik zmienia się, ponieważ
skrypt czyszczący został zmieniony, zregeneruj fragment LaTeX i ponownie zatwierdź oba. A
stół, którego nie da się odtworzyć, stanowi odpowiedzialność, nawet jeśli wygląda na czysty.

## Beamer na seminaria

Jeśli to możliwe, używaj ponownie tych samych fragmentów zakładek na slajdach lub eksportuj do pliku PDF
uprawy stołów. Oto sposób na ręczne przebudowanie liczb na talię slajdów
slajdy z seminarium nie zgadzają się z artykułem.

Popraw tabele, a strategia identyfikacji zostanie sprawiedliwie wysłuchana. Zdobądź
się mylą i spędzasz rundę na kłótniach o formatowanie.