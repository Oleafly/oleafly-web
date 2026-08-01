---

title: "首字母缩略词和符号列表"
description: "词汇表-额外的草图，或者当足够时手工构建的列表。"
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 首字母缩略词和符号列表

长文档会积累缩写，并且围绕它们的约定很严格。首字母缩略词在第一次使用时会完整拼写，然后缩写，论文通常需要在前面列出缩写词列表。手动维护会以可预见的方式失败。您重新排序了两章，第一个使用移动，突然“ML”出现在“机器学习 (ML)”之前三页。 `glossaries-extra` 包会跟踪您的首次使用情况。

## 自动路线

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

`acronym` 选项启用首字母缩略词支持，并且 `\makeglossaries` 打开在编译期间收集条目的机制。每个“\newacronym”都有三个参数：您将在文本中键入的键、短形式和长形式。在序言中或在“\input”的单独文件中定义所有它们，因此它们位于一个位置。

在正文中，您永远不会输入首字母缩略词本身：

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

文档中的第一个 `\gls{ml}` 打印“机器学习 (ML)”，后面的每个都只打印“ML”。由于包跟踪使用情况而不是在源中的位置，因此无论您的重组将其移动到何处，扩展都会跟随第一次使用。 `\printglossaries` 会打印收集的缩写列表，无论您将其放在何处，通常位于目录之后。相关命令涵盖了与此相关的语法：“\glspl”表示复数，“\Gls”表示大写的句子开头。

问题在于构建。在 LaTeX 传递之间，必须运行 `makeglossaries` 帮助程序来对条目进行排序和格式化，否则 `\printglossaries` 不会产生任何结果。完整的 Latexmk 设置会自动处理这个问题。更简单的管道可能不会，而词汇表额外为它们提供了后备。如果您的列表顽固地拒绝出现，则缺少的帮助程序运行是第一个嫌疑人，远远早于文档中的错误。

## 手工构建的路线

对于简单的符号列表，手动维护的“描述”环境通常就足够了：

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

每个 `\item[...]` 将其括号参数打印为粗体标签，并附有以下说明，这正是符号列表的形状。没有首次使用跟踪，但交易品种列表很少需要任何跟踪；不管怎样，符号都是在数学中第一次出现的地方定义的。

诚实的建议是将工具与规模相匹配。具有五个首字母缩略词的论文更容易手动管理。一篇 200 页、有 40 页的论文则不然，而且该软件包的设置成本要高出好几倍。 [列表课程](/learn/lists/) 更详细地介绍了“描述”环境。