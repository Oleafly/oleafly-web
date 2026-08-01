---

title: "Escolha um editor que você realmente abrirá"
description: "O que os iniciantes precisam: um compilador, visualização, SyncTeX e arquivos que ficam no disco."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Escolha um editor que você realmente abrirá

O melhor editor LaTeX para iniciantes não é o mais poderoso. É aquele que leva você de um arquivo vazio a um PDF compilado com o mínimo de atrito. Compilar cedo e muitas vezes é mais importante do que qualquer recurso único. Quatro recursos cobrem o que você precisa no primeiro dia.

Primeiro, a compilação deve funcionar sem instalar manualmente uma distribuição TeX de vários gigabytes. Em segundo lugar, você deseja uma visualização do PDF lado a lado com o SyncTeX, então um clique no PDF vai para a linha de origem correspondente e volta. Terceiro, seus arquivos devem ser `.tex` simples no disco, para que você possa compactá-los, enviá-los por e-mail ou colocá-los no Git sem uma etapa de exportação. Quarto, os erros devem chegar como mensagens legíveis, não apenas como um log bruto do TeX.

## As opções realistas

| Editor | Configuração | Funciona off-line | Notas |
| --- | --- | --- | --- |
| Oleafly | Baixe o aplicativo | Editando sempre; compila usa pacotes em cache | Mecanismo incluído, histórico do Git, IA opcional com sua própria chave |
| TeXShop/TeXworks | Instale primeiro uma distribuição TeX | Sim | Mínimo e confiável |
| Workshop de Código VS + LaTeX | Instale primeiro uma distribuição TeX | Sim | Uma boa opção se você já trabalha com VS Code |
| No verso | Crie uma conta no navegador | Limitado | Instalação zero; projetos vivem em seus servidores |

As duas linhas do meio compartilham um custo oculto: antes que o editor seja útil, você mesmo instala e mantém o TeX Live ou MiKTeX. É aí que muitos iniciantes param. A opção do navegador remove a configuração, mas move seus arquivos para uma conta. As compensações são abordadas com mais detalhes em [projeto do navegador versus pasta no disco](/learn/overleaf-vs-local/).

## Um padrão razoável

Se você quiser arquivos locais sem administração do TeX, comece com [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): o compilador vem dentro do aplicativo e baixa pacotes na primeira vez que um documento precisa deles. Seja qual for o editor que você escolher, combine-o com o [tutorial do primeiro documento](/learn/first-document/) e mantenha a [folha de dicas](/learn/cheatsheet/) por perto. O editor importa menos do que compilar sua primeira página hoje.