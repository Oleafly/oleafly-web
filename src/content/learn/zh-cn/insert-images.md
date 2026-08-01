---

title: "放入一个图"
description: "Graphicx、宽度、路径、PDF 与 PNG。"
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# 放入​​一个数字

LaTeX 没有内置图像支持。所有这些都来自“graphicx”包，它提供了“\includegraphics”命令，并且按照惯例，图像被包装在“figure”环境中，因此它可以带有标题和数字。这是您将使用数百次的模式：

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## 每行的作用

`\usepackage{graphicx}` 行位于序言中的 `\begin{document}` 之前，并且无论包含多少图像，都只需要出现一次。

“figure”环境使图像成为浮动图像，这意味着 LaTeX 选择它落地的位置，而不是将其钉在文本中的确切位置。 “[htbp]”字母是您的放置首选项：“h”表示代码出现的位置，“t”表示页面顶部，“b”表示页面底部，“p”表示单独的浮动页面。 LaTeX 按此顺序尝试它们，并选择第一个生成不错的页面。如果你的人物漂移到令人惊讶的地方，这是正常的浮动行为，[浮动实际着陆的地方](/learn/position-figures/)解释了如何与之协商。

`\centering` 将图像在文本块内水平居中。 `width=0.8\textwidth` 将图像缩放到文本宽度的 80%，同时保留其纵横比，这几乎总是比指定以厘米为单位的绝对大小要好，因为它会在文档边距发生变化时进行调整。文件路径相对于项目根目录，因此“figures/pipeline.pdf”表示主“.tex”文件旁边的“figures”文件夹。最后，“\caption”打印编号的标题，“\label”记录编号，以便“\ref{fig:pipeline}”可以从文本中引用它。标签必须位于标题之后，原因请参阅[标题和标签](/learn/captions-labels/)。

## 使用哪种文件格式

对于任何矢量（即绘图、图表和流程图），首选 PDF，因为矢量图形在任何缩放和任何打印尺寸下都保持清晰。使用 PNG 进行屏幕截图和其他基于像素的图像。 JPG 对于照片来说是可以接受的，因为其压缩伪影是不可见的。完全避免将文本较多的内容作为屏幕截图嵌入，因为它在打印时会模糊并且无法搜索。

在添加大照片之前还要调整它们的大小。以 8 厘米宽显示的 12 兆像素照片会使 PDF 膨胀并减慢每次编译的速度，而打印尺寸缩小到大约 300 dpi 的版本看起来完全相同。

## 要避免的错误

不要在第一天就通过单独要求“[h]”来对抗浮动。 LaTeX 经常会拒绝，然后将图形及其后面的所有内容带到章节末尾。编写“[htbp]”，将图形代码放在第一个引用它的段落附近，然后让数字和引用为您进行跟踪。