---

title: "Référence rapide LaTeX"
description: "Carte dense d'une page pour le squelette, le texte, les mathématiques, les flottants, les citations, la mise en page, les moteurs, TikZ, Beamer et les erreurs de journal courantes."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Référence rapide LaTeX

Gardez-le à côté de l'éditeur. Chaque ligne est prête à être collée. Pour des leçons plus longues, ouvrez la piste correspondante sur [Learn](/learn/).

**Sauter :**
[Squelette](#document-squelette) ·
[Préambule](#preamble-patterns) ·
[Texte](#texte-et-formattage) ·
[Sections](#sectioning-and-structure) ·
[Réfs](#références croisées et liens) ·
[Math](#math-mode) ·
[Tableaux](#tables) ·
[Chiffres](#chiffres-et-flotteurs) ·
[Cites](#citations-et-bibliographie) ·
[Mise en page](#layout) ·
[Moteurs](#moteurs-et-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Théorèmes](#théorèmes) ·
[Champs](#field-bits) ·
[Compiler](#compile-loop) ·
[Erreurs](#log-errors-decode-the-first-one) ·
[Commande de colis](#package-load-order-rules-of-thumb)

## Squelette du document

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

| Classe | Utilisation typique |
| --- | --- |
| `article` | Papiers, notes, devoirs |
| `rapport` | Rapports plus longs avec chapitres |
| `livre` | Livres / nombreuses thèses |
| `projecteur` | Diapositives |
| Université `.cls` | Modèles de thèse |

| Fichier | Rôle |
| --- | --- |
| `.tex` | Source |
| `.bib` | Base de données bibliographique |
| `.cls` / `.sty` | Cours / forfait |
| `.aux` `.log` `.toc` | Généré ; ne pas modifier |

## Modèles de préambule

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

Chargez `hyperref` en retard. Chargez `cleveref` après `hyperref`.

## Texte et mise en forme

| Voulez-vous | Tapez |
| --- | --- |
| Gras / italique / mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Accentuation (nids) | `\emph{}` |
| Petites capitalisations | `\textsc{}` |
| Souligné (rare) | `\soulignement{}` |
| Tailles | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Nouveau paragraphe | ligne vierge |
| Saut de ligne | `\\` ou `\newline` |
| Espace insécable | `~` |
| Espace horizontal | `\quad` `\qquad` `\hspace{1em}` |
| Espace vertical | `\vspace{1em}` `\bigskip` |
| Centre / affleurant | Environnements `center` / `flushright` |
| Citation | `citation` ou `citation` |
| Note de bas de page | `\footnote{...}` |
| Commentaire | `% reste de la ligne` |

### Offres spéciales d'évasion (mode texte)

| Char | Codes | Char | Codes |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Listes

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

Étiquette personnalisée : `\item[(a)] ...`

### Numéros de page et sauts

| Voulez-vous | Tapez |
| --- | --- |
| Style | `\pagestyle{plain}` / `vide` / `fantaisie` |
| Cette page uniquement | `\thispagestyle{vide}` |
| Romain / arabe | `\pagenumbering{roman}` puis `arabe` |
| Nouvelle page | `\newpage` `\clearpage` |
| Demande de pause douce | `\pagebreak[3]` |
| Restez ensemble | `\nopagebreak` |

## Sectionnement et structure

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

| Voulez-vous | Tapez |
| --- | --- |
| Table des matières | `\table des matières` |
| Liste des figures/tableaux | `\listoffigures` `\listoftables` |
| Résumé | `\begin{résumé}...\end{résumé}` |
| Annexe | `\appendix` puis `\section` / `\chapter` |
| Multi-fichiers | `\include{chapters/intro}` ou `\input{...}` |
| Projet d'un chapitre | `\includeonly{chapitres/méthodes}` |

## Références croisées et liens

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

Mettez `\label` **après** `\caption` pour que le numéro soit correct.

## Mode mathématique

| Voulez-vous | Tapez |
| --- | --- |
| En ligne | `$...$` ou `\( ... \)` |
| Afficher non numéroté | `\[ ... \]` |
| Affichage numéroté | `équation` + `\étiquette` |
| Aligné sur plusieurs lignes | `aligner` / `aligner*` |
| Multiligne centré | `rassembler` / `rassembler*` |
| Un numéro, plusieurs lignes | `équation` + `split` |
| Longue ligne brisée | `multiligne` |
| Supprimer un numéro | `\notag` ou `\nonumber` |
| Référence | `\ref{eq:x}` ou `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Fractions, racines, scripts

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Grec (mode mathématique)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Opérateurs, relations, ensembles, flèches

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Accents et alphabets

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Gros opérateurs et calcul

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

### Par morceaux

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Délimiteurs

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Aperçu en direct : [outil d'équation](/tools/equation-preview/).

## Tableaux

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

| Voulez-vous | Tapez |
| --- | --- |
| Aligner les colonnes | `l` `c` `r` `p{3cm}` |
| Règle verticale (à éviter) | `|` |
| Colonnes étendues | `\multicolonne{2}{c}{...}` |
| Étendre les lignes | `\multirow{2}{*}{...}` (multiligne) |
| Multipage | `table longue` |
| Constructeur visuel | [générateur de table](/tools/table-generator/) |

Habitude de conception : trois règles horizontales, pas de lignes verticales.

## Chiffres et flotteurs

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Voulez-vous | Tapez |
| --- | --- |
| Largeur | `width=0.5\textwidth` ou `width=\linewidth` |
| Hauteur | `hauteur=4 cm` (évitez les deux sauf si vous y êtes obligé) |
| Page du PDF | option `page=2` |
| Côte à côte | deux `minipages` à `0,48\textwidth` |
| Sous-figures | Paquet `sous-légende` |
| Placement | `[htbp]` (ici, haut, bas, page) |
| Barrière | `\usepackage{placeins}` + `\FloatBarrier` |

## Citations et bibliographie

### BibTeX (classique)

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

### Entrée minimale `.bib`

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

Valider : [validateur BibTeX](/tools/bibtex-validator/).

| Symptôme | Corriger |
| --- | --- |
| `[?]` ou `?` | Mauvaise clé, passe manquante ou inadéquation BibTeX vs Biber |
| Bibliographie vide | Chemin, backend ou pas de commande `\cite` / mauvaise impression |

## Mise en page

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Voulez-vous | Tapez |
| --- | --- |
| Unique sans tiret | `\noindent` |
| Longueur manuelle | `\hspace{2em}` `\vspace{1ex}` |
| Unités | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Moteurs et packages

| Moteur | Bon pour |
| --- | --- |
| pdfLaTeX | Compatibilité maximale des journaux |
| XeLaTeX | Polices système, nombreux scripts (`fontspec`) |
| LuaLaTeX | Unicode moderne + scripts |
| Tectonique | Forfaits groupés/à la demande (Oleafly par défaut) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Paquet manquant (TeX Live) : `tlmgr install siunitx`

## Couleur

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

Diagrammes commutatifs : `tikz-cd`. Exportation autonome : `\documentclass[tikz]{standalone}`.

## Projecteur (minimal)

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

## Théorèmes

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

## Bits de champ

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

## Boucle de compilation

1. Modifiez `.tex`
2. Exécutez le moteur (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Si citations : BibTeX ou Biber
4. Faites tourner à nouveau le moteur (souvent deux fois) jusqu'à ce que « ?? » et le COT se stabilisent.

Dans Oleafly, la compilation (ou la compilation automatique) gère la boucle ; SyncTeX saute entre la source et le PDF.

## Journaliser les erreurs (décoder la première)

| Symptôme | Cause habituelle |
| --- | --- |
| Le texte disparaît au milieu de la ligne | Bare `%` a commencé un commentaire |
| `$ manquant inséré` | `_` ou `^` ou commande mathématique dans le texte |
| `Séquence de contrôle non définie` | Faute de frappe ou paquet manquant |
| `Fichier introuvable` | Mauvais chemin/extension pour l'entrée ou l'image |
| Références imprimer `??` | Besoin d'une autre passe de compilation |
| Citations `[?]` | Mauvaise clé, mauvais backend ou laissez-passer manquant |
| Bibliographie vide | Mauvais chemin `\bibliography` ou inadéquation biblatex |
| `\hbox trop pleine` | Ligne incassable (URL, mathématiques longues, sans trait d'union) |
| Arrêt d'urgence | `\end{document}` manquant, inclusion incorrecte, accolade incontrôlable |
| Argument de fuite | `}` ou `\end{...}` manquant |

## Ordre de chargement des packages (règles empiriques)

1. Les options de cours en premier
2. Encodage / polices
3. Géométrie, setspace, langage
4. Mathématiques, graphiques, tableaux
5. Forfaits de domaine
6. `hyperref` vers la fin
7. `cleveref` après `hyperref`

## Liens utiles dans Oleafly Learn

| Piste | Démarrer |
| --- | --- |
| Ouvrir la boucle | [Premier PDF](/learn/premier-document/) |
| Artisanat d'équation | [Mode mathématique](/learn/math-mode/) · [Symboles](/learn/math-symbols-cheatsheet/) |
| Flotteurs | [Tableaux](/learn/create-table/) · [Images](/learn/insert-images/) |
| Citations | [Ajouter des citations](/learn/add-citations/) |
| Log alphabétisation | [Séquence de contrôle non définie](/learn/undefined-control-sequence/) |
| Atelier local | [Flux de travail Oleafly](/learn/oleafly-workflow/) |
| Outils du navigateur | [Équation](/tools/equation-preview/) · [Table](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Carte complète : [/learn/](/learn/).