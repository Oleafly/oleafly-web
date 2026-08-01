---

title: "Зберіть свій перший PDF"
description: "Маленька стаття, одна компіляція та три ідеї, які допоможуть вам використовувати LaTeX."
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

# Зберіть свій перший PDF

Якщо ви коли-небудь писали лише у Word або Google Docs, LaTeX просить вас змінити одну звичку. Замість того, щоб форматувати текст під час введення, ви описуєте свій документ простим текстом і дозволяєте програмі набирати його для вас. Цей звичайний текст міститься у файлі `.tex`: звичайний текстовий файл, який можна відкрити в будь-якому редакторі, з вашими словами та командами на зразок `\section{...}`, які повідомляють, що *є* кожен фрагмент. Компіляція перетворює це джерело на готовий PDF-файл. Механізм LaTeX читає ваш файл зверху вниз, інтерпретує кожну команду, розміщує сторінки та записує PDF. Ви ніколи не форматуєте вихід безпосередньо. Ви редагуєте джерело та компілюєте знову.

## Найменший справжній документ

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

Прочитайте зверху вниз. `\documentclass{article}` повідомляє механізму, який це документ, який встановлює розумні значення за замовчуванням для шрифтів, полів і стилів заголовків. Рядки `\title`, `\author` і `\date` зберігають лише метадані; ще нічого не надруковано, а `\today` просто означає дату будь-якого дня, який ви збираєте. `\begin{document}` позначає, де починається фактичний вміст. `\maketitle` – це момент появи збереженого блоку заголовка на сторінці. `\section{Introduction}` друкує пронумерований заголовок і тихо записує його, щоб зміст міг знайти його пізніше. Останні рядки демонструють дві грані математики: `$...$` набирає формулу всередині речення, тоді як `\[ ... \]` дає їй власний центрований рядок.

## Три ідеї, які несуть мову

1. Команди починаються зі зворотної скісної риски та зазвичай приймають аргумент у фігурних дужках, тому `\textbf{hello}` означає «ввести привіт жирним шрифтом».
2. Середовища охоплюють область між `\begin{...}` і `\end{...}`, а тіло вашого файлу само є одним великим середовищем `document`.
3. Преамбула - це все, що передує `\begin{document}`; він налаштовує документ, але ніколи не створює видимий текст.

Майже все інше в LaTeX є варіацією цих трьох.

## Скомпілюйте

У [Oleafly](/docs/getting-started/) створіть проект, вставте джерело вище та скомпілюйте. PDF-файл відображається поруч із джерелом, і SyncTeX пов’язує обидві сторони: клацніть місце у PDF-файлі, щоб перейти до відповідного вихідного рядка, або навпаки. Найперша компіляція проекту може зайняти трохи більше часу, поки движок отримає те, що йому потрібно; пізніші запуски відбуваються швидше.

Слід очікувати одного: рано чи пізно компіляція зазнає помилки з повідомленням про помилку та номером рядка. Це абсолютно нормально і зазвичай означає друкарську помилку в назві команди або відсутність закриваючої дужки. Виправте лінію, на яку він вказує, і скомпілюйте знову.

## Далі

Продовжте [преамбулу, пояснення](/learn/preamble-explained/), щоб побачити, що насправді роблять рядки налаштування, а потім [математичний режим](/learn/math-mode/) для формул. Тримайте [шпаргалку](/learn/cheatsheet/) відкритою, поки пишете свою першу справжню сторінку.