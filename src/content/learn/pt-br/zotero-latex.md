---

title: "Zotero em um arquivo .bib"
description: "Melhor BibTeX, exportação automática, chaves que sobrevivem às máquinas."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero em um arquivo .bib

Zotero é muito bom em coletar referências: ele pega metadados e PDFs de um botão do navegador e mantém tudo pesquisável. O LaTeX, por outro lado, só lê arquivos `.bib`. A ponte entre os dois é o plugin Better BibTeX. Ele transforma uma coleção Zotero em um arquivo `.bib` que permanece atualizado e, igualmente importante, mantém as chaves de citação estáveis ​​para que seus comandos `\cite` nunca quebrem.

## Por que a exportação integrada não é suficiente

Zotero pode exportar BibTeX por conta própria, mas ele regenera chaves de citação a cada vez, e uma chave que muda de `knuth_literate_1984` para `knuth_literate_1984-1` quebra silenciosamente cada `\cite` que usava o nome antigo. A exportação também é um instantâneo único, portanto o arquivo fica obsoleto no momento em que você adiciona um papel. O Better BibTeX corrige ambos os problemas: as chaves são geradas a partir de uma fórmula que você escolher, podem ser fixadas para que nunca mudem e a exportação pode ser atualizada automaticamente.

## Configurando o pipeline

Primeiro, instale o Better BibTeX de seu site através da caixa de diálogo Ferramentas, Plugins do Zotero e, em seguida, reinicie o Zotero. Em segundo lugar, decida sobre uma fórmula de chave de citação nas preferências do Better BibTeX. Um padrão que produz chaves como `knuth1984` ou `knuth1984literate` é fácil de digitar e fácil de reconhecer na fonte. Terceiro, clique com o botão direito na coleção que pertence ao seu artigo, escolha Exportar Coleção, selecione o formato Better BibTeX e marque "Manter atualizado" antes de salvar o arquivo na pasta do seu projeto como, digamos, `refs.bib`. A partir daí, adicionar ou editar um item no Zotero reescreve o arquivo em poucos segundos.

Finalmente, aponte seu documento para o arquivo exportado com `\bibliography{refs}` ou `\addbibresource{refs.bib}`, exatamente como acontece com um banco de dados escrito à mão. A fiação é abordada em [Da chave .bib à citação no texto](/learn/add-citations/).

## Divisão de trabalho

Trate o Zotero como o banco de dados mestre e o arquivo `.bib` como um artefato gerado que reside no repositório do artigo. Enviar o `.bib` junto com o `.tex` significa que um coautor, ou você em outra máquina, pode compilar o artigo sem ter o Zotero instalado. Não edite manualmente o arquivo exportado. A próxima exportação automática substitui suas alterações. Em vez disso, corrija os metadados no Zotero e a correção fluirá. Se uma entrada ainda parecer errada após a exportação, execute-a no [validador BibTeX](/tools/bibtex-validator/) para ver com qual campo o estilo está insatisfeito.

Um hábito evita a maioria das dores futuras: quando uma chave aparece em um manuscrito, fixe-a no Better BibTeX (clique com o botão direito no item, Better BibTeX, Pin BibTeX key). As chaves fixadas sobrevivem a alterações de fórmulas, movimentos de máquinas e reorganizações de bibliotecas, que é exatamente o que uma chave de citação precisa fazer.