---

title: "Skompiluj swój pierwszy plik PDF"
description: "Mały artykuł, jedna kompilacja i trzy pomysły, które pozwolą ci najlepiej poznać LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Skompiluj swój pierwszy plik PDF

Jeśli kiedykolwiek pisałeś tylko w programie Word lub Dokumentach Google, LaTeX poprosi Cię o zmianę jednego nawyku. Zamiast formatować tekst w trakcie pisania, opisujesz dokument zwykłym tekstem i pozwalasz programowi go napisać. Ten zwykły tekst znajduje się w pliku `.tex`: zwykłym pliku tekstowym, który można otworzyć w dowolnym edytorze, zawierającym słowa i polecenia takie jak `\section{...}`, które mówią, czym *jest* każdy element. Kompilacja zamienia to źródło w gotowy plik PDF. Silnik LaTeX czyta plik od góry do dołu, interpretuje każde polecenie, układa strony i zapisuje plik PDF. Nigdy nie formatujesz danych wyjściowych bezpośrednio. Edytujesz źródło i kompilujesz ponownie.

## Najmniejszy prawdziwy dokument

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Przeczytaj to od góry do dołu. `\documentclass{article}` informuje silnik, jakiego rodzaju jest to dokument, co powoduje ustawienie rozsądnych ustawień domyślnych czcionek, marginesów i stylów nagłówków. Linie `\title`, `\author` i `\date` przechowują jedynie metadane; nic nie zostało jeszcze wydrukowane, a „\dzisiaj” oznacza po prostu datę dowolnego dnia, który skompilujesz. `\begin{document}` oznacza miejsce, w którym zaczyna się rzeczywista treść. `\maketitle` to moment pojawienia się zapisanego bloku tytułowego na stronie. `\section{Wprowadzenie}` drukuje numerowany nagłówek i dyskretnie go zapisuje, aby spis treści mógł go później odnaleźć. Ostatnie wiersze pokazują dwa oblicza matematyki: `$...$` umieszcza formułę wewnątrz zdania, podczas gdy `\[ ... \]` tworzy własną, wyśrodkowaną linię wyświetlacza.

## Trzy pomysły, które niosą ze sobą język

1. Polecenia rozpoczynają się od ukośnika odwrotnego i zwykle przyjmują argument w nawiasach klamrowych, więc `\textbf{hello}` oznacza „składaj cześć pogrubioną czcionką”.
2. Środowiska otaczają obszar pomiędzy `\begin{...}` i `\end{...}`, a treść twojego pliku sama w sobie jest jednym dużym środowiskiem `dokumentu`.
3. Preambuła to wszystko przed `\begin{document}`; konfiguruje dokument, ale nigdy nie tworzy widocznego tekstu.

Prawie wszystko inne w LaTeX-ie jest odmianą tych trzech.

## Skompiluj

W [Oleafly](/docs/getting-started/) utwórz projekt, wklej powyższe źródło i skompiluj. Plik PDF pojawi się obok źródła, a SyncTeX połączy obie strony: kliknij miejsce w pliku PDF, aby przejść do pasującej linii źródłowej lub odwrotnie. Pierwsza kompilacja projektu może zająć trochę więcej czasu, zanim silnik pobierze to, czego potrzebuje; późniejsze biegi są szybsze.

Jednej rzeczy można się spodziewać: prędzej czy później kompilacja zakończy się niepowodzeniem i wyświetli się komunikat o błędzie oraz numer linii. Jest to całkowicie normalne i zwykle oznacza literówkę w nazwie polecenia lub brakujący nawias zamykający. Napraw linię, na którą wskazuje, i skompiluj ponownie.

## Następny

Kontynuuj [preambułę, objaśnienie](/learn/preamble-explained/), aby zobaczyć, co naprawdę robią linie konfiguracyjne, a następnie [tryb matematyczny](/learn/math-mode/) dla formuł. Podczas pisania pierwszej prawdziwej strony [ściągawka](/learn/cheatsheet/) powinna być otwarta.