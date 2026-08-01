---

title: "Comando ou ambiente?"
description: "Macros aceitam argumentos; ambientes envolvem regiões."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Comando ou ambiente?

Tudo o que você digita no LaTeX além do texto simples assume uma de duas formas: um comando ou um ambiente. A distinção parece acadêmica até você encontrar sua primeira mensagem de erro. Metade das reclamações do LaTeX são sobre um ser usado onde o outro pertence. Aprender a ver qual forma você está olhando torna a documentação e os erros legíveis.

## Comandos

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Um comando é uma barra invertida seguida de um nome e realiza uma substituição no ponto onde aparece. `\textbf{argument}` pega um argumento entre colchetes e o digita em negrito; o efeito começa e termina com o aparelho. Os comandos podem receber vários argumentos entre colchetes, e muitos também aceitam um argumento opcional entre colchetes antes deles, como em `\documentclass[11pt]{article}`.

As duas primeiras linhas mostram que comandos são algo que você pode criar. `\newcommand{\foo}{bar}` define um novo comando chamado `\foo` cuja expansão é o texto `bar`, e a partir daí digitar `\foo` em qualquer lugar produz `bar`. Este é o mecanismo por trás das [macros personalizadas](/learn/custom-commands/), e é também como os pacotes funcionam: um pacote é basicamente um arquivo de definições de comandos.

Uma peculiaridade que vale a pena conhecer desde o início: um comando como `\LaTeX` engole o espaço depois dele, então `\LaTeX is fun` imprime as palavras executadas juntas. Escreva `\LaTeX{} is fun` ou `\LaTeX\ is` para manter o espaço.

## Ambientes

```latex
\begin{center}
 Centered block
\end{center}
```

Um ambiente envolve uma região do documento entre um par `\begin{...}` e `\end{...}` correspondentes e aplica seu comportamento a tudo dentro dele. Aqui o ambiente `center` centraliza cada linha do bloco. Os ambientes podem ser aninhados, desde que fechem na ordem inversa em que foram abertos, e também podem receber argumentos: `\begin{tabular}{ll}` abre uma tabela e passa a ela uma especificação de coluna.

Como os ambientes devem ser equilibrados, eles falham de uma forma distinta. Um erro como `\begin{itemize} terminado por \end{document}` significa que um ambiente foi aberto e nunca fechado. Encontre o `\end` ausente; não olhe para a linha com os nomes dos erros.

## A regra prática

Se envolver uma região com início e fim claros, provavelmente é um ambiente. Se for uma pequena substituição ou uma troca, é um comando. As duas formas até se sobrepõem: cada ambiente `foo` é implementado como um par de comandos `\foo` e `\endfoo` nos bastidores. Para um tour pelos comandos e ambientes que você mais encontrará, consulte [todos os comandos explicados](/learn/every-command-explained/) ou experimente ambas as formas no [playground ao vivo](/live/).