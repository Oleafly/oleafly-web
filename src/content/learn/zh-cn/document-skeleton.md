---

title: "可以重复使用的骨架"
description: "类、序言、标题、章节、参考书目：几乎每篇论文的形式。"
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# 一个可以重复使用的骨架

除去内容，几乎每个 LaTeX 文档都有相同的骨架：类声明、设置前言以及 `\begin{document}` 和 `\end{document}` 之间的正文。一旦你知道了这个形状，就可以通过粘贴骨架、更改标题和书写来开始一个新项目。

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

从上到下阅读：`\documentclass[11pt]{article}` 选择文档类型并将基本字体大小设置为选项。设计中的其他一切都源于此选择。类行和“\begin{document}”之间的区域是[序言](/learn/preamble-explained/)，其中加载包并存储“\title”和“\author”等元数据。 `\begin{document}` 标记可见内容的开始位置，`\maketitle` 排版存储的标题块，正文后面是章节、图表，最后是参考书目。 `\end{document}` 关闭文档。它后面的任何内容都会被默默地忽略，这有时会隐藏有人粘贴在错误位置的一大块文本。

## 班级选择

|班级 |使用|
| --- | --- |
| `文章` |论文、作业、笔记 |
| `报告` |包含章节的较长报告 |
| `书` |书籍和许多论文|
| `投影仪` |幻灯片|

这个类不是装饰性的；它改变了存在的命令。 `article` 没有 `\chapter`，因此将论文章节粘贴到其中会立即失败。 “报告”添加了章节并为标题提供了自己的页面。 “book”采用双面打印并在右侧页上打开章节。 “beamer”重组了幻灯片框架周围的所有内容。期刊和会议都有自己的类别，当你为某个场所写作时，它的类别完全取代了这个决定。

大多数骨骼断裂的原因有两个。放置在 `\begin{document}` 之前的文本会触发错误“Missing \begin{document}”，因为序言只能配置，而不能打印。缺少“\end{document}”会使编译器在文件末尾等待，并显示有关输入结束的无用消息。当出现任何一种情况时，请在怀疑内容之前检查文档的框架。

骨骼有鳞片。四页纸的注释使正文保持一致；论文将每一章移动到其自己的文件中，并将它们从根中拉入，如[分割章节文件](/learn/split-chapter-files/)所示。他们周围的框架没有改变。