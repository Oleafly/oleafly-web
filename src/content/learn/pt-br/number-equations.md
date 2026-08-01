---

title: "Números e ponteiros para equações"
description: "label, ref, eqref e numerando apenas as linhas que você quer dizer."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Números e ponteiros para equações

Numerar uma equação é uma promessa de que você a consultará mais tarde. O LaTeX lida com as duas metades dessa promessa: o ambiente `equation` atribui o número, e o sistema de rótulos permite que você aponte para ele de qualquer lugar no documento sem precisar digitar o número você mesmo.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etiquetas e referências

`\begin{equation}` numera a linha exibida. `\label{eq:bayes}` anexa o nome `eq:bayes` a esse número. O nome é sua escolha, e um prefixo `eq:` mantém os rótulos das equações distintos das figuras e tabelas. Para citá-lo, `\ref{eq:bayes}` imprime o número simples, enquanto `\eqref{eq:bayes}`, de `amsmath`, coloca-o entre parênteses para corresponder a como o número aparece ao lado da equação. Prefira `\eqref` para equações para que os dois estilos concordem.

Como os números são registrados em uma passagem e lidos na próxima, uma nova compilação mostra `??` até a execução seguinte. [Pontos de interrogação em vez de números](/learn/equations-show-qq/) cobre esse ciclo.

Se uma equação exibida nunca for referenciada, não a numere. Use `\[ ... \]` ou a `equação*` com estrela, para que os números marquem apenas as linhas que o leitor possa precisar encontrar novamente.

## Numerando algumas linhas em alinhamento

Derivações multilinhas em `align` numeram cada linha por padrão, o que raramente é o que você deseja. Dois comandos ajustam isso por linha:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` suprime o número em sua linha, então aqui a etapa intermediária permanece sem numeração enquanto a primeira e a última linhas mantêm seus números e rótulos. Coloque cada `\label` na linha que ele nomeia, antes de `\\`, para que ele seja vinculado ao número correto. O atalho do tipo tudo ou nada é `align*`, que não numera nada. A família completa de ambientes multilinhas é abordada em [equações multilinhas que se alinham](/learn/align-equations/).

O erro comum é escrever o número literal, como em “ver Equação 3”, que quebra no momento em que você insere uma equação acima dele. Sempre passe por um rótulo e deixe o LaTeX renumerar em cada compilação. Você pode assistir a atualização da numeração ao vivo enquanto adiciona e remove `\notag` no [playground](/live/).