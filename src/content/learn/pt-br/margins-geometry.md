---

title: "Margens em um pacote"
description: "geometria para tamanho de página, margens, deslocamento de encadernação."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Margens em um pacote

As margens padrão do LaTeX parecem enormes, especialmente em papel A4. Isso ocorre intencionalmente: os padrões visam um comprimento de linha confortável de aproximadamente 66 caracteres, o que é ótimo para leitura, mas raramente é o que um modelo universitário, um diário ou seu próprio gosto pedem. Em vez de ajustar manualmente meia dúzia de comprimentos de baixo nível, você configura a página com o pacote `geometry` e descreve o layout desejado em termos simples.

## As duas maneiras que você realmente usará

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

A primeira forma é a rápida: `margin=1in` define todas as quatro margens para uma polegada em uma única opção, e a geometria recalcula a largura e a altura do texto para corresponder. Esta é a aparência padrão da “tese dos EUA” e um padrão sensato para rascunhos.

A segunda forma explica tudo. `a4paper` declara o tamanho físico do papel (use `letterpaper` para US Letter). Sem ele, a geometria herda qualquer classe de documento assumida, o que pode não corresponder ao que o visualizador ou impressora de PDF espera. As opções `top`, `bottom`, `left` e `right` definem cada margem independentemente, de modo que layouts assimétricos são tão fáceis quanto os simétricos. Você pode misturar unidades livremente: `in`, `cm`, `mm` e `pt` funcionam.

Tudo acontece no preâmbulo, antes de `\begin{document}`. A geometria lê suas opções uma vez e deriva delas todo o layout da página, e é por isso que é menos propensa a erros do que o ajuste manual.

## Deslocamento de encadernação para cópias impressas

Se o documento for impresso e encadernado, a margem interna precisará de espaço extra para que o texto não desapareça na lombada. Adicione `bindingoffset=0.5cm` às opções e a geometria desloca o bloco de texto para fora em cada página. Em um documento `dois lados` ele alterna o deslocamento corretamente entre as páginas esquerda e direita, o que é tedioso de acertar manualmente.

## O que não fazer

Evite misturar geometria com `\setlength{\textwidth}{...}` manual, a menos que você saiba por quê. O layout de página do LaTeX é uma rede de comprimentos interdependentes (`\textwidth`, `\oddsidemargin`, `\headheight` e amigos), e a geometria gerencia todos eles como um sistema consistente. Alterar um comprimento diretamente após carregar a geometria geralmente tira o acordo dos outros e você acaba com um texto que transborda a página ou margens diferentes do que você solicitou. Se você precisar de uma alteração no meio do documento, a geometria fornece `\newgeometry{...}` e `\restoregeometry` exatamente para isso.

Um cuidado antes de ajustar qualquer coisa: se você estiver escrevendo para um periódico ou conferência, o arquivo de classe já codifica as margens necessárias e adicionar geometria no topo provavelmente violará o formato de envio. Economize ajustes de margem para documentos onde você controla o layout, como uma tese, notas ou currículo, e verifique primeiro o que sua [classe de documento](/learn/document-skeleton/) já oferece.