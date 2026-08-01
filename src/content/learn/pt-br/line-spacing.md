---

title: "Simples, meio, duplo"
description: "setspace para todo o documento ou um bloco local."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Simples, meio, duplo

Por padrão, o LaTeX define o texto com espaçamento simples, com a distância entre as linhas escolhida de acordo com a fonte. É assim que um livro acabado se parece, mas muitos documentos são necessários para serem mais flexíveis: os regulamentos de teses muitas vezes exigem espaçamento um e meio ou duplo, e os periódicos pedem manuscritos em espaço duplo para que os revisores tenham espaço para rabiscar. Altere o espaçamento entre linhas com o pacote `setspace`. Ele ajusta o corpo do texto sem quebrar as partes do documento que deveriam ficar com espaçamento simples.

## Espaçamento em todo o documento

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Carregue o pacote no preâmbulo e emita uma das três declarações. `\onehalfspacing` define todo o documento com espaçamento de linha e meio, `\doublespacing` duplica e `\singlespacing` retorna ao normal, o que é útil se você precisar voltar no meio do caminho. As declarações entram em vigor onde aparecem, portanto, colocar uma no preâmbulo cobre tudo.

A razão para usar setspace em vez de mexer com `\baselinestretch` ou `\linespread` à mão é o que ele deliberadamente deixa de lado: notas de rodapé, legendas de figuras e tabelas e flutuadores permanecem em espaçamento simples, que é exatamente o que as diretrizes de tese e a convenção tipográfica esperam. Um trecho global ingênuo também duplicaria o espaço nas suas notas de rodapé, e isso parece ruim.

Se você precisar de um fator que os atalhos não cobrem, `\setstretch{1.25}` aceita qualquer multiplicador. Observe que "espaçamento duplo" no sentido do processador de texto corresponde a um trecho de cerca de 1,66 em termos de LaTeX, e `\doublespacing` já é responsável por isso, então resista à tentação de escrever `\setstretch{2}` a menos que uma regulamentação literalmente exija isso.

## Espaçamento apenas para um bloco

Às vezes, apenas parte do documento precisa de espaçamento diferente: uma citação longa, uma página de declaração ou um resumo que deve ter espaço duplo, enquanto o restante não.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

O ambiente `\begin` e `\end` aplica o fator de extensão fornecido, aqui 1.2, apenas ao texto entre `\begin` e `\end`, e então restaura o que estava em vigor antes. O pacote também fornece ambientes `singlespace` e `doublespace` prontos para os casos comuns. Como a mudança tem como escopo o ambiente, você não pode esquecer de voltar, que é o modo de falha usual de emissão de declarações simples no meio do documento.

## Uma palavra de cautela

Não use espaçamento entre linhas para atingir a contagem de páginas. Esticar para 1.1 para fazer um papel parecer mais longo é o truque mais antigo do livro, e locais com formatação rigorosa executam verificações automatizadas para detectá-lo. O [guia sobre limite de páginas](/learn/page-limits-without-crimes/) abrange alternativas legítimas. Salve o setspace para a finalidade a que se destina: atender a um requisito de espaçamento explícito e, em seguida, voltar ao espaçamento simples para a versão pronta para câmera.