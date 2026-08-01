---

title: "Estruture uma tese de pós-graduação em LaTeX antes que o pânico se instale"
description: "Matéria inicial, capítulo inclui, siglas, arquivos de aulas universitárias, velocidade de compilação e histórico do Git para alunos de mestrado e doutorado."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

A tese é um longo artigo com burocracia anexada. LaTeX lida com o longo
papel bem. A burocracia geralmente é um arquivo de aula universitária escrito em 2009
e testado pela última vez em um TeX Live diferente.

Comece a estruturar cedo, mesmo que os capítulos ainda estejam vazios. Mover conteúdo entre
arquivos no último mês é como as referências cruzadas e os caminhos das figuras se quebram.

## Aceite o arquivo de classe, proteja o resto

Coloque o `.cls` da universidade (e os arquivos `.bst` / logo necessários) no projeto.
Não reescreva a classe. Coloque suas macros, pacotes e conteúdo do capítulo em
arquivos que você controla:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Se a aula for interrompida em um motor moderno, faça a triagem com
[arquivos de classe universitária que não serão compilados](/learn/fix-broken-template/).
Documente qual mecanismo o escritório de tese aceita (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) antes de investir em `fontspec`.

## Matéria preliminar que os comitês esperam

Números de página romanos para resumo, dedicatória, agradecimentos, sumário, listas de
figuras/tabelas; árabe para os capítulos principais. Exposição de aulas de livro/relatório
`\frontmatter` / `\mainmatter`; modelos baseados em artigos precisam de manual
`\ numeração de páginas`. Guia:
[romano e depois árabe](/learn/front-matter-page-numbers/).

O conteúdo da página de título geralmente deve corresponder a um exemplar do Word da pós-graduação.
Copie o texto exatamente. A criatividade aqui faz com que o PDF seja rejeitado por um
lista de verificação.

## Capítulos como arquivos

Uma raiz, muitas incluem:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Tenha você mesmo os capítulos, mesmo quando os coautores ajudam nos artigos que alimentam a tese.
Mantenha os números em `figures/chapter3/` para que os caminhos permaneçam estáveis ​​quando você reordenar.
Use `\includeonly{capítulos/métodos}` ao redigir para compilar a tese completa
não são o custo de cada edição de equação:
[arquivos de capítulo dividido](/learn/split-chapter-files/).

Os rótulos devem ser exclusivos em todo o projeto (`eq:ch3-main`, não `eq:main` em
cada arquivo). Visualizações de estrutura em todo o projeto e ajuda para verificação de referência ao vivo em um
Árvore de 200 páginas.

## Siglas e símbolos

Os pacotes de glossários são poderosos e complicados. Para muitas teses, um manual mantido
a lista de símbolos no assunto inicial é suficiente. Se você precisar de expansão automática
siglas, reserve um dia para aprender `glossários extras` antes da semana de
submissão, não durante ela.

Defina macros matemáticas em `macros.tex` e trate esse arquivo como lei compartilhada. Notação
que oscila entre o capítulo 2 e o capítulo 5 é um presente para um examinador pedante.

## Bibliografia

Um `.bib` para toda a tese, ou um pequeno conjunto mesclado cuidadosamente. Chaves estáveis.
Valide antes da vinculação suave:
[validador BibTeX](/tools/bibtex-validator/). Combine o estilo do departamento
deseja (estilos de humanidades numéricos, ano do autor, com muitas notas de rodapé). Não misture
pilhas biblatex e BibTeX clássicas em um preâmbulo.

## Velocidade

A compilação de teses completas fica lenta. Modo rascunho para figuras, `\includeonly` e
TikZ externaliza horas de compra de volta. Notas:
[espera mais curta pelo PDF](/learn/speed-up-compilation/).

Mantenha um ritual de "compilação completa" semanalmente para que você ainda veja falhas entre capítulos
cedo.

## Backup não é o mesmo que histórico

Uma cópia do Dropbox é um backup. Git é uma história de como o argumento mudou.
Confirme quando um capítulo for compilado. Envie para um GitHub ou GitLab remoto privado.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) inicializa um
repositório real por projeto, pontos de verificação após compilações bem-sucedidas e edições inativas,
e restaura com um clique, ao lado de visualizações de estrutura de todo o projeto e SyncTeX
que ainda funcionam em arquivos de capítulo. Isso torna o hábito mais difícil de abandonar.
Você pode obter a mesma disciplina com qualquer editor e um Git cuidadoso; a tese
não deve depender de lembrar de `git init` no mês dezoito.

## Ciclos de feedback do comitê

Exporte PDF para leitores que não abrirão o código-fonte. Rastreie comentários em problemas ou
um documento compartilhado, mas aplique edições no TeX. Quando um membro do comitê retorna um
PDF de marcação digitalizado, nomeie o arquivo com data e versão para saber qual
fonte commit a que se refere.

## Lista de verificação com capa flexível e capa dura

Antes de imprimir ou depositar:

- O arquivo de classe e o mecanismo correspondem às regras do escritório de teses.
- Numeração correta das páginas iniciais; página de assinaturas presente, se necessário.
- Todas as resoluções `\ref`/`\cite`; não `[?]`.
- Figuras e tabelas listadas se necessário; legendas consistentes.
- Margens e tamanho da fonte passam no PDF da lista de verificação (imprima uma página de teste).
- Fonte + PDF + hash de commit arquivado após o depósito.

## Figuras, tabelas e "lista de" páginas

Muitos escritórios de teses exigem uma lista de figuras e tabelas. As legendas devem ser
consistente e não despejar toda a seção de métodos em uma legenda de 20 linhas. Usar
títulos curtos para as listas e legendas explicativas mais longas no corpo se o
classe suporta legendas curtas opcionais.

## Plágio e publicações anteriores

Se os capítulos remixarem artigos publicados, siga as regras da universidade sobre inclusão
e permissão de coautor. Guarde o PDF aceito de cada artigo anterior e a tese
capítulo sobre controle de versão com uma nota sobre o que mudou (notação, extensão
experimentos, introdução unificada).

## Comece este mês, não no mês em que você escreve

Crie o esqueleto ao propor o contorno. Capítulos vazios que compilam
contar como progresso. A maior parte do pânico em estágio avançado é a dívida estrutural mais uma teimosia
arquivo de classe, não uma lacuna na ciência. Pague essa dívida antecipadamente.