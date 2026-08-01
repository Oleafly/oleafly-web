---

title: "Скелет, який можна використовувати повторно"
description: "Клас, преамбула, заголовок, розділи, бібліографія: форма майже кожної статті."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Скелет, який можна використовувати повторно

Якщо видалити вміст, майже кожен документ LaTeX матиме той самий скелет: оголошення класу, преамбула налаштування та тіло між `\begin{document}` і `\end{document}`. Коли ви дізнаєтесь про цю форму, почніть новий проект, вставивши скелет, змінивши назву та написавши.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Читання зверху вниз: `\documentclass[11pt]{article}` вибирає тип документа та встановлює основний розмір шрифту як параметр. Все інше в дизайні випливає з цього вибору. Область між рядком класу та `\begin{document}` — це [преамбула](/learn/preamble-explained/), де завантажуються пакунки та зберігаються такі метадані, як `\title` та `\author`. `\begin{document}` позначає, де починається видимий вміст, `\maketitle` набирає збережений блок заголовка, а тіло слідує як розділи, малюнки та, зрештою, бібліографія. `\end{document}` закриває документ. Усе, що йде після нього, мовчки ігнорується, що час від часу приховує фрагмент тексту, який хтось вставив не в те місце.

## Вибір класу

| Клас | Використовуйте |
| --- | --- |
| `стаття` | Реферати, домашні завдання, конспекти |
| `звіт` | Довші звіти з розділами |
| `книга` | Книги та багато дисертацій |
| `промінь` | Слайди |

Заняття не є косметичним; це змінює існуючі команди. `article` не має `\chapter`, тому вставити в нього розділи тез відразу не вдається. `report` додає розділи та надає заголовку окрему сторінку. `книга` передбачає двосторонній друк і відкриває розділи на правій сторінці. `beamer` реструктурує все навколо кадрів для слайдів. Журнали та конференції видають власні класи, і коли ви пишете про місце проведення, його клас повністю замінює це рішення.

Дві помилки пояснюють більшість зламаних скелетів. Текст, розміщений перед `\begin{document}`, викликає помилку "Відсутній \begin{document}", оскільки преамбула може лише налаштовувати, а не друкувати. А відсутній `\end{document}` залишає компілятор чекати в кінці файлу з марним повідомленням про кінець введення. Коли з’являється будь-яке з них, перевірте рамку документа, перш ніж запідозрити вміст.

Скелет лускає. Чотирьохсторінкова нотатка зберігає тіло всередині; дисертація переміщує кожну главу в окремий файл і витягує їх із кореня, як показано в [файли розділених глав](/learn/split-chapter-files/). Рамка навколо них не змінюється.