---

title: "Páginas romanas e depois árabes"
description: "Numeração de assuntos iniciais que os comitês ainda esperam."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Páginas romanas e depois árabes

Abra quase qualquer tese ou livro didático e você verá a mesma convenção: a página de título, o resumo, o índice e os agradecimentos são numerados i, ii, iii em algarismos romanos minúsculos, e então o primeiro capítulo real começa na página 1 em números arábicos comuns. O assunto inicial é tratado como uma sequência preliminar separada, e as escolas de pós-graduação verificam explicitamente esta convenção. No LaTeX são necessários exatamente dois comandos.

## O padrão

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` faz duas coisas ao mesmo tempo: muda o estilo numérico para romano minúsculo e redefine o contador de páginas para 1, de modo que a página de título se torna a página i. Tudo o que você coloca depois dele, normalmente `\maketitle`, o resumo, o [índice](/learn/índice-de-conteúdo/), e quaisquer listas de figuras ou tabelas, são numerados ii, iii, iv, e assim por diante.

Então, imediatamente antes do primeiro capítulo, `\pagenumbering{arabic}` muda o estilo de volta e zera o contador novamente, então `\chapter{Introduction}` abre em uma nova página 1. A redefinição é o ponto principal: sem ela sua introdução começaria em algo como a página 7, que não é o que os comitês ou convenções de citação esperam.

Como `\chapter` nas classes `book` e `report` sempre inicia uma nova página, você não precisa de um `\newpage` explícito antes da troca. Em uma aula sem capítulos você adicionaria `\clearpage` primeiro para que a mudança de numeração não chegue no meio da página.

## Aulas que fazem isso por você

Algumas aulas de tese fornecem `\frontmatter` / `\mainmatter` / `\backmatter`. Eles vêm da classe `book` e são a maneira de nível superior de dizer a mesma coisa. `\frontmatter` muda para numeração romana e torna os capítulos sem numeração (portanto, um Prefácio não recebe o rótulo "Capítulo 1"). `\mainmatter` muda para árabe e restaura os capítulos numerados. `\backmatter` desativa a numeração de capítulos novamente para material semelhante a um apêndice no final. Se o modelo da sua universidade for construído em `book` ou `memoir`, prefira esses comandos em vez de `\pagenumbering` bruto, porque o modelo pode vincular comportamentos extras a eles, como cabeçalhos diferentes para o assunto inicial. As duas abordagens não entram em conflito, mas não há razão para usar ambas.

## Uma coisa para verificar

As páginas numeradas romanas devem estar de acordo com o índice. Se o seu resumo aparecer como página "iv" no ToC, mas for impresso como "2", a causa comum é uma chamada `\pagenumbering` colocada após o conteúdo que deveria cobrir, ou uma segunda compilação ausente: os números das páginas no ToC vêm do arquivo `.aux`, então você precisa [compilar duas vezes](/learn/compile-to-pdf/) antes de julgar se a numeração está correta. Compile, compile novamente e compare o ToC com as páginas reais.