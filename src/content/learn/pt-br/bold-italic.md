---

title: "Ênfase sem lutar contra a fonte"
description: "textbf, textit, emph, mono e por que emph aninha-se melhor do que itálico codificado."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Ênfase sem lutar contra a fonte

A ênfase no LaTeX vem de um pequeno conjunto de comandos em que cada um considera o texto afetado como um argumento entre chaves. O LaTeX separa duas ideias que a maioria dos processadores de texto mescla: aplicar um tipo de letra específico e marcar um intervalo conforme enfatizado. Saber qual comando mantém os documentos consistentes quando os estilos mudam.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Os comandos

`\textbf` define negrito, o tratamento padrão para ênfase forte e para palavras-chave em definições. `\textit` define o tipo de itálico diretamente. `\texttt` muda para a fonte de máquina de escrever monoespaçada, a convenção para nomes de arquivos, comandos e identificadores de código em texto corrido. `\textsc` define versalete, comum para nomes de autores em bibliografias e para siglas que de outra forma dominariam uma linha de texto.

`\underline` existe, mas merece seu comentário no exemplo. O sublinhado é um substituto do itálico da era da máquina de escrever e, no LaTeX, também tem um problema mecânico: o texto sublinhado é colocado em uma caixa, de modo que não pode quebrar as linhas, e uma frase sublinhada longa ultrapassará a margem. Na tipografia impressa, o itálico faz o trabalho que o sublinhado costumava fazer.

Os comandos são aninhados, então `\textbf{\textit{bold italic}}` combina ambos quando a fonte fornece a face.

## Por que \emph

`\emph` marca o significado em vez da aparência: diz "enfatize isso" e deixa o contexto decidir como. No texto vertical imprime itálico. Dentro do texto que já está em itálico, ele volta para a posição vertical, de modo que a ênfase dentro da ênfase permanece visível. `\textit` codificado dentro do texto em itálico simplesmente permanece em itálico e a ênfase interna desaparece. A intenção de marcação também compensa mais tarde. Uma classe ou pacote pode redefinir a aparência da ênfase em um local sem edições em todo o documento.

Regra prática: use `\emph` para ênfase na prosa corrente e reserve `\textit` para coisas que são convencionalmente em itálico, independentemente do contexto, como títulos de livros, frases estrangeiras e nomes de espécies.

## Limites e hábitos

Todos esses são comandos em modo texto e se comportam mal dentro de fórmulas. Símbolos matemáticos em negrito precisam de `\mathbf` ou `\boldsymbol`, abordados em [matemática em negrito](/learn/bold-math/). Resista ao empilhamento de ênfase, porque quando tudo é ousado, nada se destaca. Crie títulos a partir de comandos estruturais como `\section` em vez de negrito manual, já que a estrutura também alimenta o índice e marcadores de PDF. [Tipo maior e menor](/learn/font-size/) apresenta o mesmo argumento para tamanhos de fonte.