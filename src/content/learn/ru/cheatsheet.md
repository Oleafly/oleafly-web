---

title: "Краткий справочник по LaTeX"
description: "Плотная одностраничная карточка для скелета, текста, математических вычислений, плавающих элементов, цитат, макета, движков, TikZ, Beamer и распространенных ошибок журнала."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Краткий справочник по LaTeX

Держите это рядом с редактором. Каждый ряд готов к вставке. Для более длинных уроков откройте соответствующий трек в [Learn](/learn/).

**Прыжок:**
[Скелет](#document-skeleton) ·
[Преамбула](#preamble-patterns) ·
[Текст](#текст-и-форматирование) ·
[Разделы](#секционирование-и-структура) ·
[Ссылки](#перекрестные ссылки-и-ссылки) ·
[Математика](#math-mode) ·
[Таблицы](#столы) ·
[Цифры](#figures-and-float) ·
[Цитирует](#цитаты-и-библиография) ·
[Макет](#макет) ·
[Двигатели](#движки-и-пакеты) ·
[TikZ](#tikz-минимальный) ·
[Проектор](#проектор-минимальный) ·
[Теоремы](#теоремы) ·
[Поля](#биты-поля) ·
[Компилировать](#компилировать-цикл) ·
[Ошибки](#log-errors-decode-the-first-one) ·
[Порядок пакетов](#пакет-загрузка-порядок-правила)

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

| Класс | Типичное использование |
| --- | --- |
| `статья` | Документы, конспекты, домашние задания |
| `отчет` | Более длинные отчеты с главами |
| `книга` | Книги / многие диссертации |
| `бимер` | Слайды |
| Университет `.cls` | Шаблоны диссертаций |

| Файл | Роль |
| --- | --- |
| `.tex` | Источник |
| `.bib` | База данных библиографии |
| `.cls` / `.sty` | Класс/пакет |
| `.aux` `.log` `.toc` | Сгенерировано; не редактировать |

## Шаблоны преамбулы

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

Загрузите `hyperref` поздно. Загрузите «cleveref» после «hyperref».

## Текст и форматирование

| Хочу | Тип |
| --- | --- |
| Жирный/курсив/моно | `\textbf{}` `\textit{}` `\texttt{}` |
| Упор (гнезда) | `\emph{}` |
| Маленькие шапки | `\textsc{}` |
| Подчеркивание (редко) | `\ подчеркивание{}` |
| Размеры | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Новый абзац | пустая строка |
| Разрыв строки | `\\` или `\newline` |
| Неразрывное пространство | `~` |
| Горизонтальное пространство | `\quad` `\qquad` `\hspace{1em}` |
| Вертикальное пространство | `\vspace{1em}` `\bigskip` |
| Центр/смыв | среды `center` / `flushright` |
| Цитата | `цитата` или `цитата` |
| Сноска | `\footnote{...}` |
| Комментарий | `% остатка строки` |

### Специальные Escape (текстовый режим)

| Чар | Код | Чар | Код |
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

Пользовательская метка: `\item[(a)] ...`

### Номера страниц и разрывы

| Хочу | Тип |
| --- | --- |
| Стиль | `\pagestyle{plain}` / `пустой` / `модный` |
| Только эта страница | `\thispagestyle{пусто}` |
| Романский / арабский | `\pagenumbering{roman}`, затем `arabic` |
| Новая страница | `\newpage` `\clearpage` |
| Запрос на мягкий перерыв | `\pagebreak[3]` |
| Держитесь вместе | `\nopagebreak` |

## Секционирование и структура

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
| оглавление | `\tableofcontents` |
| Список рисунков/таблиц | `\listoffigures` `\listoftables` |
| Аннотация | `\begin{abstract}...\end{abstract}` |
| Приложение | `\appendix`, затем `\section` / `\chapter` |
| Многофайловый | `\include{chapters/intro}` или `\input{...}` |
| Черновик одной главы | `\includeonly{главы/методы}` |

## Перекрестные ссылки и ссылки

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

Поместите `\label` **после** `\caption`, чтобы число было правильным.

## Математический режим

| Хочу | Тип |
| --- | --- |
| Встроенный | `$...$` или `\( ... \)` |
| Показать без номера | `\[ ... \]` |
| Дисплей с номером | `уравнение` + `\label` |
| Многострочное выравнивание | `выровнять` / `выровнять*` |
| Центрированное многострочное | `собрать` / `собрать*` |
| Одно число, много строк | `уравнение` + `разбиение` |
| Длинная ломаная линия | `многострочный` |
| Подавить один номер | `\notag` или `\nonumber` |
| Ссылка | `\ref{eq:x}` или `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Дроби, корни, скрипты

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Греческий (математический режим)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Операторы, отношения, множества, стрелки

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Акценты и алфавиты

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Большие операторы и исчисление

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Матрицы

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### По частям

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Разделители

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Предварительный просмотр в реальном времени: [инструмент для формул](/tools/equation-preview/).

## Таблицы

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
| Выровнять столбцы | `l` `c` `r` `p{3cm}` |
| Вертикальное правило (избегать) | `|` |
| Пролет столбцов | `\multicolumn{2}{c}{...}` |
| Объединить строки | `\multirow{2}{*}{...}` (многострочный) |
| Многостраничный | `длинный стол` |
| Визуальный конструктор | [генератор таблиц](/tools/table-generator/) |

Дизайнерская привычка: три горизонтальных правила, никаких вертикальных линий.

## Фигуры и поплавки

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
| Ширина | `width=0.5\textwidth` или `width=\linewidth` |
| Высота | `height=4cm` (избегайте обоих, если нет необходимости) |
| Страница PDF | опция `page=2` |
| Бок о бок | две мини-страницы по адресу `0.48\textwidth` |
| Подфигуры | пакет `subcaption` |
| Размещение | `[htbp]` (здесь, вверху, внизу, страница) |
| Барьер | `\usepackage{placeins}` + `\FloatBarrier` |

## Цитаты и библиография

### BibTeX (классический)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

###библатекс + бибер

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

###натбиб

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### Минимальная запись `.bib`

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

Проверка: [Валидатор BibTeX](/tools/bibtex-validator/).

| Симптом | Исправить |
| --- | --- |
| `[?]` или `?` | Неправильный ключ, пропуск или несоответствие BibTeX и Biber |
| Пустая библиография | Путь, серверная часть или отсутствие `\cite` / неверная команда печати |

## Макет

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Хочу | Тип |
| --- | --- |
| Одноразовый без отступа | `\ноиндент` |
| Ручная длина | `\hspace{2em}` `\vspace{1ex}` |
| Единицы | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Двигатели и пакеты

| Двигатель | Подходит для |
| --- | --- |
| pdfLaTeX | Максимальная совместимость с журналами |
| КселаТекс | Системные шрифты, множество скриптов (`fontspec`) |
| ЛуаЛаТекс | Современный Unicode + скрипты |
| Тектонический | Пакеты в комплекте/по требованию (по умолчанию Oleafly) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Отсутствует пакет (TeX Live): `tlmgr install siunitx`

## Цвет

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (минимальный)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Коммутативные диаграммы: `tikz-cd`. Автономный экспорт: `\documentclass[tikz]{standalone}`.

## Бимер (минимальный)

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

## Теоремы

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

## Биты поля

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

## Цикл компиляции

1. Отредактируйте `.tex`
2. Запускаем движок (pdfLaTeX/XeLaTeX/LuaLaTeX/Tectonic)
3. Если цитаты: BibTeX или Biber
4. Снова запустите двигатель (часто дважды), пока `??` и TOC не установятся.

В Oleafly цикл обрабатывается компиляцией (или автокомпиляцией); SyncTeX переключается между исходным кодом и PDF.

## Логировать ошибки (расшифровать первую)

| Симптом | Обычная причина |
| --- | --- |
| Текст исчезает посередине строки | Голый `%` начал комментарий |
| `Отсутствует $ вставлен` | `_` или `^` или математическая команда в тексте |
| `Неопределенная последовательность управления` | Опечатка или отсутствует посылка |
| `Файл не найден` | Неправильный путь/расширение для ввода или изображения |
| Ссылки напечатать `??` | Нужен еще один проход компиляции |
| Цитаты `[?]` | Неверный ключ, неправильный сервер или отсутствует пропуск |
| Пустая библиография | Неправильный путь к `\bibliography` или несоответствие библтекса |
| `Переполнение \hbox` | Неразрывная строка (URL, длинные математические выражения, без дефиса) |
| Аварийная остановка | Отсутствует `\end{document}`, неправильное включение, неконтролируемая скобка |
| Беглый аргумент | Отсутствует `}` или `\end{...}` |

## Порядок загрузки пакета (практические правила)

1. Сначала варианты классов
2. Кодировка/шрифты
3. Геометрия, пространство, язык
4. Математика, графики, таблицы.
5. Пакеты доменов
6. `hyperref` ближе к концу
7. `cleveref` после `hyperref`

## Полезные ссылки в Oleafly Learn

| Трек | Начало |
| --- | --- |
| Открыть цикл | [Первый PDF](/learn/first-document/) |
| Уравнение ремесла | [Математический режим](/learn/math-mode/) · [Символы](/learn/math-symbols-cheatsheet/) |
| Поплавки | [Таблицы](/learn/create-table/) · [Изображения](/learn/insert-images/) |
| Цитаты | [Добавить цитаты](/learn/add-citations/) |
| Журнал грамотности | [Неопределённая последовательность управления](/learn/unопределённая-последовательность-управления/) |
| Местная студия | [Рабочий процесс Oleafly](/learn/oleafly-workflow/) |
| Инструменты браузера | [Уравнение](/tools/equation-preview/) · [Таблица](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Полная карта: [/learn/](/learn/).