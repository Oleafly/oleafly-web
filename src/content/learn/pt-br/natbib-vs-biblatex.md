---

title: "hábitos natbib vs comandos biblatex"
description: "Citações entre parênteses e textuais e os nomes que as substituem."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# hábitos natbib vs comandos biblatex

A citação autor-ano precisa de dois tipos de comando de citação. Às vezes, os autores fazem parte da sua frase, como em "Knuth (1984) introduziu a programação alfabetizada". Às vezes, a citação é um aparte entre parênteses, como em "Programação alfabetizada mistura código e prosa (Knuth, 1984)." O simples `\cite` não pode fazer essa distinção, e é por isso que o pacote `natbib` existe e porque o biblatex envia seu próprio conjunto de nomes para as mesmas ideias. Se você aprendeu um e recebeu um modelo usando o outro, esta página é a tabela de tradução.

## Os comandos natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

O mnemônico é que `\citet` é uma citação *textual* que pode ser lida como parte da frase, enquanto `\citep` é uma citação *parênteses* entre colchetes. As variantes marcadas com estrela imprimem a lista completa de autores em vez de "et al.", que ocasionalmente é necessário na primeira vez que você cita um trabalho. natbib também oferece `\citeauthor` apenas para os nomes, `\citeyear` apenas para o ano, e um argumento opcional para números de páginas, como em `\citep[p.~42]{knuth84}`. natbib é um pacote da era do pré-processador: ele funciona com o BibTeX clássico e um estilo `.bst` compatível, como `plainnat` ou `apalike`.

## Os equivalentes do biblatex

biblatex cobre o mesmo terreno com nomes diferentes. `\textcite{knuth84}` produz a forma textual "Knuth (1984)", `\parencite{knuth84}` produz o parêntese "(Knuth, 1984)", e `\cite{knuth84}` simples produz uma citação simples cuja aparência exata depende do estilo carregado. Existem análogos diretos para o resto também: `\citeauthor`, `\citeyear`, e pré-notas e pós-notas para coisas como números de páginas, escritas `\parencite[see][p.~42]{knuth84}`. Se a memória muscular for o problema, o biblatex ainda tem uma opção de pacote `natbib=true` que define `\citet` e `\citep` como aliases, o que torna a migração quase indolor.

## Migrando um documento do natbib para o biblatex

Seu arquivo `.bib` não precisa de nenhuma alteração. Ambos os sistemas leem o mesmo banco de dados. A migração afeta apenas o preâmbulo e a construção. Remova `\usepackage{natbib}` e a linha `\bibliographystyle`, então carregue `\usepackage[backend=biber,style=authoryear]{biblatex}` e aponte-o para seu banco de dados com `\addbibresource{refs.bib}`. Substitua `\bibliography{refs}` no final do documento por `\printbibliography`. Finalmente, certifique-se de que a compilação execute `biber` em vez de `bibtex`, porque o biblatex armazena seus dados em um formato diferente e o backend antigo não produzirá nada silenciosamente. Se você preferir não tocar no corpo do texto, mantenha os nomes dos comandos natbib por meio da opção de compatibilidade e apenas o preâmbulo muda.

## Qual escolher

Se o modelo de diário já carrega o natbib, continue com ele. Lutar contra um arquivo de classe raramente vale a pena. Para novos documentos de sua escolha, o biblatex é mais flexível e lida melhor com Unicode. A comparação mais ampla está em [BibTeX clássico ou biblatex](/learn/bibtex-vs-biblatex/), e a troca de estilos posteriormente é abordada em [Estilos numéricos, autor-ano, periódicos](/learn/change-citation-style/).