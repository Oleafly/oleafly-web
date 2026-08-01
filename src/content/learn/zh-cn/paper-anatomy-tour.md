---

title: "一张纸，从上到下"
description: "步行游览研究论文的每个部分以及每个部分所做的一项工作。"
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# 一张纸，从上到下

研究论文看起来很吓人，直到您意识到它们每次都是由相同的十几个零件以大致相同的顺序组装而成。一旦了解了每个部分的工作，您就可以更快地阅读和撰写论文，而无需盯着空白页。这是游览。

## 前面的事情

|部分|这是一份工作 |
|---|---|
|标题 |让正确的读者停止滚动。 |
|作者 |说明谁完成了这项工作以及向谁发送电子邮件。 |
|摘要|用 150-250 字出售整篇论文。 |
|关键词|帮助搜索引擎和索引器正确归档您。 |

标题和摘要起到了招聘的大部分作用。百分之九十的潜在读者不会看到其他任何东西，这就是为什么[摘要有自己的教训](/learn/write-an-abstract/) 和[标题页有自己的 LaTeX 机制](/learn/title-page/)。

## 身体

|部分|这是一份工作 |
|---|---|
|简介 |解释为什么问题很重要以及您的贡献。 |
|相关工作|将您的工作置于之前的所有工作之中。 |
|方法|准确地描述您所做的事情以重现。 |
|实验/结果 |证明该方法有效。 |
|讨论 |诚实地解释证据，包括证据薄弱的地方。 |
|结论 |重申要点并指出接下来要做什么。 |

正文是分阶段讲述的一个论点：这是一个问题，这是我们的想法，这是它有效的证据，这是它的含义。如果某个部分没有推进该论点，那么它就是填充。有关每个内容的更多信息，请参阅[简介和相关工作](/learn/introduction-and-lated-work/) 和[机房部分](/learn/methods-results-discussion/)。

## 后面的事情

|部分|这是一份工作 |
|---|---|
|致谢 |感谢资助者、帮助者和草稿审阅者。 |
|参考文献 |列出您引用的每个来源，并根据场地规则进行格式化。 |
|附录|保留校样、额外的表格和会破坏流程的细节。 |
|补充材料|携带不适合 PDF 的代码、数据和视频。 |

参考文献不是装饰，它们是你的主张所依据的证据。请参阅[脚注、参考文献和附录](/learn/footnotes-references-appendix/) 了解谁阅读了什么内容，以及[引文](/learn/add-itations/) 了解 LaTeX 机制。

## LaTeX 中的骨架

其中大部分直接映射到您已经知道的命令：

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

分段命令会为您处理编号和目录，如[章节和结构](/learn/sections/) 中所述。

## 下一步去哪里

如果您对论文这一类型是全新的，请从[研究论文实际上是什么](/learn/what-is-a-research-paper/) 开始。如果您打算写一个，本课程的其余部分将按顺序浏览每个部分，从[摘要](/learn/write-an-abstract/)到[您实际需要多少数学](/learn/how-much-math/)。读你卡住的部分，写下来，重复。