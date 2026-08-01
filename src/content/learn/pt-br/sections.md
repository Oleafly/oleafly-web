---

title: "Títulos que se numeram"
description: "seção por parágrafo, formulários com estrela, profundidade de segundo."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Títulos que se numeram

Em um processador de texto, você numera os títulos manualmente e os renumera manualmente sempre que move um. O LaTeX se recusa a permitir que você faça isso. Você declara o que é cada título, uma seção, uma subseção ou um capítulo, e a numeração cuida de si mesma. Insira uma nova seção no meio do seu documento e tudo depois de renumerar na próxima compilação, junto com todas as referências cruzadas e todas as entradas do índice que apontam para ela.

## A hierarquia

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Esses comandos formam uma escada fixa. `\section` é o carro-chefe do dia a dia na classe `article`, com `\subsection` e `\subsubsection` aninhados abaixo dele. `\chapter` só existe nas classes `report` e `book`, e é por isso que colar capítulos de teses em um modelo de artigo falha com uma sequência de controle indefinida. `\part` fica acima dos capítulos e é raro fora de livros longos. `\paragraph` é o estranho: produz um título em negrito na mesma linha do texto seguinte, em vez de um título em sua própria linha, o que surpreende quase todo mundo na primeira vez.

Cada comando pega o texto do título entre colchetes, imprime-o na fonte e tamanho escolhidos pela classe, numera-o e registra-o para que `\tableofcontents` possa encontrá-lo mais tarde. Você nunca estiliza títulos inline. Se você quiser fontes de cabeçalho diferentes, essa é uma decisão que abrange todo o documento, tomada no preâmbulo.

## Suprimindo números

Formulários marcados com estrela suprimem números: `\section*{Agradecimentos}`. A estrela também mantém o título fora do índice e totalmente fora da sequência de numeração, de modo que a seção seguinte continua como se a estrela não estivesse lá. Isso é exatamente o que você deseja para agradecimentos, um prefácio ou uma conclusão independente em um breve artigo. Se uma seção com estrela ainda aparecer no sumário, há uma correção de uma linha abordada na [lição do sumário](/learn/table-of-contents/).

## Controlando a profundidade da numeração

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumprofundidade` decide a profundidade da numeração. Em `artigo`, as seções são de nível 1, as subseções de nível 2 e as subsubseções de nível 3, portanto, definir o contador para 2 números de seções e subseções, mas deixa os títulos das subsubseções sem numeração, mantendo sua formatação. `tocprofundidade` é a mesma ideia para o índice: ele controla a profundidade da listagem do sumário, independentemente do que é numerado na página. Ambas as linhas pertencem ao preâmbulo.

Um erro comum é pular níveis, por exemplo, pular de `\section` direto para `\subsubsection` porque você gosta do título menor. A numeração ainda funciona, mas produz resultados estranhos como "1.0.1", e os leitores perdem o controle da estrutura. Escolha os níveis de título de acordo com o significado e deixe a classe cuidar da aparência. Se você não tiver certeza de como o esqueleto do seu documento se encaixa, [a lição sobre esqueleto do documento](/learn/document-skeleton/) o explica.