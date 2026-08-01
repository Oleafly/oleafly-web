---

title: "Árvores e gráficos simples"
description: "sintaxe filho e botões de espaçamento."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Árvores e gráficos simples

As hierarquias surgem constantemente: árvores de análise, árvores de decisão, layouts de arquivos, taxonomias. Desenhar uma caixa de cada vez com o “posicionamento” funciona, mas manter os irmãos distribuídos uniformemente e os níveis espaçados uniformemente à mão é entediante. A biblioteca TikZ `trees` permite que você descreva a própria hierarquia, usando operações `child` aninhadas, e calcule o layout para você:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Lendo a sintaxe filha

A imagem contém uma única afirmação. Ele começa com a raiz, `\node{A}`, e cada `child{...}` anexado a ele declara uma subárvore. Um filho geralmente contém um `nó{...}` para seu próprio rótulo e pode conter outras operações `filho`, que é como `C` obtém os filhos `D` e `E`. O aninhamento de chaves reflete o aninhamento da árvore, para que você possa ler a estrutura diretamente do recuo. TikZ coloca cada nível abaixo do anterior e desenha as arestas de conexão automaticamente. A instrução one termina com um único ponto e vírgula após a chave final. Um ponto-e-vírgula ausente ou extra dentro da estrutura é a causa comum de erros aqui.

## Os três botões de layout

As opções na parte superior controlam a aparência e o espaçamento. `every node/.style={draw, círculo, tamanho mínimo=7mm}` aplica um estilo a todos os nós de uma vez: cada um obtém uma borda desenhada, uma forma circular e um diâmetro mínimo de 7 mm para que letras únicas produzam círculos uniformes. `level distance=12mm` define a lacuna vertical entre um pai e seus filhos. `distância do irmão = 18 mm` define a lacuna horizontal entre filhos adjacentes do mesmo pai.

A distância entre irmãos é o botão que você mais ajustará. A biblioteca `trees` reserva a mesma largura para cada subárvore em um determinado nível, então subárvores largas podem colidir se o valor for muito pequeno. A solução padrão é ampliar o espaçamento próximo ao topo, onde as subárvores são mais amplas, com configurações por nível, como `level 1/.style={sibling distance=36mm}` e `level 2/.style={sibling distance=18mm}`. Se seus rótulos diferem muito em largura, mude de círculos para retângulos removendo `círculo` do estilo compartilhado.

## Além de pequenas árvores

As bordas escolhem o estilo por meio de `edge from parent/.style`, por exemplo, para adicionar pontas de seta ou linhas mais grossas. Para árvores além de aproximadamente uma dúzia de nós, ou para gráficos gerais com ciclos, a biblioteca de `árvores` torna-se limitante. O pacote `forest` lida com árvores de grande porte com empacotamento automático. A biblioteca `graphs` com os algoritmos `graphdrawing` cobre gráficos arbitrários, embora esse caminho exija LuaLaTeX. O TikZ não é renderizado nessas visualizações na página, então compile o exemplo para ver o layout. Comece com o básico em [sua primeira imagem do TikZ](/learn/tikz-intro/) se esta sintaxe for nova.