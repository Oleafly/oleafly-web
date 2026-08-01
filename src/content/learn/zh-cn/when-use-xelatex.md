---

title: "为什么人们转向 XeLaTeX"
description: "系统字体、复杂脚本、fontspec 模板。"
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# 为什么人们转向 XeLaTeX

LaTeX 是一种语言，但有多种引擎可以编译它，并且它们的功能有所不同。传统的引擎是 pdfLaTeX，两个现代引擎是 XeLaTeX 和 LuaLaTeX。人们转向 XeLaTeX 的最大原因是字体：pdfLaTeX 仅使用专门为 TeX 打包的字体，而 XeLaTeX 加载系统上安装的任何 OpenType 或 TrueType 字体，并通过其普通名称进行寻址。

## 切换的三个原因

第一个是直接访问系统字体。使用 `fontspec` 包，字体选择就是一行可读的内容，并且不需要为您想要的字体存在特定于 TeX 的字体包。无论目标是现代外观的“\setmainfont{Inter}”还是期刊要求的 Times New Roman，机制都是相同的：

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` 需要 XeLaTeX 或 LuaLaTeX；在 pdfLaTeX 下它只是错误。字体也可以在项目文件夹内而不是系统内移动，如[项目旁边的字体文件](/learn/install-custom-font/) 所示。

第二个是原生 Unicode 和复杂脚本。 XeLaTeX 直接读取 UTF-8 输入并处理 pdfLaTeX 无法处理的书写系统，包括阿拉伯语、梵文、中文、日语和韩语，通过适当的整形，并通过“polyglossia”包纠正每种语言的连字符和方向。如果您的文档混合了脚本，甚至只是引用了带有不寻常变音符号的名称，那么仅此一点就决定了引擎。

第三个是为您决定的模板。许多现代简历、论文和演示模板在第一行加载“fontspec”或“polyglossia”，这样的模板只能在 XeLaTeX 或 LuaLaTeX 上编译。如果下载的模板立即失败并出现提及“fontspec”的错误，则可以切换引擎来修复，而不是编辑模板。

## 你放弃什么

这种权衡是适度的，但却是真实的。一些 pdfLaTeX 特定的包不适用，最值得注意的是 `microtype` 的字体扩展，XeLaTeX 仅部分支持。编译运行速度也稍慢。一些较旧的期刊管道仍然采用 pdfLaTeX，因此在提交 XeLaTeX 构建的手稿之前请检查场地的说明。 LuaLaTeX 共享字体和 Unicode 功能并添加 Lua 脚本。在两者之间，选择您的模板或场地名称。基于“fontspec”构建的文档通常在两者上编译。

## 实践中的选择

一个合理的规则是，当场地模板针对它时，使用 pdfLaTeX，而对于您选择字体的所有内容，则使用 XeLaTeX：论文、简历、幻灯片和多语言文档。 Oleafly 的捆绑引擎是基于 XeTeX (Tectonic) 的，因此“fontspec”文档无需任何引擎配置即可编译。常见的错误是混合时代，例如将 `fontspec` 与仅 pdfLaTeX 的字体包（如 `newtxtext`）一起加载。每个文档选择一种字体系统，引擎问题大部分都会自行解决。