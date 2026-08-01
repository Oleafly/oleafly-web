---

title: "一张看起来像纸桌的桌子"
description: "表格、书签规则、标题、标签。"
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

# 一张看起来像纸桌的桌子

LaTeX 中的表使用两个具有不同作业的嵌套环境。内部的“表格”构建了单元格网格。外部的“table”使网格成为浮动的，因此它可以携带数字、标题和标签，因此 LaTeX 可以将其放置在页面有空间的位置。添加水平线的“booktabs”包，结果看起来像已发表论文中的表格，而不是电子表格屏幕截图。

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

## 外部环境

`[htbp]` 参数列出了 LaTeX 可以放置浮动的位置：文本中、页面顶部、底部或单独的浮动页面上。它按照这个顺序尝试它们，并授予所有四个可以防止表漂移太远；其机制在[浮标实际着陆位置](/learn/position-figures/) 中进行了解释。 `\centering` 使网格水平居中。 `\caption` 打印编号标题，按照惯例，表格标题位于表格上方，与位于下方的图形标题不同。 `\label` 必须位于 `\caption` 之后，因为标签记录了最近发布的编号，如 [标题和标签](/learn/captions-labels/) 中所述。标签就位后，文本中的“Table~\ref{tab:results}”始终会打印正确的数字。

## 内网格

“\begin{tabular}”后面的“{lcc}”声明每个字母一列：“l”左对齐，“c”居中，“r”右对齐。三个字母意味着三列，每行必须提供恰好那么多的单元格。在一行中，“&”分隔单元格，“\\”结束行。文本列通常左对齐阅读效果最佳，而短数字列通常居中。

这三个规则来自“booktabs”。 `\toprule` 打开表格，`\midrule` 将标题行与数据分开，`\bottomrule` 关闭它。它们取代了普通的“\hline”命令，并具有正确调整的上下间距，这就是表格看起来专业设置的主要原因。没有垂直线，数据行之间也没有规则：“booktabs”样式故意忽略了两者。推理在[三规则表](/learn/booktabs-beautiful/) 中列出。

## 实用笔记

最常见的初学者错误是“&”分隔符的数量与声明的列之间不匹配，以及在行末尾忘记了“\\”，这两种情况都会产生指向下一行的令人困惑的错误消息。如果您不想手动计算单元格，请使用[表格生成器](/tools/table-generator/) 直观地构建网格并将结果粘贴到文档中。