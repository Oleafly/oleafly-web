---

title: "LaTeX クイックリファレンス"
description: "スケルトン、テキスト、数学、フロート、引用、レイアウト、エンジン、TikZ、Beamer、一般的なログ エラーをまとめた 1 ページのカード。"
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX クイックリファレンス

これをエディターの横に置いてください。すべての行を貼り付ける準備ができています。より長いレッスンの場合は、[Learn](/learn/) で一致するトラックを開きます。

**ジャンプ:**
[スケルトン](#document-skeleton) ·
[プリアンブル](#preamble-patterns) ·
[テキスト](#text-and-formatting) ·
[セクション](#sectioning-and-struction) ·
[参照](#相互参照とリンク) ·
[数学](#math-mode) ·
[テーブル](#tables) ·
[フィギュア](#figures-and-floats) ·
[引用](#cites-and-bibliography) ·
[レイアウト](#layout) ·
[エンジン](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[ビーマー](#beamer-minimal) ·
[定理](#定理) ·
[フィールド](#field-bits) ·
[コンパイル](#compile-loop) ·
[エラー](#log-errors-decode-the-first-one) ·
[パッケージの順序](#package-load-order-経験則)

## ドキュメントのスケルトン

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

|クラス |一般的な使用法 |
| --- | --- |
| `記事` |書類、メモ、宿題 |
| `レポート` |章を含む長いレポート |
| `本` |著書・論文多数 |
| `ビーマー` |スライド |
|大学 `.cls` |論文テンプレート |

|ファイル |役割 |
| --- | --- |
| `.tex` |出典 |
| `.よだれかけ` |書誌データベース |
| `.cls` / `.sty` |クラス/パッケージ |
| `.aux` `.log` `.toc` |生成されます。編集しないでください |

## プリアンブル パターン

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

`hyperref` を遅くロードします。 `hyperref` の後に `cleveref` をロードします。

## テキストと書式設定

|欲しい |タイプ |
| --- | --- |
|太字/斜体/モノクロ | `\textbf{}` `\textit{}` `\texttt{}` |
|強調 (ネスト) | `\emph{}` |
|スモールキャップ | `\textsc{}` |
|下線 (レア) | `\下線{}` |
|サイズ | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
|新しい段落 |空白行 |
|改行 | `\\` または `\newline` |
|非改行スペース | `~` |
|水平方向のスペース | `\quad` `\qquad` `\hspace{1em}` |
|垂直方向のスペース | `\vspace{1em}` `\bigskip` |
|センター/フラッシュ | `center` / `flushright` 環境 |
|引用 | `引用` または `引用` |
|脚注 | `\脚注{...}` |
|コメント | `% 行の残り` |

### エスケープスペシャル (テキストモード)

|シャア |コード |シャア |コード |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\テキストバックスラッシュ` | | |

### リスト

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

カスタムラベル: `\item[(a)] ...`

### ページ番号と区切り

|欲しい |タイプ |
| --- | --- |
|スタイル | `\pagestyle{plain}` / `empty` / `fancy` |
|このページのみ | `\thispagestyle{空}` |
|ローマ字 / アラビア語 | `\pagenumbering{ローマ字}`、次に `アラビア語` |
|新しいページ | `\newpage` `\clearpage` |
|ソフトブレーク要求 | `\pagebreak[3]` |
|一緒にいてください | `\no改ページ` |

## セクション化と構造

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

|欲しい |タイプ |
| --- | --- |
|目次 | `\目次` |
|図・表一覧 | `\listoffigures` `\listoftables` |
|要約 | `\begin{abstract}...\end{abstract}` |
|付録 | `\付録`、次に `\セクション` / `\章` |
|マルチファイル | `\include{chapters/intro}` または `\input{...}` |
| 1 章の草稿 | `\includeonly{章/メソッド}` |

## 相互参照とリンク

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

番号が正しくなるように、`\label`を**後** `\caption`に置きます。

## 数学モード

|欲しい |タイプ |
| --- | --- |
|インライン | `$...$` または `\( ... \)` |
|番号なしで表示 | `\[ ... \]` |
|番号付きで表示 | `方程式` + `\ラベル` |
|複数行の整列 | `整列` / `整列*` |
|中央揃えの複数行 | `集まる` / `集まる*` |
| 1 つの数字、多数の行 | `方程式` + `分割` |
|長い破線 | `マルチライン` |
| 1 つの数字を抑制する | `\notag` または `\nonumber` |
|参考資料 | `\ref{eq:x}` または `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### 分数、ルート、スクリプト

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### ギリシャ語 (数学モード)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### 演算子、関係、集合、矢印

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### アクセントとアルファベット

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### 大きな演算子と微積分

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### 行列

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### 区分的に

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### 区切り文字

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

ライブ プレビュー: [数式ツール](/tools/equation-preview/)。

## テーブル

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

|欲しい |タイプ |
| --- | --- |
|列を整列する | `l` `c` `r` `p{3cm}` |
|縦罫線（避ける） | `|` |
|スパン列 | `\multicolumn{2}{c}{...}` |
|スパン行 | `\multirow{2}{*}{...}` (複数行) |
|複数ページ | `ロングテーブル` |
|ビジュアルビルダー | [テーブルジェネレーター](/tools/table-generator/) |

デザインの習慣: 水平方向の 3 つの罫線、垂直方向の線は使用しません。

## フィギュアとフロート

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

|欲しい |タイプ |
| --- | --- |
|幅 | `width=0.5\textwidth` または `width=\linewidth` |
|高さ | `height=4cm` (必要な場合を除き、両方を避けてください) |
| PDFのページ | `page=2` オプション |
|並んで | `0.48\textwidth` に 2 つの `minipage` |
|サブフィギュア | `サブキャプション` パッケージ |
|配置 | `[htbp]` (ここ、上、下、ページ) |
|バリア | `\usepackage{placeins}` + `\FloatBarrier` |

## 引用と参考文献

### BibTeX (クラシック)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### ビブラテックス + ビバー

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### ナトビブ

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### 最小限の `.bib` エントリ

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

検証: [BibTeX バリデーター](/tools/bibtex-validator/)。

|症状 |修正 |
| --- | --- |
| `[?]` または `?` |間違ったキー、パスの欠落、または BibTeX と Biber の不一致 |
|空の参考文献 |パス、バックエンド、または `\cite` がない / 間違った印刷コマンド |

## レイアウト

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

|欲しい |タイプ |
| --- | --- |
|ワンオフのインデントなし | `\noインデント` |
|マニュアルの長さ | `\hspace{2em}` `\vspace{1ex}` |
|単位 | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## エンジンとパッケージ

|エンジン |良いこと |
| --- | --- |
| pdfLaTeX |最大ジャーナル互換性 |
|ゼラテックス |システム フォント、多くのスクリプト (`fontspec`) |
|ルアラテックス |最新の Unicode + スクリプト |
|地殻変動 |バンドル/オンデマンド パッケージ (Oleafly デフォルト) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

パッケージがありません (TeX Live): `tlmgr install siunitx`

＃＃ 色

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (最小限)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

可換図: `tikz-cd`。スタンドアロン エクスポート: `\documentclass[tikz]{standalone}`。

## ビーマー (最小)

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

## フィールドビット

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

## コンパイルループ

1. `.tex`を編集します
2. エンジンの実行 (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. 引用の場合: BibTeX または Biber
4. 「??」と TOC が安定するまで、エンジンを再度実行します (多くの場合 2 回)。

Oleafly では、コンパイル (または自動コンパイル) によってループが処理されます。 SyncTeX はソースと PDF の間をジャンプします。

## エラーをログに記録します (最初のエラーをデコードします)

|症状 |通常の原因 |
| --- | --- |
|テキストが行の途中で消えます |裸の `%` がコメントを開始しました |
| `$ が挿入されていません` |テキスト内の `_` または `^` または数学コマンド |
| `未定義の制御シーケンス` |タイプミスまたはパッケージの欠落 |
| `ファイルが見つかりません` |入力または画像のパス/拡張子が間違っています |
|参考文献 print `??` |別のコンパイル パスが必要です。
|引用文 `[?]` |間違ったキー、間違ったバックエンド、またはゼッケンパスがない |
|空の参考文献 |間違った `\bibliography` パスまたは参考資料の不一致 |
| `\hbox がいっぱいです` |改行不可能な行 (URL、長い数学、ハイフンなし) |
|非常停止 | `\end{document}` がありません、不正なインクルード、暴走中括弧 |
|暴走議論 | `}` または `\end{...}` がありません |

## パッケージのロード順序 (経験則)

1. まずはクラスオプション
2. エンコーディング/フォント
3. ジオメトリ、セットスペース、言語
4. 数学、グラフィックス、表
5. ドメインパッケージ
6. 終わり近くの「hyperref」
7. `hyperref` の後の `cleveref`

## Oleafly Learn の役立つリンク

|トラック |開始 |
| --- | --- |
|ループを開く | [最初の PDF](/learn/first-document/) |
|方程式クラフト | [数学モード](/learn/math-mode/) · [記号](/learn/math-symbols-cheatsheet/) |
|フロート | [テーブル](/learn/create-table/) · [画像](/learn/insert-images/) |
|引用 | [引用を追加](/learn/add-quotes/) |
|ログリテラシー | [未定義の制御シーケンス](/learn/未定義-制御シーケンス/) |
|ローカルスタジオ | [Oleafly ワークフロー](/learn/oleafly-workflow/) |
|ブラウザツール | [方程式](/tools/equation-preview/) · [表](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

フルマップ: [/learn/](/learn/)。