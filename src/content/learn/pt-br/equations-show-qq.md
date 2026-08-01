---

title: "Pontos de interrogação em vez de números"
description: "As etiquetas precisam de outra passagem; colocação da etiqueta após as legendas."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Pontos de interrogação em vez de números

Você compila e onde deveria estar uma figura ou número de equação, o PDF mostra `??`. Isso não é um erro na sua fonte. É assim que o LaTeX renderiza uma referência que ainda não pode ser resolvida, e a correção geralmente é apenas compilar novamente.

## Por que uma passagem não é suficiente

LaTeX lê seu documento de cima a baixo em uma única passagem. Quando encontra um `\label`, ele grava o número atual no arquivo `.aux`; quando encontra um `\ref`, ele procura o número no arquivo `.aux` escrito pela execução anterior. Em uma nova compilação não há execução anterior, então cada referência é impressa como `??`. A segunda passagem lê o arquivo `.aux` completo e preenche os números. O compilador empacotado do Oleafly executa novamente as passagens automaticamente até que os números se acomodem, mas se você dirigir o `pdflatex` manualmente, a segunda compilação é seu trabalho.

## Quando ?? sobrevive a uma segunda passagem

Se os pontos de interrogação persistirem, faça três verificações. Primeiro, compare a grafia em `\ref` com `\label` caractere por caractere; os rótulos diferenciam maiúsculas de minúsculas e um espaço perdido conta. Em segundo lugar, verifique onde fica o rótulo. `\label` registra o valor do contador pisado mais recentemente, e em um float é `\caption` que pisa o contador, então o rótulo deve vir depois da legenda:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Um rótulo colocado antes da legenda é compilado sem reclamação, mas pega o contador errado, geralmente a seção atual, então a referência imprime um número plausível, mas errado, em vez de `??`. Essa variante é pior porque é fácil de passar despercebida. Terceiro, se o arquivo `.aux` foi excluído no meio da execução ou uma compilação foi interrompida, os rótulos gravados podem estar incompletos; recompilar a partir de um estado limpo.

## Lendo os avisos

O log informa em qual caso você está. "Havia referências indefinidas" significa que pelo menos um `\ref` não encontrou nada. "Os rótulos podem ter sido alterados. Execute novamente para obter as referências cruzadas corretas" significa que outra passagem corrigirá o problema. "Rótulo multiplicado definido" significa que dois comandos `\label` compartilham um nome, e o LaTeX usa silenciosamente um deles, então renomeie até que cada rótulo seja único. Uma convenção de nomenclatura com prefixos `eq:`, `fig:` e `tab:` torna as colisões raras e a fonte mais fácil de pesquisar; o próprio fluxo de trabalho da etiqueta é abordado em [números e ponteiros para equações](/learn/number-equations/).