---

title: "Od klucza .bib do cytatu w tekście"
description: "Zwykła pętla BibTeX-a z poleceniami cytowania i bibliografii."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# Z klucza .bib do cytatu w tekście

Cytowanie źródła w LaTeX-ie składa się z dwóch elementów: bazy danych w postaci zwykłego tekstu, która raz opisuje każdą pracę, oraz polecenia „\cite” w dokumencie, które wskazuje wpis za pomocą jego klucza. LaTeX numeruje cytaty, formatuje listę referencyjną i utrzymuje wszystko w spójności, gdy zmieniasz kolejność sekcji lub dodajesz źródła. Nigdy nie wpisujesz ręcznie „[12]” i nigdy sam niczego nie przenumerujesz.

## Polecenia w dokumencie

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` wstawia znacznik w tekście tam, gdzie należy cytat. Resztę wykonują dwa polecenia na dole: `\bibliographystyle{plain}` wybiera sposób formatowania cytatów i odnośników, a `\bibliography{refs}` nadaje nazwę plikowi bazy danych (bez rozszerzenia `.bib`) i zaznacza miejsce, w którym powinna zostać wydrukowana lista bibliograficzna, zwykle tuż przed `\end{document}`. Na liście pojawiają się tylko źródła, które faktycznie cytujesz.

## Wpis w bazie danych

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Znajduje się on w `refs.bib`, oddzielnym pliku obok `main.tex`. Słowo po `@` to typ wpisu, `knuth84` to klucz cytatu, a reszta to pola, których styl używa do zbudowania sformatowanego odniesienia. Klucz jest jedynym łączem pomiędzy dwoma plikami, dlatego musi dokładnie odpowiadać argumentowi `\cite`, łącznie z wielkimi literami. Za pomocą [walidatora BibTeX](/tools/bibtex-validator/) możesz sprawdzić całą bazę danych pod kątem brakujących pól i źle sformułowanych wpisów.

## Dlaczego jedna kompilacja nie wystarczy

Bibliografię buduje oddzielny program. Przy pierwszym przebiegu LaTeX dokument zapisuje listę cytowanych kluczy do pliku pomocniczego. Następnie program `bibtex' odczytuje tę listę, pobiera pasujące wpisy z `refs.bib` i formatuje je. Dwa kolejne przebiegi LaTeX-a złóż wynik z powrotem i rozwiąż znaczniki w tekście. Oleafly uruchamia ten pełny cykl przy każdej kompilacji. Jeśli tworzysz ręcznie i pomijasz środkowy krok, cytaty pojawiają się jako pogrubione znaki zapytania; zobacz [Usuwanie tajemniczych znaków cytowań](/learn/citation-question-mark/), kiedy to nastąpi.

## Dokąd stąd iść

Pojedynczy plik `.bib` może służyć do każdej napisanej przez Ciebie pracy, dlatego opłaca się ją budować ostrożnie. [Stwórz trwały plik .bib](/learn/create-bibliography/) obejmuje typy wpisów, wymagane pola i klucze, które przetrwają dekadę. Jeśli obiekt chce zmienić wygląd, zmieniasz jedną linię, a nie jakiekolwiek wpisy, jak wyjaśniono w [Liczba, rok autora, style czasopisma](/learn/change-citation-style/).