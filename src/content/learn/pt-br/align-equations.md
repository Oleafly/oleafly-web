---

title: "Equações multilinhas que se alinham"
description: "alinhar, reunir, dividir, multilinha e notag."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Equações multilinhas que se alinham

Uma derivação de vários passos fica melhor com os sinais de igual empilhados em uma coluna, para que o olho possa acompanhar o que mudou de linha para linha. O pacote `amsmath` fornece o ambiente `align` para isso, além de uma pequena família de parentes para casos onde alinhamento não é o que você deseja.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Como alinhar leituras

Cada linha é uma equação, terminada por `\\`; a última linha não precisa de nenhuma. O `&` marca o ponto de alinhamento e o `&` de cada linha fica na mesma coluna. Colocar `&` imediatamente antes do sinal de igual é o hábito padrão, de modo que os sinais de igual se empilhem e os lados esquerdos fiquem para a esquerda. Cada linha recebe seu próprio número de equação; escreva `align*` para numerar nenhum ou adicione `\notag` a linhas individuais para pular apenas essas, como mostrado em [números e ponteiros para equações](/learn/number-equations/).

O ambiente abre display math sozinho, então ele não deve ficar dentro de `\[ ... \]` ou `$ ... $`; aninhá-lo em outro ambiente matemático produz erros confusos.

## A família

| Ambiente | Finalidade |
| --- | --- |
| `alinhar` | Várias linhas, alinhadas |
| `alinhar*` | Igual, sem numeração |
| `reunir` | Várias linhas centralizadas |
| `dividir` | Número de equação única multilinha |
| `multilinha` | Equação longa quebrada sem alinhamento |

`gather` lida com diversas equações sem ponto de alinhamento compartilhado; ele centraliza cada linha e numera cada uma. `split` constrói uma equação multilinha sob um único número e deve ficar dentro de `equation`. `multline` quebra uma fórmula muito longa sem alinhamento, a primeira linha alinhada à esquerda e a última à direita. Os dois últimos são tratados detalhadamente em [equações que não cabem](/learn/break-long-equations/).

Duas questões decidem qual usar: as linhas são equações separadas ou uma equação quebrada, e há um ponto de alinhamento que vale a pena empilhar? Separado e alinhado: `align`. Separado e centralizado: `reunir`. Único e alinhado: `split`. Único e não alinhado: `multline`.

## Erros comuns

Uma linha sem `&` ainda é compilada, mas centraliza de forma independente e nada se alinha. Dois `&` em uma linha iniciam um segundo par de colunas, que `align` é lido como uma segunda coluna de equações colocadas lado a lado; se sua saída tiver equações marchando para a direita, conte seu e comercial. Um `\\` final na linha final adiciona uma linha vazia, que aparece como um espaço vertical ímpar abaixo do bloco. Digite uma derivação de três etapas no [live playground](/live/) para observar o alinhamento se concretizar.