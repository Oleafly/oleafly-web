---

title: "Nagłówki o tej liczbie"
description: "przekrój przez akapit, formy oznaczone gwiazdką, głębokość secnum."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Nagłówki o tym samym numerze

W edytorze tekstu numerujesz nagłówki ręcznie i zmieniasz je ręcznie za każdym razem, gdy je przenosisz. LaTeX nie pozwala na to. Deklarujesz, czym jest każdy nagłówek, sekcja, podsekcja lub rozdział, a numeracja załatwia się sama. Wstaw nową sekcję w środku dokumentu, a przy następnej kompilacji zmieniona zostanie numeracja wszystkiego po niej, razem z każdym odsyłaczem i każdym wpisem spisu treści, który na nią wskazuje.

## Hierarchia

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Polecenia te tworzą stałą drabinę. `\Sekcja` jest głównym narzędziem klasy `artykuł`, a pod nią zagnieżdżone są `\podsekcja` i `\podsekcja`. `\chapter` istnieje tylko w klasach `report` i `book`, dlatego wklejanie rozdziałów pracy do szablonu artykułu kończy się niepowodzeniem przy niezdefiniowanej sekwencji sterującej. „\część” znajduje się nad rozdziałami i jest rzadkością poza długimi książkami. `\paragraph` jest dziwny: tworzy pogrubiony nagłówek w tym samym wierszu, co następujący tekst, a nie nagłówek w osobnym wierszu, co zaskakuje prawie wszystkich za pierwszym razem.

Każde polecenie bierze tekst nagłówka w nawiasach klamrowych, drukuje go czcionką i rozmiarem wybranym przez klasę, numeruje go i zapisuje, aby `\tableofcontents` mógł go później znaleźć. Nigdy nie stylizujesz nagłówków bezpośrednio. Jeśli chcesz mieć różne czcionki nagłówków, jest to decyzja dotycząca całego dokumentu podjęta w preambule.

## Pomijanie liczb

Formularze oznaczone gwiazdką pomijają liczby: `\section*{Podziękowania}`. Gwiazdka sprawia również, że nagłówek jest poza spisem treści i całkowicie poza kolejnością numeracji, więc następująca po nim sekcja jest kontynuowana tak, jakby nagłówka oznaczonego gwiazdką w ogóle nie było. To jest dokładnie to, czego oczekujesz od podziękowań, przedmowy lub samodzielnego zakończenia w krótkim artykule. Jeśli sekcja oznaczona gwiazdką nadal powinna pojawiać się w spisie treści, w [lekcji ze spisu treści] (/learn/table-of-content/) znajdziesz jednowierszowe rozwiązanie.

## Kontrolowanie głębokości numeracji

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnum głębokość` decyduje o tym, jak głęboka będzie numeracja. W `artykuł` sekcje mają poziom 1, podsekcje poziom 2, a podsekcje poziom 3, zatem ustawienie licznika na 2 liczby sekcji i podsekcji pozostawia nagłówki podrozdziałów nienumerowane przy zachowaniu ich formatowania. „tocgłębi” to ten sam pomysł w przypadku spisu treści: kontroluje głębokość spisu treści, niezależnie od tego, co zostanie ponumerowane na stronie. Obydwa wiersze należą do preambuły.

Częstym błędem jest pomijanie poziomów, na przykład przeskakiwanie z „\sekcji” bezpośrednio do „\podsekcji”, ponieważ podoba Ci się mniejszy nagłówek. Numeracja nadal działa, ale daje dziwne wyniki, takie jak „1.0.1”, a czytelnicy tracą orientację w strukturze. Wybierz poziomy nagłówków pod kątem znaczenia i pozwól klasie zająć się wyglądem. Jeśli nie masz pewności, jak szkielet dokumentu pasuje do siebie, przeanalizujemy to w [lekcji dotyczącej szkieletu dokumentu](/learn/document-skeleton/).