---

title: "Blocos de título e páginas de título"
description: "maketitle para artigos, página de rosto para teses e relatórios."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Blocos de título e páginas de título

Um artigo abre com um bloco de título: título, autores, data, colocado no topo da primeira página. Uma tese abre com uma página de título completa definida de acordo com as especificações da universidade. O LaTeX trata isso como dois problemas diferentes. O primeiro é automatizado por `\maketitle`, e o segundo é uma tela em branco chamada ambiente `titlepage`.

## O bloco de título

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Os três primeiros comandos armazenam apenas metadados. Nada aparece no PDF quando eles são executados, e é por isso que podem ficar no preâmbulo. `\maketitle`, colocado depois de `\begin{document}`, é o momento em que o bloco armazenado é digitado. Dentro de `\author`, `\\` quebra uma linha (a maneira usual de colocar uma afiliação sob um nome) e `\and` separa vários autores para que sejam colocados lado a lado. `\date{\today}` imprime a data de qualquer dia que você compilar. Escreva `\date{}` com colchetes vazios para omitir totalmente a linha de data. Deixar `\date` completamente de fora ainda imprime a data de hoje.

Na classe `article`, o bloco fica no topo da página um com o texto abaixo. Em `report` e `book` ele obtém uma página própria. As aulas de diário e conferência substituem esse mecanismo por seus próprios comandos para afiliações, e-mails e ORCIDs, portanto, dentro de um modelo de local você deve seguir seu arquivo de amostra em vez dos comandos padrão.

## Uma página de título feita à mão

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

O ambiente `titlepage` oferece uma página não numerada e controle manual total, que é o que os regulamentos de teses geralmente exigem. Cada pedaço do exemplo ganha seu lugar. `\centering` centraliza tudo o que segue dentro do ambiente. `\vspace*{2cm}` empurra o título para baixo a partir da borda superior. O formulário com estrela é importante porque um `\vspace` sem estrela no topo de uma página é descartado. As chaves em torno de `{\Large ...}` alteram o tamanho da fonte para que termine onde o grupo termina, e `\\[1em]` quebra a linha com um em extra de espaço abaixo dela. `\vfill` insere um espaço extensível que absorve qualquer altura restante, de modo que a declaração de grau e a data ficam na parte inferior da página, não importa o tamanho do título.

Use um mecanismo ou outro. Combinar `\maketitle` com um ambiente `titlepage` produz duas páginas de título, e a falha clássica para iniciantes é a mais silenciosa: definir `\title` e `\author` mas esquecer `\maketitle`, então o documento é compilado de forma limpa e sem título algum. A [lição de esqueleto do documento](/learn/document-skeleton/) mostra onde o bloco se encaixa no arquivo como um todo.