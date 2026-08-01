---

title: "Tabelas de três regras"
description: "regra superior, regra intermediária, regra inferior e pular linhas verticais."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tabelas de três regras

Abra qualquer diário bem composto e observe as tabelas. Quase todos seguem o mesmo design: uma regra no topo, uma regra abaixo do cabeçalho, uma regra na parte inferior e nada mais. Sem linhas verticais, sem grade. Este é o estilo `booktabs`, nomeado após o pacote que o implementa, e mudar para ele geralmente é a maior atualização visual que você pode fazer nas tabelas LaTeX. O pacote fornece três comandos que mapeiam as três regras:

```latex
\toprule
...
\midrule
...
\bottomrule
```

Em uma tabela completa eles ficam assim:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## O que as regras substituem

Sem `booktabs`, as pessoas desenham linhas com `\hline` e barras verticais na especificação da coluna, como em `{|l|c|c|}`. O resultado é uma gaiola: cada célula dentro de uma caixa, com o texto limitado contra as regras porque `\hline` não adiciona espaço para respirar. Os comandos `booktabs` substituem `\hline` por regras que carregam preenchimento vertical integrado, e `\toprule` e `\bottomrule` são ligeiramente mais pesados ​​que `\midrule`, então a tabela tem uma moldura visível e uma divisão interior mais leve. Esse espaçamento e diferença de peso é o truque. Os dados têm espaço, o cabeçalho está claramente separado e nada compete com os números.

As regras verticais são simplesmente omitidas. O alinhamento das colunas já mostra ao leitor onde termina uma coluna e começa a próxima, e as linhas verticais geralmente adicionam tinta sem adicionar clareza. A documentação do `booktabs` chega a recusar apoiá-los.

## Regras parciais para cabeçalhos agrupados

Quando um cabeçalho abrange várias colunas, por exemplo "Pontuações" acima de precisão e F1, use `\cmidrule` para sublinhar apenas essas colunas:

```latex
\cmidrule(lr){2-3}
```

O intervalo `{2-3}` indica quais colunas a regra cobre, e a opção `(lr)` corta um pouco as extremidades esquerda e direita para que as regras vizinhas não se fundam em uma linha longa. Isso emparelha com `\multicolumn`, mostrado em [células que abrangem linhas ou colunas](/learn/merged-cells/).

## Números e alinhamento

Uma tabela de medidas é melhor lida quando os pontos decimais estão alinhados. O pacote `siunitx` fornece um tipo de coluna `S` que alinha os números no marcador decimal automaticamente, então `0,9` e `0,88` ficam corretamente um abaixo do outro, mesmo com contagens de dígitos diferentes. Vale a pena adotar uma vez que suas tabelas contêm dados reais.

O erro comum é misturar sistemas: um `\hline` aqui, um `\midrule` ali, e uma especificação de coluna com barras que sobraram de um modelo. Escolha o estilo de três regras e aplique-o a todas as tabelas do documento. Consistência é o que faz o estilo parecer deliberado. Um passo a passo completo da `tabela` flutuante ao redor está em [uma tabela que se parece com uma mesa de papel](/learn/create-table/).