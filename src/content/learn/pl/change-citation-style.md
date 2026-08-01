---

title: "Style numeryczne, rok autora i czasopisma"
description: "Zamień style bez przepisywania bazy danych."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Style numeryczne, rok autora i czasopisma

Styl cytatu kontroluje dwie rzeczy: wygląd znacznika w tekście, na przykład „[12]” w porównaniu z „(Knuth, 1984)” oraz sposób formatowania każdego wpisu na liście referencyjnej. Dobra wiadomość jest taka, że ​​styl jest całkowicie niezależny od bazy danych `.bib`. Możesz zmienić numer artykułu na rok autora lub sformatować go dla innego czasopisma, zmieniając jeden wiersz w preambule. Twoje wpisy pozostają takie, jakie są.

## Zmiana stylu z klasycznym BibTeX-em

W BibTeX-ie styl znajduje się w poleceniu `\bibliographystyle{...}`, które nadaje nazwę plikowi `.bst`. Zamień argument i przekompiluj:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Czasopisma i konferencje zazwyczaj dostarczają własny plik `.bst`, na przykład `IEEEtran.bst` lub `ACM-Reference-Format.bst`. Umieść ten plik obok pliku `main.tex` i nadaj mu nazwę w `\bibliographystyle`. Zauważ, że `.bst` piecze się jednym spojrzeniem; jeśli miejsce chce cytować rok autora, potrzebujesz także pakietu `natbib`, aby uzyskać polecenia takie jak `\citep` i `\citet`.

## Zmiana stylu z biblatexem

W przypadku biblatex styl jest opcją znajdującą się na samym opakowaniu:

```latex
\usepackage[style=authoryear]{biblatex}
```

Inne popularne wartości to `style=numeric`, `style=numeric-comp` dla skompresowanych zakresów, takich jak `[3-6]`, `style=alphabetic` i `style=apa` lub `style=ieee` z pakietów dodatków. Ponieważ style biblatex są pisane w LaTeX-ie, a nie w starym języku `.bst`, znacznie łatwiej je modyfikować, na przykład w celu zmiany interpunkcji lub usunięcia adresów URL.

## Przekompiluj poprawnie po przełączeniu

Po jakiejkolwiek zmianie stylu stare pliki pomocnicze nadal zawierają dane sformatowane według poprzedniego stylu, więc wykonaj pełny cykl: skompiluj raz, uruchom backend („bibtex” dla klasycznego BibTeX-a, „biber” dla biblatex), a następnie skompiluj jeszcze dwa razy, aby wzajemne odniesienia się uspokoiły. Oleafly uruchamia ten cykl za Ciebie, ale jeśli po ręcznym przełączeniu cytaty wyglądają na nieaktualne, usunięcie plików `.aux` i `.bbl` i odbudowanie od zera rozwiąże problem.

## Której rodziny powinieneś użyć?

Jeśli miejsce docelowe udostępnia plik `.bst` lub klasę oczekującą BibTeX-a, użyj klasycznego BibTeX-a; tak jest nadal w większości czasopism. Jeśli sam kontrolujesz format, na przykład w przypadku pracy dyplomowej lub przedruku, biblatex będzie lepszym wyborem. Kompromisy omówiono w [klasycznym BibTeX-ie lub biblatex](/learn/bibtex-vs-biblatex/), a różnice w poleceniach w [natbib zwyczaje a polecenia biblatex](/learn/natbib-vs-biblatex/).