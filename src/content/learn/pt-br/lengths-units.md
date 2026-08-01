---

title: "pt, em, largura do texto"
description: "Unidades absolutas e relativas à fonte que você realmente define."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, largura do texto

Quase todos os comandos de layout no LaTeX têm um comprimento: espaço vertical, larguras de imagem, margens, espessuras de régua. Um comprimento é um número mais uma unidade, e a escolha da unidade decide se o layout se adapta quando o tamanho da fonte ou a geometria da página muda, ou se quebra no mesmo dia.

| Unidade | Significado |
| --- | --- |
| `pt` | Ponto (base) |
| `em` | Largura relativa da fonte |
| `ex` | Altura relativa da fonte |
| `cm` / `mm` / `pol` | Absoluto |
| `\largura do texto` | Largura do bloco de texto |
| `\largura de linha` | Largura da coluna/minipágina atual |

## Unidades absolutas e relativas

`pt` é o ponto da impressora, a unidade base do TeX. Os tamanhos das fontes e muitos padrões internos são indicados em pontos, e uma polegada equivale a 72,27 pt no cálculo do TeX. `cm`, `mm` e `in` são as unidades absolutas familiares, apropriadas quando um requisito é genuinamente físico, como uma margem obrigatória de uma polegada.

`em` e `ex` são dimensionados com a fonte atual: um em é aproximadamente o tamanho da fonte expresso como largura, e um ex é aproximadamente a altura de um x minúsculo. Sua vantagem é a proporcionalidade. Um `\vspace{1em}` permanece visualmente consistente se o documento passar do tipo 10pt para 12pt, onde um `\vspace{12pt}` codificado torna-se muito apertado ou muito solto.

## Comprimentos que o documento fornece

`\textwidth` é a largura do bloco de texto da página. `\linewidth` é a largura do contêiner atual, que é igual a `\textwidth` em texto comum, mas se estreita dentro de uma minipágina, lista ou coluna. Um decimal na frente escala qualquer um deles, e essa é a maneira padrão de dimensionar figuras:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

A primeira linha insere um em de espaço vertical. A segunda define a imagem para metade da largura do bloco de texto, portanto, se as margens mudarem, a figura será redimensionada com elas e nunca transbordará para a margem. Dentro de uma minipágina ou de um layout de duas colunas, prefira `0.5\linewidth`, já que `\textwidth` é maior do que o espaço que você realmente tem.

Os comprimentos também são configuráveis. `\setlength{\parindent}{0pt}` remove o recuo do parágrafo e o mesmo comando ajusta a maioria dos comprimentos de layout nomeados.

O erro comum é dimensionar os números em centímetros. Funciona até que a classe do documento, o tamanho do papel ou as margens mudem e, então, cada figura precisa ser ajustada manualmente. Larguras expressas como frações de `\textwidth` ou `\linewidth` sobrevivem a todas essas mudanças intactas, e é por isso que os templates as utilizam quase exclusivamente.