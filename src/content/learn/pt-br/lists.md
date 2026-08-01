---

title: "Marcadores, números e listas de definições"
description: "discriminar, enumerar, descrever, aninhar e rótulos de itens personalizados."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Marcadores, números e listas de definições

Listas em LaTeX são ambientes: você abre uma com `\begin{...}`, fecha-a com `\end{...}` e marca cada entrada com `\item`. O LaTeX então lida com a numeração, os marcadores, o recuo e o espaçamento para você. Essa última parte é o ponto. Você nunca renumera nada manualmente e, se excluir a terceira entrada de uma lista numerada, as entradas de quatro a dez tornam-se silenciosamente de três a nove.

## Os três ambientes de lista

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` produz uma lista com marcadores não ordenada e é a escolha certa quando as entradas não têm sequência, como uma lista de suposições. `enumerate` numera cada entrada automaticamente, que é o que você deseja para as etapas que acontecem em ordem ou para os itens aos quais você planeja consultar. Você pode até colocar um `\label` após um `\item` em um enumerado e referenciar seu número posteriormente com `\ref`, assim como faria com uma seção.

`descrição` é o menos conhecido dos três, mas muito útil. Cada `\item` recebe um argumento opcional entre colchetes, e esse argumento é impresso em negrito como um rótulo com o texto de definição seguindo-o. É o ambiente natural para glossários, listas de notação ou qualquer estrutura de "termo: explicação".

## Aninhamento

Aninhar ambientes para listas de vários níveis. Coloque um bloco `\begin{itemize} ... \end{itemize}` completo dentro de um `\item` de uma lista externa e o LaTeX o recua e alterna o símbolo do marcador automaticamente. O mesmo funciona para `enumerar`, onde o aninhamento altera o estilo de numeração em cada nível: primeiro os números arábicos, depois as letras e depois os algarismos romanos. LaTeX suporta quatro níveis de aninhamento, o que é mais do que qualquer documento legível precisa. Se você tiver três níveis de profundidade, o material provavelmente será uma prosa ou uma mesa.

## Etiquetas personalizadas

Qualquer item único pode substituir seu próprio marcador com o argumento opcional: `\item[(a)]` imprime "(a)" em vez do marcador ou número. Isso é útil para casos únicos, mas se você quiser reestilizar uma lista inteira, alterar cada item manualmente anula a automação. Para isso, carregue o pacote `enumitem`, que permite escrever coisas como `\begin{enumerate}[label=(\alph*)]` para renomear a lista inteira em um só lugar, e também oferece opções para diminuir o espaçamento vertical.

Um erro comum de iniciante é deixar uma linha em branco entre as entradas `\item` na esperança de espaçá-las. A linha em branco é inofensiva dentro de uma lista, mas não faz nada visualmente. O espaçamento é controlado pelo próprio ambiente da lista ou pelas opções `enumitem`. Outro: todo ambiente de lista deve conter pelo menos um `\item` antes de qualquer texto, ou você receberá o erro confuso "Algo está errado - talvez um \item faltando". Você pode experimentar todos os três ambientes no [playground ao vivo](/live/).