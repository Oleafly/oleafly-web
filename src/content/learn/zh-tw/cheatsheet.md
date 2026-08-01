---

title: "LaTeX 快速參考"
description: "密集的一頁卡片，用於骨架、文字、數學、浮動、引用、佈局、引擎、TikZ、Beamer 和常見日誌錯誤。"
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX 快速參考

將其放在編輯器旁邊。每一行都已準備好貼上。對於較長的課程，請開啟 [學習](/learn/) 上的配對曲目。

**跳轉：**
[骨架](#document-骨架)·
[序言](#preamble-patterns) ·
[文本](#文本與格式)·
[節](#節與結構)·
[參考資料](#交叉引用與連結) ·
[數學](#數學模式) ·
[表格](#表格) ·
[人物](#figures-and-floats) ·
[引用](#引用與參考書目)·
[佈局](#layout) ·
[引擎](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[定理](#定理)·
[字段](#字段位) ·
[編譯](#compile-loop) ·
[錯誤](#log-errors-decode-the-first-one) ·
[包裹順序](#package-load-order-rules-of-thumb)

## 文檔骨架

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

|班級 |典型用途|
| --- | --- |
| `文章` |論文、筆記、作業 |
| `報告` |包含章節的較長報告 |
| `書` |書籍/許多論文|
| `投影機` |幻燈片|
|大學`.cls` |論文模板|

|文件|角色 |
| --- | --- |
| `.tex` |來源 |
| `.bib` |參考書目資料庫|
| `.cls` / `.sty` |類別/套件 |
| `.aux` `.log` `.toc` |生成；請勿編輯 |

## 前導碼模式

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

稍後加載“hyperref”。在“hyperref”之後載入“cleveref”。

## 文字和格式

|想要|類型 |
| --- | --- |
|粗体/斜体/单色| `\textbf{}` `\textit{}` `\texttt{}` |
|重点（巢）| `\emph{}` |
|小型大写字母 | `\textsc{}` |
|下划线（罕见）| `\下划线{}` |
|尺寸 | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
|新款|空檔|
|換行| `\\` 或 `\newline` |
|不間斷空格| `~` |
|水平空间| `\quad` `\qquad` `\hspace{1em}` |
|垂直空間| `\vspace{1em}` `\bigskip` |
|中心/齐平| `center` / `flushright` 环境 |
|报价 | `引用` 或 `引用` |
|脚注| `\脚注{...}` |
|评论 | `% 行的其余部分` |

### 逃脫特輯（文字模式）

|查爾 |代碼|查爾 |代碼|
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{``}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | | |

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

自訂標籤：`\item[(a)] ...`

### 頁碼和分隔符

|想要|類型 |
| --- | --- |
|風格| `\pagestyle{plain}` / `空` / `花式` |
|僅此頁| `\thispagestyle{空}` |
|羅馬/阿拉伯語 | `\pagenumbering{羅馬}` 然後是`阿拉伯語` |
|新頁面| `\newpage` `\clearpage` |
|軟體中斷請求| `\pagebreak[3]` |
|保持在一起| `\nopagebreak` |

## 切片和結構

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

|想要|類型 |
| --- | --- |
|目錄 | `\目錄` |
|圖/表格列表 | `\listoffigures` `\listoftables` |
|摘要| `\begin{abstract}...\end{abstract}` |
|附錄| `\appendix` 然後 `\section` / `\chapter` |
|多重檔案| `\include{chapters/intro}` 或 `\input{...}` |
|起草一章 | `\includeonly{章節/方法}` |

## 交叉引用和鏈接

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

將 `\label` **放在 ** `\caption` 之後，以便數字正確。

## 數學模式

|想要|類型 |
| --- | --- |
|內聯| `$...$` 或 `\( ... \)` |
|顯示未編號 | `\[ ... \]` |
|顯示編號| `方程式` + `\標籤` |
|多行對齊 | `對齊` / `對齊*` |
|居中多線 | `聚集` / `聚集*` |
|一個號碼，多行| `方程式` + `分割` |
|長斷線| `多行` |
|抑制一個數字 | `\notag` 或 `\nonumber` |
|參考| `\ref{eq:x}` 或 `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### 分數、根、腳本

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### 希臘文（數學模式）

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### 運算子、關係、集合、箭頭

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### 重音符號與字母

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### 大運算子和微積分

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### 矩陣

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

即時預覽：[方程式工具](/tools/equation-preview/)。

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

|想要|類型 |
| --- | --- |
|對齊列 | `l` `c` `r` `p{3cm}` |
|垂直線（避免）| `|` |
|跨列| `\multicolumn{2}{c}{...}` |
|跨行| `\multirow{2}{*}{...}`（多行）|
|多頁| `長桌` |
|視覺建構器 | [表格產生器](/tools/table-generator/) |

設計習慣：三橫線，無垂直線。

## 數字和花車

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

|想要|類型 |
| --- | --- |
|寬度| `width=0.5\textwidth` 或 `width=\linewidth` |
|身高| `height=4cm`（除非必須，否則避免兩者）|
| PDF頁面| `page=2` 選項 |
|並肩|兩個「minipage」位於「0.48\textwidth」 |
|子圖| `subcaption` 套件 |
|安置| `[htbp]`（此處、頂部、底部、頁面）|
|屏障| `\usepackage{placeins}` + `\FloatBarrier` |

## 引文和參考書目

### BibTeX（經典）

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

### 納比布

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### 最小`.bib`條目

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

驗證：[BibTeX 驗證器](/tools/bibtex-validator/)。

|症狀|修復 |
| --- | --- |
| `[?]` 或 `?` |金鑰錯誤、遺失傳遞或 BibTeX 與 Biber 不符 |
|空白參考書目 |路徑、後端或沒有 `\cite` / 錯誤的列印指令 |

＃＃ 佈局

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

|想要|類型 |
| --- | --- |
|一次性无缩进 | `\无缩进` |
|手册长度| `\hspace{2em}` `\vspace{1ex}` |
|單位 | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## 引擎和套件

|發動機|適合 |
| --- | --- |
| pdfLaTeX |最大期刊相容性 |
| XeLaTeX |系統字體，許多腳本（`fontspec`）|
| LuaLaTeX |現代 Unicode + 腳本 |
|建構|捆綁/按需套餐（Oleafly 預設）|

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

缺少軟體包（TeX Live）：`tlmgr install siunitx`

＃＃ 顏色

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

交换图：`tikz-cd`。獨立導出：`\documentclass[tikz]{standalone}`。

## 投影機（最小）

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

## 編譯迴圈

1.編輯`.tex`
2.運轉引擎(pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3.如果引用：BibTeX或Biber
4. 再次運轉引擎（通常兩次），直到「??」和 TOC 穩定下來

在 Oleafly 中，編譯（或自動編譯）處理迴圈； SyncTeX 在原始碼和 PDF 之間跳轉。

## 記錄錯誤（解碼第一個）

|症狀|常見原因 |
| --- | --- |
|文字在中線消失 |裸露「%」發表評論 |
| `缺少 $ 插入` |文本中的 `_` 或 `^` 或數學指令 |
| `未定義的控制序列` |拼字錯誤或遺失包裹 |
| `找不到檔案` |輸入或影像的路徑/副檔名錯誤 |
|參考文獻列印`??` |需要另一個編譯過程 |
|引用`[?]` |金鑰錯誤、後端錯誤或缺少號碼布 |
|空參考書目 |錯誤的 `\bibliography` 路徑或 biblatex 不符 |
| `\hbox 過滿` |牢不可破的線（URL，長數學，沒有連字符）|
|緊急停止|缺少 `\end{document}`、包含錯誤、大括號失控 |
|失控的爭論|缺少 `}` 或 `\end{...}` |

## 套件載入順序（經驗法則）

1. 班級選項優先
2.編碼/字體
3.幾何、集合空間、語言
4. 數學、圖形、表格
5. 域名包
6. 接近尾聲的“hyperref”
7. “hyperref”之後的“cleveref”

## Oleafly Learn 中的有用鏈接

|軌道 |開始|
| --- | --- |
|開啟循環| [第一個 PDF](/learn/first-document/) |
|方程式工藝| [數學模式](/learn/math-mode/) · [符號](/learn/math-symbols-cheatsheet/) |
|花車 | [表格](/learn/create-table/) · [圖片](/learn/insert-images/) |
|引文| [新增引用](/learn/add-itations/) |
|日誌掃盲 | [未定義的控制序列](/learn/undefined-control-sequence/) |
|本地工作室| [Oleafly 工作流程](/learn/oleafly-workflow/) |
|瀏覽器工具| [方程式](/tools/equation-preview/) · [表格](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

完整地圖：[/learn/](/learn/)。