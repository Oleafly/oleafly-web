---

title: "LaTeX 빠른 참조"
description: "스켈레톤, 텍스트, 수학, 부동 소수점, 인용, 레이아웃, 엔진, TikZ, Beamer 및 일반 로그 오류에 대한 빽빽한 한 페이지짜리 카드입니다."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX 빠른 참조

편집자 옆에 보관하세요. 모든 행을 붙여넣을 수 있습니다. 더 긴 강의를 원하시면 [Learn](/learn/)에서 일치하는 트랙을 여세요.

**점프:**
[스켈레톤](#document-skeleton) ·
[서문](#preamble-patterns) ·
[텍스트](#text-and-formatting) ·
[섹션](#sectioning-and-structure) ·
[참조](#cross-references-and-links) ·
[수학](#math-mode) ·
[테이블](#테이블) ·
[피규어](#Figures-and-floats) ·
[인용](#citations-and-bibliography) ·
[레이아웃](#layout) ·
[엔진](#engines-and-packages) ·
[TikZ](#tikz-최소) ·
[비머](#beamer-minimal) ·
[정리](#theorems) ·
[필드](#field-bits) ·
[컴파일](#compile-loop) ·
[오류](#log-errors-decode-the-first-one) ·
[패키지 순서](#package-load-order-rule-of-thumb)

## 문서 뼈대

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

| 수업 | 일반적인 용도 |
| --- | --- |
| `기사` | 논문, 메모, 숙제 |
| '보고' | 장으로 구성된 더 긴 보고서 |
| '책' | 저서/다수논문 |
| '비머' | 슬라이드 |
| 대학 `.cls` | 논문 템플릿 |

| 파일 | 역할 |
| --- | --- |
| `.tex` | 소스 |
| `.bib` | 참고문헌 데이터베이스 |
| `.cls` / `.sty` | 클래스/패키지 |
| `.aux` `.log` `.toc` | 생성됨; 편집하지 마세요 |

## 프리앰블 패턴

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

`hyperref`를 늦게 로드하세요. `hyperref` 다음에 `cleveref`를 로드하세요.

## 텍스트 및 서식 지정

| 원하는 | 유형 |
| --- | --- |
| 볼드체 / 이탤릭체 / 모노 | `\textbf{}` `\textit{}` `\texttt{}` |
| 강조(둥지) | ``\emph{}` |
| 작은 대문자 | ``\textsc{}` |
| 밑줄(드물게) | `\밑줄{}` |
| 크기 | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| 새 단락 | 빈 줄 |
| 줄 바꿈 | `\\` 또는 `\newline` |
| 중단되지 않는 공백 | ``~`` |
| 수평 공간 | `\quad` `\qquad` `\hspace{1em}` |
| 수직 공간 | `\vspace{1em}` `\bigskip` |
| 센터 / 플러시 | `center` / `flushright` 환경 |
| 견적 | '인용문' 또는 '인용문' |
| 각주 | `\각주{...}` |
| 댓글 | `% 나머지 줄` |

### 이스케이프 스페셜(텍스트 모드)

| 숯 | 코드 | 숯 | 코드 |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| ``~`` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### 목록

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

사용자 정의 라벨: `\item[(a)] ...`

### 페이지 번호 및 나누기

| 원하는 | 유형 |
| --- | --- |
| 스타일 | `\pagestyle{plain}` / `empty` / `fancy` |
| 이 페이지만 | `\thispagestyle{비어 있음}` |
| 로마자/아랍어 | `\pagenumbering{roman}` 다음 `아랍어` |
| 새 페이지 | `\newpage` `\clearpage` |
| 소프트 브레이크 요청 | ``\pagebreak[3]` |
| 함께 | `\nopagebreak` |

## 섹션화 및 구조

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

| 원하는 | 유형 |
| --- | --- |
| 목차 | `\목차` |
| 그림/표 목록 | `\listofFigures` `\listoftables` |
| 초록 | `\begin{추상}...\end{추상}` |
| 부록 | `\appendix` 다음 `\section` / `\chapter` |
| 다중 파일 | `\include{chapters/intro}` 또는 `\input{...}` |
| 한 장 초안 | `\includeonly{장/메소드}` |

## 상호 참조 및 링크

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

숫자가 정확하도록 `\caption` 뒤에 `\label` **을** 입력하세요.

## 수학 모드

| 원하는 | 유형 |
| --- | --- |
| 인라인 | `$...$` 또는 `\( ... \)` |
| 번호 없이 표시 | `\[ ... \]` |
| 번호 표시 | `방정식` + `\label` |
| 여러 줄 정렬 | `정렬` / `정렬*` |
| 중앙에 여러 줄 | `수집` / `수집*` |
| 하나의 숫자, 많은 줄 | `방정식` + `분할` |
| 긴 파선 | `여러 줄` |
| 하나의 숫자 억제 | `\notag` 또는 `\nonumber` |
| 참고자료 | `\ref{eq:x}` 또는 `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### 분수, 근, 스크립트

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### 그리스어(수학 모드)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### 연산자, 관계, 집합, 화살표

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### 악센트 및 알파벳

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### 대연산자와 미적분학

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### 행렬

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### 조각별

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### 구분 기호

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

실시간 미리보기: [수식 도구](/tools/equation-preview/).

## 테이블

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

| 원하는 | 유형 |
| --- | --- |
| 열 정렬 | `l` `c` `r` `p{3cm}` |
| 세로줄(기피) | ``|` |
| 스팬 열 | ``다열{2}{c}{...}` |
| 스팬 행 | `\multirow{2}{*}{...}`(다중 행) |
| 다중 페이지 | '롱테이블' |
| 비주얼 빌더 | [테이블 생성기](/tools/table-generator/) |

디자인 습관: 세 개의 수평 규칙, 수직선 없음.

## 피규어와 플로트

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| 원하는 | 유형 |
| --- | --- |
| 폭 | `width=0.5\textwidth` 또는 `width=\linewidth` |
| 신장 | `height=4cm`(꼭 필요한 경우가 아니면 둘 다 피하십시오) |
| PDF 페이지 | `page=2` 옵션 |
| 나란히 | `0.48\textwidth`에 두 개의 `미니페이지` |
| 하위 그림 | `하위 캡션` 패키지 |
| 배치 | `[htbp]`(여기, 상단, 하단, 페이지) |
| 장벽 | `\usepackage{placeins}` + `\FloatBarrier` |

## 인용 및 참고문헌

### BibTeX(클래식)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### 비블라텍스 + 비버

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### 낫비브

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### 최소 `.bib` 항목

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

유효성 검사: [BibTeX 유효성 검사기](/tools/bibtex-validator/).

| 증상 | 수정 |
| --- | --- |
| `[?]` 또는 `?` | 잘못된 키, 누락된 패스 또는 BibTeX와 Biber 불일치 |
| 빈 참고문헌 | 경로, 백엔드 또는 `\cite` 없음/잘못된 인쇄 명령 |

## 레이아웃

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| 원하는 | 유형 |
| --- | --- |
| 일회성 들여쓰기 없음 | `\noindent` |
| 수동 길이 | ``\hspace{2em}` `\vspace{1ex}` |
| 단위 | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## 엔진 및 패키지

| 엔진 | 다음에 좋습니다 |
| --- | --- |
| pdfLaTeX | 최대 저널 호환성 |
| XeLaTeX | 시스템 글꼴, 많은 스크립트(`fontspec`) |
| 루아라텍스 | 최신 유니코드 + 스크립팅 |
| 지각 | 번들/주문형 패키지(Oleafly 기본값) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

누락된 패키지(TeX Live): `tlmgr install siunitx`

## 색상

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (최소)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

교환 다이어그램: `tikz-cd`. 독립형 내보내기: `\documentclass[tikz]{standalone}`.

## 비머(최소)

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

## 정리

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

## 필드 비트

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

## 컴파일 루프

1. `.tex` 편집
2. 엔진 실행(pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. 인용하는 경우: BibTeX 또는 Biber
4. `??` 및 TOC가 안정화될 때까지 엔진을 다시 작동합니다(종종 두 번).

Oleafly에서는 컴파일(또는 자동 컴파일)이 루프를 처리합니다. SyncTeX는 소스와 PDF 사이를 이동합니다.

## 오류 기록(첫 번째 오류 디코딩)

| 증상 | 일반적인 원인 |
| --- | --- |
| 텍스트가 중간선에서 사라집니다 | Bare `%`가 댓글을 시작했습니다 |
| `누락된 $ 삽입됨` | 텍스트의 `_` 또는 `^` 또는 수학 명령 |
| `정의되지 않은 제어 시퀀스` | 오타 또는 누락된 패키지 |
| `파일을 찾을 수 없습니다` | 입력 또는 이미지의 잘못된 경로/확장자 |
| 참조 인쇄 `??` | 또 다른 컴파일 패스가 필요합니다 |
| 인용 `[?]` | 잘못된 키, 잘못된 백엔드 또는 누락된 턱받이 패스 |
| 빈 참고문헌 | 잘못된 `\bibliography` 경로 또는 biblatex 불일치 |
| `오버풀 \hbox` | 깨지지 않는 줄(URL, 긴 수학, 하이픈 없음) |
| 비상정지 | `\end{document}` 누락, 잘못된 포함, 런어웨이 중괄호 |
| 폭주 논쟁 | `}` 또는 `\end{...}` 누락 |

## 패키지 로드 순서(경험 법칙)

1. 먼저 수업 옵션
2. 인코딩/글꼴
3. 기하학, 세트스페이스, 언어
4. 수학, 그래픽, 표
5. 도메인 패키지
6. 끝 부분의 `hyperref`
7. `hyperref` 뒤의 `cleveref`

## Oleafly Learn의 유용한 링크

| 트랙 | 시작 |
| --- | --- |
| 루프 열기 | [첫 번째 PDF](/learn/first-document/) |
| 방정식 공예 | [수학 모드](/learn/math-mode/) · [기호](/learn/math-symbols-cheatsheet/) |
| 수레 | [테이블](/learn/create-table/) · [이미지](/learn/insert-images/) |
| 인용 | [인용 추가](/learn/add-citations/) |
| 로그 활용 능력 | [정의되지 않은 제어 시퀀스](/learn/undefine-control-sequence/) |
| 지역 스튜디오 | [Oleafly 워크플로](/learn/oleafly-workflow/) |
| 브라우저 도구 | [수식](/tools/equation-preview/) · [테이블](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

전체 지도: [/learn/](/learn/).