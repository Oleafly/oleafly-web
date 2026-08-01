---

title: "Математика, которая находится в предложении (или отдельно)"
description: "Встроенная математика, отображение математических вычислений, среда уравнений и когда нумерация того стоит."
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

# Математика, которая находится в предложении (или отдельно)

LaTeX рассматривает математику как отдельный режим со своими собственными шрифтами и правилами пробелов. Каждая переменная, формула и символ должны существовать в математическом режиме, будь то единственная буква n в предложении или полное уравнение. Существует два типа: встроенные математические выражения внутри абзаца и отображаемые математические выражения, расположенные по центру отдельной строки, с числом или без него.

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

## Встроенная математика

Пара знаков доллара, например, `$E=mc^2$`, устанавливает формулу в размер текста внутри строки. Буквы выделяются курсивом, а расстояние вокруг знака равенства обрабатывается автоматически. `\(E=mc^2\)` является эквивалентной собственной формой LaTeX. Он выдает идентичный вывод, а поскольку открывающий и закрывающий разделители различаются, незакрытый выдает более четкое сообщение об ошибке. Используйте встроенные математические вычисления даже для одного имени переменной, чтобы n в вашем тексте соответствовало n в ваших уравнениях.

## Отображение математических вычислений

`\[ ... \]` помещает формулу в отдельную центральную строку без номера. Это правильный выбор для одноразовых уравнений, к которым вы никогда не вернетесь. Избегайте старой формы `$$ ... $$`. Это простой TeX, а не LaTeX, и в некоторых ситуациях он создает немного неправильный вертикальный интервал.

## Нумерованные уравнения

В среде «уравнение» формула отображается с числом на полях. `\label{eq:energy}` присоединяет имя к этому числу, а в другом месте вы пишете `Equation~\ref{eq:energy}` или, при загруженном `amsmath`, `\eqref{eq:energy}`, что добавляет сами круглые скобки. `~` — неразрывный пробел, поэтому слово и число остаются на одной строке. Ссылки разрешаются при второй компиляции. Если вы видите `??` в выводе, см. [знаки вопроса вместо чисел](/learn/equations-show-qq/).

## Пакеты для загрузки

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Почти каждый математический документ содержит эти три параметра. `amsmath` предоставляет среды и команды, используемые в большинстве этих уроков, включая `align` и `\eqref`. `amssymb` и `amsfonts` добавляют шрифты символов и дополнительные алфавиты, такие как `\mathbb`. Вставьте строчку в преамбулу один раз и забудьте о ней.

Классическая ошибка новичка — это математический синтаксис вне математического режима: подчеркивание в обычном тексте останавливает компиляцию со вставленным сообщением «Отсутствует $», у которого есть [свой собственный урок](/learn/missing-dollar/). Чтобы почувствовать эти два режима, введите предложение со встроенным `$x_i$` и той же формулой внутри `\[ ... \]` в [живая игровая площадка](/live/) и сравните, как каждый из них располагается на странице.