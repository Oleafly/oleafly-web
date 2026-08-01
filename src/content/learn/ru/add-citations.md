---

title: "От ключа .bib к внутритекстовой цитате"
description: "Обычный цикл BibTeX с командами cite и библиографии."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# От ключа .bib до внутритекстовой цитаты

Цитирование источника в LaTeX включает в себя две части: текстовую базу данных, которая описывает каждую работу один раз, и команду `\cite` в вашем документе, которая указывает на запись по ее ключу. LaTeX нумерует цитаты, форматирует список литературы и сохраняет единообразие при изменении порядка разделов или добавлении источников. Вы никогда не вводите «[12]» вручную и никогда ничего не перенумеровываете самостоятельно.

## Команды в документе

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` вставляет внутритекстовый маркер туда, где находится цитата. Две команды внизу делают все остальное: `\bibliographystyle{plain}` выбирает способ форматирования цитат и ссылок, а `\bibliography{refs}` называет файл базы данных (без расширения `.bib`) и отмечает, где должен быть напечатан список ссылок, обычно непосредственно перед `\end{document}`. В списке отображаются только те источники, на которые вы действительно цитируете.

## Запись в базе данных

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Он находится в `refs.bib`, отдельном файле рядом с вашим `main.tex`. Слово после `@` — это тип записи, `knuth84` — это ключ цитирования, а остальные — это поля, которые стиль использует для создания форматированной ссылки. Ключ — единственная связь между двумя файлами, поэтому он должен точно соответствовать аргументу `\cite`, включая заглавные буквы. Вы можете проверить всю базу данных на наличие отсутствующих полей и неправильных записей с помощью [валидатора BibTeX](/tools/bibtex-validator/).

## Почему одной компиляции недостаточно

Библиография строится отдельной программой. При первом проходе LaTeX документ записывает список цитируемых ключей во вспомогательный файл. Затем программа bibtex читает этот список, извлекает соответствующие записи из refs.bib и форматирует их. Еще два прохода LaTeX складывают результат обратно и разрешают внутритекстовые маркеры. Oleafly выполняет этот полный цикл для вас при каждой компиляции. Если вы создаете вручную и пропускаете средний шаг, цитаты отображаются в виде жирных вопросительных знаков; см. [Очистка загадочных знаков цитирования](/learn/citation-question-mark/), когда это произойдет.

## Куда идти дальше

Один файл `.bib` может служить для каждой написанной вами статьи, поэтому стоит тщательно его создавать. [Создайте долговечный .bib](/learn/create-bibliography/) охватывает типы записей, обязательные поля и ключи, которые прослужат десятилетие. Если заведение хочет изменить внешний вид, вы меняете одну строку, а не какие-либо записи, как описано в [Числовой стиль, год автора, журнальный стиль](/learn/change-citation-style/).