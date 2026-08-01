---

title: "构建持久的 .bib"
description: "条目类型、必填字段、稳定键。"
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 构建一个持久的 .bib

“.bib”文件是一个小型纯文本数据库，其中包含您可能引用的所有内容。每个条目都有一个类型、一个键和一组字段，同一个文件可以为您多年来撰写的每一篇论文提供服务。现在，在如何选择类型、填充字段和命名键方面进行一些纪律，可以在以后当日记风格突然需要您从未记录过的字段时避免真正的痛苦。

## 条目剖析

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

“@”后面的单词是条目类型，它告诉样式这是什么类型的工作，以及需要哪些字段。 `knuth84` 是引用键，即您在 `\cite{...}` 中键入的句柄。其他一切都是一个领域。 “author”字段使用“Last, First”形式，因此样式可以可靠地缩写和排序名称，“pages”使用双连字符，LaTeX 将其排版为页面范围破折号。

## 您实际需要的条目类型

六种类型几乎涵盖了所有学术写作。对期刊论文使用“@article”，对会议和研讨会论文使用“@inproceedings”，对书籍使用“@book”，对论文使用“@phdthesis”，对机构报告和许多预印本使用“@techreport”，对其他任何内容（包括软件和网站）使用“@misc”。选择正确的类型很重要，因为样式的格式各不相同：“@inproceedings”条目需要“booktitle”（会议名称），而“@article”需要“journal”。

## 必填字段，以及验证器抱怨的原因

每种类型都有必填字段，缺少一个字段是参考书目条目损坏或触发后端警告的最常见原因。对于“@article”，要素是“author”、“title”、“journal”和“year”；对于“@inproceedings”、“author”、“title”、“booktitle”和“year”。缺少“年份”或“作者”是典型的失败，因为没有它们，作者年份样式实际上无法构建引文标签。 “volume”、“pages”、“doi”和“publisher”等可选字段使条目更有用，因此当源在您面前时记录它们。您可以使用 [BibTeX 验证器](/tools/bibtex-validator/) 一次检查整个文件。

## 能保存十年的钥匙

引文键是永久的。每个草稿、笔记和幻灯片中的每个“\cite{knuth84}”都引用了该确切的字符串，因此重命名键意味着追查所有使用情况。选择一个约定，例如“authorYEAR”或“authorYEARkeyword”，从第一天开始应用它，并且永远不要“清理”已建立的数据库中的键。如果您在 Zotero 中管理参考文献，Better BibTeX 插件可以为您生成并固定稳定的密钥；请参阅[将 Zotero 转换为 .bib 文件](/learn/zotero-latex/)。要将文件连接到文档中，请从 [从 .bib 键到文本引用](/learn/add-itations/) 开始。