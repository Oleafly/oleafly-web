---

title: "Recuo ou espaço entre parágrafos"
description: "parindent, parskip, noindent para uma única linha."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Recuo ou espaço entre parágrafos

A tipografia tem duas maneiras padrão de mostrar onde termina um parágrafo e começa o próximo: recuar a primeira linha de cada novo parágrafo ou deixar espaço vertical entre os parágrafos sem recuo. Livros e periódicos quase sempre usam o primeiro. Páginas da Web e documentos comerciais usam o segundo. O LaTeX usa como padrão a convenção do livro, recuando cada parágrafo, exceto o primeiro após o título da seção, sem espaço extra entre os parágrafos. Se você quiser o outro estilo, altere dois comprimentos.

## Os dois comprimentos que controlam tudo

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` é a largura do recuo da primeira linha. Definir como `0pt` com `\setlength` remove o recuo em todos os lugares. `\parskip` é o espaço vertical inserido entre os parágrafos, normalmente zero (mais um pequeno trecho); defini-lo como `0.8em` fornece uma lacuna visível, um pouco menos do que uma linha em branco completa. A unidade `em` é dimensionada de acordo com o tamanho da fonte, o que mantém o espaçamento proporcional se você alterar posteriormente o [tamanho da fonte](/learn/font-size/). Coloque as duas linhas no preâmbulo e todo o documento segue o estilo de bloco.

Se você seguir esse caminho, esteja ciente de que uma simples alteração `\parskip` também amplia o espaço ao redor dos títulos das seções, itens de lista e índice, porque eles também são construídos a partir de parágrafos. Para qualquer coisa maior do que uma nota curta, carregar o pacote `parskip` (`\usepackage{parskip}`) aplica o mesmo estilo enquanto corrige esses efeitos colaterais para você.

## Suprimindo um único recuo

Parágrafo único: coloque `\noindent` logo no início, antes da primeira palavra. Isso suprime o recuo apenas daquele parágrafo e é útil após uma equação exibida, uma listagem de código ou uma tabela quando o texto seguinte é uma continuação do mesmo pensamento em vez de um novo parágrafo. A situação inversa, forçando um recuo onde o LaTeX o omite (como o primeiro parágrafo após um título), é tratada pelo pequeno pacote `indentfirst` em vez de uma correção manual.

Enquanto estamos aqui: um novo parágrafo em LaTeX é criado por uma linha em branco no código-fonte, não por `\\`. O comando `\\` é uma quebra de linha dentro do mesmo parágrafo, e usá-lo para falsificar o espaçamento entre parágrafos produz avisos insuficientes e lacunas irregulares. A [lição sobre parágrafos e novas linhas](/learn/paragraphs-newlines/) cobre essa distinção por completo.

## Escolha um estilo e segure-o

Escolha o estilo de recuo ** ou ** parskip e mantenha a consistência. As duas convenções são alternativas, não camadas: parágrafos recuados com grandes espaços entre eles parecem um rascunho, e recuo zero com espaço zero deixa o leitor incapaz de ver onde os parágrafos começam. Se você estiver escrevendo para um periódico ou conferência, não altere o tamanho; o arquivo de classe já implementa a escolha do editor e sua substituição será a primeira coisa que o editor de layout reverterá.