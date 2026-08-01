---

title: "Vetores e símbolos em negrito"
description: "mathbf, negrito e uma macro vetorial consistente."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vetores e símbolos em negrito

Muitos campos definem vetores e matrizes em negrito: **x** para um vetor, **A** para uma matriz, negrito beta para um vetor de coeficiente. No LaTeX existem dois comandos em negrito diferentes para matemática e eles não são intercambiáveis. Saber qual escolher e agrupar a escolha em uma macro mantém a notação consistente ao longo de toda a tese.

## Os dois comandos

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` muda seu argumento para uma fonte romana em negrito vertical. Funciona bem para letras latinas, então `\mathbf{A}` fornece um A sólido vertical em negrito, que muitos textos usam para matrizes. Sua limitação é que ela cobre apenas letras e dígitos: `\mathbf{\beta}` não faz nada de útil, porque a fonte romana em negrito simplesmente não tem glifos gregos, e o beta é impresso inalterado.

`\boldsymbol`, fornecido por `amsmath` (tecnicamente pelo maquinário semelhante a `bm` em `amsbsy`, que `amsmath` carrega), fortalece qualquer símbolo que você entrega, mantendo sua forma. `\boldsymbol{\beta}` produz um beta em negrito e itálico, e `\boldsymbol{x}` produz um x em negrito e itálico, combinando com o estilo inclinado das variáveis ​​matemáticas comuns. Se sua convenção é que os vetores sejam negrito e itálico, este é o comando que você deseja.

Portanto, a divisão prática é: letras latinas em negrito na vertical, use `\mathbf`; qualquer coisa grega ou negrito que deva permanecer em itálico, use `\boldsymbol`.

## Defina macros uma vez

Em vez de digitar estes comandos ao longo do documento, defina macros semânticas no preâmbulo:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Agora você escreve `\vect{x}` para um vetor e `\mat{A}` para uma matriz. O `[1]` diz que cada macro leva um argumento, e `#1` é onde esse argumento chega. A recompensa vem depois: se um diário exige que os vetores estejam em negrito vertical em vez de negrito itálico, você edita uma linha para que `\vect` envolva `\mathbf`, e cada vetor no artigo seja atualizado na próxima compilação. Isso é melhor do que pesquisar e substituir em duzentas equações.

As macros também tornam a intenção legível na fonte. Daqui a seis meses, `\vect{w}` informa que w é um vetor; um simples `\boldsymbol{w}` apenas indica que está em negrito.

## Um erro comum

Não falsifique o grego em negrito com `\textbf` dentro de math, e não use `\mathbf` para isso e presuma que funcionou. Compile e observe com atenção: um beta sem negrito ao lado de vizinhos em negrito é fácil de perder na tela e óbvio na impressão. Se você quiser observar os candidatos rapidamente, cole uma linha como `\boldsymbol{\beta} \mathbf{\beta} \beta` no [live playground](/live/) e compare os três lado a lado. Para colocar em negrito equações inteiras, incluindo símbolos como `\sum`, veja o comando `\bm` do pacote `bm`, que lida com mais classes de símbolos do que `\boldsymbol`.

Negrito em texto corrido é um tópico diferente com comandos diferentes; veja [ênfase no texto](/learn/bold-italic/).