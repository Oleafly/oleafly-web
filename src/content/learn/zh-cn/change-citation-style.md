---

title: "数字、作者年份、期刊风格"
description: "交换样式而不重写数据库。"
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 数字、作者年份、期刊风格

引文样式控制两件事：文本内标记的外观，例如“[12]”与“(Knuth，1984)”，以及参考列表中每个条目的格式。好消息是该样式与您的“.bib”数据库完全分开。您可以通过更改序言中的一行，将论文从数字年份切换为作者年份，或者针对不同的期刊重新格式化它。您的条目保持原样。

## 使用经典 BibTeX 改变风格

对于 BibTeX，样式位于 `\bibliographystyle{...}` 命令中，该命令命名一个 `.bst` 文件。交换参数并重新编译：

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

期刊和会议通常会发布自己的“.bst”文件，例如“IEEEtran.bst”或“ACM-Reference-Format.bst”。将该文件放在“main.tex”旁边，并将其命名为“\bibliographystyle”。请注意，“.bst”是一次性烘焙的；如果场地需要作者年份引用，您还需要“natbib”包来获取“\citep”和“\citet”等命令。

## 使用 biblatex 改变样式

对于 biblatex，样式是包本身的一个选项：

```latex
\usepackage[style=authoryear]{biblatex}
```

其他常见值包括“style=numeric”、“style=numeric-comp”，用于压缩范围，例如附加包中的“[3-6]”、“style=alphabetic”以及“style=apa”或“style=ieee”。因为 biblatex 样式是用 LaTeX 而不是旧的“.bst”语言编写的，所以它们更容易调整，例如更改标点符号或删除 URL。

## 切换后重新编译正确

任何样式更改后，旧的辅助文件仍然包含以前样式格式化的数据，因此运行一个完整的循环：编译一次，运行后端（“bibtex”用于经典 BibTeX，“biber”用于 biblatex），然后再编译两次，以便解决交叉引用。 Oleafly 会为您运行此循环，但如果手动切换后引文看起来过时，删除“.aux”和“.bbl”文件并从头开始重建可以清除它。

## 您应该使用哪个系列？

如果目标场所提供了“.bst”文件或需要 BibTeX 的类，请使用经典 BibTeX；大多数期刊仍然存在这种情况。如果您自己控制格式，例如在论文或预印本中，biblatex 是更有效的选择。 [经典 BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中介绍了这些权衡，[natbib 习惯与 biblatex 命令](/learn/natbib-vs-biblatex/) 中介绍了命令差异。