---

title: "Figuras, tabelas e comparações carregam o papel"
description: "Legendas para viagem, tabelas de comparação, gráficos versus tabelas e consistência visual."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Figuras, tabelas e comparações carregam o papel

Veja como um revisor ocupado realmente lê seu artigo: resumo, depois folheando cada figura e tabela, e talvez o texto. Se seus recursos visuais contam a história por si próprios, você ganhou metade da revisão antes que um único parágrafo fosse lido. Projete-os como se fossem o papel. Para muitos leitores, eles são.

## Cada figura precisa de uma legenda para levar

Uma legenda que diz “Resultados no conjunto de dados A” desperdiça o espaço mais valioso do jornal. Uma legenda que diz "Nosso método (azul) corresponde à linha de base pela metade do custo; a lacuna aumenta com o tamanho do modelo" informa ao revisor exatamente o que concluir. Escreva legendas como afirmações e deixe a figura prová-las. O leitor deve ser capaz de ler apenas as legendas e reconstruir o argumento. A mecânica de legendas e numeração está disponível em [legendas e rótulos](/learn/captions-labels/).

## Tabelas de comparação: as favoritas do revisor

Dois padrões de tabela dominam os artigos empíricos:

**A tabela de linhas de base.** Seu método em relação ao trabalho anterior, uma linha cada, melhores números em negrito. Inclua as linhas de base óbvias mesmo quando eles perdem feio. Omitir uma linha de base bem conhecida significa esconder algo.

**A matriz de marca de seleção.** Capacidades na lateral, métodos na parte superior, marcas de seleção onde um método possui a propriedade. Ele posiciona seu trabalho de uma só vez:

| Capacidade | Anterior A | Anterior B | Nosso |
|---|---|---|---|
| Não é necessária reciclagem | sim | não | sim |
| Funciona em escala | não | sim | sim |
| Código aberto | não | não | sim |

Seja honesto. Os revisores conhecem o truque de escolher as linhas que seu método vence.

## Parcela ou mesa?

Use um gráfico quando a forma for a mensagem: uma tendência, um cruzamento, uma curva de escala. Use uma tabela quando a mensagem for os números exatos: pontuações de benchmark com as quais todos irão comparar. Na dúvida, pergunte o que o leitor fará com isso. Se citarem o número, tabela. Se eles descreverem a tendência, trace.

## Consistência é credibilidade

Pequenas inconsistências visuais sinalizam silenciosamente descuido:

- Mesma família e tamanho de fonte em todas as figuras, próximo ao tamanho do corpo do texto após o dimensionamento.
- Mesma cor para o mesmo método em todas as parcelas. Se o seu método estiver azul na Figura 2, ele estará azul em todos os lugares.
- Convenções e unidades de rótulos dos mesmos eixos.
- Legível no tamanho impresso. Se você precisar ampliar para ler um rótulo de marca, ele é muito pequeno.

Exporte formatos vetoriais (PDF, SVG) em vez de capturas de tela sempre que possível. Gráficos de bitmap com texto difuso são a maneira mais rápida de parecer pouco polido.

## Construindo-os em LaTeX

O posicionamento, o dimensionamento e a organização do sistema flutuante são abordados em [inserção de imagens](/learn/insert-images/) e a limpeza de tabelas em [criação de tabelas](/learn/create-table/). Para diagramas, esboços de arquitetura e fluxogramas, o TikZ produz gráficos vetoriais que correspondem exatamente às fontes do seu documento. Comece com [a introdução do TikZ](/learn/tikz-intro/). Se escrever TikZ à mão parece lento, o Diagram Composer do Oleafly pode ajudar a esboçar visualmente figuras de TikZ que você pode refinar no código.

## A auditoria de cinco minutos

Antes de enviar, faça o revisor se virar: leia apenas as legendas, na ordem. Eles contam a história toda? Há algo em negrito, colorido ou estrelado sem explicação? Um estranho saberia qual método é o seu em cada figura? Corrija o que falha e depois envie.