---

title: "树和简单的图表"
description: "子语法和间距旋钮。"
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 树和简单图

层次结构不断出现：解析树、决策树、文件布局、分类法。通过“定位”一次绘制一个盒子是可行的，但是用手保持兄弟姐妹均匀分布和水平均匀分布是很乏味的。 TikZ `trees` 库允许您使用嵌套的 `child` 操作来描述层次结构本身，并为您计算布局：

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## 读取子语法

该图片包含一个声明。它以根“\node{A}”开始，附加到它的每个“child{...}”声明一个子树。子级通常包含一个“node{...}”作为其自己的标签，并且可能包含进一步的“child”操作，这就是“C”获取子级“D”和“E”的方式。大括号的嵌套反映了树的嵌套，因此您可以直接从缩进读取结构。 TikZ 将每个级别放置在前一个级别的下方，并自动绘制连接边。 one 语句在最后一个大括号后以一个分号结束。结构内部缺少或多余的分号是导致此处错误的常见原因。

## 三个布局旋钮

顶部的选项控制外观和间距。 `every node/.style={draw,circle,minimum size=7mm}` 立即将样式应用于所有节点：每个节点都有一个绘制的边框、一个圆形形状和 7 毫米的最小直径，因此单个字母会产生统一的圆形。 `level distance=12mm` 设置父级与其子级之间的垂直间隙。 `sibling distance=18mm` 设置同一父级的相邻子级之间的水平间隙。

兄弟距离是您最常调整的旋钮。 “trees”库为给定级别的每个子树保留相同的宽度，因此如果该值太小，宽子树可能会发生冲突。标准补救措施是加宽顶部附近的间距，其中子树最宽，并使用每级设置，例如“level 1/.style={sibling distance=36mm}”和“level 2/.style={sibling distance=18mm}”。如果您的标签宽度差异很大，请通过从共享样式中删除“circle”来从圆形切换到矩形。

## 除了小树之外

边缘通过“edge fromparent/.style”获取样式，例如添加箭头或更粗的线条。对于超过大约十几个节点的树，或者对于具有循环的一般图，“trees”库变得有限。 “forest”包通过自动打包处理大树。具有“graphdrawing”算法的“graphs”库涵盖任意图形，尽管该路径需要 LuaLaTeX。 TikZ 不会在这些页内预览中呈现，因此请编译示例以查看布局。如果此语法是新的，请从 [您的第一张 TikZ 图片](/learn/tikz-intro/) 中的基础知识开始。