---

title: "Formatos Springer, Elsevier e LNCS"
description: "llncs, periódicos Springer Nature e elsarticle: classes de coluna única e fonte pronta para câmera."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Formatos Springer, Elsevier e LNCS

Fora dos ecossistemas IEEE e ACM, duas editoras dominam: Springer (incluindo Springer Nature) e Elsevier. Suas aulas parecem mais simples do que os estilos de conferência de duas colunas, e isso é intencional. O editor compõe a versão final.

## LNCS: o carro-chefe do processo

Se a sua conferência for publicada em Lecture Notes in Computer Science (ou em seus irmãos LNAI e LNBI), você escreve em `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Os artigos do LNCS são de coluna única, usam sobrescritos `\inst{}` para mapear autores para institutos e têm um orçamento de páginas padrão notoriamente apertado (geralmente de 12 a 16 páginas incluindo referências). A classe não está em todas as distribuições do TeX por padrão. Baixe o kit do autor na página LNCS da Springer. Seu estilo de bibliografia é `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Revistas Springer Nature

Os periódicos Springer historicamente usavam `svjour3` e têm migrado para a classe `sn-jnl` mais recente com opções de estilo por família de periódicos (`sn-mathphys-num`, `sn-basic` e outros). A página “Diretrizes de submissão” da revista nomeia a classe e a opção exatas. Não adivinhe: duas revistas Springer podem querer aulas diferentes.

## Elsevier: elsarticle

Os periódicos da Elsevier compartilham uma classe, `elsarticle`:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

A opção `preprint` fornece uma coluna única espaçosa com espaçamento duplo para revisão, e `final` com `1p`, `3p` ou `5p` imita o layout de impressão da revista. Os estilos de bibliografia são `elsarticle-num` (numerado) ou `elsarticle-harv` (autor-ano), correspondendo ao que a revista usa.

## Comparação rápida

| Editora | Classe | Colunas | Estilo babador |
|---|---|---|---|
| Springer LNCS | `llncs` | um | `splncs04` |
| Revistas Springer Nature | `sn-jnl` (era `svjour3`) | um | opção por diário |
| Elsevier | `elsarticle` | um (revisão) | `elsarticle-num` / `-harv` |

## Por que coluna única? Porque você não é o tipógrafo

Essas classes renderizam seu *manuscrito*, não a página final. A equipe de produção da editora re-compõe os artigos aceitos no layout da revista. É também por isso que "upload de fonte pronta para câmera" aqui significa algo específico: você carrega seus arquivos `.tex`, `.bib` e de figuras, não apenas um PDF, para que a produção possa reconstruir e remodelar o papel. Consequências práticas:

- Mantenha a fonte limpa e compilável a partir de um novo checkout: sem caminhos absolutos, sem números faltantes
- Não hackeie espaçamentos ou margens. A produção remove-o de qualquer maneira (e pode [ser sinalizado](/learn/page-limits-without-crimes/))
- Use pacotes padrão. Os exóticos são reescritos pela produção ou devolvidos para você

Essas classes dependem de um bom número de pacotes, portanto uma instalação mínima pode buscar vários na primeira compilação. Se algum se recusar a aparecer, consulte [instalando pacotes ausentes](/learn/install-missing-package/). Se o modelo apresentar erros imediatos, faça uma triagem como qualquer [modelo quebrado](/learn/fix-broken-template/).