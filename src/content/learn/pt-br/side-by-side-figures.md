---

title: "Dois painéis em uma linha"
description: "minipáginas lado a lado sem guerra de pacotes."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Dois painéis em uma linha

Às vezes você quer duas imagens próximas uma da outra, cada uma com sua própria legenda e seu próprio número de figura. Você não precisa de um pacote especial para isso. Caixas simples de `minipáginas` dentro de um único ambiente de `figura` fazem o trabalho, e como ambas as imagens vivem em um espaço flutuante, o LaTeX nunca pode separá-las em páginas diferentes.

## O padrão

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

Uma `minipágina` é uma caixa que se comporta como uma página em miniatura: ela tem uma largura fixa que você escolhe e seu conteúdo é agrupado e empilhado dentro dessa largura. Aqui, cada minipágina ocupa `0,48\textwidth`, o que significa 48% da largura do texto. Isso deixa deliberadamente 4% não reclamados, e o `\hfill` entre as duas caixas é um espaço extensível que se expande para preenchê-lo, empurrando um painel para a margem esquerda e o outro para a direita. Se você definir ambas as larguras como `0,5\textwidth`, elas totalizarão exatamente a largura da linha, sem espaço para qualquer separação, e a segunda caixa cairá na próxima linha, que é o motivo mais comum para layouts lado a lado empilharem misteriosamente verticalmente.

Dentro de cada minipágina, `width=\linewidth` dimensiona a imagem para a largura da caixa ao redor, não para a página inteira. Usando `\textwidth` há um erro frequente que torna cada imagem tão larga quanto o bloco de texto completo, garantindo estouro.

Observe onde ficam as legendas: dentro de cada minipágina. Isso dá a cada painel uma legenda completa com seu próprio número, de modo que esta figura produz, digamos, a Figura 3 e a Figura 4 enfileiradas. As opções de posicionamento externo `[htbp]` dizem ao LaTeX que ele pode colocar o ponto flutuante aqui, no topo de uma página, na parte inferior ou em uma página flutuante, nessa ordem de preferência.

## Alinhando topos e misturando conteúdo

Se as duas imagens tiverem alturas diferentes, seu alinhamento vertical poderá parecer errado, porque as minipáginas são alinhadas em seus centros por padrão. Escreva `\begin{minipage}[t]{0.48\textwidth}` para alinhá-los no topo. As minipáginas também não se importam com o que elas contêm, então esse mesmo layout coloca uma figura ao lado de uma tabela, ou uma imagem ao lado de um parágrafo de texto explicativo, para o qual os pacotes no estilo subfigura não foram projetados.

## Quando usar subfiguras

A única coisa que esse padrão não pode oferecer são painéis rotulados (a) e (b) sob uma única legenda compartilhada e um único número de figura. No momento em que você quiser a "Figura 5(a)" em vez de duas figuras independentes, mude para [subfiguras](/learn/subfigures-abc/). Regra geral: as minipáginas são para figuras que são vizinhas, enquanto as subfiguras são para uma figura que contém partes.