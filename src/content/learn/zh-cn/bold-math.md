---

title: "矢量和粗体符号"
description: "mathbf、boldsymbol 和一致的矢量宏。"
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 向量和粗体符号

许多字段将向量和矩阵设置为粗体：**x** 表示向量，**A** 表示矩阵，粗体 beta 表示系数向量。在 LaTeX 中，有两种不同的粗体数学命令，并且它们不可互换。知道要选择哪个，并将选择包含在宏中，可以使整个论文中的符号保持一致。

## 两个命令

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` 将其参数切换为直立粗体罗马字体。它适用于拉丁字母，因此“\mathbf{A}”为您提供了一个实心的直立粗体 A，许多文本都将其用于矩阵。它的局限性是它只涵盖字母和数字：“\mathbf{\beta}”没有任何用处，因为粗体罗马字体根本没有希腊字形，并且 beta 打印不变。

由“amsmath”提供的“\boldsymbol”（技术上是由“amsmath”加载的“amsbsy”中类似“bm”的机制提供的），可以在保持其形状的同时增强您传递给它的任何符号。 `\boldsymbol{\beta}` 生成粗体斜体 beta，而 `\boldsymbol{x}` 生成粗体斜体 x，与普通数学变量的倾斜样式相匹配。如果您的约定是矢量为粗体斜体，那么这就是您想要的命令。

所以实际的分割是：直立粗体拉丁字母，使用`\mathbf`；任何希腊语或应保持斜体的粗体，请使用“\boldsymbol”。

## 定义一次宏

不要在整个文档中键入这些命令，而是在序言中定义语义宏：

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

现在，您可以为向量编写“\vect{x}”，为矩阵编写“\mat{A}”。 “[1]”表示每个宏都有一个参数，“#1”是该参数所在的位置。回报会稍后出现：如果期刊要求向量为直立粗体而不是粗体斜体，您可以编辑一行，以便“\vect”包裹“\mathbf”，并且论文中的每个向量都会在下一次编译时更新。这胜过在 200 个方程中进行搜索和替换。

宏还使源代码中的意图可读。六个月后，“\vect{w}”告诉您 w 是一个向量；裸露的“\boldsymbol{w}”仅告诉您它是粗体。

## 一个常见错误

不要在数学中使用“\textbf”伪造粗体希腊语，也不要使用“\mathbf”并假设它有效。编译并仔细查看：粗体相邻的未粗体测试版在屏幕上很容易被忽略，但在打印中很明显。如果您想快速找到候选者，请将“\boldsymbol{\beta} \mathbf{\beta} \beta”之类的行粘贴到 [live Playground](/live/) 中，然后并排比较三者。要加粗整个方程，包括像“\sum”这样的符号，请查看“bm”包的“\bm”命令，它比“\boldsymbol”处理更多的符号类。

运行文本中的粗体是具有不同命令的不同主题；请参阅[文本中的强调](/learn/bold-italic/)。