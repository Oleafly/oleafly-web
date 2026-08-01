---

title: "一个根文件，多个章节"
description: "include 与 input、includeonly 以及一次起草一章。"
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# 一个根文件，多个章节

单个“.tex”文件中的论文在第二章左右的某个地方变得很痛苦：滚动取代了思考，每次编译都会处理一切。标准的解决方案是一个包含类和序言的根文件，每一章都在其自己的文件中。根文件将它们缝合在一起。

## 根文件

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` 是您编译过的唯一文件。每个“\include”都在每个平台上使用正斜杠命名另一个不带“.tex”扩展名的文件，并在该点提取其内容。章节文件本身仅包含内容，通常以“\chapter{...}”开头。它们没有自己的`\documentclass`和`document`环境，因为它们是这个文档的片段，而不是文档。

## 包含与输入

两个包含命令的行为不同，差异决定了在何处使用哪个命令。 `\include` 在材料之前开始一个新页面，这适合章节，并为每个包含的文件编写一个单独的 `.aux` 文件，这使得选择性编译成为可能。 `\input` 是纯文本粘贴：没有分页符，没有单独的 `.aux`，并且它可以嵌套在另一个输入中。这使得“\input”成为小于一章的片段的正确工具，例如保存在自己的文件中的大表或共享的[宏文件](/learn/custom-commands/)。要记住的一个结构规则是“\include”不能嵌套在包含的文件中，而“\input”可以在任何地方使用。

## 一次起草一章

```latex
\includeonly{chapters/methods}
```

放置在序言中的“\includeonly”告诉 LaTeX 仅处理列出的文件，同时仍然读取所有其他文件保存的“.aux”数据。编译速度显着加快，并且由于其他章节的标签和页数是从其“.aux”文件中重播的，因此您正在起草的章节中的交叉引用和编号保持正确。后半部分是更喜欢这个而不是注释掉`\include`行的原因，后者完全忘记了其他章节并将每个`\ref`变成了`??`。

对完整构建的“\includeonly”行进行注释，并始终在共享 PDF 之前运行完整的编译，因为过时的“.aux”数据可能会落后于排除章节中所做的编辑。对于结果文件夹中的哪些文件是您的以及哪些文件是生成的，请参阅[真实项目中的文件](/learn/latex-file-types/)。