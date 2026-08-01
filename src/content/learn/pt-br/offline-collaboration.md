---

title: "Coautor sem cursor ativo"
description: "Patches, pastas compartilhadas mais Git e propriedade de arquivos de capítulos separados."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Coautor sem cursor ativo

A edição colaborativa em tempo real, onde você observa o movimento do cursor de um coautor, é o modelo que os editores em nuvem vendem. Muitos bons artigos são escritos sem ele. Quando os autores trabalham localmente, a colaboração assíncrona construída no Git é o padrão confiável: cada pessoa edita em sua própria máquina e as alterações são mescladas deliberadamente, em vez de caractere por caractere. Requer um pouco mais de coordenação e compensa com trabalho offline, histórico completo e sem dependência de servidor de ninguém.

## Git como espinha dorsal

A configuração padrão é um repositório compartilhado, normalmente no GitHub, de onde todos extraem e enviam. Cada autor trabalha em sessões: extrair o estado mais recente, escrever, confirmar, enviar por push. Como o LaTeX é um texto simples, o Git mescla alterações paralelas em diferentes partes do papel automaticamente e a configuração leva minutos. [Coloque o artigo no GitHub](/learn/sync-with-github/) cobre isso. Quando um colaborador não pode ou não quer usar um host Git, os patches preenchem a lacuna: `git format-patch` transforma os commits em pequenos arquivos que você pode enviar por e-mail, e o destinatário os aplica com `git am`, mantendo a autoria e o histórico intactos. É um fluxo de trabalho antigo e ainda funciona em qualquer lugar que o email funcione.

Um híbrido também funciona quando um coautor insiste em uma pasta sincronizada: mantenha a cópia compartilhada no Dropbox ou no Syncthing por conveniência, mas deixe uma pessoa manter o histórico do Git e realizar mesclagens. Não aponte os checkouts do Git ao vivo de duas pessoas para a mesma pasta sincronizada, porque os conflitos de sincronização dentro do diretório `.git` corrompem os repositórios.

## Divida o documento por arquivo

As mesclagens tornam-se raras quando as pessoas raramente tocam no mesmo arquivo. Divida o manuscrito para que cada capítulo ou seção fique em seu próprio arquivo, extraído de um `main.tex` fino com `\input{chapters/methods}`. A mecânica está em [Dividir um documento em arquivos](/learn/split-chapter-files/). Em seguida, atribua a propriedade: cada coautor elabora os rascunhos em seus próprios arquivos e um integrador cuida do preâmbulo, da mesclagem e da leitura final para obter consistência de notação e tom. Isso reflete como as equipes de software evitam pisar umas nas outras e funciona pelos mesmos motivos.

## O que realmente dá errado

O modo de falha a evitar são duas pessoas editando o mesmo parágrafo na mesma janela de tempo. O Git irá sinalizá-lo como um conflito, e os conflitos do LaTeX são legíveis, mas tediosos de resolver, então a solução mais barata é social: uma mensagem rápida dizendo "Estou na introdução hoje" evita quase todos eles. Dois hábitos de escrita reduzem o resto. Mantenha uma frase por linha de origem, para que as edições paralelas das frases vizinhas não colidam, e extraia imediatamente antes de cada sessão de escrita para que você esteja sempre editando o texto mais recente.