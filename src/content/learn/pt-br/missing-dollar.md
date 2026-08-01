---

title: "Dólar ausente inserido"
description: "Subscritos e comandos matemáticos que vazaram para o modo texto."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

#Dólar ausente inserido

"Faltando $ inserido" é o erro mais comum do LaTeX, e seu nome engana: o LaTeX não está pedindo para você gastar dinheiro, mas dizendo que a sintaxe somente matemática apareceu no modo de texto. Ele insere o próprio `$` para recuperar, continua compilando e muitas vezes deixa uma saída estranha em itálico no downstream, então a mensagem merece uma correção real em vez de um encolher de ombros.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## O que desencadeia isso

Dois caracteres e uma classe de comandos pertencem exclusivamente ao modo matemático. O sublinhado `_` e o acento circunflexo `^` criam subscritos e sobrescritos, e comandos como `\alpha`, `\frac` e `\leq` produzem símbolos matemáticos. Qualquer um deles em texto simples gera o erro. O caso clássico é um identificador que contém um sublinhado, como um nome de arquivo ou um nome de gene: `DNA_seq` em uma frase viaja no `_`.

A correção depende do que você quis dizer. Se o sublinhado for um caractere literal, escape dele: `DNA\_seq` imprime o nome com um sublinhado real. Se você quis dizer um subscrito, então você quis dizer matemática, então envolva a expressão: `$x_i$` define um x com o subscrito i, em itálico matemático com espaçamento correto. A lista completa de caracteres que precisam ser escapados no texto tem [sua própria lição](/learn/special-characters/), e os próprios delimitadores matemáticos são abordados em [noções básicas do modo matemático](/learn/math-mode/).

## Quando o log aponta para algum lugar estranho

O número da linha relatado é onde o LaTeX percebeu o problema, não necessariamente onde você o causou. O culpado usual é um `$` não fechado anteriormente: você abriu o modo matemático e nunca o fechou, então o LaTeX funcionou no modo matemático até que algo forçasse o problema, geralmente no final do parágrafo. Uma linha em branco dentro da exibição matemática gera o mesmo erro, porque quebras de parágrafo são ilegais no modo matemático. Portanto, quando a linha sinalizada parecer inocente, procure um número ímpar de cifrões e verifique se cada `\[` tem um `\]` correspondente.

O realce de sintaxe é a maneira mais rápida de detectar a fuga: qualquer editor LaTeX colore as regiões matemáticas de maneira diferente, então um parágrafo que é renderizado repentinamente em cores matemáticas identifica rapidamente o valor não fechado.

Um último cuidado: como o LaTeX se recupera inserindo o `$` ausente, um PDF muitas vezes ainda é compilado. Não tome o PDF como prova de que o erro foi inofensivo. A saída recuperada geralmente tem itálico perdido ou espaçamento distorcido onde o texto deveria estar, então corrija a fonte até que o log esteja limpo.