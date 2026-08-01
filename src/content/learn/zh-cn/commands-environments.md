---

title: "命令还是环境？"
description: "宏接受参数；环境包裹区域。"
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# 命令还是环境？

除了纯文本之外，您在 LaTeX 中键入的所有内容都采用两种形状之一：命令或环境。在您遇到第一条错误消息之前，这种区别听起来很学术。对 LaTeX 的抱怨中有一半是关于其中一种被用在另一种所属的地方的。了解您正在查看的形状可以使文档和错误都变得可读。

## 命令

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

命令是一个反斜杠后跟一个名称，它在它出现的位置执行替换。 `\textbf{argument}` 将一个参数放在大括号中并将其排版为粗体；效果以大括号开始和结束。命令可以采用多个大括号参数，并且许多命令还接受前面的方括号中的可选参数，如 `\documentclass[11pt]{article}` 中。

前两行显示命令是您可以创建的。 `\newcommand{\foo}{bar}` 定义了一个名为 `\foo` 的新命令，其扩展是文本 `bar`，从那时起，在任何地方输入 `\foo` 都会生成 `bar`。这是[自定义宏](/learn/custom-commands/)背后的机制，也是包的工作方式：包主要是命令定义的文件。

有一个值得尽早了解的怪癖：像“\LaTeX”这样的命令会吞掉它后面的空格，因此“\LaTeX is fun”会打印出一起运行的单词。写“\LaTeX{} is fun”或“\LaTeX\ is”以保留空间。

## 环境

```latex
\begin{center}
 Centered block
\end{center}
```

环境将文档的一个区域包装在匹配的“\begin{...}”和“\end{...}”对之间，并将其行为应用于内部的所有内容。这里的“center”环境将块的每一行居中。环境可以嵌套，前提是它们以与打开时相反的顺序关闭，并且它们也可以接受参数：`\begin{tabular}{ll}` 打开一个表并向其传递一个列规范。

因为环境必须平衡，所以它们会以独特的方式失败。诸如“\begin{itemize} returned by \end{document}”之类的错误意味着环境已打开且从未关闭。找到缺少的`\end`；不要盯着错误名称行。

## 经验法则

如果它包含一个具有明确起点和终点的区域，那么它可能是一个环境。如果它是一个小的替换或开关，那么它就是一个命令。这两个形状甚至重叠：每个环境“foo”在底层都是作为命令对“\foo”和“\endfoo”实现的。要了解您最常遇到的命令和环境，请参阅[每个命令解释](/learn/every-command-explained/)，或在[现场游乐场](/live/) 中尝试这两种形状。