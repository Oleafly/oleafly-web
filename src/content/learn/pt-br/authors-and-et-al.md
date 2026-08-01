---

title: "Listas de autores, ordem e et al."
description: "O que e outros. meios, convenções de ordem de autor por campo e a maquinaria de crédito."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Listas de autores, ordem e outros.

A lista de autores parece a parte mais simples de um artigo. Na verdade, é um pequeno livro de crédito denso com regras específicas de campo. Interpretá-lo mal é um erro clássico de recém-chegado.

## O que "et al." significa

"E outros." é latim, abreviação de *et alii*, "e outros". Quando uma citação diz "Vaswani et al. 2017", significa Vaswani mais os autores restantes, sem nome por questões de brevidade. É uma convenção de citação, não um julgamento: os outros autores são igualmente importantes, simplesmente não há espaço para listar oito nomes de cada vez.

Os estilos de citação são truncados mecanicamente. Muitos estilos nomeiam até dois ou três autores e depois mudam para "Primeiro et al." além disso. Seu estilo bibliográfico lida com isso automaticamente, o que é mais um motivo para [deixar o BibTeX gerenciar citações](/learn/add-citations/) em vez de digitá-las manualmente.

## A ordem do autor é um código, e o código varia de acordo com o campo

| Convenção | Onde | Como ler |
|---|---|---|
| O primeiro autor fez mais | A maior parte de CS, biologia, medicina | A primeira posição é o prêmio |
| O último autor é o PI | Ciências baseadas em laboratório, grande parte do ML | Autor sênior que lidera o grupo e financiamento |
| Alfabético | Teoria CS, matemática, economia | O pedido não contém nenhuma informação |

Isto é importante ao ler currículos entre áreas: uma posição intermediária em um campo em ordem alfabética não diz nada, enquanto em um campo de primeiro autor sinaliza um papel de apoio. Na dúvida sobre um artigo específico, não faça inferências demais. Ao escrever o seu próprio, combine a ordem com antecedência, de preferência antes de começar a escrever. As disputas sobre a ordem do autor no momento da submissão são um gênero genuinamente miserável de drama acadêmico.

## O elenco de símbolos de apoio

Os blocos de autor modernos trazem anotações extras:

- **Autor para correspondência**, geralmente marcado com um símbolo de envelope ou asterisco: a pessoa que cuida do envio e responde ao e-mail do leitor.
- **Contribuição igual**, geralmente uma adaga ou asterisco com uma nota de rodapé como "Esses autores contribuíram igualmente." Comum quando duas pessoas genuinamente co-lideram o trabalho.
- **Afiliações**, correspondidas por números sobrescritos quando os autores abrangem instituições.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Cada classe de local tem sua própria marcação de autor, então copie o padrão do modelo. A mecânica geral do assunto principal está na [lição da página de título](/learn/title-page/).

## ORCID: seu ID permanente

Os nomes colidem e mudam. Um ORCID iD é um identificador persistente (um número de 16 dígitos em orcid.org) que acompanha você em mudanças de nome, instituições e todos os J. Smith em sua área. Muitos periódicos agora exigem um do autor correspondente. Registre-se uma vez, anexe-o às submissões e seu registro de publicação permanecerá inequívoco por toda a vida.

## A única regra que nunca varia

Qualquer que seja a convenção de ordenação, a autoria em si tem uma norma partilhada: todos os listados contribuíram significativamente para o trabalho e todos os que contribuíram significativamente são listados. Autoria de presente e autoria fantasma são condutas impróprias na maioria dos códigos de ética. A ordem é a política; a lista é integridade.