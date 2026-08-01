---

title: "Usuwanie tajemniczych znaków cytatów"
description: "Literówki, brakujące podania, zła ścieżka, niedopasowanie BibTeX-a Bibera."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Usuwanie tajemniczych znaków cytatów

## Objaw

Dokument się kompiluje, ale w miejscu, w którym powinien pojawić się cytat, pojawia się pogrubiony znak zapytania „[?]”, a dziennik zawiera takie linie, jak „LaTeX Warning: Citation „knuth84” niezdefiniowany”. Czasami dotyczy to każdego cytatu, czasami tylko jednego lub dwóch. Ponieważ jest to raczej ostrzeżenie niż błąd, plik PDF wciąż się tworzy i łatwo przeoczyć znaki, dopóki czytelnik ich nie wskaże.

## Dlaczego tak się dzieje

LaTeX nie rozwiązuje bezpośrednio cytatów. Przy pierwszym przebiegu zapisuje każdy żądany klucz w pliku pomocniczym. Następnie program backendowy (`bibtex` lub `biber`) wyszukuje te klucze w bazie danych `.bib` i zapisuje sformatowane wpisy. Dwa kolejne przebiegi LaTeX-a składają wyniki z powrotem. Znak zapytania oznacza, że ​​w momencie ostatniego przebiegu nie istniał żaden sformatowany wpis dla tego klucza. Każda przyczyna tego objawu jest w jakiś sposób przerwaniem tego rurociągu.

## Przeanalizuj przyczyny w odpowiedniej kolejności

Najpierw sprawdź sam klucz. `\cite{knuth84}` i `@article{knuth1984,...}` to różne ciągi znaków i dopasowanie jest dokładne, łącznie z wielkością liter. Wyszukaj w pliku `.bib` klucz wymieniony w ostrzeżeniu; literówka po obu stronach jest najczęstszą przyczyną, a pierwszym ostrzeżeniem o braku klawisza w dzienniku jest to, które należy ścigać.

Następnie upewnij się, że przebiegł pełny cykl kompilacji. Sekwencja to LaTeX, następnie „bibtex” lub „biber”, a następnie jeszcze dwa razy LaTeX. Pojedyncza kompilacja nigdy nie rozwiąże cytowań, ponieważ backend jeszcze nie został uruchomiony. Oleafly automatycznie steruje całym cyklem, ale ręczna kompilacja lub źle skonfigurowany edytor może zostać zatrzymany po pierwszym przebiegu.

Po trzecie, sprawdź ścieżkę do bazy danych. `\bibliography{refs}` i `\addbibresource{refs.bib}` są rozpoznawane względem głównego pliku, więc baza danych w podfolderze musi być zapisana jako `bib/refs` lub `bib/refs.bib`. Zła ścieżka zawodzi po cichu i zwykle zabiera ze sobą całą listę referencyjną; zobacz [Pusta bibliografia](/learn/bibliography-empty/), aby dowiedzieć się więcej o tej większej porażce.

Na koniec dopasuj backend do systemu. Dokument ładujący biblatex musi zostać przetworzony za pomocą `biber`. Zasilenie go klasycznym `bibtexem` nie daje żadnych użytecznych wyników, a każdy cytat pozostaje znakiem zapytania, niezależnie od tego, ile razy przekompilujesz.

## Jeśli wszystko inne zawiedzie

Nieaktualne pliki pomocnicze mogą zachować stary, uszkodzony stan. Usuń pliki `.aux`, `.bbl` i `.blg` obok dokumentu i odbuduj go od zera. Warto także przeczytać plik `.blg`, zanim go usuniesz: jest to własny dziennik backendu i wyraźnie wymienia brakujące bazy danych i zniekształcone wpisy.