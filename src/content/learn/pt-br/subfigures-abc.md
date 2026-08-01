---

title: "Painéis rotulados a, b, c"
description: "sublegenda para figuras de vários painéis sob uma legenda."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Painéis rotulados a, b, c

Os artigos precisam constantemente de figuras com vários painéis: a arquitetura no painel (a), a curva de treinamento em (b), uma ablação em (c), todas compartilhando um número de figura e uma legenda geral. A maneira limpa de construir isso é o pacote `subcaption`, que fornece um ambiente `subfigure` que lida com as letras (a), (b), legendas por painel e referências automaticamente.

## O padrão

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Aqui está o que cada peça faz. O ambiente externo `figure` é um float normal, e `[htbp]` lista os posicionamentos que o LaTeX pode tentar, em ordem: aqui no texto, no topo de uma página, na parte inferior de uma página ou em uma página flutuante dedicada. Cada `subfigura` é uma caixa com uma largura declarada, aqui `0,48\textwidth` (48 por cento da largura do texto). Dois painéis em 0,48 deixam uma pequena lacuna, e o `\hfill` entre eles se estende para que os painéis fiquem alinhados com as margens esquerda e direita. Dentro de cada painel, `width=\linewidth` dimensiona a imagem para a largura do painel, não para a página inteira. Esse último detalhe é aquele que as pessoas erram com mais frequência.

A `\caption` dentro de uma `subfigura` produz o pequeno rótulo de estilo "(a) First" abaixo desse painel. A `\caption` no final, dentro de `figure` mas fora de qualquer `subfigure`, é a legenda principal que carrega o número da figura. Mantenha cada `\label` imediatamente após sua `\caption`, porque uma etiqueta registra qualquer número que tenha sido emitido mais recentemente, conforme explicado em [legendas e rótulos](/learn/captions-labels/).

## Referenciando painéis

Com os rótulos acima, `\ref{fig:p}` imprime o número da figura, digamos 2, enquanto `\ref{fig:p-a}` imprime 2a. Se você quiser apenas a letra, `\subref{fig:p-a}` imprime apenas "a", útil para frases como "painéis (a) e (b)". Essa é a verdadeira recompensa de `sublegenda` em vez de digitar manualmente "(a)" nas imagens. As letras se renumeram quando você adiciona ou reordena os painéis, e todas as referências permanecem corretas.

## Linhas, espaçamento e um erro comum

Para um terceiro painel, reduza as larguras para cerca de `0,31\textwidth` e adicione outra `subfigura` com `\hfill` entre cada par, ou inicie uma nova linha deixando uma linha em branco entre as linhas de subfiguras. Uma linha em branco dentro de uma linha, entretanto, é o erro clássico: qualquer linha vazia entre dois ambientes de “subfiguras” inicia um novo parágrafo, que empilha os painéis verticalmente em vez de lado a lado. Se seus painéis se recusarem a ficar em uma linha, procure primeiro uma linha em branco perdida e lembre-se de que `%` no final de uma linha comenta o espaço invisível do final da linha que também pode empurrar um painel muito largo para caber.