---

title: "Від ключа .bib до цитування в тексті"
description: "Звичайний цикл BibTeX із командами цитування та бібліографії."
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

# Від ключа .bib до цитування в тексті

Цитування джерела в LaTeX включає дві частини: базу даних простого тексту, яка описує кожну роботу один раз, і команду `\cite` у вашому документі, яка вказує на запис за його ключем. LaTeX нумерує цитати, форматує список посилань і підтримує все узгоджено, коли ви змінюєте порядок розділів або додаєте джерела. Ви ніколи не вводите "[12]" вручну і ніколи нічого не перенумеровуєте самостійно.

## Команди в документі

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` вставляє маркер у тексті всюди, куди належить цитата. Дві команди внизу виконують решту: `\bibliographystyle{plain}` вибирає спосіб форматування цитат і посилань, а `\bibliography{refs}` називає файл бази даних (без його розширення `.bib`) і позначає, де має бути надрукований список посилань, зазвичай безпосередньо перед `\end{document}`. У списку відображаються лише джерела, які ви фактично цитуєте.

## Запис у базі даних

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Він знаходиться в `refs.bib`, окремому файлі поруч із вашим `main.tex`. Слово після `@` є типом запису, `knuth84` є ключем цитування, а решта є полями, які стиль використовує для створення відформатованого посилання. Ключ є єдиним зв’язком між двома файлами, тому він має точно відповідати аргументу `\cite`, включаючи великі літери. Ви можете перевірити всю базу даних на наявність відсутніх полів і неправильних записів за допомогою [валідатора BibTeX](/tools/bibtex-validator/).

## Чому однієї компіляції недостатньо

Бібліографія будується окремою програмою. Під час першого проходу LaTeX документ записує список цитованих ключів у допоміжний файл. Потім програма `bibtex` читає цей список, витягує відповідні записи з `refs.bib` і форматує їх. Ще два проходи LaTeX згортають результат і розкривають маркери в тексті. Oleafly виконує цей повний цикл для вас під час кожної компіляції. Якщо ви створюєте вручну та пропускаєте середній крок, цитати відображаються жирним шрифтом; див. [Очищення таємничих цитат](/learn/citation-question-mark/), коли це станеться.

## Куди йти далі

Один файл `.bib` може служити для кожної роботи, яку ви пишете, тому варто створювати його ретельно. [Створення .bib, який триває](/learn/create-bibliography/) охоплює типи записів, обов’язкові поля та ключі, які живуть десятиліття. Якщо місце проведення вимагає іншого вигляду, ви змінюєте один рядок, а не будь-які записи, як пояснюється в розділі [Числовий, рік автора, стилі журналу](/learn/change-citation-style/).