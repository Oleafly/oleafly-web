---

title: "问号而不是数字"
description: "标签需要再次通过；标签放置在字幕之后。"
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 用问号代替数字

编译后，PDF 中应出现数字或方程编号的位置会显示“??”。这不是您的来源中的错误。这就是 LaTeX 渲染尚未解析的引用的方式，而修复通常只需再次编译即可。

## 为什么一次通过还不够

LaTeX 一次性从上到下读取您的文档。当遇到`\label`时，将当前数字写入`.aux`文件中；当它遇到“\ref”时，它会从上次运行写入的“.aux”文件中查找数字。在新的编译中，没有先前的运行，因此每个引用都打印为“??”。第二遍读取完整的“.aux”文件并填充数字。Oleafly 的捆绑编译器会自动重新运行，直到数字稳定下来，但如果您手动驱动“pdflatex”，则第二次编译就是您的工作。

＃＃ 什么时候 ？？在第二次通过后幸存下来

如果问号仍然存在，请进行三项检查。首先，逐个字符比较`\ref`和`\label`中的拼写；标签区分大小写，并且杂散空格也很重要。其次，检查标签所在的位置。 `\label` 记录最近步进计数器的值，在浮点数中是 `\caption` 步进计数器，因此标签必须位于标题之后：

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

放置在标题之前的标签可以毫无抱怨地进行编译，但会获取错误的计数器（通常是当前部分），因此引用会打印一个看似合理但错误的数字，而不是“??”。这种变体更糟糕，因为它很容易被错过。第三，如果‘.aux’文件在运行中被删除或者编译被中断，则记录的标签可能不完整；从干净的状态重新编译。

## 阅读警告

日志会告诉您属于哪种情况。“存在未定义的引用”意味着至少有一个“\ref”什么也没找到。 “标签可能已更改。重新运行以获得正确的交叉引用”意味着另一遍将修复它。 “标签多重定义”意味着两个 `\label` 命令共享一个名称，并且 LaTeX 默默地使用其中之一，因此重命名直到每个标签都是唯一的。使用“eq:”、“fig:”和“tab:”前缀的命名约定使得冲突很少发生，并且源代码更容易搜索；标签工作流程本身包含在[方程的数字和指针](/learn/number-equations/) 中。