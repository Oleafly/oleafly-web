---

title: "Compile seu primeiro PDF"
description: "Um pequeno artigo, uma compilação e as três ideias que mais lhe ajudam no LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Compile seu primeiro PDF

Se você só escreveu no Word ou no Google Docs, o LaTeX pede que você mude um hábito. Em vez de formatar o texto enquanto digita, você descreve o documento em texto simples e deixa um programa digitá-lo para você. Esse texto simples fica em um arquivo `.tex`: um arquivo de texto comum que você pode abrir em qualquer editor, com suas palavras e comandos como `\section{...}` que dizem o que cada parte *é*. A compilação transforma essa fonte em um PDF finalizado. Um mecanismo LaTeX lê seu arquivo de cima para baixo, interpreta cada comando, organiza as páginas e grava o PDF. Você nunca formata a saída diretamente. Você edita a fonte e compila novamente.

## O menor documento real

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Leia de cima a baixo. `\documentclass{article}` informa ao mecanismo que tipo de documento é esse, o que define padrões sensatos para fontes, margens e estilos de título. As linhas `\title`, `\author` e `\date` armazenam apenas metadados; nada foi impresso ainda e `\today` significa simplesmente a data do dia que você compilar. `\begin{document}` marca onde o conteúdo real começa. `\maketitle` é o momento em que o bloco de título armazenado aparece na página. `\section{Introdução}` imprime um título numerado e o registra silenciosamente para que um índice possa encontrá-lo mais tarde. As últimas linhas mostram as duas faces da matemática: `$...$` compõe uma fórmula dentro de uma frase, enquanto `\[ ... \]` fornece uma linha de exibição centralizada própria.

## Três ideias que carregam a linguagem

1. Os comandos começam com uma barra invertida e geralmente recebem um argumento entre colchetes, então `\textbf{hello}` significa "digitar olá em negrito".
2. Os ambientes envolvem uma região entre `\begin{...}` e `\end{...}`, e o corpo do seu arquivo é em si um grande ambiente de `documento`.
3. O preâmbulo é tudo antes de `\begin{document}`; configura o documento, mas nunca produz texto visível.

Quase todo o resto no LaTeX é uma variação desses três.

## Compile

Em [Oleafly](/docs/getting-started/), crie um projeto, cole o código-fonte acima e compile. O PDF aparece ao lado da sua fonte e o SyncTeX vincula os dois lados: clique em um ponto no PDF para ir para a linha de origem correspondente ou vice-versa. A primeira compilação de um projeto pode demorar um pouco mais enquanto o mecanismo busca o que precisa; as execuções posteriores são mais rápidas.

Uma coisa a se esperar: mais cedo ou mais tarde, uma compilação falhará com uma mensagem de erro e um número de linha. Isso é completamente normal e geralmente significa um erro de digitação no nome do comando ou a falta de uma chave de fechamento. Corrija a linha apontada e compile novamente.

## Próximo

Continue com [o preâmbulo explicado](/learn/preamble-explained/) para ver o que as linhas de configuração realmente fazem e depois [modo matemático](/learn/math-mode/) para fórmulas. Mantenha a [cheatsheet](/learn/cheatsheet/) aberta enquanto você escreve sua primeira página real.