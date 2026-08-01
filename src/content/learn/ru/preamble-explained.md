---

title: "Все, что указано выше, start{document}"
description: "Пакеты, метаданные и порядок загрузки: что должно быть в преамбуле, а что нет."
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

# Все, что указано выше, start{document}

Все, что находится между `\documentclass{...}` и `\begin{document}`, является **преамбулой**. Он не создает видимого текста. Он настраивает прогон. Шрифты, поля, пакеты, пользовательские команды и метаданные документа — все находится здесь, поэтому преамбула зрелой статьи часто длиннее, чем ее введение. Как только вы узнаете, что делает каждая строка, скопированный шаблон перестанет быть волшебством и превратится в контрольный список.

## Анатомия

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

Параметры в `\documentclass` устанавливают глобальные значения по умолчанию: `11pt` — это базовый размер шрифта, от которого масштабируется все остальное, а `a4paper` объявляет размер бумаги. Две строки кодировки являются историческими компаньонами: `inputenc` сообщает движку, что ваш исходный файл имеет формат UTF-8, а `fontenc` выбирает кодировку шрифта, поэтому символы с диакритическими знаками являются настоящими глифами, а не составными. Текущий LaTeX уже предполагает ввод UTF-8, поэтому вы увидите, что эти строки опущены в новых документах, но они безвредны, и шаблоны сохраняют их для совместимости.

Средний блок загружает пакеты возможностей. [geometry](/learn/margins-geometry/) устанавливает поля в одном варианте, `amsmath` и `amssymb` предоставляют математические среды и символы, необходимые практически для каждого технического документа, `graphicx` включает `\includegraphics` для рисунков, а `booktabs` предоставляет правила, благодаря которым таблицы выглядят профессионально. Наконец, [hyperref](/learn/hyperlinks/) делает ссылки и цитаты кликабельными и намеренно загружается последним, поскольку переопределяет внутреннее устройство многих других пакетов.

Строки `\title`, `\author` и `\date` хранят только метаданные. Ничего не печатается, пока `\maketitle` не запустится в теле, поэтому они вообще могут находиться в преамбуле.

## Практические правила

Несколько привычек сохраняют преамбулы здоровыми. Загружайте один пакет для каждого задания и не допускайте накопления пакетов, которые борются за одну и ту же территорию, например, с помощью двух способов установки полей. Оставьте гиперссылку в конце, а после нее должно идти несколько задокументированных исключений, таких как умный еф. Поместите варианты выбора для всего документа в параметры класса, а не разбрасывайте их, чтобы «11pt» или «twocolumn» объявлялись один раз, чтобы каждый мог их увидеть. И как только ваши [пользовательские макросы](/learn/custom-commands/) перерастут несколько строк, переместите их в файл `.sty`, чтобы несколько документов могли использовать один набор определений.

Самая полезная дисциплина — негативная: если вы не знаете, зачем нужна строка преамбулы, выясните это до того, как от нее зависит ваш документ. В скопированных преамбулах накапливаются дедлайны, а в дедлайнах скрываются конфликты пакетов. См. также [скелет документа](/learn/document-skeleton/) и [сравнение двигателей](/learn/engines-compared/).