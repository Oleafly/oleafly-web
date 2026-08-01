---

title: "LaTeX 快速参考"
description: "密集的一页卡片，用于骨架、文本、数学、浮动、引用、布局、引擎、TikZ、Beamer 和常见日志错误。"
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX 快速参考

将其放在编辑器旁边。每一行都已准备好粘贴。对于较长的课程，请打开 [学习](/learn/) 上的匹配曲目。

**跳转：**
[骨架](#document-骨架)·
[序言](#preamble-patterns) ·
[文本](#文本和格式)·
[节](#节和结构)·
[参考资料](#交叉引用和链接) ·
[数学](#数学模式) ·
[表格](#表格) ·
[人物](#figures-and-floats) ·
[引用](#引用和参考书目)·
[布局](#layout) ·
[引擎](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[定理](#定理)·
[字段](#字段位) ·
[编译](#compile-loop) ·
[错误](#log-errors-decode-the-first-one) ·
[包裹顺序](#package-load-order-rules-of-thumb)

## 文档骨架

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

|班级 |典型用途|
| --- | --- |
| `文章` |论文、笔记、作业 |
| `报告` |包含章节的较长报告 |
| `书` |书籍/许多论文|
| `投影仪` |幻灯片|
|大学`.cls` |论文模板|

|文件|角色 |
| --- | --- |
| `.tex` |来源 |
| `.bib` |参考书目数据库|
| `.cls` / `.sty` |类/包 |
| `.aux` `.log` `.toc` |生成；请勿编辑 |

## 前导码模式

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

稍后加载“hyperref”。在“hyperref”之后加载“cleveref”。

## 文本和格式

|想要|类型 |
| --- | --- |
|粗体/斜体/单色| `\textbf{}` `\textit{}` `\texttt{}` |
|重点（巢）| `\emph{}` |
|小型大写字母 | `\textsc{}` |
|下划线（罕见）| `\下划线{}` |
|尺寸 | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
|新款|空行|
|换行| `\\` 或 `\newline` |
|不间断空格| `~` |
|水平空间| `\quad` `\qquad` `\hspace{1em}` |
|垂直空间| `\vspace{1em}` `\bigskip` |
|中心/齐平| `center` / `flushright` 环境 |
|报价 | `引用` 或 `引用` |
|脚注| `\脚注{...}` |
|评论 | `% 行的其余部分` |

### 逃脱特辑（文本模式）

|查尔 |代码|查尔 |代码|
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{``}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### 列表

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

自定义标签：`\item[(a)] ...`

### 页码和分隔符

|想要|类型 |
| --- | --- |
|风格| `\pagestyle{plain}` / `空` / `花式` |
|仅此页| `\thispagestyle{空}` |
|罗马/阿拉伯语 | `\pagenumbering{罗马}` 然后是`阿拉伯语` |
|新页面| `\newpage` `\clearpage` |
|软中断请求| `\pagebreak[3]` |
|保持在一起| `\nopagebreak` |

## 切片和结构

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

|想要|类型 |
| --- | --- |
|目录 | `\目录` |
|图/表列表 | `\listoffigures` `\listoftables` |
|摘要| `\begin{abstract}...\end{abstract}` |
|附录| `\appendix` 然后 `\section` / `\chapter` |
|多文件| `\include{chapters/intro}` 或 `\input{...}` |
|起草一章 | `\includeonly{章节/方法}` |

## 交叉引用和链接

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

将 `\label` **放在 ** `\caption` 之后，以便数字正确。

## 数学模式

|想要|类型 |
| --- | --- |
|内联| `$...$` 或 `\( ... \)` |
|显示未编号 | `\[ ... \]` |
|显示编号| `方程` + `\标签` |
|多行对齐 | `对齐` / `对齐*` |
|居中多线 | `聚集` / `聚集*` |
|一个号码，多行| `方程` + `分割` |
|长断线| `多行` |
|抑制一个数字 | `\notag` 或 `\nonumber` |
|参考| `\ref{eq:x}` 或 `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### 分数、根、脚本

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### 希腊语（数学模式）

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### 运算符、关系、集合、箭头

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### 重音符号和字母

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### 大运算符和微积分

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### 矩阵

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### 分段

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### 分隔符

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

实时预览：[方程工具](/tools/equation-preview/)。

## 表格

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

|想要|类型 |
| --- | --- |
|对齐列 | `l` `c` `r` `p{3cm}` |
|垂直线（避免）| `|` |
|跨列| `\multicolumn{2}{c}{...}` |
|跨行| `\multirow{2}{*}{...}`（多行）|
|多页| `长桌` |
|视觉构建器 | [表格生成器](/tools/table-generator/) |

设计习惯：三横线，无竖线。

## 数字和花车

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

|想要|类型 |
| --- | --- |
|宽度| `width=0.5\textwidth` 或 `width=\linewidth` |
|身高| `height=4cm`（除非必​​须，否则避免两者）|
| PDF页面| `page=2` 选项 |
|并肩|两个“minipage”位于“0.48\textwidth” |
|子图| `subcaption` 包 |
|安置| `[htbp]`（此处、顶部、底部、页面）|
|屏障| `\usepackage{placeins}` + `\FloatBarrier` |

## 引文和参考书目

### BibTeX（经典）

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

### 纳比布

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### 最小`.bib`条目

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

验证：[BibTeX 验证器](/tools/bibtex-validator/)。

|症状|修复 |
| --- | --- |
| `[?]` 或 `?` |密钥错误、丢失传递或 BibTeX 与 Biber 不匹配 |
|空参考书目 |路径、后端或没有 `\cite` / 错误的打印命令 |

＃＃ 布局

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

|想要|类型 |
| --- | --- |
|一次性无缩进 | `\无缩进` |
|手册长度| `\hspace{2em}` `\vspace{1ex}` |
|单位 | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## 引擎和套件

|发动机|适合 |
| --- | --- |
| pdfLaTeX |最大期刊兼容性 |
| XeLaTeX |系统字体，许多脚本（`fontspec`）|
| LuaLaTeX |现代 Unicode + 脚本 |
|构造|捆绑/按需套餐（Oleafly 默认）|

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

缺少软件包（TeX Live）：`tlmgr install siunitx`

＃＃ 颜色

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ（最小）

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

交换图：`tikz-cd`。独立导出：`\documentclass[tikz]{standalone}`。

## 投影仪（最小）

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

## 定理

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

## 字段位

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

## 编译循环

1.编辑`.tex`
2.运行引擎(pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3.如果引用：BibTeX或Biber
4. 再次运行发动机（通常两次），直到“??”和 TOC 稳定下来

在 Oleafly 中，编译（或自动编译）处理循环； SyncTeX 在源代码和 PDF 之间跳转。

## 记录错误（解码第一个）

|症状|常见原因 |
| --- | --- |
|文本在中线消失 |裸露“%”发表评论 |
| `缺少 $ 插入` |文本中的 `_` 或 `^` 或数学命令 |
| `未定义的控制序列` |拼写错误或丢失包裹 |
| `找不到文件` |输入或图像的路径/扩展名错误 |
|参考文献打印`??` |需要另一个编译过程 |
|引用`[?]` |密钥错误、后端错误或缺少号码布 |
|空参考书目 |错误的 `\bibliography` 路径或 biblatex 不匹配 |
| `\hbox 过满` |牢不可破的线（URL，长数学，没有连字符）|
|紧急停止|缺少 `\end{document}`、包含错误、大括号失控 |
|失控的争论|缺少 `}` 或 `\end{...}` |

## 包加载顺序（经验法则）

1. 班级选项优先
2.编码/字体
3.几何、集合空间、语言
4. 数学、图形、表格
5. 域名包
6. 接近尾声的“hyperref”
7. “hyperref”之后的“cleveref”

## Oleafly Learn 中的有用链接

|轨道 |开始|
| --- | --- |
|打开循环| [第一个 PDF](/learn/first-document/) |
|方程工艺| [数学模式](/learn/math-mode/) · [符号](/learn/math-symbols-cheatsheet/) |
|花车 | [表格](/learn/create-table/) · [图像](/learn/insert-images/) |
|引文| [添加引用](/learn/add-itations/) |
|日志扫盲 | [未定义的控制序列](/learn/undefined-control-sequence/) |
|本地工作室| [Oleafly 工作流程](/learn/oleafly-workflow/) |
|浏览器工具| [方程](/tools/equation-preview/) · [表格](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

完整地图：[/learn/](/learn/)。