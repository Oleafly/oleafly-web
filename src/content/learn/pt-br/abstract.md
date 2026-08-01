---

title: "O bloco abstrato"
description: "colocação de ambiente abstrato para aulas de artigos e periódicos."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# O bloco abstrato

O resumo é o breve resumo que fica entre o título e a primeira seção. Quase todos os locais exigem um. O LaTeX oferece um ambiente dedicado, em vez de deixar você fingir com um título em negrito. A turma precisa saber qual texto é o resumo para que as turmas de periódicos possam digitá-lo em um estilo distinto (geralmente menor e recuado) e para que os sistemas de submissão possam extraí-lo automaticamente.

## O meio ambiente

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Tudo entre `\begin{abstract}` e `\end{abstract}` se torna o bloco abstrato. Na classe padrão `article` ele aparece como um parágrafo restrito e centralizado abaixo do título. Escreva prosa simples dentro dele. A matemática embutida é boa, mas pule qualquer coisa pesada: sem citações se o local as proibir, sem notas de rodapé, sem siglas indefinidas. Os resumos geralmente aparecem sozinhos nas bases de dados e nos resultados de pesquisa, longe do resto do artigo.

## Para onde vai

Coloque depois de `\maketitle` (ou conforme exigido pela classe do diário). A ordem usual no início de um artigo é `\maketitle`, depois o resumo e depois `\section{Introdução}`. O ambiente deve vir depois de `\begin{document}`, pois produz saída; colocá-lo no preâmbulo é um erro de compilação.

As aulas de periódicos e conferências geralmente alteram esse contrato e seus modelos superam o padrão. Algumas classes, incluindo diversas variantes do ACM e do IEEE, desejam que o resumo seja declarado antes de `\maketitle` para que possam colocá-lo dentro de seu próprio layout de título. Outros substituem o ambiente inteiramente por um comando como `\abstract{...}`. Regra prática: se você estiver usando um modelo de local, coloque o resumo onde quer que o arquivo de exemplo do modelo o coloque e não brigue com a classe. A [lição de blocos de título](/learn/title-page/) cobre o maquinário `\maketitle` que funciona.

## Aulas sem resumo

A classe `book` não define nenhum ambiente abstrato, com base na teoria de que os livros têm prefácios. Se você precisar de um em uma tese estilo relatório, a classe `report` suporta isso, ou você pode compor um título centralizado e não numerado seguido por um parágrafo normal, que é tudo o que o ambiente realmente faz.

Um erro comum: deixar uma linha em branco entre `\maketitle` e o resumo é bom, mas deixar o resumo vazio não é um erro de compilação, então um espaço reservado esquecido como "TODO" é enviado aos revisores com mais frequência do que qualquer um admite. Compile, veja a primeira página do PDF e leia o resumo pelo menos uma vez antes de enviar. Para obter conselhos sobre o que o resumo deve realmente dizer, e não para onde ele vai, consulte [como escrever um resumo](/learn/write-an-abstract/).