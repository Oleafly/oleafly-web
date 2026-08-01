---

title: "natbib 习惯与 biblatex 命令"
description: "括号和文本引用，以及替换它们的名称。"
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib 习惯与 biblatex 命令

作者年份引用需要两种类型的 cite 命令。有时作者是句子的一部分，如“Knuth (1984)介绍了文学编程”。有时，引文会放在括号中，例如“文学编程混合了代码和散文（Knuth，1984）”。普通的 `\cite` 无法做出这种区分，这就是为什么 `natbib` 包存在的原因，也是为什么 biblatex 为相同的想法提供了自己的一组名称。如果您学习了其中一个并获得了使用另一个的模板，则此页面就是翻译表。

## natbib 命令

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

助记符是“\citet”是作为句子一部分读取的*文本*引用，而“\citep”是包含在方括号中的“括号”引用。带星号的变体打印完整的作者列表，而不是“et al.”，这是您第一次引用作品时偶尔需要的。 natbib 还提供仅用于名称的“\citeauthor”，仅用于年份的“\citeyear”，以及用于页码的可选参数，如“\citep[p.~42]{knuth84}”。 natbib 是一个预处理器时代的包：它与经典的 BibTeX 和兼容的“.bst”样式一起使用，例如“plainnat”或“apalike”。

## biblatex 等价物

biblatex 涵盖了相同的领域但有不同的名称。 `\textcite{knuth84}` 生成文本形式“Knuth (1984)”，`\parencite{knuth84}` 生成括号“(Knuth, 1984)”，而普通的 `\cite{knuth84}` 生成一个裸引用，其确切外观取决于加载的样式。其余的也有直接的类似物：`\citeauthor`、`\citeyear`，以及页码等内容的前注和后注，写作`\parencite[see][p.~42]{knuth84}`。如果肌肉记忆是问题所在，biblatex 甚至有一个“natbib=true”包选项，将“\citet”和“\citep”定义为别名，这使得迁移几乎无痛。

## 将文档从 natbib 迁移到 biblatex

您的“.bib”文件根本不需要更改。两个系统读取相同的数据库。迁移仅涉及序言和构建。删除 `\usepackage{natbib}` 和 `\bibliographystyle` 行，然后加载 `\usepackage[backend=biber,style=authoryear]{biblatex}` 并使用 `\addbibresource{refs.bib}` 将其指向您的数据库。将文档末尾的“\bibliography{refs}”替换为“\printbibliography”。最后，确保构建运行“biber”而不是“bibtex”，因为 biblatex 以不同的格式存储其数据，而旧后端将默默地生成任何内容。如果您不想触摸正文，请通过兼容性选项保留 natbib 命令名称，并且仅更改前导码。

## 选择哪一个

如果日记模板已经加载 natbib，请继续使用它。与类文件作斗争很少值得。对于您选择的新文档，biblatex 更加灵活并且可以更好地处理 Unicode。更广泛的比较位于 [Classic BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中，之后的风格切换在 [数字、作者年份、期刊样式](/learn/change-itation-style/) 中介绍。