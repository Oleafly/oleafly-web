---

title: "Resumos que ganham o clique"
description: "Uma fórmula de quatro frases para resumos, além do LaTeX e dos erros a serem evitados."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Resumos que ganham o clique

Seu resumo é a única parte do artigo que a maioria das pessoas lerá. Os revisores usam-no para decidir o quão mal-humorado deve ser, os motores de busca usam-no para classificar você e os pesquisadores ocupados usam-no para decidir se vale a pena abrir o PDF. Seu trabalho é simples e brutal: vender o jornal inteiro em 150-250 palavras.

## A fórmula de quatro frases

Você pode redigir um resumo sólido respondendo quatro perguntas em ordem. Cada resposta é uma ou duas frases.

| Frase | Pergunta que responde |
|---|---|
| Contexto | Que área problemática é essa e por que isso importa? |
| Lacuna | O que está faltando ou quebrado nas abordagens atuais? |
| Contribuição | O que você construiu, provou ou descobriu? |
| Resultado | Qual é o número do título ou descoberta? |

Por exemplo: "Treinar modelos grandes é caro. Os métodos de compressão existentes trocam muita precisão por velocidade. Introduzimos uma técnica de poda que preserva a precisão, visando cabeças de atenção redundantes. Em três benchmarks, reduz o custo de inferência em 40%, com perda de precisão inferior a 0,5%. " Quatro frases, papel inteiro.

Expanda cada batida conforme necessário, mas mantenha a ordem. Os leitores esperam o funil: amplo, estreito, nosso, prova.

## Resumo vs introdução

As pessoas confundem isso constantemente. O resumo é o trailer do filme: estraga o final de propósito, porque os pesquisadores querem saber o resultado antes de investir uma hora. A introdução é o primeiro ato: ela constrói o argumento lentamente, cita a literatura e justifica cada afirmação. Nunca escreva um resumo que provoque ("nós exploramos se...") quando você poderia indicar o resultado. Consulte [introduções e trabalhos relacionados](/learn/introduction-and-related-work/) para o primeiro ato.

## O LaTeX

O ambiente `abstract` vem depois de `\maketitle` na maioria das classes de artigos:

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Algumas classes de diário querem o resumo antes de `\maketitle` ou usam seu próprio comando, então verifique o modelo. Mais sobre o assunto em questão na [lição da página de título](/learn/title-page/).

## Erros comuns

- **Citações no resumo.** Os resumos são exibidos sozinhos, em bancos de dados e serviços de indexação, onde `[12]` aponta para nada. Nomeie o trabalho anterior em palavras, se necessário, e salve `\cite` para o corpo.
- **Alegações vagas.** "Melhora significativamente o desempenho" não diz nada ao leitor. “Reduz o custo de inferência em 40%” ganha o clique. Coloque seu melhor número concreto.
- **Escrever primeiro.** O resumo resume um artigo que existe. Faça um rascunho com antecedência se isso ajudar você a pensar, mas reescreva-o por último, quando souber o que realmente mostrou.
- **Exagerando no orçamento.** Os locais impõem limites, geralmente de 150 a 250 palavras. Toda frase que não é contexto, lacuna, contribuição ou resultado é candidata à exclusão.

## Um autoteste rápido

Cubra tudo, exceto o seu resumo, e entregue-o a um colega. Se eles puderem dizer o que você fez e por que isso é importante, funciona. Se eles disserem "parece interessante, o que você encontrou?", sua frase resultante está faltando ou é vaga. Corrija essa frase e o resumo geralmente se encaixará.