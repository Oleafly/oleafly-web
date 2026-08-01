---

title: "Git para artigos de pesquisa: o que realmente funciona com coautores"
description: "Ignore regras, propriedade de capítulo, mensagens de commit, controles remotos privados e como um espaço de trabalho de pesquisa com Git real, forks e pontos de verificação de IA mantém os documentos recuperáveis ​​sem tornar o Git um segundo trabalho."
date: 2026-07-10
tags: [git, collaboration, workflow, local-first]
---

Os pesquisadores já usam Git para código. Os artigos se parecem muito com código: texto simples,
inclui, construir lixo. Colocar um manuscrito em um repositório é menos estranho do que
soa depois de você tentar uma vez.

## Ignore o lixo

Um `.gitignore` sensato para LaTeX:

```text
*.aux
*.log
*.out
*.toc
*.synctex.gz
*.bbl
*.blg
*.fdb_latexmk
*.fls
```

Envie `.tex`, `.bib`, figuras que você não pode regenerar e o arquivo de classe se
a universidade exige isso. Ignore a confirmação de todos os PDFs, a menos que o periódico queira
um binário no arquivo.

Se o seu editor iniciar o Git para você, verifique se os caches de compilação e o PDF
intermediários são ignorados. Um fluxo de "ruído" vazio é confirmado a partir de arquivos auxiliares
torna o log inútil. Você para de ler e então a história não pode ajudar
você quando algo quebra.

## Próprios arquivos, não linhas

Duas pessoas no mesmo parágrafo é uma dor de fusão. Prefira capítulo ou seção
propriedade. Use solicitações pull quando o grupo for grande o suficiente para revisão
realmente ajuda.

A digitação multiusuário ao vivo em um buffer é uma ferramenta diferente (navegador LaTeX
editores). A colaboração do Git é mais lenta e mais explícita: branch, push, review.
Isso funciona bem quando você precisa de um registro em papel. Quando três pessoas devem digitar o
abstraiam juntos esta tarde, escolham outra coisa.

## Confirme mensagens futuras que você possa ler

"Consertar coisas" é inútil em três meses. "Reescrever trabalhos relacionados em transformadores"
é o suficiente. Duas camadas ajudam:

1. Marcos que você nomeia: rascunhos de seção, envio, câmera pronta.
2. Pontos de verificação de segurança: instantâneos frequentes para que uma tarde ruim seja reversível.

Se o seu editor apresentar pontos de verificação após uma compilação bem-sucedida ou após você parar de digitar,
trate-os como um chão, não como a única história. Escreva uma mensagem real quando um
a seção chega ou um rascunho vai para os coautores.

## Controles remotos privados

O trabalho não publicado pertence a projetos privados do GitHub ou GitLab. Graduação e
movimentos de laboratório ocorrem quando as pessoas perdem acesso a contas aleatórias de editores em nuvem. Um controle remoto
você controla é o backup.

Empurre quando você tiver rede. Não espere até a noite anterior ao prazo para
descubra que o controle remoto nunca foi conectado.

## Compilação local, backup remoto

Na maioria das semanas, o loop fica assim: edite e compile offline, pressione quando você
tem rede. Você não precisa de uma sessão ativa do navegador apenas para digitar.

O que você quer das ferramentas:

- todo projeto já é um repositório Git real (não se esqueça do `git init`)
- pontos de verificação automáticos após compilações bem-sucedidas e edições ociosas
- preparar, comparar lado a lado, descartar e restaurar com um clique no mesmo aplicativo que
  o editor e PDF
- GitHub opcional para controles remotos; o histórico já funciona no disco
- bifurcar um projeto inteiro com histórico completo para um experimento paralelo (arriscado
  métodos reescritos, currículo alternativo) enquanto a cópia do envio permanece no lugar
- Edições de IA, se você ativá-las, verifique primeiro e pouse somente através
  diferenças de aprovação

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) foi criado para
maneira: pastas simples, `.git` reais, pontos de verificação automática que nomeiam os arquivos que
movido, painel de controle de origem com diferenças de árvore de trabalho editáveis, restauração após
confirmar, publicação/push/pull opcional do GitHub com avanço/atrás, bifurcação do projeto com
linhagem na biblioteca. Terminal `git log` corresponde ao aplicativo porque é o
mesmo repositório. O ponto de verificação da IA, quando você usa um, chega ao mesmo
histórico do qual você restaura.

Você pode aproximar partes disso com um hábito cuidadoso e um Git separado
cliente. A diferença é se a história é algo que você configura e lembra,
ou algo que o espaço de trabalho de pesquisa assume no primeiro dia ao lado do SyncTeX e
compilar.

## O que o Git não corrige

O Git não substituirá comentários de um PI que só abre PDFs e não
decidir qual resumo está correto. Os números binários ainda se fundem mal, então mantenha
eles sejam pequenos, prefira terrenos que você possa regenerar e chegue a um acordo sobre a propriedade com antecedência.

Para coautores que recusam o Git, exporte PDF ou DOCX para revisão e mantenha `.tex` como
fonte da verdade. Veja
[coautores que falam apenas Word](/learn/collaborator-uses-word/).

## Uma prática mínima

1. Um repositório por artigo ou tese, não um mega-repositório para toda a sua carreira.
2. `.gitignore` para construir lixo no primeiro dia.
3. Propriedade do capítulo quando mais de uma pessoa edita.
4. Milestone confirma com mensagens legíveis.
5. Remoto privado conectado antes que o trabalho seja importante.
6. Restauração testada uma vez propositalmente, para que a primeira emergência não seja a primeira
   restaurar.

Se você seguir essa lista, o Git for papers praticamente desaparece no
fundo. Você quer confiabilidade enfadonha antes de um prazo, não um segundo hobby.