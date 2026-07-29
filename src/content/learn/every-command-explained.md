---
title: "Every \\command in the LaTeX universe, explained"
description: "The global reference: hundreds of LaTeX commands and environments, from the kernel to amsmath, hyperref, TikZ, biblatex, and Beamer, each explained in one line."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Every \command in the LaTeX universe, explained

This page defines every LaTeX command and environment that appears in any lesson on Oleafly Learn, plus the wider standard vocabulary you will meet in real papers. Kernel, amsmath, hyperref, graphicx, booktabs, biblatex, TikZ, Beamer, and the packages researchers actually load. Skim it by category, or search the page with Ctrl/Cmd-F for the command you just met. Each entry is one line: what it does and, where it matters, which package it comes from.

## Document classes and setup

| Command | What it does |
| --- | --- |
| `\documentclass{article}` | First line of every document: picks the overall layout; article is the default choice for papers. |
| `\documentclass{report}` | Class for longer reports: adds `\chapter` and starts the abstract on its own page. |
| `\documentclass{book}` | Class for books: chapters, two-sided layout, front/main/back matter. |
| `\documentclass{letter}` | Class for correspondence, with `\opening`, `\closing`, and address commands. |
| `\documentclass{beamer}` | Class for slide presentations built from `frame` environments. |
| `\documentclass[11pt,a4paper]{article}` | Common class options: font size (10pt, 11pt, 12pt), paper (a4paper, letterpaper), `twocolumn`, `twoside`, `landscape`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Loads a package in the preamble to add features. |
| `\usepackage[margin=1in]{geometry}` | Sets page margins and paper size (geometry). |
| `\title{...}` | Stores the document title, printed later by `\maketitle`. |
| `\author{...}` | Stores the author list for `\maketitle`; separate multiple authors with `\and`. |
| `\and` | Separator between author names inside `\author{...}`. |
| `\date{...}` | Stores the date shown by `\maketitle`; `\date{}` hides it, `\date{\today}` shows today. |
| `\today` | Prints the current date at compile time. |
| `\maketitle` | Prints the title block from `\title`, `\author`, and `\date`. |
| `\thanks{...}` | Attaches a footnote to a title or author name, e.g. for funding or contact info. |
| `\institute{...}` | Author affiliation command used by Beamer and the Springer LNCS class. |
| `\inst{1}` | Affiliation superscript marker in LNCS and Beamer author lists: `Ada Lovelace\inst{1}`. |
| `\keywords{...}` | Prints the paper's keyword list in publisher classes like acmart and llncs. |
| `\address{...}` | letter class: stores the sender's address for the letterhead. |
| `\signature{...}` | letter class: stores the name printed under the closing. |
| `\opening{Dear ...}` | letter class: prints the salutation and starts the letter body. |
| `\closing{Sincerely,}` | letter class: prints the sign-off and signature block. |
| `\LaTeX` | Prints the LaTeX logo with its raised and lowered letters. |
| `\TeX` | Prints the TeX logo with its lowered E. |
| `\input{file}` | Pastes another .tex file in place, as if you had typed it there. |
| `\include{chapter1}` | Inputs a chapter file starting on a new page; enables partial compiles via `\includeonly`. |
| `\includeonly{chapter1,chapter3}` | Preamble list restricting which `\include` files actually compile. |
| `\hypersetup{...}` | Configures hyperref options such as link colors and PDF metadata. |
| `\AtBeginDocument{...}` | Runs code right after `\begin{document}`, useful for late setup. |
| `\AtEndDocument{...}` | Runs code just before the document ends. |
| `\makeatletter` | Temporarily makes `@` a letter so you can use or patch internal commands. |
| `\makeatother` | Restores `@` to normal after `\makeatletter`. |
| `\typeout{...}` | Prints a message to the compile log and terminal, handy for debugging. |
| `\protect` | Shields a fragile command inside a moving argument like `\caption` or `\section`. |
| `\listfiles` | Preamble command that logs every loaded file and its version, for bug reports. |

## Structure and sectioning

| Command | What it does |
| --- | --- |
| `\part{...}` | Highest-level division, above chapters, in book and report classes. |
| `\chapter{...}` | Numbered chapter heading in book and report classes (not in article). |
| `\section{...}` | Numbered top-level heading in an article. |
| `\subsection{...}` | Numbered heading one level below `\section`. |
| `\subsubsection{...}` | Numbered heading one level below `\subsection`. |
| `\paragraph{...}` | Lowest-level heading: a run-in bold title at the start of a paragraph. |
| `\subparagraph{...}` | One level below `\paragraph`, rarely needed. |
| `\section*{...}` | Starred sectioning prints the heading without a number or TOC entry. |
| `\appendix` | Switches numbering so the following chapters or sections become Appendix A, B, C. |
| `\appendixpage` | Prints a separate "Appendices" divider page (appendix package). |
| `\tableofcontents` | Prints the table of contents, built from your sectioning commands. |
| `\listoffigures` | Prints a list of all figure captions with page numbers. |
| `\listoftables` | Prints a list of all table captions with page numbers. |
| `\frontmatter` | Book-class switch for the pre-content pages: roman page numbers, unnumbered chapters. |
| `\mainmatter` | Book-class switch back to the main content: arabic page numbers, numbered chapters. |
| `\backmatter` | Book-class switch for the end pages: chapters stop being numbered. |
| `\addcontentsline{toc}{chapter}{...}` | Manually adds an entry to the table of contents (or a list of figures/tables). |
| `\addtocontents{toc}{...}` | Writes arbitrary material (like spacing) into a contents file. |
| `\setcounter{secnumdepth}{3}` | Controls how deep sectioning numbers go. |
| `\setcounter{tocdepth}{2}` | Controls how deep the table of contents goes. |

## Defining commands and environments

| Command | What it does |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Defines your own command; errors if the name already exists. |
| `\renewcommand{...}{...}` | Redefines an existing command; errors if it does not exist. |
| `\providecommand{...}{...}` | Defines a command only if it is not already defined; otherwise silently does nothing. |
| `\NewDocumentCommand` | Modern command definition with flexible optional arguments (LaTeX3/xparse). |
| `\newenvironment{name}{begin code}{end code}` | Defines your own environment with code run at `\begin` and `\end`. |
| `\renewenvironment{name}{...}{...}` | Redefines an existing environment. |
| `\ensuremath{...}` | Makes a macro's math content work both inside and outside math mode. |
| `\DeclareMathOperator{\E}{E}` | Defines an upright operator name; the starred form puts limits below (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Starred form: the operator takes limits below in display math (amsmath). |
| `\newtheorem{lemma}{Lemma}` | Declares a theorem-like environment (amsthm). |
| `\foo` | Example name for a user-defined macro in the `\newcommand` lesson, not a real LaTeX command. |
| `\abs{x}` | Example user-defined macro from the custom commands lesson that typesets absolute-value bars. |
| `\mat{A}` | Example user-defined macro from the custom commands lesson for a bold matrix symbol. |
| `\vect{v}` | Example user-defined macro from the custom commands lesson for a bold vector symbol. |
| `\set{...}` | Example user-defined macro from the custom commands lesson that typesets sized set braces. |
| `\citepair` | Example user-defined citation helper macro from the custom commands lesson, not a standard command. |
| `\E` | Example user-defined operator for expectation, typically defined with `\DeclareMathOperator` or `\newcommand`. |
| `\R` | Example user-defined macro for the reals: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Operator names for arg max / arg min, defined in this course with `\DeclareMathOperator*` so subscripts sit below. |

## Counters and lengths

| Command | What it does |
| --- | --- |
| `\newcounter{examples}` | Creates a new counter, optionally reset by a parent: `\newcounter{examples}[section]`. |
| `\setcounter{page}{1}` | Sets a counter's value, here restarting page numbers. |
| `\addtocounter{examples}{2}` | Adds a value to a counter without printing anything. |
| `\stepcounter{examples}` | Increments a counter by one. |
| `\refstepcounter{examples}` | Increments a counter and makes it the target for the next `\label`. |
| `\value{examples}` | Reads a counter's value for use in arithmetic or comparisons. |
| `\arabic{examples}` | Prints a counter as arabic numerals: 1, 2, 3. |
| `\roman{examples}`, `\Roman{examples}` | Prints a counter as lowercase or uppercase roman numerals. |
| `\alph{examples}`, `\Alph{examples}` | Prints a counter as lowercase or uppercase letters. |
| `\fnsymbol{footnote}` | Prints a counter as footnote symbols: asterisk, dagger, and so on. |
| `\newlength{\mygap}` | Creates a new length register. |
| `\setlength{\parskip}{6pt}` | Assigns a value to a length register. |
| `\addtolength{\textheight}{1cm}` | Adds to an existing length. |
| `\settowidth{\mygap}{text}` | Sets a length to the natural width of some text. |
| `\parindent` | Length of the first-line paragraph indent; set with `\setlength{\parindent}{0pt}`. |
| `\parskip` | Length of the vertical gap between paragraphs; set with `\setlength`. |
| `\linewidth` | Length of the current line, handy for sizing: `width=\linewidth`. |
| `\textwidth` | Length of the full text block width on the page. |
| `\textheight` | Length of the full text block height on the page. |
| `\columnwidth` | Width of one column in a multi-column layout. |
| `\baselineskip` | Vertical distance between baselines of consecutive lines. |
| `\linespread{1.3}` | Scales the leading (line spacing) for the whole document; needs `\selectfont` or a size command to take effect in place. |

## Paragraphs, line breaks, and hyphenation

| Command | What it does |
| --- | --- |
| `\\` | Ends the current line inside paragraphs, tables, and arrays. |
| `\\[6pt]` | Line break with extra vertical space after it. |
| `\newline` | Breaks the line without justifying it and without allowing a page break. |
| `\linebreak` | Requests a justified line break here; optional `[0-4]` sets insistence. |
| `\nolinebreak` | Discourages a line break at this point. |
| `\par` | Ends the paragraph, same as a blank line in the source. |
| `\noindent` | Suppresses the first-line indent of the paragraph that follows. |
| `\indent` | Forces the first-line indent where it would otherwise be suppressed. |
| `\-` | Marks an allowed hyphenation point inside a word. |
| `\hyphenation{data-set}` | Preamble list teaching LaTeX how to hyphenate specific words. |
| `\sloppy` | Loosens spacing rules so lines break more easily, avoiding overfull boxes. |
| `\fussy` | Restores strict spacing rules after `\sloppy`. |
| `\raggedright` | Left-aligns the following text instead of justifying it. |
| `\raggedleft` | Right-aligns the following text. |
| `\centering` | Centers everything that follows inside the current group, e.g. a figure's image. |
| `\samepage` | Discourages page breaks within the current group. |
| `\enlargethispage{\baselineskip}` | Makes only the current page a bit taller, to squeeze in one more line. |
| `~` | Non-breaking space: `Figure~1` keeps the number on the same line. |

## Spacing

| Command | What it does |
| --- | --- |
| `\quad` | Inserts a horizontal space about the width of a capital M. |
| `\qquad` | Inserts twice the space of `\quad`. |
| `\enspace` | Inserts half a `\quad` of horizontal space. |
| `\hspace{1cm}` | Inserts horizontal space; disappears at a line break. |
| `\hspace*{1cm}` | Horizontal space that survives even at a line break. |
| `\vspace{1cm}` | Inserts vertical space of a given length. |
| `\vspace*{1cm}` | Vertical space that survives even at a page break. |
| `\smallskip` | Inserts a small vertical gap between paragraphs. |
| `\medskip` | Inserts a medium vertical gap between paragraphs. |
| `\bigskip` | Inserts a large vertical gap between paragraphs. |
| `\hfill` | Stretchy horizontal space that pushes content apart to fill the line. |
| `\vfill` | Stretchy vertical space that pushes content apart to fill the page. |
| `\dotfill` | Fills the remaining line with dots, as in a menu or contents line. |
| `\hrulefill` | Fills the remaining line with a horizontal rule. |
| `\stretch{2}` | Stretchy glue with a weight, for proportional spacing: `\hspace{\stretch{2}}`. |
| `\fill` | The unit stretchy length; `\hspace{\fill}` is what `\hfill` expands to. |
| `\phantom{text}` | Takes up exactly the space of its argument but prints nothing. |
| `\hphantom{text}` | Takes up only the width of its argument, with zero height. |
| `\vphantom{text}` | Takes up only the height of its argument, with zero width. |
| `\smash{...}` | Prints its argument but pretends it has zero height and depth. |
| `\strut` | Invisible support the height of a normal line, to even out row heights. |
| `\mathstrut` | Math-mode strut the size of a parenthesis, to align radicals and fractions. |

## Boxes and rules

| Command | What it does |
| --- | --- |
| `\mbox{...}` | Unbreakable horizontal box; also keeps its contents on one line. |
| `\makebox[3cm][r]{...}` | Box of a set width with chosen alignment (l, c, r, s). |
| `\fbox{...}` | Draws a frame around its contents. |
| `\framebox[3cm][c]{...}` | Framed box of a set width with chosen alignment. |
| `\parbox{5cm}{...}` | A paragraph box: a mini column of text of the given width. |
| `\raisebox{2pt}{...}` | Shifts its contents up (or down with a negative length). |
| `\rule{2cm}{0.4pt}` | Draws a filled rectangle; the workhorse for custom lines. |
| `\colorbox{yellow}{...}` | Puts text on a colored background box (xcolor). |
| `\fcolorbox{red}{yellow}{...}` | Colored box with a colored frame (xcolor). |

## Pages, numbering, and headers

| Command | What it does |
| --- | --- |
| `\newpage` | Ends the current page and starts a new one. |
| `\clearpage` | Starts a new page after first flushing all pending figures and tables. |
| `\cleardoublepage` | Like `\clearpage` but also ensures the next page is a right-hand (odd) page. |
| `\pagebreak` | Requests a page break at this point, stretching the page to full height. |
| `\nopagebreak` | Discourages a page break at this point. |
| `\pagenumbering{roman}` | Sets the page number style (arabic, roman, Roman, alph, Alph), resetting the counter to 1. |
| `\pagestyle{fancy}` | Sets the running header/footer style (plain, empty, headings, myheadings, fancy) for all following pages. |
| `\thispagestyle{empty}` | Overrides the header/footer style for the current page only. |
| `\thepage` | Prints the current page number; used inside headers and footers. |
| `\marginpar{...}` | Puts a note in the page margin next to the current line. |
| `\fancyhf{}` | Clears all fancyhdr header and footer fields before setting your own. |
| `\fancyhead[R]{...}` | Sets a fancyhdr header field, here the right-hand one. |
| `\fancyfoot[C]{\thepage}` | Sets a fancyhdr footer field, here a centered page number. |
| `\headrulewidth` | fancyhdr macro for the header rule thickness; renew to 0pt to remove the line. |
| `\footrulewidth` | fancyhdr macro for the footer rule thickness, 0pt by default. |
| `\newgeometry{margin=2cm}` | Changes page geometry mid-document (geometry). |
| `\restoregeometry` | Returns to the preamble geometry after `\newgeometry` (geometry). |

## Special characters

The ten reserved characters and how to print them, plus common text symbols.

| Command | What it does |
| --- | --- |
| `\%` | Prints a percent sign (bare `%` starts a comment). |
| `\&` | Prints an ampersand (bare `&` is the table column separator). |
| `\#` | Prints a hash (bare `#` marks macro arguments). |
| `\_` | Prints an underscore (bare `_` is a math subscript). |
| `\{` and `\}` | Print curly braces (bare braces group). |
| `\$` | Prints a dollar sign (bare `$` toggles math mode). |
| `\textbackslash` | Prints a backslash in text. |
| `\textasciitilde` | Prints a tilde in text (bare `~` is a non-breaking space). |
| `\textasciicircum` | Prints a caret in text (bare `^` is a math superscript). |
| `\textbar` | Prints a vertical bar in text. |
| `\textless`, `\textgreater` | Print < and > correctly in text mode. |
| `\ldots`, `\dots` | Ellipsis with correct spacing; `\dots` adapts in math mode (amsmath). |
| `\textellipsis` | The text-mode ellipsis that `\dots` uses outside math. |
| `\textemdash`, `\textendash` | Named commands for the em and en dash (same output as `---` and `--`). |
| `\textquotedblleft`, `\textquotedblright` | Curly double quotation marks (usually typed as backtick pairs and apostrophe pairs). |
| `\guillemetleft`, `\guillemetright` | French angle quotation marks (older spelling: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Dagger and double dagger in text, common for author affiliations. |
| `\S` | Section sign, as in S 2.1 of a legal document. |
| `\P` | Paragraph (pilcrow) sign. |
| `\pounds` | British pound sign. |
| `\euro` | Euro sign (eurosym package; the kernel also provides `\texteuro`). |
| `\copyright` | Copyright sign. |
| `\textregistered` | Registered trademark sign. |
| `\texttrademark` | Trademark sign. |
| `\textdegree` | Degree sign: `25\textdegree C`. |
| `\textmu` | Upright micro sign for text like microns. |
| `\textperthousand` | Per-mille sign. |

## Accents and special letters

For pdfLaTeX-era text accents; with XeLaTeX/LuaLaTeX and UTF-8 input you can usually just type the character.

| Command | What it does |
| --- | --- |
| `\'{e}` | Acute accent: e-acute as in cafe with an accent. |
| `` \`{e} `` | Grave accent. |
| `\^{o}` | Circumflex accent. |
| `\"{u}` | Umlaut/dieresis. |
| `\~{n}` | Tilde accent, as in Spanish n-tilde. |
| `\c{c}` | Cedilla, as in French c-cedilla. |
| `\v{s}` | Caron (hacek), common in Czech and Croatian names. |
| `\H{o}` | Hungarian double acute accent. |
| `\k{a}` | Ogonek, as in Polish a-ogonek. |
| `\b{o}` | Bar-under accent. |
| `\d{u}` | Dot-under accent, used in transliteration. |
| `\r{a}` | Ring accent, as in Scandinavian a-ring. |
| `\u{o}` | Breve accent. |
| `\.{o}` | Dot-over accent. |
| `\t{oo}` | Tie accent joining two letters. |
| `\i`, `\j` | Dotless i and j, for stacking accents: `\'{\i}`. |
| `\ae`, `\AE` | The ae ligature, lowercase and uppercase. |
| `\oe`, `\OE` | The oe ligature, as in French oeuvre. |
| `\ss` | German sharp s (eszett). |
| `\o`, `\O` | Slashed o, as in Danish and Norwegian names. |
| `\l`, `\L` | Polish slashed l. |
| `\aa`, `\AA` | A-ring as a standalone letter, as in Angstrom's name. |

## Fonts and sizes

| Command | What it does |
| --- | --- |
| `\textbf{...}` | Bold text. |
| `\textit{...}` | Italic text. |
| `\emph{...}` | Emphasis that adapts to context: italic in upright text, upright in italic text. |
| `\textsc{...}` | Small caps text. |
| `\texttt{...}` | Typewriter (monospace) text, good for code and filenames. |
| `\textrm{...}` | Roman (serif) family text. |
| `\textsf{...}` | Sans-serif family text. |
| `\textmd{...}` | Medium (normal) weight, undoing bold. |
| `\textup{...}` | Upright shape, undoing italic or slanted. |
| `\textsl{...}` | Slanted (oblique) shape, distinct from true italic. |
| `\textnormal{...}` | Resets to the document's default font in one step. |
| `\underline{...}` | Underlines text; use sparingly, emphasis is usually `\emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Declarations switching the font family (serif, sans, mono) until the group ends. |
| `\bfseries`, `\mdseries` | Declarations switching to bold or back to medium weight. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Declarations switching shape: italic, slanted, small caps, upright. |
| `\normalfont` | Declaration resetting family, series, and shape to the defaults. |
| `\em` | Declaration form of `\emph`: `{\em like this}`. |
| `\tiny` | Smallest of the ten size commands. |
| `\scriptsize` | Second smallest size, roughly subscript sized. |
| `\footnotesize` | The size used for footnotes. |
| `\small` | Slightly smaller than normal. |
| `\normalsize` | The document's base size. |
| `\large`, `\Large`, `\LARGE` | One, two, and three steps larger than normal. |
| `\huge`, `\Huge` | The two largest standard sizes. |
| `\fontsize{14}{17}\selectfont` | Sets an arbitrary font size and baseline skip, then activates it. |
| `\selectfont` | Activates pending font attribute changes (NFSS). |
| `\textsuperscript{...}` | Raised small text, as in 1st or footnote-style markers. |
| `\textsubscript{...}` | Lowered small text in text mode. |
| `\familydefault` | Macro holding the default font family; renew it to change the whole document's font. |
| `\sfdefault` | Macro naming the sans-serif family; `\renewcommand{\familydefault}{\sfdefault}` makes the document sans. |
| `\setmainfont{...}` | Sets the main body font by name under XeLaTeX or LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Sets the sans-serif font by name under XeLaTeX or LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Sets the monospace font by name under XeLaTeX or LuaLaTeX (fontspec). |

## Color (xcolor)

| Command | What it does |
| --- | --- |
| `\textcolor{red}{...}` | Colors a piece of text. |
| `\color{blue}` | Declaration form: colors everything until the group ends. |
| `\definecolor{brand}{HTML}{2F6F4F}` | Defines a named color for later use. |
| `\pagecolor{gray!10}` | Sets the background color of the whole page. |
| `\rowcolor{gray!20}` | Colors one table row (xcolor with the `table` option, via colortbl). |
| `\cellcolor{gray!20}` | Colors one table cell (colortbl). |
| `\rowcolors{2}{gray!10}{white}` | Alternating row colors starting at a given row (xcolor `table` option). |

## Graphics (graphicx)

| Command | What it does |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Inserts an image file; key options: `width`, `height`, `scale`, `angle`, `trim`+`clip`, `page`. |
| `\graphicspath{{figures/}}` | Tells LaTeX which folders to search for image files. |
| `\rotatebox[origin=c]{90}{...}` | Rotates its contents by an angle. |
| `\scalebox{0.8}{...}` | Scales its contents by a factor. |
| `\resizebox{5cm}{!}{...}` | Resizes contents to a target width and/or height; `!` keeps the aspect ratio. |
| `\reflectbox{...}` | Mirrors its contents horizontally. |
| `\includepdf[pages=-]{paper.pdf}` | Inserts whole pages from another PDF (pdfpages). |

## Entering math mode

| Command | What it does |
| --- | --- |
| `$...$` | Inline math within a sentence. |
| `\(...\)` | LaTeX's official inline math delimiters, equivalent to `$...$`. |
| `\[...\]` | Unnumbered displayed equation on its own line. |
| `$$...$$` | Plain TeX display math; discouraged in LaTeX, use `\[...\]` instead. |
| `x^2`, `x_i` | `^` makes superscripts and `_` makes subscripts; brace multi-character scripts: `x^{10}`. |

## Math: Greek letters

All of these work only in math mode. Uppercase forms exist where the Greek capital differs from the Latin one.

| Command | What it does |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Greek letters alpha, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Greek letters epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Greek letters iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Greek letters xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Greek letters upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Uppercase Greek letters Gamma through Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Uppercase Greek letters Sigma through Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Variant forms of epsilon (the curly one most papers use), theta, and pi. |
| `\varrho` `\varsigma` `\varphi` | Variant forms of rho, sigma (word-final), and phi (open curly). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Italic uppercase Greek variants (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | The remaining italic uppercase Greek variants (amsmath). |

## Math: binary operators

| Command | What it does |
| --- | --- |
| `\pm`, `\mp` | Plus-minus and minus-plus signs. |
| `\times` | Multiplication cross, also used for dimensions like 3 x 3. |
| `\div` | Division (obelus) sign. |
| `\cdot` | Centered dot for multiplication. |
| `\ast`, `\star`, `\bullet`, `\circ` | Asterisk, star, bullet, and small-circle operators; `\circ` is also function composition. |
| `\oplus`, `\ominus` | Circled plus (direct sum, XOR) and circled minus. |
| `\otimes`, `\oslash`, `\odot` | Circled times (tensor product), circled slash, circled dot. |
| `\wedge`, `\vee` | Wedge (logical AND, exterior product) and vee (logical OR, join). |
| `\land`, `\lor` | Aliases of `\wedge` and `\vee` named for their logical reading. |
| `\cap`, `\cup` | Set intersection and union signs. |
| `\setminus` | Set difference backslash: `A \setminus B`. |
| `\uplus` | Union with a plus, for multiset or disjoint union. |
| `\sqcap`, `\sqcup` | Square cap and cup, meet and join in lattice theory. |
| `\amalg` | Amalgamation (upside-down product), used for coproducts. |
| `\dagger`, `\ddagger` | Dagger and double dagger as math operators, e.g. conjugate transpose `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Triangle operators, e.g. symmetric difference. |
| `\triangleleft`, `\triangleright` | Sideways triangles, e.g. normal subgroup relation. |

## Math: relations

| Command | What it does |
| --- | --- |
| `\leq`, `\le` | Less-than-or-equal sign (`\le` is the short alias). |
| `\geq`, `\ge` | Greater-than-or-equal sign (`\ge` is the short alias). |
| `\neq`, `\ne` | Not-equal sign (`\ne` is the short alias). |
| `\ll`, `\gg` | Much-less-than and much-greater-than signs. |
| `\approx` | Approximately-equal sign. |
| `\sim` | Tilde relation, read as 'is distributed as' or 'is similar to'. |
| `\simeq` | Asymptotically-equal sign (tilde over equals). |
| `\cong` | Congruent-to sign (tilde over two bars), used for isomorphism. |
| `\equiv` | Identical-to (triple bar) sign, also used for congruence. |
| `\propto` | Proportional-to sign. |
| `\asymp` | Asymptotically-equivalent relation (stacked curves). |
| `\doteq` | Equals sign with a dot, read as 'approaches' or 'is defined as'. |
| `\prec`, `\succ` | Precedes and succeeds relations, curved orderings. |
| `\preceq`, `\succeq` | Precedes-or-equals and succeeds-or-equals. |
| `\subset`, `\subseteq` | Proper subset and subset-or-equal signs. |
| `\supset`, `\supseteq` | Proper superset and superset-or-equal signs. |
| `\sqsubseteq`, `\sqsupseteq` | Square subset and superset relations, used for information order. |
| `\in`, `\notin` | Set membership and its negation: `x \in A`. |
| `\ni` | Reversed membership: the set contains the element. |
| `\vdash`, `\dashv` | Turnstile 'proves' and its reverse. |
| `\models` | Double turnstile, semantic entailment. |
| `\perp` | Perpendicular / independence relation. |
| `\parallel` | Parallel bars relation. |
| `\mid` | Vertical bar with relation spacing, as in set-builder notation or 'divides'. |
| `\not` | Negates the following relation by overprinting a slash: `\not\subset`. |

## Math: arrows

| Command | What it does |
| --- | --- |
| `\to`, `\rightarrow` | Right arrow, as in function types `f: A \to B` and limits `x \to 0`. |
| `\gets`, `\leftarrow` | Left arrow, also used for assignment in pseudocode. |
| `\leftrightarrow` | Two-headed single arrow. |
| `\Rightarrow` | Double right arrow, read as 'implies'. |
| `\Leftarrow` | Double left arrow, read as 'is implied by'. |
| `\Leftrightarrow` | Double two-headed arrow, read as 'if and only if'. |
| `\implies`, `\impliedby` | Spaced-out `\Rightarrow` and `\Leftarrow` for logic (amsmath). |
| `\iff` | Spaced-out `\Leftrightarrow` for 'if and only if'. |
| `\mapsto` | Maps-to arrow with a bar tail: `x \mapsto x^2`. |
| `\longmapsto` | Long version of `\mapsto`. |
| `\hookrightarrow` | Right arrow with a hook tail, for inclusions/embeddings. |
| `\rightharpoonup` | Right harpoon (half-arrow), used for weak convergence. |
| `\rightleftharpoons` | Paired opposing harpoons, as in chemical equilibrium. |
| `\leadsto` | Squiggly right arrow, 'leads to' (amssymb). |
| `\uparrow`, `\downarrow` | Upward and downward arrows. |
| `\updownarrow` | Double-headed vertical arrow. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Double-lined vertical arrows. |
| `\nearrow`, `\searrow` | Diagonal arrows northeast and southeast, e.g. increasing/decreasing to a limit. |
| `\swarrow`, `\nwarrow` | Diagonal arrows southwest and northwest. |
| `\longrightarrow`, `\longleftarrow` | Long single arrows. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Long double arrows. |
| `\xrightarrow{f}` | Extensible right arrow with a label on top, growing to fit (amsmath). |
| `\xleftarrow{f}` | Extensible left arrow with a label on top (amsmath). |

## Math: big operators

| Command | What it does |
| --- | --- |
| `\sum_{i=1}^{n}` | Summation sign with limits. |
| `\prod_{i=1}^{n}` | Product sign with limits. |
| `\coprod` | Coproduct (upside-down product) sign. |
| `\int_0^1` | Integral sign with bounds. |
| `\iint` | Double integral sign (amsmath). |
| `\iiint` | Triple integral sign (amsmath). |
| `\oint` | Contour (closed loop) integral sign. |
| `\bigcap`, `\bigcup` | Big intersection and union over a family of sets. |
| `\bigsqcup` | Big square-cup (disjoint union). |
| `\bigvee`, `\bigwedge` | Big OR and big AND over an index set. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Big circled plus, times, and dot for indexed sums and products of structures. |
| `\biguplus` | Big union-with-plus over an index set. |
| `\limits` | Forces the following operator's sub/superscripts above and below: `\int\limits_0^1`. |
| `\nolimits` | Forces sub/superscripts to the side instead of above and below. |

## Math: delimiters and sizing

| Command | What it does |
| --- | --- |
| `\left( ... \right)` | Auto-sized delimiter pair that grows to fit its contents. |
| `\left.` and `\right.` | Invisible partner when only one side of a sized pair is wanted, as in evaluation bars. |
| `\middle|` | Auto-sized middle delimiter between `\left` and `\right` (as in conditional probability). |
| `\big( \Big( \bigg( \Bigg(` | Manually sized delimiters, from slightly big to very big. |
| `\bigl(...\bigr)` | Sized delimiters with correct open/close spacing (also `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Floor brackets. |
| `\lceil`, `\rceil` | Ceiling brackets. |
| `\langle`, `\rangle` | Left and right angle bracket delimiters. |
| `\|` | Double vertical bar delimiter (norm bars). |
| `\lvert`, `\rvert` | Absolute-value bars with correct delimiter spacing (amsmath). |
| `\lVert`, `\rVert` | Double bars for norms, with correct delimiter spacing (amsmath). |
| `\backslash` | Backslash as a math symbol or delimiter. |

## Math: accents and decorations

| Command | What it does |
| --- | --- |
| `\hat{x}` | Small hat accent over one symbol. |
| `\check{x}` | Caron (inverted hat) accent. |
| `\breve{x}` | Breve (rounded) accent. |
| `\acute{x}`, `\grave{x}` | Acute and grave accents in math. |
| `\tilde{x}` | Tilde accent over one symbol. |
| `\bar{x}` | Short bar over one symbol. |
| `\vec{v}` | Small arrow over one symbol. |
| `\dot{x}`, `\ddot{x}` | One or two dots over a symbol, common for time derivatives. |
| `\dddot{x}` | Three dots over a symbol (amsmath). |
| `\mathring{x}` | Ring accent over a symbol. |
| `\widehat{abc}` | Wide hat that stretches over several symbols. |
| `\widetilde{abc}` | Wide tilde that stretches over several symbols. |
| `\overrightarrow{AB}` | Stretching right arrow over an expression, as in vectors from A to B. |
| `\overleftarrow{AB}` | Stretching left arrow over an expression. |
| `\overline{x + y}` | Line over a whole expression. |
| `\underline{x + y}` | Line under a whole expression (also works in text). |
| `\overbrace{...}^{n}` | Horizontal brace above an expression, with an optional label on top. |
| `\underbrace{...}_{n}` | Horizontal brace below an expression, with an optional label underneath. |
| `\overset{!}{=}` | Places a symbol above another, e.g. 'must equal' (amsmath). |
| `\underset{i}{\max}` | Places a symbol below another (amsmath). |
| `\stackrel{\text{def}}{=}` | Older kernel command stacking a symbol over a relation. |
| `\boldsymbol{\beta}` | Bold math that also bolds Greek letters and symbols (amsmath). |
| `\prime` | Prime symbol; `x'` is the usual shorthand for `x^{\prime}`. |

## Math: log-like operators

All typeset upright with correct spacing; the limit-taking ones put subscripts below in display math.

| Command | What it does |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | The basic trigonometric functions. |
| `\sec`, `\csc` | Secant and cosecant. |
| `\arcsin`, `\arccos`, `\arctan` | Inverse trigonometric functions. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Hyperbolic functions. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponential and logarithms (`\lg` is log base 2 or 10 by convention). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinant, dimension, kernel, degree. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Greatest common divisor, hom-sets, complex argument, probability. |
| `\lim_{x \to 0}` | Limit operator, upright with the subscript below in display math. |
| `\limsup`, `\liminf` | Limit superior and inferior. |
| `\inf`, `\sup` | Infimum and supremum operators, typeset upright. |
| `\min`, `\max` | Minimum and maximum operators, typeset upright with limits below in display math. |
| `\bmod` | Binary mod operator with operator spacing: `a \bmod n`. |
| `\pmod{n}` | Parenthesized trailing '(mod n)'. |
| `\mod{n}` | Trailing 'mod n' without parentheses (amsmath). |
| `\operatorname{lcm}` | One-off upright operator name without a preamble declaration (amsmath). |
| `\operatorname*{ess\,sup}` | One-off operator that takes limits below (amsmath). |

## Math: fractions, binomials, and stacking

| Command | What it does |
| --- | --- |
| `\frac{a}{b}` | Stacked fraction: numerator over denominator. |
| `\dfrac{a}{b}` | Fraction forced to full display size, even inline (amsmath). |
| `\tfrac{a}{b}` | Fraction forced to small inline size, even in display math (amsmath). |
| `\cfrac{a}{b}` | Continued fraction with full-size nested levels (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Square root; the optional argument gives an nth root. |
| `\binom{n}{k}` | Binomial coefficient in parentheses (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Display-size and text-size forced binomials (amsmath). |
| `{n \choose k}` | Plain TeX binomial primitive; discouraged in LaTeX, use `\binom`. |
| `{a \over b}` | Plain TeX fraction primitive; discouraged in LaTeX, use `\frac`. |
| `{a \atop b}` | Plain TeX stacking primitive without a bar; discouraged, use `\substack` or `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | General fraction builder behind `\frac`, `\binom`, and friends (amsmath). |
| `\substack{i < n \\ j < m}` | Multi-line subscript under a big operator (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Attaches indices to all four corners of a big operator (amsmath). |
| `\prescript{a}{b}{X}` | Left-hand super/subscripts, as in isotope notation (mathtools). |

## Math: spacing and styles

| Command | What it does |
| --- | --- |
| `\,` | Thin math space, as between a number and its unit. |
| `\:` | Medium math space. |
| `\;` | Thick math space. |
| `\!` | Negative thin space, pulling symbols closer. |
| `\quad`, `\qquad` | One-em and two-em spaces, in math or text. |
| `\displaystyle` | Forces full display-math sizing, e.g. big limits inside inline math. |
| `\textstyle` | Forces inline-math sizing inside display math. |
| `\scriptstyle`, `\scriptscriptstyle` | Force subscript and sub-subscript sizing. |

## Math: letters, alphabets, and misc symbols

| Command | What it does |
| --- | --- |
| `\mathbb{R}` | Blackboard bold letters for number sets (amssymb). |
| `\mathbf{x}` | Bold upright letters in math, common for vectors and matrices. |
| `\mathcal{L}` | Calligraphic capital letters, e.g. a loss or Lagrangian. |
| `\mathfrak{g}` | Fraktur letters, used in algebra and logic. |
| `\mathscr{F}` | Script capital letters, curlier than `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Upright (roman) letters in math, for units and multi-letter names. |
| `\mathit{diff}` | Italic multi-letter identifier with word-like spacing. |
| `\mathsf{T}`, `\mathtt{x}` | Sans-serif and typewriter letters in math. |
| `\bm{\beta}` | Bold math symbols, an alternative to `\boldsymbol` (bm package). |
| `\text{if } x > 0` | Normal upright text inside math with proper spacing (amsmath). |
| `\infty` | Infinity sign. |
| `\partial` | Partial derivative (curly d) sign. |
| `\nabla` | Nabla (del) operator for gradients and divergence. |
| `\hbar` | Reduced Planck constant, h with a bar. |
| `\ell` | Script lowercase l, used to avoid confusion with the digit 1. |
| `\wp` | Weierstrass p. |
| `\Re`, `\Im` | Real and imaginary part symbols (Fraktur R and I). |
| `\aleph` | Aleph, for infinite cardinals. |
| `\emptyset` | Empty set sign. |
| `\varnothing` | Rounder empty-set variant many authors prefer (amssymb). |
| `\angle` | Angle symbol. |
| `\measuredangle` | Measured-angle symbol with an arc (amssymb). |
| `\triangle` | Triangle symbol. |
| `\square`, `\blacksquare` | Open and filled squares; the filled one often ends proofs (amssymb). |
| `\diamond`, `\lozenge` | Small diamond operator; lozenge symbol (amssymb for the latter). |
| `\top`, `\bot` | Top (true) and bottom (false/undefined) symbols. |
| `\forall`, `\exists` | Universal ('for all') and existential ('there exists') quantifiers. |
| `\nexists` | Negated existential quantifier (amssymb). |
| `\neg` | Logical NOT sign. |
| `\therefore`, `\because` | Three-dot 'therefore' and 'because' signs (amssymb). |
| `\flat`, `\natural`, `\sharp` | Musical accidentals, also used in math notation. |
| `\surd` | Bare radical symbol without an argument. |
| `\checkmark` | Check mark (amssymb). |
| `\cdots` | Centered dots, between operators: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Vertical and diagonal dots, mostly in matrices. |
| `\dotsb`, `\dotsc` | Semantic dots: between binary operators, and between commas (amsmath). |

## amsmath and mathtools display tools

| Command | What it does |
| --- | --- |
| `\tag{...}` | Replaces the automatic equation number with your own label (amsmath). |
| `\tag*{...}` | Like `\tag` but without the surrounding parentheses (amsmath). |
| `\notag` | Suppresses the equation number on one line of a numbered environment (amsmath). |
| `\nonumber` | Older synonym of `\notag`. |
| `\numberwithin{equation}{section}` | Numbers equations per section: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Interrupts an align block with a full-width line of text, keeping alignment (amsmath). |
| `\shortintertext{...}` | Like `\intertext` with less vertical space (mathtools). |
| `\allowdisplaybreaks` | Lets multi-line displays break across pages (amsmath). |
| `\displaybreak` | Requests a page break at this point of a display (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Lets wide operator limits overhang so they do not push content apart (mathtools). |
| `\mathclap{...}` | Zero-width math content, for wide under/overscripts (mathtools). |
| `\coloneqq` | Colon-equals definition sign := with correct spacing (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Defines a delimiter macro with a starred auto-sizing form (mathtools). |
| `\eqref{eq:loss}` | Prints an equation number with its parentheses (amsmath). |
| `\qedhere` | Moves the end-of-proof square onto the current line, e.g. after a displayed equation (amsthm). |

## Math environments

| Environment | What it does |
| --- | --- |
| `equation` | One displayed, numbered equation. |
| `equation*` | One displayed, unnumbered equation (amsmath). |
| `align` | Multiple displayed equations aligned at `&` marks, each numbered (amsmath). |
| `align*` | Aligned equations without numbers (amsmath). |
| `gather` | Multiple centered equations without alignment, each numbered (amsmath). |
| `alignat` | Aligned equations with manually controlled spacing between columns (amsmath). |
| `flalign` | Aligned equations pushed to the left and right margins (amsmath). |
| `split` | Splits one long equation across aligned lines under a single number, inside `equation` (amsmath). |
| `multline` | One long equation broken across lines: first line left, last line right (amsmath). |
| `aligned`, `gathered` | Building-block versions of align/gather usable inside another display (amsmath). |
| `subequations` | Numbers the equations inside as 1a, 1b, 1c (amsmath). |
| `cases` | Brace-grouped case distinctions, as in piecewise functions (amsmath). |
| `dcases` | `cases` with display-style entries so fractions stay full size (mathtools). |
| `matrix` | Bare matrix with no delimiters (amsmath). |
| `pmatrix` | Matrix wrapped in parentheses (amsmath). |
| `bmatrix` | Matrix wrapped in square brackets (amsmath). |
| `Bmatrix` | Matrix wrapped in curly braces (amsmath). |
| `vmatrix` | Matrix wrapped in vertical bars, standard determinant notation (amsmath). |
| `Vmatrix` | Matrix wrapped in double bars (amsmath). |
| `smallmatrix` | Compact matrix sized for inline use (amsmath). |
| `array` | Math-mode grid with per-column alignment, the math cousin of `tabular`. |
| `eqnarray` | Old three-column equation environment; discouraged, its spacing is wrong, use `align`. |

## Cross-referencing and links

| Command | What it does |
| --- | --- |
| `\label{fig:setup}` | Names a spot (equation, figure, section) so you can refer to it. |
| `\ref{fig:setup}` | Prints the number of a labeled item. |
| `\pageref{fig:setup}` | Prints the page number where the label lives. |
| `\cref{fig:setup}` | Prints the number AND its type name automatically: 'fig. 1' (cleveref). |
| `\Cref{fig:setup}` | Capitalized `\cref` for the start of a sentence: 'Figure 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Prints a range: 'eqs. 1 to 4' (cleveref). |
| `\labelcref{fig:setup}` | Prints just the label number in cleveref style, without the type name (cleveref). |
| `\vref{fig:setup}` | Reference plus an automatic 'on the next page' phrase when needed (varioref). |
| `\autoref{fig:setup}` | hyperref's typed reference: 'Figure 1', with the whole phrase linked. |
| `\nameref{sec:intro}` | Prints the title text of the referenced section (hyperref). |
| `\href{https://example.com}{link text}` | Makes a clickable link with custom text (hyperref). |
| `\url{https://example.com}` | Typesets a URL in typewriter type and makes it clickable. |
| `\hyperref[sec:intro]{that section}` | Makes arbitrary text link to a label (hyperref). |
| `\hypertarget{spot}{...}` | Creates a named link target anywhere in the document (hyperref). |
| `\hyperlink{spot}{text}` | Links to a `\hypertarget` (hyperref). |
| `\phantomsection` | Creates an anchor so links to unnumbered headings land in the right place (hyperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Gives a plain-text alternative for math in headings so PDF bookmarks stay valid (hyperref). |
| `\pdfbookmark[1]{Title}{name}` | Adds a manual PDF bookmark entry (hyperref). |

## Citations and bibliography

| Command | What it does |
| --- | --- |
| `\cite{knuth1984}` | Cites a bibliography entry by key. |
| `\nocite{key}` | Adds an entry to the bibliography without citing it in the text; `\nocite{*}` adds everything. |
| `\citep{knuth1984}` | Parenthetical citation '(Knuth, 1984)' in natbib author-year style. |
| `\citet{knuth1984}` | Textual citation 'Knuth (1984)' in natbib author-year style. |
| `\citeauthor{knuth1984}` | Prints just the author names (natbib and biblatex). |
| `\citeyear{knuth1984}` | Prints just the year (natbib and biblatex). |
| `\citealp{knuth1984}` | natbib parenthetical citation without the parentheses, for building your own. |
| `\citealt{knuth1984}` | natbib textual citation without parentheses around the year. |
| `\parencite{knuth1984}` | biblatex's parenthetical citation, the analogue of `\citep`. |
| `\textcite{knuth1984}` | biblatex's textual citation, the analogue of `\citet`. |
| `\autocite{knuth1984}` | biblatex citation that follows the style's preferred form (parenthetical, footnote, etc.). |
| `\footcite{knuth1984}` | biblatex citation placed in a footnote. |
| `\fullcite{knuth1984}` | Prints the entry's full bibliography text inline (biblatex). |
| `\citetitle{knuth1984}` | Prints the work's title (biblatex). |
| `\bibliography{refs}` | BibTeX: prints the reference list from a .bib file. |
| `\bibliographystyle{plainnat}` | BibTeX: picks the reference format; classic styles include plain, unsrt, alpha, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: registers a .bib file in the preamble. |
| `\printbibliography` | biblatex: prints the reference list where you place it. |
| `\bibitem{key}` | One hand-written entry inside a `thebibliography` environment. |
| `thebibliography` (environment) | Hand-written reference list used when you skip BibTeX entirely. |

## Floats, figures, and tables

| Command or environment | What it does |
| --- | --- |
| `figure` (environment) | Floating container for an image plus caption; LaTeX picks the final position. |
| `figure*` (environment) | Figure spanning both columns in a two-column document. |
| `table` (environment) | Floating container for a tabular plus caption; LaTeX picks the final position. |
| `table*` (environment) | Table spanning both columns in a two-column document. |
| `\begin{figure}[htbp]` | Placement hints: here, top, bottom, own page; `!` relaxes rules, `[H]` (float package) means exactly here. |
| `tabular` (environment) | The actual grid of rows and columns: cells split by `&`, rows end with `\\`. |
| `tabular*` (environment) | Tabular stretched to a specified total width. |
| `tabularx` (environment) | Fixed-width table whose `X` columns share the leftover space (tabularx). |
| `array` (environment) | Math-mode grid with per-column alignment. |
| `longtable` (environment) | Table that can break across pages, with repeating headers (longtable). |
| `minipage` (environment) | Fixed-width mini page inside the page, used to place content side by side. |
| `subfigure` (environment) | One sub-panel with its own caption, like (a) and (b), inside a figure (subcaption). |
| `wrapfigure` (environment) | Figure with body text wrapping around it (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (environments) | Floats rotated 90 degrees onto their own page (rotating). |
| `landscape` (environment) | Rotates whole pages to landscape, with the PDF page auto-rotated (pdflscape). |
| `threeparttable` (environment) | Wraps a table so footnotes align with the table width (threeparttable). |
| `tablenotes` (environment) | The notes list under a threeparttable, marked with `\tnote{a}`. |
| `adjustbox` (environment and `\adjustbox`) | Scales, resizes, or crops any content with key-value options (adjustbox). |
| `\caption{...}` | Adds a numbered caption to a figure or table; put `\label` after it. |
| `\caption*{...}` | Caption without a number or list entry (caption package). |
| `\captionsetup{...}` | Configures caption fonts, labels, and spacing (caption package). |
| `\toprule` | Heavy rule at the top of a booktabs table. |
| `\midrule` | Medium rule between a booktabs table's header and body. |
| `\bottomrule` | Heavy rule at the bottom of a booktabs table. |
| `\cmidrule(lr){2-3}` | Partial rule spanning selected columns (booktabs). |
| `\addlinespace` | Small extra vertical space between booktabs rows, instead of a rule. |
| `\hline` | Full-width horizontal line in a plain tabular; booktabs rules usually look better. |
| `\cline{2-3}` | Horizontal line spanning selected columns in a plain tabular. |
| `\vline` | Vertical line at this point of a table row; column `|` specifiers are the usual way. |
| `\multicolumn{2}{c}{Header}` | Merges cells across columns in one row. |
| `\multirow{2}{*}{Label}` | Merges cells vertically across rows (multirow). |
| `\arraystretch` | Factor for table row height; set with `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Length of the padding on each side of a tabular column. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Defines a reusable column specifier (array package). |
| `\endfirsthead` | longtable: marks the end of the header shown on the first page only. |
| `\endhead` | longtable: marks the end of the header repeated on every following page. |
| `\endfoot` | longtable: marks the end of the footer shown at each page break. |
| `\endlastfoot` | longtable: marks the end of the footer shown only at the very end. |
| `\FloatBarrier` | Stops floats drifting past this point (placeins). |

## Footnotes

| Command | What it does |
| --- | --- |
| `\footnote{...}` | Puts a note at the bottom of the page, marked with an automatic number. |
| `\footnotemark` | Prints just the footnote marker, for places where `\footnote` is not allowed. |
| `\footnotetext{...}` | Supplies the text for an earlier `\footnotemark`. |

## Theorems and proofs

| Command or environment | What it does |
| --- | --- |
| `\newtheorem{lemma}{Lemma}` | Declares a theorem-like environment (amsthm). |
| `\newtheorem*{remark}{Remark}` | Declares an unnumbered theorem-like environment (amsthm). |
| `\theoremstyle{definition}` | Sets the look (plain, definition, remark) for following `\newtheorem` declarations (amsthm). |
| `theorem` (environment) | Numbered theorem block, created by `\newtheorem{theorem}{Theorem}`. |
| `proof` (environment) | Proof block that prints 'Proof.' and ends with the QED square (amsthm). |

## Verbatim, code, and listings

| Command or environment | What it does |
| --- | --- |
| `\verb|code|` | Inline verbatim: prints exactly what you type, delimited by any repeated character. |
| `verbatim` (environment) | Block of text printed exactly as typed, in typewriter font. |
| `\verbatiminput{file.txt}` | Prints a whole file verbatim (verbatim package). |
| `lstlisting` (environment) | Source code listing with optional syntax highlighting (listings). |
| `\lstinline|code|` | Inline code snippet in listings style (listings). |
| `\lstset{language=Python}` | Configures listings defaults: language, numbering, colors (listings). |
| `\lstinputlisting{script.py}` | Typesets a whole source file as a listing (listings). |
| `minted` (environment) | Pygments-powered highlighted code blocks; needs `-shell-escape` at compile time (minted). |
| `\mintinline{python}|code|` | Inline highlighted code (minted). |

## Beamer (slides)

| Command or environment | What it does |
| --- | --- |
| `frame` (environment) | One Beamer slide: `\begin{frame}{Slide title} ... \end{frame}`. |
| `\frame{...}` | Beamer's one-command slide form; the `frame` environment is the usual way. |
| `\frametitle{...}` | Sets the slide title from inside a frame. |
| `\framesubtitle{...}` | Sets a smaller subtitle under the frame title. |
| `\titlepage` | Beamer: inside a frame, prints the title slide from your title metadata. |
| `\tableofcontents[currentsection]` | Outline slide highlighting the section you are in. |
| `\pause` | Beamer: reveals the rest of the frame on the next slide step. |
| `\onslide<2->` | Content appears from a given overlay step onward. |
| `\only<2>{...}` | Content exists only on the given steps and takes no space elsewhere. |
| `\uncover<2->{...}` | Content is invisible before its step but always reserves its space. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Show or hide content on given steps without changing layout. |
| `\alert{...}` | Highlights text in the theme's alert color, usually red. |
| `block` (environment) | Titled box in the theme's standard color. |
| `alertblock` (environment) | Titled box in the alert color, for warnings or key points. |
| `exampleblock` (environment) | Titled box in the example color, usually green. |
| `columns` (environment) and `\column{0.5\textwidth}` | Side-by-side layout regions on a slide. |
| `\usetheme{Madrid}` | Beamer: picks the presentation theme in the preamble. |
| `\usecolortheme{seahorse}` | Swaps only the color palette of the theme. |
| `\usefonttheme{serif}` | Swaps only the font choices of the theme. |
| `\setbeamertemplate{navigation symbols}{}` | Overrides one theme element, here removing the navigation icons. |
| `\setbeamercolor{title}{fg=black}` | Overrides one theme color. |
| `\note{...}` | Speaker notes attached to a frame, shown only in notes output. |

## TikZ and diagrams

| Command or environment | What it does |
| --- | --- |
| `tikzpicture` (environment) | Canvas for TikZ drawings; all `\draw` and `\node` commands go inside it. |
| `\tikz` | One-shot inline picture: `\tikz \draw (0,0) circle (2pt);`. |
| `\draw (0,0) -- (1,1);` | TikZ path command that draws lines and shapes; options like `[thick, red, ->]` style it. |
| `\fill` | TikZ path command that fills a shape instead of stroking it. |
| `\filldraw` | TikZ path command that both fills and outlines a shape. |
| `\shade` | TikZ path command that fills with a gradient. |
| `\clip` | TikZ path that restricts all later drawing to its interior. |
| `\path` | TikZ path that computes coordinates without drawing, e.g. for placing nodes. |
| `\node at (0,0) {label};` | TikZ command that places text or shapes at coordinates. |
| `\coordinate (a) at (1,2);` | Names a point for reuse in later paths. |
| `\foreach \i in {1,...,5}` | Loop that repeats drawing code over a list (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | Defines reusable TikZ styles the modern way. |
| `\tikzstyle` | Old style-definition syntax; deprecated, use `\tikzset`. |
| `\usetikzlibrary{positioning}` | Loads extra TikZ features in the preamble. |
| `\matrix` (TikZ) | Grid-aligned arrangement of nodes inside a tikzpicture. |
| `tikzcd` (environment) | Grid for commutative diagrams; cells split by `&` (tikz-cd). |
| `\arrow[r, "f"]` | Draws an arrow between cells in a tikz-cd commutative diagram. |

## Units (siunitx)

| Command | What it does |
| --- | --- |
| `\num{12345.678}` | Formats a number with proper digit grouping and decimal markers. |
| `\qty{9.8}{\metre\per\second\squared}` | Number with unit, correctly spaced (siunitx v3 name). |
| `\unit{\kilo\gram}` | Unit alone (siunitx v3 name). |
| `\SI{9.8}{\metre\per\second\squared}` | v2 name of `\qty`; still widely seen in papers. |
| `\si{\kilo\gram}` | v2 name of `\unit`. |
| `\sisetup{...}` | Global siunitx configuration. |
| `\DeclareSIUnit{\parsec}{pc}` | Defines a custom unit (siunitx). |

## Glossaries and acronyms

| Command | What it does |
| --- | --- |
| `\gls{svm}` | Prints a glossary or acronym entry, expanding it on first use (glossaries). |
| `\Gls{svm}` | Capitalized form for sentence starts (glossaries). |
| `\glspl{svm}` | Plural form of the entry (glossaries). |
| `\newglossaryentry{tree}{name=tree, description={...}}` | Declares a glossary term (glossaries). |
| `\newacronym{svm}{SVM}{support vector machine}` | Declares an acronym with short and long forms (glossaries). |
| `\acrshort{svm}`, `\acrlong{svm}` | Force the short or long form regardless of first use (glossaries). |
| `\makeglossaries` | Preamble command that activates glossary/acronym processing (glossaries). |
| `\printglossary` | Prints one glossary list where you place it (glossaries). |
| `\printglossaries` | Prints the glossary and acronym lists where you place it (glossaries). |

## Algorithms and pseudocode

Keyword commands are from algpseudocode (algorithmicx); the `algorithm` float wraps them.

| Command or environment | What it does |
| --- | --- |
| `algorithm` (environment) | Floating container for pseudocode, with a caption and number (algorithm). |
| `algorithmic` (environment) | The pseudocode body itself, holding the keyword commands (algpseudocode). |
| `\State` | One statement line of pseudocode. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Conditional block keywords. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Loop keywords over a range or a set. |
| `\While{...}`, `\EndWhile` | While-loop keywords. |
| `\Function{Name}{args}`, `\EndFunction` | Function definition block. |
| `\Procedure{Name}{args}`, `\EndProcedure` | Procedure definition block. |
| `\Return` | The return keyword. |
| `\Comment{...}` | Right-aligned comment on a pseudocode line. |
| `\Require`, `\Ensure` | Preconditions and postconditions lines at the top of an algorithm. |

## Language, quoting, and editorial packages

| Command | What it does |
| --- | --- |
| `\selectlanguage{german}` | Switches the active language: hyphenation, captions, dates (babel). |
| `\foreignlanguage{french}{...}` | Typesets a short passage under another language's rules (babel). |
| `\enquote{...}` | Context-aware quotation marks that nest and localize correctly (csquotes). |
| `\todo{Fix this}` | Margin note flagging work to do (todonotes). |
| `\listoftodos` | Prints a list of all todo notes (todonotes). |
| `\missingfigure{...}` | Placeholder box for a figure you have not made yet (todonotes). |
| `\xspace` | At the end of a macro, adds a space unless punctuation follows (xspace). |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Patches an existing macro's definition in place (etoolbox). |
| `\apptocmd`, `\pretocmd` | Append or prepend code to an existing macro (etoolbox). |
| `\newtoggle{draft}`, `\toggletrue{draft}`, `\iftoggle{draft}{...}{...}` | Lightweight boolean flags (etoolbox). |

## Layout and typography packages in one line

| Package or command | What it does |
| --- | --- |
| `\setstretch{1.25}` | Sets an exact line-spacing factor (setspace). |
| `\doublespacing` | Switches to double line spacing (setspace). |
| `\onehalfspacing` | Switches to one-and-a-half line spacing (setspace). |
| `\singlespacing` | Switches back to single line spacing (setspace). |
| `spacing` (environment) | Sets a custom line-spacing factor for its contents (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Redesigns how a sectioning heading looks (titlesec). |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` | Adjusts the space around a heading (titlesec). |
| `\setlist[itemize]{noitemsep}` | Configures list spacing and labels globally or per level (enumitem). |
| `parskip` (package) | Switches the document to block paragraphs: space between, no indent. |
| `microtype` (package) | Subtle protrusion and expansion that improves justification; just load it. |
| `multicols` (environment) | Balanced multi-column text without the twocolumn class option (multicol). |

## Chemistry, physics, and domain notation

| Command | What it does |
| --- | --- |
| `\ce{H2O}` | Typesets a chemical formula or reaction (mhchem). |
| `\chemfig{...}` | Draws a chemical structure diagram (chemfig). |
| `\braket{\phi|\psi}` | Typesets Dirac bra-ket notation with auto-sized bars (braket). |

## Publisher class commands

| Command or environment | What it does |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formats an author name block in the IEEE conference title area. |
| `\IEEEauthorblockA{...}` | IEEEtran: formats an author affiliation block in the IEEE conference title area. |
| `\ccsdesc[500]{...}` | acmart: declares one ACM CCS concept for the paper's classification. |
| `CCSXML` (environment) | acmart: holds the machine-readable ACM CCS concepts XML from the ACM classification tool. |
| `\University{...}` | Class-specific metadata command seen in thesis templates, not standard LaTeX. |

## Environments in general

An environment is a region opened with `\begin{name}` and closed with `\end{name}`; everything between the two gets that environment's behavior. The full story is in [commands vs environments](/learn/commands-environments/). The general-purpose ones:

| Environment | What it does |
| --- | --- |
| `document` | The body of every document lives between `\begin{document}` and `\end{document}`. |
| `abstract` | Prints the paper's abstract with the class's standard heading and layout. |
| `titlepage` | Wraps a hand-made full title page; the page is unnumbered. |
| `center` | Centers its contents horizontally. |
| `flushleft` | Left-aligns its contents, ragged right. |
| `flushright` | Right-aligns its contents, ragged left. |
| `itemize` | Bulleted list; each entry starts with `\item`. |
| `enumerate` | Numbered list; each entry starts with `\item`. |
| `description` | Labeled list; entries start with `\item[Label]`. |
| `\item` | Starts one entry inside itemize, enumerate, or description lists. |
| `quote` | Indented block for short quotations, no paragraph indent. |
| `quotation` | Indented block for longer quotations, with paragraph indents. |
| `verse` | Indented block for poetry, where `\\` ends each verse line. |
| `sloppypar` | Paragraphs typeset with relaxed line-breaking, the environment form of `\sloppy`. |
| `list` | The general list builder that itemize and friends are defined from. |
| `trivlist` | Bare-bones list with no labels or margins, used inside macro definitions. |
| `filecontents` | Writes its body out to a file at compile time, e.g. to ship a .bib inside the .tex. |
| `appendices` | Wraps the appendix chapters, enabling `\appendixpage` and per-appendix tools (appendix package). |

## Where to go next

This page is the dictionary. The lessons are the grammar. For a paste-ready one-pager, keep [the cheatsheet](/learn/cheatsheet/) open. For the difference between `\command{...}` and `\begin{...}` blocks, read [commands vs environments](/learn/commands-environments/). For a symbol you can picture but cannot name, use [math symbols](/learn/math-symbols-cheatsheet/). To see what any math-mode command looks like, paste it into [the live preview](/live/) and watch it render.
