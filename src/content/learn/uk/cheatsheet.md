---

title: "Короткий довідник LaTeX"
description: "Щільна односторінкова картка для скелета, тексту, математики, плаваючих елементів, посилань, макета, механізмів, TikZ, Beamer і типових помилок журналу."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX короткий довідник

Зберігайте це поруч із редактором. Кожен ряд готовий до пасти. Для більш довгих уроків відкрийте відповідний трек на [Learn](/learn/).

**Стрибок:**
[Скелет](#document-skeleton) ·
[Преамбула](#preamble-patterns) ·
[Текст](#text-and-formatting) ·
[Розділи](#sectioning-and-structure) ·
[Посилання](#cross-references-and-links) ·
[Математика](#math-mode) ·
[Таблиці](#таблиці) ·
[Фігури](#figures-and-floats) ·
[Cites](#citations-and-bibliography) ·
[Макет](#layout) ·
[Двигуни](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Теореми](#теореми) ·
[Поля](#field-bits) ·
[Компіляція](#compile-loop) ·
[Помилки](#log-errors-decode-the-first-one) ·
[Замовлення пакета](#package-load-order-rules-of-thumb)

## Скелет документа

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

| Клас | Типове використання |
| --- | --- |
| `стаття` | Реферати, конспекти, домашні завдання |
| `звіт` | Довші звіти з розділами |
| `книга` | Книги / багато тез |
| `промінь` | Слайди |
| Університет `.cls` | Шаблони дипломних робіт |

| Файл | Роль |
| --- | --- |
| `.tex` | Джерело |
| `.bib` | Бібліографічна база |
| `.cls` / `.sty` | Клас / пакет |
| `.aux` `.log` `.toc` | Сформований; не редагувати |

## Шаблони преамбули

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

Завантажити `hyperref` із запізненням. Завантажте `cleveref` після `hyperref`.

## Текст і форматування

| Хочу | Тип |
| --- | --- |
| Жирний / курсив / моно | `\textbf{}` `\textit{}` `\texttt{}` |
| Упор (гнізда) | `\emph{}` |
| Малі великі | `\textsc{}` |
| Підкреслення (рідко) | `\підкреслити{}` |
| Розміри | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Новий абзац | порожній рядок |
| Розрив рядка | `\\` або `\новий рядок` |
| Нерозривний простір | `~` |
| Горизонтальний простір | `\quad` `\qquad` `\hspace{1em}` |
| Вертикальний простір | `\vspace{1em}` `\bigskip` |
| По центру / врівень | середовища `center` / `flushright` |
| Цитата | `quote` або `quotation` |
| Виноска | `\виноска{...}` |
| Коментар | `% решта рядка` |

### Ескейп спеціальні (текстовий режим)

| Символ | Код | Символ | Код |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Списки

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

Спеціальна мітка: `\item[(a)] ...`

### Номери та розриви сторінок

| Хочу | Тип |
| --- | --- |
| Стиль | `\pagestyle{plain}` / `empty` / `fancy` |
| Лише ця сторінка | `\thispagestyle{empty}` |
| римська / арабська | `\pagenumbering{roman}` потім `arabic` |
| Нова сторінка | `\нова сторінка` `\clearpage` |
| Запит на м'яку перерву | `\pagebreak[3]` |
| Тримати разом | `\nopagebreak` |

## Розділ і структура

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

| Хочу | Тип |
| --- | --- |
| Зміст | `\зміст` |
| Список рисунків/таблиць | `\listoffigures` `\listoftables` |
| Анотація | `\begin{abstract}...\end{abstract}` |
| Додаток | `\додаток`, потім `\розділ` / `\глава` |
| Багатофайловий | `\include{chapters/intro}` або `\input{...}` |
| Проект однієї глави | `\includeonly{глави/методи}` |

## Перехресні посилання та посилання

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

Додайте `\label` **після** `\caption`, щоб число було правильним.

## Математичний режим

| Хочу | Тип |
| --- | --- |
| Вбудований | `$...$` або `\( ... \)` |
| Відобразити ненумерований | `\[ ... \]` |
| Дисплей пронумерований | `рівняння` + `\мітка` |
| Багаторядкове вирівнювання | `вирівняти` / `вирівняти*` |
| Центрований багаторядковий | `збирати` / `збирати*` |
| Одне число, багато рядків | `рівняння` + `спліт` |
| Довга ламана | `багаторядковий` |
| Придушити одне число | `\notag` або `\nonumber` |
| Довідка | `\ref{eq:x}` або `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Дроби, корені, сценарії

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### грецька (математичний режим)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Оператори, відношення, множини, стрілки

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Наголоси та алфавіти

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Великі оператори та числення

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Матриці

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Поштучно

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Роздільники

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Попередній перегляд: [інструмент рівняння](/tools/equation-preview/).

## Таблиці

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

| Хочу | Тип |
| --- | --- |
| Вирівняти стовпці | `l` `c` `r` `p{3cm}` |
| Вертикальна лінія (уникати) | `|` |
| Пролітні колони | `\multicolumn{2}{c}{...}` |
| Розмах рядків | `\multirow{2}{*}{...}` (багаторядний) |
| Багатосторінковий | `довгий стіл` |
| Візуальний конструктор | [генератор таблиць](/tools/table-generator/) |

Звичка дизайну: три горизонтальні лінії, без вертикальних ліній.

## Цифри та поплавці

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Хочу | Тип |
| --- | --- |
| Ширина | `width=0,5\textwidth` або `width=\linewidth` |
| Висота | `height=4cm` (уникайте обох, якщо не потрібно) |
| Сторінка PDF | параметр `page=2` |
| Пліч-о-пліч | дві `міні-сторінки` на `0,48\textwidth` |
| Підфігури | пакет `subcaption` |
| Розміщення | `[htbp]` (тут, зверху, знизу, сторінка) |
| Бар'єр | `\usepackage{placeins}` + `\FloatBarrier` |

## Цитування та бібліографія

### BibTeX (класичний)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### біблатекс + бібер

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### натбіб

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### Мінімальний запис `.bib`

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

Перевірити: [валідатор BibTeX](/tools/bibtex-validator/).

| Симптом | Виправити |
| --- | --- |
| `[?]` або `?` | Неправильний ключ, відсутній пароль або невідповідність BibTeX і Biber |
| Порожня бібліографія | Шлях, серверна частина або відсутність `\cite` / неправильна команда друку |

## Макет

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Хочу | Тип |
| --- | --- |
| Одноразовий без відступу | `\noindent` |
| Ручна довжина | `\hspace{2em}` `\vspace{1ex}` |
| Одиниці | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Двигуни та пакети

| Двигун | Підходить для |
| --- | --- |
| pdfLaTeX | Максимальна сумісність журналу |
| XeLaTeX | Системні шрифти, багато скриптів (`fontspec`) |
| LuaLaTeX | Сучасний Юнікод + сценарії |
| Тектонічний | Пакети в комплекті/на вимогу (Oleafly за замовчуванням) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Відсутній пакет (TeX Live): `tlmgr install siunitx`

## Колір

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (мінімальний)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Комутативні діаграми: `tikz-cd`. Автономний експорт: `\documentclass[tikz]{standalone}`.

## Beamer (мінімальний)

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

## Теореми

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

## Біти поля

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

## Цикл компіляції

1. Відредагуйте `.tex`
2. Запустіть механізм (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Якщо цитати: BibTeX або Biber
4. Знову запустіть двигун (часто двічі), поки `??` і TOC не осядуть

В Oleafly компіляція (або автокомпіляція) обробляє цикл; SyncTeX перемикається між джерелом і PDF.

## Помилки журналу (розшифруйте першу)

| Симптом | Звичайна причина |
| --- | --- |
| Текст зникає посередині рядка | Голий `%` почав коментар |
| `Вставлено відсутній $` | `_` або `^` або математична команда в тексті |
| `Невизначена керуюча послідовність` | Друкарська помилка або відсутній пакет |
| `Файл не знайдено` | Неправильний шлях / розширення для введення чи зображення |
| Література надрукувати `??` | Потрібен ще один проход компіляції |
| Цитування `[?]` | Поганий ключ, неправильна серверна частина або відсутній перехід |
| Порожня бібліографія | Неправильний шлях `\bibliography` або невідповідність biblatex |
| `Overfull \hbox` | Нерозривний рядок (URL, довга математика, без дефіса) |
| Аварійна зупинка | Відсутній `\end{document}`, неправильне включення, невиправдана дужка |
| Втікач аргумент | Відсутній `}` або `\end{...}` |

## Порядок завантаження пакетів (емпіричні правила)

1. Спочатку варіанти класу
2. Кодування / шрифти
3. Геометрія, setspace, мова
4. Математика, графіка, таблиці
5. Пакети доменів
6. `hyperref` ближче до кінця
7. `cleveref` після `hyperref`

## Корисні посилання в Oleafly Learn

| Трек | Почати |
| --- | --- |
| Відкрийте цикл | [Перший PDF](/learn/first-document/) |
| Рівняння ремесла | [Математичний режим](/learn/math-mode/) · [Символи](/learn/math-symbols-cheatsheet/) |
| Плаває | [Таблиці](/learn/create-table/) · [Зображення](/learn/insert-images/) |
| Цитати | [Додати цитати](/learn/add-citations/) |
| Журнал грамотності | [Невизначена керуюча послідовність](/learn/undefined-control-sequence/) |
| Місцева студія | [Робочий процес Oleafly](/learn/oleafly-workflow/) |
| Інструменти браузера | [Рівняння](/tools/equation-preview/) · [Таблиця](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Повна карта: [/learn/](/learn/).