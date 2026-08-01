---

title: "Fórmulas e estruturas químicas"
description: "reações mhchem e um esboço chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Fórmulas e estruturas químicas

A notação química combate os padrões do LaTeX. O modo matemático coloca os símbolos dos elementos em itálico como se fossem variáveis, e o modo texto não possui nenhum subscrito. Dois pacotes dividem o trabalho. `mhchem` compõe fórmulas e reações a partir da notação química simples, e `chemfig` desenha diagramas estruturais.

## Fórmulas e reações com mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

A opção `version=4` seleciona a sintaxe atual. Tudo o que é químico vai dentro de `\ce{...}`, que lê seu conteúdo da mesma forma que um químico o escreve. Em `\ce{H2O}` o 2 se torna um subscrito automaticamente e os símbolos dos elementos permanecem na posição vertical, como exige a convenção. Na reação, o `+` obtém o espaçamento adequado, o `->` torna-se uma seta de reação e o 2 antes do CO é reconhecido como um coeficiente estequiométrico, portanto permanece em tamanho real na linha de base.

A mesma notação aumenta. As cargas andam como sobrescritos, então `\ce{SO4^2-}` fornece sulfato com sua carga 2. Os estados da matéria são anexados entre parênteses, como em `\ce{H2O(l)}`; as setas de equilíbrio são escritas `<=>`; e `\ce{^{14}C}` coloca um número de isótopo antes do símbolo. `\ce` funciona tanto no modo texto quanto no modo matemático, portanto, uma fórmula pode ficar em uma frase sem delimitadores extras.

## Estruturas com chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` desenha estruturas a partir de um código linear compacto. Os átomos são escritos como seus símbolos e `-` desenha uma ligação com o próximo átomo. Um número entre colchetes define a direção do título em passos de 45 graus no sentido anti-horário a partir do leste: `[2]` aponta para cima e `[6]` diretamente para baixo. Os parênteses abrem ramos do átomo atual, então `C(-[2]H)(-[6]H)` cresce um hidrogênio para cima e um para baixo enquanto a cadeia principal continua para a direita. O exemplo é o metano plano: um carbono central ligado a quatro hidrogênios. As ligações duplas e triplas são escritas `=` e `~`, e há uma sintaxe de anel dedicada para estruturas cíclicas e aromáticas.

## Notas práticas

Mantenha as duas ferramentas em suas pistas. Use `mhchem` para qualquer coisa que seja lida da esquerda para a direita como uma fórmula ou equação, e `chemfig` quando a geometria da molécula for o ponto. Ambos compilam com um mecanismo LaTeX padrão e nenhum programa de desenho externo.

O erro usual de iniciante é escrever fórmulas no modo matemático simples. `$H_2O$` compila, mas define H e O em itálico como variáveis, o que é errado por convenção. `\ce{H2O}` produz a forma vertical com menos digitação. Ambos os pacotes estão disponíveis para teste no [live playground](/live/).