---

title: "段落、分隔符和空白"
description: "空行、强制中断、vspace 以及值得了解的间距命令。"
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# 段落、分隔符和空白

In a word processor you shape paragraphs by pressing Enter and eyeballing the gaps. LaTeX works differently: the source text describes structure, and the compiler decides the spacing.一旦你知道 LaTeX 如何开始一个段落，以及如何在需要时覆盖它，你就可以避免初学者通常遇到的格式冲突。

## 段落如何运作

源代码中的空行开始一个新段落。这就是整个规则。一个空行或五个空行，没有区别； LaTeX 将它们折叠成一个段落分隔符。同样，源代码中的单个换行符被视为普通空格，因此您可以将源文本以您喜欢的任何宽度换行并自由重排，而无需更改输出。

命令“\par”与空行的含义完全相同。您很少会自己键入它，但您会在宏和类文件中看到它，其中文本空行写起来很尴尬。

`\\` 完全是另一回事：它强制在当前段落内换行，而不开始新的段落。新行没有段落缩进，也没有额外的垂直空间。它存在于换行符是内容的地方，例如地址、诗歌和表格的行。 Using it to end ordinary paragraphs is the classic beginner mistake, because it produces a paragraph that never really ended, and LaTeX may complain with "There's no line here to end" when two of them stack up.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## 添加垂直空间

有时您需要故意留出间隙，例如在签名块之前或标题页的逻辑部分之间。

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` 准确插入您要求的垂直空间，采用 LaTeX 知道的任何单位（`em`、`pt`、`cm` 等）。三个跳过命令是预设数量：“\smallskip”、“\medskip”和“\bigskip”插入小、中和大间隙，其大小由文档类定义，这使它们在整个文档中保持一致。优先选择跳过而不是手动调整的“\vspace”值，因为如果您更改类或字体大小，它们会进行调整。

一个有用的细节：页面顶部的“\vspace”被悄悄删除，因为 LaTeX 假设页面边界处的弹性空间是无意的。如果您确实需要保留它，请使用带有星号的“\vspace*{1em}”。

## 所有段落之间的空格

不要使用“\\”来在段落之间留出空间。 If you want every paragraph separated by a gap instead of marked by an indent, that is a document-wide design decision: set it once in the preamble with the `parskip` package, or reconsider whether headings and structure would communicate the separation better.有关此权衡的另一半，请参阅[段落缩进](/learn/paragraph-indent/)。