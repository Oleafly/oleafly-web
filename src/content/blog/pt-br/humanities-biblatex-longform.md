---

title: "Humanidades e formato longo: biblatex, notas de rodapé e livros de capítulos"
description: "Notas de rodapé, citações flexíveis, fontes de arquivo, estrutura de vários capítulos e propriedade plurianual de história, literatura, filosofia e clássicos."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Os manuscritos de humanidades se preocupam tanto com o formato da citação quanto com o argumento. Um numérico
O estilo IEEE está errado aqui; notas de rodapé, título do autor e fontes de arquivo são os
norma. Vale a pena aprender LaTeX quando você tiver mais do que um trabalho de seminário e um
poucos livros na bibliografia.

Este guia é para estudantes empilhando capítulos de teses ou redigindo um longo artigo
com notas de rodapé reais. Se você precisar apenas de três entradas do MLA, poderá parar mais cedo.

## Prefira biblatex para flexibilidade

`biblatex` lida com notas de rodapé, estilos detalhados e taquigrafia melhor que o clássico
BibTeX para a maioria dos fluxos de trabalho de humanidades:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Alternativas comuns incluem `authortitle`, `detalhado`, estilos específicos de periódicos,
ou o que quer que seu departamento exija. Combine o manual primeiro e depois escolha o
estilo biblatex mais próximo. Antecedentes:
[BibTeX ou biblatex](/learn/bibtex-vs-biblatex/).

Execute **biber** (ou o backend que seu estilo precisa), não apenas pdflatex. Vazio
bibliografias são quase sempre um erro de back-end ou de caminho. Validar entradas
antes do envio: [validador BibTeX](/tools/bibtex-validator/).

## Arquivo e fontes da web

Cartas, manuscritos e sites precisam de campos que registrem entradas `@article`
não se importe com:

- `@unpublished` ou biblatex `@online` para fontes da web com `urldate`
- localização do arquivo, coleção, fólio para manuscritos
- chaves estáveis que você ainda entenderá em dois anos

Entradas incompletas falham silenciosamente até que a bibliografia pareça esparsa. Prefira um
`.bib` (ou um pequeno conjunto por projeto) sobre texto de nota de rodapé copiado e colado que flutua
fora de sincronia com os trabalhos citados.

## Notas de rodapé vs notas finais

Muitos estilos de humanidades desejam notas de rodapé. estilos detalhados `biblatex` e
`\footcite` / citações automáticas de notas de rodapé cobrem muito terreno. Se o
departamento deseja notas finais, configure isso com antecedência. Convertendo três capítulos de
citações de notas de rodapé a semana de submissão é péssima.

Mantenha os apartes substantivos curtos. Se uma nota de rodapé for um parágrafo completo, pergunte se
pertence ao texto principal. Os leitores folheiam.

## Capítulos e edições críticas

Projetos do tamanho de um livro querem `livro`, `memórias` ou uma aula de tese universitária com
`\include` por capítulo:

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Referências cruzadas para outros capítulos devem usar `\ref` / `\cref`, não codificadas
"veja o Capítulo 4" cordas que apodrecem quando você reordena. Estruturar visualizações dessa lista
os títulos dos arquivos ajudam em um rascunho de 200 páginas. O mesmo acontece com a compilação com
`\includeonly` enquanto você revisa um capítulo.

Edições críticas e textos paralelos possuem pacotes especializados. Não invente um
layout com minipáginas brutas até verificar se uma classe mantida
já existe para o seu idioma.

## Citação e idioma

Use aspas adequadas ao idioma do artigo (`csquotes` ajuda com
aspas aninhadas e marcas de reconhecimento de idioma). Bloqueie citações com mais de algumas linhas
deve usar um ambiente de cotação, não recuo manual que interrompe
layouts de duas colunas ou quando as margens mudam.

Para projetos multilíngues, XeLaTeX ou LuaLaTeX com `fontspec` e uma linguagem
pacote é menos doloroso do que empilhar hacks `inputenc` dos anos 90. Escolha fontes que
cubra os scripts que você precisa antes de escrever o capítulo três em uma fonte que não pode
renderizá-los.

## Imagens, mapas e notas de uso justo

Mapas e fotos manuscritas geralmente incluem PDF/PNG externo, não TikZ.
Legenda com fonte e status de permissão. Mantenha masters de alta resolução do lado de fora
o histórico do git se eles forem enormes; confirme as figuras compactadas no papel
realmente usa e coloque uma nota no README sobre onde moram os mestres.

## Propriedade local de anos de notas

Uma dissertação é uma árvore de arquivos plurianual. Mantendo-o apenas em um projeto de navegador
vinculado a uma conta é um risco quando os alunos mudam de instituição ou perdem o acesso
após a formatura.

Pastas simples mais Git, compiladas localmente, envelhecem melhor.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) visa isso
tipo de documento longo. Você obtém visualizações de estrutura em todos os capítulos, em todo o projeto
referências e citações, ortografia off-line e gramática em prosa (pula chaves de citação) e
pontos de verificação reais do Git sem uma conta. Você ainda pode abrir os mesmos arquivos em
qualquer outro editor. A propriedade é o ponto.

## Fluxo de trabalho que sobrevive a um comitê

Congelar o estilo de citação em relação ao manual no primeiro ano e manter um
banco de dados bibliográfico com chaves estáveis. Coloque os arquivos dos capítulos sob controle de versão
com um controle remoto privado. O assunto inicial (resumo, agradecimentos, TOC) deve
siga as regras da classe universitária para páginas romanas/árabe. Compile o PDF completo
mensalmente, mesmo se você redigir com `\includeonly`, portanto, as referências entre capítulos não
surpreenda você no final.

## Pré-envio

- Biber/bibtex funcionando limpo; não `[?]` cita.
- O estilo da nota de rodapé corresponde ao departamento.
- Referências cruzadas de capítulos atualizadas após reordenação.
- Incorporação de fontes; as margens correspondem à lista de verificação do escritório de teses.
- Fonte e PDF arquivados, não apenas o recibo do portal de upload.

## Indexação e retrocesso

Projetos de classe de livro às vezes precisam de um índice (`imakeidx` e amigos). Orçamento
hora de uma verdadeira indexação; a marcação automática de cada palavra em maiúscula produz
lixo. Os apêndices para transcrições devem usar numeração clara para que os principais
capítulos podem `\ref`.

## Rascunhos do comitê vs PDF de depósito

Rascunhos de linhas numeradas ou margens largas podem ajudar na marcação, mas o PDF de depósito deve
corresponder ao exemplar do escritório de teses. Mantenha uma opção de classe ou um sinalizador de "rascunho" separado
portanto, você não estará editando manualmente as margens na manhã do depósito.

Obtenha o mecanismo de citação logo no início. O argumento merece mais atenção
do que uma briga bibliográfica da semana passada.