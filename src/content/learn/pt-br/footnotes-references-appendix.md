---

title: "Notas de rodapé, referências e apêndices: quem faz o quê"
description: "Onde pertencem os apartes, as evidências e o material excedente e quem realmente os lê."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Notas de rodapé, referências e apêndices: quem faz o quê

Um papel possui três locais para colocar material que não pertence ao fluxo principal, e cada um tem uma função distinta. Coloque o conteúdo certo no lugar certo e os leitores permanecerão orientados. Misture-os e seu papel parecerá uma gaveta de lixo.

## Notas de rodapé: o educado à parte

Uma nota de rodapé serve para algo que vale a pena ser dito, mas não vale a pena interromper a frase: um URL, um esclarecimento, uma advertência, um "agradecemos ao revisor por esta observação".

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Use-os com moderação. Um artigo com uma nota de rodapé por parágrafo é um artigo que discute consigo mesmo. Se o conteúdo for essencial, promova-o no texto. Se for um trabalho anterior citável, ele pertencerá às referências. E alguns locais proíbem notas de rodapé para URLs em favor de citações adequadas, então verifique o modelo.

## Referências: a trilha das evidências

Quando você cita um trabalho, você está apontando para as evidências por trás de uma afirmação: esse fato foi estabelecido ali, esse método foi introduzido por eles, esse conjunto de dados vem daqui. A lista de referências é o mapa completo de quem você está construindo, e os revisores a verificam cuidadosamente, tanto para ver se há entradas faltantes quanto para afirmações fixadas em citações que na verdade não as apoiam.

No LaTeX a mecânica é automática: `\cite{key}` no texto, uma entrada no seu arquivo `.bib`, e a lista se renderiza.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

O fluxo de trabalho completo está em [adicionar citações](/learn/add-citations/) e [criar uma bibliografia](/learn/create-bibliography/). Oleafly pode preencher uma entrada `.bib` a partir de uma pesquisa DOI, o que supera a digitação manual de listas de autores.

## Apêndice: a sala de transbordamento

O apêndice contém material que dá suporte ao artigo, mas interromperia seu fluxo: provas completas, tabelas de resultados extras, grades de hiperparâmetros, modelos de prompt, documentação de conjunto de dados. A regra é que o papel principal seja independente. Um leitor que nunca abre o apêndice ainda assim ficará convencido; um leitor que o abrir deverá encontrar todos os detalhes que foram prometidos.

```latex
\appendix
\section{Full proofs}
```

Depois de `\apêndice`, as seções se autodenominam A, B, C automaticamente.

## Material complementar: fora do PDF

Material suplementar é tudo que não pode estar em um PDF: código, dados, vídeos, demonstrações interativas. Muitos locais o coletam como um upload separado com seus próprios limites de tamanho. Trate-o como parte de sua história de reprodutibilidade e faça referência a ele explicitamente na seção de métodos para que os leitores saibam que ele existe.

## Quem realmente lê o quê

| Parte | Comportamento do revisor |
|---|---|
| Notas de rodapé | Lido de passagem, esquecido rapidamente |
| Referências | Verificado em busca de trabalho perdido, especialmente o seu próprio |
| Apêndice | Aberto quando uma reclamação no papel precisa ser verificada |
| Suplementar | Aberto pelo revisor que executa seu código |

O que isso significa na prática: nunca esconda nada essencial em uma nota de rodapé ou apêndice. Os revisores julgam o texto principal, e "a resposta estava no Apêndice F" nunca suavizou uma revisão. Coloque o seu melhor material onde o skim irá encontrá-lo e deixe a parte de trás fazer o que faz de melhor: segurar silenciosamente os recibos.