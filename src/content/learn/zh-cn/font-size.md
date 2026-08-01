---

title: "较大型和较小型"
description: "类选项（例如 11pt）和不会破坏行距的本地大小开关。"
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 更大和更小的类型

LaTeX 中的字体大小设置为两个级别：在类选项中选择一次的文档范围基本大小，以及需要不同的跨度的本地开关。基本尺寸驱动其他一切。标题、脚注和局部大小都是相对于它定义的。

## 文档范围

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

class 选项设置正文文本的大小。 `10pt` 是默认值，`11pt` 和 `12pt` 是常见的替代方案；标准类仅支持这三个。更改该选项会按比例重新缩放整个文档，因为标题大小、脚注大小和行距均源自基础。如果您需要超过 12pt 的基本尺寸，“extarticle”等类或 KOMA-Script 类可以接受更广泛的选项。

## 本地交换机

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

这些是声明而不是带参数的命令：“\large”从该点更改大小，直到当前组结束，而“{\large Larger}”周围的大括号限制了其范围。完整的阶梯，从最小到最大，是`\tiny`，`\scriptsize`，`\footnotesize`，`\small`，`\normalsize`，`\large`，`\Large`，`\LARGE`，`\huge`，`\Huge`。每个步骤映射到一个具体大小，具体大小取决于类选项，因此“12pt”下的“\large”比“10pt”下的“\large”大。将开关视为距正文的一步，而不是固定的大小。

行距有一个微妙之处。大小开关仅调整处于活动状态时结束的段落的基线距离。对于较大尺寸的多段落跨度，请通过在右大括号之前以“\par”结尾来将段落分隔符保留在组内，如“{\large ... \par}”。否则，最后一段将在超大字母下保持正常大小的行距，并且行会发生冲突。

## 尺寸与结构

抵制使用大小开关来伪造标题。 `\section` 及其亲属为您设置大小，它们还对标题进行编号，将其添加到目录中，并创建 PDF 书签。手工构建的 `{\Large \textbf{...}}` 行没有提供这些。同样的想法也适用于强调，在[强调而不与字体对抗](/learn/bold-italic/)中有介绍。保留手动大小开关以满足真正的本地需求，例如表格下的脚注大小的注释或标题页上的一行。如果文档中的每个标题都需要重新设计，请更改类或使用像“titlesec”这样的包，而不是手动调整每个标题的大小。