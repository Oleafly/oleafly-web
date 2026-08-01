---

title: "Nós e setas"
description: "Nós nomeados, posicionamento relativo, pontas de seta."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nós e setas

Quase todo diagrama TikZ se reduz a dois ingredientes. Um nó é uma parte de conteúdo posicionada, normalmente uma caixa ou círculo rotulado. Uma aresta é uma linha ou seta que conecta dois nós. Depois que você puder colocar nós e juntá-los, fluxogramas, pipelines e diagramas de blocos serão todos o mesmo exercício em tamanhos diferentes. O exemplo abaixo coloca duas caixas nomeadas e desenha uma seta rotulada entre elas:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Nomeando e posicionando nós

Em `\node[draw] (src) {Source};`, as opções de colchetes estilizam o nó, e `draw` significa desenhar sua borda, sem a qual você obterá texto flutuante. O `(src)` é o nome do nó e `{Source}` é o seu conteúdo. O nome é a parte importante: permite que outros comandos se refiram a este nó sem saber suas coordenadas.

O segundo nó mostra por que isso é importante. `right=2cm of src` vem da biblioteca `positioning` e coloca `dst` dois centímetros à direita de `src`, medido entre suas bordas. A biblioteca também fornece `left=of`, `above=of`, `below=of` e combinações diagonais como `above right=of`. Construa um diagrama desta forma (cada nó em relação a um existente) e o layout permanecerá intacto quando o texto mudar de tamanho. Coordenadas absolutas como `\node at (4,2)` ainda têm usos, mas um diagrama construído sobre elas precisa de renumeração manual toda vez que uma caixa cresce.

## Desenhando a seta

`\draw (src) -- (dst);` desenha uma linha reta entre os dois nós nomeados, e o TikZ inicia e termina automaticamente a linha nas bordas dos nós, e não em seus centros. A opção `[-{Latex}]` especifica as pontas das setas: nada antes do hífen significa sem ponta final, e `Latex` depois de selecionar uma ponta de seta sólida da biblioteca `arrows.meta` no destino. Escrever `{Latex}-{Latex}` daria uma seta de duas pontas.

O caminho intermediário `node[above] {edge}` é um rótulo anexado à própria linha. Um nó escrito dentro de um caminho é colocado naquele ponto do caminho, na metade do caminho por padrão, e `acima` o desloca logo acima da linha para que o texto não fique no traço. Esta é a forma padrão de anotar transições e fluxos de dados.

## Hábitos que compensam

Nomeie cada nó, mesmo em pequenos diagramas. Nós sem nome não podem ser conectados e diagramas pequenos raramente permanecem pequenos. Prefira o posicionamento relativo de `posicionamento` em vez de coordenadas absolutas pelo mesmo motivo. Cada instrução TikZ termina com ponto e vírgula. Omitir um é o erro mais comum do TikZ, e as mensagens geralmente apontam bem longe do problema real. Para organizar muitas caixas em linhas e colunas organizadas, continue com [caixas de fluxograma alinhadas](/learn/tikz-flowchart/).