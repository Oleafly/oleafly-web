---

title: "Командування чи оточення?"
description: "Макроси приймають аргументи; середовища обертання регіонів."
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

# Команда чи середовище?

Усе, що ви вводите в LaTeX, крім простого тексту, приймає одну з двох форм: команду або середовище. Різниця звучить академічно, поки ви не натрапите на перше повідомлення про помилку. Половина скарг LaTeX стосуються того, що один використовується там, де належить іншому. Якщо навчитися бачити, на яку форму ви дивитесь, документація та помилки будуть читабельними.

## Команди

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Команда — це зворотна коса риска, за якою слідує ім’я, і вона виконує заміну в тому місці, де вона з’являється. `\textbf{аргумент}` приймає один аргумент у дужках і набирає його жирним шрифтом; ефект починається і закінчується брекетами. Команди можуть приймати кілька аргументів у квадратних дужках, і багато хто також приймає необов’язковий аргумент у квадратних дужках перед ними, як у `\documentclass[11pt]{article}`.

Перші два рядки показують, що команди – це те, що ви можете створювати. `\newcommand{\foo}{bar}` визначає нову команду під назвою `\foo`, розширення якої є текстом `bar`, і відтоді введення `\foo` будь-де створює `bar`. Це механізм, що стоїть за [настроюваними макросами](/learn/custom-commands/), і це також те, як працюють пакунки: пакунок — це здебільшого файл визначень команд.

Про одну примху, про яку варто знати заздалегідь: така команда, як `\LaTeX`, поглинає пробіл після неї, тому `\LaTeX is fun` друкує слова разом. Напишіть `\LaTeX{} це весело` або `\LaTeX\ це`, щоб зберегти простір.

## Середовища

```latex
\begin{center}
 Centered block
\end{center}
```

Середовище обертає область документа між відповідними парами `\begin{...}` і `\end{...}` і застосовує свою поведінку до всього всередині. Тут середовище «центр» центрує кожен рядок блоку. Середовища можуть бути вкладеними, за умови, що вони закриваються у порядку, зворотному їх відкриттю, і вони також можуть приймати аргументи: `\begin{tabular}{ll}` відкриває таблицю та передає їй специфікацію стовпця.

Оскільки середовище має збалансуватись, воно зазнає невдачі в особливий спосіб. Така помилка, як `\begin{itemize} закінчується \end{document}`, означає, що середовище було відкрито і ніколи не закрито. Знайдіть відсутній `\end`; не дивіться на рядок імен помилок.

## Емпіричне правило

Якщо він охоплює область із чітким початком і кінцем, це, ймовірно, середовище. Якщо це невелика заміна або перемикач, це команда. Ці дві форми навіть перетинаються: кожне середовище `foo` реалізовано як пара команд `\foo` і `\endfoo` під капотом. Щоб ознайомитися з командами та середовищами, з якими ви найчастіше зустрічаєтеся, перегляньте [пояснення кожної команди](/learn/every-command-explained/) або спробуйте обидві фігури на [живому майданчику](/live/).