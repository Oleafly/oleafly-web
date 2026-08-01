---

title: "跨行或跨列的单元格"
description: "分组标题下的多列、多行、cmidrule。"
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# 跨行或跨列的单元格

真实的表格通常需要合并单元格。位于两个指标列上方的“分数”等标题会跨列，而适用于两个结果行的模型名称会跨行。 LaTeX 使用不同的工具处理两个方向：`\multicolumn` 是内置的，而 `\multirow` 来自同名包。这是一个使用两者的紧凑表格，加上“booktabs”中的部分规则：

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## 跨列

`\multicolumn{2}{c}{Scores}` 将两个普通单元格替换为一个。第一个参数是要吸收多少列，第二个参数是此单元格的列规范，此处“c”表示居中，第三个参数是内容。请注意其前面的单独的“&”：该行的第一列故意为空，因此“Scores”从第 2 列开始并覆盖第 2 列和第 3 列。因为第二个参数在本地覆盖列类型，所以“\multicolumn{1}{c}{...}”也是将单个标题单元格居中于左对齐列上方的标准技巧。

## 部分规则

`\cmidrule(lr){2-3}` 仅在第 2 列到第 3 列下绘制水平线，这在视觉上将分组标题与其列联系起来。 `(lr)` 选项会稍微修剪规则的左右两端，因此相邻的 `\cmidrule` 不会接触并读取为单独的组标记。这是一个“booktabs”命令，修剪是使这些表格看起来像是排版而不是绘制的细节之一。完整的三规则样式包含在[三规则表](/learn/booktabs-beautiful/)中。

## 跨行

`\multirow{2}{*}{Ours}` 在 2 行中垂直居中打印“Ours”。第一个参数是行数，第二个参数是单元格宽度，其中“*”表示内容的自然宽度，第三个参数是内容本身。该命令仅保留视觉空间，因此第二行仍必须提供一个空的第一个单元格，这就是为什么下一行以裸露的“&”开头。忘记空单元格会将行中的每个值向左移动一列，并且未对齐错误消息指向错误的行，因此首先检查“\multirow”之后的行。

## 实际限制

合并的单元格最好保留在标题和短行组中。数据单元格在两个方向上跨越的表格难以阅读且难以维护，因为每个添加的行都迫使您重新计算跨度。如果您发现自己将“\multirow”嵌套在“\multicolumn”中，请考虑重组表格。