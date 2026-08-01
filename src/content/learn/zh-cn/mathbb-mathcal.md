---

title: "黑板、脚本、Fraktur"
description: "mathbb、mathcal、mathfrak、mathrm 以及每个字母表出现的时间。"
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 黑板、脚本、Fraktur

数学使用不止一种字母表。实数得到黑板粗体 R，拉格朗日得到书法 L，李代数得到 Fraktur g，每一个都是 LaTeX 中的不同命令，而不是您打开的字体。如果使用一致，字母表会先告诉读者一个字母在周围的句子中表示什么对象。

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## 四个字母

|命令 |看|典型用途|
| --- | --- | --- |
| `\mathbb{R}` |黑板|号码组 |
| `\mathcal{L}` |书法|拉格朗日损失 |
| `\mathfrak{g}` |碎片 |李代数 |
| `\mathrm{d}` |直立|差速器、操作员名称 |

`\mathbb` 生成黑板粗体，双击字母几乎专门用于数字集：`\mathbb{N}`、`\mathbb{Z}`、`\mathbb{Q}`、`\mathbb{R}`、`\mathbb{C}`。它来自“amssymb”包，仅涵盖大写字母。该字体没有小写字母，因此小写参数会打印错误的字形或没有任何有用的信息。

`\mathcal` 提供书法大写字母、拉格朗日量、损失函数和集合族的通常选择。它还仅涵盖大写字母，并且可以在核心 LaTeX 中运行，无需额外的软件包。

`\mathfrak` 也来自 `amssymb`，是 Fraktur，两种情况都可用。小写 Fraktur 命名为李代数，大写字母出现在代数和集合论中，代表理想和基数等。

`\mathrm` 不是一个装饰字母，而是数学中直立罗马字体的切换。对于任何符号而不是变量来说，它都是正确的工具：“\mathrm{d}x”、单位或文本子标签（如“x_{\mathrm{max}}”）中的微分。对于 tr 和rank 等命名运算符，有一个更好的机制，在[您发明一次的运算符](/learn/argmin-argmax/) 中介绍。

## 实用笔记

如果“\mathcal”对于您的目的来说看起来太简单，“mathrsfs”包会添加“\mathscr”，这是一个更华丽的脚本，通常用于滑轮和西格玛代数。两者可以共存并在同一篇论文中表示不同的对象。

常见的错误是将这些字母视为装饰。每一个在大多数领域都具有传统的含义，看到“\mathbb{A}”的读者会期待一些类似于集合和数字的东西。在分配字母之前检查您所在领域的约定，分配后，为整个文档的每个对象保留一个字母表。所有四个在 [live Playground](/live/) 中几秒钟内并排渲染。