---

title: "定理和证明块"
description: "amsthm 样式、共享计数器、验证结束标记。"
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 定理和证明块

数学写作以编号陈述为基础：定理、引理和定义，每个陈述都与文本分开并编号，以便以后的证明可以引用它们。 “amsthm”包提供机械。您可以在序言中声明文档所需的块类型，然后将它们用作普通环境。

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## 声明环境

`\newtheorem{theorem}{Theorem}[section]` 创建一个 `theorem` 环境。第一个参数是您要输入的环境名称，第二个参数是打印的标题文本，后面的“[section]”将编号与各节联系起来，因此第 2 节的第三个定理是定理 2.3，并且计数器会在每个新节处重置。

`\newtheorem{lemma}[theorem]{Lemma}` 将可选参数放在另一个位置，这意味着不同的东西：`[theorem]` 表示引理共享定理计数器而不是保留自己的定理计数器。共享计数器产生单个序列，即定理 2.1 和引理 2.2。这比引理 2.1 和定理 2.1 都存在的并行序列更容易遵循。

`\theoremstyle` 设置其后面的每个声明的外观。 “plain”风格以斜体显示正文，这是定理、引理和命题的传统处理方式。 “定义”风格使身体保持直立，适合定义和示例。第三种风格，“评论”，更轻松，适合笔记和观察。根据每个声明应使用的样式对声明进行分组。

## 使用块

环境的可选参数在标题后打印一个名称，因此 `\begin{theorem}[Optional name]` 会产生类似定理 2.4 (Fubini) 的结果。 “校样”环境打印斜体校样标题，并以校样结束标记结束，小方块设置在右侧。

当证明不是以普通文本结束时，`\qedhere` 会重新定位该方块。如果证明的最后一行是显示的方程，则自动标记将落在其下方的空行上。在显示屏内写入“\qedhere”会将正方形放在方程自己的行上。当证明以纯文本结尾时（如示例所示），该命令是无害的，但没有必要。

定理块与其他对象一样都是编号对象，因此环境中的“\label{thm:main}”和文本中的“Theorem~\ref{thm:main}”使用[方程的数字和指针](/learn/number-equations/)中描述的通常的两遍规则。常见的声明错误是将每个环境都放在“\theoremstyle{plain}”下，这将多段落定义设置为斜体。将定义和示例保留在“定义”样式下。