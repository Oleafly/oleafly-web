---

title: "作为图形的 PDF 页面"
description: "包括带有页面选择的图形和用于附录的 pdf 页面。"
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 作为图形的 PDF 页面

PDF 是 LaTeX 可以使用的最佳图形格式。与 PNG 或 JPG 不同，PDF 存储矢量数据，因此线条和标签在任何缩放级别都保持清晰，并且其中的字体随文件一起移动。 Matplotlib、Inkscape 和 draw.io 等工具都可以导出 PDF，这意味着您在其他地方绘制的图表可以直接放入您的文档中。但 PDF 带来了图像所没有的问题：一个 PDF 可以包含许多页面，并且您必须告诉 LaTeX 您想要哪一页。

## 从多页 PDF 中提取一页

`graphicx` 包的 `\includegraphics` 接受 `page` 选项以及常用的大小调整键：

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

这里 `page=1` 选择 `diagram.pdf` 的第一页，而 `width=\textwidth` 将该页面缩放到文本块的整个宽度。如果省略“page”，LaTeX 会默默地使用第一页，这通常是您想要的，但当绘图脚本将多个图形写入单个文件时，可能会让您感到惊讶。您可以使用不同的“页面”值多次包含相同的 PDF，每个图形环境一次，每个都有自己的标题和标签。

将命令包装在正常的“figure”环境中，以便它获得标题和数字，就像处理[任何其他图像](/learn/insert-images/)一样。包含的页面将被裁剪为其自己的边框，因此如果源 PDF 具有足够的边距，则该图形将看起来被填充。使用紧密的边界框重新导出，或者使用“pdfcrop”等工具将其裁剪一次，而不是使用负间距来对抗空白。

## 插入带有 pdfpages 的整个文档

有时您根本不需要数字。您希望将整个页面逐字放入您的文档中：补充 PDF、签名表格、论文附录中已发布的调查问卷。这就是“pdfpages”包的工作：

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

`pages=-` 值表示每一页。您还可以为范围编写“pages=2-5”，或为特定列表编写“pages={1,3,7}”。每个插入的页面都会填充自己的输出页面，保留其原始布局，并参与文档的页码编号，因此附录可以连续阅读。如果文档类中的页眉或页脚打印在插入页面的顶部并且您希望抑制或自定义它们，请添加“pagecommand={}”选项。

## 哪种工具适合哪种工作

当 PDF 内容应表现得像图形时，请使用“\includegraphics[page=...]”，这意味着它浮动、带有标题并从文本中引用。当页面应该以完整尺寸独立存在时，请使用“\includepdf”。常见的错误是使用“pdfpages”作为图表，这会为您提供一个无标题、未引用的完整页面，您无法使用“\ref”引用。如果读者会看到“参见图3”，那么它就属于图形环境。