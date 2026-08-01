---

title: "Cartazes em A0"
description: "tikzposter, beamerposter ou geometria mais TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# pôsteres em A0

Um pôster de conferência é uma página única, geralmente A0 ou A1, que deve ser legível a um metro e meio de distância. O LaTeX lida bem com o formato porque o autor da postagem pode reutilizar diretamente as equações, figuras e bibliografia do artigo. Porém, uma classe de documento normal não funcionará: fontes, margens e layout de colunas precisam de versões em escala de pôster. Três abordagens cobrem quase todos os pôsteres de LaTeX existentes.

## As três opções

A aula `tikzposter` é o caminho mais direto para um pôster acadêmico moderno. Ele organiza o conteúdo em blocos coloridos dispostos em colunas, fornece vários temas completos e lida com o tamanho grande do papel e as fontes em escala. Um esqueleto se parece com isto:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

As opções de classe definem uma fonte base de 25 pontos, papel A0 e orientação retrato. Cada `\column{0.5}` ocupa uma fração da largura do pôster e cada `\block{title}{content}` se torna um painel intitulado. Alterar `\usetheme` reestiliza cada bloco de uma vez.

O pacote `beamerposter` estende o Beamer para tamanhos de pôster, de modo que o tema, as cores e os ambientes de `bloco` de um deck são transferidos para um único quadro gigante. É a escolha natural quando o seu grupo já mantém os estilos do Beamer e muitos modelos de pôsteres universitários são criados com base nele.

A terceira opção é uma classe de documento simples com o pacote `geometry` configurando dimensões A0, mais TikZ para decoração. Isso dá controle total sobre cada milímetro e é como os pôsteres com design mais pesado são feitos, mas você mesmo constrói o andaime da coluna, portanto, reserve tempo real para isso.

## Conselhos práticos

Qualquer que seja o caminho escolhido, comece com um modelo funcional em vez de um arquivo em branco, por exemplo, um da [galeria](/templates/), e substitua o conteúdo bloco por bloco. Defina o tamanho e a orientação do papel no primeiro dia, pois alterá-los posteriormente quebra todas as larguras ajustadas manualmente. O corpo do texto deve ter cerca de 24 a 32 pontos depois de impresso; qualquer coisa abaixo de 20 pontos não será lida. Prefira figuras vetoriais. Um gráfico exportado para uma coluna de papel fica confuso quando dimensionado para a largura do pôster, portanto, regenere as figuras no tamanho do pôster em vez de esticá-las.

A falha mais comum é tratar o pôster como um papel comprimido. Planeje cerca de um terço da contagem de palavras do primeiro rascunho, deixe os números levarem o argumento e verifique o resultado imprimindo um bloco do PDF em A4 em escala real para avaliar o verdadeiro tamanho da fonte antes de enviar o arquivo para uma plotadora.