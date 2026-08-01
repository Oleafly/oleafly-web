---

title: "Грецька та побутова символіка"
description: "від альфа до Омеги, а також оператори та відносини, які ви вводите щодня."
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

# Грецькі та побутові символи

Більшість символів, які ви вводите щодня, — це грецькі літери плюс декілька операторів і зв’язків. Усі вони працюють однаково: зворотна коса риска плюс ім’я символу, тільки в математичному режимі. Ця сторінка щоденного набору. [Шпаргалка з математичними символами](/learn/math-symbols-cheatsheet/) є більш повною довідкою.

## Грецька (математичний режим)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Команда нижнього регістру дає малу літеру: `\alpha`, `\beta`, `\gamma`. Зробіть першу літеру команди великою: `\Gamma`, `\Delta`, `\Omega`. Не кожна велика літера існує як команда, оскільки деякі грецькі великі літери ідентичні латинським літерам. Велика альфа – це просто А, тому немає `\Альфа`. Те саме стосується beta, epsilon та деяких інших. Натомість введіть латинську літеру.

Кілька літер мають варіантні форми з префіксом `var`. `\epsilon` — це півмісячна форма, а `\varepsilon` — фігурна. `\theta` і `\vartheta`, `\phi` і `\varphi`, `\rho` і `\varrho` відрізняються однаково. Жодна форма не є більш правильною. Виберіть той, який подобається вашій галузі, і постійно використовуйте його в документі.

Усі ці команди є математичними, тому грецька літера в поточному тексті пишеться як `$\alpha$`. Голий `\alpha` у тексті зупиняє компіляцію з помилкою, описаною в [Missing dollar inserted](/learn/missing-dollar/).

## Щоденні оператори та відносини

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

Перший рядок — це арифметика та порівняння: `\pm` для плюс-мінус, `\cdot` для точки множення, `\times` для хрестика, `\div` для ділення, потім `\leq`, `\geq` та `\neq` для порівнянь, `\approx` для приблизної рівності та `\equiv` для тотожності або конгруентність. У другому рядку вказано мову встановлення: `\in` для членства, `\subset` і `\subseteq` для вмісту, `\cup` і `\cap` для об'єднання та перетину та `\emptyset` для порожнього набору. Третій стосується стрілок і аналізу: `\to` для звичайної стрілки в межах і типах функцій, `\mapsto` для того, куди йде елемент, `\Rightarrow` для імплікації, `\infty` для нескінченності та `\partial` і `\nabla` для часткових похідних і градієнтів, які отримують повну обробку в [похідних і інтеграли](/learn/derivatives-integrals/).

Відстань навколо всіх цих елементів автоматично. LaTeX знає, що `\leq` — це відношення, а `\cup` — це бінарна операція, і він розділяє кожну операцію відповідно, що є вагомою причиною використовувати команди, а не вставляти символи Unicode. Імена найшвидше засвоюються, якщо ввести кілька формул на [живому майданчику](/live/) і спостерігати за їх відтворенням.