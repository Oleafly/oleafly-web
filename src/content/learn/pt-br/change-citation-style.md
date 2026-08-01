---

title: "Numérico, autor-ano, estilos de periódico"
description: "Troque estilos sem reescrever o banco de dados."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Numérico, autor-ano, estilos de periódico

Um estilo de citação controla duas coisas: a aparência do marcador no texto, como `[12]` versus `(Knuth, 1984)`, e como cada entrada na lista de referências é formatada. A boa notícia é que o estilo é completamente separado do seu banco de dados `.bib`. Você pode mudar um artigo de numérico para autor-ano ou reformatá-lo para um periódico diferente, alterando uma linha no preâmbulo. Suas entradas permanecem como estão.

## Mudando de estilo com o clássico BibTeX

Com o BibTeX, o estilo fica no comando `\bibliographystyle{...}`, que nomeia um arquivo `.bst`. Troque o argumento e recompile:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Periódicos e conferências geralmente enviam seu próprio arquivo `.bst`, por exemplo `IEEEtran.bst` ou `ACM-Reference-Format.bst`. Coloque esse arquivo próximo ao seu `main.tex` e nomeie-o em `\bibliographystyle`. Observe que um `.bst` aparece de uma só vez; se o local quiser citações de autor-ano, você também precisará do pacote `natbib` para obter comandos como `\citep` e `\citet`.

## Mudando de estilo com biblatex

Com o biblatex, o estilo é uma opção na própria embalagem:

```latex
\usepackage[style=authoryear]{biblatex}
```

Outros valores comuns são `style=numeric`, `style=numeric-comp` para intervalos compactados como `[3-6]`, `style=alphabetic` e `style=apa` ou `style=ieee` de pacotes complementares. Como os estilos biblatex são escritos em LaTeX em vez da antiga linguagem `.bst`, eles são muito mais fáceis de ajustar, por exemplo, para alterar a pontuação ou eliminar URLs.

## Recompile corretamente após a troca

Após qualquer mudança de estilo, os arquivos auxiliares antigos ainda contêm dados formatados pelo estilo anterior, então execute um ciclo completo: compile uma vez, execute o backend (`bibtex` para BibTeX clássico, `biber` para biblatex), então compile mais duas vezes para que as referências cruzadas sejam resolvidas. Oleafly executa esse ciclo para você, mas se as citações parecerem obsoletas após uma troca manual, excluir os arquivos `.aux` e `.bbl` e reconstruir do zero limpa tudo.

## Qual família você deve usar?

Se o local de destino fornecer um arquivo `.bst` ou uma classe que espera BibTeX, use o BibTeX clássico; essa ainda é a situação na maioria dos periódicos. Se você mesmo controla o formato, como em uma tese ou pré-impressão, o biblatex é a escolha mais adequada. As compensações são abordadas em [BibTeX clássico ou biblatex](/learn/bibtex-vs-biblatex/), e as diferenças de comando em [hábitos natbib vs comandos biblatex](/learn/natbib-vs-biblatex/).