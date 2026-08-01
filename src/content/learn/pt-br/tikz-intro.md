---

title: "Sua primeira foto do TikZ"
description: "Nós, arestas, um pipeline de três caixas que permanece vetorial."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Sua primeira foto do TikZ

TikZ é uma linguagem de desenho que reside dentro do seu documento LaTeX. Em vez de importar um diagrama exportado de outra ferramenta, você o descreve em texto e o compilador o desenha. A vantagem é que a saída são gráficos vetoriais usando as próprias fontes do documento, de modo que os rótulos correspondam exatamente ao texto ao redor e permaneçam nítidos em qualquer zoom. O custo é que você escreve coordenadas e opções em vez de arrastar caixas. Para diagramas construídos a partir de caixas e setas, a compensação geralmente vale a pena. Aqui está um pipeline de três caixas, a primeira imagem canônica:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Nós

Um nó é uma parte do conteúdo, geralmente texto, colocado em uma posição, opcionalmente com uma forma desenhada ao seu redor. Em `\node[draw, cantos arredondados] (a) {Input};` as opções entre colchetes dizem para desenhar a borda do nó e arredondar seus cantos, o `(a)` dá ao nó um nome ao qual você pode se referir mais tarde, e `{Input}` é o texto dentro. O segundo nó usa `right=of a`, da biblioteca `positioning`, que o coloca à direita do nó `a` na distância definida por `node distance=1.5cm` nas opções do ambiente. Coloque os nós uns em relação aos outros, em vez de em coordenadas absolutas, e todo o diagrama se ajusta quando um rótulo fica mais longo.

## Bordas

Uma aresta é uma linha que conecta dois pontos. Como os nós são nomeados, você os conecta pelo nome: `\draw (a) -- (b);` desenha uma linha reta do nó `a` ao nó `b`. TikZ inicia e termina a linha nas bordas dos nós, e não em seus centros. A opção `[-Latex]` define o estilo da ponta da seta da biblioteca `arrows.meta`, dando à linha uma ponta de seta sólida em seu destino. A dica se aplica uma vez por caminho, no seu final, por isso o exemplo utiliza dois comandos `\draw`. Um único caminho `(a) -- (b) -- (c)` colocaria uma ponta de seta apenas em `c`.

## Para onde ir em seguida

Envolva o `tikzpicture` em um ambiente `figure` quando precisar de uma legenda e um número, exatamente como uma imagem. O código TikZ não é renderizado nessas visualizações na página, então compile o snippet em um projeto para ver o resultado. No Oleafly, o Diagram Composer também pode produzir TikZ editável como ponto de partida. O erro mais comum para iniciantes é esquecer o ponto e vírgula que encerra cada comando TikZ, o que produz um erro longo e confuso. Quando um diagrama ultrapassar três caixas, continue com [nós e setas](/learn/tikz-nodes-arrows/) e [caixas de fluxograma alinhadas](/learn/tikz-flowchart/).