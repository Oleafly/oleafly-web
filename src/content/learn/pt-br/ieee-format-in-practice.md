---

title: "Formato IEEE na prática"
description: "Modos de conferência e diário IEEEtran, blocos de autores e dicas de duas colunas."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Formato IEEE na prática

Os locais do IEEE, desde pequenos workshops até periódicos emblemáticos, compartilham um arquivo de classe: `IEEEtran`. Aprenda uma vez e centenas de locais serão abertos.

## Modo conferência vs diário

A mesma classe produz layouts diferentes dependendo das opções:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

O modo Conferência oferece a aparência clássica: 10pt Times, duas colunas, sem números de página por padrão. O modo Diário altera o layout do título, adiciona biografias de autores no final e ajusta o espaçamento. Use sempre o modo solicitado pelo seu local, eles não são intercambiáveis. Para uma comparação mais ampla entre IEEE e ACM, consulte [ACM, IEEE e amigos](/learn/acm-ieee-and-friends/).

## Autores do jeito IEEE

O modo Conferência possui sua própria marcação de autor. Não lute com `\\` e centralização manual:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` contém nomes, `\IEEEauthorblockA` contém afiliações e `\and` separa os autores em colunas.

## Vivendo com duas colunas

O layout de duas colunas é onde os iniciantes ficam presos. As regras:

| Problema | Correção |
|---|---|
| Figura larga ou mesa | Use `figure*` / `table*`, flutua no topo de uma página |
| Estouros de equações longas | Quebre, veja táticas de duas colunas em [uma coluna ou duas](/learn/one-column-or-two/) |
| Colunas da última página desiguais | Balanceie-os manualmente com `\IEEEtriggeratref` ou o pacote `balance` |
| URL vai até a margem | `\usepackage{url}` ou `xurl` para melhor quebra |

Os ambientes flutuantes com estrela não são negociáveis ​​para conteúdo amplo:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Observe que `figure*` recusa o posicionamento `[h]`, ele sempre flutua no topo da página. Planeje isso em vez de lutar contra isso.

## Bibliografia

O IEEE usa citações numéricas com seu próprio estilo BibTeX:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

O `IEEEtran.bst` correspondente vem com a classe. Não substitua `plain` ou `ieeetr`, observam os revisores, e a lista de verificação pronta para a câmera irá detectá-lo de qualquer maneira.

## Onde obter o modelo real

Sempre comece pela fonte oficial: o IEEE Template Selector em ieee.org ou a própria página do kit do autor da conferência. Os organizadores da conferência às vezes corrigem o modelo (aviso de direitos autorais, rodapés extras), para que a versão do local ganhe uma cópia genérica. A [galeria de modelos](/templates/) do Oleafly inclui um iniciador de conferência no estilo IEEE que é compilado imediatamente no mecanismo Tectonic incluído, útil para rascunhos antes de você incluir o kit oficial.

## Lista de verificação de pegadinhas comuns

- Compilar com código compatível com pdfLaTeX, IEEEtran é anterior ao fontspec e espera mecanismos clássicos
- Não adicione `geometria` ou altere margens, a classe as define exatamente
- `\IEEEpeerreviewmaketitle` é necessário depois de `\maketitle` em algumas submissões de periódicos
- Se o modelo apresentar erros em sua máquina, faça uma triagem como qualquer [modelo quebrado](/learn/fix-broken-template/)