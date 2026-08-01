---

title: "PDF 内的链接"
description: "hyperref、url、href、颜色和 PDF 元数据。"
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# PDF 内的链接

PDF 不仅仅是屏幕上的纸张。它可以携带实时链接：可点击的 URL、跳转到右图的交叉引用、跳转到参考书目的引用以及根据章节标题构建的侧边栏大纲。在 LaTeX 中，一个包提供了所有这些：“hyperref”。加载它后，文档中的每个“\ref”、“\cite”和目录条目都会悄悄地变得可点击，而不会更改源代码的其余部分。

## 加载和配置 hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

方括号中的选项控制链接的外观。默认情况下，hyperref 在每个链接周围绘制一个彩色矩形，大多数人觉得它很难看。设置“colorlinks=true”会用彩色文本替换框，并且三个颜色选项按链接类型拆分：“linkcolor”涵盖内部跳转，例如章节和图形引用，“citecolor”涵盖引文，“urlcolor”涵盖网址。将它们分开很重要，因为否则一篇充满引文的论文可能会变成一堵蓝色的墙。

## url 与 href

这两个链接命令执行不同的工作。 `\url{...}` 以打字机字体打印地址本身并使其可点击，这就是您在参考书目或脚注中想要的内容，读者应该在其中看到链接的位置。 `\href{address}{text}` 将地址隐藏在您提供的任何文本后面，例如网页上的链接。在可能打印的文档中优先使用“\url”，因为“\href”标签使纸质阅读器无法输入地址。

一个实用的好处是：“\url”知道如何跨行分隔长地址，而不插入会破坏地址的连字符，这是普通打字机字体 URL 无法做到的。

## PDF 元数据

`\hypersetup` 允许您在加载后更改任何 hyperref 选项，它也是您设置文档元数据的地方。 `pdftitle` 和 `pdfauthor` 字段填写 PDF 阅读器在其窗口栏和文件属性中显示的标题和作者。如果没有它们，读者通常会显示文件名或第一个标题，在您提交或共享的文档中看起来未完成。您可以在序言中的“\usepackage{hyperref}”之后随时调用“\hypersetup”。

## 适合打印的文档

对于打印友好的文档，请使用“隐藏链接”。将其作为选项传递，“\usepackage[hidelinks]{hyperref}”，使每个链接在屏幕上可点击，但删除彩色框和彩色文本，因此打印的页面看起来完全正常。许多期刊类别都需要这样。

要避免的一个常见错误：hyperref 重新定义了许多内部命令，因此应将其作为序言中最后的包之一加载。如果您的链接指向错误的页面，或者您从另一个包中收到奇怪的错误，则首先要检查加载顺序。请参阅 [交叉引用](/learn/cross-references/) 了解 hyperref 使可点击的 `\label` 和 `\ref` 机制。