---

title: "Dê ao modelo sua tabela de símbolos"
description: "Macros e uma pequena lista de notações para que as variáveis ​​permaneçam estáveis."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Dê ao modelo sua tabela de símbolos

Peça a um modelo para redigir ou revisar um texto matemático e a prosa geralmente volta bem enquanto a notação varia. Seu vetor `\vect{x}` retorna como `\mathbf{x}` em um parágrafo e `\vec{x}` em outro. A expectativa que você escreve como `\E[X]` retorna como `\mathbb{E}(X)`. Cada variante é compilada, então não há erros. A inconsistência só aparece quando o leitor percebe o mesmo objeto escrito de três maneiras diferentes. O modelo viu todas as convenções de notação existentes e, sem instruções, amostras de todas elas. Entregue-o explicitamente.

## Macros tornam a notação aplicável

A base é independente da IA ​​e vale a pena ser feita de qualquer maneira: rotear cada símbolo recorrente através de uma macro, de modo que a fonte diga `\vect{x}` em vez de `\boldsymbol{x}` bruto. Isso dá um nome a cada conceito, permite remodelar todo o artigo editando uma definição e dá ao modelo um pequeno vocabulário para seguir em vez de inventar variantes. A definição de macros é abordada em [Comandos personalizados](/learn/custom-commands/).

## O que colar no prompt

Junto com sua solicitação real, inclua um bloco de notação compacto: as definições de macro mais um comentário por linha dizendo para que serve cada uma.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Em seguida, declare a restrição diretamente: "Use apenas essas macros para esses conceitos. Não introduza nova notação para nada listado e, se precisar de um símbolo que não esteja listado, diga-o em vez de inventar um." Os modelos seguem instruções concretas e verificáveis ​​muito melhor do que um vago "combina com meu estilo". Para um artigo completo, mantenha o bloco como um breve comentário próximo ao preâmbulo para que permaneça atualizado e pronto para ser colado.

## Verifique mecanicamente

A camada macro torna a verificação barata. Se todo vetor deve ser `\vect{...}`, qualquer `\mathbf{` ou `\vec{` bruto na saída do modelo é uma violação que você pode encontrar com uma pesquisa de texto em vez de reler a matemática. Execute essa pesquisa sobre qualquer coisa que você colar, corrija os retardatários e a notação permanecerá uniforme, não importa quantas edições assistidas por modelo cheguem ao papel.

## Dentro do Oleafly

O [assistente no Oleafly](/learn/oleafly-ai/) lê os arquivos do projeto, incluindo o preâmbulo onde suas macros ficam, então ele geralmente pega comandos definidos sem ser avisado. A instrução explícita ainda ajuda: ver que uma macro existe é mais fraco do que saber que ela é obrigatória. Adicione uma linha à sua solicitação ("use as macros de notação do preâmbulo") e revise a diferença vermelho/verde antes que as alterações ocorram. Isso mantém a deriva fora da fonte.