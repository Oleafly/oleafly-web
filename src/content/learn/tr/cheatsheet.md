---

title: "LaTeX hızlı referansı"
description: "İskelet, metin, matematik, kayan noktalar, alıntılar, düzen, motorlar, TikZ, Beamer ve yaygın günlük hataları için yoğun tek sayfalık kart."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX hızlı referansı

Bunu editörün yanında tutun. Her satır yapıştırmaya hazırdır. Daha uzun dersler için [Learn](/learn/) adresindeki eşleşen parçayı açın.

**Atlama:**
[İskelet](#belge-iskelet) ·
[Giriş](#giriş-desenleri) ·
[Metin](#metin ve biçimlendirme) ·
[Bölümler](#bölümlere ayırma ve yapı) ·
[Refler](#çapraz referanslar ve bağlantılar) ·
[Matematik](#matematik modu) ·
[Tablolar](#tablolar) ·
[Şekiller](#figürler-ve-kayanlar) ·
[Alıntılar](#alıntılar-ve-bibliyografya) ·
[Düzen](#düzen) ·
[Motorlar](#motorlar ve paketler) ·
[TikZ](#tikz-minimal) ·
[Işınlayıcı](#ışınlayıcı-minimal) ·
[Teoremler](#teoremler) ·
[Alanlar](#alan bitleri) ·
[Derleme](#derleme döngüsü) ·
[Hatalar](#log-errors-decode-the-first-one) ·
[Paket sırası](#package-load-order-rules-of-thumb)

## Belge iskeleti

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

| Sınıf | Tipik kullanım |
| --- | --- |
| 'makale' | Kağıtlar, notlar, ödevler |
| 'rapor' | Bölümlü daha uzun raporlar |
| 'kitap' | Kitaplar / birçok tez |
| 'ışınlayıcı' | Slaytlar |
| Üniversite `.cls` | Tez şablonları |

| Dosya | Rol |
| --- | --- |
| '.tex' | Kaynak |
| `.bib' | Kaynakça veritabanı |
| `.cls` / `.sty` | Sınıf / paket |
| `.aux` `.log` `.toc` | Oluşturuldu; düzenleme |

## Giriş kalıpları

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

'Hiperref'i geç yükle. 'Hiperref'ten sonra 'cleveref'i yükleyin.

## Metin ve biçimlendirme

| İstiyorum | Tür |
| --- | --- |
| Kalın / italik / tek renkli | `\textbf{}` `\textit{}` `\texttt{}` |
| Vurgu (yuvalar) | `\emph{}` |
| Küçük harfler | `\textsc{}` |
| Altı çizili (nadir) | `\altı çizili{}` |
| Boyutlar | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Yeni paragraf | boş satır |
| Satır sonu | `\\` veya `\yenisatır` |
| Bölünmeyen alan | `~` |
| Yatay alan | `\quad` `\qquad` `\hspace{1em}` |
| Dikey alan | `\vspace{1em}` `\bigskip` |
| Orta / düz | `merkez' / `hemyüz' ortamlar |
| Alıntı | 'alıntı' veya 'alıntı' |
| Dipnot | `\dipnot{...}` |
| Yorum | `% satırın geri kalanı` |

### Özellerden kaçış (metin modu)

| Karakter | Kod | Karakter | Kod |
| --- | --- | --- | --- |
| '%' | `\%` | '$' | `\$` |
| `&` | `\&` | '#' | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum' |
| `\` | `\textbackslash' | | |

### Listeler

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

Özel etiket: `\item[(a)] ...`

### Sayfa numaraları ve sonları

| İstiyorum | Tür |
| --- | --- |
| Stil | `\pagestyle{sade}` / `boş` / `süslü` |
| Yalnızca bu sayfa | `\thispagestyle{boş}` |
| Roma / Arapça | `\pagenumbering{roman}` sonra `arapça' |
| Yeni sayfa | `\yenisayfa` `\clearpage` |
| Yumuşak mola talebi | `\sayfa sonu[3]` |
| Birlikte kalın | `\nosayfa sonu` |

## Bölümleme ve yapı

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

| İstiyorum | Tür |
| --- | --- |
| İçindekiler | `\içindekiler tablosu` |
| Şekil/tablo listesi | `\listoffigures` `\listoftables` |
| Özet | `\begin{soyut}...\end{soyut}` |
| Ek | `\ek` sonra `\bölüm` / `\bölüm` |
| Çoklu dosya | `\include{bölümler/giriş}` veya `\input{...}` |
| Bir bölüm taslağı | `\includeonly{bölümler/yöntemler}` |

## Çapraz referanslar ve bağlantılar

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

Sayının doğru olması için `\label` **sonra** `\caption` yazın.

## Matematik modu

| İstiyorum | Tür |
| --- | --- |
| Satır içi | `$...$` veya `\( ... \)` |
| Numarasız göster | `\[ ... \]` |
| Numaralandırılmış ekran | `denklem` + `\etiket` |
| Çok satırlı hizalanmış | 'hizala' / 'hizala*' |
| Ortalanmış çok satırlı | `topla' / `topla*` |
| Bir sayı, birçok satır | 'denklem' + 'bölme' |
| Uzun kesikli çizgi | 'çok satırlı' |
| Bir numarayı bastır | `\etiket` veya `\sayı` |
| Referans | `\ref{eq:x}` veya `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Kesirler, kökler, kodlar

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Yunanca (matematik modu)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operatörler, ilişkiler, kümeler, oklar

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Aksanlar ve alfabeler

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Büyük operatörler ve hesaplama

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrisler

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Parçalı

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Sınırlayıcılar

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Canlı önizleme: [denklem aracı](/tools/equation-preview/).

## Tablolar

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

| İstiyorum | Tür |
| --- | --- |
| Sütunları hizala | `l` `c` `r` `p{3cm}` |
| Dikey kural (kaçının) | `|` |
| Açıklık sütunları | `\çok sütunlu{2}{c}{...}` |
| Satırları yay | `\çok satırlı{2}{*}{...}` (çok satırlı) |
| Çok sayfalı | 'uzun masa' |
| Görsel oluşturucu | [tablo oluşturucu](/tools/table-generator/) |

Tasarım alışkanlığı: üç yatay kural, dikey çizgi yok.

## Rakamlar ve kayan noktalar

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| İstiyorum | Tür |
| --- | --- |
| Genişlik | `width=0,5\textwidth` veya `width=\linewidth` |
| Yükseklik | `height=4cm` (mecbur kalmadıkça her ikisinden de kaçının) |
| PDF Sayfası | 'sayfa=2' seçeneği |
| Yan yana | iki "mini sayfa" 0,48\textwidth"te |
| Alt Şekiller | 'alt başlık' paketi |
| Yerleştirme | `[htbp]` (burada, üst, alt, sayfa) |
| Bariyer | `\usepackage{placeins}` + `\FloatBarrier` |

## Alıntılar ve kaynakça

### BibTeX (klasik)

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

### Minimum `.bib` girişi

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

Doğrula: [BibTeX doğrulayıcı](/tools/bibtex-validator/).

| Belirti | Düzelt |
| --- | --- |
| `[?]` veya `?` | Yanlış anahtar, eksik pas veya BibTeX ile Biber uyumsuzluğu |
| Boş kaynakça | Yol, arka uç veya `\cite' yok / yanlış yazdırma komutu |

## Düzen

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| İstiyorum | Tür |
| --- | --- |
| Tek seferlik girinti yok | `\nogirinti` |
| Manuel uzunluk | `\hspace{2em}` `\vspace{1ex}` |
| Birimler | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Motorlar ve paketler

| Motor | Şunun için iyi: |
| --- | --- |
| pdfLaTeX | Maksimum günlük uyumluluğu |
| XeLaTeX | Sistem yazı tipleri, birçok komut dosyası (`fontspec`) |
| LuaLaTeX | Modern Unicode + komut dosyası oluşturma |
| Tektonik | Paketlenmiş / isteğe bağlı paketler (Oleafly varsayılanı) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Eksik paket (TeX Live): "tlmgr install siunitx"

## Renk

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimum)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Değişmeli diyagramlar: "tikz-cd". Bağımsız dışa aktarma: `\documentclass[tikz]{bağımsız}`.

## Işınlayıcı (minimum)

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

## Teoremler

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

## Alan bitleri

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

## Döngüyü derle

1. `.tex`i düzenleyin
2. Motoru çalıştırın (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Alıntı yapılıyorsa: BibTeX veya Biber
4. `??` ve TOC yerleşene kadar motoru tekrar çalıştırın (genellikle iki kez)

Oleafly'de derleme (veya otomatik derleme) döngüyü yönetir; SyncTeX kaynak ve PDF arasında geçiş yapar.

## Hataları günlüğe kaydet (ilkinin kodunu çöz)

| Belirti | Olağan neden |
| --- | --- |
| Metin satırın ortasında kayboluyor | Bare `%` bir yorum başlattı |
| 'Eksik $ eklendi' | metinde `_` veya `^` veya matematik komutu |
| 'Tanımlanmamış kontrol sırası' | Yazım hatası veya eksik paket |
| 'Dosya bulunamadı' | Giriş veya görüntü için yanlış yol/uzantı |
| Referanslar yazdır `??` | Başka bir derleme geçişine ihtiyacınız var |
| Alıntılar `[?]` | Bozuk anahtar, yanlış arka uç veya eksik önlük geçişi |
| Boş kaynakça | Yanlış `\bibliyografya' yolu veya biblatex uyuşmazlığı |
| `\hbox` Aşırı Dolu` | Bölünemez satır (URL, uzun matematik, kısa çizgi yok) |
| Acil durdurma | Eksik `\end{document}`, hatalı ekleme, kaçak ayraç |
| Kaçak argüman | `}` veya `\end{...}` eksik |

## Paket yükleme sırası (temel kurallar)

1. Önce sınıf seçenekleri
2. Kodlama / yazı tipleri
3. Geometri, ayar alanı, dil
4. Matematik, grafikler, tablolar
5. Alan adı paketleri
6. 'hiperref' sona yaklaştı
7. 'hiperref'ten sonra 'zeki'

## Oleafly Learn'deki faydalı bağlantılar

| Parça | Başlat |
| --- | --- |
| Döngüyü aç | [İlk PDF](/learn/first-document/) |
| Denklem sanatı | [Matematik modu](/learn/math-mode/) · [Semboller](/learn/math-symbols-cheatsheet/) |
| Yüzen | [Tablolar](/learn/create-table/) · [Resimler](/learn/insert-images/) |
| Alıntılar | [Alıntı ekle](/learn/add-citations/) |
| Günlük okuryazarlığı | [Tanımlanmamış kontrol dizisi](/learn/untanımlanmaktadır-kontrol-sekansı/) |
| Yerel stüdyo | [Oleafly iş akışı](/learn/oleafly-workflow/) |
| Tarayıcı araçları | [Denklem](/tools/equation-preview/) · [Tablo](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Tam harita: [/learn/](/learn/).