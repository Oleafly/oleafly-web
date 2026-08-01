---

title: "Caixas de fluxograma alinhadas"
description: "biblioteca de posicionamento para que as colunas compartilhem uma borda."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Caixas de fluxograma alinhadas

Um fluxograma parece amador exatamente por um motivo: caixas que quase se alinham. O TikZ evita o problema estruturalmente, porque cada caixa é colocada em relação a outra, de modo que uma coluna de caixas compartilha um eixo por construção, em vez de por observação. O segundo ingrediente é um estilo nomeado, portanto todas as caixas concordam quanto ao formato e tamanho mínimo. Aqui está um fluxo vertical de três etapas:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Definindo um estilo uma vez

A linha `box/.style={...}` cria um estilo reutilizável chamado `box`. Seu conteúdo são opções comuns de nó: `draw` dá uma borda ao nó, `cantos arredondados` suaviza-o, `align=center` centraliza o texto de múltiplas linhas dentro do nó e `largura mínima=2,8cm` força cada caixa a ter pelo menos essa largura para que rótulos curtos não se reduzam a caixas minúsculas. A partir daí, `\node[box]` aplica todo o conjunto. Quando você quiser uma cor de preenchimento ou uma largura maior, altere uma linha e todo o gráfico será atualizado. Esse é um diagrama que você mantém, não um que você redesenha.

## Espaçamento em duas direções

`node distance=10mm and 14mm` define as lacunas padrão usadas pela biblioteca `positioning`: o primeiro valor é a distância vertical, o segundo a horizontal. Com isso instalado, `below=of i` coloca a caixa de processo 10 mm abaixo da caixa de entrada, de ponta a ponta, e perfeitamente centralizada nela. Uma segunda coluna usaria `right=of p` e pousaria 14 mm na lateral. Como cada posicionamento se liga a um nó existente, inserir uma etapa significa adicionar um nó e atualizar uma referência `below=of`. Tudo a jusante muda com ele. Você também pode substituir a distância por nó, como em `below=15mm of i`.

## Conectando as etapas

Cada `\draw[-Latex] (i) -- (p);` desenha uma seta de um nó nomeado para o próximo, com `-Latex` selecionando uma ponta de seta sólida da biblioteca `arrows.meta` no final do destino. As setas se conectam automaticamente nas bordas dos nós. Para uma ramificação de decisão, desenhe âncoras específicas, por exemplo `(p.east)` para sair do lado direito, e roteie com curvas como `-- ++(2,0) |-` quando o gráfico precisar de cantos.

A saída do TikZ não é renderizada nessas visualizações na página, então compile o snippet para vê-lo. O erro clássico em fluxogramas é colocar algumas caixas com coordenadas absolutas “só desta vez”: essas caixas são as que ficam desalinhadas após a próxima edição. Mantenha cada posicionamento relativo e consulte [nós e setas](/learn/tikz-nodes-arrows/) para ver as opções de posicionamento subjacentes.