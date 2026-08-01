---

title: "你的第一张 TikZ 图片"
description: "节点、边、保持矢量的三盒管道。"
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# 你的第一张 TikZ 图片

TikZ 是一种存在于 LaTeX 文档中的绘图语言。您无需导入从其他工具导出的图表，而是用文本描述它，然后编译器绘制它。好处是输出是使用文档自己的字体的矢量图形，因此标签与周围的文本完全匹配，并在任何缩放下保持清晰。代价是您需要编写坐标和选项，而不是拖动框。对于由方框和箭头构建的图表，这种权衡通常是值得的。这是一个三盒管道，规范的第一张图片：

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## 节点

节点是一段内容，通常是文本，放置在某个位置，可以选择在其周围绘制形状。在 `\node[draw, roundedcorns] (a) {Input};` 中，方括号中的选项表示绘制节点的边框并将其圆角，`(a)` 为节点提供了稍后可以引用的名称，而 `{Input}` 是里面的文本。第二个节点使用“positioning”库中的“right=of a”，将其放置在节点“a”的右侧，距离由环境选项中的“node distance=1.5cm”设置。将节点相对放置，而不是放置在绝对坐标上，当一个标签变长时，整个图表就会调整。

## 边缘

边是连接两点的线。因为节点已命名，所以可以通过名称连接它们：“\draw (a) -- (b);”从节点“a”到节点“b”绘制一条直线。 TikZ 在节点边界而不是节点中心开始和结束线条。 `[-Latex]` 选项设置 `arrows.meta` 库中的箭头样式，为该行在其目的地提供一个实心箭头。该提示在每个路径的末尾适用一次，这就是该示例使用两个“\draw”命令的原因。单个“(a) -- (b) -- (c)”路径只会在“c”处放置箭头。

## 下一步去哪里

当需要标题和数字时，将“tikzpicture”包装在“figure”环境中，就像图像一样。 TikZ 代码不会在这些页内预览中呈现，因此请在项目中编译代码片段以查看结果。在 Oleafly 中，Diagram Composer 还可以生成可编辑的 TikZ 作为起点。初学者最常见的错误是忘记每个 TikZ 命令结尾的分号，这会产生很长的令人困惑的错误。当图表超过三个框时，继续使用[节点和箭头](/learn/tikz-nodes-arrows/) 和[对齐的流程图框](/learn/tikz-flowchart/)。