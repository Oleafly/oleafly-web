---

title: "Греческие и бытовые символы"
description: "от альфа до Omega, а также операторы и отношения, которые вы вводите ежедневно."
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

# Греческие и бытовые символы

Большинство символов, которые вы вводите изо дня в день, представляют собой греческие буквы плюс несколько операторов и отношений. Все они работают одинаково: обратная косая черта плюс имя символа, только в математическом режиме. Эта страница представляет собой ежедневный набор. [Шпаргалка по математическим символам](/learn/math-symbols-cheatsheet/) является более полным справочником.

## Греческий (математический режим)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Команда в нижнем регистре дает строчную букву: `\alpha`, `\beta`, `\gamma`. Напишите первую букву команды заглавной: `\Gamma`, `\Delta`, `\Omega`. Не каждая заглавная буква существует как команда, поскольку некоторые греческие заглавные буквы идентичны латинским буквам. Заглавная альфа — это просто A, поэтому `\Alpha` не существует. То же самое касается бета, эпсилона и некоторых других. Вместо этого введите латинскую букву.

Некоторые буквы имеют варианты формы с префиксом «var». `\epsilon` — полулунная форма, а `\varepsilon` — фигурная. `\theta` и `\vartheta`, `\phi` и `\varphi`, `\rho` и `\varrho` различаются одинаково. Ни одна из форм не является более правильной. Выберите тот, который предпочитает ваша сфера деятельности, и последовательно используйте его в документе.

Все это команды математического режима, поэтому греческая буква в бегущем тексте записывается `$\alpha$`. Пустой `\alpha` в тексте останавливает компиляцию с ошибкой, описанной в [Вставлен недостающий доллар](/learn/missing-dollar/).

## Ежедневные операторы и отношения

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

Первая строка — арифметика и сравнение: `\pm` для плюс-минус, `\cdot` для точки умножения, `\times` для креста, `\div` для деления, затем `\leq`, `\geq` и `\neq` для сравнений, `\approx` для приблизительного равенства и `\equiv` для тождества или сравнения. Вторая строка устанавливает язык: `\in` для членства, `\subset` и `\subseteq` для включения, `\cup` и `\cap` для объединения и пересечения и `\emptyset` для пустого набора. Третий охватывает стрелки и анализ: `\to` для простой стрелки в пределах и типах функций, `\mapsto` для обозначения направления элемента, `\Rightarrow` для импликации, `\infty` для бесконечности, а также `\partial` и `\nabla` для частных производных и градиентов, которые полностью рассматриваются в [производных и интегралах](/learn/derivatives-integrals/).

Расстояние вокруг всех этих элементов устанавливается автоматически. LaTeX знает, что `\leq` — это отношение, а `\cup` — это бинарная операция, и каждая из них размещается соответственно, что является веской причиной для использования команд, а не вставки символов Юникода. Имена усваиваются быстрее всего, если ввести несколько формул на [живой игровой площадке](/live/) и посмотреть, как они отображаются.