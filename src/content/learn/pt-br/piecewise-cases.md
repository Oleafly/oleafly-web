---

title: "Definições por partes"
description: "O ambiente de casos para condições sob uma única função."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Definições por partes

Uma função por partes fornece fórmulas diferentes em diferentes partes de seu domínio: o valor absoluto, a ativação de ReLU, uma tabela de faixas de impostos. A convenção tipográfica é uma única chave esquerda alta com uma linha por caso, cada linha mostrando a fórmula e a condição sob a qual ela se aplica. O pacote `amsmath` fornece o ambiente `cases`, que produz exatamente este layout sem qualquer dimensionamento manual de chaves.

## O ambiente dos casos

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Lendo isso linha por linha: tudo fica dentro de `\[ ... \]`, então é exibido em sua própria linha. `f(x) =` é matemática comum e então `\begin{cases}` abre o bloco por partes. Dentro, cada linha possui duas colunas separadas por `&`: a fórmula à esquerda, a condição à direita. As linhas terminam com `\\`, exceto que a linha final não precisa de um. Ao compilar, o LaTeX desenha uma chave esquerda com altura suficiente para abranger ambas as linhas e alinha as fórmulas em uma coluna e as condições em outra.

O `&` está fazendo um trabalho real aqui. Sem ele, cada linha seria um único blob e as condições não se alinhariam verticalmente. Com ele, `x^2` e `-x` compartilham uma borda esquerda, e `x \ge 0` e `x < 0` compartilham sua própria borda esquerda, que é o que torna a definição escaneável.

Duas coisas devem estar em vigor para que isso seja compilado. Primeiro, `\usepackage{amsmath}` no preâmbulo, já que `cases` não faz parte do núcleo do LaTeX. Segundo, o ambiente deve estar no modo matemático. `cases` cria conteúdo matemático, mas não abre o modo matemático sozinho. Se algum deles estiver faltando, você receberá um erro "Casos de ambiente indefinidos" ou "$ inserido ausente". Este último é explicado em [Dólar ausente inserido](/learn/missing-dollar/).

## Adicionando as palavras

A maioria das definições por partes publicadas inclui a palavra "se" e muitas vezes um "caso contrário" final. Como a coluna de condição está no modo matemático, palavras simples precisam que `\text{...}` apareçam na fonte do documento com espaçamento adequado:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Observe o espaço dentro de `\text{if }`. O modo matemático ignora os espaços que você digita, mas dentro de `\text` os espaços são reais, portanto, colocar um antes da chave de fechamento separa "if" da condição a seguir.

## Variantes e um erro comum

Se as fórmulas são frações altas e parecem apertadas, o pacote `mathtools` oferece `dcases`, um substituto imediato que define cada fórmula no estilo de exibição. Existem também `rcases` para a situação de imagem espelhada em que a chave pertence à direita.

O erro mais frequente é esquecer `\\` entre as linhas, o que mescla silenciosamente dois casos em uma longa linha. Se a saída compilada mostrar condições executadas em fórmulas, conte primeiro as quebras de linha. Você pode experimentar o ambiente ao vivo no [playground](/live/).