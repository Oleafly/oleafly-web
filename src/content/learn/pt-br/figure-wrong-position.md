---

title: "A figura que foge da seção"
description: "Barreiras flutuantes, tamanho e localização de último recurso."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# A figura que foge da seção

Você coloca uma figura no final da Seção 4 e ela é impressa no meio da Seção 5, ou empilhada com outras três no final do capítulo. As figuras são flutuantes: o LaTeX trata sua posição na origem como um ponto de partida, não um destino, e as move para manter as páginas cheias. Os carros alegóricos também devem aparecer em ordem, de modo que uma figura que não possa ser colocada bloqueie todas as figuras atrás dela. O sistema geral de posicionamento é abordado em [onde os carros alegóricos realmente pousam](/learn/position-figures/). Esta lição é a escada de escalada para quando um carro alegórico termina em algum lugar que você não pode aceitar.

## Primeiro passo: verifique as opções de posicionamento

Certifique-se de que o ambiente diga `[htbp]`, e não apenas `[h]`. As cartas concedem permissão para colocar o flutuador aqui, no topo de uma página, na parte inferior ou em uma página flutuante dedicada. Conceder apenas `h` é a causa mais comum de uma figura descontrolada, porque quando a página atual não tem espaço, o LaTeX não tem lugar legal em nenhum lugar e carrega o float adiante indefinidamente.

## Etapa dois: mover o código

Um flutuador pode desviar depois de sua posição de origem, mas nunca antes. Se a figura aparecer tarde demais, mova o ambiente para cima na fonte, de preferência logo antes do parágrafo que contém seu primeiro `\ref`. Esta edição corrige uma parcela surpreendente de reclamações de posicionamento.

## Etapa três: cercar a seção

O pacote `placeins` fornece `\FloatBarrier`, um comando que força todos os carros alegóricos pendentes a serem colocados antes que o texto continue:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Coloque a barreira no final de uma seção e nenhuma figura dessa seção poderá vazar para a próxima. O LaTeX pode inserir espaço vertical extra para liberar os carros alegóricos, o que geralmente é um preço aceitável perto de uma quebra de seção.

## Etapa quatro: o martelo H

O pacote `float` adiciona um especificador `H` maiúsculo que remove totalmente a flutuação:

```latex
\usepackage{float}
\begin{figure}[H]
```

Uma figura `[H]` é impressa exatamente onde seu código está, como um parágrafo grande. O custo é que o LaTeX não consegue mais equilibrar a página ao seu redor, então você pode obter um grande espaço em branco quando a figura não couber no espaço restante. Trate isso como um último recurso para uma ou duas flutuações teimosas, e não como um default.

## Etapa cinco: diminuir a figura

Carros alegóricos muito grandes são adiados porque poucas páginas têm espaço para eles. Reduzir `width=0.9\textwidth` para `0.7\textwidth`, ou cortar espaços em branco do arquivo de imagem, muitas vezes permite que o LaTeX coloque uma figura que ele estava empurrando para o final do capítulo.

Um hábito que vale a pena manter: faça esse ajuste uma vez, depois que o texto estiver estável. Cada parágrafo que você adiciona ou exclui reorganiza as páginas, portanto, a cirurgia de posicionamento durante o rascunho é um esforço que você refaz.