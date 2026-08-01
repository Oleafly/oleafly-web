---

title: "LaTeX-Kurzreferenz"
description: "Dichte einseitige Karte für Skelett, Text, Mathematik, Floats, Zitate, Layout, Engines, TikZ, Beamer und häufige Protokollfehler."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX-Kurzreferenz

Bewahren Sie dies neben dem Editor auf. Jede Reihe ist zum Einfügen bereit. Für längere Lektionen öffnen Sie den passenden Track unter [Learn](/learn/).

**Sprung:**
[Skelett](#document-skeleton) ·
[Präambel](#preamble-patterns) ·
[Text](#text-and-formatting) ·
[Abschnitte](#sectioning-and-structure) ·
[Refs](#cross-references-and-links) ·
[Mathe](#math-mode) ·
[Tabellen](#Tabellen) ·
[Figuren](#figures-and-floats) ·
[Zitiert](#citations-and-bibliography) ·
[Layout](#layout) ·
[Engines](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Theoreme](#Theoreme) ·
[Felder](#field-bits) ·
[Kompilieren](#compile-loop) ·
[Fehler](#log-errors-decode-the-first-one) ·
[Paketreihenfolge](#package-load-order-rules-of-thumb)

## Dokumentgerüst

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

| Klasse | Typische Verwendung |
| --- | --- |
| `Artikel` | Papiere, Notizen, Hausaufgaben |
| `Bericht` | Längere Berichte mit Kapiteln |
| „Buch“ | Bücher / viele Abschlussarbeiten |
| `Beamer` | Folien |
| Universität „.cls“ | Vorlagen für Abschlussarbeiten |

| Datei | Rolle |
| --- | --- |
| `.tex` | Quelle |
| `.bib` | Bibliographiedatenbank |
| `.cls` / `.sty` | Klasse / Paket |
| `.aux` `.log` `.toc` | Erzeugt; nicht bearbeiten |

## Präambelmuster

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

Laden Sie „hyperref“ zu spät. Laden Sie „cleveref“ nach „hyperref“.

## Text und Formatierung

| Wollen | Geben Sie | ein
| --- | --- |
| Fett / kursiv / mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Schwerpunkt (Nester) | `\emph{}` |
| Kapitälchen | `\textsc{}` |
| Unterstreichen (selten) | `\underline{}` |
| Größen | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Neuer Absatz | Leerzeile |
| Zeilenumbruch | `\\` oder `\newline` |
| Geschütztes Leerzeichen | `~` |
| Horizontaler Raum | `\quad` `\qquad` `\hspace{1em}` |
| Vertikaler Raum | `\vspace{1em}` `\bigskip` |
| Mitte/bündig | `center`/`flushright`-Umgebungen |
| Zitat | „Zitat“ oder „Zitat“ |
| Fußnote | `\footnote{...}` |
| Kommentar | `% Rest der Zeile` |

### Escape-Specials (Textmodus)

| Char | Code | Char | Code |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Listen

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

Benutzerdefinierte Bezeichnung: „\item[(a)] ...“.

### Seitenzahlen und Umbrüche

| Wollen | Geben Sie | ein
| --- | --- |
| Stil | `\pagestyle{plain}` / `empty` / `fancy` |
| Nur diese Seite | `\thispagestyle{empty}` |
| Römisch / Arabisch | `\pagenumbering{roman}` dann `arabic` |
| Neue Seite | `\newpage` `\clearpage` |
| Soft-Pause-Anfrage | `\pagebreak[3]` |
| Zusammenhalten | `\nopagebreak` |

## Aufteilung und Struktur

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

| Wollen | Geben Sie | ein
| --- | --- |
| Inhaltsverzeichnis | `\tableofcontents` |
| Abbildungs-/Tabellenverzeichnis | `\listoffigures` `\listoftables` |
| Abstrakt | `\begin{abstract}...\end{abstract}` |
| Anhang | `\appendix` dann `\section` / `\chapter` |
| Mehrdatei | `\include{chapters/intro}` oder `\input{...}` |
| Entwurf eines Kapitels | `\includeonly{chapters/methods}` |

## Querverweise und Links

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

Fügen Sie „\label“ **nach** „\caption“ ein, damit die Nummer korrekt ist.

## Mathe-Modus

| Wollen | Geben Sie | ein
| --- | --- |
| Inline | `$...$` oder `\( ... \)` |
| Ohne Nummer anzeigen | `\[ ... \]` |
| Nummeriert anzeigen | `Gleichung` + `\label` |
| Mehrzeilig ausgerichtet | `align` / `align*` |
| Zentrierte mehrzeilige | `gather` / `gather*` |
| Eine Zahl, viele Zeilen | `Gleichung` + `Split` |
| Lange gestrichelte Linie | `mehrzeilig` |
| Eine Zahl unterdrücken | `\notag` oder `\nonumber` |
| Referenz | `\ref{eq:x}` oder `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Brüche, Wurzeln, Skripte

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Griechisch (Mathe-Modus)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operatoren, Beziehungen, Mengen, Pfeile

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Akzente und Alphabete

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Große Operatoren und Analysis

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrizen

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Stückweise

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Trennzeichen

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Live-Vorschau: [Gleichungstool](/tools/equation-preview/).

## Tische

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

| Wollen | Geben Sie | ein
| --- | --- |
| Spalten ausrichten | `l` `c` `r` `p{3cm}` |
| Vertikale Regel (vermeiden) | `|` |
| Spalten überspannen | `\multicolumn{2}{c}{...}` |
| Zeilen überspannen | `\multirow{2}{*}{...}` (multirow) |
| Mehrseitig | `langer Tisch` |
| Visueller Builder | [Tabellengenerator](/tools/table-generator/) |

Gestaltungsgewohnheit: drei horizontale Regeln, keine vertikalen Linien.

## Figuren und Schwimmer

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Wollen | Geben Sie | ein
| --- | --- |
| Breite | `width=0.5\textwidth` oder `width=\linewidth` |
| Höhe | `height=4cm` (vermeiden Sie beides, es sei denn, Sie müssen) |
| Seite von PDF | Option „Seite=2“ |
| Seite an Seite | zwei „Minipages“ bei „0,48\textwidth“ |
| Unterfiguren | `subcaption`-Paket |
| Platzierung | `[htbp]` (hier, oben, unten, Seite) |
| Barriere | `\usepackage{placeins}` + `\FloatBarrier` |

## Zitate und Bibliographie

### BibTeX (klassisch)

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

### Minimaler „.bib“-Eintrag

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

Validieren: [BibTeX-Validator](/tools/bibtex-validator/).

| Symptom | Fix |
| --- | --- |
| „[?]“ oder „?“ | Falscher Schlüssel, fehlender Pass oder Nichtübereinstimmung zwischen BibTeX und Biber |
| Leere Bibliographie | Pfad, Backend oder kein „\cite“ / falscher Druckbefehl |

## Layout

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Wollen | Geben Sie | ein
| --- | --- |
| Einmalig ohne Einzug | `\noindent` |
| Manuelle Länge | `\hspace{2em}` `\vspace{1ex}` |
| Einheiten | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Engines und Pakete

| Motor | Gut für |
| --- | --- |
| pdfLaTeX | Maximale Journalkompatibilität |
| XeLaTeX | Systemschriftarten, viele Skripte (`fontspec`) |
| LuaLaTeX | Modernes Unicode + Scripting |
| Tektonische | Gebündelte/On-Demand-Pakete (Oleafly-Standard) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Fehlendes Paket (TeX Live): „tlmgr install siunitx“.

## Farbe

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimal)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Kommutative Diagramme: `tikz-cd`. Eigenständiger Export: „\documentclass[tikz]{standalone}“.

## Beamer (minimal)

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

## Theoreme

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

## Feldbits

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

## Kompilierungsschleife

1. Bearbeiten Sie „.tex“.
2. Engine ausführen (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Wenn Zitate: BibTeX oder Biber
4. Lassen Sie den Motor erneut laufen (häufig zweimal), bis sich „??“ und TOC stabilisieren

In Oleafly wird die Schleife vom Kompilieren (oder automatischen Kompilieren) verarbeitet. SyncTeX springt zwischen Quelle und PDF.

## Fehler protokollieren (den ersten dekodieren)

| Symptom | Übliche Ursache |
| --- | --- |
| Text verschwindet in der Mitte der Zeile | Bare „%“ hat einen Kommentar gestartet |
| `Fehlendes $ eingefügt` | `_` oder `^` oder mathematischer Befehl im Text |
| `Undefinierte Steuersequenz` | Tippfehler oder fehlendes Paket |
| `Datei nicht gefunden` | Falscher Pfad/Erweiterung für Eingabe oder Bild |
| Referenzen drucken `??` | Benötigen Sie einen weiteren Kompilierungsdurchgang |
| Zitate `[?]` | Falscher Schlüssel, falsches Backend oder fehlende Startnummer |
| Leere Bibliographie | Falscher „\bibliography“-Pfad oder biblatex-Konflikt |
| `\hbox überfüllt` | Unzerbrechliche Zeile (URL, lange Mathematik, kein Bindestrich) |
| Not-Aus | „\end{document}“ fehlt, fehlerhaftes Include, außer Kontrolle geratene Klammer |
| Ausreißer-Argument | Fehlendes „}“ oder „\end{...}“ |

## Paketladereihenfolge (Faustregeln)

1. Klassenoptionen zuerst
2. Kodierung / Schriftarten
3. Geometrie, Mengenraum, Sprache
4. Mathematik, Grafiken, Tabellen
5. Domain-Pakete
6. „hyperref“ gegen Ende
7. „cleveref“ nach „hyperref“.

## Nützliche Links in Oleafly Learn

| Verfolgen | Start |
| --- | --- |
| Öffne die Schleife | [Erstes PDF](/learn/first-document/) |
| Gleichungsboot | [Mathe-Modus](/learn/math-mode/) · [Symbole](/learn/math-symbols-cheatsheet/) |
| Schwimmt | [Tabellen](/learn/create-table/) · [Bilder](/learn/insert-images/) |
| Zitate | [Zitate hinzufügen](/learn/add-citations/) |
| Protokollkompetenz | [Undefinierte Kontrollsequenz](/learn/undefinierte-Kontrollsequenz/) |
| Lokales Studio | [Oleafly-Workflow](/learn/oleafly-workflow/) |
| Browser-Tools | [Gleichung](/tools/equation-preview/) · [Tabelle](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Vollständige Karte: [/learn/](/learn/).