---

title: "Pare de perder prazos de conferências: AoE, resumos e contagens regressivas"
description: "Por que os prazos das conferências confundem a todos (AoE, registro de resumos, mudança de datas), como o conjunto de dados aberto ccf-deadlines ajuda e como manter uma contagem regressiva ao lado do manuscrito."
date: 2026-07-21
tags: [conferences, deadlines]
---

Todo pesquisador tem uma história sobre um prazo que na verdade era de doze horas
mais cedo do que eles pensavam. O papel estava pronto. O portal não era. O habitual
os culpados são fusos horários, registro abstrato e datas que mudaram enquanto ninguém
atualizou o wiki do laboratório.

Este é um guia prático para ler chamadas de trabalhos, rastrear locais e
mantendo a contagem regressiva onde você realmente escreve.

## AoE não é seu fuso horário

"Anywhere on Earth" (AoE) significa UTC-12: o prazo termina quando já passou
meia-noite no lado oeste da Linha Internacional de Data. Isso é generoso
em comparação com um meio-dia forte em Nova York, mas somente se você converter corretamente.

Não confie em uma captura de tela do aplicativo de calendário de outra pessoa. Converter do
chamada oficial. Se o site disser "23:59 AoE, 14 de março", trate a manhã de 15 de março em
A Califórnia já está atrasada até que você mesmo faça a conversão.

## O prazo do resumo é real

Muitos CS e locais adjacentes exigem um título registrado e resumo cerca de uma semana
antes do prazo final do trabalho completo. Perder o prazo do resumo e do artigo
o prazo é irrelevante; o portal não permitirá que você envie.

Coloque ambas as datas na mesma série de eventos do calendário: resumo, artigo, refutação,
pronto para câmera. As janelas de refutação são curtas. A câmera pronta geralmente pousa durante outro
pressa da conferência.

## Os prazos mudam

Extensões e datas de segunda rodada espalhadas por listas de e-mail e feeds sociais.
A chamada oficial (ou o banner do portal de submissão) é a única fonte que vale a pena
confiando. Quando uma data mudar, atualize seu rastreador no mesmo dia; obsoleto
planilhas causam falsa calma.

## O conjunto de dados aberto que corrige a descoberta

A comunidade mantida
O projeto [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) rastreia centenas
de locais como YAML revisável: prazos, fusos horários, classificações e links oficiais,
Licenciado pelo MIT. Como se trata de dados e não de um único site, qualquer pessoa pode criar
filtros, contagens regressivas e pesquisas em cima dele.

Não incluirá todos os workshops do seu nicho. Para aqueles, ainda marque o
página oficial. Use o conjunto de dados para locais grandes e recorrentes onde o
comunidade já fez o trabalho de raspagem.

## Contagem regressiva ao lado do manuscrito

Um site de prazos separado só ajuda se você se lembrar de abri-lo. O útil
O lugar para uma contagem regressiva é próximo ao papel que você está correndo para terminar.

Publicamos um [quadro de prazos ao vivo](/deadlines/) gratuito no conjunto de dados aberto:
contagens regressivas, classificações CCF e CORE, filtros de campo, pesquisa, sem inscrição. O
[Aplicativo de desktop Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) coloca
o mesmo quadro a um clique de seus projetos, funciona offline a partir de um pacote
instantâneo e atualizações sob demanda. Quando você estiver no editor à 1h, você deve
não é necessário um segundo perfil de navegador para saber se o AoE será hoje à noite ou amanhã.

Novo no processo? [O ciclo de vida do prazo](/learn/deadline-lifecycle/) abrange
registro abstrato, refutações e câmera pronta do zero.

## Um ritual de laboratório que funciona

Quando alguém propor um local, cole o link oficial do CFP no rastreador
mesmo dia. Registre os tempos dos resumos e trabalhos no AoE e na zona local do laboratório.
Designe uma pessoa para verificar novamente o portal na semana anterior (as datas mudam). Congelar
grandes experimentos ou declarações de teoremas com antecedência suficiente para que a escrita não seja a
único caminho para o PDF. Mantenha o artigo sob controle de versão para que "a submissão
PDF" é mapeado para um commit, não para um nome de arquivo de desktop.

## Escrevendo sob uma parada brusca

Os prazos não se preocupam com trabalhos relacionados perfeitos. Escopo de corte: uma afirmação clara,
tabelas que compilam, figuras com legendas, bibliografia que não mostra
`[?]`. Valide o `.bib` antecipadamente
([validador BibTeX](/tools/bibtex-validator/)). Compile a classe pronta para câmera
arquivo dias antes da abertura do portal, não horas.

Se você usa um editor de pesquisa local com compilação automática e pontos de verificação do Git, use
eles. Um float quebrado às 23:00 AoE é recuperável se existir histórico.

## Depois de enviar

Arquive o PDF exato, o zip de origem e o hash de commit. Observe o ID do envio. Quando
as avaliações chegarem, você vai querer o texto que realmente enviou, não o ramo
você continuou editando "por precaução".

## Rastreamento pessoal versus laboratório

Os indivíduos podem viver de acordo com um calendário mais um quadro. Os laboratórios precisam de uma planilha compartilhada ou
canal com nomes dos proprietários: quem está enviando o quê, resumo feito (sim/não), PDF
congelado (sim/não). A pessoa que “pensou que outra pessoa estava se submetendo” é um
bug de processo, não um bug de fuso horário.

## Ferramentas não são o prazo

Um widget de contagem regressiva não grava o trabalho relacionado. Use a placa para remover
incerteza, então proteja os blocos de escrita no calendário da mesma forma que você
proteger experimentos. Se o documento não for compilável 48 horas antes do
prazo, reduza o escopo em vez de inventar um novo modelo.

A maioria dos prazos perdidos são falhas de processo. Converta AoE você mesmo, trate o abstrato
registro como vinculativo e atualize seu rastreador quando a página oficial mudar.
Mantenha a contagem regressiva ao lado do manuscrito. Conjuntos de dados e placas fazem descobertas
barato; o ritual ainda é seu.