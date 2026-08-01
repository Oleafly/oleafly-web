---

title: "Apêndices que renumeram de forma limpa"
description: "apêndice, capítulos A/B, contadores que permanecem consistentes."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Apêndices que renumeram de forma limpa

Um apêndice contém material que apoia o texto principal, mas o interromperia: provas longas, instrumentos de pesquisa, tabelas extras, detalhes de implementação. Os leitores esperam que os apêndices tenham as letras A, B, C em vez de continuarem os números dos capítulos, e esperam que o material contido siga o exemplo, então uma figura no Apêndice A é a Figura A.1, não a Figura 47. No LaTeX, isso é uma mudança única, não um trabalho de reestruturação.

## A mudança

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\apêndice` é uma declaração, não um ambiente: não há nada para fechar. A partir do ponto em que aparece, os contadores de corte são zerados e mudam para letras. Nas classes `report` e `book`, cada `\chapter` depois dele se torna Apêndice A, Apêndice B, e assim por diante, e uma `\section` dentro se torna A.1. Você ainda escreve apenas seu próprio texto de título; o rótulo "Apêndice A" e as letras vêm da classe, exatamente como os números dos capítulos vinham antes da mudança.

Em `article`, que não tem capítulos, `\appendix` renomeia `\section` em vez disso: a primeira seção depois de se tornar o Apêndice A. Tudo o que está abaixo permanece consistente automaticamente. O índice lista os títulos com letras, e um `\label` colocado em um apêndice resolve através de `\ref` para "A" ou "A.2" sem qualquer tratamento especial.

## O que renumera e o que não

Em `report` e `book`, figuras, tabelas e equações são numeradas dentro de capítulos, então eles pegam a letra de graça: a primeira figura do Apêndice B é a Figura B.1. No `artigo` esses contadores percorrem continuamente todo o documento e `\apêndice` não os toca, então a numeração das equações simplesmente continua. Isso é normal para um artigo curto; só lute se um local solicitar explicitamente números com prefixo A.

## Quando você quiser mais

O pacote `apêndice` adiciona refinamentos que faltam ao switch simples. Seu ambiente `apêndices` pode imprimir a palavra "Apêndice" em cada título e no índice (`\usepackage[toc,titletoc,title]{apêndice}`), e pode inserir uma página separadora anunciando os apêndices. Para uma tese cujo modelo ainda não lida com isso, essas opções evitam complicações manuais.

Um erro comum é você mesmo escrever o rótulo no título, como em `\chapter{Apêndice A: Provas extras}`. A classe adiciona seu próprio rótulo, então a saída é "Apêndice A Apêndice A: Provas extras". Dê ao cabeçalho apenas o título e deixe a máquina de numeração fazer seu único trabalho. Se você tiver um único apêndice, o único "Apêndice A" é uma questão de estilo; a maioria dos locais o aceita, e alguns preferem um `\chapter*{Apêndice}` analfabeto.