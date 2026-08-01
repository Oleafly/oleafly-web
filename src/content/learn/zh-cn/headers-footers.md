---

title: "跑动的头和脚"
description: "标题和页码的 fancyhdr 模式。"
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 奔跑的头和脚

行头是每页顶部的文本条，行脚是其底部的对应部分。在书籍或论文中，它们通常带有章节标题和页码。在提交的论文中，它们可能会包含简短的标题、作者，或者什么也不包含。 LaTeX 的内置页面样式（“plain”、“empty”、“headings”）涵盖了基础知识，但是当您想要特定的组合（例如左侧的标题和右侧的页码）时，您可以使用“fancyhdr”包。

## 标准配方

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

这里的每一行只做一项工作。 `\usepackage{fancyhdr}` 在序言中加载包。 `\pagestyle{fancy}` 将整个文档切换到 fancyhdr 的可配置样式。 `\fancyhf{}` 会清除每个页眉和页脚字段，这很重要，因为 fancyhdr 附带了默认值（页码和节标记），您几乎永远不想与自己的默认值混合。从头开始可以避免意外。

接下来的两行重新填充字段。 `\fancyhead[L]{Short title}` 将文字文本放入标题的左侧槽中，而 `\fancyhead[R]{\thepage}` 将当前页码放入右侧槽中。 `\thepage` 是一个扩展为页码的命令，因此它会在每个页面上自动更新。如果你想把东西放在底部，有一个匹配的`\fancyfoot[L/C/R]{...}`。

最后，“\headrulewidth”控制标题下的细水平线。将其设置为“0.4pt”会绘制细线；将其设置为“0pt”以完全删除规则。 `\footrulewidth` 也存在并且默认为零。

## 双面文档

如果您的文档类使用“twoside”（“book”的默认值），则页面会在偶数和奇数之间交替，并且标题通常会相互镜像。 fancyhdr 使用偶数/奇数选择器来处理此问题： `\fancyhead[LE,RO]{\thepage}` 将页码放在偶数页的左侧和奇数页的右侧，这是读者的拇指找到它的位置。您可以将其与保存当前章节标题的“\leftmark”和“\rightmark”结合起来，以重现经典的书籍布局。

## 章节页面和空的外观

章节开头页面会忽略您花哨的样式，因为“\chapter”在幕后调用“\thispagestyle{plain}”。这是故意的，大多数设计都保留它。如果您希望这些页面裸露，请添加“\fancypagestyle{plain}{\fancyhf{}}”来重新定义“plain”的含义。

一个常见的警告是：fancyhdr 可能会抱怨 `\headheight` 太小。修复方法正是消息所建议的，例如序言中的 `\setlength{\headheight}{14pt}`，或者将 `headheight=14pt` 传递给 [geometry package](/learn/margins-geometry/)（如果您已使用它）。这是一个布局保留，而不是一个错误，但将其静音可以使您的日志保持干净，并使基线网格保持诚实。