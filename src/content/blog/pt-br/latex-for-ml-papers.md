---

title: "LaTeX para artigos de aprendizado de máquina sem confusão de notação"
description: "Folhas de notação, tabelas de ablação, algoritmos, figuras de execuções de treinamento e Git ao lado do papel desde o primeiro rascunho do arXiv até o pronto para a câmera."
date: 2026-06-18
tags: [machine-learning, research, math]
---

A maioria dos artigos de ML falha da mesma forma no LaTeX: a matemática está boa na página três e
inconsistente na página doze. Uma perda é `L` em uma seção, `\mathcal{L}` em
outro, e os vetores em negrito aparecem apenas quando o autor se lembra. Revisores
notar mesmo quando eles não comentam sobre isso.

Este é um guia prático para estudantes que escrevem trabalhos em workshops, conferências
submissões e capítulos de teses que compartilham DNA com o código de treinamento.

## Escolha uma folha de anotações no primeiro dia

Antes de escrever um trabalho relacionado, escreva vinte linhas de macros:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Cole esse bloco em cada branch de coautor. Quando um modelo inventa um novo símbolo,
adicione-o à planilha primeiro e depois use-o. O
[Lição de notação de acompanhamento de IA](/learn/ai-follow-notation/) é a mesma ideia com um
modelo de linguagem em loop: o modelo deve obedecer à planilha, não inventar fontes.

A visualização matemática ao vivo em um editor de pesquisa ajuda você a entender `\mathcal{L}` e
`L` não são o mesmo objeto enquanto você digita.

## Tabelas que sobrevivem prontas para a câmera

As tabelas de ablação crescem até saírem da página. Prefira `booktabs` sem
regras verticais, `siunitx` para decimais alinhados e uma legenda que indica o
métrica e a divisão (ImageNet, CIFAR, no domínio vs OOD). Se a tabela abrange
páginas, use `longtable` antecipadamente em vez de reduzir a fonte para 7pt.

Um construtor visual ajuda no primeiro rascunho: o
[gerador de tabela](/tools/table-generator/) é executado no navegador. A mesa final
ainda deve nomear a métrica na legenda e definir ± como std ou se.

Relate sementes e intervalos de hiperparâmetros em tabelas de apêndice quando o local permitir.
As tabelas principais permanecem digitalizáveis.

## Algoritmos e listagens

O pseudocódigo pertence a `algorithm2e` ou `algorithmicx`, não a um monoespaço
parágrafo. Trechos de treinamento reais pertencem a `listagens` ou `cunhados` com um
idioma definido para que os revisores possam folheá-lo. Mantenha o artigo principal curto; coloque configurações completas
no apêndice ou um link de repositório com um hash de commit.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Algoritmos numéricos que você cita. Não despeje cinco páginas do PyTorch no PDF.

## Figuras do TensorBoard e matplotlib

Exporte PDF ou SVG quando puder. PNGs raster a 300 dpi são adequados para UI
capturas de tela, não para gráficos de linha. Corte o espaço em branco antes de `\includegraphics`. Se um
float foge para a próxima seção, corrija o tamanho e o posicionamento antes de lutar `[H]`
por uma hora: [colocação flutuante](/learn/figure-wrong-position/).

Ablações multipainel: construa em TeX com `subcaption` ou componha externamente e
inclua um PDF. Mantenha uma cor consistente para "nosso" nas figuras, para que os skimmers
aprenda a lenda uma vez.

## Aulas de conferência em duas colunas

As classes NeurIPS, ICML, ICLR e estilo CVPR alteram as margens e as regras de flutuação.
Compile com base na classe oficial antecipadamente. Os limites de páginas são reais; não esmague
fontes. Mova as provas e ablações extras para o apêndice ou PDF suplementar quando
a chamada permite.

## Trabalhos e citações relacionados

Use chaves de citação estáveis ​​e exportações limpas do Scholar. Valide o `.bib`:
[validador BibTeX](/tools/bibtex-validator/). Cite o código e os conjuntos de dados que você
depender. Autor-ano vs numérico depende do local; use o modelo
estilo, não um híbrido.

## Git ao lado do papel

Cada mudança de arquitetura deve ser um commit que você possa nomear. Trate o papel e
o código como o mesmo projeto, não dois hábitos de backup separados.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) mantém o artigo
em um repositório Git real ao lado de um editor com reconhecimento de projeto com visualização matemática ao vivo,
referências de arquivos cruzados, conclusão de citações e PDF SyncTeX. Isso corresponde à forma como o código ML
já vive. Combine-o com o [cheatsheet](/learn/cheatsheet/) quando você esquecer
sintaxe sob um prazo.

Marque o commit que corresponde ao upload do OpenReview ou CMT. Você vai querer
durante a refutação.

## Refutação e câmera pronta

As janelas de refutação são curtas. Mantenha um branch ou pasta para "experimentos de refutação"
para que você não polua a fonte do PDF enviado. A câmera pronta geralmente permite um
página extra; use-o para maior clareza, não para descartar todas as execuções com falha.

## Impacto e limitações mais amplos

Mesmo quando o local exige um parágrafo curto sobre impacto social ou limitações,
escreva em linguagem simples. O LaTeX não salvará um parágrafo vago. Coloque negativo
resultados que você pode deixar no apêndice se o limite da página principal for apertado,
e diga que você fez isso no texto principal para que os revisores não presumam que você os escondeu.

## Antes de enviar

Verifique se a folha de notação é consistente entre as seções, se as tabelas principais estão
legível com métricas nomeadas e ± definidas, e algoritmos e figuras são citados
em ordem. Confirme as compilações oficiais da classe dentro do limite de páginas sem fonte
crimes, o `.bib` está limpo com código e dados citados, e um hash de commit é
gravado para o PDF carregado.

Os experimentos de ML já são barulhentos o suficiente. Mantenha a notação e as tabelas silenciosas.