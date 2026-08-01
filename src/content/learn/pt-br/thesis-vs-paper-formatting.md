---

title: "Formatação de tese versus formatação de papel"
description: "Aulas universitárias, capa, capítulos, encadernação de margens e reaproveitamento de material de papel."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formatação de tese versus formatação de papel

Um artigo é formatado para um editor. Uma tese é formatada para uma pós-graduação, uma fera muito diferente, com regras muito diferentes. Se você tiver apenas artigos escritos, o modelo de tese irá surpreendê-lo de maneiras específicas.

## Quem define as regras

Artigos: o local oferece uma aula ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) e todo mundo no mundo usa o mesmo. Teses: sua universidade exige sua própria aula ou uma página de regras tipográficas (margens, espaçamento entre linhas, texto da página de título), e não há duas universidades que concordem. Obtenha primeiro a aula oficial no site do seu departamento ou escola de pós-graduação. Se for antigo e se recusar a compilar, é comum o suficiente para ter [sua própria lição](/learn/fix-broken-template/).

## As diferenças estruturais

| Aspecto | Papel | Tese |
|---|---|---|
| Unidade de nível superior | `\seção` | `\capítulo` |
| Base de classe | aula de local | derivada de `livro`/`relatório` |
| Matéria inicial | título + resumo | página de título, declaração, resumo, sumário, listas de figuras e tabelas |
| Comprimento | 8 a 30 páginas | 80 a 300 páginas |
| Disposição | frequentemente duas colunas | coluna única, espaçamento generoso |
| Lados | PDF unilateral | geralmente frente e verso para impressão |

Os capítulos mudam tudo posteriormente: a numeração passa a ser `3.2`, as figuras passam a ser `Figura 3.1` e cada capítulo geralmente abre em uma página nova (às vezes à direita).

## O assunto principal é metade da batalha

Uma sequência inicial de tese normalmente é executada: página de título, declaração de originalidade, resumo, agradecimentos, índice, lista de figuras, lista de tabelas e, em seguida, capítulo 1. A maior parte é automatizada:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

A dança da numeração de páginas romano-árabe faz todo mundo viajar uma vez, [matéria inicial e números de página](/learn/front-matter-page-numbers/) cobre-a adequadamente.

## Impressão frente e verso e margens de encadernação

As teses impressas são geralmente frente e verso (opção de classe `twoside`), o que torna as margens assimétricas: a margem interna é mais larga para sobreviver à encadernação. As regras da sua universidade dirão algo como “margem esquerda 35 mm, outras 25 mm”, que em um documento frente e verso significa *interno*, não esquerdo. Não lute contra isso com `\hspace` manual, a opção de classe mais as configurações de `geometria` cuidam disso:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

`openright` força os capítulos para as páginas da direita, padrão para cópias encadernadas.

## Reutilizando seus artigos como capítulos

A maioria das teses absorve artigos publicados, e a maioria das universidades permite isso explicitamente. A mecânica: retirar de cada artigo o preâmbulo do local, rebaixar suas `\seções` se necessário, unificar a notação e as macros entre os capítulos e mesclar as bibliografias em uma. Manter cada capítulo em seu próprio arquivo torna isso gerenciável. [Dividindo capítulos em arquivos](/learn/split-chapter-files/) mostra a configuração `\input`/`\include` que mantém uma compilação de 200 páginas sã.

Um aviso honesto: as aulas de teses universitárias tendem a ter muitos pacotes, então a primeira compilação em uma máquina nova pode extrair um lote de pacotes antes de ter sucesso. Deixe terminar uma vez e as compilações subsequentes serão rápidas.