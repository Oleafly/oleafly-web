---

title: "Assistente dentro do Oleafly"
description: "Sua chave de API, contexto do projeto, diferenças, edições com reconhecimento de compilação."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

#Assistente dentro do Oleafly

Oleafly inclui um assistente de IA que funciona dentro do seu projeto, e não em uma janela de bate-papo separada. Ao contrário de colar o LaTeX em um chatbot geral, ele é executado em sua própria chave de API, pode ler o projeto que está editando e mostra todas as alterações propostas para aprovação antes de tocar em seus arquivos.

## Sua chave, seu provedor

O assistente não faz chamadas de modelo através dos servidores da Oleafly. Você fornece uma chave de API para um dos nove provedores hospedados suportados ou aponta o aplicativo para uma instalação local do Ollama e usa um modelo executado em seu próprio hardware. As solicitações vão da sua máquina para o provedor que você configurou, de acordo com os termos desse provedor, e você paga diretamente ao provedor de acordo com suas taxas. Qual modelo escolher e como configurar uma chave ou Ollama são abordados em [Configuração de IA](/docs/ai-setup/).

## O que o assistente pode ver

Quando você faz uma pergunta ou solicita uma edição, o assistente trabalha a partir de um mapa do seu projeto e lê os arquivos relevantes para a solicitação, como o capítulo que você está editando, o preâmbulo que define suas macros ou o arquivo `.bib` atrás de uma pergunta de citação. Esse contexto é o motivo pelo qual ele pode responder "por que a Figura 3 está flutuando para a próxima página" sobre a Figura 3 real e por que suas edições tendem a corresponder à notação e aos comandos que seu documento já usa.

## Edições que você analisa, não edições que simplesmente acontecem

O assistente nunca grava diretamente em seus arquivos. Ele propõe alterações como uma comparação, com linhas removidas em vermelho e linhas adicionadas em verde, e você aceita ou rejeita cada uma delas. Antes de qualquer alteração aceita ser aplicada, o Oleafly registra um ponto de verificação do Git, de modo que o estado antes da edição esteja sempre a um passo de distância no [histórico do Git](/docs/git-history/). A exclusão de um arquivo é tratada separadamente e sempre requer sua confirmação explícita, independentemente do que o assistente esteja fazendo.

## Fechando o loop com o compilador

Como o assistente mora próximo ao prédio, ele pode verificar seu próprio trabalho. Após uma edição, ele pode acionar uma compilação, ler o log e, se a alteração tiver como objetivo corrigir um erro, verificar se o erro desapareceu. Ele também pode ler o texto do PDF compilado, para confirmar se uma alteração solicitada realmente aparece na saída. Os modelos ainda produzem LaTeX errado, então leia o que você aceita. A vantagem é que sugestões quebradas tendem a ser detectadas e corrigidas dentro do ciclo, e não por você mais tarde.

A mecânica do dia a dia está nos documentos de [chat](/docs/ai-chat/) e [edição inline](/docs/ai-inline-edit/), e [Uma semana escrevendo no Oleafly](/learn/oleafly-workflow/) mostra onde o assistente se encaixa em um ciclo completo de escrita.