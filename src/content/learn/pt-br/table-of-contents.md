---

title: "TOC, listas de figuras, listas de tabelas"
description: "índice e por que a segunda passagem é importante."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, listas de figuras, listas de tabelas

Um índice em LaTeX não é algo que você constrói ou mantém. Você coloca um único comando onde quiser e o LaTeX monta as entradas dos títulos que você já escreveu. O mesmo vale para a lista de figuras e a lista de tabelas, que reúnem legendas em vez de títulos. Este é um dos lugares onde declarar a estrutura compensa diretamente: renomeie uma seção ou mova uma figura e o assunto frontal se corrige.

## Os três comandos

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` imprime o sumário no ponto onde ele aparece, normalmente logo após a página de título ou resumo. Cada `\chapter`, `\section` e `\subsection` numerado aparece com seu número, título e página, até a profundidade definida pelo contador `tocprofundidade` descrito na [lição de títulos](/learn/sections/). `\listoffigures` e `\listoftables` fazem o mesmo para legendas de figuras e tabelas, extraindo o texto de cada `\caption{...}`. Em artigos eles são incomuns, mas as teses geralmente exigem ambos, colocados em suas próprias páginas após o sumário.

## Por que a segunda passagem é importante

Compile **duas vezes** após alterações estruturais. Isso não é superstição. É assim que o mecanismo funciona. Durante uma compilação, o LaTeX não pode saber na página 2 o que terminará na página 47, então ele grava cada título e seu número de página final em um arquivo auxiliar (`.toc`, `.lof`, `.lot`) à medida que avança. `\tableofcontents` lê o arquivo que sobrou da execução anterior. Em um projeto novo, esse arquivo ainda não existe, então a primeira compilação produz um TOC vazio. Depois de adicionar ou mover seções, o sumário mostra títulos obsoletos ou números de página errados até a próxima execução. A segunda compilação lê o arquivo recém-escrito e tudo se alinha. Editores que executam latexmk ou um wrapper equivalente cuidam das repetições para você, e é por isso que você talvez nunca tenha notado. Se o seu TOC parecer errado, compile mais uma vez antes de depurar qualquer outra coisa.

## Seções marcadas com estrela e o sumário

As seções marcadas com estrela precisam de `\addcontentsline{toc}{section}{Título}` se quiserem aparecer no sumário. Um título com estrela como `\section*{Agradecimentos}` ignora deliberadamente a numeração e o arquivo de conteúdo, então se você quiser que ele seja listado, você mesmo adiciona a entrada. Os três argumentos do comando são o arquivo no qual escrever (`toc`), o nível da entrada (`seção`) e o texto a ser exibido. Coloque a linha imediatamente após o título com estrela para que o número da página gravada esteja correto.

Um hábito que vale a pena desenvolver: antes de compartilhar um PDF, dê uma olhada no sumário em busca de sinais reveladores de uma construção obsoleta, como pontos de interrogação, entradas ausentes ou uma última entrada que termina antes do capítulo final. Quase sempre é curado com mais uma compilação. Capturá-lo sozinho é mais barato do que um revisor capturá-lo. Os mesmos poderes de dança do arquivo auxiliar `\ref` e amigos, abordados em [referências cruzadas](/learn/cross-references/).