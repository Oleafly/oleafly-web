---

title: "您发明一次的运算符"
description: "为 argmin、argmax 和类似名称声明 MathOperator。"
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 你发明一次的运算符

LaTeX 附带了诸如 `\sin`、`\log` 和 `\max` 之类的命名运算符，它们以直立类型打印，周围有正确的间距。它不附带 `\argmin` 或 `\argmax`，尽管优化论文经常使用它们。如果您在数学模式下以普通字母形式输入“argmin”，LaTeX 会将其视为六个变量的乘积：字母以斜体显示，挤压在一起，没有运算符间距。在序言中自己声明一次运算符。

## 声明运算符

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

这是每个部分的作用。 `\DeclareMathOperator` 来自 `amsmath` 并创建一个新命令，其参数被排版为运算符文本：直立罗马字母，并且 LaTeX 的间距规则已应用于 `\max` 和 `\lim`。第一个参数是您将键入的命令名称，第二个参数是实际打印的文本。 `arg\,min` 内的 `\,` 在两个单词之间插入一个细空格，这比将它们放在一起读起来更好。

`\DeclareMathOperator` 之后的星号很重要。带星号的声明使运算符的行为类似于“\lim”：在显示数学中，用“_”附加的任何内容都直接位于运算符下方，而不是尾随其右下角。这正是您想要的“\argmin_\theta”，其中正在优化的变量应该出现在下面。如果没有星号，下标将保留在一侧，这是“\log_2”等运算符的惯例。在内联数学中，无论哪种方式，下标都位于侧面，以避免拉伸行高。

## 重用模式

同样的技术涵盖了您所在领域使用的 LaTeX 不知道的任何运算符。几个常见的：

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

请注意，“\tr”、“\rank”和“\diag”未加星号，因为它们的下标（当它们有下标时）属于旁边。只有诸如“\esssup”之类的限制式运算符才能获得星号。

在序言中声明运算符而不是内联编写 `\mathrm{argmin}` 会获得双重回报。整个文档中的符号保持一致，如果期刊要求不同的渲染，您可以更改一行，而不是搜索每个方程式。在 [live Playground](/live/) 中一起尝试声明和显示行，看看加星标的下标放置的行为如何。

一个常见的错误：声明一个名称与现有命令冲突的运算符，例如“\max”或“\deg”。 LaTeX 将因“已定义”错误而停止。选择一个新名称，或者仅当您确实打算替换原始名称时才使用“\renewcommand”。