---

title: "LaTeX त्वरित संदर्भ"
description: "स्केलेटन, टेक्स्ट, गणित, फ्लोट्स, उद्धरण, लेआउट, इंजन, टिकज़, बीमर और सामान्य लॉग त्रुटियों के लिए सघन एक-पेज कार्ड।"
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX त्वरित संदर्भ

इसे संपादक के पास रखें. प्रत्येक पंक्ति पेस्ट-तैयार है. लंबे पाठों के लिए, [सीखें](/सीखें/) पर मिलान ट्रैक खोलें।

**कूदो:**
[कंकाल](#दस्तावेज़-कंकाल) ·
[प्रस्तावना](#प्रस्तावना-पैटर्न) ·
[पाठ](#पाठ-और-स्वरूपण) ·
[अनुभाग](#खंड-और-संरचना) ·
[संदर्भ](#क्रॉस-रेफरेंस-और-लिंक) ·
[गणित](#गणित-मोड) ·
[टेबल्स](#टेबल्स) ·
[आंकड़े](#आंकड़े-और-तैरते) ·
[उद्धरण](#उद्धरण-और-ग्रंथ सूची) ·
[लेआउट](#लेआउट) ·
[इंजन](#इंजन-और-पैकेज) ·
[TikZ](#tikz-न्यूनतम) ·
[बीमर](#बीमर-न्यूनतम) ·
[प्रमेय](#प्रमेय) ·
[फ़ील्ड्स](#फ़ील्ड-बिट्स) ·
[संकलन](#संकलन-लूप) ·
[त्रुटियां](#लॉग-त्रुटियां-डीकोड-पहला-एक) ·
[पैकेज ऑर्डर](#पैकेज-लोड-ऑर्डर-नियम-अंगूठे)

## दस्तावेज़ कंकाल

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

| क्लास | विशिष्ट उपयोग |
| --- | --- |
| `लेख` | कागजात, नोट्स, होमवर्क |
| 'रिपोर्ट' | अध्यायों के साथ लंबी रिपोर्ट |
| 'पुस्तक' | पुस्तकें/कई थीसिस |
| 'बीमर' | स्लाइड्स |
| विश्वविद्यालय `.cls` | थीसिस टेम्पलेट्स |

| फ़ाइल | भूमिका |
| --- | --- |
| `.tex` | स्रोत |
| `.बिब` | ग्रंथ सूची डेटाबेस |
| `.cls` / `.sty` | क्लास/पैकेज |
| `.aux` `.log` `.toc` | उत्पन्न; संपादित न करें |

## प्रस्तावना पैटर्न

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

`हाइपररेफ` देर से लोड करें। `हाइपररेफ` के बाद `क्लीवररेफ` लोड करें।

## टेक्स्ट और फ़ॉर्मेटिंग

| चाहते हैं | प्रकार |
| --- | --- |
| बोल्ड/इटैलिक/मोनो | `\textbf{}` `\textit{}` `\texttt{}` |
| जोर (घोंसला) | `\emph{}` |
| स्मॉल कैप | `\textsc{}` |
| रेखांकित (दुर्लभ) | `\अंडरलाइन{}` |
| आकार | `{\छोटा }` `{\बड़ा }` `{\बड़ा }` `{\फुटनोटसाइज }` |
| नया अनुच्छेद | रिक्त पंक्ति |
| लाइन ब्रेक | `\\` या `\newline` |
| न टूटने वाला स्थान | `~` |
| क्षैतिज स्थान | `\quad` `\qquad` `\hspace{1em}` |
| लंबवत स्थान | `\vspace{1em}` `\bigskip` |
| केंद्र/फ्लश | `केंद्र` / `फ्लशराइट` वातावरण |
| उद्धरण | `उद्धरण` या `उद्धरण` |
| फ़ुटनोट | `\फ़ुटनोट{...}` |
| टिप्पणी | `% शेष पंक्ति` |

### एस्केप स्पेशल (टेक्स्ट मोड)

| चार | कोड | चार | कोड |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### सूचियाँ

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

कस्टम लेबल: `\आइटम[(ए)] ...`

### पृष्ठ क्रमांक और विराम

| चाहते हैं | प्रकार |
| --- | --- |
| शैली | `\पेजस्टाइल{सादा}` / `खाली` / `फैंसी` |
| केवल यह पेज | `\यहपेजस्टाइल{खाली}` |
| रोमन/अरबी | `\पेजनंबरिंग{रोमन}` फिर `अरबी` |
| नया पेज | `\newpage` `\clearpage` |
| सॉफ्ट ब्रेक अनुरोध | `\पेजब्रेक[3]` |
| साथ रखो | `\नोपेजब्रेक` |

## अनुभागीकरण और संरचना

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

| चाहते हैं | प्रकार |
| --- | --- |
| टीओसी | `\tableofcontents` |
| आंकड़ों/सारणी की सूची | `\listoffigures` `\listoftables` |
| सार | `\शुरू{सार}...\अंत{सार}` |
| परिशिष्ट | `\परिशिष्ट` फिर `\अनुभाग` / `\अध्याय` |
| बहु-फ़ाइल | `\include{अध्याय/परिचय}` या `\input{...}` |
| एक अध्याय का मसौदा | `\केवल {अध्याय/विधियाँ} शामिल करें} |

## क्रॉस-रेफरेंस और लिंक

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

`\label` **बाद** `\caption` डालें ताकि संख्या सही हो।

## गणित विधा

| चाहते हैं | प्रकार |
| --- | --- |
| इनलाइन | `$...$` या `\( ... \)` |
| क्रमांकित प्रदर्शित करें | `\[ ... \]` |
| प्रदर्शन क्रमांकित | `समीकरण` + `\लेबल` |
| बहु-पंक्ति संरेखित | `संरेखित करें` / `संरेखित करें*` |
| केन्द्रित बहु-पंक्ति | `इकट्ठा करें` / `इकट्ठा करें*` |
| संख्या एक, पंक्तियाँ अनेक | `समीकरण` + `विभाजन` |
| लंबी टूटी लाइन | `मल्टीलाइन` |
| एक नंबर दबाओ | `\notag` या `\nonumber` |
| संदर्भ | `\ref{eq:x}` या `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### भिन्न, मूल, लिपि

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### ग्रीक (गणित मोड)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### संचालक, संबंध, सेट, तीर

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### उच्चारण और अक्षर

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### बड़े ऑपरेटर और कैलकुलस

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### मैट्रिक्स

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### टुकड़े-टुकड़े में

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### सीमांकक

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

लाइव पूर्वावलोकन: [समीकरण उपकरण](/उपकरण/समीकरण-पूर्वावलोकन/)।

## टेबल्स

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

| चाहते हैं | प्रकार |
| --- | --- |
| कॉलम संरेखित करें | `l` `c` `r` `p{3cm}` |
| लंबवत नियम (बचें) | `|` |
| स्पैन कॉलम | `\multicolumn{2}{c}{...}` |
| पंक्तियों का विस्तार | `\मल्टीपंक्ति{2}{*}{...}` (मल्टीपंक्ति) |
| बहु पृष्ठ | `लॉन्गटेबल` |
| विजुअल बिल्डर | [टेबल जेनरेटर](/टूल्स/टेबल-जनरेटर/) |

डिज़ाइन की आदत: तीन क्षैतिज नियम, कोई लंबवत रेखाएँ नहीं।

## आंकड़े और तैरते हुए

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| चाहते हैं | प्रकार |
| --- | --- |
| चौड़ाई | `width=0.5\textwidth` या `width=\linewidth` |
| ऊँचाई | `ऊँचाई=4सेमी` (जब तक ज़रूरी न हो दोनों से बचें) |
| पीडीएफ का पेज | `पेज=2` विकल्प |
| अगल-बगल | `0.48\textwidth` पर दो `मिनीपेज` |
| उपचित्र | `सबकैप्शन` पैकेज |
| प्लेसमेंट | `[htbp]` (यहां, ऊपर, नीचे, पेज) |
| बाधा | `\usepackage{placeins}` + `\FloatBarrier` |

## उद्धरण और ग्रंथ सूची

### BibTeX (क्लासिक)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### बाइबिलटेक्स + बाइबर

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### नटबीब

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### न्यूनतम `.बिब` प्रविष्टि

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

सत्यापित करें: [बिबटेक्स सत्यापनकर्ता](/टूल्स/बिबटेक्स-सत्यापनकर्ता/)।

| लक्षण | ठीक करें |
| --- | --- |
| `[?]` या `?` | ग़लत कुंजी, गुम पास, या BibTeX बनाम Biber बेमेल |
| खाली ग्रंथ सूची | पथ, बैकएंड, या कोई `\उद्धरण`/गलत प्रिंट कमांड नहीं |

## लेआउट

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| चाहते हैं | प्रकार |
| --- | --- |
| एकमुश्त कोई इंडेंट नहीं | `\noindent` |
| मैनुअल लंबाई | `\hspace{2em}` `\vspace{1ex}` |
| इकाइयाँ | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## इंजन और पैकेज

| इंजन | के लिए अच्छा है |
| --- | --- |
| पीडीएफएलएटीएक्स | मैक्स जर्नल अनुकूलता |
| ज़ेलाटेक्स | सिस्टम फ़ॉन्ट, कई स्क्रिप्ट (`फ़ॉन्टस्पेक`) |
| लुआलाटेक्स | आधुनिक यूनिकोड + स्क्रिप्टिंग |
| टेक्टोनिक | बंडल/ऑन-डिमांड पैकेज (ओलीफ़ली डिफ़ॉल्ट) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

गुम पैकेज (TeX Live): `tlmgr install siunitx`

## रंग

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## टिकज़ (न्यूनतम)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

क्रमविनिमेय आरेख: `tikz-cd`। स्टैंडअलोन निर्यात: `\documentclass[tikz]{स्टैंडअलोन}`।

## बीमर (न्यूनतम)

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

## प्रमेय

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

## फ़ील्ड बिट्स

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

## कंपाइल लूप

1. `.tex` संपादित करें
2. रन इंजन (pdfLaTeX / XeLaTeX / LuaLaTeX / टेक्टोनिक)
3. यदि उद्धरण: BibTeX या Biber
4. `??` और टीओसी व्यवस्थित होने तक इंजन को दोबारा (अक्सर दो बार) चलाएं

ओलेफ़ली में, कंपाइल (या ऑटो-कंपाइल) लूप को संभालता है; SyncTeX स्रोत और पीडीएफ के बीच कूदता है।

## लॉग त्रुटियाँ (पहले वाले को डिकोड करें)

| लक्षण | सामान्य कारण |
| --- | --- |
| पाठ मध्य पंक्ति में गायब हो जाता है | नंगे `%` ने एक टिप्पणी शुरू की |
| `लापता $ डाला गया` | `_` या `^` या पाठ में गणित कमांड |
| `अपरिभाषित नियंत्रण अनुक्रम` | टाइपो या गुम पैकेज |
| `फ़ाइल नहीं मिली` | इनपुट या छवि के लिए गलत पथ/एक्सटेंशन |
| सन्दर्भ प्रिंट `??` | एक और संकलन पास की आवश्यकता है |
| उद्धरण `[?]` | ख़राब कुंजी, ग़लत बैकएंड, या गुम बिब पास |
| खाली ग्रंथ सूची | गलत `\ग्रंथ सूची` पथ या बाइबिलटेक्स बेमेल |
| `ओवरफुल \hबॉक्स` | अटूट रेखा (यूआरएल, लंबा गणित, कोई हाइफ़न नहीं) |
| आपातकालीन रोक | गुम `\end{document}`, ख़राब शामिल, भगोड़ा ब्रेस |
| भगोड़ा तर्क | गुम `}` या `\end{...}` |

## पैकेज लोड ऑर्डर (सामान्य नियम)

1. कक्षा विकल्प पहले
2. एन्कोडिंग/फ़ॉन्ट
3. ज्यामिति, सेटस्पेस, भाषा
4. गणित, ग्राफिक्स, टेबल
5. डोमेन पैकेज
6. अंत के पास `हाइपररेफ़`
7. `हाइपररेफ` के बाद `क्लीवररेफ`

## ओलेफ़ली लर्न में उपयोगी लिंक

| ट्रैक | प्रारंभ |
| --- | --- |
| लूप खोलें | [पहला पीडीएफ](/सीखें/पहला-दस्तावेज़/) |
| समीकरण शिल्प | [गणित मोड](/सीखें/गणित-मोड/) · [प्रतीक](/सीखें/गणित-प्रतीक-चीटशीट/) |
| तैरता है | [टेबल्स](/सीखें/तालिका बनाएं/) · [छवियां](/सीखें/डालें-छवियां/) |
| उद्धरण | [उद्धरण जोड़ें](/सीखें/उद्धरण जोड़ें/) |
| लॉग साक्षरता | [अपरिभाषित नियंत्रण अनुक्रम](/सीखें/अपरिभाषित-नियंत्रण-अनुक्रम/) |
| स्थानीय स्टूडियो | [ओलीफ़्लाई वर्कफ़्लो](/सीखें/ओलीफ़्लाई-वर्कफ़्लो/) |
| ब्राउज़र उपकरण | [समीकरण](/उपकरण/समीकरण-पूर्वावलोकन/) · [तालिका](/उपकरण/तालिका-जनरेटर/) · [बिबटेक्स](/उपकरण/बिबटेक्स-सत्यापनकर्ता/) |

पूरा नक्शा: [/सीखें/](/सीखें/)।