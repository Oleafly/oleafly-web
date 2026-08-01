---

title: "位于句子中（或单独）的数学"
description: "内联数学、显示数学、方程环境以及何时值得进行编号。"
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# 位于句子中（或单独）的数学

LaTeX 将数学视为一种独立的模式，具有自己的字体和间距规则。每个变量、公式和符号都必须存在于数学模式中，无论是句子中的单个 n 还是完整的方程。有两种类型：段落内的内联数学流，以及显示数学位于其自己的行的中心，带或不带数字。

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## 内联数学

一对美元符号，如“$E=mc^2$”，将公式设置为行内的文本大小。这些字母以数学斜体显示，等号周围的间距已为您处理。 `\(E=mc^2\)` 是等效的 LaTeX 原生形式。它产生相同的输出，并且由于其开始和结束分隔符不同，未闭合的输出会给出更清晰的错误消息。即使对于单个变量名称也可以使用内联数学，因此散文中的 n 与方程中的 n 相匹配。

## 显示数学

`\[ ... \]` 将公式放在自己的中心线上，不带数字。对于您永远不会参考的一次性方程来说，这是正确的选择。避免使用旧的“$$ ... $$”形式。它是纯 TeX 而不是 LaTeX，并且在某些情况下会产生稍微错误的垂直间距。

## 编号方程

“equation”环境显示公式，并在边缘显示一个数字。 `\label{eq:energy}` 为该数字附加一个名称，在其他地方编写 `Equation~\ref{eq:energy}` ，或者在加载了 `amsmath` 的情况下，`\eqref{eq:energy}` ，它会添加括号本身。 “~”是一个不间断的空格，因此单词和数字保留在一行上。引用在第二次编译时解析。如果您在输出中看到“??”，请参阅[问号而不是数字](/learn/equations-show-qq/)。

## 要加载的包

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

几乎每个数学文档都会加载这三个内容。 `amsmath` 提供了大多数课程假设的环境和命令，包括 `align` 和 `\eqref`。 `amssymb` 和 `amsfonts` 添加符号字体和额外的字母，例如 `\mathbb`。将这句话放在序言中一次，然后就忘记它。

典型的初学者错误是数学模式之外的数学语法：纯文本中的下划线会停止编译并显示“插入了缺失的$”，这有[它自己的教训](/learn/missing-dollar/)。要感受这两种模式，请在 [live Playground](/live/) 中键入一个内联的带有 `$x_i$` 的句子，并在 `\[ ... \]` 中输入相同的公式，然后比较每种模式在页面上的位置。