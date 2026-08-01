---

title: "编译您的第一个 PDF"
description: "一篇小文章，一次编译，以及让您充分利用 LaTeX 的三个想法。"
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# 编译你的第一个 PDF

如果您只用过 Word 或 Google Docs，那么 LaTeX 会要求您改掉一个习惯。您无需在键入时设置文本格式，而是以纯文本描述文档，然后让程序为您排版。该纯文本位于“.tex”文件中：您可以在任何编辑器中打开的普通文本文件，其中包含您的文字以及“\section{...}”等命令，说明每个部分*是什么*。编译将此源文件转换为完成的 PDF。 LaTeX 引擎从上到下读取您的文件，解释每个命令，布置页面并写入 PDF。您永远不会直接格式化输出。您编辑源代码并再次编译。

## 最小的真实文档

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

从上到下阅读。 `\documentclass{article}` 告诉引擎这是什么类型的文档，它为字体、边距和标题样式设置了合理的默认值。 `\title`、`\author` 和 `\date` 行仅存储元数据；还没有打印任何内容，“\today”仅表示您编译的日期。 `\begin{document}` 标记实际内容的开始位置。 `\maketitle` 是存储的标题块出现在页面上的时刻。 `\section{Introduction}` 打印一个编号标题并悄悄记录它，以便稍后在目录中找到它。最后几行显示了数学的两个方面：“$...$”在句子中排版公式，而“\[ ... \]”则为其提供了自己的居中显示线。

## 承载语言的三个想法

1. 命令以反斜杠开头，通常采用大括号中的参数，因此 `\textbf{hello}` 表示“以粗体排版 hello”。
2. 环境在“\begin{...}”和“\end{...}”之间包裹一个区域，文件的主体本身就是一个大的“文档”环境。
3. 序言是`\begin{document}`之前的所有内容；它配置文档但从不生成可见文本。

LaTeX 中的几乎所有其他内容都是这三者的变体。

## 编译它

在 [Oleafly](/docs/getting-started/) 中，创建一个项目，粘贴上面的源代码，然后编译。 PDF 出现在源代码旁边，SyncTeX 链接两侧：单击 PDF 中的某个位置可跳转到匹配的源代码行，反之亦然。当引擎获取它需要的内容时，项目的第一次编译可能需要更长的时间；后来的跑步速度更快。

可以预料到的一件事是：编译迟早会失败，并显示错误消息和行号。这是完全正常的，通常意味着命令名称中有拼写错误或缺少右大括号。修复它指向的行并再次编译。

＃＃ 下一个

继续[序言，解释](/learn/preamble-explained/) 查看设置行的真正作用，然后[数学模式](/learn/math-mode/) 查看公式。在编写第一个真实页面时，请保持 [cheatsheet](/learn/cheatsheet/) 打开。