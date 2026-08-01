---

title: "矩阵和数组"
description: "pmatrix、bmatrix、vmatrix 和自定义数组列。"
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 矩阵和数组

LaTeX 中的矩阵是一个单元格网格：“&”分隔列，“\\”分隔行，环境将网格包裹在右侧的一对分隔符中。矩阵环境来自“amsmath”，因此在编译之前，该包需要位于您的序言中。

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## 矩阵环境

三人共享同一个身体。仅周围的分隔符发生变化。 `pmatrix` 将网格括在括号中，这是矩阵和向量最常见的样式。 `bmatrix` 使用方括号，而 `vmatrix` 使用单竖线，这是行列式的标准表示法。还有不带分隔符的普通“matrix”、带大括号的“Bmatrix”和带双杠的“Vmatrix”范数。在内部，“a & b”填充一行的两列，“\\”开始下一行，并且每行应带有相同数量的“&”分隔符。

这些环境必须出现在数学模式中。将它们包含在 `\[ ... \]` 中或在方程中使用它们。对于句子中间的小矩阵，`smallmatrix`，也来自`amsmath`，设置一个不拉伸行的紧凑版本：`$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`。

## 自定义数组

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

当您需要每列控制时，“数组”是通用工具。它的强制参数是列规范：这里 `r|cc` 声明一个右对齐列，一条垂直线，然后是两个居中列。对齐字母是“l”、“c”和“r”，“|”在列之间绘制规则。行之间的“\hline”在整个宽度上绘制一条水平线。 `array` 不绘制自己的外部分隔符。如果需要，请将其与“\left(”和“\right)”配对。它是用于文本表格的“tabular”环境的数学模式兄弟。

## 常见错误

错误“额外对齐选项卡已更改为 \cr”意味着行的“&”分隔符数量超出了列数允许的数量，这通常可以追溯到上一行末尾缺少的“\\”。 “Environment pmatrix undefined”表示缺少 `\usepackage{amsmath}`。在数学模式之外粘贴的矩阵失败，并显示“缺少插入的 $”。如果分隔符是新的，请参阅[数学模式基础知识](/learn/math-mode/)。在 [live Playground](/live/) 中比较每种分隔符样式中的二乘二需要几秒钟。