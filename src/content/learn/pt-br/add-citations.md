---

title: "Da chave .bib à citação no texto"
description: "O loop BibTeX usual com comandos de citação e bibliografia."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# Da chave .bib para citação no texto

Citar uma fonte em LaTeX envolve duas partes: um banco de dados de texto simples que descreve cada trabalho uma vez, e um comando `\cite` em seu documento que aponta para uma entrada por sua chave. O LaTeX numera a citação, formata a lista de referências e mantém tudo consistente quando você reordena seções ou adiciona fontes. Você nunca digita "[12]" manualmente e nunca renumera nada sozinho.

## Os comandos no documento

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` insere o marcador no texto onde quer que a citação pertença. Os dois comandos na parte inferior fazem o resto: `\bibliographystyle{plain}` escolhe como as citações e referências são formatadas, e `\bibliography{refs}` nomeia o arquivo de banco de dados (sem sua extensão `.bib`) e marca onde a lista de referências deve ser impressa, geralmente logo antes de `\end{document}`. Somente as fontes que você realmente cita aparecem na lista.

## A entrada no banco de dados

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Ele fica em `refs.bib`, um arquivo separado próximo ao seu `main.tex`. A palavra após `@` é o tipo de entrada, `knuth84` é a chave de citação e o restante são campos que o estilo usa para construir a referência formatada. A chave é o único link entre os dois arquivos, portanto ela deve corresponder exatamente ao argumento de `\cite`, incluindo letras maiúsculas. Você pode verificar um banco de dados inteiro em busca de campos ausentes e entradas malformadas com o [validador BibTeX](/tools/bibtex-validator/).

## Por que uma compilação não é suficiente

A bibliografia é construída por um programa separado. Na primeira passagem do LaTeX, o documento grava a lista de chaves citadas em um arquivo auxiliar. O programa `bibtex` então lê essa lista, extrai as entradas correspondentes de `refs.bib` e as formata. Mais duas passagens de LaTeX dobram o resultado de volta e resolvem os marcadores no texto. Oleafly executa esse ciclo completo para você em cada compilação. Se você construir manualmente e pular a etapa intermediária, as citações aparecerão como pontos de interrogação em negrito; consulte [Limpar marcas de citação misteriosas](/learn/citation-question-mark/) quando isso acontecer.

## Para onde ir a partir daqui

Um único arquivo `.bib` pode servir para todos os artigos que você escreve, por isso vale a pena criá-lo com cuidado. [Crie um .bib que dure](/learn/create-bibliography/) abrange tipos de entrada, campos obrigatórios e chaves que sobrevivem por uma década. Quando um local deseja uma aparência diferente, você altera uma linha em vez de qualquer entrada, conforme explicado em [Número, ano do autor, estilos de diário](/learn/change-citation-style/).