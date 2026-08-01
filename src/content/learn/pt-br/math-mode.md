---

title: "Matemática que fica em uma frase (ou sozinha)"
description: "Matemática embutida, matemática de exibição, ambientes de equações e quando a numeração vale a pena."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Matemática que fica em uma frase (ou sozinha)

O LaTeX trata a matemática como um modo separado com suas próprias fontes e regras de espaçamento. Cada variável, fórmula e símbolo deve viver dentro do modo matemático, seja um n solitário em uma frase ou uma equação completa. Existem dois tipos: a matemática embutida flui dentro de um parágrafo e a matemática exibida fica centralizada em sua própria linha, com ou sem um número.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Matemática embutida

Um par de cifrões, como em `$E=mc^2$`, define a fórmula no tamanho do texto dentro da linha. As letras aparecem em itálico matemático e o espaçamento em torno do sinal de igual é feito para você. `\(E=mc^2\)` é a forma nativa do LaTeX equivalente. Ele produz uma saída idêntica e, como seus delimitadores de abertura e fechamento são diferentes, um não fechado fornece uma mensagem de erro mais clara. Use matemática embutida mesmo para um único nome de variável, para que n em sua prosa corresponda a n em suas equações.

## Exibir matemática

`\[ ... \]` coloca uma fórmula em sua própria linha centralizada sem um número. É a escolha certa para equações únicas que você nunca consulta. Evite o antigo formato `$$ ... $$`. É TeX simples em vez de LaTeX e produz espaçamento vertical ligeiramente errado em algumas situações.

## Equações numeradas

O ambiente `equation` exibe a fórmula com um número na margem. `\label{eq:energy}` atribui um nome a esse número, e em outro lugar você escreve `Equation~\ref{eq:energy}` ou, com `amsmath` carregado, `\eqref{eq:energy}`, que adiciona os próprios parênteses. O `~` é um espaço inseparável, então a palavra e o número permanecem na mesma linha. As referências são resolvidas na segunda compilação. Se você vir `??` na saída, consulte [pontos de interrogação em vez de números](/learn/equations-show-qq/).

## Os pacotes a serem carregados

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Quase todos os documentos matemáticos carregam esses três. `amsmath` fornece os ambientes e comandos que a maioria dessas lições assume, incluindo `align` e `\eqref`. `amssymb` e `amsfonts` adicionam fontes de símbolos e alfabetos extras como `\mathbb`. Coloque a frase no preâmbulo uma vez e esqueça.

O erro clássico de iniciante é a sintaxe matemática fora do modo matemático: um sublinhado em texto simples interrompe a compilação com "Missing $ inserido", que tem [sua própria lição](/learn/missing-dollar/). Para ter uma ideia dos dois modos, digite uma frase com `$x_i$` inline e a mesma fórmula dentro de `\[ ... \]` no [live playground](/live/) e compare como cada um fica na página.