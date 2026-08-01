---

title: "对齐的流程图框"
description: "定位库，使列共享优势。"
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 对齐流程图框

流程图看起来很业余，原因只有一个：方框几乎对齐。 TikZ 在结构上避免了这个问题，因为每个盒子都是相对于另一个盒子放置的，所以一列盒子通过构造而不是通过目测共享一个轴。第二个成分是命名样式，因此所有盒子都同意其形状和最小尺寸。这是一个垂直的三步流程：

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## 定义一次样式

`box/.style={...}` 行创建一个名为 `box` 的可重用样式。它的内容是普通的节点选项：“draw”为节点提供边框，“圆角”软化它，“align=center”使多行文本在节点内居中，“minimum width=2.8cm”强制每个框至少达到该宽度，这样短标签就不会收缩成小框。从那时起，“\node[box]”应用整个集合。当您需要填充颜色或更大的宽度时，更改一行，整个图表就会更新。这是您维护的图表，而不是您重新绘制的图表。

## 两个方向的间距

`node distance=10mm and 14mm` 设置 `positioning` 库使用的默认间隙：第一个值是垂直距离，第二个值是水平距离。就位后，“below=of i”将处理框放置在输入框下方 10 毫米处，边缘到边缘，并完全居中。第二列将使用“right=of p”并距侧面 14 毫米。由于每个放置都会链接一个现有节点，因此插入一个步骤意味着添加一个节点并更新一个“below=of”引用。下游的一切都随之变化。您还可以覆盖每个节点的距离，如“below=15mm of i”。

## 连接步骤

每个“\draw[-Latex] (i) -- (p);”从一个命名节点到下一个命名节点绘制一个箭头，“-Latex”从目标端的“arrows.meta”库中选择一个实心箭头。箭头自动在节点边界处连接。对于决策分支，从特定锚点绘制，例如“(p.east)”从右侧离开，一旦图表需要拐角，就使用“--++(2,0) |-”等弯曲路线。

TikZ 输出不会在这些页内预览中呈现，因此请编译代码片段以查看它。流程图中的典型错误是“仅此一次”放置一些具有绝对坐标的框：这些框在下一次编辑后最终会错位。保持每个位置的相对性，并参阅[节点和箭头](/learn/tikz-nodes-arrows/) 了解底层的放置选项。