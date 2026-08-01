---

title: "Klasyczny BibTeX lub biblatex"
description: "Backendy, style i to, co zmienia się z dnia na dzień."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Klasyczny BibTeX lub biblatex

LaTeX ma dwa systemy cytowań, które czytają te same pliki `.bib`, ale różnią się prawie wszystkim innym. Klasyczny BibTeX pochodzi z lat 80. XX wieku: mały, zewnętrzny program formatuje Twoje odniesienia, używając plików stylów napisanych we własnym języku opartym na stosie. biblatex jest nowoczesnym zamiennikiem: formatowanie odbywa się w samym LaTeX-ie, przy pomocy programu pomocniczego o nazwie `biber`, który zajmuje się sortowaniem i obsługą danych. Nazwy są łudząco podobne. Pamiętaj, że „BibTeX” to zarówno stary program, jak i, luźno, stary system, podczas gdy „biblatex” to pakiet LaTeX, który wykorzystuje `biber` jako backend.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Wiek | Klasyczny | Nowoczesne |
| Style | `.bst` | `.bbx`/`.cbx` |
| Unikod | Kruche | Silny |
| Wsparcie czasopisma | Uniwersalny | Rośnie |

## Co różnice oznaczają w praktyce

Rząd stylów ma największe znaczenie. Style BibTeX to pliki .bst, których prawie nikt nie może przeczytać ani zmodyfikować, więc bierzesz to, co dostarcza czasopismo. Style biblatex to zwykły LaTeX, podzielony na komponenty bibliografii (`.bbx`) i cytatów (`.cbx`), a drobne zmiany, takie jak opuszczanie adresów URL lub zmiana interpunkcji, są dostosowywane w jednej linii. Wiersz Unicode ma znaczenie, jeśli Twoje odniesienia zawierają nazwy akcentowane lub pisma inne niż łacińskie. Klasyczny BibTeX je zmienia, chyba że każdy znak zostanie zmieniony jako `\'{e}` i przyjaciele, podczas gdy biber natywnie obsługuje UTF-8. Ostatni wiersz wyjaśnia, dlaczego klasyczny BibTeX przetrwał: większość czasopism i konferencji nadal rozpowszechnia plik .bst i oczekuje klasycznego zestawu narzędzi, a systemy przesyłania często odrzucają cokolwiek innego.

## Jak wygląda dokument biblatex

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

W porównaniu z klasycznym wzorcem, `\addbibresource{refs.bib}` (z rozszerzeniem) przenosi się do preambuły, `\printbibliography` zastępuje `\bibliography{refs}` i nie ma linii `\bibliographystyle`, ponieważ styl jest opcją pakietu. Kompilacja musi uruchamiać `biber` zamiast `bibtex`; uruchomienie niewłaściwego backendu jest częstą przyczyną [pustej bibliografii](/learn/bibliography-empty/).

## Jak wybrać

Niech lokal zdecyduje, kiedy będzie to możliwe. Jeśli szablon zawiera plik `.bst` lub instrukcja autora wspomina o BibTeX-ie, użyj klasycznego BibTeX-a i nie walcz z nim. Kiedy format zależy od Ciebie, np. w przypadku pracy dyplomowej, wstępnego wydruku lub notatek z wykładów, biblatex jest lepszym narzędziem: czystsze dostosowywanie, rzeczywista obsługa Unicode i specjalnie zaprojektowane typy wpisów dla źródeł internetowych. Twoja baza danych `.bib` działa niezmieniona w każdym systemie, więc wybór nigdy nie jest trwały. Polecenia cytowania różnią się między nimi, a [natbib zwyczaje a polecenia biblatex](/learn/natbib-vs-biblatex/) mapują jeden zestaw na drugi.