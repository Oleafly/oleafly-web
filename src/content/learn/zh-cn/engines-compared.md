---

title: "该项目使用哪种引擎"
description: "pdfLaTeX、XeLaTeX、LuaLaTeX、Tectonic：Unicode、字体、期刊适合。"
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# 该项目使用哪个引擎

引擎是实际将“.tex”源文件转换为 PDF 的程序。 LaTeX 本身是一个运行在其之上的宏层，并且有多个层可供选择。它们接受几乎相同的文档，但处理 Unicode 文本和字体的方式有所不同，为一种引擎编写的模板在另一种引擎下可能会完全失败。每个项目选择一次并坚持下去。

|发动机|统一码 |系统字体|笔记|
| --- | --- | --- | --- |
| pdfLaTeX |部分|没有 |最大期刊兼容性 |
| XeLaTeX |是的 |是（`fontspec`）|非常适合多语言文档 |
| LuaLaTeX |是的 |是的 |现代、可编写脚本 |
|构造|类 Xe |是的 |自动获取包；油叶默认 |

## 每个引擎的用途

pdfLaTeX 是原始 TeX 的直接后代，并且仍然是大多数期刊、会议和提交系统的默认假设。它早于 Unicode，因此重音输入需要“inputenc”约定，并且字体仅限于专门打包的 TeX 字体。作为交换，它速度快且得到普遍支持，数十年的模板都以它为目标。

XeLaTeX 原生读取 UTF-8，并通过“fontspec”包使用系统上安装的任何字体名称，例如“\setmainfont{Georgia}”。这使得它成为混合脚本的文档、西欧以外的语言以及任何有特定字体要求的人的实用选择。 [何时使用 XeLaTeX](/learn/when-use-xelatex/) 更深入。

LuaLaTeX 提供相同的 Unicode 和字体支持，并嵌入 Lua 脚本语言，因此包可以在编译时计算以前不可能的事情。它是传统引擎的长期继承者，但代价是编译速度稍慢。

Tectonic 是 XeTeX 引擎的现代、独立构建。它的显着特点是自动依赖性处理：当文档需要您没有的包时，Tectonic 会按需下载它而不是失败。正是出于这个原因，Oleafly 将 Tectonic 捆绑为其默认引擎，因此全新安装无需任何 TeX 管理即可编译真实世界的文档。

## 如何决定

遵循模板。如果期刊类别或论文模板记录了一个引擎，请使用该引擎。模板对引擎假设的编码方式在其他地方表现为令人困惑的错误，如[无法编译的大学类文件](/learn/fix-broken-template/)中所述。如果文档是您从头开始的，那么经验法则很简单：当保守的场所会编译您的源代码时，使用 pdfLaTeX；当您需要真正的 Unicode 或真正的字体时，使用 XeLaTeX、LuaLaTeX 或 Tectonic。无论您选择什么，请在文档的整个生命周期中保留它。微妙的间距和字体差异使得在项目中进行切换不利于时间的利用。