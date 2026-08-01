---

title: "Tham khảo nhanh LaTeX"
description: "Thẻ một trang dày đặc dành cho khung, văn bản, toán học, số float, trích dẫn, bố cục, công cụ, TikZ, Beamer và các lỗi nhật ký phổ biến."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Tham khảo nhanh LaTeX

Giữ cái này bên cạnh trình soạn thảo. Mỗi hàng đã sẵn sàng để dán. Để có những bài học dài hơn, hãy mở bài hát phù hợp trên [Học](/learn/).

**Nhảy:**
[Bộ xương](#document-skeleton) ·
[Lời mở đầu](#preamble-patterns) ·
[Văn bản](#văn bản và định dạng) ·
[Phần](#phân đoạn và cấu trúc) ·
[Refs](#cross-references-and-links) ·
[Toán](#math-mode) ·
[Bảng](#bảng) ·
[Hình](#figures-and-float) ·
[Trích dẫn](#cites-and-bibliography) ·
[Bố cục](#layout) ·
[Động cơ](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Định lý](#định lý) ·
[Trường](#field-bit) ·
[Biên dịch](#compile-loop) ·
[Lỗi](#log-errors-decode-the-first-one) ·
[Thứ tự gói hàng](#package-load-order-rules-of-thumb)

## Khung tài liệu

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

| Lớp | Sử dụng điển hình |
| --- | --- |
| `bài viết` | Giấy tờ, ghi chú, bài tập về nhà |
| `báo cáo` | Báo cáo dài hơn với các chương |
| `sách` | Sách/nhiều luận văn |
| `máy chiếu` | Trang trình bày |
| Đại học `.cls` | Mẫu luận văn |

| Tập tin | Vai trò |
| --- | --- |
| `.tex` | Nguồn |
| `.bib` | Cơ sở dữ liệu thư mục |
| `.cls` / `.sty` | Lớp/gói |
| `.aux` `.log` `.toc` | Đã tạo; không chỉnh sửa |

## Mẫu mở đầu

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

Tải `hyperref` muộn. Tải `cleveref` sau `hyperref`.

## Văn bản và định dạng

| Muốn | Loại |
| --- | --- |
| In đậm / in nghiêng / đơn sắc | `\textbf{}` `\textit{}` `\texttt{}` |
| Nhấn mạnh (tổ) | `\emph{}` |
| Mũ nhỏ | `\textsc{}` |
| Gạch chân (hiếm) | `\gạch dưới{}` |
| Kích cỡ | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Đoạn mới | dòng trống |
| Ngắt dòng | `\\` hoặc `\dòng mới` |
| Không gian không phá vỡ | `~` |
| Không gian ngang | `\quad` `\qquad` `\hspace{1em}` |
| Không gian dọc | `\vspace{1em}` `\bigskip` |
| Trung tâm / tuôn ra | môi trường `center` / `flushright` |
| Trích dẫn | `trích dẫn` hoặc `trích dẫn` |
| Chú thích | `\chú thích cuối trang{...}` |
| Bình luận | `% phần còn lại của dòng` |

### Thoát đặc biệt (chế độ văn bản)

| Char | Mã | Char | Mã |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Danh sách

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

Nhãn tùy chỉnh: `\item[(a)] ...`

### Số trang và ngắt trang

| Muốn | Loại |
| --- | --- |
| Phong cách | `\pagestyle{plain}` / `empty` / `fancy` |
| Chỉ trang này | `\thispagestyle{empty}` |
| La Mã / Ả Rập | `\pagenumbering{roman}` rồi `arabic` |
| Trang mới | `\trang mới` `\clearpage` |
| Yêu cầu nghỉ mềm | `\pagebreak[3]` |
| Giữ nhau | `\nopagebreak` |

## Phân đoạn và cấu trúc

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

| Muốn | Loại |
| --- | --- |
| TOC | `\bảng nội dung` |
| Danh sách hình/bảng | `\listoffigures` `\listoftables` |
| Tóm tắt | `\begin{abstract}...\end{abstract}` |
| Phụ lục | `\appendix` rồi `\section` / `\chapter` |
| Nhiều tập tin | `\include{chương/phần giới thiệu}` hoặc `\input{...}` |
| Dự thảo một chương | `\includeonly{chương/phương thức}` |

## Tham khảo chéo và liên kết

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

Đặt `\label` **sau** `\caption` để số chính xác.

## Chế độ toán học

| Muốn | Loại |
| --- | --- |
| Nội tuyến | `$...$` hoặc `\( ... \)` |
| Hiển thị không đánh số | `\[ ... \]` |
| Hiển thị đánh số | `phương trình` + `\nhãn` |
| Căn chỉnh nhiều dòng | `căn chỉnh` / `căn chỉnh*` |
| Căn giữa nhiều dòng | `tập hợp` / `tập hợp*` |
| Một số, nhiều dòng | `phương trình` + `chia` |
| Đường gãy dài | `đa dòng` |
| Ngăn chặn một số | `\notag` hoặc `\nonumber` |
| Tham khảo | `\ref{eq:x}` hoặc `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Phân số, căn, chữ viết

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Tiếng Hy Lạp (chế độ toán học)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Toán tử, quan hệ, tập hợp, mũi tên

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Dấu và bảng chữ cái

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Toán tử lớn và phép tính

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Ma trận

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Từng phần

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Dấu phân cách

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Xem trước trực tiếp: [công cụ phương trình](/tools/equation-preview/).

## Bàn

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

| Muốn | Loại |
| --- | --- |
| Căn chỉnh cột | `l` `c` `r` `p{3cm}` |
| Quy tắc dọc (tránh) | `|` |
| Cột nhịp | `\multicolumn{2}{c}{...}` |
| Kéo dài hàng | `\multirow{2}{*}{...}` (multirow) |
| Nhiều trang | `bàn dài` |
| Trình tạo hình ảnh | [trình tạo bảng](/tools/table-generator/) |

Thói quen thiết kế: ba quy tắc ngang, không có đường dọc.

## Số liệu và phao

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Muốn | Loại |
| --- | --- |
| Chiều rộng | `width=0.5\textwidth` hoặc `width=\linewidth` |
| Chiều cao | `height=4cm` (tránh cả hai trừ khi bắt buộc) |
| Trang PDF | tùy chọn `trang=2` |
| Bên cạnh nhau | hai `trang nhỏ` ở mức `0,48\textwidth` |
| Cấu hình phụ | gói `phụ đề` |
| Vị trí | `[htbp]` (ở đây, trên, dưới, trang) |
| Rào cản | `\usepackage{placeins}` + `\FloatBarrier` |

## Trích dẫn và thư mục

### BibTeX (cổ điển)

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

### Mục nhập `.bib` tối thiểu

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

Xác thực: [Trình xác thực BibTeX](/tools/bibtex-validator/).

| Triệu chứng | Sửa chữa |
| --- | --- |
| `[?]` hoặc `?` | Sai khóa, thiếu pass hoặc BibTeX và Biber không khớp |
| Thư mục trống | Đường dẫn, backend hoặc không có `\cite`/lệnh in sai |

## Cách trình bày

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Muốn | Loại |
| --- | --- |
| Một lần không thụt lề | `\noindent` |
| Chiều dài thủ công | `\hspace{2em}` `\vspace{1ex}` |
| Đơn vị | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Động cơ và gói

| Động cơ | Tốt cho |
| --- | --- |
| pdfLaTeX | Khả năng tương thích tạp chí tối đa |
| XeLaTeX | Phông chữ hệ thống, nhiều tập lệnh (`fontspec`) |
| LuaLaTeX | Tập lệnh Unicode + hiện đại |
| Kiến tạo | Gói đi kèm/theo yêu cầu (Oleafly mặc định) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Thiếu gói (TeX Live): `tlmgr install siunitx`

## Màu sắc

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (tối thiểu)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Biểu đồ giao hoán: `tikz-cd`. Xuất độc lập: `\documentclass[tikz]{standalone}`.

## Beamer (tối thiểu)

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

## Định lý

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

## Bit trường

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

## Vòng lặp biên dịch

1. Chỉnh sửa `.tex`
2. Chạy công cụ (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Nếu trích dẫn: BibTeX hoặc Biber
4. Chạy lại động cơ (thường là hai lần) cho đến khi `??` và TOC ổn định

Trong Oleafly, trình biên dịch (hoặc tự động biên dịch) xử lý vòng lặp; SyncTeX nhảy giữa nguồn và PDF.

## Lỗi nhật ký (giải mã lỗi đầu tiên)

| Triệu chứng | Nguyên nhân thông thường |
| --- | --- |
| Văn bản biến mất ở giữa dòng | Trần `%` đã bắt đầu bình luận |
| `Thiếu $ được chèn vào` | `_` hoặc `^` hoặc lệnh toán học trong văn bản |
| `Trình tự điều khiển không xác định` | Lỗi đánh máy hoặc gói bị thiếu |
| `Không tìm thấy tệp` | Đường dẫn/phần mở rộng sai cho đầu vào hoặc hình ảnh |
| Tài liệu tham khảo in `??` | Cần một thẻ biên dịch khác |
| Trích dẫn `[?]` | Khóa sai, phụ trợ sai hoặc thiếu thẻ bib |
| Thư mục trống | Đường dẫn `\bibliography` sai hoặc biblatex không khớp |
| `Đầy đủ \hbox` | Dòng không thể ngắt (URL, phép toán dài, không có dấu gạch nối) |
| Dừng khẩn cấp | Thiếu `\end{document}`, bao gồm sai, dấu ngoặc nhọn |
| Lập luận bỏ chạy | Thiếu `}` hoặc `\end{...}` |

## Thứ tự tải gói hàng (quy tắc chung)

1. Lựa chọn lớp học đầu tiên
2. Mã hóa/phông chữ
3. Hình học, không gian cố định, ngôn ngữ
4. Toán, đồ họa, bảng biểu
5. Gói tên miền
6. `hyperref` ở gần cuối
7. `cleveref` sau `hyperref`

## Những liên kết hữu ích trong Oleafly Learn

| Theo dõi | Bắt đầu |
| --- | --- |
| Mở vòng lặp | [PDF đầu tiên](/learn/first-document/) |
| Phương trình thủ công | [Chế độ toán học](/learn/math-mode/) · [Ký hiệu](/learn/math-symbols-cheatsheet/) |
| Phao | [Bảng](/learn/create-table/) · [Hình ảnh](/learn/insert-images/) |
| Trích dẫn | [Thêm trích dẫn](/learn/add-cites/) |
| Đăng nhập kiến ​​thức | [Trình tự điều khiển không xác định](/learn/unknown-control-sequence/) |
| Studio địa phương | [Quy trình làm việc của Oleafly](/learn/oleafly-workflow/) |
| Công cụ trình duyệt | [Phương trình](/tools/equation-preview/) · [Bảng](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Bản đồ đầy đủ: [/learn/](/learn/).