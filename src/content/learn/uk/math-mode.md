---

title: "Математика, яка міститься в реченні (або окремо)"
description: "Вбудована математика, відображувана математика, середовища рівнянь і коли нумерація того варта."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Математика, яка міститься в реченні (або окремо)

LaTeX розглядає математику як окремий режим із власними шрифтами та правилами інтервалів. Кожна змінна, формула та символ повинні жити в математичному режимі, будь то окреме n у реченні чи повне рівняння. Існує два типи: вбудована математика виконується в межах абзацу, а відображувана математика розташовується в центрі окремого рядка, з числом або без нього.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Вбудована математика

Пара знаків долара, як у `$E=mc^2$`, встановлює розмір тексту формули всередині рядка. Букви виділяються математичним курсивом, а інтервали навколо знака рівності обробляються самостійно. `\(E=mc^2\)` є еквівалентною рідною формою LaTeX. Він створює ідентичний вихід, і оскільки його роздільники відкриття та закриття відрізняються, незакритий видає чіткіше повідомлення про помилку. Використовуйте вбудовану математику навіть для однієї назви змінної, щоб n у вашій прозі відповідало n у ваших рівняннях.

## Показати математику

`\[ ... \]` розміщує формулу на власному центрованому рядку без номера. Це правильний вибір для одноразових рівнянь, до яких ви ніколи не повертаєтеся. Уникайте старої форми `$$ ... $$`. Це звичайний TeX, а не LaTeX, і в деяких ситуаціях створює трохи неправильні вертикальні інтервали.

## Пронумеровані рівняння

Середовище «рівняння» відображає формулу з числом на полях. `\label{eq:energy}` додає назву до цього числа, а в іншому місці ви пишете `Equation~\ref{eq:energy}` або, із завантаженим `amsmath`, `\eqref{eq:energy}`, що додає самі дужки. `~` — це нерозривний пробіл, тому слово та число залишаються в одному рядку. Посилання вирішуються під час другої компіляції. Якщо ви бачите `??` у виведених даних, перегляньте [знаки питання замість чисел](/learn/equations-show-qq/).

## Пакунки для завантаження

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Майже кожен математичний документ містить ці три. `amsmath` надає середовища та команди, які передбачає більшість цих уроків, включаючи `align` і `\eqref`. `amssymb` і `amsfonts` додають символьні шрифти та додаткові алфавіти, такі як `\mathbb`. Вставте рядок у преамбулу один раз і забудьте про це.

Класична помилка для початківців полягає в математичному синтаксисі поза математичним режимом: підкреслення у звичайному тексті зупиняє компіляцію з «Вставленим відсутнім $», що має [власний урок](/learn/missing-dollar/). Щоб відчути два режими, введіть речення з `$x_i$` у рядку та ту саму формулу всередині `\[ ... \]` на [живому майданчику](/live/) і порівняйте, як кожен з них розміщений на сторінці.