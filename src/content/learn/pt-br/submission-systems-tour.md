---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Um guia de campo para os quatro sistemas de submissão que você realmente conhecerá."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

#HotCRP, EasyChair, OpenReview, CMT

Seu artigo não vai para a conferência. Ele vai para um sistema de submissão: um site onde você carrega o PDF, preenche os metadados e depois lê suas resenhas. Existem quatro que você encontrará repetidamente, e cada um tem uma personalidade.

## Os quatro grandes

| Sistema | Personalidade | Você o encontrará em |
|---|---|---|
| HotCRP | Rápido, mínimo, adorado pelo pessoal de sistemas | Conferências de sistemas e segurança (SOSP, USENIX) |
| Cadeira Fácil | O veterano. Utilitário, em todos os lugares | Workshops, muitas conferências de CS em todo o mundo |
| AbrirRevisão | Voltados ao público, comentários frequentemente visíveis | Locais de ML (ICLR, NeurIPS) |
| CMT | O carro-chefe da Microsoft, com muitos formulários | Conferências de visão e ML (CVPR) |

Todos eles fazem o mesmo trabalho principal. As diferenças moram nos detalhes. OpenReview pode mostrar seus comentários para o mundo. HotCRP enviará um e-mail para você sobre cada comentário. O CMT possui uma grade de seleção de tópicos que leva dez minutos para ser clicada.

## Faça sua conta antecipadamente

Faça isso na semana em que decidir enviar, não na noite do prazo final:

- [ ] Crie a conta com o e-mail que você verifica diariamente
- [] Confirme se o e-mail de verificação realmente chegou
- [] Verifique se os coautores também têm contas (perfis OpenReview podem levar dias para serem aprovados para novos usuários)
- [] Inicie um envio de rascunho para saber quais campos existem

Esse último é importante. Alguns locais fazem perguntas surpresa: declarações éticas, listas de verificação de reprodutibilidade, domínios de conflito. Melhor descobri-los daqui a uma semana.

## Somente PDF vs upload de origem

A maioria dos locais deseja um PDF no momento do envio. Alguns, e quase todos os editores que estão prontos para a câmera, também querem sua fonte LaTeX. Mantenha seu projeto organizado o suficiente para ser fechado sob demanda. Oleafly exporta um ZIP de origem diretamente, que é exatamente o formato que os sistemas de envio esperam.

## Os campos de metadados

Além do PDF, espere preencher:

- **Título e resumo**, em texto simples. Reescreva qualquer matemática LaTeX em palavras ou Unicode.
- **Tópicos**, caixas de seleção que encaminham seu artigo aos revisores. Escolha honestamente.
- **Conflitos**, pessoas e instituições que não deveriam avaliar você: orientadores, coautores recentes, colegas. Errar pode anular uma revisão, portanto, seja minucioso.
- **Confirmação de anonimato**, em locais duplo-cegos. Consulte [anonimização para revisão duplo-cega](/learn/anonymization-double-blind/).

## A realidade AoE 11:59

Todas as noites com prazo final, milhares de pessoas enviam na hora final e os sistemas ficam lentos. Uploads que demoravam segundos na hora do almoço levam minutos às 23h50. A solução é simples e ninguém a segue: envie uma versão funcional com antecedência.

## Você pode atualizar até o prazo

Aqui está a parte libertadora: a submissão não é um tiro único. Em todos os principais sistemas, você pode substituir seu PDF quantas vezes quiser antes que o prazo expire. Portanto, envie uma versão completa, mas imperfeita, no dia anterior e continue aprimorando. Se a rede morrer às 11h58, você terá uma verdadeira submissão no sistema em vez de uma tragédia.

Próxima parada após o envio: entender o que acontece do outro lado, em [revisão por pares, explicada](/learn/peer-review-explained/).