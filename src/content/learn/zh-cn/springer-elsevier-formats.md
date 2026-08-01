---

title: "Springer、Elsevier 和 LNCS 格式"
description: "llncs、Springer Nature 期刊和 elsarticle：单列类和相机就绪源。"
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer、Elsevier 和 LNCS 格式

在 IEEE 和 ACM 生态系统之外，两家出版商占据主导地位：Springer（包括 Springer Nature）和 Elsevier。他们的课程看起来比两列会议风格更简单，这是设计使然。出版商排版最终版本。

## LNCS：诉讼主力

如果您的会议在计算机科学讲义（或其兄弟 LNAI 和 LNBI）中发表，您可以在“llncs”中编写：

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS 论文是单栏的，使用“\inst{}”上标将作者映射到机构，并且默认页面预算非常紧张（通常为 12 到 16 页，包括参考文献）。默认情况下，并非每个 TeX 发行版中都有该类。从 Springer 的 LNCS 页面下载作者工具包。其参考书目风格是“splncs04”：

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## 施普林格自然期刊

Springer 期刊历史上使用“svjour3”，并已迁移到较新的“sn-jnl”类，其中每个期刊系列都有样式选项（“sn-mathphys-num”、“sn-basic”等）。该期刊的“提交指南”页面列出了确切的类别和选项。不要猜测：两个 Springer 期刊可能需要不同的类别。

## 爱思唯尔：elsarticle

爱思唯尔期刊共享一个类，“elsarticle”：

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

“预印”选项提供了一个宽敞的双倍行距单栏供审阅，而带有“1p”、“3p”或“5p”的“final”则模仿了期刊的打印布局。参考书目样式为“elsarticle-num”（编号）或“elsarticle-harv”（作者年份），与期刊使用的样式相匹配。

## 快速比较

|出版商 |班级 |专栏 |围兜款式|
|---|---|---|---|
|施普林格 LNCS | `LLNCs` |一| `splncs04` |
|施普林格自然杂志 | `sn-jnl` （原为 `svjour3`）|一|按期刊选项 |
|爱思唯尔 | `elsarticle` |一（评论）| `elsarticle-num` / `-harv` |

## 为什么是单列？因为你不是排字工

这些类呈现您的*手稿*，而不是最后一页。出版商的制作团队将已接受的论文重新排版到期刊的内部布局中。这也是为什么“相机就绪源上传”在这里意味着特定的东西：您上传`.tex`，`.bib`和图形文件，而不仅仅是PDF，因此生产可以重建和重新设计纸张。实际后果：

- 保持源代码干净并且可以从新的结帐中进行编译：没有绝对路径，没有丢失的数字
- 不要破坏间距或边距。生产无论如何都会剥离它（并且它可以[被标记](/learn/page-limits-without-crimes/)）
- 使用标准包。异国情调的内容会被生产重写或退回给您

这些类依赖于相当数量的包，因此最小安装可能会在第一次编译时获取多个包。如果拒绝出现，请参阅[安装缺失的软件包](/learn/install-missing-package/)。如果模板完全错误，请像任何[损坏的模板](/learn/fix-broken-template/) 一样对其进行分类。