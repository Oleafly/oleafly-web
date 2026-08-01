---

title: "Matrizes e matrizes"
description: "colunas pmatrix, bmatrix, vmatrix e matriz personalizada."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Matrizes e arrays

Uma matriz em LaTeX é uma grade de células: `&` separa as colunas, `\\` separa as linhas e um ambiente envolve a grade no par direito de delimitadores. Os ambientes de matriz vêm de `amsmath`, então esse pacote precisa estar em seu preâmbulo antes de qualquer um deles ser compilado.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Os ambientes matriciais

Todos os três compartilham o mesmo corpo. Apenas os delimitadores circundantes mudam. `pmatrix` envolve a grade entre parênteses, o estilo mais comum para matrizes e vetores. `bmatrix` usa colchetes e `vmatrix` usa barras verticais simples, a notação padrão para um determinante. Há também `matrix` simples sem delimitadores, `Bmatrix` com colchetes e `Vmatrix` com barras duplas para normas. Dentro, `a & b` preenche as duas colunas de uma linha, `\\` inicia a próxima linha e cada linha deve conter o mesmo número de separadores `&`.

Esses ambientes devem aparecer dentro do modo matemático. Envolva-os em `\[ ... \]` ou use-os dentro de uma equação. Para uma matriz pequena no meio de uma sentença, `smallmatrix`, também de `amsmath`, define uma versão compacta que não estica a linha: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Matriz personalizada

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Quando você precisa de controle por coluna, `array` é a ferramenta geral. Seu argumento obrigatório é uma especificação de coluna: aqui `r|cc` declara uma coluna alinhada à direita, uma regra vertical e depois duas colunas centralizadas. As letras de alinhamento são `l`, `c` e `r`, e `|` desenha uma regra entre colunas. `\hline` entre linhas desenha uma régua horizontal em toda a largura. `array` não desenha delimitadores externos próprios. Combine-o com `\left(` e `\right)` se desejar. É o irmão do modo matemático do ambiente `tabular` usado para tabelas em texto.

## Erros comuns

O erro "A guia de alinhamento extra foi alterada para \cr" significa que uma linha tem mais separadores `&` do que a contagem de colunas permite, o que geralmente remonta a um `\\` ausente no final da linha anterior. "Ambiente pmatrix indefinido" significa que `\usepackage{amsmath}` está faltando. Uma matriz colada fora do modo matemático falha com "Faltando $ inserido". Consulte [noções básicas do modo matemático](/learn/math-mode/) se os delimitadores forem novos. Comparar dois por dois em cada estilo de delimitador leva segundos no [playground ao vivo](/live/).