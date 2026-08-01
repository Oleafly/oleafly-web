---

title: "罗马页面然后是阿拉伯页面"
description: "委员会仍然期望的头条编号。"
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 罗马页面然后是阿拉伯页面

打开几乎任何论文或教科书，你都会看到相同的约定：扉页、摘要、目录和致谢都用小写罗马数字编号为 i、ii、iii，然后第一个真正的章节从第 1 页开始，用普通阿拉伯数字表示。前面的内容被视为一个单独的、初步的序列，研究生院明确检查这一惯例。在 LaTeX 中，它只需要两个命令。

## 模式

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` 同时做两件事：它将数字样式切换为小写罗马并将页计数器重置为 1，因此标题页变为第 i 页。放在它后面的所有内容，通常是 `\maketitle`、摘要、[目录](/learn/table-of-contents/) 以及任何图形或表格列表，都会编号为 ii、iii、iv 等。

然后，在第一章之前， `\pagenumbering{arabic}` 将样式切换回来并再次重置计数器，因此 `\chapter{Introduction}` 在新的第 1 页上打开。重置就是重点：没有它，您的介绍将从第 7 页开始，这不是委员会或引文惯例所期望的。

因为“book”和“report”类中的“\chapter”总是开始一个新页面，所以在切换之前不需要显式的“\newpage”。在没有章节的课程中，您将首先添加“\clearpage”，这样编号更改就不会落在页面中间。

## 为你做这件事的课程

一些论文课程提供 `\frontmatter` / `\mainmatter` / `\backmatter`。这些来自“book”类，是表达同一事物的更高层次的方式。 `\frontmatter` 切换到罗马编号并使章节未编号（因此前言没有“第 1 章”标签）。 `\mainmatter` 切换到阿拉伯语并恢复编号的章节。 `\backmatter` 在末尾再次关闭类似附录的材料的章节编号。如果您的大学的模板是基于“book”或“memoir”构建的，则更喜欢这些命令而不是原始的“\pagenumbering”，因为模板可能会将额外的行为附加到它们上，例如前面内容的不同标题。这两种方法并不冲突，但没有理由同时使用这两种方法。

## 一件事要检查

罗马编号的页面应该与您的目录一致。如果你的摘要在目录中显示为“iv”页，但打印为“2”，通常的原因是在其应该涵盖的内容之后放置了“\pagenumbering”调用，或者缺少第二次编译：目录中的页码来自“.aux”文件，因此在判断编号是否正确之前需要[编译两次](/learn/compile-to-pdf/)。编译，再次编译，然后将目录与实际页面进行比较。