---

title: "Teorema e blocos de prova"
description: "estilos amsthm, contadores compartilhados, marcas de fim de prova."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Teorema e blocos de prova

A escrita matemática baseia-se em afirmações numeradas: teoremas, lemas e definições, cada um destacado do texto e numerado para que provas posteriores possam citá-los. O pacote `amsthm` fornece o maquinário. Você declara os tipos de blocos que seu documento precisa uma vez no preâmbulo e depois os usa como ambientes comuns.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Declarando os ambientes

`\newtheorem{teorema}{Teorema}[seção]` cria um ambiente de `teorema`. O primeiro argumento é o nome do ambiente que você digitará, o segundo é o texto do cabeçalho impresso e o `[seção]` à direita vincula a numeração às seções, portanto, o terceiro teorema da seção 2 é o Teorema 2.3 e o contador é zerado a cada nova seção.

`\newtheorem{lema}[teorema]{lema}` coloca o argumento opcional na outra posição, onde significa algo diferente: `[teorema]` diz que os lemas compartilham o contador de teoremas em vez de manter os seus próprios. Um contador compartilhado produz uma única sequência, Teorema 2.1 seguido pelo Lema 2.2. Isso é mais fácil de seguir do que sequências paralelas onde existem o Lema 2.1 e o Teorema 2.1.

`\theoremstyle` define a aparência de cada declaração que o segue. O estilo `plain` imprime o corpo em itálico, o tratamento tradicional para teoremas, lemas e proposições. O estilo `definição` mantém o corpo ereto, o que se adapta a definições e exemplos. Um terceiro estilo, “observação”, é ainda mais leve e adequado a notas e observações. Agrupe suas declarações sob o estilo que cada uma deve usar.

## Usando os blocos

O argumento opcional do ambiente imprime um nome após o título, então `\begin{teorema}[Nome opcional]` produz algo como o Teorema 2.4 (Fubini). O ambiente `prova` imprime um cabeçalho de prova em itálico e fecha com a marca de fim de prova, o pequeno quadrado alinhado à direita.

`\qedhere` reposiciona esse quadrado quando a prova não termina em texto comum. Se a última linha de uma prova for uma equação exibida, a marca automática cairia em uma linha vazia abaixo dela. Escrever `\qedhere` dentro do display coloca o quadrado na própria reta da equação. Quando uma prova termina em texto simples, como no exemplo, o comando é inofensivo, mas desnecessário.

Blocos de teoremas são objetos numerados como qualquer outro, então `\label{thm:main}` dentro do ambiente e `Theorem~\ref{thm:main}` no texto funcionam com as regras usuais de duas passagens descritas em [números e ponteiros para equações](/learn/number-equations/). O erro comum de declaração é colocar todos os ambientes em `\theoremstyle{plain}`, o que define definições de vários parágrafos em itálico. Mantenha as definições e exemplos no estilo `definição`.