---

title: "Onde os carros alegóricos realmente pousam"
description: "htbp, por que forçado aqui muitas vezes falha, aproximando o ambiente do texto."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Onde os carros alegóricos realmente pousam

Figuras e tabelas em LaTeX são flutuantes, o que significa que a posição do código no seu código-fonte é uma sugestão, não uma instrução. O LaTeX se move para manter as páginas preenchidas uniformemente, para evitar páginas meio vazias e para respeitar os limites tipográficos, como a quantidade de imagens em uma página. Este é o maior choque cultural proveniente de um processador de texto, e compreender o sistema de posicionamento economiza horas de luta contra ele.

## O que significa htbp

Todo ambiente float recebe uma lista de argumentos opcional onde o LaTeX pode colocá-lo:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Cada letra é uma permissão. `h` permite o float "aqui", no ponto do texto onde o código aparece. `t` permite o topo de uma página, `b` permite o final de uma página e `p` permite uma página flutuante dedicada contendo apenas figuras e tabelas. O LaTeX os avalia aproximadamente nessa ordem para cada página que constrói, assumindo o primeiro posicionamento que satisfaça suas regras internas sobre espaçamento e equilíbrio de página. As letras concedem opções em vez de expressar desejos classificados, portanto, listar todas as quatro dá ao LaTeX mais espaço para colocar o flutuador em algum lugar próximo e sensato. Se você omitir totalmente o argumento, o padrão é `[tbp]`, sem `h`, e é por isso que uma figura simples salta frequentemente para o topo da próxima página.

## Por que forçar "aqui" sai pela culatra

Escrever `[h]` sozinho parece a solução óbvia, mas geralmente piora as coisas. Se o float não couber no espaço restante da página atual, e `h` for a única permissão que você concedeu, o LaTeX não poderá colocá-lo nesta página ou legalmente colocá-lo em qualquer outra. Então ele carrega o float adiante, página após página, esperando por um ponto que satisfaça `h`. Os carros alegóricos também devem permanecer em ordem, de modo que cada figura posterior fique na fila atrás da figura presa, e a pilha inteira frequentemente cai fora no final do capítulo. Adicionar um ponto de exclamação, como em `[h!]`, diz ao LaTeX para relaxar algumas de suas regras de espaçamento, mas não pode criar um espaço que não existe.

## Os hábitos que realmente funcionam

Primeiro, mantenha `[htbp]` como padrão e deixe de lado o posicionamento perfeito em pixels durante o rascunho, porque cada parágrafo que você adiciona ou exclui reorganiza as páginas de qualquer maneira. Segundo, coloque o ambiente figure no código-fonte próximo ao parágrafo que primeiro faz referência a ele, já que o LaTeX começa a procurar por um home a partir desse ponto e um float pode se mover mais tarde, mas nunca antes de seu código. Terceiro, escreva sua prosa referenciando as figuras por número, como na "Figura 3 mostra o pipeline", nunca "a figura abaixo", para que o texto permaneça correto onde quer que o carro alegórico pouse.

Se um flutuador ainda acabar em algum lugar inaceitável, existem ferramentas mais fortes, incluindo barreiras de flutuação e a colocação `[H]`, abordadas na [figura que foge da seção](/learn/figure-wrong-position/). Procure-os no final da redação, quando o texto estiver estável, e não durante a redação.