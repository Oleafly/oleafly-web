---

title: "节点和箭头"
description: "命名节点、相对位置、箭头提示。"
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 节点和箭头

几乎每个 TikZ 图都简化为两种成分。节点是一段定位的内容，通常是一个带标签的框或圆圈。边是连接两个节点的线或箭头。一旦您可以放置​​节点并连接它们，流程图、管道和框图都是不同大小的相同练习。下面的示例放置了两个命名框并在它们之间绘制了一个带标签的箭头：

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## 命名和放置节点

在 `\node[draw] (src) {Source};` 中，括号选项设置节点的样式，而 `draw` 表示绘制其边框，没有边框您将获得浮动文本。 “(src)”是节点的名称，“{Source}”是其内容。名称是重要的部分：它让其他命令在不知道其坐标的情况下引用该节点。

第二个节点说明了为什么这很重要。 `right=2cm of src` 来自 `positioning` 库，并将 `dst` 放置在 `src` 右侧两厘米处，在它们的边界之间测量。该库还提供了“left=of”、“above=of”、“below=of”以及对角线组合，例如“above right=of”。以这种方式构建图表（每个节点都相对于现有节点），并且当文本大小发生变化时布局保持不变。像“\node at (4,2)”这样的绝对坐标仍然有用，但是基于它们构建的图表需要在每次盒子增长时手动重新编号。

## 绘制箭头

`\draw (src) -- (dst);` 在两个命名节点之间绘制一条直线，TikZ 自动在节点边界而不是节点中心开始和结束该线。 `[-{Latex}]` 选项指定箭头提示：连字符之前没有任何内容意味着没有尾尖，而后面的 `Latex` 从目标的 `arrows.meta` 库中选择一个实心箭头。编写“{Latex}-{Latex}”将给出一个双头箭头。

中间路径 `node[above] {edge}` 是附加到线本身的标签。写入路径内的节点被放置在路径的该点（默认情况下为中间），而“above”将其移动到该行的正上方，因此文本不会位于笔画上。这是注释转换和数据流的标准方法。

## 有回报的习惯

命名每个节点，即使是在很小的图中。无法连接未命名的节点，并且小图很少会保持很小。出于同样的原因，更喜欢“定位”的相对位置而不是绝对坐标。每个 TikZ 语句都以分号结尾。遗漏一个是最常见的 TikZ 错误，而且这些消息通常与真正的问题相去甚远。要将许多框排列成整齐的行和列，请继续[对齐流程图框](/learn/tikz-flowchart/)。