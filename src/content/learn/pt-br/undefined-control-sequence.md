---

title: "Sequência de controle indefinida"
description: "Nomes de comandos desconhecidos: erros de digitação, pacotes ausentes, mecanismo errado."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Sequência de controle indefinida

## O sintoma

A compilação para com `! Sequência de controle indefinida.` O log então mostra a linha onde isso aconteceu, dividida em duas: tudo o que o TeX leu até e incluindo o comando incorreto em uma linha, e o resto da linha de origem abaixo dela. O último token na linha superior é o comando que o TeX não reconheceu, o que torna este um dos erros mais fáceis de localizar com precisão.

## Por que isso acontece

Uma sequência de controle é qualquer coisa que comece com uma barra invertida. TeX não tem vocabulário fixo: os comandos existem apenas porque o kernel, a classe do documento, um pacote ou o seu próprio `\newcommand` os definiu. Quando o TeX lê uma barra invertida seguida por um nome que nada definiu, ele não consegue adivinhar o que você quis dizer e para. O erro nunca é sobre o comando estar "errado" em geral. Trata-se de esse nome ser desconhecido neste documento, neste momento, neste motor.

## Corrija em três verificações

Verifique a ortografia primeiro. `\texbf` em vez de `\textbf`, `\lable` em vez de `\label`, ou um espaço perdido quebrando um nome em duas contas na maioria dos casos. O número da linha do log leva você direto ao erro de digitação.

Se a grafia estiver correta, provavelmente o pacote definidor está faltando. `\includegraphics` não faz nada sem `\usepackage{graphicx}`, `\toprule` precisa de `booktabs`, e `\SI` precisa de `siunitx`. Isso é mais difícil quando você copia um trecho de outro documento ou da resposta de um modelo: o corpo do texto apareceu, a linha do preâmbulo não. Descubra qual pacote define um comando em [Cada comando explicado](/learn/every-command-explained/), adicione a linha `\usepackage` e recompile. Se o pacote em si não estiver instalado, consulte [Instalar um pacote ausente](/learn/install-missing-package/).

Se o pacote for carregado e o erro persistir, suspeite do mecanismo. Alguns comandos só existem em um mecanismo específico: `\fontspec` e seus parentes requerem XeLaTeX ou LuaLaTeX e morrerão no pdfLaTeX exatamente com este erro. Os modelos que especificam um mecanismo em sua documentação geralmente o fazem por esse motivo. [Qual mecanismo para este projeto](/learn/engines-compared/) explica as diferenças.

## Duas peculiaridades que vale a pena conhecer

A ordem é importante: um comando usado antes da linha `\usepackage` que o define ainda está indefinido nesse ponto, então mantenha o carregamento do pacote no preâmbulo, acima de `\begin{document}`. E um erro muitas vezes esconde outro, porque após a recuperação do TeX ele pode interpretar mal tudo o que se segue. Corrija a primeira sequência de controle indefinida no log, recompile e só então veja o que resta.