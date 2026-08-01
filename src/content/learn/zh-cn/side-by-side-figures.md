---

title: "两个面板排成一排"
description: "迷你页面并排，没有打包战争。"
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 两个面板排成一排

有时您需要两张相邻的图像，每张图像都有自己的标题和图号。您不需要为此提供特殊的包。单个“figure”环境中的普通“minipage”框可以完成这项工作，并且因为两个图像都位于一个浮动中，所以 LaTeX 永远无法将它们分离到不同的页面上。

## 模式

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

“minipage”是一个行为类似于微型页面的盒子：它具有您选择的固定宽度，并且其内容在该宽度内包裹和堆叠。这里每个迷你页采用“0.48\textwidth”，即文本宽度的 48%。这故意留下了 4% 无人认领的空间，两个盒子之间的“\hfill”是可拉伸的空间，可以扩展以填充它，将一个面板推到左边距，另一个面板推到右边距。如果将两个宽度都设置为“0.5\textwidth”，它们将精确地合计行宽，没有任何分隔空间，第二个框将落在下一行上，这是并排布局神秘地垂直堆叠的最常见原因。

在每个小页面内，“width=\linewidth”将图像缩放到周围框的宽度，而不是整个页面的宽度。使用 `\textwidth` 会出现一个常见的错误，即使每个图像与全文块一样宽，从而保证溢出。

注意标题的位置：每个小页内。这为每个面板提供了完整的标题和自己的编号，因此该图生成的图 3 和图 4 排成一排。外部的“[htbp]”放置选项告诉 LaTeX 它可以将浮动元素按优先顺序放置在此处、页面顶部、底部或浮动页面上。

## 对齐顶部并混合内容

如果两个图像的高度不同，它们的垂直对齐方式可能会出现偏差，因为默认情况下小型页面会在其中心对齐。编写 `\begin{minipage}[t]{0.48\textwidth}` 将它们放在顶部对齐。迷你页也不关心它们包含什么，因此相同的布局在表格旁边放置一个图形，或者在解释性文本段落旁边放置一个图像，而子图样式包不是为此设计的。

## 何时使用子图

此模式无法为您提供的一件事是在单个共享标题和单个图号下标记为 (a) 和 (b) 的面板。当您想要“图 5(a)”而不是两个独立的图形时，请切换到 [subfigures](/learn/subfigures-abc/)。经验法则：迷你页适用于恰好是邻居的人物，而子人物则适用于恰好有零件的人物。