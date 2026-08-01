---

title: "Crie um .bib que dure"
description: "Tipos de entrada, campos obrigatórios, chaves estáveis."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Construa um .bib que dure

Um arquivo `.bib` é um pequeno banco de dados de texto simples de tudo que você pode citar. Cada entrada tem um tipo, uma chave e um conjunto de campos, e o mesmo arquivo pode servir a todos os artigos que você escreve durante anos. Um pouco de disciplina agora, na maneira como você escolhe tipos, preenche campos e nomeia chaves, evita problemas reais mais tarde, quando um estilo de diário de repente deseja um campo que você nunca registrou.

## Anatomia de uma entrada

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

A palavra após `@` é o tipo de entrada, que informa ao estilo que tipo de trabalho é esse e, portanto, quais campos esperar. `knuth84` é a chave de citação, o identificador que você digita dentro de `\cite{...}`. Todo o resto é um campo. O campo `author` usa a forma `Last, First` para que o estilo possa abreviar e classificar nomes de forma confiável, e `pages` usa um hífen duplo, que o LaTeX forma como um travessão de intervalo de páginas.

## Os tipos de entrada que você realmente precisa

Seis tipos cobrem quase todos os escritos acadêmicos. Use `@article` para artigos de periódicos, `@inproceedings` para artigos de conferências e workshops, `@book` para livros, `@phdthesis` para dissertações, `@techreport` para relatórios institucionais e muitos preprints, e `@misc` para qualquer outra coisa, incluindo software e sites. Escolher o tipo certo é importante porque os estilos formatam cada um de maneira diferente: uma entrada `@inproceedings` quer um `booktitle` (o nome da conferência), enquanto um `@article` quer um `journal`.

## Campos obrigatórios e por que os validadores reclamam

Cada tipo possui campos obrigatórios, e a falta de um é o motivo mais comum pelo qual uma entrada bibliográfica sai distorcida ou aciona um aviso de back-end. Para `@article` os essenciais são `author`, `title`, `journal` e `year`; para `@inproceedings`, `autor`, `título`, `título do livro` e `ano`. A falta de `ano` ou `autor` é o fracasso clássico, porque os estilos autor-ano literalmente não podem construir um rótulo de citação sem eles. Campos opcionais como `volume`, `pages`, `doi` e `publisher` tornam as entradas mais úteis, então registre-as enquanto a fonte está na sua frente. Você pode verificar um arquivo inteiro de uma vez com o [validador BibTeX](/tools/bibtex-validator/).

## Chaves que sobrevivem uma década

As chaves de citação são para sempre. Cada `\cite{knuth84}` em cada rascunho, nota e apresentação de slides refere-se a essa string exata, então renomear uma chave significa procurar cada uso. Escolha uma convenção como `authorYEAR` ou `authorYEARkeyword`, aplique-a desde o primeiro dia e nunca "limpe" chaves em um banco de dados estabelecido. Se você gerencia referências no Zotero, o plugin Better BibTeX pode gerar e fixar chaves estáveis ​​para você; veja [Zotero em um arquivo .bib](/learn/zotero-latex/). Para conectar o arquivo a um documento, comece com [Da chave .bib para citação no texto](/learn/add-citations/).