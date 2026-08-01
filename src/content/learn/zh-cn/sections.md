---

title: "标题本身编号"
description: "逐段、加星号的表格、secnum深度。"
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# 标题本身编号

在文字处理器中，您需要手动对标题进行编号，并在每次移动标题时手动重新编号。 LaTeX 拒绝让你这样做。您可以声明每个标题是什么，一个节或一个小节或一个章节，编号会自行处理。在文档中间插入一个新部分，并在下次编译时重新编号后的所有内容，以及指向它的每个交叉引用和每个目录条目。

## 层次结构

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

这些命令形成了一个固定的梯子。 `\section` 是 `article` 类中的日常主力，`\subsection` 和 `\subsubsection` 嵌套在它下面。 `\chapter` 仅存在于 `report` 和 `book` 类中，这就是为什么将论文章节粘贴到文章模板中会失败并出现未定义的控制序列的原因。 `\part` 位于章节之上，在长篇书籍之外很少见。 `\paragraph` 是一个奇怪的地方：它在与以下文本相同的行上生成一个粗体插入标题，而不是在自己的行上生成一个标题，这几乎让每个人第一次都感到惊讶。

每个命令都采用大括号中的标题文本，以类选择的字体和大小打印它，对其进行编号，并记录它，以便“\tableofcontents”稍后可以找到它。你永远不会内嵌标题样式。如果您想要不同的标题字体，这是在序言中做出的整个文档范围的决定。

## 抑制数字

带星号的表格会抑制数字：`\section*{致谢}`。星标还使标题完全脱离目录和编号序列，因此其后面的部分会继续存在，就好像加星标的部分不存在一样。这正是您在短论文中想要的致谢、序言或独立结论。如果加星号的部分仍应出现在目录中，[目录课程](/learn/table-of-contents/) 中包含一行修复。

## 控制编号深度

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdepth` 决定编号的深度。在“article”中，章节为级别 1，小节级别为 2，子小节级别为 3，因此将计数器设置为 2 个数字节和小节，但使子小节标题保持未编号，同时保持其格式。 `tocdepth` 与目录的想法相同：它控制目录列表的深度，与页面上的编号无关。这两行都属于序言。

一个常见的错误是跳过级别，例如从“\section”直接跳到“\subsubsection”，因为您喜欢较小的标题。编号仍然有效，但会产生奇怪的结果，例如“1.0.1”，并且读者会忘记结构。选择标题级别的含义并让班级处理外观。如果您不确定文档的骨架如何组合在一起，[文档骨架课程](/learn/document-sculpture/) 将逐步介绍它。