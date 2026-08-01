---

title: "Tipo maior e menor"
description: "Opções de classe como 11pt e opções de tamanho local que não prejudicam o espaçamento entre linhas."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Tipo maior e menor

O tamanho do tipo no LaTeX é definido em dois níveis: um tamanho base para todo o documento escolhido uma vez nas opções de classe e opções locais para extensões que precisam ser diferentes. O tamanho base impulsiona todo o resto. Títulos, notas de rodapé e tamanhos locais são todos definidos em relação a ele.

## Todo o documento

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

A opção de classe define o tamanho do corpo do texto. `10pt` é o padrão e `11pt` e `12pt` são as alternativas comuns; as classes padrão suportam apenas esses três. Alterar a opção redimensiona todo o documento proporcionalmente, uma vez que os tamanhos dos títulos, tamanhos das notas de rodapé e espaçamento entre linhas derivam da base. Se você precisar de um tamanho base além de 12pt, classes como `extarticle` ou classes KOMA-Script aceitam uma gama mais ampla de opções.

## Switches locais

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Estas são declarações em vez de comandos com argumentos: `\large` altera o tamanho desse ponto até o grupo atual terminar, e as chaves em torno de `{\large large}` são o que limitam seu alcance. A escada completa, do menor para o maior, é `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Cada etapa é mapeada para um tamanho concreto que depende da opção de classe, então `\large` em `12pt` é maior que `\large` em `10pt`. Pense nas opções como passos distantes do corpo do texto, não como tamanhos fixos.

O espaçamento entre linhas tem uma sutileza. Uma opção de tamanho ajusta a distância da linha de base apenas para parágrafos que terminam enquanto ela está ativa. Para um intervalo de vários parágrafos em tamanho maior, mantenha a quebra de parágrafo dentro do grupo terminando com `\par` antes da chave de fechamento, como em `{\large ... \par}`. Caso contrário, o parágrafo final manterá o espaçamento entre linhas de tamanho normal sob letras grandes e as linhas colidirão.

## Tamanhos versus estrutura

Resista ao uso de opções de tamanho para títulos falsos. `\section` e seus parentes definem o tamanho para você, e também numeram o título, adicionam-no ao índice e criam marcadores de PDF. Uma linha `{\Large \textbf{...}}` construída à mão não oferece nada disso. A mesma ideia se aplica à ênfase, abordada em [ênfase sem combater a fonte](/learn/bold-italic/). Reserve as opções manuais de tamanho para necessidades genuinamente locais, como uma observação do tamanho de uma nota de rodapé sob uma tabela ou uma linha na página de título. Se todos os títulos de um documento precisarem de reestilização, mude a classe ou use um pacote como `titlesec` em vez de dimensionar cada título manualmente.