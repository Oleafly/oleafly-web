---

title: "Стол, похожий на бумажный стол"
description: "таблица, правила закладок, подпись, метка."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Стол, похожий на бумажный стол

Таблицы в LaTeX используют две вложенные среды с разными заданиями. Внутренняя «таблица» строит сетку ячеек. Внешняя «таблица» делает эту сетку плавающей, поэтому она может содержать число, заголовок и метку, и поэтому LaTeX может разместить ее там, где на странице есть место. Добавьте пакет booktabs для горизонтальных правил, и результат будет выглядеть как таблица из опубликованной статьи, а не как скриншот электронной таблицы.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## Внешняя среда

Аргумент `[htbp]` перечисляет, где LaTeX может разместить поплавок: здесь, в тексте, вверху страницы, внизу или на отдельной странице поплавков. Он проверяет их в этом порядке, и предоставление всех четырех удерживает таблицу от смещения далеко; механика объясняется в [где на самом деле приземляются поплавки](/learn/position-figures/). `\centering` центрирует сетку по горизонтали. `\caption` печатает пронумерованную подпись, и по соглашению подписи таблицы располагаются над таблицей, в отличие от подписей рисунков, которые располагаются ниже. `\label` должен идти после `\caption`, поскольку метка записывает последний выпущенный номер, как указано в [captions and labels](/learn/captions-labels/). Если метка установлена, `Table~\ref{tab:results}` в вашем тексте всегда печатает правильное число.

## Внутренняя сетка

`{lcc}` после `\begin{tabular}` объявляет один столбец на каждую букву: `l` выравнивается по левому краю, `c` центрируется, а `r` будет выравниваться по правому краю. Три буквы означают три столбца, и каждая строка должна содержать ровно столько ячеек. Внутри строки `&` разделяет ячейки, а `\\` завершает строку. Текстовые столбцы обычно лучше всего читаются с выравниванием по левому краю, тогда как короткие числовые столбцы обычно располагаются по центру.

Эти три правила взяты из «booktabs». `\toprule` открывает таблицу, `\midrule` отделяет строку заголовка от данных, а `\bottomrule` закрывает ее. Они заменяют простую команду `\hline` и имеют правильно настроенные интервалы сверху и снизу, благодаря чему таблица выглядит профессионально оформленной. Никаких вертикальных линий и правил между строками данных: стиль booktabs намеренно исключает и то, и другое. Обоснование изложено в [таблицах с тремя правилами](/learn/booktabs-beautiful/).

## Практические замечания

Наиболее частыми ошибками новичков являются несоответствие количества разделителей `&` и объявленных столбцов, а также забытый `\\` в конце строки, обе из которых приводят к появлению запутанных сообщений об ошибках, указывающих на следующую строку. Если вы не хотите подсчитывать ячейки вручную, постройте сетку визуально с помощью [генератора таблиц](/tools/table-generator/) и вставьте результат в свой документ.