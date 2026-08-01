---

title: "Símbolos griegos y cotidianos."
description: "alfa a través de Omega, además de los operadores y relaciones que escribe diariamente."
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

# Símbolos griegos y cotidianos.

La mayoría de los símbolos que escribes día a día son letras griegas además de un puñado de operadores y relaciones. Todos funcionan de la misma manera: una barra invertida más el nombre del símbolo, sólo que en modo matemático. Esta página es el set diario. La [hoja de referencia de símbolos matemáticos](/learn/math-symbols-cheatsheet/) es la referencia más completa.

## Griego (modo matemático)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Un comando en minúscula proporciona la letra minúscula: `\alpha`, `\beta`, `\gamma`. Utilice mayúscula para la primera letra del comando: `\Gamma`, `\Delta`, `\Omega`. No todas las mayúsculas existen como comando, porque algunas mayúsculas griegas son idénticas a las letras latinas. El alfa mayúscula es solo A, por lo que no existe `\Alpha`. Lo mismo ocurre con beta, épsilon y varios otros. En su lugar, escriba la letra latina.

Algunas letras tienen formas variantes con un prefijo "var". `\epsilon` es la forma semilunar y `\varepsilon` la rizada. `\theta` y `\vartheta`, `\phi` y `\varphi`, `\rho` y `\varrho` difieren de la misma manera. Ninguna forma es más correcta. Elija el que prefiera su campo y utilícelo de manera consistente a lo largo del documento.

Todos estos son comandos en modo matemático, por lo que una letra griega en el texto en ejecución se escribe `$\alpha$`. Un simple `\alpha` en el texto detiene la compilación con el error cubierto en [Falta dólar insertado](/learn/missing-dollar/).

## Operadores y relaciones diarias

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

La primera línea es aritmética y comparación: `\pm` para más-menos, `\cdot` para un punto de multiplicación, `\times` para una cruz, `\div` para división, luego `\leq`, `\geq` y `\neq` para las comparaciones, `\approx` para igualdad aproximada y `\equiv` para identidad o congruencia. La segunda línea es el lenguaje del conjunto: `\in` para membresía, `\subset` y `\subseteq` para contención, `\cup` y `\cap` para unión e intersección, y `\emptyset` para el conjunto vacío. El tercero cubre flechas y análisis: `\to` para una flecha simple en límites y tipos de funciones, `\mapsto` para dónde va un elemento, `\Rightarrow` para implicaciones, `\infty` para infinito, y `\partial` y `\nabla` para derivadas parciales y gradientes, que reciben un tratamiento completo en [derivadas e integrales](/learn/derivatives-integrals/).

El espaciado entre todos estos es automático. LaTeX sabe que `\leq` es una relación y `\cup` es una operación binaria, y espacia cada uno en consecuencia, lo cual es una buena razón para usar los comandos en lugar de pegar símbolos Unicode. Los nombres se asimilan más rápidamente al escribir algunas fórmulas en el [área de juegos en vivo](/live/) y observarlas renderizarse.