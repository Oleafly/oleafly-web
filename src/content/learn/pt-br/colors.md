---

title: "Cor que sobrevive à impressão"
description: "xcolor, especificações HTML e uso de cores como sinal quando os diários ficam em tons de cinza."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Cor que sobrevive à impressão

A cor no LaTeX vem de um pacote, `xcolor`. Fornece cores nomeadas, especificações exatas de cores, caixas de fundo e uma maneira de definir sua própria paleta. O corpo do texto dos diários é quase sempre preto, então você precisa dele com menos frequência do que imagina. Ainda compensa em slides, rascunhos com anotações visíveis e qualquer coisa que precise corresponder à paleta de uma organização.

## Os comandos

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` colore apenas o texto em seu segundo argumento, usando um dos nomes predefinidos de xcolor; `red`, `blue`, `gray`, `teal` e algumas dezenas de outros funcionam imediatamente. Quando um nome não é preciso o suficiente, o modelo opcional `[HTML]` aceita um código hexadecimal de seis dígitos, o mesmo formato que um web designer ou guia de estilo lhe entrega, então `2563EB` reproduz exatamente um azul específico. Observe que xcolor deseja os dígitos hexadecimais maiúsculos e sem o `#`.

`\colorbox{gray!15}{highlighted}` pinta um fundo atrás do texto em vez de colorir o texto em si. O argumento `gray!15` mostra a sintaxe de mistura do xcolor: 15 partes de cinza misturadas com 85 partes de branco, o que produz uma tonalidade pálida que parece um destaque. A mesma sintaxe funciona em qualquer lugar onde uma cor é esperada, e você pode encadeá-la, como em `blue!50!black` para um azul escurecido.

## Defina uma vez, use em qualquer lugar

`\definecolor{brand}{HTML}{2563EB}` registra um nome próprio. Após esta linha, `\textcolor{brand}{...}` funciona como qualquer cor integrada, e o valor hexadecimal fica exatamente em um lugar. Quando a paleta muda, você edita uma linha de preâmbulo em vez de procurar códigos hexadecimais brutos no documento. Mesma ideia de [macros personalizadas](/learn/custom-commands/): definir uma vez, reutilizar em qualquer lugar.

## A escala de cinza ainda é real

Use a cor como sinalização, não como decoração, e presuma que alguns leitores não a verão. Muitos periódicos ainda são impressos em escala de cinza, onde o vermelho e o azul se transformam em tons de cinza semelhantes, e uma fração significativa de leitores tem algum tipo de deficiência na visão de cores. Regra prática: a cor pode reforçar uma distinção, mas nunca deve ser a única coisa que a carrega. Combine texto colorido com negrito ou um símbolo e combine linhas de plotagem coloridas com marcadores distintos ou padrões de traços.

Mais uma coisa sobre escopo. Colorir títulos ou corpo do texto à mão rapidamente faz com que um documento pareça caseiro e, dentro do modelo de um local, ele será revertido de qualquer maneira. Mantenha a cor manual para locais onde isso signifique algo, como marcar alterações solicitadas pelo revisor em uma revisão, e remova-a antes da versão final.