---

title: "Forçar ou recusar uma quebra de página"
description: "newpage, clearpage, quebra de página suave, nopagebreak."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Forçar ou recusar uma quebra de página

LaTeX decide onde as páginas terminam. Na maioria das vezes, ele decide bem, mas às vezes você precisa anulá-lo: um título de seção fica preso na parte inferior de uma página, uma tabela chega uma linha tarde demais ou você deseja que cada capítulo de um relatório comece do zero. O LaTeX oferece um pequeno conjunto de comandos para isso, que vão desde uma ordem difícil até uma sugestão educada.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## As quebras difíceis

`\newpage` termina a página atual imediatamente e inicia uma nova. É a ferramenta mais contundente e a que você mais usará durante o desenho.

`\clearpage` faz a mesma coisa, mas primeiro libera todos os carros flutuantes pendentes. Figuras e tabelas em LaTeX são flutuantes: elas flutuam para onde quer que o algoritmo encontre espaço, às vezes páginas após o ponto onde você as escreveu. `\clearpage` força todos os itens flutuantes que foram enfileirados até agora na página antes de prosseguir, então é o comando certo no final de um capítulo ou antes de uma seção onde você não deseja nenhum retardatário. Se os números parecem se acumular no final do seu documento, uma `\clearpage` bem posicionada geralmente é a solução; veja [por que as figuras se movem](/learn/figure-wrong-position/) para a história completa.

`\cleardoublepage` vai um passo além em documentos frente e verso: depois de liberar os carros alegóricos, ele garante que a próxima página seja uma página à direita (ímpar), inserindo uma página em branco à esquerda, se necessário. Os capítulos de livros tradicionalmente abrem à direita, e a classe `book` chama isso para você a cada `\chapter`.

## Os pedidos suaves

`\pagebreak[n]` não comanda. Ele pergunta. O número opcional de 0 a 4 indica a intensidade: `\pagebreak[1]` significa "uma pausa aqui seria legal", `\pagebreak[4]` significa "uma pausa aqui, ponto final". Os valores intermediários permitem que o LaTeX avalie seu desejo em relação ao seu próprio julgamento de espaçamento, o que geralmente produz páginas com melhor aparência do que uma `\newpage` rígida, porque `\pagebreak` estica o conteúdo para preencher a página em vez de deixar um espaço.

`\nopagebreak` é a solicitação oposta: desencoraja uma pausa nesse ponto. É útil logo após um título ou antes de uma pequena lista que você deseja manter junto com sua introdução. Assim como `\pagebreak` ele aceita uma intensidade opcional de 0 a 4.

## Quando alcançá-los

O erro comum é espalhar `\newpage` em um rascunho para corrigir o layout e depois observar cada correção ficar errada à medida que o texto cresce. As quebras de página dependem de tudo o que está diante delas, portanto, uma quebra manual que parece perfeita hoje pode deixar uma página meio vazia após sua próxima revisão. O fluxo de trabalho sensato é escrever o documento inteiro primeiro e apenas adicionar quebras durante a passagem final, preferindo o `\pagebreak[3]` suave em vez de comandos rígidos sempre que a posição exata for negociável.