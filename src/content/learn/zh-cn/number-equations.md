---

title: "方程的数字和指针"
description: "label、ref、eqref 并仅对您想要的行进行编号。"
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 方程的数字和指针

对方程进行编号是一种保证，您稍后会参考它。 LaTeX 处理了该承诺的两部分：“equation”环境分配数字，而标签系统允许您从文档中的任何位置指向它，而无需自己键入数字。

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## 标签和参考文献

`\begin{equation}` 对显示的行进行编号。 `\label{eq:bayes}` 将名称 `eq:bayes` 附加到该数字。名称由您选择，“eq:”前缀使方程式标签与图形和表格区分开来。引用它，“\ref{eq:bayes}”打印裸数字，而来自“amsmath”的“\eqref{eq:bayes}”将其括在括号中以匹配数字在方程旁边的显示方式。更喜欢使用“\eqref”来表示方程，因此两种风格一致。

因为数字是在一次传递中记录并在下一次传递中读取的，所以新的编译会显示“??”，直到下一次运行。 [问号而不是数字](/learn/equations-show-qq/) 涵盖了该周期。

如果从未引用过显示的方程，则不要对其进行编号。使用 `\[ ... \]` 或加星号的 `equation*` 来代替，这样数字只标记读者可能需要再次查找的行。

## 对对齐的一些行进行编号

默认情况下，“align”中的多行派生对每行进行编号，这很少是您想要的。有两个命令调整每行：

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` 抑制其行上的数字，因此这里中间步骤保持未编号，而第一行和最后一行保留其数字和标签。将每个“\label”放在它命名的行上“\\”之前，以便它绑定到正确的数字。全有或全无的捷径是“align*”，它没有任何数字。 [排列的多线方程](/learn/align-equations/) 涵盖了完整的多线环境系列。

常见的错误是写出字面数字，如“参见方程式 3”，当您在其上方插入方程式时，就会中断。始终检查标签并让 LaTeX 在每次编译时重新编号。当您在 [playground](/live/) 中添加和删除 `\notag` 时，您可以实时观看编号更新。