---

title: "Krótkie omówienie LaTeX-a"
description: "Gęsta, jednostronicowa karta zawierająca szkielet, tekst, matematykę, liczby zmiennoprzecinkowe, cytaty, układ, silniki, TikZ, Beamer i typowe błędy dziennika."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Krótkie omówienie LaTeX-a

Trzymaj to obok edytora. Każdy rząd jest gotowy do wklejenia. W przypadku dłuższych lekcji otwórz odpowiednią ścieżkę w [Naucz się](/learn/).

**Skacz:**
[Szkielet](#dokument-szkielet) ·
[Preambuła](#preambuła-patterns) ·
[Tekst](#tekst i formatowanie) ·
[Sekcje](#przekrój-i-struktura) ·
[Refs](#odsyłacze-i-linki) ·
[Matematyka](#tryb-matematyczny) ·
[Stoły](#tabele) ·
[Figury](#figurki-i-pływaki) ·
[Cites](#cytaty-i-bibliografia) ·
[Układ](#układ) ·
[Silniki](#silniki i pakiety) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Twierdzenia](#twierdzenia) ·
[Pola](#bity-pola) ·
[Kompiluj](#kompiluj-pętlę) ·
[Błędy](#log-errors-decode-the-first-one) ·
[Kolejność paczki](#package-load-order-rules-of-thumb)

## Szkielet dokumentu

```latex
\documentclass[11pt,a4paper]{article}  % or report, book, beamer
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx,booktabs}
\usepackage{xcolor}
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
% \usepackage[backend=biber,style=numeric]{biblatex}
% \addbibresource{refs.bib}

\title{Title}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle
\begin{abstract} ... \end{abstract}
\tableofcontents
\section{Introduction}
...
% \bibliographystyle{plain}\bibliography{refs}   % BibTeX
% \printbibliography                             % biblatex
\end{document}
```

| Klasa | Typowe zastosowanie |
| --- | --- |
| `artykuł` | Papiery, notatki, prace domowe |
| `raport` | Dłuższe raporty z rozdziałami |
| `książka` | Książki / wiele prac |
| „rzutnik” | Slajdy |
| Uniwersytet `.cls` | Szablony prac |

| Plik | Rola |
| --- | --- |
| `.tex` | Źródło |
| `.bib` | Baza bibliograficzna |
| `.cls` / `.sty` | Klasa / pakiet |
| `.aux` `.log` `.toc` | Wygenerowano; nie edytuj |

## Wzory preambuł

```latex
\usepackage[margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\usepackage{fancyhdr}
\pagestyle{fancy}
\usepackage{siunitx}          % units and numbers
\usepackage{cleveref}         % after hyperref
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\vect}[1]{\boldsymbol{#1}}
```

Załaduj „hyperref” z opóźnieniem. Załaduj `cleveref` po `hyperref`.

## Tekst i formatowanie

| Chcesz | Wpisz |
| --- | --- |
| Pogrubienie / kursywa / mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Nacisk (gniazda) | `\emfa{}` |
| Kapelusze | `\textsc{}` |
| Podkreślenie (rzadko) | `\podkreślenie{}` |
| Rozmiary | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Nowy akapit | pusta linia |
| Przełamanie linii | `\\` lub `\nowa linia` |
| Spacja nierozdzielająca | `~` |
| Przestrzeń pozioma | `\quad` `\qquad` `\hspace{1em}` |
| Przestrzeń pionowa | `\vspace{1em}` `\bigskip` |
| Środek / równo | środowiska „centralne” / „flushright” |
| Cytat | „cytat” lub „cytat” |
| Przypis | `\przypis{...}` |
| Komentarz | `% reszty linii` |

### Specjalne oferty ucieczki (tryb tekstowy)

| Char | Kod | Char | Kod |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Listy

```latex
\begin{itemize}
  \item Bullet
\end{itemize}

\begin{enumerate}
  \item Numbered
\end{enumerate}

\begin{description}
  \item[Term] Definition
\end{description}
```

Etykieta niestandardowa: `\item[(a)] ...`

### Numery stron i podziały

| Chcesz | Wpisz |
| --- | --- |
| Styl | `\pagestyle{zwykły}` / `pusty` / `fantazyjny` |
| Tylko ta strona | `\thispagestyle{pusty}` |
| rzymski / arabski | `\pagenumbering{roman}`, a następnie `arabski` |
| Nowa strona | `\newpage` `\clearpage` |
| Prośba o miękką przerwę | `\pagebreak[3]` |
| Trzymajcie się razem | `\nopagebreak` |

## Podział i struktura

```latex
\part{...}            % book
\chapter{...}         % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
\section*{Unnumbered}
\addcontentsline{toc}{section}{Unnumbered}
```

| Chcesz | Wpisz |
| --- | --- |
| Spis treści | `\spis treści` |
| Spis rycin/tabel | `\listoffigures` `\listoftables` |
| Streszczenie | `\begin{abstrakt}...\end{abstrakt}` |
| Dodatek | `\dodatek`, a następnie `\sekcja` / `\rozdział` |
| Wiele plików | `\include{chapters/intro}` lub `\input{...}` |
| Narysuj jeden rozdział | `\includeonly{rozdziały/metody}` |

## Odsyłacze i linki

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} E=mc^2 \end{equation}
\begin{figure}
  ...
  \caption{Pipeline}\label{fig:pipe}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, Figure~\ref{fig:pipe}.
% with cleveref:
% \cref{fig:pipe}  \Cref{sec:methods}
```

```latex
\usepackage{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Umieść `\label` **po** `\caption`, aby liczba była poprawna.

## Tryb matematyczny

| Chcesz | Wpisz |
| --- | --- |
| W linii | `$...$` lub `\( ... \)` |
| Wyświetl nienumerowane | `\[... \]` |
| Wyświetl numerowany | `równanie` + `\etykieta` |
| Wyrównane wieloliniowo | `wyrównaj` / `wyrównaj*` |
| Wyśrodkowany wieloliniowy | `zbierać` / `zbierać*` |
| Jedna liczba, wiele linii | `równanie` + `podział` |
| Długa linia przerywana | `wieloliniowe` |
| Pomiń jedną liczbę | `\notag` lub `\nonumer` |
| Odniesienie | `\ref{eq:x}` lub `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Ułamki, pierwiastki, skrypty

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Grecki (tryb matematyczny)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operatory, relacje, zbiory, strzałki

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Akcenty i alfabety

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Duże operatory i rachunek różniczkowy

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Macierze

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Kawałki

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Ograniczniki

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Podgląd na żywo: [narzędzie równań](/tools/equation-preview/).

## Tabele

```latex
\usepackage{booktabs}
\begin{table}[htbp]
  \centering
  \caption{Results}\label{tab:res}
  \begin{tabular}{lcc}
    \toprule
    Model & Acc & F1 \\
    \midrule
    Baseline & 0.81 & 0.79 \\
    Ours & 0.87 & 0.86 \\
    \bottomrule
  \end{tabular}
\end{table}
```

| Chcesz | Wpisz |
| --- | --- |
| Wyrównaj kolumny | `l` `c` `r` `p{3cm}` |
| Linia pionowa (unikaj) | `|` |
| Rozpiętość kolumn | `\wielokolumnowe{2}{c}{...}` |
| Rozpinaj rzędy | `\wielowierszowy{2}{*}{...}` (wielowierszowy) |
| Wielostronicowe | „długi stół” |
| Kreator wizualny | [generator tabel](/tools/generator tabel/) |

Nawyk projektowania: trzy poziome zasady, żadnych pionowych linii.

## Figurki i pływaki

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Chcesz | Wpisz |
| --- | --- |
| Szerokość | `szerokość=0,5\textwidth` lub `szerokość=\linewidth` |
| Wysokość | `wysokość=4cm` (unikaj obu, chyba że musisz) |
| Strona PDF | opcja `strona=2` |
| Obok siebie | dwie `ministrony o szerokości `0,48\textwidth` |
| Podfigury | pakiet `subcaption` |
| Umieszczenie | `[htbp]` (tutaj, góra, dół, strona) |
| Bariera | `\usepackage{placeins}` + `\FloatBarrier` |

## Cytaty i bibliografia

### BibTeX (klasyczny)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### biblatex + biber

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### natbib

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### Minimalny wpis `.bib`

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  pages   = {97--111}
}
```

Sprawdź poprawność: [walidator BibTeX](/tools/bibtex-validator/).

| Objaw | Napraw |
| --- | --- |
| `[?]` lub `?` | Zły klucz, brakujące hasło lub niezgodność BibTeX-a Biber |
| Pusta bibliografia | Ścieżka, backend lub brak `\cite` / nieprawidłowe polecenie drukowania |

## Układ

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Chcesz | Wpisz |
| --- | --- |
| Jednorazowo bez wcięcia | `\bez wcięcia` |
| Długość ręczna | `\hspace{2em}` `\vspace{1ex}` |
| Jednostki | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Silniki i pakiety

| Silnik | Dobre dla |
| --- | --- |
| pdfLaTeX | Maksymalna kompatybilność dziennika |
| XeLaTeX | Czcionki systemowe, wiele skryptów (`fontspec`) |
| LuaLaTeX | Nowoczesny Unicode + skrypty |
| Tektonika | Pakiety łączone / na żądanie (domyślnie Oleafly) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Brakujący pakiet (TeX Live): `tlmgr install siunitx`

## Kolor

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimalny)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Diagramy przemienne: `tikz-cd`. Eksport autonomiczny: `\documentclass[tikz]{samodzielny}`.

## Projektor (minimalny)

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk}\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Results}
  \begin{itemize}
    \item<1-> First
    \item<2-> Second
  \end{itemize}
  \pause
\end{frame}
\end{document}
```

## Twierdzenia

```latex
\usepackage{amsthm}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\begin{theorem}[Name]
  Statement.
\end{theorem}
\begin{proof}
  ...
\end{proof}
```

## Bity pola

```latex
% Chemistry
\usepackage[version=4]{mhchem}
\ce{H2O} \ce{CO2 + C -> 2CO}

% Physics
\usepackage{braket}
\braket{\psi|\phi} \braket{\psi|A|\phi}

% Code
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
    return x**2
\end{lstlisting}
```

## Skompiluj pętlę

1. Edytuj `.tex`
2. Uruchom silnik (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Jeśli cytaty: BibTeX lub Biber
4. Uruchom ponownie silnik (często dwa razy), aż „?” i TOC się uspokoją

W Oleafly kompilacja (lub autokompilacja) obsługuje pętlę; SyncTeX przeskakuje pomiędzy źródłem a plikiem PDF.

## Błędy dziennika (odkoduj pierwszy)

| Objaw | Zwykła przyczyna |
| --- | --- |
| Tekst znika w połowie linii | Bare `%` rozpoczął komentarz |
| `Wstawiono brakujące $` | `_` lub `^` lub polecenie matematyczne w tekście |
| `Nieokreślona sekwencja sterująca` | Literówka lub brakujący pakiet |
| `Nie znaleziono pliku` | Zła ścieżka/rozszerzenie dla danych wejściowych lub obrazu |
| Referencje drukują `??` | Potrzebujesz kolejnej przepustki kompilacji |
| Cytaty `[?]` | Zły klucz, zły backend lub brak przepustki |
| Pusta bibliografia | Zła ścieżka `\bibliography` lub niezgodność biblatexu |
| `Przepełnienie \hbox` | Linia nie do złamania (adres URL, długa matematyka, bez łącznika) |
| Zatrzymanie awaryjne | Brakujący `\end{document}`, nieprawidłowe dołączenie, niekontrolowany nawias klamrowy |
| Uciekający argument | Brakuje `}` lub `\end{...}` |

## Kolejność ładowania pakietów (praktyczne zasady)

1. Najpierw opcje klasowe
2. Kodowanie / czcionki
3. Geometria, przestrzeń zadana, język
4. Matematyka, grafika, tablice
5. Pakiety domen
6. „hyperref” na końcu
7. `cleveref` po `hyperref`

## Przydatne linki w Oleafly Learn

| Śledź | Zacznij |
| --- | --- |
| Otwórz pętlę | [Pierwszy plik PDF](/learn/first-document/) |
| Równanie rzemiosło | [Tryb matematyczny](/learn/math-mode/) · [Symbole](/learn/math-symbols-cheatsheet/) |
| Pływa | [Tabele](/learn/create-table/) · [Obrazy](/learn/insert-images/) |
| Cytaty | [Dodaj cytaty](/learn/add-citations/) |
| Znajomość logów | [Niezdefiniowana sekwencja-kontrolna](/learn/niezdefiniowana-sekwencja-kontrolna/) |
| Lokalne studio | [Przepływ pracy Oleafly](/learn/oleafly-workflow/) |
| Narzędzia przeglądarki | [Równanie](/tools/equation-preview/) · [Tabela](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Pełna mapa: [/naucz/](/naucz/).