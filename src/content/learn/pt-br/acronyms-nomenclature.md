---

title: "Siglas e listas de símbolos"
description: "glossários-esboço extra ou uma lista feita à mão quando isso for suficiente."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Siglas e listas de símbolos

Documentos longos acumulam abreviações e as convenções em torno deles são rígidas. Um acrônimo é escrito por extenso no primeiro uso, abreviado depois, e uma tese geralmente precisa de uma lista de abreviações no título. Manter isso manualmente falha de maneira previsível. Você reordena dois capítulos, o primeiro uso se move e, de repente, "ML" aparece três páginas antes de "aprendizado de máquina (ML)". O pacote `glossaries-extra` rastreia o primeiro uso para você.

## A rota automatizada

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

A opção `acronym` habilita o suporte a acrônimos e `\makeglossaries` ativa o mecanismo que coleta entradas durante a compilação. Cada `\newacronym` leva três argumentos: uma chave que você digitará no texto, o formato abreviado e o formato longo. Defina todos eles no preâmbulo ou em um arquivo separado `\input`, para que eles fiquem em um só lugar.

No corpo, você nunca digita a sigla em si:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

O primeiro `\gls{ml}` no documento imprime "aprendizado de máquina (ML)", e cada um posterior imprime apenas "ML". Como o pacote rastreia o uso e não a posição na origem, a expansão segue o primeiro uso onde quer que sua reestruturação a mova. `\printglossaries` imprime a lista coletada de abreviações onde quer que você a coloque, normalmente após o índice. Comandos relacionados cobrem a gramática em torno disso: `\glspl` para plurais, `\Gls` para início de frase em maiúscula.

O problema é a construção. Entre as passagens do LaTeX, o auxiliar `makeglossaries` deve ser executado para classificar e formatar as entradas, ou `\printglossaries` não produz nada silenciosamente. Configurações completas do latexmk lidam com isso automaticamente. Pipelines mais simples talvez não, e glossários extras oferecem uma alternativa para eles. Se a sua lista se recusa teimosamente a aparecer, a execução auxiliar ausente é a primeira suspeita, bem à frente de um bug no seu documento.

## A rota construída à mão

Para uma lista simples de símbolos, um ambiente de “descrição” mantido manualmente geralmente é suficiente:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Cada `\item[...]` imprime seu argumento de colchete como um rótulo em negrito com a explicação a seguir, que é exatamente o formato de uma lista de notação. Não há rastreamento no primeiro uso, mas uma lista de símbolos raramente precisa de algum; os símbolos são definidos onde aparecem pela primeira vez na matemática, independentemente.

O conselho honesto é combinar a ferramenta com a balança. Um artigo com cinco siglas é mais fácil de gerenciar manualmente. Uma tese de 200 páginas com quarenta não o é, e aí o pacote paga muitas vezes o custo de configuração. A [lição de listas](/learn/lists/) cobre o ambiente `descrição` com mais detalhes.