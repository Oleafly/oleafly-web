---

title: "Усе вище починається{document}"
description: "Пакети, метадані та порядок завантаження: що належить до преамбули, а що ні."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Усе вище починається{document}

Усе між `\documentclass{...}` і `\begin{document}` є **преамбулою**. Він не створює видимого тексту. Він налаштовує запуск. Шрифти, поля, пакети, користувальницькі команди та метадані документів – усе це міститься тут, тому преамбула зрілої статті часто довша за вступ. Коли ви дізнаєтеся, що робить кожен рядок, скопійований шаблон перестає бути магією і стає контрольним списком.

## Анатомія

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Параметри `\documentclass` встановлюють глобальні значення за замовчуванням: `11pt` — це базовий розмір шрифту, від якого масштабується все інше, а `a4paper` оголошує розмір паперу. Два рядки кодування є історичними супутниками: `inputenc` повідомляє механізму, що ваш вихідний файл має кодування UTF-8, а `fontenc` вибирає кодування шрифту, щоб символи з акцентами були справжніми гліфами, а не складеними. Поточний LaTeX вже передбачає введення UTF-8, тому ви побачите ці рядки пропущені в нових документах, але вони нешкідливі, і шаблони зберігають їх для сумісності.

Середній блок завантажує пакети можливостей. [geometry](/learn/margins-geometry/) встановлює поля в одній опції, `amsmath` і `amssymb` забезпечують математичні середовища та символи, які потрібні майже кожному технічному документу, `graphicx` дозволяє `\includegraphics` для фігур, а `booktabs` забезпечує правила, які роблять таблиці професійними. Нарешті, [hyperref](/learn/hyperlinks/) робить посилання та цитати доступними для натискання та навмисне завантажується останнім, оскільки це перевизначає внутрішні елементи багатьох інших пакунків.

Рядки `\title`, `\author` і `\date` зберігають лише метадані. Ніщо не друкується, доки `\maketitle` не запуститься в тілі, тому вони взагалі можуть міститися у преамбулі.

## Емпіричні правила

Кілька звичок зберігають здоров’я преамбул. Завантажуйте по одному пакету на завдання та протистоять накопиченню пакетів, які борються за ту саму територію, наприклад двома способами встановлення полів. Зберігайте гіперпосилання в кінці з кількома задокументованими винятками, такими як cleveref, які повинні бути після нього. Розмістіть варіанти для всього документа в параметрах класу, а не розпорошуйте їх, щоб `11pt` або `twocolumn` оголошувалися один раз, щоб усі могли їх бачити. А коли ваші [спеціальні макроси](/learn/custom-commands/) переростуть кілька рядків, перемістіть їх у файл `.sty`, щоб кілька документів могли спільно використовувати один набір визначень.

Найкорисніша дисципліна — негативна: якщо ви не знаєте, навіщо там рядок преамбули, з’ясуйте це, перш ніж ваш документ від неї залежить. Скопійовані преамбули накопичують крайні рядки, а мертві рядки є місцем, де ховаються конфлікти пакетів. Дивіться також [скелет документа](/learn/document-skeleton/) і [порівняння двигунів](/learn/engines-compared/).