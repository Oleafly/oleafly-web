---

title: "Diagramas de pesquisa no TikZ quando o PowerPoint não funciona"
description: "Quando desenhar pipelines, autômatos e diagramas comutativos no TeX para que eles sejam recoloridos para o diário, permaneçam nítidos na impressão e vivam como fonte no repositório."
date: 2026-07-08
tags: [tikz, figures, research]
---

Os diagramas do PowerPoint tornam-se retângulos difusos no PDF. Os diagramas TikZ permanecem
vetor, combinar as fontes do documento e recolorir quando um diário exigir escala de cinza
ou um sotaque diferente. O comércio é uma primeira hora mais íngreme. Depois disso, pequeno
as edições são diferenças de texto, não arqueologia de captura de tela.

Você não precisa do TikZ para cada figura. Fotografias, molduras brutas de microscópio e
plotagens densas do matplotlib geralmente permanecem como PDF/PNG inclui. Use TikZ quando o
a figura é a estrutura: pipelines, autômatos, caixas de arquitetura, diagramas de categorias,
árvores simples.

## Comece pequeno

Um pipeline de três nós ensina o modelo:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Nomeie nós. Conecte-se com `--` ou âncoras explícitas (`(a.east)`). Prefira parente
posicionamento (`right=of a`) sobre coordenadas mágicas das quais você nunca se lembrará.
Lições: [primeira foto do TikZ](/learn/tikz-intro/),
[nós e setas](/learn/tikz-nodes-arrows/).

## Estilos superam opções únicas

Defina os estilos uma vez para que cada caixa corresponda:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Quando a revista pedir linhas mais grossas ou monocromáticas, mude o estilo, não
vinte nós. Pinte com cores nomeadas ou uma pequena macro de paleta para que você possa trocar
acentos sem caçar códigos hexadecimais.

## CS e engenharia: fluxogramas que alinham

Use a biblioteca `positioning` (`below=of`, `right=of`) para que as caixas compartilhem uma grade.
Coordenadas absolutas manuais são como os diagramas apodrecem quando você insere um nó. Mantenha
texto curto; coloque detalhes na legenda. Guia:
[fluxogramas alinhados](/learn/tikz-flowchart/).

Para esboços de redes neurais ou sistemas, separe os “blocos” das “anotações”.
As anotações podem ser nós de fonte menores, sem bordas, para que o caminho principal permaneça
legível em largura de duas colunas.

## Matemática e teoria: diagramas comutativos

`tikz-cd` é o caminho usual para diagramas de estilo de categoria sem colocar todos
nó manualmente:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Guia: [diagramas comutativos](/learn/comutative-diagrams/). Para árvores e
existem diagramas teóricos de prova, existem bibliotecas especializadas; comece simples antes de você
importar metade do CTAN.

## Externalize e compile o tempo

Um artigo com vinte números do TikZ atrasará a compilação completa. Opções:

- Coloque cada figura em seu próprio arquivo e `\input`.
- Use a biblioteca `externa` para que as imagens se tornem PDFs armazenados em cache.
- Faça um rascunho com `\tikzexternaldisable` quando você só se preocupa com prosa.

Exportar para slides: compilar um documento TikZ `autônomo` para PDF, converter para PNG
somente se a ferramenta de deck não puder aceitar PDF. Mantenha o `.tex` como fonte da verdade.

## Ferramentas Canvas vs TikZ escrito à mão

Alguns editores de pesquisa incluem uma tela de diagrama que emite TikZ editável (por
exemplo Diagram Composer do Oleafly: desenhe, ajuste o código, compile a figura,
inserir). Isso é útil para geometria que você pode arrastar. TikZ escrito à mão ainda vence
para diagramas comutativos rígidos e grades altamente regulares. De qualquer forma, comprometa-se
Fonte TikZ, não apenas um PNG.

## Mantenha os diagramas no repositório

Armazene as fontes das figuras próximas ao papel:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Quando o diário deseja linhas mais grossas, você edita a fonte e recompila. Quando um
coautor "melhora" uma captura de tela em uma ferramenta de slide, você perdeu o único
versão editável.

## Modos de falha comuns

O estouro em duas colunas é comum. Escale com `\resizebox` como último recurso;
redesenhar primeiro a largura. A incompatibilidade de fonte é outra: prefira o documento padrão
fontes sobre famílias de fontes codificadas dentro do TikZ, a menos que o periódico exija.
Verifique o contraste das palestras, porque o cinza invisível nos projetores é um clássico
armadilha. E setas sem rótulos forçam a legenda a explicar cada aresta, o que significa
o diagrama está incompleto.

## Camadas e sobreposições

Para palestras e artigos que compartilham uma figura, construa o diagrama em camadas: base
primeiro as caixas, depois as setas e depois os rótulos. Comente as camadas durante a depuração
colocação. As sobreposições do Beamer (`\pause`, `\onslide`) podem revelar um pipeline passo a passo
passo da mesma fonte TikZ se você mantiver os nomes dos nós estáveis.

## Acessibilidade e impressão

Não codifique o significado apenas em vermelho versus verde. Use forma ou estilo de linha também.
Verifique a figura em tons de cinza. As legendas ainda devem fazer sentido se o leitor estiver
daltônicos ou imprimindo em uma impressora de laboratório em preto e branco.

## Um fluxo de trabalho que funciona

Esboce no papel por trinta segundos e depois construa o menor TikZ que mostre o
reivindicação. Defina estilos uma vez e reutilize-os. Compile a figura sozinha até que ela
parece certo, coloque-o no papel e deixe a legenda conter a afirmação. Confirmar
o `.tex`.

O PowerPoint é adequado para uma reunião única de laboratório. Para o PDF, um diário será impresso,
fonte de vetor que você pode recolorir bate outra rodada de "você pode enviar o editável
arquivo?"