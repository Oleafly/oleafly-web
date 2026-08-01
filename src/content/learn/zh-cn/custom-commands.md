---

title: "保持符号诚实的宏"
description: "newcommand、NewDocumentCommand、共享宏文件。"
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# 保持符号诚实的宏

每篇论文都有重复的符号：实数、期望运算符、带有适当大小条形的绝对值。如果您在四十处输入“\mathbb{R}”，并且您的顾问后来更喜欢“\mathbf{R}”，则您需要进行四十次编辑，并且您将错过其中一项。宏将该符号转换为单个命名命令，定义一次。更改定义，整个文档如下。这就是保持符号诚实的方法：源不能与其自身不同步。

## 使用 newcommand 定义命令

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

第一个定义是最简单的：“\R”现在是纯粹的简写，在任何地方键入“\R”都会生成“\mathbb{R}”。

第二种形式需要一个参数。名称后面的“[1]”声明“\E”接受一个参数，“#1”标记该参数在扩展中的位置。所以 `\E{X}` 就变成了 `\mathbb{E}\left[X\right]`。该定义不仅仅是简洁：“\left[”和“\right]”对使括号增大以适合内部的内容，因此“\E{\frac{X}{n}}”自动获得高括号。 `\abs` 宏与 `\lvert` 和 `\rvert` 执行相同的操作，这是绝对值的正确竖线对。您最多可以声明九个参数，并将它们称为“#1”到“#9”。

如果命令已经存在，“\newcommand”将拒绝重新定义它并因错误而停止，这可以防止您默默地破坏某些内容。要有意替换现有命令，请使用“\renewcommand”。

## 现代界面

当前的 LaTeX 还提供了更丰富的定义命令：

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` 使用参数规范字符串而不是计数。这里“mm”表示两个强制参数，因此“\citepair{knuth84}{lamport94}”引用了这两个键。规范语言比“\newcommand”更进一步：“o”在方括号中声明可选参数，“s”检测星号变体，“O{default}”为可选参数提供默认值。对于简单替换之外的任何内容，请使用此界面。

## 分享定义

保持跨章节共享的“macros.sty”。将您的定义放入该文件中，使用每个文档中的“\usepackage{macros}”加载它，论文的每一章，加上幻灯片和纸质版本，都在符号上达成一致。当协作者加入时，他们会阅读一个短文件来了解您的约定，而不是从文本中进行逆向工程。这自然与[多文件设置](/learn/split-chapter-files/)配对。

命名技巧：为宏提供有意义的名称，如“\abs”或“\norm”，而不是基于外观的名称，如“\bigbars”。名称应该说明符号的含义，因此定义可以自由更改其外观。并拒绝为您使用两次的东西定义宏；第三次使用左右开始回报。