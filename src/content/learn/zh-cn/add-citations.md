---

title: "从 .bib 键到文本内引用"
description: "通常的 BibTeX 循环带有引用和参考书目命令。"
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# 从 .bib 键到文本引用

在 LaTeX 中引用源涉及两个部分：一个对每项作品进行一次描述的纯文本数据库，以及文档中的一个通过关键字指向条目的“\cite”命令。 LaTeX 对引文进行编号，格式化参考列表，并在重新排序部分或添加来源时保持所有内容一致。您永远不会手写“[12]”，也永远不会自己重新编号。

## 文档中的命令

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` 在引用所属的位置插入文本内标记。底部的两个命令完成其余的工作：“\bibliographystyle{plain}”选择引文和参考文献的格式，“\bibliography{refs}”命名数据库文件（不带“.bib”扩展名）并标记参考文献列表应打印的位置，通常位于“\end{document}”之前。只有您实际引用的来源才会出现在列表中。

## 数据库中的条目

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

它位于“refs.bib”中，它是“main.tex”旁边的一个单独文件。 “@”后面的单词是条目类型，“knuth84”是引用键，其余是样式用于构建格式化参考的字段。键是两个文件之间的唯一链接，因此它必须与“\cite”的参数完全匹配，包括大小写。您可以使用 [BibTeX 验证器](/tools/bibtex-validator/) 检查整个数据库是否有缺失字段和格式错误的条目。

## 为什么一次编译是不够的

参考书目是由一个单独的程序构建的。在第一次 LaTeX 传递中，文档将引用的键列表写入辅助文件中。然后，“bibtex”程序读取该列表，从“refs.bib”中提取匹配的条目，并格式化它们。另外两个 LaTeX 通道将结果折叠回去并解析文本内标记。 Oleafly 在每次编译时都会为您运行这个完整的周期。如果您手动构建并跳过中间步骤，引用将显示为粗体问号；发生这种情况时，请参阅[清除神秘引文标记](/learn/itation-question-mark/)。

## 从这里到哪里去

一个“.bib”文件可以满足您撰写的每一篇论文，因此仔细构建它是值得的。 [构建持久的 .bib](/learn/create-bibliography/) 涵盖可保存十年的条目类型、必填字段和键。当场所想要不同的外观时，您可以更改一行而不是任何条目，如[数字、作者年份、期刊样式](/learn/change-itation-style/)中所述。