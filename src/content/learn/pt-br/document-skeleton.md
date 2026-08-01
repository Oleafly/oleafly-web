---

title: "Um esqueleto que você pode reutilizar"
description: "Aula, preâmbulo, título, seções, bibliografia: o formato de quase todos os artigos."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Um esqueleto que você pode reutilizar

Retire o conteúdo e quase todo documento LaTeX terá o mesmo esqueleto: uma declaração de classe, um preâmbulo de configuração e um corpo entre `\begin{document}` e `\end{document}`. Depois de conhecer essa forma, inicie um novo projeto colando o esqueleto, alterando o título e escrevendo.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Lendo de cima para baixo: `\documentclass[11pt]{article}` escolhe o tipo de documento e define o tamanho da fonte base como uma opção. Todo o resto do design flui dessa escolha. A região entre a linha da classe e `\begin{document}` é o [preâmbulo](/learn/preamble-explained/), onde os pacotes são carregados e metadados como `\title` e `\author` são armazenados. `\begin{document}` marca onde o conteúdo visível começa, `\maketitle` compõe o bloco de título armazenado e o corpo segue como seções, figuras e, eventualmente, uma bibliografia. `\end{document}` fecha o documento. Qualquer coisa depois é ignorada silenciosamente, o que ocasionalmente oculta um pedaço de texto que alguém colou no lugar errado.

## Escolhas de classe

| Classe | Usar |
| --- | --- |
| `artigo` | Artigos, trabalhos de casa, notas |
| `relatório` | Relatórios mais longos com capítulos |
| `livro` | Livros e muitas teses |
| `beamer` | Apresentações |

A aula não é cosmética; ele muda quais comandos existem. `article` não tem `\chapter`, então colar capítulos de teses nele falha imediatamente. `report` adiciona capítulos e dá ao título sua própria página. `book` assume impressão frente e verso e abre capítulos nas páginas do lado direito. `beamer` reestrutura tudo em torno de molduras para slides. Periódicos e conferências enviam suas próprias aulas e, quando você escreve para um local, a aula substitui totalmente essa decisão.

Dois erros são responsáveis ​​pela maioria dos esqueletos quebrados. O texto colocado antes de `\begin{document}` dispara o erro "Missing \begin{document}", porque o preâmbulo pode apenas configurar, nunca imprimir. E um `\end{document}` ausente deixa o compilador esperando no final do arquivo com uma mensagem inútil sobre o fim da entrada. Quando um deles aparecer, verifique o quadro do documento antes de suspeitar do conteúdo.

As escamas do esqueleto. Uma nota de quatro páginas mantém o corpo alinhado; uma tese move cada capítulo para seu próprio arquivo e os extrai da raiz, conforme mostrado em [arquivos de capítulos divididos](/learn/split-chapter-files/). A moldura ao redor deles não muda.