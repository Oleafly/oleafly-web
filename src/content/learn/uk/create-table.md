---

title: "Стіл, схожий на паперовий"
description: "таблиця, правила вкладок, підпис, напис."
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

# Стіл, схожий на паперовий

Таблиці в LaTeX використовують два вкладені середовища з різними завданнями. Внутрішній `tabular` будує сітку комірок. Зовнішня `таблиця` робить цю сітку плаваючою, тому вона може містити номер, підпис і мітку, і тому LaTeX може розмістити її там, де є місце на сторінці. Додайте пакет `booktabs` для горизонтальних ліній, і результат виглядатиме як таблиця з опублікованої статті, а не як знімок екрана електронної таблиці.

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

## Зовнішнє середовище

Аргумент `[htbp]` вказує, де LaTeX може розмістити float: тут у тексті, у верхній частині сторінки, унизу або на окремій сторінці float. Він пробує їх у такому порядку, і надання всіх чотирьох не дозволяє таблиці відійти далеко; механіка пояснюється в [де насправді приземляються плаваючі засоби](/learn/position-figures/). `\centring` центрує сітку горизонтально. `\caption` друкує пронумерований підпис, і за угодою підписи до таблиці розміщуються над таблицею, на відміну від підписів до малюнків, які розташовані нижче. `\label` має стояти після `\caption`, тому що мітка записує останній виданий номер, як зазначено в [captions and labels](/learn/captions-labels/). Якщо мітка на місці, `Table~\ref{tab:results}` у вашому тексті завжди друкує правильне число.

## Внутрішня сітка

`{lcc}` після `\begin{tabular}` оголошує один стовпець на літеру: `l` вирівнюється за лівим краєм, `c` — по центру, а `r` буде вирівняно за правим краєм. Три літери означають три стовпці, і кожен рядок має містити рівно стільки клітинок. У рядку "&" розділяє клітинки, а "\\" завершує рядок. Текстові стовпці зазвичай читаються найкраще з вирівнюванням за лівим краєм, тоді як короткі цифрові стовпці зазвичай вирівнюються по центру.

Три правила походять від `booktabs`. `\toprule` відкриває таблицю, `\midrule` відокремлює рядок заголовка від даних, а `\bottomrule` закриває її. Вони замінюють звичайну команду `\hline` і постачаються з правильно налаштованими інтервалами зверху та знизу, тому таблиця виглядає професійно оформленою. Жодних вертикальних ліній і жодних правил між рядками даних: стиль `booktabs` навмисно пропускає обидва. Аргументація викладена в [таблицях трьох правил](/learn/booktabs-beautiful/).

## Практичні замітки

Найпоширенішими помилками для початківців є невідповідність між кількістю роздільників `&` і заявленими стовпцями, а також забутий `\\` у кінці рядка, обидва вони створюють незрозумілі повідомлення про помилки, що вказують на наступний рядок. Якщо ви не хочете рахувати клітинки вручну, побудуйте сітку візуально за допомогою [генератора таблиць](/tools/table-generator/) і вставте результат у свій документ.