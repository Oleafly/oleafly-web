---

title: "Links dentro do PDF"
description: "hiperref, url, href, cores e metadados PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Links dentro do PDF

Um PDF não é apenas papel em uma tela. Ele pode conter links ativos: URLs clicáveis, referências cruzadas que vão para a figura certa, citações que vão para a bibliografia e um esboço da barra lateral construído a partir dos títulos das seções. No LaTeX, um pacote fornece tudo isso: `hyperref`. Carregue-o e cada entrada `\ref`, `\cite` e índice no seu documento se tornará silenciosamente clicável, sem alterações no resto da sua fonte.

## Carregando e configurando o hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

As opções entre colchetes controlam a aparência dos links. Por padrão, o hyperref desenha um retângulo colorido ao redor de cada link, o que a maioria das pessoas acha feio. A configuração `colorlinks=true` substitui as caixas por texto colorido, e as três opções de cores dividem isso por tipo de link: `linkcolor` cobre saltos internos, como referências de seções e figuras, `citecolor` cobre citações e `urlcolor` cobre endereços da web. Dividi-los é importante porque um artigo repleto de citações pode se transformar em uma parede azul.

## url versus href

Os dois comandos de vinculação realizam trabalhos diferentes. `\url{...}` imprime o próprio endereço em uma fonte de máquina de escrever e o torna clicável, que é o que você deseja em uma bibliografia ou nota de rodapé onde o leitor deve ver para onde vai o link. `\href{address}{text}` esconde o endereço atrás de qualquer texto que você fornecer, como um link em uma página da web. Prefira `\url` em documentos que possam ser impressos, pois um rótulo `\href` não permite ao leitor de papel digitar o endereço.

Um bônus prático: `\url` sabe como quebrar endereços longos entre linhas sem inserir um hífen que corromperia o endereço, algo que uma URL simples de fonte de máquina de escrever não pode fazer.

## Metadados PDF

`\hypersetup` permite alterar qualquer opção de hiperref após o carregamento e também é onde você define os metadados do documento. Os campos `pdftitle` e `pdfauthor` preenchem o título e o autor que seu leitor de PDF mostra na barra de janelas e nas propriedades do arquivo. Sem eles, os leitores geralmente exibem o nome do arquivo ou o primeiro título, que parece inacabado em um documento que você está enviando ou compartilhando. Você pode chamar `\hypersetup` no preâmbulo a qualquer momento após `\usepackage{hyperref}`.

## Documentos para impressão

Para documentos para impressão, use `hidelinks`. Passando-o como uma opção, `\usepackage[hidelinks]{hyperref}`, mantém todos os links clicáveis ​​na tela, mas remove as caixas coloridas e o texto colorido, para que a página impressa pareça completamente normal. Muitas aulas de diário exigem exatamente isso.

Um erro comum a evitar: o hyperref redefine muitos comandos internos, por isso deve ser carregado como um dos últimos pacotes do seu preâmbulo. Se seus links apontarem para páginas erradas ou você receber erros estranhos de outro pacote, a ordem de carregamento é a primeira coisa a verificar. Veja [referências cruzadas](/learn/cross-references/) para a mecânica `\label` e `\ref` que o hyperref torna clicável.