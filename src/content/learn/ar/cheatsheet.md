---

title: "LaTeX مرجع سريع"
description: "بطاقة كثيفة من صفحة واحدة للهيكل العظمي والنص والرياضيات والعوامات والاستشهادات والتخطيط والمحركات وTikZ وBeamer وأخطاء السجل الشائعة."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# مرجع سريع LaTeX

احتفظ بهذا بجانب المحرر. كل صف جاهز للصق. للحصول على دروس أطول، افتح المسار المطابق على [Learn](/learn/).

**القفز:**
[الهيكل العظمي](#document-skeleton) ·
[الديباجة](#أنماط-الديباجة) ·
[النص](#النص والتنسيق) ·
[الأقسام](#التقسيم والبنية) ·
[المراجع](#المراجع والروابط) ·
[الرياضيات](#وضع الرياضيات) ·
[الجداول](#الجداول) ·
[الأشكال](#الأشكال والعوامات) ·
[الاستشهادات](#الاستشهادات والببليوغرافيا) ·
[التخطيط](#التخطيط) ·
[المحركات](#المحركات والعبوات) ·
[TikZ](#tikz-الحد الأدنى) ·
[متعاطي المخدرات](#متعاطي المخدرات-الحد الأدنى) ·
[نظريات](#نظريات) ·
[الحقول](#بتات الحقل) ·
[تجميع](#تجميع حلقة) ·
[الأخطاء](#أخطاء-فك تشفير-الأولى) ·
[ترتيب الحزمة](#قواعد ترتيب تحميل الحزمة)

## هيكل الوثيقة

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

| فئة | الاستخدام النموذجي |
| --- | --- |
| `مقال` | الأوراق والمذكرات والواجبات المنزلية |
| `تقرير` | تقارير أطول مع فصول |
| `كتاب` | كتب / اطروحات عديدة |
| `متعاطي المخدرات` | الشرائح |
| جامعة `.cls` | قوالب الأطروحة |

| ملف | الدور |
| --- | --- |
| `.تكس` | المصدر |
| `.بيب` | قاعدة بيانات ببليوغرافية |
| `.cls` / `.sty` | فئة / حزمة |
| `.aux` `.log` `.toc` | تم إنشاؤها؛ لا تعدل |

## أنماط الديباجة

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

قم بتحميل "hyperref" في وقت متأخر. قم بتحميل "cleveref" بعد "hyperref".

## النص والتنسيق

| تريد | اكتب |
| --- | --- |
| غامق / مائل / أحادي | `\textbf{}` `\textit{}` `\texttt{}` |
| التأكيد (الاعشاش) | `\emph{}` |
| قبعات صغيرة | `\textsc{}` |
| تسطير (نادر) | `\تسطير{}` |
| المقاسات | `{\صغير }` `{\كبير }` `{\كبير }` `{\footnotesize }` |
| فقرة جديدة | سطر فارغ |
| فاصل سطر | `\\` أو `\السطر الجديد` |
| مساحة غير منقسمة | `~` |
| الفضاء الأفقي | `\quad` `\qquad` `\hspace{1em}` |
| الفضاء العمودي | `\vspace{1em}` `\bigskip` |
| مركز / دافق | بيئات "المركز" / "فلاشرايت" |
| اقتباس | "اقتباس" أو "اقتباس" |
| حاشية | `\حاشية سفلية{...}` |
| تعليق | `% بقية السطر` |

### عروض الهروب الخاصة (وضع النص)

| شار | الكود | شار | الكود |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\شرطة مائلة نصية` | | |

### القوائم

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

تسمية مخصصة: `\item[(a)] ...`

### أرقام الصفحات والفواصل

| تريد | اكتب |
| --- | --- |
| النمط | `\pagestyle{plain}` / `فارغ` / `فاخر` |
| هذه الصفحة فقط | `\thispagestyle{فارغة}` |
| الرومانية / العربية | `\رقم الصفحة{الروماني}` ثم `العربية` |
| صفحة جديدة | `\صفحة جديدة` `\مسح` |
| طلب استراحة ناعمة | `\فاصل الصفحات[3]` |
| نبقى معًا | `\لا يوجد فاصل صفحات` |

## التقسيم والهيكل

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

| تريد | اكتب |
| --- | --- |
| جدول المحتويات | `\جدول المحتويات` |
| قائمة الأشكال/الجداول | `\listoffigures` `\listoftables` |
| الملخص | `\بدء{ملخص}...\نهاية{ملخص}` |
| ملحق | `\الملحق` ثم `\القسم` / `\الفصل` |
| متعدد الملفات | `\include{chapters/intro}` أو `\input{...}` |
| مشروع فصل واحد | `\includeonly{chapters/methods}` |

## المراجع والروابط

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

ضع `\label` **بعد** `\caption` حتى يكون الرقم صحيحًا.

## وضع الرياضيات

| تريد | اكتب |
| --- | --- |
| مضمنة | `$...$` أو `\( ... \)` |
| عرض غير مرقم | `\[ ... \]` |
| عرض مرقمة | `المعادلة` + `\التسمية` |
| محاذاة متعددة الأسطر | `محاذاة` / `محاذاة*` |
| توسيط متعدد الخطوط | `اجمع` / `اجمع*` |
| رقم واحد، عدة أسطر | "المعادلة" + "التقسيم" |
| خط طويل متقطع | `متعدد الأسطر` |
| قمع رقم واحد | `\nottag` أو `\nonumber` |
| مرجع | `\ref{eq:x}` أو `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### الكسور والجذور والنصوص

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### اليونانية (وضع الرياضيات)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### العوامل، العلاقات، المجموعات، الأسهم

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### اللهجات والحروف الهجائية

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### العوامل الكبرى وحساب التفاضل والتكامل

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### المصفوفات

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### قطعة

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### المحددات

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

المعاينة المباشرة: [أداة المعادلة](/tools/equation-preview/).

## الجداول

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

| تريد | اكتب |
| --- | --- |
| محاذاة الأعمدة | `l` `c` `r` `p{3cm}` |
| القاعدة العمودية (تجنب) | `|` |
| أعمدة تمتد | `\multicolumn{2}{c}{...}` |
| صفوف ممتدة | `\multirow{2}{*}{...}` (multirow) |
| متعدد الصفحات | `طاولة طويلة` |
| منشئ مرئي | [مولد الجدول](/tools/table-generator/) |

عادة التصميم: ثلاث قواعد أفقية، بدون خطوط عمودية.

## الأرقام والعوامات

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| تريد | اكتب |
| --- | --- |
| العرض | `العرض=0.5\textwidth` أو `العرض=\linewidth` |
| الارتفاع | `الارتفاع = 4 سم` (تجنب كليهما إلا إذا لزم الأمر) |
| صفحة بصيغة PDF | خيار `الصفحة = 2` |
| جنبا إلى جنب | صفحتان صغيرتان بحجم `0.48\textwidth` |
| الأشكال الفرعية | حزمة "تسمية فرعية" |
| التنسيب | `[htbp]` (هنا، أعلى، أسفل، الصفحة) |
| الحاجز | `\usepackage{placeins}` + `\FloatBarrier` |

## الاستشهادات والببليوغرافيا

### BibTeX (كلاسيكي)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### بيبلاتكس + بيبر

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### ناتبيب

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### الحد الأدنى لإدخال `.bib`

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

التحقق من الصحة: ​​[BibTeX validator](/tools/bibtex-validator/).

| العَرَض | إصلاح |
| --- | --- |
| `[؟]` أو `؟` | مفتاح خاطئ، تمريرة مفقودة، أو عدم تطابق BibTeX مع Biber |
| ببليوغرافيا فارغة | المسار أو الواجهة الخلفية أو عدم وجود `\cite` / أمر طباعة خاطئ |

## تَخطِيط

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| تريد | اكتب |
| --- | --- |
| لمرة واحدة بدون مسافة بادئة | `\لا مسافة بادئة` |
| الطول اليدوي | `\hspace{2em}` `\vspace{1ex}` |
| الوحدات | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## المحركات والحزم

| المحرك | جيد ل |
| --- | --- |
| pdfLaTeX | التوافق الأقصى للمجلة |
| زيلاتيكس | خطوط النظام، العديد من البرامج النصية (`fontspec`) |
| لوا لاتيكس | يونيكود + البرمجة النصية الحديثة |
| التكتونية | الحزم المجمعة / حسب الطلب (Oleafly الافتراضي) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

الحزمة المفقودة (TeX Live): `tlmgr install siunitx`

## لون

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (الحد الأدنى)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

الرسوم البيانية التبادلية: `tikz-cd`. التصدير المستقل: `\documentclass[tikz]{standalone}`.

## متعاطي المخدرات (الحد الأدنى)

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

## النظريات

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

## البتات الميدانية

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

## حلقة التجميع

1. تحرير ".tex".
2. تشغيل المحرك (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. إذا كانت الاستشهادات: BibTeX أو Biber
4. قم بتشغيل المحرك مرة أخرى (غالبًا مرتين) حتى يستقر جدول المحتويات (TOC).

في Oleafly، يقوم التحويل البرمجي (أو التحويل البرمجي التلقائي) بمعالجة الحلقة؛ يتنقل SyncTeX بين المصدر وPDF.

## أخطاء السجل (فك تشفير الخطأ الأول)

| العَرَض | السبب المعتاد |
| --- | --- |
| يختفي النص في منتصف السطر | العارية `%` بدأت التعليق |
| `تم إدراج $ مفقود` | `_` أو `^` أو أمر رياضي في النص |
| `تسلسل تحكم غير محدد` | خطأ مطبعي أو حزمة مفقودة |
| `لم يتم العثور على الملف` | مسار/امتداد خاطئ للإدخال أو الصورة |
| طباعة المراجع `؟؟` | بحاجة إلى تمريرة تجميع أخرى |
| الاستشهادات `[؟]` | مفتاح غير صالح، أو واجهة خلفية خاطئة، أو تمريرة bib مفقودة |
| ببليوغرافيا فارغة | مسار `\bibliography` خاطئ أو عدم تطابق biblatex |
| `ملء \hbox` | سطر غير قابل للكسر (عنوان URL، رياضيات طويلة، بدون واصلة) |
| توقف الطوارئ | `\end{document}` مفقود، تضمين غير صالح، قوس متعرج |
| الحجة الهاربة | مفقود `}` أو `\end{...}` |

## ترتيب تحميل الحزمة (القواعد الأساسية)

1. خيارات الفصل أولاً
2. الترميز / الخطوط
3. الهندسة، مساحة المجموعة، اللغة
4. الرياضيات والرسومات والجداول
5. حزم المجال
6. `hyperref` بالقرب من النهاية
7. "cleveref" بعد "hyperref".

## روابط مفيدة في Oleafly Learn

| المسار | ابدأ |
| --- | --- |
| افتح الحلقة | [ملف PDF الأول](/تعلم/المستند الأول/) |
| حرفة المعادلة | [وضع الرياضيات](/learn/math-mode/) · [الرموز](/learn/math-symbols-cheatsheet/) |
| يطفو | [الجداول](/تعلم/إنشاء جدول/) · [الصور](/تعلم/إدراج-صور/) |
| اقتباسات | [إضافة استشهادات](/تعلم/إضافة استشهادات/) |
| سجل محو الأمية | [تسلسل تحكم غير محدد](/تعلم/غير محدد-تحكم-تسلسل/) |
| استوديو محلي | [سير عمل Oleafly](/learn/oleafly-workflow/) |
| أدوات المتصفح | [المعادلة](/tools/equation-preview/) · [الجدول](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

الخريطة الكاملة: [/تعلم/](/تعلم/).