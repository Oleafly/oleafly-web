---

title: "第一个Beamer甲板"
description: "主题、标题框、大纲、一张结果幻灯片。"
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# 第一个 Beamer 牌组

Beamer 是用于演示的标准 LaTeX 文档类。该文档不再生成页面，而是生成幻灯片，并且您已经知道的所有内容都会保留：相同的数学、相同的数字、相同的参考书目命令。论文作者的实际胜利是重用。手稿中的方程和 TikZ 图原封不动地粘贴到演讲中。这是一个最小但完整的甲板：

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## 框架，而不是页面

核心单元是框架，每个“框架”环境都成为一张幻灯片。大括号中的可选参数（如“\begin{frame}{Results}”）设置幻灯片的标题。第一张幻灯片使用简写“\frame{\titlepage}”，其中“\titlepage”呈现在序言中由“\title”和“\author”声明的元数据。您还可以添加“\institute”和“\date”，它们会出现在同一布局中。一个框架所容纳的画布明显小于一页，大约为 128 毫米 x 96 毫米的画布，因此溢出的内容表明将材料分成两个框架，而不是缩小字体。

## 主题和大纲

`\usetheme{Madrid}` 选择完整的视觉设计：颜色、页眉和页脚栏以及框架标题的绘制方式。 Beamer 提供了数十个主题。 “马德里”、“柏林”和故意简单的“默认”是常见的选择，而交换主题只是一行行的更改，可以重新设计整个牌组。许多会议和实验室都会分发自己的主题。在这种情况下，您可以将其样式文件放入项目中并在此处命名。

大纲框架称为“\tableofcontents”，其中列出了演讲的部分结构。有一个问题：它列出了 `\section` 命令，而这个最小的示例没有任何命令，因此轮廓呈现为空，直到您在帧之间添加像 `\section{Method}` 这样的行。 Beamer 中的部分不会在幻灯片上打印标题；它们的存在是为了构建某些主题显示的大纲和导航元素。

## 幻灯片上的内容

在框架内，“itemize”的工作方式与在任何文档中一样，并且每个“\item”都成为一个项目符号。幻灯片所容纳的文本远少于纸张，因此请尽可能将项目保留在单行中，并将细节转移到您所说的内容中。图形、表格和数学也都在框架内工作，尽管 Beamer 输出不会在这些页内预览中呈现，因此请编译甲板以查看它。

最常见的早期错误是逐字内容：`\verb` 和代码列表由于框架处理其内容的方式而在普通框架内中断。修复方法是在任何包含代码的框架上使用脆弱选项，写为“\begin{frame}[fragile]”。起草套牌后，下一个要学习的工具是逐步显示，[单击时显示线条](/learn/beamer-overlays/) 对此进行了介绍。