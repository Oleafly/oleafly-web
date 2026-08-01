---

title: "Составные соотношения, которые остаются читабельными"
description: "frac, dfrac, tfrac и цепные дроби с amsmath."
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

# Соотношения, которые остаются читабельными

Дроби — это первое, в чем вывод LaTeX заметно превосходит текстовый процессор: настоящие сложенные числитель и знаменатель с правилом между ними, размер которого соответствует окружающей математике. Основная команда — `\frac`. Важно то, как его размер меняется в зависимости от контекста и как это изменить, если автоматический выбор ухудшает читаемость.

## гидроразрыв, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` принимает два аргумента в фигурных скобках: сначала числитель, затем знаменатель, и печатает их по горизонтальной линейке. Его размер зависит от контекста. В математических вычислениях отображения (внутри `\[ ... \]` или среды `equation`) дробь устанавливается в полный размер. Во встроенных математических функциях (внутри `$ ... $`) он устанавливается меньше и компактнее, поэтому строки абзаца не разделяются.

Иногда вам хочется это переопределить. `\dfrac`, от `amsmath`, устанавливает стиль отображения: полноразмерную сложенную дробь даже в середине предложения. Используйте его с осторожностью, поскольку длинная дробь в строке увеличивает межстрочный интервал вокруг нее. `\tfrac` является противоположностью: он заставляет использовать маленький стиль текста даже в математических вычислениях, что удобно для простых коэффициентов, таких как половина перед большим выражением, где полноразмерный стек привлек бы слишком много внимания.

Оба аргумента могут содержать произвольные математические значения, включая другие дроби: гнезда `\frac{1}{1 + \frac{1}{x}}`, и LaTeX автоматически сжимает внутреннюю дробь. Однако когда вложение становится более глубоким, есть лучший инструмент.

## Цепные дроби

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

Вложенные `\frac` сжимаются на каждом уровне, поэтому на третьем этаже непрерывной дроби цифры становятся едва различимыми. `\cfrac`, также из `amsmath`, сохраняет каждый уровень в полном размере дисплея и выравнивает числители, что является общепринятым способом набора непрерывных дробей. Вы можете передать необязательную позицию `\cfrac[l]{1}{...}`, чтобы сдвинуть числитель влево, а не центрировать его.

## Практическое суждение

Все `\dfrac`, `\tfrac` и `\cfrac` требуют `\usepackage{amsmath}` в преамбуле; простой `\frac` работает и без него. Если вы получаете «Неопределенную последовательность управления» в `\dfrac`, строка пакета отсутствует.

Для встроенного текста иногда форма с косой чертой более читабельна, чем сложенная дробь: написание `(a/b)` или `a/b` сохраняет высоту строки одинаковой и хорошо читается для простых соотношений. Хорошее эмпирическое правило — располагать дроби в математических вычислениях, где есть вертикальное пространство, и предпочитать встроенную косую черту, если только дробь не является точкой предложения. Введите абзац обоими способами в [живую площадку](/live/) и сравните; разница в межстрочном интервале видна сразу. Если математические разделители, такие как `$` и `\[`, вам еще незнакомы, начните с [основы математического режима](/learn/math-mode/).