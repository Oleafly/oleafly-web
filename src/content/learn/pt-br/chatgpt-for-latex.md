---

title: "Modelos de prompt para compilar TeX"
description: "Envie o preâmbulo, exija uma comparação, sempre compile a resposta."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Modelos de prompt para compilar TeX

Peça um modelo de chat para LaTeX e você geralmente obterá um código que parece correto e não é compilado em seu documento. O modelo não sabe qual classe você usa, quais pacotes você carrega ou quais macros você definiu, então ele responde por algum documento genérico que não é seu. A saída morre com pacotes ausentes ou definições conflitantes no momento em que você a cola. A maior parte disso é evitável com três hábitos de prompt, além de uma regra rígida: compile antes de confiar.

## Envie o preâmbulo

Seu preâmbulo é o contexto que falta ao modelo. Cole-o, ou pelo menos a linha `\documentclass` e a lista `\usepackage`, e peça "um fragmento que compile sob este preâmbulo". Este hábito bloqueia a falha mais comum: a resposta depende silenciosamente de `tikz`, `siunitx` ou algum outro pacote que você nunca carregou. Ele também direciona o modelo para os comandos que sua configuração realmente fornece. Se o seu projeto definir macros, inclua-as também, pelos motivos abordados em [Dê ao modelo sua tabela de símbolos](/learn/ai-follow-notation/).

## Pergunte do que a resposta depende

Adicione uma solicitação permanente: "Se o seu código precisar de algum pacote que não carreguei, liste-o explicitamente no topo da sua resposta." Isso transforma dependências ocultas em uma lista de verificação visível. Quando a resposta nomeia um pacote, você decide se deseja adicioná-lo, em vez de descobrir a dependência como um erro de `Sequência de controle indefinida` três compilações depois. Esse erro e seu diagnóstico são abordados em [Sequência de controle indefinida](/learn/undefined-control-sequence/).

## Peça uma comparação, não uma reescrita

Quando quiser alterar um texto existente, cole o menor trecho relevante e peça ao modelo para alterar apenas o que a solicitação exige, informando o que mudou. Dado um arquivo inteiro, os modelos reescrevem livremente: reformatam parágrafos intactos, reordenam as linhas do preâmbulo e, ocasionalmente, deixam cair algo no chão. A verdadeira mudança desaparece dentro da agitação. Uma edição mínima descrita é aquela que você pode realmente revisar. Dentro do Oleafly, o assistente impõe essa forma para você, propondo cada edição como uma comparação vermelho/verde que você aprova linha por linha, conforme descrito em [Assistente dentro do Oleafly](/learn/oleafly-ai/).

## Compile antes de confiar

Nunca envie LaTeX que você não compilou, não importa quão plausível seja. Cole a sugestão em seu documento, compile e leia o primeiro erro, se houver. Enviar essa mensagem de erro de volta ao modelo, junto com o snippet ofensivo, geralmente produz uma segunda tentativa funcional. Mantenha o projeto no Git para que qualquer alteração assistida por modelo possa ser revertida em um comando, uma configuração abordada em [Coloque o documento no GitHub](/learn/sync-with-github/). O modelo propõe; o compilador dispõe.