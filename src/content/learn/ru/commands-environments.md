---

title: "Командование или окружение?"
description: "Макросы принимают аргументы; среды обертывают регионы."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Команда или окружение?

Все, что вы вводите в LaTeX, помимо обычного текста, принимает одну из двух форм: команду или среду. Это различие звучит академично, пока вы не наткнетесь на первое сообщение об ошибке. Половина жалоб LaTeX связана с тем, что один используется там, где должен быть другой. Научившись видеть, на какую фигуру вы смотрите, становится читабельной и документация, и ошибки.

## Команды

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Команда представляет собой обратную косую черту, за которой следует имя, и она выполняет замену в том месте, где она появляется. `\textbf{argument}` принимает один аргумент в фигурных скобках и выделяет его жирным шрифтом; эффект начинается и заканчивается фигурными скобками. Команды могут принимать несколько аргументов в фигурных скобках, а многие из них также принимают необязательный аргумент в квадратных скобках перед ними, как в `\documentclass[11pt]{article}`.

Первые две строки показывают, что команды — это то, что вы можете создавать. `\newcommand{\foo}{bar}` определяет новую команду с именем `\foo`, расширением которой является текст `bar`, и с этого момента ввод `\foo` в любом месте производит `bar`. Это механизм, лежащий в основе [пользовательских макросов](/learn/custom-commands/), а также то, как работают пакеты: пакет по сути представляет собой файл определений команд.

Одна особенность, которую стоит знать заранее: команда типа `\LaTeX` поглощает пробел после нее, поэтому `\LaTeX is fun` печатает слова вместе. Напишите `\LaTeX{} is fun` или `\LaTeX\ is`, чтобы сохранить место.

## Окружающая среда

```latex
\begin{center}
 Centered block
\end{center}
```

Среда помещает область документа между соответствующей парой `\begin{...}` и `\end{...}` и применяет ее поведение ко всему внутри. Здесь среда «center» центрирует каждую строку блока. Среды могут быть вложенными, при условии, что они закрываются в порядке, обратном открытию, а также могут принимать аргументы: `\begin{tabular}{ll}` открывает таблицу и передает ей спецификацию столбца.

Поскольку окружающая среда должна быть сбалансирована, она терпит неудачу особым образом. Ошибка типа `\begin{itemize}, завершенная \end{document}` означает, что среда была открыта и никогда не закрывалась. Найдите недостающий `\end`; не смотрите на строку с именами ошибок.

## Эмпирическое правило

Если он охватывает область с четким началом и концом, вероятно, это среда. Если это небольшая замена или переключение, то это команда. Эти две формы даже перекрываются: каждая среда `foo` реализована как пара команд `\foo` и `\endfoo` под капотом. Для ознакомления с командами и средами, которые вы чаще всего встретите, см. [объяснение каждой команды](/learn/every-command-explained/) или попробуйте обе формы на [живой игровой площадке](/live/).