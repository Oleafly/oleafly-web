---

title: "nawyki natbib a polecenia biblatex"
description: "Cytaty w nawiasach i tekście oraz nazwy, które je zastępują."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# nawyki natbib a polecenia biblatex

Cytowanie roku autora wymaga dwóch odmian polecenia cytowania. Czasami autorzy są częścią twojego zdania, jak w „Knuth (1984) wprowadził programowanie piśmienne”. Czasami cytat jest umieszczony na boku, jak w przypadku „Programowanie piśmienne łączy kod i prozę (Knuth, 1984)”. Zwykłe `\cite` nie może dokonać takiego rozróżnienia, dlatego istnieje pakiet `natbib` i dlatego biblatex dostarcza własny zestaw nazw dla tych samych pomysłów. Jeśli nauczyłeś się jednego i otrzymałeś szablon przy użyciu drugiego, ta strona jest tabelą tłumaczeń.

## Polecenia natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Mnemonik jest taki, że „\citet” to *tekstowy* cytat, który czyta się jako część zdania, podczas gdy „\citep” to *nawias* cytat ujęty w nawiasy. Warianty oznaczone gwiazdką wyświetlają pełną listę autorów zamiast „i in.”, co czasami jest wymagane przy pierwszym cytowaniu dzieła. natbib oferuje także `\citeauthor` dla samych nazw, `\citeyear` dla samego roku i opcjonalny argument dla numerów stron, jak w `\citep[p.~42]{knuth84}`. natbib jest pakietem z epoki preprocesora: współpracuje z klasycznym BibTeX-em i kompatybilnym stylem `.bst`, takim jak `plainnat` lub `apalike`.

## Odpowiedniki biblatexu

biblatex obejmuje ten sam obszar pod różnymi nazwami. `\textcite{knuth84}` tworzy tekstową formę „Knuth (1984)”, `\parencite{knuth84}` tworzy nawias „(Knuth, 1984)”, a zwykłe `\cite{knuth84}` tworzy czysty cytat, którego dokładny wygląd zależy od załadowanego stylu. Istnieją również bezpośrednie analogie dla pozostałych: `\citeauthor`, `\citeyear` oraz przypisy wstępne i postnoty dla takich rzeczy, jak numery stron, zapisywane `\parencite[see][p.~42]{knuth84}`. Jeśli problemem jest pamięć mięśniowa, biblatex ma nawet opcję pakietu `natbib=true`, która definiuje `\citet` i `\citep` jako aliasy, co sprawia, że ​​migracja jest prawie bezbolesna.

## Migracja dokumentu z natbib do biblatex

Twój plik `.bib` nie wymaga żadnych zmian. Obydwa systemy czytają tę samą bazę danych. Migracja dotyczy tylko preambuły i kompilacji. Usuń `\usepackage{natbib}` i linię `\bibliographystyle`, następnie załaduj `\usepackage[backend=biber,style=authoryear]{biblatex}` i skieruj go na swoją bazę danych za pomocą `\addbibresource{refs.bib}`. Zamień `\bibliography{refs}` na końcu dokumentu na `\printbibliography`. Na koniec upewnij się, że kompilacja uruchamia `biber` zamiast `bibtex`, ponieważ biblatex przechowuje swoje dane w innym formacie, a stary backend po cichu nic nie wygeneruje. Jeśli wolisz nie dotykać tekstu podstawowego, zachowaj nazwy poleceń natbib poprzez opcję zgodności i zmieni się tylko preambuła.

## Który wybrać

Jeśli szablon dziennika już się ładuje natbib, pozostań przy nim. Walka z plikiem klasowym rzadko jest tego warta. W przypadku nowych dokumentów, które wybierzesz, biblatex jest bardziej elastyczny i lepiej obsługuje Unicode. Szersze porównanie znajduje się w [klasycznym BibTeX-ie lub biblatex](/learn/bibtex-vs-biblatex/), a późniejsze przełączanie stylów jest omówione w [Numeryczny, rok autora, style czasopisma](/learn/change-citation-style/).