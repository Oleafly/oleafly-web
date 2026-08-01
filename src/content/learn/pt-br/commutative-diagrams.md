---

title: "Diagramas comutativos"
description: "setas e rótulos tikz-cd sem sopa de coordenadas."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Diagramas comutativos

Um diagrama comutativo é uma grade de objetos unidos por setas rotuladas, a imagem padrão na teoria das categorias, álgebra e topologia. Raw TikZ pode desenhar um, mas colocar cada nó por coordenada é lento e frágil. O pacote `tikz-cd` envolve o TikZ em uma sintaxe semelhante a uma matriz: você organiza os objetos como uma tabela e descreve cada seta por sua direção.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Lendo a sintaxe

A grade funciona como uma matriz: `&` separa colunas e `\\` separa linhas, então este diagrama tem A e B na linha superior e C e D na parte inferior. Cada `\arrow[...]` pertence à célula em que está escrito e aponta para longe dela. A primeira opção é a direção, escrita com as letras `r`, `l`, `u` e `d`: `\arrow[r]` vai uma célula para a direita, `\arrow[d]` uma célula para baixo. As letras se combinam e se repetem para diagonais e trechos mais longos, então `rd` está um passo abaixo para a direita e `rr` abrange duas colunas.

Um rótulo entre aspas acompanha a seta. Por padrão, ele fica de lado; um primo após a citação de fechamento, como em `"g"'`, vira para o outro lado. No exemplo, os números primos mantêm todos os quatro rótulos do lado de fora do quadrado, que é o arranjo limpo usual.

## Mais opções de seta

Outras opções são empilhadas após a direção e o rótulo para alterar o estilo da seta. `hook` dobra a cauda em uma seta de inclusão, `duas cabeças` dobra a cabeça para uma sobrejeção, `tracejado` marca um mapa que você está afirmando em vez de assumir, e `Rightarrow` produz a seta de haste dupla usada para transformações naturais. Uma típica seta de propriedade universal diz `\arrow[rd, dashed, "\exists u"']`. Quando um diagrama parece apertado, as opções de espaçamento no ambiente ajudam, por exemplo `\begin{tikzcd}[column sep=large]`.

## Notas práticas

`tikz-cd` carrega o próprio TikZ, portanto nenhuma linha `\usepackage{tikz}` separada é necessária e os diagramas são compilados com um mecanismo padrão e nenhuma ferramenta de desenho externa. O erro estrutural mais comum é uma grade irregular: linhas com diferentes números de separadores `&` deslocam os objetos para as colunas erradas e as setas pousam em lugares estranhos. Comece a partir de um quadrado de trabalho como o acima, aumente-o uma linha ou coluna de cada vez e recompile conforme avança. Os diagramas são muito mais fáceis de depurar visualmente do que a partir da fonte, e o [live playground](/live/) fornece esse feedback enquanto você digita.