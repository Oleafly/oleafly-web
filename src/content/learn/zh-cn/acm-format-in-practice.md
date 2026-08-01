---

title: "ACM 格式的实践"
description: "acmart 类：sigconf、元数据、匿名审查和首次编译惊喜。"
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# ACM 格式的实践

ACM 在 2017 年将其所有模板合并为一个类“acmart”。一个类，多个面孔：格式选项决定您是否获得两栏会议论文或单栏期刊文章。

## 选择您的格式选项

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

几乎所有 ACM 会议都需要“sigconf”。场地的 CFP 指定了确切的选项；相信它而不是习惯。如果您仍在场地系列之间做出选择，[ACM、IEEE 和朋友](/learn/acm-ieee-and-friends/) 可以对它们进行比较。

## 元数据是必需的

与 IEEEtran 不同，acmart 拒绝在没有元数据块的情况下看起来正确（并且发布者拒绝接受它）：

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

CCS 概念来自 ACM 网站上的选择器，它生成 XML 和“\ccsdesc”行。逐字粘贴它们。关键字放在“\keywords”中，而不是在摘要中。 ACM 参考格式块（第一页上的灰色引文框）是从“\acmConference”、“\acmYear”和朋友自动生成的，发布者在相机准备就绪时填写或验证。

## 提交双盲

大多数 ACM 会议都是匿名评审。一种选择可以处理它：

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

“anonymous”隐藏作者和隶属关系，“review”为审稿人添加行号。将两者都关闭即可拍照。该类处理机制，但匿名化比标志更重要。请参阅[双盲做得对](/learn/anonymization-double-blind/)。

## 引用：编号或作者年份

acmart 在底层使用 natbib 并支持两种样式：

|选项|结果 |
|---|---|
|默认|编号：[3] |
| `natbib=true` + `\citestyle{acmauthoryear}` |作者年份：（洛夫莱斯，1843 年）|

一些 SIG 规定作者年份（历史上为 CHI），另一些则规定编号。再次强调：CFP 决定。

## 首次编译惊喜

acmart 非常需要包裹。在全新设置中期待这些：

- **Libertine 字体。** 该类加载 Linux Libertine 和 Biolinum 以及 `newtxmath`。在最小化的 TeX 安装中，这些将在您第一次编译时作为下载到达。 Oleafly 捆绑的 Tectonic 引擎会在第一次使用时自动获取它们，因此初始编译所需的时间比第二次要长。这是正常现象，不是挂机。
- **严格的浮动规则。** acmart 会完全阻止某些软件包（如 `titlesec`），并且如果加载它们就会出错。
- **`\authorsaddresses{}`** 使草稿中的“作者地址”页脚无声。

如果某个软件包确实无法解析，则修复方法是通常的：[安装缺少的软件包](/learn/install-missing-package/)。

## 从哪里获取

从 acm.org 的作者页面或您的会议网站下载官方模板，并保持“acmart.cls”最新。 ACM 每年对其进行多次修订，并针对最新版本进行相机就绪检查。