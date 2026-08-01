---

title: "段落之间缩进或空格"
description: "parindent、parskip、noindent 用于单行。"
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 段落之间缩进或空格

版式有两种标准方法来显示一个段落的结束位置和下一个段落的开始位置：缩进每个新段落的第一行，或者在段落之间留出垂直空间而不缩进。书籍和期刊几乎总是使用第一个。网页和商业文档使用第二种。 LaTeX 默认遵循书籍惯例，缩进除章节标题后的第一个段落之外的每个段落，段落之间没有多余的空格。如果您想要其他样式，请更改两个长度。

## 控制一切的两个长度

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` 是首行缩进的宽度。使用“\setlength”将其设置为“0pt”可以删除所有地方的缩进。 `\parskip` 是段落之间插入的垂直空间，通常为零（加上一点拉伸）；将其设置为“0.8em”会产生可见的间隙，比完整的空行略小。 “em”单位随字体大小缩放，如果您稍后更改[字体大小](/learn/font-size/)，它会保持间距成比例。将这两行放在序言中，整个文档遵循块样式。

如果您走这条路，请注意，简单的“\parskip”更改也会拉伸节标题、列表项和目录周围的空间，因为它们也是从段落构建的。对于比简短注释更长的内容，请加载 `parskip` 包 (`\usepackage{parskip}`) 应用相同的样式，同时为您修补这些副作用。

## 抑制单个缩进

单段落：将 `\noindent` 放在它的最开头，第一个单词之前。这只会抑制该段落的缩进，并且当以下文本是同一想法的延续而不是新段落时，在显示的方程式、代码列表或表格之后非常方便。相反的情况，即在 LaTeX 省略缩进的情况下强制缩进（例如标题后的第一段），由小型“indentfirst”包处理，而不是手动修复。

当我们在这里时：LaTeX 中的新段落是由源代码中的空行创建的，而不是由“\\”创建的。 `\\` 命令是同一段落内的换行符，使用它来伪造段落间距会产生未满的警告和不均匀的间隙。 [段落和换行符课程](/learn/paragraphs-newlines/) 完整地涵盖了这一区别。

## 选择一种风格并保留它

Pick indent **or** parskip style and stay consistent.这两种约定是替代方案，而不是层次：缩进的段落之间有很大的间隙，看起来像草稿，零缩进和零空间让读者根本无法看到段落从哪里开始。 If you are writing for a journal or conference, do not change either length; the class file already implements the publisher's choice, and your override will be the first thing the layout editor reverts.