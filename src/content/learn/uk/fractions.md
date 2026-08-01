---

title: "Складені коефіцієнти, які залишаються читабельними"
description: "frac, dfrac, tfrac і неперервні дроби з amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Складені коефіцієнти, які залишаються читабельними

Дроби є першим місцем, у якому вихідні дані LaTeX помітно перевершують текстовий процесор: реальні складені чисельник і знаменник із правилом між ними, розмір якого відповідає навколишній математиці. Основною командою є `\frac`. Важливо те, як його розмір змінюється з контекстом, і як перевизначити це, коли автоматичний вибір шкодить читабельності.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` приймає два аргументи в дужках, першим чисельник, другий знаменник, і набирає їх на горизонтальній лінійці. Його розмір залежить від контексту. У математиці відображення (всередині `\[ ... \]` або середовища `рівняння`) частка встановлюється повного розміру. У вбудованій математиці (всередині `$ ... $`) він встановлюється меншим і компактнішим, тому рядки абзацу не розходяться.

Іноді ви хочете перевизначити це. `\dfrac`, від `amsmath`, форсує стиль відображення: повнорозмірний складений дріб навіть у середині речення. Використовуйте його економно, тому що високий фрагмент у рядку розтягує міжрядковий інтервал навколо нього. `\tfrac` є протилежним: він форсує дрібний стиль тексту навіть у математиці відображення, що зручно для простих коефіцієнтів, як одна половина перед великим виразом, де повнорозмірний стек приверне надто багато уваги.

Обидва аргументи можуть містити довільну математику, включно з іншими дробами: `\frac{1}{1 + \frac{1}{x}}` складається, а LaTeX автоматично скорочує внутрішній дріб. Однак коли гніздування стає глибоким, є кращий інструмент.

## Безперервні дроби

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Вкладені `\frac`s зменшуються на кожному рівні, тому на третьому поверсі неперервного дробу цифри ледве розбірливі. `\cfrac`, також від `amsmath`, зберігає кожен рівень у повному розмірі дисплея та вирівнює чисельники, що є загальноприйнятим способом набору ланцюгових дробів. Ви можете передати необов’язкову позицію, `\cfrac[l]{1}{...}`, щоб пересунути чисельник ліворуч, а не центрувати його.

## Практичне судження

Усі `\dfrac`, `\tfrac` і `\cfrac` вимагають `\usepackage{amsmath}` у преамбулі; простий `\frac` працює без нього. Якщо ви отримуєте «Невизначену керуючу послідовність» у `\dfrac`, рядок пакета відсутній.

Для вбудованого тексту інколи форму з похилою рискою просто легше читати, ніж складену дробу: написання `(a/b)` або `a/b` зберігає рівну висоту рядка та добре читається для простих пропорцій. Гарне емпіричне правило полягає в тому, щоб складати дроби в стопку в математиці відображення, де є вертикальний простір, і віддавати перевагу косій рискі в рядку, якщо дріб не є крапкою речення. Введіть абзац в обох напрямках на [живому майданчику](/live/) і порівняйте; різниця міжрядкового інтервалу помітна одразу. Якщо математичні розділювачі, такі як `$` і `\[`, все ще незнайомі, почніть з [основ математичних режимів](/learn/math-mode/).