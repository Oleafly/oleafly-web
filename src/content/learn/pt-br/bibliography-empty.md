---

title: "Bibliografia vazia"
description: "Caminho, back-end, citação ausente, bibliografia impressa versus bibliografia."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Bibliografia vazia

## O sintoma

Seu documento é compilado sem erro fatal, mas a seção Referências está totalmente ausente ou o título aparece sem nada abaixo dele. Freqüentemente, cada `\cite` no texto aparece como um ponto de interrogação em negrito ao mesmo tempo. Nada travou, então não há nenhum erro óbvio a ser perseguido, o que torna este caso frustrante.

## Por que isso acontece

A bibliografia não é produzida apenas pelo LaTeX. O LaTeX primeiro grava a lista de chaves citadas em um arquivo auxiliar. Um programa backend separado (`bibtex` ou `biber`) lê seu banco de dados `.bib` e formata as entradas correspondentes. Finalmente, o LaTeX lê o resultado formatado de volta na próxima passagem. Uma bibliografia vazia significa que esse pipeline quebrou em algum lugar: o backend nunca funcionou, funcionou, mas não conseguiu encontrar o banco de dados, encontrou o banco de dados, mas nenhuma chave foi solicitada ou o documento está solicitando o resultado com o comando errado.

## Trabalhe as causas em ordem

Primeiro, confirme se o arquivo de banco de dados existe onde o documento diz que está. `\bibliography{refs}` e `\addbibresource{refs.bib}` procuram por `refs.bib` relativo ao arquivo principal, então um arquivo que reside em uma subpasta `bib/` deve ser referenciado como `bib/refs` ou `bib/refs.bib`. Um caminho errado falha silenciosamente.

Em segundo lugar, certifique-se de que o back-end realmente funcionou. Uma única compilação nunca é suficiente; o ciclo completo é LaTeX, depois `bibtex` ou `biber`, depois LaTeX mais duas vezes. Oleafly executa esse ciclo automaticamente, mas uma construção manual ou um conjunto de ferramentas de editor mal configurado pode pular a etapa intermediária e o resultado é precisamente uma lista de referências vazia.

Terceiro, verifique se pelo menos um comando `\cite` está presente. O back-end formata apenas as entradas solicitadas pelo documento, portanto, um rascunho sem citações ainda obtém uma lista vazia por design. Durante o rascunho inicial você pode forçar tudo com `\nocite{*}`, que solicita cada entrada no banco de dados sem imprimir nada no texto.

Quarto, combine o comando com o sistema. Documentos BibTeX clássicos terminam com `\bibliographystyle{...}` e `\bibliography{refs}`. documentos biblatex carregam o banco de dados no preâmbulo com `\addbibresource{refs.bib}` e imprimem-no com `\printbibliography`. Misturar os dois, por exemplo carregar o biblatex mas ainda chamar `\bibliography`, produz exatamente esta falha. O mesmo vale para executar o backend errado: o biblatex precisa do `biber`, e alimentá-lo com o clássico `bibtex` não produz nada.

## Leia o próprio log do backend

O back-end grava suas reclamações em um arquivo `.blg` próximo ao seu documento, e é aí que aparecem entradas malformadas, chaves duplicadas e mensagens "Não consegui abrir o arquivo de banco de dados". Se as etapas acima parecerem corretas, mas a lista ainda estiver vazia, o log `.blg` quase sempre nomeia o verdadeiro culpado. Para pontos de interrogação que persistem após a própria bibliografia aparecer, consulte [Limpar marcas de citação misteriosas](/learn/citation-question-mark/).