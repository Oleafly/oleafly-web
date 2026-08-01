---

title: "算法和源列表"
description: "Algorithm2e 草图和真实代码清单。"
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# 算法和源列表

论文以两种不同的形式呈现代码，而 LaTeX 为每种形式提供了单独的工具。伪代码是算法的理想化草图，用关键字和数学进行排版，“algorithm2e”包可以处理它。源列表是以等宽字体逐字复制的真实代码，“listings”包处理这些。选择错误的工具通常是摩擦的根源，因此了解两者都会有所帮助。

## 使用算法2e 的伪代码

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

包选项设置视觉样式：“ruled”在算法上方和下方绘制水平规则，并将标题放置在顶部，这是大多数场地所期望的约定，而“vlined”则绘制一条小垂直线，标记每个块的范围，因此嵌套保持可读，无需大量缩进。 “algorithm”环境是一个浮点数，就像一个数字，因此它带有“\caption”，为它提供了“\ref”引用的数字。

在内部，`\While{condition}{body}` 使用粗体关键字、条件和正文将循环排版为缩进块。 `\For`、`\If` 和 `\Return` 遵循相同的模式。语句以“\;”结尾，它打印行的终止符并开始新行。忘记这一点是典型的初学者错误：线条连在一起。因为这是普通的 LaTeX，像 `$\theta$` 这样的数学是内联的，这就是伪代码的用途：用符号而不是任何特定的语言来描述更新规则。

## 带有清单的真实代码

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

“lstlisting”环境准确地再现其内容，保留空格并按字面处理特殊字符，因此您可以粘贴代码而无需转义任何内容。 `language=Python` 选项打开该语言的关键字突出显示，并且 `listings` 知道许多其他语言。默认情况下，输出是普通的。大多数人在序言中添加一次性的“\lstset{basicstyle=\ttfamily\small,numbers=left}”，以获得带有行号的合理大小的等宽字体。要直接包含文件而不是粘贴，`\lstinputlisting[language=Python]{train.py}` 从磁盘读取它，这使论文与实际源保持同步。如果您想要彩色、高保真突出显示，“minted”包是更强大的选择，但代价是需要外部工具和 shell 转义。

## 在它们之间进行选择

在论文正文中使用伪代码来传达想法，并为需要精确代码的工件保留逐字列表，例如附录或工具描述。一个常见的错误是将“lstlisting”放置在没有“[fragile]”选项的Beamer框架内，这会失败并出现不透明错误；同样的警告出现在[第一个 Beamer 甲板](/learn/beamer-basics/) 中。