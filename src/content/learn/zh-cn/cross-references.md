---

title: "指向 PDF 的其他部分"
description: "label 和 ref，以及用于自动名称的 Cleveref。"
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 指向 PDF 的其他部分

手动输入“参见图 3”是您无法兑现的承诺。在论文前面添加一个数字，并在错误之后添加每个手写数字。 LaTeX 通过两部分机制解决了这个问题：“\label”将您选择的名称附加到编号的事物上，“\ref”打印该事物最终的任何数字。您引用名称，编译器会保持数字的真实性。

## 标签和参考

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` 记录了键 `sec:methods` 下最近分配的编号，这里是节的编号。稍后， `\ref{sec:methods}` 打印该数字，而 `\eqref` 是 amsmath 变体，为方程添加括号约定，打印“(1)”而不是“1”。

这个例子中的两个细节非常重要。首先，在图形内部，标签必须位于“\caption”之后，因为标题是图形计数器的步骤；放置在其前面的标签会默默地选取当前的节号。其次，“Figure~\ref{...}”中的“~”是一个不间断空格，它将单词及其编号保持在同一行，而不是让“Figure”结束一行，“3”开始下一行。

`sec:`、`fig:` 和 `eq:` 前缀是纯粹的约定。 LaTeX 不需要它们，但它们使按键可读，并让编辑器自动完成按类型对标签进行分组。

## 为什么你会看到？

在添加标签后的第一次编译中，“\ref”打印“??”。数字是通过上次运行时写入的“.aux”文件解析的，因此新标签需要再编译一次才能出现； [为什么要编译多次](/learn/compile-to-pdf/) 解释了其中的机制。在两次连续编译中幸存的“??”几乎总是意味着“\ref”中的键与“\label”中的键不匹配。

## smartef 为你写下这个词

使用 smartef （在 hyperref 之后加载）：

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` 打印“图 3”，包括类型名称，如果标签变成表格或方程，则进行调整。 `\Cref` 将句子开头大写，而 `\cref{eq:a,eq:b,eq:c}` 将列表压缩为一个范围。请注意加载顺序：cleveref 是必须位于 [hyperref](/learn/hyperlinks/) 之后的少数几个包之一，与通常的规则相反。尽早采用。将 `\cref` 改造为充满手写“Figure~\ref”短语的论文是乏味的。