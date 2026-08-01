---

title: "强调而不与字体对抗"
description: "textbf、textit、emph、mono，以及为什么 emph 比硬编码斜体更好地嵌套。"
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 强调而不对抗字体

LaTeX 中的强调来自一小组命令，每个命令都将受影响的文本作为大括号参数。 LaTeX 将大多数文字处理程序合并的两个想法分开：应用特定的字体，并将跨度标记为强调的。了解哪个命令可以在样式更改时保持文档一致。

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## 命令

`\textbf` 设置粗体，这是定义中强调强调和词条的标准处理方式。 `\textit` 直接设置斜体类型。 `\texttt` 切换到等宽打字机字体，这是运行文本中文件名、命令和代码标识符的约定。 `\textsc` 设置小型大写字母，常见于参考书目中的作者姓名以及否则会主导一行文本的首字母缩略词。

`\underline` 存在，但在示例中获得了注释。下划线是打字机时代斜体的替代品，在 LaTeX 中它也有一个机械问题：带下划线的文本被放置在一个框中，因此它不能跨行，并且长下划线的短语会溢出页边距。在印刷版式中，斜体起到了下划线的作用。

这些命令是嵌套的，因此当字体提供字体时，`\textbf{\textit{bold italic}}` 将两者结合起来。

## 为什么 \emph

`\emph` 标记的是含义而不是外观：它表示“强调这一点”并让上下文决定如何强调。在直立文本中，它打印斜体。在已经是斜体的文本内部，它会翻转回直立状态，因此强调中的强调仍然可见。斜体文本内的硬编码“\textit”只是保持斜体，内部强调消失。标记意图也会在以后得到回报。类或包可以在一个地方重新定义重点，而无需在整个文档中进行编辑。

经验法则：在散文中使用“\emph”来强调，并保留“\textit”来表示通常为斜体的内容，无论上下文如何，例如书名、外来短语和物种名称。

## 界限和习惯

这些都是文本模式命令，它们在公式中表现不正常。粗体数学符号需要 `\mathbf` 或 `\boldsymbol`，在 [bold math](/learn/bold-math/) 中介绍。抵制堆叠强调，因为当一切都加粗时，就没有什么突出的了。从结构命令（如“\section”）构建标题，而不是手动加粗，因为结构还提供目录和 PDF 书签。 [较大和较小的类型](/learn/font-size/) 对字体大小提出了相同的论点。