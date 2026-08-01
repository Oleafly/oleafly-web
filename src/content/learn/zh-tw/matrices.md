---

title: "矩陣和數組"
description: "pmatrix、bmatrix、vmatrix 和自訂陣列列。"
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 矩陣和數組

LaTeX 中的矩陣是一個單元格網格：「&」分隔列，「\\」分隔行，環境將網格包裹在右側的一對分隔符號中。矩陣環境來自“amsmath”，因此在編譯之前，該套件需要位於您的序言中。

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## 矩陣環境

三人共享同一個身體。僅周圍的分隔符號發生變化。 `pmatrix` 將網格括在括號中，這是矩陣和向量最常見的樣式。 `bmatrix` 使用方括號，而 `vmatrix` 使用單一垂直線，這是行列式的標準表示法。還有不含分隔符號的普通「matrix」、大括號的「Bmatrix」和雙槓的「Vmatrix」範數。在內部，「a & b」填入一行的兩列，「\\」開始下一行，並且每行應帶有相同數量的「&」分隔符號。

這些環境必須出現在數學模式中。將它們包含在 `\[ ... \]` 中或在方程式中使用它們。對於句子中間的小矩陣，`smallmatrix`，也來自`amsmath`，設定一個不拉伸行的緊湊版本：`$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`。

## 自訂數組

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

当您需要每列控制时，“数组”是通用工具。它的强制参数是列规范：这里 `r|cc` 声明一个右对齐列，一条垂直线，然后是两个居中列。对齐字母是“l”、“c”和“r”，“|”在列之间绘制规则。行之间的“\hline”在整个宽度上绘制一条水平线。 `array` 不繪製自己的外部分隔符號。如果需要，请将其与“\left(”和“\right)”配对。它是用于文本表格的“tabular”环境的数学模式兄弟。

## 常見錯誤

錯誤“額外對齊選項卡已更改為 \cr”意味著行的“&”分隔符號數量超出了列數允許的數量，這通常可以追溯到上一行末尾缺少的“\\”。 「Environment pmatrix undefined」表示缺少 `\usepackage{amsmath}`。在數學模式之外貼上的矩陣失敗，並顯示“缺少插入的 $”。如果分隔符號是新的，請參閱[數學模式基礎](/learn/math-mode/)。在 [live Playground](/live/) 中比較每種分隔符號樣式中的二乘二需要幾秒鐘。