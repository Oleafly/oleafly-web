---

title: "IEEE 格式的实践"
description: "IEEEtran 会议和期刊模式、作者区块和两栏问题。"
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# IEEE 格式的实践

IEEE 场所，从小型研讨会到旗舰期刊，都共享一个类文件：“IEEEtran”。学一次，数百个场地就开放了。

## 会议 vs​​ 期刊模式

同一类根据选项产生不同的布局：

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

会议模式为您提供经典的外观：10pt 时间、两栏、默认无页码。日记模式更改了标题布局，在末尾添加了作者传记，并调整了间距。始终使用您场地要求的模式，它们不可互换。有关 IEEE 与 ACM 的更广泛比较，请参阅 [ACM、IEEE 和朋友](/learn/acm-ieee-and-friends/)。

## 以 IEEE 方式创作

会议模式有自己的作者标记。不要用“\\”和手动居中来对抗它：

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` 保存名称，`\IEEEauthorblockA` 保存从属关系，`\and` 将作者分隔为列。

## 生活有两列

两列布局是新手遇到困难的地方。规则：

|问题 |修复 |
|---|---|
|宽图或表格|使用`figure*` / `table*`，浮动到页面顶部 |
|长方程溢出 |打破它，看[一栏或两栏](/learn/one-column-or-two/) | 中的两栏战术
|最后一页栏目参差不齐|使用 `\IEEEtriggeratref` 或 `balance` 包手动平衡它们 |
| URL 进入页边距 | `\usepackage{url}` 或 `xurl` 可以更好地打破 |

对于广泛的内容来说，加星号的浮动环境是不可协商的：

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

请注意，“figure*”拒绝“[h]”放置，它始终浮动到页面顶部。为此做好计划而不是与之抗争。

## 参考书目

IEEE 使用其自己的 BibTeX 风格的数字引文：

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

匹配的“IEEEtran.bst”随该类一起提供。审阅者注意到，不要替换“plain”或“ieeetr”，并且相机就绪检查表无论如何都会捕获它。

## 真正的模板在哪里获取

始终从官方来源开始：ieee.org 上的 IEEE 模板选择器，或会议自己的作者工具包页面。会议组织者有时会修补模板（版权声明、额外页脚），因此会场的版本胜过通用副本。 Oleafly 的[模板库](/templates/) 包括一个 IEEE 风格的会议启动器，它可以在捆绑的 Tectonic 引擎上进行开箱即用的编译，方便您在放入官方套件之前进行起草。

## 常见问题清单

- 使用 pdfLaTeX 兼容代码进行编译，IEEEtran 早于 fontspec 并期望经典引擎
- 不要添加“几何图形”或更改边距，类会准确设置它们
- 在某些期刊提交中，在“\maketitle”之后需要“\IEEEpeerreviewmaketitle”
- 如果您的计算机上的模板出现错误，请像任何[损坏的模板](/learn/fix-broken-template/) 一样对其进行分类