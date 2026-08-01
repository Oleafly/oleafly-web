---

title: "Вставьте фигуру"
description: "GraphicX, ширина, пути, PDF или PNG."
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

# Вставляем фигуру

LaTeX не имеет встроенной поддержки изображений. Все это происходит из пакета `graphicx`, который предоставляет команду `\includegraphics`, и по соглашению изображение заключено в среду `figure`, чтобы оно могло содержать заголовок и номер. Этот шаблон вы будете использовать сотни раз:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Что делает каждая строка

Строка `\usepackage{graphicx}` идет в преамбуле перед `\begin{document}` и должна появиться только один раз, независимо от того, сколько изображений вы включаете.

Среда «figure» делает изображение плавающим, что означает, что LaTeX выбирает, где оно приземлится, а не привязывает его именно к этому месту в тексте. Буквы `[htbp]` обозначают ваши предпочтения по размещению: `h` означает место, где появляется код, `t` означает верхнюю часть страницы, `b` означает нижнюю часть страницы, а `p` означает отдельную страницу с плавающей запятой. LaTeX пробует их в этом порядке и выбирает первый, который создает достойную страницу. Если ваша фигура неожиданно дрейфует куда-то, это нормальное поведение поплавка, и [где на самом деле приземляются поплавки](/learn/position-figures/) объясняет, как с этим справиться.

`\centering` центрирует изображение по горизонтали внутри текстового блока. `width=0,8\textwidth` масштабирует изображение до 80 процентов ширины текста, сохраняя при этом его соотношение сторон, что почти всегда лучше, чем указание абсолютного размера в сантиметрах, поскольку оно адаптируется при изменении полей документа. Путь к файлу указывается относительно корня проекта, поэтому «figures/pipeline.pdf» означает папку «figures» рядом с вашим основным файлом «.tex». Наконец, `\caption` печатает пронумерованную подпись, а `\label` записывает номер, чтобы `\ref{fig:pipeline}` мог цитировать его из текста. Метка должна идти после подписи по причинам, описанным в [captions and labels](/learn/captions-labels/).

## Какой формат файла использовать

Предпочитайте PDF для любого векторного изображения, то есть для графиков, диаграмм и блок-схем, поскольку векторная графика остается четкой при любом масштабе и любом размере печати. Используйте PNG для снимков экрана и других пиксельных изображений. JPG приемлем для фотографий, где артефакты сжатия незаметны. Ни в коем случае не встраивайте насыщенный текстом контент в виде снимков экрана, так как при печати он размывается и его невозможно найти.

Также измените размер больших фотографий, прежде чем включать их. 12-мегапиксельная фотография, отображаемая с шириной 8 сантиметров, раздувает PDF-файл и замедляет каждую компиляцию, в то время как версия, уменьшенная примерно до 300 точек на дюйм при печатном размере, выглядит идентично.

## Ошибка, которую следует избегать

Не боритесь с плавающей запятой в первый день, требуя только `[h]`. LaTeX часто отказывается, тогда переносит рисунок и все, что за ним стоит, в конец главы. Напишите `[htbp]`, поместите код рисунка рядом с абзацем, который первым на него ссылается, и пусть цифры и ссылки отслеживают его за вас.