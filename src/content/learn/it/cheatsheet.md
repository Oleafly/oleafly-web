---

title: "Riferimento rapido LaTeX"
description: "Scheda densa di una pagina per struttura, testo, matematica, numeri in virgola mobile, citazioni, layout, motori, TikZ, Beamer ed errori di registro comuni."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Riferimento rapido LaTeX

Tienilo accanto all'editor. Ogni riga è pronta per essere incollata. Per lezioni più lunghe, apri la traccia corrispondente su [Impara](/impara/).

**Salta:**
[Scheletro](#scheletro-documento) ·
[Preambolo](#modelli-preambolo) ·
[Testo](#testo-e-formattazione) ·
[Sezioni](#sezionamento-e-struttura) ·
[Riferimenti](#riferimenti-e-link) ·
[Matematica](#modalità matematica) ·
[Tabelle](#tabelle) ·
[Cifre](#figure-e-float) ·
[Città](#citazioni-e-bibliografia) ·
[Disposizione](#disposizione) ·
[Motori](#motori-e-pacchetti) ·
[TikZ](#tikz-minimo) ·
[Proiettore](#proiettore-minimal) ·
[Teoremi](#teoremi) ·
[Campi](#bit-campo) ·
[Compile](#compile-loop) ·
[Errori](#log-errori-decodifica-il-primo-uno) ·
[Ordine del pacchetto](#regole empiriche dell'ordine di caricamento del pacchetto)

## Scheletro del documento

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

| Classe | Uso tipico |
| --- | --- |
| "articolo" | Documenti, appunti, compiti |
| `rapporto` | Rapporti più lunghi con capitoli |
| "libro" | Libri / molte tesi |
| `proiettore` | Diapositive |
| Università `.cls` | Modelli di tesi |

| File | Ruolo |
| --- | --- |
| `.tex` | Fonte |
| `.bib` | Banca dati bibliografica |
| `.cls` / `.sty` | Classe/pacchetto |
| `.aux` `.log` `.toc` | generato; non modificare |

## Modelli di preambolo

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

Carica `hyperref` in ritardo. Carica "cleveref" dopo "hyperref".

## Testo e formattazione

| Vuoi | Digitare |
| --- | --- |
| Grassetto/corsivo/mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Enfasi (nidi) | `\emph{}` |
| Maiuscoletto | `\textsc{}` |
| Sottolineato (raro) | `\sottolineato{}` |
| Taglie | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Nuovo paragrafo | riga vuota |
| Interruzione di riga | `\\` o `\newline` |
| Spazio unificatore | `~` |
| Spazio orizzontale | `\quad` `\qquad` `\hspace{1em}` |
| Spazio verticale | `\vspace{1em}` `\bigskip` |
| Centro/a filo | Ambienti `center` / `flushright` |
| Citazione | "citazione" o "citazione" |
| Nota a piè di pagina | `\nota{...}` |
| Commento | `% resto della riga` |

### Speciali fuga (modalità testo)

| Carattere | Codice | Carattere | Codice |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| "&" | `\&` | "#" | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Elenchi

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

Etichetta personalizzata: "\item[(a)] ...".

### Numeri di pagina e interruzioni

| Vuoi | Digitare |
| --- | --- |
| Stile | `\pagestyle{plain}` / `vuoto` / `fancy` |
| Solo questa pagina | `\thispagestyle{vuoto}` |
| Romano/arabo | `\pagenumbering{romano}` quindi `arabo` |
| Nuova pagina | `\newpage` `\clearpage` |
| Richiesta di pausa soft | `\pagebreak[3]` |
| State insieme | `\nopagebreak` |

## Sezionamento e struttura

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

| Vuoi | Digitare |
| --- | --- |
| SOMMARIO | `\sommario` |
| Elenco figure/tabelle | `\listoffigures` `\listoffigures` |
| Estratto | `\begin{abstract}...\end{abstract}` |
| Appendice | `\appendice` quindi `\sezione` / `\capitolo` |
| Multifile | `\include{capitoli/introduzione}` o `\input{...}` |
| Bozza di un capitolo | `\includeonly{capitoli/metodi}` |

## Riferimenti incrociati e collegamenti

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

Inserisci `\label` **dopo** `\caption` in modo che il numero sia corretto.

## Modalità matematica

| Vuoi | Digitare |
| --- | --- |
| In linea | `$...$` oppure `\( ... \)` |
| Visualizza senza numero | `\[ ... \]` |
| Display numerato | `equazione` + `\etichetta` |
| Allineamento su più righe | `allinea` / `allinea*` |
| Multilinea centrata | `raccogliere` / `raccogliere*` |
| Un numero, tante righe | `equazione` + `divisione` |
| Linea lunga spezzata | `multilinea` |
| Sopprimi un numero | `\notag` o `\nonumber` |
| Riferimento | `\ref{eq:x}` oppure `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Frazioni, radici, scritture

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Greco (modalità matematica)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operatori, relazioni, insiemi, frecce

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Accenti e alfabeti

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Grandi operatori e calcolo infinitesimale

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrici

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### A pezzi

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Delimitatori

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Anteprima dal vivo: [strumento equazione](/tools/equation-preview/).

## Tabelle

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

| Vuoi | Digitare |
| --- | --- |
| Allinea colonne | `l` `c` `r` `p{3cm}` |
| Regola verticale (evitare) | `|` |
| Colonne di campata | `\multicolonna{2}{c}{...}` |
| Righe estese | `\multiriga{2}{*}{...}` (multiriga) |
| Multipagina | `tavola lunga` |
| Costruttore visivo | [generatore di tabelle](/tools/table-generator/) |

Abitudine progettuale: tre regole orizzontali, nessuna linea verticale.

## Figure e carri allegorici

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Vuoi | Digitare |
| --- | --- |
| Larghezza | `width=0.5\textwidth` o `width=\linewidth` |
| Altezza | `height=4cm` (evitali entrambi a meno che non sia necessario) |
| Pagina del PDF | opzione `pagina=2` |
| Fianco a fianco | due `minipage` in `0.48\textwidth` |
| Sottofigure | Pacchetto `sottotitolo` |
| Posizionamento | `[htbp]` (qui, in alto, in basso, pagina) |
| Barriera | `\usepackage{placeins}` + `\FloatBarrier` |

## Citazioni e bibliografia

### BibTeX (classico)

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

### nativa

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### Voce `.bib` minima

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

Convalida: [validatore BibTeX](/tools/bibtex-validator/).

| Sintomo | Correzione |
| --- | --- |
| `[?]` o `?` | Chiave sbagliata, passaggio mancante o mancata corrispondenza tra BibTeX e Biber |
| Bibliografia vuota | Percorso, backend o assenza di `\cite` / comando di stampa errato |

## Disposizione

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Vuoi | Digitare |
| --- | --- |
| Una tantum senza trattino | `\noindent` |
| Lunghezza manuale | `\hspace{2em}` `\vspace{1ex}` |
| Unità | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Motori e pacchetti

| Motore | Buono per |
| --- | --- |
| pdfLaTeX | Compatibilità massima del journal |
| XeLaTeX | Caratteri di sistema, molti script (`fontspec`) |
| LuaLaTeX | Unicode moderno + scripting |
| Tettonica | Pacchetti in bundle/su richiesta (impostazione predefinita di Oleafly) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Pacchetto mancante (TeX Live): `tlmgr install siunitx`

## Colore

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimo)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Diagrammi commutativi: `tikz-cd`. Esportazione autonoma: `\documentclass[tikz]{standalone}`.

## Proiettore (minimo)

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

## Teoremi

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

## Bit di campo

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

## Compila il ciclo

1. Modifica `.tex`
2. Avvia il motore (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Se citazioni: BibTeX o Biber
4. Avviare nuovamente il motore (spesso due volte) finché "??" e il TOC non si stabilizzano

In Oleafly, la compilazione (o la compilazione automatica) gestisce il ciclo; SyncTeX salta tra sorgente e PDF.

## Errori di registro (decodifica il primo)

| Sintomo | Causa abituale |
| --- | --- |
| Il testo scompare a metà riga | Bare `%` ha iniziato un commento |
| `$ mancante inserito` | `_` o `^` o comando matematico nel testo |
| `Sequenza di controllo non definita` | Errore di battitura o pacchetto mancante |
| `File non trovato` | Percorso/estensione errata per l'input o l'immagine |
| Riferimenti print `??` | Serve un altro passaggio di compilazione |
| Citazioni `[?]` | Chiave errata, backend errato o pass pettorale mancante |
| Bibliografia vuota | Percorso `\bibliography` errato o mancata corrispondenza di biblatex |
| `Troppo pieno \hbox` | Linea indistruttibile (URL, matematica lunga, senza trattino) |
| Arresto di emergenza | `\end{document}` mancante, inclusione errata, parentesi graffa |
| Argomento in fuga | Manca `}` o `\end{...}` |

## Ordine di caricamento dei pacchi (regole pratiche)

1. Prima le opzioni di lezione
2. Codifica/caratteri
3. Geometria, spazio ambientale, linguaggio
4. Matematica, grafica, tabelle
5. Pacchetti di domini
6. "hyperref" verso la fine
7. "cleveref" dopo "hyperref".

## Collegamenti utili in Oleafly Learn

| Traccia | Inizio |
| --- | --- |
| Apri il ciclo | [Primo PDF](/learn/first-document/) |
| Mestiere dell'equazione | [Modalità matematica](/learn/math-mode/) · [Simboli](/learn/math-symbols-cheatsheet/) |
| Galleggianti | [Tabelle](/learn/crea-tabella/) · [Immagini](/learn/insert-images/) |
| Citazioni | [Aggiungi citazioni](/learn/add-citations/) |
| Alfabetizzazione sul registro | [Sequenza di controllo non definita](/learn/unfine-control-sequence/) |
| Studio locale | [Flusso di lavoro Oleafly](/learn/oleafly-workflow/) |
| Strumenti del browser | [Equazione](/tools/equation-preview/) · [Tabella](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Mappa completa: [/learn/](/learn/).