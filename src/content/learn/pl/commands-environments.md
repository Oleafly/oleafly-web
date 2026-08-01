---

title: "Polecenie czy środowisko?"
description: "Makra przyjmują argumenty; środowiska otaczają regiony."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Polecenie czy środowisko?

Wszystko, co wpisujesz w LaTeX-ie poza zwykłym tekstem, przyjmuje jeden z dwóch kształtów: polecenie lub środowisko. To rozróżnienie brzmi akademicko, dopóki nie trafisz na pierwszy komunikat o błędzie. Połowa skarg na LaTeX dotyczy tego, że jeden jest używany tam, gdzie powinien być drugi. Nauczenie się widzieć, na który kształt patrzysz, sprawia, że ​​zarówno dokumentacja, jak i błędy są czytelne.

## Polecenia

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Polecenie to ukośnik odwrotny, po którym następuje nazwa i wykonuje podstawienie w miejscu, w którym się pojawia. `\textbf{argument}` przyjmuje jeden argument w nawiasach klamrowych i pisze go pogrubioną czcionką; efekt zaczyna się i kończy na nawiasach klamrowych. Polecenia mogą przyjmować kilka argumentów w nawiasach klamrowych, a wiele z nich akceptuje także opcjonalny argument umieszczony przed nimi w nawiasach kwadratowych, jak w `\documentclass[11pt]{article}`.

Pierwsze dwie linijki pokazują, że polecenia można tworzyć. `\newcommand{\foo}{bar}` definiuje nowe polecenie o nazwie `\foo`, którego rozwinięciem jest tekst `bar` i od tego momentu wpisanie `\foo` w dowolnym miejscu powoduje wyświetlenie `bar`. Taki jest mechanizm stojący za [niestandardowymi makrami](/learn/custom-commands/) i tak też działają pakiety: pakiet to w dużej mierze plik definicji poleceń.

Jedna dziwna rzecz, o której warto wiedzieć wcześniej: polecenie takie jak `\LaTeX` połyka spację po nim, więc `\LaTeX jest zabawny' wypisuje słowa połączone. Napisz `\LaTeX{} jest fajny` lub `\LaTeX\ jest`, aby zachować odstęp.

## Środowiska

```latex
\begin{center}
 Centered block
\end{center}
```

Środowisko otacza region dokumentu pomiędzy pasującą parą `\begin{...}` i `\end{...}` i stosuje swoje zachowanie do wszystkiego w środku. Tutaj środowisko „centralne” centruje każdą linię bloku. Środowiska można zagnieżdżać, pod warunkiem, że zamykają się w odwrotnej kolejności, w jakiej zostały otwarte, i mogą również przyjmować argumenty: `\begin{tabular}{ll}` otwiera tabelę i przekazuje jej specyfikację kolumny.

Ponieważ środowiska muszą się równoważyć, zawodzą w charakterystyczny sposób. Błąd taki jak `\begin{itemize} zakończony przez \end{document}` oznacza, że ​​środowisko zostało otwarte i nigdy nie zostało zamknięte. Znajdź brakujący `\end`; nie patrz na linię z nazwami błędów.

## Ogólna zasada

Jeśli otacza region z wyraźnym początkiem i końcem, prawdopodobnie jest to środowisko. Jeśli jest to niewielka zamiana lub przełącznik, jest to polecenie. Te dwa kształty nawet się pokrywają: każde środowisko `foo` jest zaimplementowane jako para poleceń `\foo` i `\endfoo` pod maską. Aby zapoznać się z najczęściej spotykanymi poleceniami i środowiskami, zobacz [objaśnienie każdego polecenia](/learn/objaśnienie każdego-polecenie/) lub wypróbuj oba kształty w [placu zabaw na żywo](/live/).