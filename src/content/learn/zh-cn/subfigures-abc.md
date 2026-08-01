---

title: "标有 a、b、c 的面板"
description: "一个标题下的多面板图的子标题。"
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 标记为 a、b、c 的面板

论文经常需要多面板图：面板（a）中的架构，（b）中的训练曲线，（c）中的消融，所有这些共享一个图号和一个整体标题。构建此内容的简洁方法是“subcaption”包，它为您提供了一个“subfigure”环境，可以自动处理（a）、（b）字母、每个面板的标题和引用。

## 模式

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

这是每个部分的作用。外部的“figure”环境是一个普通的浮动，“[htbp]”按顺序列出了 LaTeX 可能尝试的位置：文本中、页面顶部、页面底部或专用浮动页面。每个“子图”都是一个指定宽度的框，此处为“0.48\textwidth”（文本宽度的 48%）。两个面板在 0.48 处留下一个小间隙，并且它们之间的“\hfill”会拉伸，以便面板与左右边距齐平。在每个面板中，“width=\linewidth”将图像缩放到面板的宽度，而不是整个页面的宽度。最后一个细节是人们最常犯错的。

`subfigure` 内的 `\caption` 会在该面板下生成小的“(a) First”样式标签。最后的“\caption”位于“figure”内部但在任何“subfigure”外部，是携带图编号的主标题。将每个“\label”保留在其“\caption”之后，因为标签记录了最近发布的任何数字，如[标题和标签](/learn/captions-labels/)中所述。

## 参考面板

使用上面的标签，“\ref{fig:p}”打印图形编号，例如 2，而“\ref{fig:p-a}”打印 2a。如果你只想要字母，`\subref{fig:p-a}`只打印“a”，对于“panels (a) and (b)”这样的句子很方便。这就是“subcaption”相对于在图像下手动输入“(a)”的真正好处。当您添加或重新排序面板时，字母会自行重新编号，并且每个引用都保持正确。

## 行、间距和常见错误

对于第三个面板，可以将宽度缩小到大约“0.31\textwidth”，并在每对之间添加另一个带有“\hfill”的“subfigure”，或者通过在子图行之间留一个空行来开始一个新行。然而，行内的空行是典型的错误：两个“子图”环境之间的任何空行都会启动一个新段落，该段落垂直而不是并排堆叠面板。如果您的面板拒绝排成一行，请首先查找杂散的空白行，并记住行末尾的“%”注释掉了不可见的行尾空间，该空间也可能使面板太宽而无法容纳。