---

title: "页码打开或关闭"
description: "简单、空洞、罗马文与阿拉伯文，抑制标题页上的数字。"
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 打开或关闭页码

页码默认出现在“article”中：标准类使用“plain”页面样式，将页码置于每页底部的中心。通常这很好，你从来不会考虑它。您确实需要考虑的三种情况是在标题页上隐藏编号、完全关闭编号以及在较长的文档中在罗马数字和阿拉伯数字之间切换。

## 隐藏扉页上的号码

扉页底部有一个孤独的“1”，看起来还没有完成。修复方法是在标题设置后放置一行：

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` 仅更改当前页面的页面样式，而 `empty` 是在页眉或页脚中不打印任何内容的内置样式。顺序很重要：它必须位于同一页面上的 `\maketitle` 之后，因为 `\maketitle` 本身会重置页面样式。请注意，页面仍然很重要；下一页的编号将是 2。如果您使用 `\begin{titlepage}...\end{titlepage}` 而不是 `\maketitle`，则编号会被隐藏，下一页从 1 开始。

## 样式和编号系统

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

这两对命令控制不同的东西，将它们混合起来就是典型的错误。 `\pagestyle{...}` 控制数字出现的位置及其周围的内容：`plain` 给出居中的页脚编号，`empty` 将从该点开始的每个页面中删除页眉和页脚。它没有说明这个数字是什么样的。

`\pagenumbering{...}` 控制数字的书写方式：`roman` 生成 i, ii, iii，而 `arabic` 生成 1, 2, 3。还有用于 I、II、III 的 `Roman` 和用于 a、b、c 的 `alph`，尽管您很少需要它们。 `\pagenumbering` 还将页计数器重置为 1。这种重置是一个功能，而不是一个错误：它可以让论文通过 vi 将其前言编号为 i，然后从第 1 页开始第一章。

如果您想要完全控制放置，例如角落中的数字或与运行标题配对，那么这是 fancyhdr 包的工作，而不是这些内置程序的工作。请参阅[运行头和脚](/learn/headers-footers/)。

## 常见错误

当您的意思是“\thispagestyle{empty}”时，写入“\pagestyle{empty}”会默默地从整个文档中删除编号，并且您可能不会注意到，直到审阅者询问为什么您的页面没有编号。请记住规则：“\thispagestyle”是单页例外，“\pagestyle”是文档范围的开关。

论文前言：[罗马/阿拉伯语指南](/learn/front-matter-page-numbers/)。