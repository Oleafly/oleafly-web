---

title: "Páginas da web, vídeos, conjuntos de dados"
description: "entradas diversas/online e datas de acesso para URLs frágeis."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Páginas da web, vídeos, conjuntos de dados

O BibTeX foi projetado na década de 1980 para periódicos, livros e anais de conferências, por isso não tem ideia nativa de uma página da web, um vídeo do YouTube ou um conjunto de dados no Zenodo. Você ainda precisa citar essas coisas constantemente, e a solução padrão é o tipo de entrada `@misc`, que aceita quase qualquer combinação de campos e permite que o estilo os imprima de maneira sensata.

## O padrão @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Três detalhes são importantes aqui. Os colchetes duplos em torno de `{{Oleafly Contributors}}` dizem ao BibTeX para tratar a string inteira como um nome literal; sem eles, analisaria "Contribuintes" como um sobrenome e abreviaria o restante para "O. Contribuintes". O campo `howpublished` é o local usual para uma URL no BibTeX clássico, e agrupar o endereço em `\url{...}` o compõe em fonte monoespaçada e permite que ele seja dividido de forma limpa entre as linhas (carregue o pacote `url` ou `hyperref` para isso). O campo `nota` contém a data de acesso, o que é importante porque o conteúdo da web muda e desaparece. Essa data informa aos leitores qual versão da página você realmente viu.

## A alternativa biblatex: @online

Se o seu documento usa biblatex, existe um tipo dedicado. Uma entrada `@online` usa os campos `url` e `urldate` adequados, então a mesma fonte se torna `url = {https://oleafly.com}` e `urldate = {2026-07-24}`, e o estilo formata a data de acesso para você. Prefira `@online` quando o estilo da bibliografia suportar, e volte para `@misc` quando você precisar permanecer compatível com um arquivo `.bst` clássico. As diferenças entre os dois sistemas são apresentadas em [BibTeX clássico ou biblatex](/learn/bibtex-vs-biblatex/).

## Conjuntos de dados e software

Conjuntos de dados e lançamentos de código merecem mais do que um URL simples quando existe um DOI. Repositórios como Zenodo e Figshare mint DOIs para que a citação possa sobreviver a qualquer configuração de hospedagem. Coloque o DOI em um campo `doi`, ou em `howpublished` como `\url{https://doi.org/10.5281/...}` para estilos clássicos. Inclua uma nota de `versão` quando o artefato for versionado, porque "o conjunto de dados" que um leitor baixa em cinco anos pode não ser aquele que você analisou. Muitos projetos também publicam uma citação preferencial, geralmente em um arquivo `CITATION.cff` no repositório. Usar isso é educado e mais preciso do que adivinhar os campos sozinho.

## Vídeos e outras fontes estranhas

Para um vídeo, coloque o canal ou criador em `author`, o título do vídeo em `title`, a plataforma e URL em `howpublished` e o ano de upload em `year`, com sua data de acesso em `note`. A regra geral para qualquer coisa incomum é a mesma: capture quem fez, como é chamado, onde o leitor pode encontrá-lo e quando você olhou, e `@misc` carregará tudo isso com segurança em qualquer estilo.