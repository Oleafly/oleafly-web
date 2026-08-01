---

title: "当 PowerPoint 无法剪切时，在 TikZ 中研究图表"
description: "何时在 TeX 中绘制管道、自动机和交换图，以便它们为日志重新着色、在打印时保持清晰、并作为存储库中的源代码存在。"
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint 图表在 PDF 中变成模糊矩形。 TikZ 图保留
矢量，匹配文档字体，并在期刊需要灰度时重新着色
或不同的口音。第一个小时的交易较为陡峭。之后，小
编辑是文本差异，而不是屏幕截图考古。

您不需要为每个图形都使用 TikZ。照片、原始显微镜框架，以及
matplotlib 中的密集图通常保留为 PDF/PNG 包含的内容。使用 TikZ 的时候
图是结构：管道、自动机、架构框、类别图、
简单的树。

##从小处开始

三节点管道教导该模型：

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

名称节点。使用“--”或显式锚点（“(a.east)”）连接。更喜欢亲戚
将（`right=of a`）放置在你永远不会记得的神奇坐标上。
课程：[第一张 TikZ 图片](/learn/tikz-intro/),
[节点和箭头](/learn/tikz-nodes-arrows/)。

## 风格胜过一次性选项

定义一次样式，以便每个框都匹配：

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

当期刊要求加粗线条或单色时，改变风格，而不是
二十个节点。使用命名颜色或小调色板宏进行着色，以便您可以交换
无需寻找十六进制代码即可重音。

## CS 和工程：一致的流程图

使用“positioning”库（“below=of”、“right=of”）让盒子共享一个网格。
手动绝对坐标是插入一个节点时图表如何旋转的方式。保留
文字短；将详细信息放在标题中。指南：
[对齐流程图](/learn/tikz-flowchart/)。

对于神经网络或系统草图，将“块”与“注释”分开。
注释可以是没有边框的较小字体节点，因此主路径保持不变
以两列宽度可读。

## 数学和理论：交换图

`tikz-cd` 是类别样式图的常用路径，无需放置每个
手动节点：

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

指南：[交换图](/learn/commutative-diagrams/)。对于树木和
存在证明理论图、专门库；在你之前先从简单开始
导入一半的 CTAN。

## 外部化和编译时间

一篇包含 20 个 TikZ 图的论文会减慢完整编译的速度。选项：

- 将每个图形放入其自己的文件中并“\input”。
- 使用“外部”库，使图片成为缓存的 PDF。
- 当您只关心散文时，使用“\tikzexternaldisable”草稿。

导出幻灯片：将“独立”TikZ 文档编译为 PDF，转换为 PNG
仅当套牌工具无法获取 PDF 时。将“.tex”保留为事实来源。

## Canvas 工具 vs 手写 TikZ

一些研究编辑器包含一个图表画布，可以发出可编辑的 TikZ（用于
例如 Oleafly 的图表编辑器：绘制、调整代码、编译图表，
插入）。这对于可以拖动的几何体非常有用。手写 TikZ 仍胜出
用于紧密交换图和高度规则的网格。无论哪种方式，请提交
TikZ 源码，不仅仅是 PNG。

## 将图表保留在存储库中

将图形源存储在纸张旁边：

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

当期刊需要更粗的线条时，您可以编辑源代码并重新编译。当一个
合著者“改进”了幻灯片工具中的屏幕截图，你失去了唯一的
可编辑版本。

## 常见故障模式

两列溢出很常见。作为最后的手段使用“\resizebox”进行缩放；
首先重新设计宽度。字体不匹配是另一个原因：更喜欢默认文档
字体优于 TikZ 内的硬编码字体系列，除非期刊需要。
检查演讲的对比度，因为投影仪上的隐形灰色是经典
陷阱。未标记的箭头迫使标题解释每条边，这意味着
该图不完整。

## 图层和叠加

对于共享图形的演讲和论文，请分层构建图表：基础
首先是框，然后是箭头，然后是标签。调试时注释掉图层
安置。 Beamer 覆盖（`\pause`、`\onslide`）可以逐步显示管道
如果您保持节点名称稳定，请从相同的 TikZ 源开始。

## 辅助功能和打印

不要只用红色和绿色来编码含义。也使用形状或线条样式。
检查灰度图。如果读者是这样的话，标题仍然应该有意义
色盲或在黑白实验室打印机上打印。

## 有效的工作流程

在纸上画三十秒，然后构建最小的 TikZ，显示
索赔。定义一次样式并重复使用它们。单独编译该图，直到
看起来不错，把它扔到纸上，然后让标题来表达这一主张。提交
`.tex`。

PowerPoint 非常适合一次性实验室会议。对于期刊将打印的 PDF，
您可以重新着色的矢量源击败另一轮“您可以发送可编辑的
文件？”