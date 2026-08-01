---

title: "Aponte para outras partes do PDF"
description: "rótulo e ref, além de inteligência para nomes automáticos."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Aponte para outras partes do PDF

Digitar “veja a Figura 3” à mão é uma promessa que você não pode cumprir. Adicione um número anterior no papel e todos os números digitados à mão depois dele estão errados. O LaTeX resolve isso com um mecanismo de duas partes: `\label` anexa um nome de sua escolha a uma coisa numerada, e `\ref` imprime qualquer número com o qual aquela coisa terminou. Você se refere a nomes e o compilador mantém os números honestos.

## Etiqueta e referência

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` registra o número atribuído mais recentemente, aqui o da seção, sob a chave `sec:methods`. Mais tarde, `\ref{sec:methods}` imprime esse número, e `\eqref` é a variante amsmath que adiciona a convenção de parênteses para equações, imprimindo "(1)" em vez de "1".

Dois detalhes neste exemplo são muito importantes. Primeiro, dentro de uma figura o rótulo deve vir depois de `\caption`, pois a legenda é o que pisa o contador de figuras; um rótulo colocado antes dele seleciona silenciosamente o número da seção atual. Segundo, o `~` em `Figure~\ref{...}` é um espaço inseparável, que mantém a palavra e seu número na mesma linha em vez de deixar "Figure" terminar uma linha e "3" iniciar a próxima.

Os prefixos `sec:`, `fig:` e `eq:` são pura convenção. O LaTeX não os exige, mas eles tornam as chaves legíveis e permitem que o editor preencha automaticamente os rótulos por tipo.

## Por que você vê ??

Na primeira compilação após adicionar um rótulo, `\ref` imprime `??`. Os números são resolvidos através do arquivo `.aux` escrito durante a execução anterior, portanto um novo rótulo precisa de mais uma compilação para aparecer; [por que você compila mais de uma vez](/learn/compile-to-pdf/) explica o mecanismo. Um `??` que sobrevive a duas compilações consecutivas quase sempre significa que a chave em `\ref` não corresponde à chave em `\label`.

##smartef escreve a palavra para você

Com smartef (carregar após hiperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` imprime "Figura 3", o nome do tipo incluído, e se adapta se o rótulo for uma tabela ou uma equação. `\Cref` coloca letras maiúsculas no início das frases e `\cref{eq:a,eq:b,eq:c}` compacta uma lista em um intervalo. Observe a ordem de carregamento: intelligentef é um dos poucos pacotes que deve vir depois do [hyperref](/learn/hyperlinks/), o inverso da regra usual. Adote-o cedo. Adaptar `\cref` em um papel cheio de frases "Figure~\ref" escritas à mão é tedioso.