---

title: "海报位于A0"
description: "tikzposter、beamerposter 或几何加上 TikZ。"
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# A0 的海报

会议海报是单页，通常是 A0 或 A1，必须在一米半外可读。 LaTeX 可以很好地处理这种格式，因为海报可以直接重复使用论文的方程、图形和参考书目。然而，普通的文档类不会削减它：字体、边距和列布局都需要海报尺寸的版本。三种方法几乎覆盖了所有的 LaTeX 海报。

## 三个选项

`tikzposter` 类是获得现代学术海报的最直接途径。它将内容组织成按列排列的彩色块，提供几个完整的主题，并自行处理大纸张尺寸和缩放字体。骨架看起来像这样：

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

类选项设置 25 点基本字体、A0 纸张和纵向方向。每个“\column{0.5}”占据海报宽度的一小部分，每个“\block{title}{content}”成为一个标题面板。更改“\usetheme”会立即重新设置每个块的样式。

“beamerposter”包将 Beamer 扩展到海报尺寸，因此甲板的主题、颜色和“块”环境可以转移到一个巨大的框架中。当您的团队已经维护 Beamer 样式并且许多大学海报模板都是基于它构建时，这是自然的选择。

第三个选项是一个普通文档类，其中包含设置 A0 尺寸的 `geometry` 包，以及用于装饰的 TikZ。这可以完全控制每一毫米，也是最精心设计的海报的制作方式，但你自己建造柱脚手架，所以要实时预算。

## 实用建议

无论您选择哪种路线，都从工作模板而不是空白文件开始，例如来自[图库](/templates/)的模板，然后逐块替换内容。在第一天设置纸张尺寸和方向，因为稍后更改它们会破坏每个手动调整的宽度。打印后正文应约为 24 至 32 点；任何低于 20 分的内容都不会被阅读。更喜欢矢量图。当缩放到海报宽度时，为纸质专栏导出的绘图会变得糊状，因此请按照海报大小重新生成图形，而不是拉伸它们。

最常见的失败是将海报视为压缩纸。计划您第一次起草的大约三分之一的字数，让数字承载参数，并通过在 A4 上全尺寸打印 PDF 的一块来检查结果，以判断真实的字体大小，然后将文件发送到绘图仪。