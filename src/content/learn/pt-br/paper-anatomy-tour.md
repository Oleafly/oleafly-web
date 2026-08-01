---

title: "Um papel, de cima para baixo"
description: "Um passeio a pé por cada parte de um artigo de pesquisa e o trabalho que cada parte realiza."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Um papel, de cima para baixo

Os artigos de pesquisa parecem intimidantes até você perceber que eles são montados a partir da mesma dúzia de peças, aproximadamente na mesma ordem, todas as vezes. Depois de conhecer o trabalho de cada parte, você poderá ler os artigos com mais rapidez e escrevê-los sem olhar para uma página em branco. Aqui está o passeio.

## O assunto principal

| Parte | É um trabalho |
|---|---|
| Título | Faça o leitor certo parar de rolar. |
| Autores | Diga quem fez o trabalho e para quem enviar e-mail. |
| Resumo | Venda o artigo inteiro em 150-250 palavras. |
| Palavras-chave | Ajude os mecanismos de pesquisa e indexadores a arquivá-lo corretamente. |

O título e o resumo fazem a maior parte do recrutamento. Noventa por cento dos seus leitores em potencial não verão mais nada, e é por isso que [o resumo tem sua própria lição](/learn/write-an-abstract/) e a [página de título tem sua própria mecânica LaTeX](/learn/title-page/).

## O corpo

| Parte | É um trabalho |
|---|---|
| Introdução | Explique por que o problema é importante e com que você contribui. |
| Trabalhos relacionados | Posicione seu trabalho entre tudo o que veio antes. |
| Método | Descreva o que você fez com precisão suficiente para reproduzir. |
| Experimentos/resultados | Mostre evidências de que o método funciona. |
| Discussão | Interprete a evidência honestamente, inclusive quando ela for fraca. |
| Conclusão | Reafirme a conclusão e indique o que vem a seguir. |

O corpo é um argumento contado em etapas: aqui está um problema, aqui está a nossa ideia, aqui está a prova de que funciona, aqui está o que significa. Se uma seção não apresentar esse argumento, ela será um preenchimento. Consulte [introdução e trabalhos relacionados](/learn/introduction-and- Related-work/) e as [seções da sala de máquinas](/learn/methods-results-discussion/) para saber mais sobre cada um.

## O assunto por trás

| Parte | É um trabalho |
|---|---|
| Agradecimentos | Agradeça aos financiadores, ajudantes e revisores dos rascunhos. |
| Referências | Liste todas as fontes que você citou, formatadas de acordo com as regras do local. |
| Apêndice | Guarde provas, tabelas extras e detalhes que interromperiam o fluxo. |
| Material complementar | Carregue códigos, dados e vídeos que não cabem em um PDF. |

As referências não são decoração, são a evidência em que suas afirmações se baseiam. Consulte [notas de rodapé, referências e apêndices](/learn/footnotes-references-appendix/) para quem lê o quê e [citações](/learn/add-citations/) para a mecânica do LaTeX.

## O esqueleto em LaTeX

A maior parte disso é mapeada diretamente para comandos que você já conhece:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Os comandos de seccionamento cuidam da numeração e do índice para você, conforme abordado em [seções e estrutura](/learn/sections/).

## Para onde ir em seguida

Se você é novo no gênero de artigos, comece com [o que realmente é um artigo de pesquisa](/learn/what-is-a-research-paper/). Se você estiver prestes a escrever um, o restante desta trilha percorre cada parte em ordem, de [resumos](/learn/write-an-abstract/) até [quanta matemática você realmente precisa](/learn/how-much-math/). Leia a parte em que você está travado, escreva e repita.