---

title: "论文格式与论文格式"
description: "大学课程、封面材料、章节、装订边距和重复使用纸质材料。"
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# 论文格式与论文格式

论文是为出版商格式化的。论文是为研究生院设计的，这是一个非常不同的野兽，有着非常不同的规则。如果您只写过论文，论文模板将以特定的方式让您感到惊讶。

## 谁制定规则

论文：场地为您提供一门课程（[IEEEtran](/learn/ieee-format-in-practice/)、[acmart](/learn/acm-format-in-practice/)、llncs），全世界的每个人都使用相同的课程。论文：你的大学规定了自己的班级或一页的印刷规则（页边距、行距、标题页措辞），并且没有两所大学同意。首先从您所在院系或研究生院网站获取官方课程。如果它很古老并且拒绝编译，那么这种情况很常见，可以[它自己的教训](/learn/fix-broken-template/)。

## 结构差异

|方面|纸|论文|
|---|---|---|
|顶级单位| `\节` | `\章节` |
|班级基地|场地等级| ‘书’/‘报告’衍生 |
|前言 |标题+摘要|扉页、声明、摘要、目录、图表列表 |
|长度| 8 至 30 页 | 80 至 300 页 |
|布局|通常为两栏 |单柱，宽大间距 |
|双方|单面 PDF |通常是双面打印 |

章节改变了下游的一切：编号变成“3.2”，数字变成“图3.1”，每章通常在一个新的（有时是右侧）页面上打开。

## 前面的事情是成功的一半

论文前言顺序通常为：标题页、原创性声明、摘要、致谢、目录、图表列表、表格列表，然后是第一章。其中大部分是自动化的：

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

罗马然后阿拉伯的页码舞蹈让每个人都跳了一次，[前文和页码](/learn/front-matter-page-numbers/) 正确地涵盖了它。

## 双面打印和装订边距

打印论文通常是双面的（“twoside”类选项），这使得页边距不对称：内部页边距较宽，可以保存装订。你们大学的规则会说“左边距 35 毫米，其他 25 毫米”，在双面文档中意味着“内部”，而不是左侧。不要用手动“\hspace”来解决这个问题，类选项加上“geometry”设置可以处理它：

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

“openright”强制将章节放在右侧页面上，这是装订副本的标准。

## 重复使用你的论文作为章节

大多数论文吸收已发表的论文，并且大多数大学明确允许这样做。机制：剥离每篇论文的序言，如果需要的话降级其“\section”，统一各章的符号和宏，并将参考书目合并为一个。将每一章保存在自己的文件中使之易于管理。 [将章节拆分为文件](/learn/split-chapter-files/) 显示了 `\input`/`\include` 设置，可保持 200 页的构建正常。

一个诚实的警告：大学论文课程往往包含大量软件包，因此在新机器上进行第一次编译可能会在成功之前删除一批软件包。让它完成一次，后续的构建就会很快。