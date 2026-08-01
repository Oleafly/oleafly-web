---

title: "单人、二分之一、双人"
description: "setspace 用于整个文档或本地块。"
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 单人、二分之一、双人

默认情况下，LaTeX 将文本设置为单倍行距，并选择适合字体的行之间的距离。这就是一本完成的书的样子，但很多文件都需要更宽松：论文规定通常要求半行距或双倍行距，期刊要求双倍行距的手稿，以便审稿人有空间进行书写。使用“setspace”包更改行距。它可以调整正文文本，而不会破坏文档中应保持单倍行距的部分。

## 文档宽度间距

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

在序言中加载包，然后发出三个声明之一。 `\onehalfspacing` 将整个文档设置为半行距，`\doublespacing` 将其加倍，`\singlespacing` 返回正常，如果您需要中途切换回来，这非常有用。这些声明从其出现的地方起生效，因此将声明放在序言中就涵盖了所有内容。

使用 setspace 而不是手动摆弄 `\baselinestretch` 或 `\linespread` 的原因是它故意保留的内容：脚注、图形和表格标题以及浮动保持单倍行距，这正是论文指南和排版约定所期望的。幼稚的全局拉伸也会使脚注的行距加倍，这读起来很糟糕。

如果您需要快捷方式未涵盖的因子，“\setstretch{1.25}”接受任何乘数。请注意，文字处理器意义上的“双倍间距”对应于 LaTeX 术语中大约 1.66 的拉伸，并且“\doublespacing”已经说明了这一点，因此请抵制编写“\setstretch{2}”的冲动，除非法规确实要求这样做。

## 仅一个块的间距

有时，只有文档的一部分需要不同的间距：长引用、声明页或摘要必须是双倍行距，而其余部分则不需要。

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

`spacing` 环境将给定的拉伸因子（此处为 1.2）应用于 `\begin` 和 `\end` 之间的文本，然后恢复之前有效的内容。该软件包还为常见情况提供了现成的“singlespace”和“doublespace”环境。由于更改的范围受环境影响，因此您不能忘记切换回来，这是在文档中发出裸声明的常见失败模式。

## 一句警告

不要使用行间距来达到页数。拉伸到 1.1 以使论文看起来更长是书中最古老的技巧，并且具有严格格式的场所会运行自动检查来捕获它。 [页数限制指南](/learn/page-limits-without-crimes/) 涵盖了合法的替代方案。保存 setspace 的用途：满足明确的间距要求，然后切换回单间距以用于相机就绪版本。