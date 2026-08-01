---

title: "Artigos de biologia e ciências biológicas: figuras, placas multipainel e coautores"
description: "LaTeX prático para laboratório úmido e biologia computacional: figuras de vários painéis, resolução, suplementos, notação estatística e colaboração sem sobrescrever uns aos outros."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Os manuscritos de ciências biológicas priorizam as figuras. Os revisores examinam o prato antes de
leia sua prosa, então a figura tem que fazer a afirmação sem acenar com a mão
a legenda. O LaTeX lida bem com isso se você tratar os números como de primeira classe
arquivos de projeto em vez de algo que você cola às 2h antes do suplemento
prazo.

Grupos de laboratórios úmidos e computacionais enfrentam os mesmos problemas: painéis sem compartilhamento
barras de escala, artefatos JPEG em borrões, suplementos que não são compilados e um
dúzia de coautores editando um parágrafo. Abaixo está o que realmente funciona.

## Figuras de vários painéis

Os revisores esperam painéis (a)(b)(c) sob uma legenda. Você pode:

1. Construa a placa fora do TeX (Illustrator, Inkscape, Fiji export) e solte
   em um único PDF ou PNG, ou
2. Monte em TeX com `subcaption` quando cada painel for seu próprio arquivo:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Consulte os painéis como Figura~\ref{fig:exp}a no texto somente se o estilo do diário
permite. Muitos locais preferem a "Figura 2A" com um esquema aplicado
em todos os lugares. Mais sobre esse padrão:
[painéis a, b, c](/learn/subfigures-abc/).

Nomeie os arquivos de forma consistente (`fig03_western_a.pdf`) para que ninguém invente
`final_gel_NEW.png` a semana da submissão.

## Resolução, cor e formatos de arquivo

Mantenha os arquivos de microscopia como TIFF ou PDF de alta resolução. Para o PDF em papel
em si, use gráficos vetoriais para esquemas e PNG/PDF com dpi suficiente para
dados rasterizados. Ignore anotações e géis JPEG on-line. Artefatos de compressão
lida como ciência desleixada, mesmo quando o experimento é bom.

Verifique as taxas de cores e as regras de impressão antes de projetar uma paleta de seis cores que
só funciona no seu monitor calibrado. Algumas revistas querem CMYK; outros convertem
mal sem perguntar. Quando eles solicitam versões da chave seguras em escala de cinza
números, dê-lhes esses.

Coloque barras de escala e unidades de intensidade no painel, não apenas na legenda. Se
figuras de re-layouts de produção, barras de escala embutidas sobrevivem; notas apenas com legenda
muitas vezes não.

## Esquemas versus painéis de dados

Mantenha o “desenho animado do caminho” separado da “quantificação da mancha”.
Os desenhos animados podem ser TikZ ou arte vetorial externa. Os painéis de dados devem ficar próximos de
a exportação da análise para que você possa regenerá-las quando um revisor desejar uma
normalização diferente. Observe o caminho do script de análise nas notas de legenda ou em um
suplemento de reprodutibilidade quando a revista permitir.

## Suplementos que ainda compilam

Mesas gigantes, géis extras e fotos de filmes pertencem a um suplemento próprio
documento ou um apêndice claro. Algumas regras que evitam dores de cabeça:

Os rótulos devem ser exclusivos se o principal e o suplemento compartilharem uma compilação. Se eles são
projetos separados, escreva "Figura S3" em texto simples e não confie em `\ref`
em PDFs. Mantenha uma pequena lista de quais afirmações do texto principal apontam para quais
itens complementares, para que nada flua.

Um suplemento que não compila a semana de submissão ainda é seu
problema, mesmo quando o PDF principal parece limpo.

## Caos de vários autores

Artigos de biologia geralmente têm muitos coautores em diferentes níveis de habilidade em LaTeX. Próprio
arquivos por seção (`results.tex`, `methods.tex`, `figs.tex`), mesclar através
Git, e decidir quem mantém o `.bib` (uma pessoa ou um grupo compartilhado do Zotero
exportação).

Uma pasta de projeto local é mais fácil de compactar para um colaborador do que uma nuvem
projeto ao qual perdem acesso após a formatura. A história real do Git supera o e-mail
anexos chamados `manuscript_JM_edits_FINAL.docx` que alguém converte de volta
para TeX manualmente. Ponto de verificação após compilações bem-sucedidas; restaurar quando uma mesclagem
dá errado; mantenha um controle remoto privado.

Se alguns coautores editarem apenas Word, exporte DOCX ou PDF para eles e mantenha `.tex`
como fonte da verdade. Veja
[coautores que falam apenas Word](/learn/collaborator-uses-word/).

## Métodos e notação estatística

Defina macros estatísticas uma vez para que os valores p não apareçam como `$p$` e
`p=` no mesmo artigo:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Indique o teste, n e correção de comparação múltipla em métodos ou tabela
notas, não apenas em uma legenda de figura que é cortada na produção. Denso
os artigos se beneficiam de uma pequena lista de notações. Verificação de referência/citação ao vivo em um
o editor de pesquisa captura um `\ref` para um painel excluído antes do revisor.

## Legendas que carregam a reivindicação

Uma boa legenda diz o que foi medido, em qual sistema e o que o leitor
deveria notar. Evite "Ver texto". Não despeje métodos na legenda que
pertencem à seção de métodos. As letras do painel (negrito ou parênteses) devem
combina com o estilo da casa.

## Lista de verificação de figuras pré-envio

Antes de clicar em enviar, analise as figuras uma vez:

- Todas as figuras principais citadas em ordem (ou qualquer ordem permitida pela revista).
- Painéis etiquetados; barras de escala onde elas importam.
- Nenhuma bagunça JPEG em painéis quantitativos.
- Compilações de suplementos; Os números S não foram embaralhados.
- Política de cores verificada; tamanhos de arquivo dentro dos limites do portal.
- Imagens de origem e scripts ainda podem ser encontrados no arquivo do projeto ou do laboratório.

## Westerns, géis e contraste

Não processe demais os borrões do PDF. Periódicos e leitores observam o contraste
jogos. Mantenha os arquivos brutos no arquivo do laboratório e envie painéis que correspondam ao que
quantificação utilizada. Se você reorganizar os painéis, atualize todos os painéis de texto
carta no mesmo dia, não "mais tarde".

## Filmes e suplementos interativos

Quando a revista permitir filmes, hospede-os da maneira que eles instruem e coloque um
ainda mais legenda no PDF. Não dependa de um link de nuvem pessoal que
morre após a formatura.

Os números são a espinha dorsal desses artigos. LaTeX é apenas o quadro. Certifique-se
o quadro não é o que falha na noite anterior à submissão.