---

title: "LaTeX snelle referentie"
description: "Compacte kaart van één pagina voor skelet-, tekst-, wiskunde-, floats-, cites-, lay-out-, engine-, TikZ-, Beamer- en veelvoorkomende logfouten."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX snelle referentie

Bewaar dit naast de editor. Elke rij is plakklaar. Voor langere lessen open je de bijpassende track op [Learn](/learn/).

**Spring:**
[Skelet](#document-skelet) ·
[Preambule](#preambule-patronen) ·
[Tekst](#tekst-en-opmaak) ·
[Secties](#sectioning-and-structure) ·
[Refs](#kruisverwijzingen-en-links) ·
[Wiskunde](#math-modus) ·
[Tabellen](#tabellen) ·
[Cijfers](#figuren-en-floats) ·
[Cites](#citations-and-bibliography) ·
[Lay-out](#lay-out) ·
[Motoren](#motoren-en-pakketten) ·
[TikZ](#tikz-minimaal) ·
[Beamer](#beamer-minimaal) ·
[Stellingen](#stellingen) ·
[Velden](#veld-bits) ·
[Compileren](#compile-loop) ·
[Fouten](#log-errors-decodeer-de-eerste-één) ·
[Pakketvolgorde](#package-load-order-rules-of-thumb)

## Documentskelet

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

| Klasse | Typisch gebruik |
| --- | --- |
| `artikel` | Papieren, aantekeningen, huiswerk |
| `rapport` | Langere rapporten met hoofdstukken |
| `boek` | Boeken / veel scripties |
| `beamer` | Dia's |
| Universiteit `.cls` | Scriptiesjablonen |

| Bestand | Rol |
| --- | --- |
| `.tex` | Bron |
| `.slab` | Bibliografiedatabank |
| `.cls` / `.sty` | Klasse/pakket |
| `.aux` `.log` `.toc` | Gegenereerd; niet bewerken |

## Preambulepatronen

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

Laad `hyperref` laat. Laad `cleveref` na `hyperref`.

## Tekst en opmaak

| Wil | Typ |
| --- | --- |
| Vet / cursief / mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Nadruk (nesten) | `\nadruk{}` |
| Kleinkapitalen | `\textsc{}` |
| Onderstrepen (zeldzaam) | `\onderstrepen{}` |
| Maten | `{\klein }` `{\groot }` `{\Groot }` `{\footnotesize }` |
| Nieuwe paragraaf | lege regel |
| Regeleinde | `\\` of `\nieuweregel` |
| Vaste ruimte | `~` |
| Horizontale ruimte | `\quad` `\qquad` `\hspace{1em}` |
| Verticale ruimte | `\vspace{1em}` `\bigskip` |
| Midden / vlak | `center` / `flushright`-omgevingen |
| Citaat | `citaat` of `citaat` |
| Voetnoot | `\voetnoot{...}` |
| Commentaar | `% rest van de regel` |

### Escape-specials (tekstmodus)

| Char | Code | Char | Code |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciititilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Lijsten

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

Aangepast label: `\item[(a)] ...`

### Paginanummers en -einden

| Wil | Typ |
| --- | --- |
| Stijl | `\pagestyle{plain}` / `leeg` / `mooi` |
| Alleen deze pagina | `\dezepaginastijl{leeg}` |
| Romeins / Arabisch | `\paginanummering{romaans}` en vervolgens `arabisch` |
| Nieuwe pagina | `\nieuwepagina` `\clearpage` |
| Verzoek om zachte pauze | `\paginaeinde[3]` |
| Blijf bij elkaar | `\nopagebreak` |

## Secties en structuur

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

| Wil | Typ |
| --- | --- |
| TOC | `\inhoudsopgave` |
| Lijst met figuren/tabellen | `\lijstvancijfers` `\lijstvantabellen` |
| Samenvatting | `\begin{abstract}...\end{abstract}` |
| Bijlage | `\appendix` en vervolgens `\sectie` / `\hoofdstuk` |
| Meerdere bestanden | `\include{hoofdstukken/intro}` of `\input{...}` |
| Eén hoofdstuk opstellen | `\includeonly{hoofdstukken/methoden}` |

## Kruisverwijzingen en links

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

Zet `\label` **na** `\caption` zodat het nummer correct is.

## Wiskundige modus

| Wil | Typ |
| --- | --- |
| Inline | `$...$` of `\( ... \)` |
| Ongenummerd weergeven | `\[ ... \]` |
| Genummerd weergeven | `vergelijking` + `\label` |
| Meerregelig uitgelijnd | `uitlijnen` / `uitlijnen*` |
| Gecentreerde meerdere regels | `verzamelen` / `verzamelen*` |
| Eén nummer, veel regels | `vergelijking` + `splitsing` |
| Lange gebroken lijn | `meerlijn` |
| Eén nummer onderdrukken | `\notag` of `\nonumber` |
| Referentie | `\ref{eq:x}` of `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Breuken, wortels, scripts

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Grieks (wiskundemodus)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operatoren, relaties, sets, pijlen

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Accenten en alfabetten

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Grote operatoren en calculus

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrices

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Stuksgewijs

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Scheidingstekens

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Live voorbeeld: [vergelijkingstool](/tools/equation-preview/).

## Tafels

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

| Wil | Typ |
| --- | --- |
| Kolommen uitlijnen | `l` `c` `r` `p{3cm}` |
| Verticale regel (vermijden) | `|` |
| Kolommen overspannen | `\meerdere kolommen{2}{c}{...}` |
| Span rijen | `\meerdere rijen{2}{*}{...}` (meerdere rijen) |
| Meerdere pagina's | `lange tafel` |
| Visuele bouwer | [tabelgenerator](/tools/table-generator/) |

Ontwerpwijze: drie horizontale regels, geen verticale lijnen.

## Figuren en praalwagens

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Wil | Typ |
| --- | --- |
| Breedte | `breedte=0,5\tekstbreedte` of `breedte=\lijnbreedte` |
| Hoogte | `hoogte=4cm` (vermijd beide tenzij het moet) |
| Pagina van PDF | `pagina=2` optie |
| Naast elkaar | twee `minipagina`s op `0.48\textwith` |
| Subfiguren | `subcaption`-pakket |
| Plaatsing | `[htbp]` (hier, boven, onder, pagina) |
| Barrière | `\usepackage{placeins}` + `\FloatBarrier` |

## Citaties en bibliografie

### BibTeX (klassiek)

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

### Minimale `.bib`-invoer

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

Valideren: [BibTeX validator](/tools/bibtex-validator/).

| Symptoom | Repareren |
| --- | --- |
| `[?]` of `?` | Verkeerde sleutel, ontbrekende pas, of BibTeX versus Biber komen niet overeen |
| Lege bibliografie | Pad, backend of geen `\cite` / verkeerd afdrukcommando |

## Indeling

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Wil | Typ |
| --- | --- |
| Eenmalig geen streepje | `\noindent` |
| Handmatige lengte | `\hspatie{2em}` `\vspatie{1ex}` |
| Eenheden | `pt` `em` `ex` `cm` `mm` `in` `\tekstbreedte` `\lijnbreedte` |

## Motoren en pakketten

| Motor | Goed voor |
| --- | --- |
| pdfLaTeX | Maximale dagboekcompatibiliteit |
| XeLaTeX | Systeemlettertypen, veel scripts (`fontspec`) |
| LuaLaTeX | Moderne Unicode + scripting |
| Tektonische | Gebundelde / on-demand pakketten (Oleafly standaard) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Ontbrekend pakket (TeX Live): `tlmgr install siunitx`

## Kleur

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimaal)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Commutatieve diagrammen: `tikz-cd`. Zelfstandige export: `\documentclass[tikz]{standalone}`.

## Beamer (minimaal)

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

## Stellingen

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

## Veldbits

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

## Compileer lus

1. Bewerk `.tex`
2. Motor starten (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Indien citaten: BibTeX of Biber
4. Laat de motor opnieuw draaien (vaak twee keer) totdat `??` en TOC tot rust komen

In Oleafly handelt compileren (of automatisch compileren) de lus af; SyncTeX springt tussen bron en PDF.

## Logfouten (decodeer de eerste)

| Symptoom | Gebruikelijke oorzaak |
| --- | --- |
| Tekst verdwijnt middenregel | Bare `%` begon een reactie |
| `Ontbrekende $ ingevoegd` | `_` of `^` of wiskundeopdracht in tekst |
| `Ongedefinieerde besturingssequentie` | Typfout of ontbrekend pakket |
| `Bestand niet gevonden` | Verkeerd pad/extensie voor invoer of afbeelding |
| Referenties afdrukken `??` | Nog een compileerpas nodig |
| Citaties `[?]` | Slechte sleutel, verkeerde backend of ontbrekende startpas |
| Lege bibliografie | Verkeerd `\bibliography` pad of biblatex komt niet overeen |
| `Overvolle \hbox` | Onbreekbare regel (URL, lange wiskunde, geen koppelteken) |
| Noodstop | Ontbrekende `\end{document}`, slechte include, op hol geslagen accolade |
| Weggelopen argument | Ontbrekende `}` of `\end{...}` |

## Laadvolgorde van pakketten (vuistregels)

1. Eerst klasseopties
2. Codering / lettertypen
3. Geometrie, setspace, taal
4. Wiskunde, afbeeldingen, tabellen
5. Domeinpakketten
6. 'hyperref' aan het einde
7. `cleveref` na `hyperref`

## Handige links in Oleafly Learn

| Volg | Begin |
| --- | --- |
| Open de lus | [Eerste PDF](/learn/eerste-document/) |
| Vergelijkingsvaartuig | [Wiskundemodus](/leren/wiskunde-modus/) · [Symbolen](/leren/wiskunde-symbolen-cheatsheet/) |
| Drijft | [Tabellen](/learn/create-table/) · [Afbeeldingen](/learn/insert-images/) |
| Citaties | [Citaties toevoegen](/learn/add-citations/) |
| Loggeletterdheid | [Ongedefinieerde controlereeks](/learn/ungedefinieerde-controlereeks/) |
| Lokale studio | [Oleafly-workflow](/learn/oleafly-workflow/) |
| Browserhulpmiddelen | [Vergelijking](/tools/equation-preview/) · [Tabel](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Volledige kaart: [/learn/](/learn/).