---

title: "经典 BibTeX 或 biblatex"
description: "后端、样式以及日常变化。"
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# 经典 BibTeX 或 biblatex

LaTeX 有两个引用系统，它们读取相同的“.bib”文件，但几乎在其他所有方面都不同。经典 BibTeX 可以追溯到 20 世纪 80 年代：一个小型外部程序使用以自己的基于堆栈的语言编写的样式文件来格式化您的参考文献。 biblatex 是现代的替代品：格式化发生在 LaTeX 本身中，并由一个名为“biber”的帮助程序进行排序和数据处理。这些名字非常相似，令人困惑。请记住，“BibTeX”既是旧程序，又是旧系统，而“biblatex”是一个使用“biber”作为后端的 LaTeX 包。

| | BibTeX |比布拉克斯+比伯|
| --- | --- | --- |
|年龄 |经典|现代|
|风格 | `.bst` | `.bbx`/`.cbx` |
|统一码 |脆弱|强|
|期刊支持|通用|成长|

## 这些差异在实践中意味着什么

样式行最重要。 BibTeX 样式是“.bst”文件，几乎没有人可以阅读或修改，因此您可以采用期刊提供的内容。 biblatex 样式是普通的 LaTeX，分为参考书目 (`.bbx`) 和引文 (`.cbx`) 组件，并且诸如删除 URL 或更改标点符号之类的小更改是单行自定义。如果您的引用包含带重音的名称或非拉丁脚本，则 Unicode 行很重要。经典 BibTeX 会破坏它们，除非每个字符都被转义为 `\'{e}` 和朋友，而 biber 本身处理 UTF-8。最后一行是经典 BibTeX 幸存下来的原因：大多数期刊和会议仍然分发“.bst”文件并期望经典的工具链，而提交系统通常拒绝其他任何内容。

## biblatex 文档是什么样的

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

与经典模式相比，“\addbibresource{refs.bib}”（带有扩展名）移到了序言中，“\printbibliography”取代了“\bibliography{refs}”，并且没有“\bibliographystyle”行，因为样式是包选项。构建必须运行 `biber` 而不是 `bibtex`；运行错误的后端是导致[空参考书目](/learn/bibliography-empty/) 的常见原因。

## 如何选择

让场地决定何时可以。如果模板附带了“.bst”文件或作者说明提到了 BibTeX，请使用经典 BibTeX 并且不要对抗它。当格式由您控制时，例如论文、预印本或讲义，biblatex 是更好的工具：更清晰的定制、真正的 Unicode 支持以及专门为 Web 资源构建的条目类型。您的“.bib”数据库在任一系统下都保持不变，因此该选择永远不会是永久的。两者之间的引文命令有所不同，[natbib 习惯与 biblatex 命令](/learn/natbib-vs-biblatex/) 将一组映射到另一组。