---

title: "Proporções empilhadas que permanecem legíveis"
description: "frac, dfrac, tfrac e frações contínuas com amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Proporções empilhadas que permanecem legíveis

As frações são o primeiro lugar onde a saída do LaTeX supera visivelmente um processador de texto: um numerador e denominador empilhados reais com uma regra entre eles, dimensionado para se ajustar à matemática circundante. O comando principal é `\ frac`. O que importa é como seu tamanho muda com o contexto e como substituí-lo quando a escolha automática prejudica a legibilidade.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` pega dois argumentos entre colchetes, o numerador primeiro, o denominador depois, e os compõe empilhados sobre uma régua horizontal. Seu tamanho é sensível ao contexto. Na exibição matemática (dentro de `\[ ... \]` ou em um ambiente `equation`) a fração é definida em tamanho real. Na matemática embutida (dentro de `$ ... $`) ela é definida como menor e mais compacta, para não forçar a separação das linhas do parágrafo.

Às vezes você deseja substituir isso. `\dfrac`, de `amsmath`, força o estilo de exibição: uma fração empilhada em tamanho real, mesmo no meio de uma frase. Use-o com moderação, porque uma fração alta embutida estica o espaçamento entre linhas ao seu redor. `\tfrac` é o oposto: ele força o estilo de texto pequeno mesmo em matemática de exibição, o que é útil para coeficientes simples como metade na frente de uma expressão grande, onde uma pilha em tamanho real chamaria muita atenção.

Ambos os argumentos podem conter matemática arbitrária, incluindo outras frações: `\frac{1}{1 + \frac{1}{x}}` aninha-se, e o LaTeX reduz a fração interna automaticamente. Porém, quando o aninhamento se torna profundo, existe uma ferramenta melhor.

## Frações continuadas

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Os `\frac`s aninhados encolhem em todos os níveis, portanto, no terceiro andar de uma fração contínua, os dígitos são pouco legíveis. `\cfrac`, também de `amsmath`, mantém todos os níveis em tamanho de exibição total e alinha os numeradores, que é a forma aceita de compor frações contínuas. Você pode passar uma posição opcional, `\cfrac[l]{1}{...}`, para empurrar um numerador para a esquerda em vez de centralizá-lo.

## Julgamento prático

Todos `\dfrac`, `\tfrac` e `\cfrac` requerem `\usepackage{amsmath}` no preâmbulo; simples `\frac` funciona sem ele. Se você obtiver "Sequência de controle indefinida" em `\dfrac`, a linha do pacote está faltando.

Para texto embutido, às vezes uma forma cortada é simplesmente mais legível do que uma fração empilhada: escrever `(a/b)` ou `a/b` mantém a altura da linha uniforme e lê bem para proporções simples. Uma boa regra é empilhar frações na matemática de exibição, onde há espaço vertical, e preferir a barra embutida, a menos que a fração seja o ponto da frase. Digite um parágrafo nos dois sentidos no [live playground](/live/) e compare; a diferença no espaçamento entre linhas é imediatamente visível. Se delimitadores matemáticos como `$` e `\[` ainda não estiverem familiarizados, comece com [noções básicas do modo matemático](/learn/math-mode/).