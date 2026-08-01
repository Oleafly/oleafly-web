---

title: "标题栏和标题页"
description: "为论文制作标题，为论文和报告制作标题页。"
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# 标题栏和标题页

一篇论文以标题栏打开：标题、作者、日期，设置在第一页的顶部。论文以按照大学规范布置的完整标题页开始。 LaTeX 将这些视为两个不同的问题。第一个是由“\maketitle”自动化的，第二个是称为“titlepage”环境的空白画布。

## 标题栏

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

前三个命令仅存储元数据。当它们运行时，PDF 中不会出现任何内容，这就是它们可以出现在序言中的原因。 `\maketitle` 位于 `\begin{document}` 之后，是存储块排版的时刻。在“\author”内部，“\\”换行（这是在名称下添加隶属关系的常用方法），“\and”分隔多个作者，以便将它们并排设置。 `\date{\today}` 打印您编译的任意一天的日期。使用空大括号编写“\date{}”以完全省略日期行。完全忽略“\date”仍然会打印今天的日期。

在“article”类中，该块位于第一页的顶部，下面是文本。在“报告”和“书籍”中，它有自己的一页。期刊和会议类用它们自己的关系、电子邮件和 ORCID 命令替换了该机制，因此在场所模板内，您应该遵循其示例文件而不是标准命令。

## 手工制作的标题页

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

“titlepage”环境为您提供了一页未编号的页面和完全手动控制，这是论文法规通常要求的。该示例的每一部分都赢得了自己的位置。 `\centering` 将环境中的所有内容居中。 `\vspace*{2cm}` 将标题从顶部边缘向下推。加星号的形式很重要，因为页面顶部未加星号的“\vspace”会被丢弃。 `{\Large ...}` 周围的大括号会改变字体大小，因此它会在组结束的地方结束，而 `\\[1em]` 会在行下方添加一个额外的 em 空间来打破行。 `\vfill` 插入可拉伸的空间，吸收剩余的高度，因此无论标题有多长，度数声明和日期都会位于页面底部。

使用一种机制或另一种机制。将 `\maketitle` 与 `titlepage` 环境结合起来会生成两个标题页，而初学者最容易错过的就是安静的标题页：定义 `\title` 和 `\author` 但忘记了 `\maketitle`，因此文档编译干净，根本没有标题。 [文档骨架课程](/learn/document-sculpture/) 显示了块在整个文件中的位置。