---

title: "Símbolos gregos e cotidianos"
description: "alfa até Omega, além dos operadores e relações que você digita diariamente."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# Símbolos gregos e cotidianos

A maioria dos símbolos que você digita no dia a dia são letras gregas, além de alguns operadores e relações. Todos funcionam da mesma maneira: uma barra invertida mais o nome do símbolo, apenas no modo matemático. Esta página é o conjunto diário. A [folha de truques de símbolos matemáticos](/learn/math-symbols-cheatsheet/) é a referência mais completa.

## Grego (modo matemático)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Um comando minúsculo fornece a letra minúscula: `\alpha`, `\beta`, `\gamma`. Coloque a primeira letra do comando em maiúscula: `\Gamma`, `\Delta`, `\Omega`. Nem toda maiúscula existe como comando, porque algumas maiúsculas gregas são idênticas às letras latinas. Alfa maiúsculo é apenas A, então não há `\Alpha`. O mesmo vale para beta, épsilon e vários outros. Digite a letra latina.

Algumas letras têm formas variantes com um prefixo `var`. `\epsilon` é a forma semilunar e `\varepsilon` a forma encaracolada. `\theta` e `\vartheta`, `\phi` e `\varphi`, `\rho` e `\varrho` diferem da mesma maneira. Nenhuma das formas é mais correta. Escolha aquele que seu campo prefere e use-o de forma consistente em todo o documento.

Todos esses são comandos no modo matemático, então uma letra grega no texto corrido é escrita `$\alpha$`. Um `\alpha` simples no texto interrompe a compilação com o erro coberto em [Dólar ausente inserido](/learn/missing-dollar/).

## Operadores e relações diárias

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

A primeira linha é aritmética e comparação: `\pm` para mais-menos, `\cdot` para um ponto de multiplicação, `\times` para uma cruz, `\div` para divisão, então `\leq`, `\geq` e `\neq` para as comparações, `\approx` para igualdade aproximada e `\equiv` para identidade ou congruência. A segunda linha é o idioma definido: `\in` para associação, `\subset` e `\subseteq` para contenção, `\cup` e `\cap` para união e interseção, e `\emptyset` para o conjunto vazio. O terceiro cobre setas e análise: `\to` para uma seta simples em limites e tipos de função, `\mapsto` para onde um elemento vai, `\Rightarrow` para implicação, `\infty` para infinito, e `\partial` e `\nabla` para derivadas parciais e gradientes, que recebem um tratamento completo em [derivadas e integrais](/learn/derivatives-integrals/).

O espaçamento em torno de tudo isso é automático. O LaTeX sabe que `\leq` é uma relação e `\cup` é uma operação binária, e espaça cada uma de acordo, o que é um bom motivo para usar os comandos em vez de colar símbolos Unicode. Os nomes são absorvidos mais rapidamente digitando algumas fórmulas no [live playground](/live/) e observando-as serem renderizadas.