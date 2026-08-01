---

title: "Artigos de química em LaTeX: fórmulas, esquemas e unidades SI"
description: "Reações com mhchem, estruturas, tabelas experimentais, unidades SI, bibliografias e rascunhos particulares para estudantes de química e engenharia química."
date: 2026-06-22
tags: [chemistry, research]
---

Os químicos geralmente aparecem no LaTeX por um de dois motivos: a revista insiste,
ou um colaborador já trabalha dessa forma. De qualquer forma, os pontos problemáticos parecem
familiar: esquemas de reação, rótulos de isótopos, tabelas de condições e um
bibliografia recheada de periódicos e patentes.

Este guia cobre relatórios de graduação até as primeiras submissões de periódicos. Isso vai
não substitui o ChemDraw por produtos naturais complexos. Ele manterá o manuscrito
e a seção experimental de combate ao compilador.

## Reações com mhchem

`mhchem` é a resposta usual para fórmulas e reações:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Fixe a versão 4 para que a sintaxe não mude entre coautores ou entre Overleaf
e uma instalação local do TeX. Passo a passo mais longo:
[fórmulas químicas](/learn/notação química/).

Esquemas de múltiplas etapas com reagentes acima e abaixo da seta necessitam de mais do que
embutido `\ce`. mhchem lida com as fórmulas; o layout geralmente quer um esquema de diário
ambiente ou uma figura externa. Não empurre uma síntese total de vinte passos
em uma série de linhas químicas em linha.

## Estruturas: chemfig ou desenhos externos

`chemfig` desenha estruturas simples em TeX puro e mantém tudo
vetor-local. Produtos naturais complexos são quase sempre melhores como ChemDraw,
Marvin, ou similar, exportado para PDF, então `\includegraphics`. Prefira PDF vetorial
sobre uma captura de tela PNG para que as linhas de ligação permaneçam nítidas na impressão e em duas colunas
layout.

Nomeie os arquivos por ID composto (`cmpd-12.pdf`). Mantenha a fonte editável do ChemDraw
no arquivo do laboratório, mesmo que o git contenha apenas o PDF que vai no papel.

## Seções experimentais e tabelas longas

Tabelas de condições (temperatura, solvente, rendimento, carga de catalisador) funcionam bem
com `booktabs` e frequentemente `siunitx` para colunas numéricas:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Se uma tabela durar mais que uma página, mude para `longtable` antes do prazo
semana, não depois de a revista reclamar das fontes 7pt. A legenda deveria dizer
o que significa "rendimento" (isolado, RMN, GC), para que os leitores não fiquem adivinhando.

## Unidades e trechos de espectroscopia

Escolha um estilo de unidade e siga-o: `siunitx` ou manual `\mathrm` se o grupo
já concordou com isso. Trechos de RMN e HRMS em seções experimentais são
geralmente texto simples com espaçamento cuidadoso. Não invente uma linguagem macro frágil
mid-paper, a menos que o laboratório já compartilhe um.

Relate algarismos significativos da mesma forma que o notebook faz. LaTeX imprimirá com prazer
precisão falsa se você digitá-la.

## Esquemas vs figuras

Muitas revistas de química distinguem esquemas (reações) de figuras (gráficos,
ORTEP, espectros). Use os ambientes que a classe de diário envia (`scheme`,
`figure`) para que a numeração corresponda à produção. Referência cruzada com `\ref` e estável
rótulos (`sch:reduction`, `fig:ortep-1`).

## Segurança do rascunho

Rotas inéditas e parceiros industriais transformam editores somente em nuvem em um
questão política, não apenas uma questão de conveniência. Mantendo `.tex` e figuras
como arquivos comuns em disco com Git são chatos de uma forma útil.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) é um local
editor de pesquisa: compiladores agrupados, verificações de referência e citação em todo o projeto, offline
ortografia e gramática apenas em prosa (portanto, `\ce` e chaves de citação não são sinalizadas como
"erros de digitação"), pontos de verificação reais do Git, IA opcional que só edita mediante aprovação
diferenças. Nenhuma conta. O rascunho não precisa de um editor terceirizado para existir.
A rede é para pacotes, pesquisa de citações ou IA, se você ativá-los.

## Cite a literatura primária correta

As bibliografias de química dependem fortemente de periódicos e patentes. Exportar do Zotero
ou EndNote em um `.bib` com chaves estáveis, então valide os campos ausentes antes
envio: [validador BibTeX](/tools/bibtex-validator/). Bibliografias vazias
são quase sempre um erro de caminho ou de back-end, sem citações perdidas.

Os estilos de periódicos diferem (ACS, RSC, Springer). Use o estilo bibliográfico
o modelo é enviado com. Não cole numérico e ano do autor juntos em um
preâmbulo.

## Colaboração

Crie seções por pessoa quando puder. Uma pessoa possui o `.bib`. Concordo
versão mhchem e formato de exportação de estrutura antecipadamente. Quando vários experimentos
seções crescem em paralelo, compile o PDF completo toda semana para integração
surpresas aparecem cedo.

## Lista de verificação pré-envio

Vale uma passada final:

- versão mhchem fixada; fórmulas são compiladas sem avisos, você foi
  ignorando.
- As estruturas são vetoriais sempre que possível; IDs compostos correspondem em texto, esquemas,
  e SI.
- As tabelas utilizam estilo de três regras; unidades consistentes; rendimentos definidos na legenda
  ou notas.
- A numeração do esquema/figura corresponde à classe do diário.
- `.bib` validado; estilo corresponde ao modelo.
- Rotas confidenciais permanecem em uma pasta local com controle de acesso correspondente ao laboratório
  política.

## SI e listas de verificação de periódicos

Muitas revistas de química publicam listas de verificação do autor (resolução gráfica, TOC
tamanho gráfico, caracterização composta). Dê uma olhada naquele PDF antes de desenhar
esquemas. Uma proporção de aspecto gráfico do TOC errada é um motivo idiota para um administrador
rejeição.

## Informações de apoio

O SI geralmente tem seu próprio modelo ou regras de cabeçalho. Mantenha as fontes SI na mesma
repo como documento principal com nomes de arquivos claros. Quando o diário exige
caracterização, verifique se cada número composto no texto principal realmente
aparece no SI.

A formatação química é complicada porque os objetos são densos. Obtenha as reações
e tabelas à direita e a seção experimental parece um trabalho cuidadoso, não um
colar de um caderno PDF.