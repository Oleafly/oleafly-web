---

title: "Вставте фігуру"
description: "graphicx, ширина, шляхи, PDF проти PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Вставте фігуру

LaTeX не має вбудованої підтримки зображень. Усе це походить із пакета `graphicx`, який надає команду `\includegraphics`, і за домовленістю зображення загортається в середовище `figure`, щоб воно могло містити підпис і номер. Ось шаблон, який ви будете використовувати сотні разів:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Що робить кожен рядок

Рядок `\usepackage{graphicx}` міститься у вашій преамбулі перед `\begin{document}` і має з’явитися лише один раз, незалежно від того, скільки зображень ви включили.

Середовище `figure` робить зображення плаваючим, що означає, що LaTeX вибирає, куди воно приземлиться, а не прикріплює його саме до цього місця в тексті. Букви `[htbp]` позначають ваші налаштування розміщення: `h` означає тут, де з’являється код, `t` означає верхню частину сторінки, `b` означає нижню частину сторінки, а `p` означає окрему сторінку з плаваючими елементами. LaTeX пробує їх у такому порядку та бере першу, яка дає пристойну сторінку. Якщо ваша фігура кудись несподівано дрейфує, це нормальна поведінка поплавця, і [куди насправді приземляються поплавці](/learn/position-figures/) пояснюється, як з цим домовитися.

`\centring` центрує зображення горизонтально в межах текстового блоку. `width=0.8\textwidth` масштабує зображення до 80 відсотків ширини тексту, зберігаючи співвідношення сторін, що майже завжди краще, ніж вказувати абсолютний розмір у сантиметрах, оскільки воно адаптується, якщо поля документа змінюються. Шлях до файлу вказано відносно кореня проекту, тому `figures/pipeline.pdf` означає папку `figures` поруч із вашим основним файлом `.tex`. Нарешті, `\caption` друкує пронумерований підпис, а `\label` записує номер, щоб `\ref{fig:pipeline}` міг процитувати його з тексту. Мітка має бути після підпису з причин, описаних у [підписи та мітки](/learn/captions-labels/).

## Який формат файлу використовувати

Віддавайте перевагу PDF будь-якому векторному, тобто графікам, діаграмам і блок-схемам, оскільки векторна графіка залишається чіткою за будь-якого масштабування та будь-якого розміру друку. Використовуйте PNG для скріншотів та інших зображень на основі пікселів. JPG прийнятний для фотографій, де артефакти його стиснення непомітні. Взагалі уникайте вставляти вміст із великою кількістю тексту як знімки екрана, оскільки він розмивається під час друку та його неможливо знайти.

Також змініть розмір великих фотографій, перш ніж їх додавати. 12-мегапіксельна фотографія, що відображається на ширині 8 сантиметрів, роздуває PDF-файл і сповільнює кожну компіляцію, тоді як версія, зменшена приблизно до 300 точок на дюйм у розмірі для друку, виглядає ідентично.

## Помилка, якої слід уникати

Не боріться з поплавком у перший день, вимагаючи лише `[h]`. LaTeX часто відмовляється, а потім переносить фігуру та все, що стоїть за нею, до кінця розділу. Напишіть `[htbp]`, розмістіть код фігури біля абзацу, який першим посилається на неї, і дозвольте цифрам і посиланням виконувати відстеження за вас.