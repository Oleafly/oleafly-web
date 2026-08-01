---

title: "Referência rápida do LaTeX"
description: "Cartão denso de uma página para esqueleto, texto, matemática, pontos flutuantes, citações, layout, mecanismos, TikZ, Beamer e erros de registro comuns."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# Referência rápida do LaTeX

Mantenha isso próximo ao editor. Cada linha está pronta para ser colada. Para aulas mais longas, abra o curso correspondente em [Aprenda](/learn/).

**Pular:**
[Esqueleto](#esqueleto-documento) ·
[Preâmbulo](#preâmbulo-padrões) ·
[Texto](#texto-e-formatação) ·
[Seções](#secção-e-estrutura) ·
[Refs](#referências-cruzadas-e-links) ·
[Matemática](#modomatemático) ·
[Mesas](#mesas) ·
[Figuras](#figuras-e-carros alegóricos) ·
[Citações](#citações-e-bibliografia) ·
[Layout](#layout) ·
[Motores](#motores-e-pacotes) ·
[TikZ](#tikz-mínimo) ·
[Beamer](#beamer-mínimo) ·
[Teoremas](#teoremas) ·
[Campos](#field-bits) ·
[Compilar](#compile-loop) ·
[Erros](#log-errors-decode-the-first-one) ·
[Pedido de pacote](#package-load-order-rules-of-thumb)

## Esqueleto do documento

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

| Classe | Uso típico |
| --- | --- |
| `artigo` | Artigos, notas, trabalhos de casa |
| `relatório` | Relatórios mais longos com capítulos |
| `livro` | Livros/muitas teses |
| `beamer` | Apresentações |
| Universidade `.cls` | Modelos de tese |

| Arquivo | Função |
| --- | --- |
| `.tex` | Fonte |
| `.bib` | Base de dados bibliográfica |
| `.cls` / `.sty` | Classe/pacote |
| `.aux` `.log` `.toc` | Gerado; não edite |

## Padrões de preâmbulo

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

Carregue `hyperref` tarde. Carregue `cleveref` após `hyperref`.

## Texto e formatação

| Quer | Tipo |
| --- | --- |
| Negrito/itálico/mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Ênfase (ninhos) | `\emph{}` |
| Versaletes | `\textsc{}` |
| Sublinhado (raro) | `\sublinhado{}` |
| Tamanhos | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| Novo parágrafo | linha em branco |
| Quebra de linha | `\\` ou `\nova linha` |
| Espaço inquebrável | `~` |
| Espaço horizontal | `\quad` `\qquad` `\hspace{1em}` |
| Espaço vertical | `\vspace{1em}` `\bigskip` |
| Centralizar/nivelar | Ambientes `center` / `flushright` |
| Citação | `citação` ou `citação` |
| Nota de rodapé | `\nota de rodapé{...}` |
| Comentário | `% resto da linha` |

### Escape especiais (modo texto)

| Caráter | Código | Caráter | Código |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbarra invertida` | | |

### Listas

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

Rótulo personalizado: `\item[(a)] ...`

### Números de páginas e quebras

| Quer | Tipo |
| --- | --- |
| Estilo | `\pagestyle{plain}` / `empty` / `fancy` |
| Somente esta página | `\thispagestyle{vazio}` |
| Romano / árabe | `\pagenumbering{roman}` então `árabe` |
| Nova página | `\newpage` `\clearpage` |
| Solicitação de pausa suave | `\pagebreak[3]` |
| Fiquem juntos | `\nopagebreak` |

## Seccionamento e estrutura

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

| Quer | Tipo |
| --- | --- |
| Índice | `\índice de conteúdo` |
| Lista de figuras/tabelas | `\listoffigures` `\listoftables` |
| Resumo | `\begin{resumo}...\end{resumo}` |
| Apêndice | `\apêndice` então `\seção` / `\chapter` |
| Vários arquivos | `\include{capítulos/introdução}` ou `\input{...}` |
| Rascunhe um capítulo | `\includeonly{capítulos/métodos}` |

## Referências cruzadas e links

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

Coloque `\label` **depois** `\caption` para que o número esteja correto.

## Modo matemático

| Quer | Tipo |
| --- | --- |
| Em linha | `$...$` ou `\( ... \)` |
| Exibir sem numeração | `\[ ... \]` |
| Display numerado | `equação` + `\rótulo` |
| Alinhado multilinha | `alinhar` / `alinhar*` |
| Multilinha centralizada | `reunir` / `reunir*` |
| Um número, muitas linhas | `equação` + `divisão` |
| Longa linha quebrada | `multilinha` |
| Suprimir um número | `\notag` ou `\nonumber` |
| Referência | `\ref{eq:x}` ou `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Frações, raízes, scripts

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Grego (modo matemático)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operadores, relações, conjuntos, setas

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Acentos e alfabetos

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Grandes operadores e cálculo

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrizes

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Por partes

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Delimitadores

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Visualização ao vivo: [ferramenta de equação](/tools/equation-preview/).

## Tabelas

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

| Quer | Tipo |
| --- | --- |
| Alinhar colunas | `l` `c` `r` `p{3cm}` |
| Regra vertical (evitar) | `|` |
| Colunas de vão | `\multicoluna{2}{c}{...}` |
| Linhas de extensão | `\multirow{2}{*}{...}` (multirow) |
| Várias páginas | `mesa longa` |
| Construtor visual | [gerador de tabela](/tools/table-generator/) |

Hábito de design: três regras horizontais, sem linhas verticais.

## Figuras e carros alegóricos

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Quer | Tipo |
| --- | --- |
| Largura | `largura=0,5\larguratexto` ou `largura=\larguralinha` |
| Altura | `height=4cm` (evite ambos, a menos que seja necessário) |
| Página do PDF | opção `página=2` |
| Lado a lado | duas `minipáginas em `0,48\textwidth` |
| Subfiguras | pacote `subcaption` |
| Colocação | `[htbp]` (aqui, superior, inferior, página) |
| Barreira | `\usepackage{placeins}` + `\FloatBarrier` |

## Citações e bibliografia

### BibTeX (clássico)

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

### Entrada mínima `.bib`

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

Validar: [validador BibTeX](/tools/bibtex-validator/).

| Sintoma | Correção |
| --- | --- |
| `[?]` ou `?` | Chave errada, passe faltando ou incompatibilidade entre BibTeX e Biber |
| Bibliografia vazia | Caminho, back-end ou nenhum comando de impressão `\cite`/errado |

##Layout

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Quer | Tipo |
| --- | --- |
| Único sem recuo | `\noindent` |
| Comprimento manual | `\hspace{2em}` `\vspace{1ex}` |
| Unidades | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Motores e pacotes

| Motor | Bom para |
| --- | --- |
| pdfLaTeX | Compatibilidade máxima do diário |
| XelaTeX | Fontes do sistema, muitos scripts (`fontspec`) |
| LuaLaTeX | Unicode moderno + scripts |
| Tectônico | Pacotes agrupados/sob demanda (padrão Oleafly) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Pacote ausente (TeX Live): `tlmgr install siunitx`

## Cor

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (mínimo)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Diagramas comutativos: `tikz-cd`. Exportação independente: `\documentclass[tikz]{autônomo}`.

## Beamer (mínimo)

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

## Teoremas

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

## Bits de campo

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

## Loop de compilação

1. Edite `.tex`
2. Execute o mecanismo (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. Se citações: BibTeX ou Biber
4. Ligue o motor novamente (geralmente duas vezes) até `??` e TOC se estabilizarem

No Oleafly, a compilação (ou compilação automática) trata do loop; SyncTeX salta entre a fonte e o PDF.

## Registrar erros (decodificar o primeiro)

| Sintoma | Causa habitual |
| --- | --- |
| O texto desaparece na linha média | Bare `%` iniciou um comentário |
| `Faltando $ inserido` | `_` ou `^` ou comando matemático em texto |
| `Sequência de controle indefinida` | Erro de digitação ou pacote ausente |
| `Arquivo não encontrado` | Caminho/extensão errado para entrada ou imagem |
| Referências imprimir `??` | Precisa de outra passagem de compilação |
| Citações `[?]` | Chave incorreta, back-end errado ou cartão de identificação ausente |
| Bibliografia vazia | Caminho `\bibliography` errado ou incompatibilidade de biblatex |
| `Sobrelotado \hbox` | Linha inquebrável (URL, matemática longa, sem hífen) |
| Parada de emergência | `\end{document}` ausente, inclusão incorreta, chave descontrolada |
| Argumento descontrolado | Falta `}` ou `\end{...}` |

## Ordem de carregamento do pacote (regras práticas)

1. Opções de aula primeiro
2. Codificação/fontes
3. Geometria, setspace, linguagem
4. Matemática, gráficos, tabelas
5. Pacotes de domínio
6. `hiperref` perto do final
7. `cleveref` depois de `hyperref`

## Links úteis no Oleafly Learn

| Acompanhar | Iniciar |
| --- | --- |
| Abra o ciclo | [Primeiro PDF](/learn/first-document/) |
| Equação artesanal | [Modo matemático](/learn/math-mode/) · [Símbolos](/learn/math-symbols-cheatsheet/) |
| Flutuadores | [Tabelas](/learn/create-table/) · [Imagens](/learn/insert-images/) |
| Citações | [Adicionar citações](/learn/add-citations/) |
| Alfabetização em registros | [Sequência de controle indefinida](/learn/undefined-control-sequence/) |
| Estúdio local | [Fluxo de trabalho do Oleafly](/learn/oleafly-workflow/) |
| Ferramentas do navegador | [Equação](/tools/equation-preview/) · [Tabela](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Mapa completo: [/learn/](/learn/).