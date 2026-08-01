---

title: "Pacotes que lutam entre si"
description: "hyperref por último, smartef depois, pares obsoletos, exemplos mínimos."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Pacotes que lutam entre si

Os pacotes LaTeX são livres para redefinir os comandos uns dos outros, e muitos o fazem deliberadamente. É assim que o `hyperref` transforma cada referência cruzada em um link. Isso também significa que dois pacotes podem corrigir o mesmo comando com suposições incompatíveis, e o resultado varia de um erro total como `Comando \footnote já definido` ou `Conflito de opções para o pacote xcolor` até uma saída que está silenciosamente errada. Os conflitos quase sempre surgem logo após você adicionar um pacote a um preâmbulo que estava funcionando anteriormente, o que também é a maior pista.

## A ordem de carregamento é metade da batalha

Muitos conflitos são resolvidos puramente por ordem, porque o pacote carregado posteriormente recebe a última palavra. A regra mais importante: carregue o `hyperref` próximo ao final do preâmbulo. Ele reescreve grandes partes do mecanismo de referência cruzada do LaTeX, e os pacotes carregados depois dele podem desfazer esses patches. Uma pequena lista de exceções deve vir ainda mais tarde, e a que você realmente encontrará é `cleveref`, que foi projetada para ficar em cima de `hyperref` e deve ser carregada depois dele:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Quando a documentação de um pacote especifica uma posição relativa a outro pacote, acredite. Essas notas existem porque alguém já atingiu o conflito que você está prestes a ter.

## Pacotes obsoletos e suas substituições

Alguns conflitos surgem ao carregar um pacote morto próximo ao seu sucessor. Não combine `epsfig` com `graphicx`, `subfigure` com `subcaption`, ou os antigos shims `times` e `mathptmx` com pacotes de fontes modernos como `newtxtext`. Os modelos antigos são a fonte usual: eles carregam o que estava atual quando o modelo foi escrito e você adiciona o equivalente moderno por cima. Remova o obsoleto e guarde o substituto. O pacote `nag` pode sinalizar o uso desatualizado para você em tempo de compilação.

## Conflitos de opções

`Conflito de opções para o pacote X` significa que o pacote foi carregado duas vezes com opções diferentes, geralmente uma vez pela sua classe de documento nas suas costas. Você não pode carregá-lo novamente com novas opções, mas pode injetar opções antes que alguém o carregue: coloque `\PassOptionsToPackage{table}{xcolor}` antes de `\documentclass`, e as opções serão mescladas em qualquer carregamento que ocorrer primeiro.

## Isole com um exemplo mínimo

Quando a causa não for óbvia, construa um exemplo funcional mínimo: um documento contendo apenas `\documentclass`, os dois pacotes suspeitos, e um `\begin{document}...\end{document}` com uma linha de texto. Se o erro for reproduzido, alterne a ordem de carregamento e as opções até que isso não aconteça. Se não for reproduzido, adicione os outros pacotes ao meio até que ele retorne. Essa pesquisa binária converge em algumas compilações e fornece um par claro para pesquisar. A mesma técnica resgata preâmbulos herdados, conforme descrito em [Arquivos de classe universitária que não serão compilados](/learn/fix-broken-template/).