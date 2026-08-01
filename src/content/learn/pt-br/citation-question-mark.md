---

title: "Limpando aspas misteriosas"
description: "Erros de digitação, passes perdidos, caminho errado, incompatibilidade entre BibTeX e Biber."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Limpando aspas misteriosas

## O sintoma

O documento é compilado, mas onde uma citação deveria aparecer você recebe um ponto de interrogação em negrito, `[?]`, e o log contém linhas como `LaTeX Warning: Citation 'knuth84' undefined`. Às vezes, todas as citações são afetadas, às vezes apenas uma ou duas. Como se trata de um aviso e não de um erro, o PDF ainda é construído e as marcas são fáceis de perder até que um leitor as aponte.

## Por que isso acontece

LaTeX não resolve citações diretamente. Na primeira passagem ele registra cada chave solicitada em um arquivo auxiliar. Um programa backend (`bibtex` ou `biber`) procura essas chaves em seu banco de dados `.bib` e grava entradas formatadas. Duas passagens adicionais de LaTeX dobram os resultados de volta. Um ponto de interrogação significa que no momento da passagem final, não existia nenhuma entrada formatada para aquela chave. Cada causa desse sintoma é alguma forma de quebrar esse pipeline.

## Trabalhe as causas em ordem

Verifique primeiro a própria chave. `\cite{knuth84}` e `@article{knuth1984,...}` são strings diferentes e a correspondência é exata, incluindo maiúsculas e minúsculas. Procure em seu arquivo `.bib` pela chave nomeada no aviso; um erro de digitação em ambos os lados é o culpado mais comum, e o primeiro aviso de chave perdida no log é o que deve ser perseguido.

Em seguida, certifique-se de que todo o ciclo de compilação foi executado. A sequência é LaTeX, depois `bibtex` ou `biber`, depois LaTeX mais duas vezes. Uma única compilação nunca pode resolver citações, porque o backend ainda não foi executado. Oleafly conduz todo o ciclo automaticamente, mas uma construção manual ou um editor mal configurado pode parar após a primeira passagem.

Terceiro, verifique o caminho do banco de dados. `\bibliography{refs}` e `\addbibresource{refs.bib}` são resolvidos em relação ao arquivo principal, portanto, um banco de dados em uma subpasta deve ser escrito como `bib/refs` ou `bib/refs.bib`. Um caminho errado falha silenciosamente e geralmente leva consigo toda a lista de referências; consulte [Bibliografia vazia](/learn/bibliography-empty/) para ver essa falha maior.

Finalmente, combine o back-end com o sistema. Um documento que carrega o biblatex deve ser processado com `biber`. Alimentá-lo com o clássico `bibtex` não produz resultados utilizáveis, e cada citação permanece um ponto de interrogação, não importa quantas vezes você recompile.

## Se tudo mais falhar

Arquivos auxiliares obsoletos podem manter um estado antigo e quebrado. Exclua os arquivos `.aux`, `.bbl` e `.blg` próximos ao seu documento e reconstrua do zero. Também vale a pena ler o arquivo `.blg` antes de excluí-lo: é o próprio log do backend e nomeia explicitamente bancos de dados ausentes e entradas malformadas.