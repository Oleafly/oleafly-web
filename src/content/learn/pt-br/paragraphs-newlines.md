---

title: "Parágrafos, quebras e espaços vazios"
description: "Linhas em branco, quebras forçadas, vspace e comandos de espaçamento que vale a pena conhecer."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Parágrafos, quebras e espaços vazios

Em um processador de texto, você forma parágrafos pressionando Enter e observando as lacunas. O LaTeX funciona de maneira diferente: o texto fonte descreve a estrutura e o compilador decide o espaçamento. Depois de saber como o LaTeX inicia um parágrafo e como substituí-lo quando necessário, você evita as brigas de formatação que os iniciantes costumam ter com ele.

## Como funcionam os parágrafos

Uma linha em branco na sua fonte inicia um novo parágrafo. Essa é toda a regra. Uma ou cinco linhas em branco, não faz diferença; O LaTeX os recolhe em uma única quebra de parágrafo. Da mesma forma, uma única quebra de linha dentro de sua fonte é tratada como um espaço comum, para que você possa agrupar seu texto de origem na largura que desejar e reflui-lo livremente, sem alterar a saída.

O comando `\par` significa exatamente a mesma coisa que uma linha em branco. Você raramente digitará isso sozinho, mas o verá dentro de macros e arquivos de classe, onde uma linha literalmente em branco é difícil de escrever.

`\\` é algo completamente diferente: força uma quebra de linha dentro do parágrafo atual, sem iniciar um novo. A nova linha não recebe recuo de parágrafo nem espaço vertical extra. Existe para locais onde as quebras de linha são conteúdo, como endereços, poesias e linhas de uma tabela. Usá-lo para finalizar parágrafos comuns é o erro clássico de iniciante, porque produz um parágrafo que nunca termina, e o LaTeX pode reclamar com "Não há nenhuma linha aqui para terminar" quando dois deles se acumulam.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Adicionando espaço vertical

Às vezes você deseja uma lacuna deliberada, por exemplo, antes de um bloco de assinatura ou entre partes lógicas de uma página de título.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` insere exatamente o espaço vertical que você pede, em qualquer unidade que o LaTeX conheça (`em`, `pt`, `cm`, e assim por diante). Os três comandos de pular são valores predefinidos: `\smallskip`, `\medskip` e `\bigskip` inserem espaços pequenos, médios e grandes cujos tamanhos são definidos pela classe do documento, o que os mantém consistentes em todo o documento. Prefira os saltos em vez dos valores `\vspace` ajustados manualmente, porque eles se adaptam se você alterar a classe ou o tamanho da fonte.

Um detalhe útil: um `\vspace` no topo de uma página é descartado silenciosamente, já que o LaTeX assume que o espaço elástico nos limites da página não é intencional. Se você realmente precisa mantê-lo, use `\vspace*{1em}` com a estrela.

## Espaço entre todos os parágrafos

Não envie spam `\\` para criar espaço entre os parágrafos. Se você quiser que cada parágrafo seja separado por um espaço em vez de marcado por um recuo, essa é uma decisão de design para todo o documento: defina-o uma vez no preâmbulo com o pacote `parskip` ou reconsidere se os títulos e a estrutura comunicariam melhor a separação. Consulte [recuo de parágrafo](/learn/paragraph-indent/) para a outra metade desta compensação.