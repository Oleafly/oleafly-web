---

title: "Personagens que quebram a fonte"
description: "Como digitar porcentagem, dólar, e comercial, sublinhado, colchetes sem quebrar a linha."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Personagens que quebram a fonte

O LaTeX reserva alguns caracteres do dia a dia como sintaxe, e digitar um onde você quer dizer que o caractere literal interrompe a compilação ou altera silenciosamente a saída. Cada caractere reservado possui um escape e todo o conjunto cabe em uma pequena mesa.

| Caráter | Código |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbarra invertida` |

## O que os personagens fazem sem escapar

`%` inicia um comentário, então tudo, desde ele até o final da linha, é descartado. Esse é o bug usual de “minha frase desapareceu”: escreva 50% em um relatório e o resto da linha desaparece sem nenhum erro. `$` alterna o modo matemático, de modo que um erro perdido coloca o texto em itálico silenciosamente ou gera erros longe do erro de digitação. `&` é a guia de alinhamento em tabelas e blocos `align`; fora deles, falha com "Guia de alinhamento mal colocada". `#` marca os parâmetros da macro. `_` e `^` pertencem ao modo matemático, e no texto eles geram "Missing $ inseriu", que [tem sua própria lição](/learn/missing-dollar/). `~` é um espaço ininterrupto, portanto, um til digitado em uma URL ou caminho torna-se silenciosamente um espaço. `\` inicia todos os comandos, e é por isso que ele não pode escapar de si mesmo: `\\` é uma quebra de linha e o caractere literal precisa de `\textbackslash`.

## Escapando na prática

Para os primeiros seis caracteres, o escape é um prefixo de barra invertida e funciona da mesma forma dentro de outros comandos:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Observe que o sublinhado precisa de escape mesmo dentro de `\texttt`. Os dois escapes de estilo de comando, `\textasciitilde` e `\textbackslash`, devem ser seguidos por `{}` ou um espaço quando uma letra vier a seguir, para que o nome do comando não engula a palavra seguinte.

Para pedaços inteiros de código, caminhos ou URLs, ignore totalmente o escape. `\verb|...|` e o ambiente `verbatim` imprimem seu conteúdo exatamente como digitado, com todos os caracteres especiais desarmados, e o `\url{...}` do pacote `url` lida com links completos com tils.

Os personagens que mordem com mais força são aqueles que falham silenciosamente, e `%` lidera essa lista. O texto colado é o culpado usual: URLs, comandos de shell e números financeiros carregam caracteres reservados. Quando uma frase desaparece do PDF, pesquise nessa linha da fonte por um `%` vazio antes de qualquer outra coisa.