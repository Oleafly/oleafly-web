---

title: "Скелет, который можно использовать повторно"
description: "Рубрика, преамбула, заголовок, разделы, библиография: форма почти каждой статьи."
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

# Скелет, который можно использовать повторно

Удалите содержимое, и почти каждый документ LaTeX будет иметь один и тот же скелет: объявление класса, преамбулу настройки и тело между `\begin{document}` и `\end{document}`. Как только вы узнаете эту форму, начните новый проект, вставив скелет, изменив заголовок и написав.

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

Чтение сверху вниз: `\documentclass[11pt]{article}` выбирает тип документа и устанавливает базовый размер шрифта в качестве опции. Все остальное в дизайне вытекает из этого выбора. Область между строкой класса и `\begin{document}` — это [преамбула](/learn/preamble-explained/), где загружаются пакеты и хранятся метаданные, такие как `\title` и `\author`. `\begin{document}` отмечает начало видимого содержимого, `\maketitle` печатает сохраненную основную надпись, а тело следует за разделами, рисунками и, в конечном итоге, библиографией. `\end{document}` закрывает документ. Все, что происходит после этого, игнорируется, что иногда скрывает кусок текста, который кто-то вставил не в то место.

## Выбор класса

| Класс | Использование |
| --- | --- |
| `статья` | Документы, домашние задания, конспекты |
| `отчет` | Более длинные отчеты с главами |
| `книга` | Книги и многие диссертации |
| `бимер` | Слайды |

Урок не косметический; он меняет существующие команды. `article` не имеет `\chapter`, поэтому вставка в него глав диссертации невозможна сразу. `report` добавляет главы и выделяет заголовку отдельную страницу. `книга` предполагает двустороннюю печать и открывает главы на правых страницах. `beamer` реструктурирует все вокруг рамок для слайдов. Журналы и конференции предоставляют свои собственные курсы, и когда вы пишете для места проведения, его класс полностью заменяет это решение.

Две ошибки являются причиной большинства сломанных скелетов. Текст, помещенный перед `\begin{document}`, вызывает ошибку «Отсутствует \begin{document}», поскольку преамбулу можно только настроить, но никогда не распечатать. А отсутствующий `\end{document}` заставляет компилятор ждать в конце файла бесполезного сообщения об окончании ввода. При появлении любого из них проверьте рамку документа, прежде чем заподозрить содержание.

Скелет чешуйчатый. Четырехстраничная заметка держит тело в рамках; диссертация перемещает каждую главу в отдельный файл и извлекает их из корня, как показано в [файлы разделенных глав](/learn/split-chapter-files/). Рамка вокруг них не меняется.