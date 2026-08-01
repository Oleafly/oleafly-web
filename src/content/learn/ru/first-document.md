---

title: "Скомпилируйте свой первый PDF-файл"
description: "Небольшая статья, одна компиляция и три идеи, которые помогут вам получить большую часть работы с LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Скомпилируйте свой первый PDF-файл

Если вы когда-либо писали только в Word или Google Docs, LaTeX попросит вас отказаться от одной привычки. Вместо форматирования текста при вводе вы описываете свой документ в виде обычного текста и позволяете программе набирать его за вас. Этот простой текст хранится в файле `.tex`: обычном текстовом файле, который вы можете открыть в любом редакторе, со своими словами и командами типа `\section{...}`, которые говорят, что *есть* каждый фрагмент. Компиляция превращает этот источник в готовый PDF-файл. Механизм LaTeX читает ваш файл сверху вниз, интерпретирует каждую команду, компонует страницы и записывает PDF-файл. Вы никогда не форматируете вывод напрямую. Вы редактируете исходный код и снова компилируете.

## Самый маленький настоящий документ

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Прочтите сверху вниз. `\documentclass{article}` сообщает движку, что это за документ, который устанавливает разумные значения по умолчанию для шрифтов, полей и стилей заголовков. Строки `\title`, `\author` и `\date` хранят только метаданные; ничего еще не напечатано, а `\today` просто означает дату того дня, когда вы компилируете. `\begin{document}` отмечает, где начинается фактическое содержимое. `\maketitle` — это момент, когда сохраненная основная надпись появляется на странице. `\section{Introduction}` печатает пронумерованный заголовок и незаметно записывает его, чтобы оглавление могло найти его позже. Последние строки показывают два лица математики: `$...$` печатает формулу внутри предложения, а `\[ ​​... \]` выводит ее в центральную строку отображения.

## Три идеи, которые несут в себе язык

1. Команды начинаются с обратной косой черты и обычно принимают аргумент в фигурных скобках, поэтому `\textbf{hello}` означает "набрать привет жирным шрифтом".
2. Окружения оборачивают область между `\begin{...}` и `\end{...}`, а тело вашего файла само по себе является одной большой `документной` средой.
3. Преамбула — это все, что находится до `\begin{document}`; он настраивает документ, но никогда не создает видимый текст.

Почти все остальное в LaTeX является вариацией этих трех.

## Скомпилируйте это

В [Oleafly](/docs/getting-started/) создайте проект, вставьте приведенный выше исходный код и скомпилируйте. PDF-файл отображается рядом с вашим исходным кодом, а SyncTeX связывает две стороны: щелкните место в PDF-файле, чтобы перейти к соответствующей строке исходного кода, или наоборот. Самая первая компиляция проекта может занять немного больше времени, пока движок получит то, что ему нужно; более поздние пробежки проходят быстрее.

Следует ожидать одного: рано или поздно компиляция завершится с сообщением об ошибке и номером строки. Это совершенно нормально и обычно означает опечатку в имени команды или отсутствие закрывающей скобки. Исправьте строку, на которую она указывает, и скомпилируйте снова.

## Следующий

Перейдите к [преамбуле, объяснению](/learn/preamble-explained/), чтобы увидеть, что на самом деле делают строки настройки, затем к [математическому режиму](/learn/math-mode/) для формул. Держите [шпаргалку](/learn/cheatsheet/) открытой, пока пишете свою первую настоящую страницу.