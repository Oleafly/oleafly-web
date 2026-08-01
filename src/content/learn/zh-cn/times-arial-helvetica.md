---

title: "Times、Arial、Helvetica 类堆栈"
description: "newtx、helvet 或 fontspec 映射期刊仍然需要。"
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times、Arial、Helvetica 风格的堆栈

在这些字体不再成为任何人的审美首选几十年后，期刊和会议指南仍然经常要求正文使用 Times 字体或数字使用 Arial 字体。在 LaTeX 中，有两种方法可以满足这种要求，使用哪一种取决于您的引擎。 Classic pdfLaTeX 无法加载实际的 Times New Roman 或 Arial 文件，因此它使用作为包提供的公制兼容克隆。 XeLaTeX 和 LuaLaTeX 通过 `fontspec` 加载真实的系统字体。

## 包裹路线

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` 将文本字体切换为 Times 克隆，而 `newtxmath` 提供匹配的数学。配对很重要：仅更改文本字体，方程保留默认的 Computer Modern。计算机现代数学旁边的《泰晤士报》段落立即可见。 `newtx` 是旧的 `times` 和 `txfonts` 包的维护后继者，您应该在新文档中避免使用它们。旧堆栈未转换数学，有些会生成[PDF 查看器中的模糊文本](/learn/fuzzy-font-pdf/) 中描述的位图字体。

`helvet` 提供了 Helvetica 的克隆作为无衬线家族，它也代表 Arial，因为 Arial 是为了匹配 Helvetica 的指标而设计的。加载它不会更改文档字体，因为正文使用衬线系列。 `\renewcommand{\familydefault}{\sfdefault}` 行执行该切换：`\familydefault` 是 LaTeX 用于普通文本的系列，将其设置为 `\sfdefault` 会使整个文档类似于 Helvetica。如果您只需要无衬线标题或图形标签，请忽略该行。如果 Helvetica 在您的文本字体旁边稍大一些，则 `\usepackage[scaled=0.92]{helvet}` 会使其保持一致。

## 字体规范路线

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

在 XeLaTeX 或 LuaLaTeX 下，“fontspec”按名称寻址字体并从操作系统加载它们，因此这将正版 Times New Roman 设置为主要（衬线）系列，将正版 Arial 设置为 sans 系列。字体必须实际安装在计算机上。当文档在计算机之间移动或进入 CI 时，就会产生影响。随项目一起传输的字体可以避免该问题，如[项目旁边的字体文件](/learn/install-custom-font/) 所示。数学又是一个单独的问题，由“unicode-math”处理或通过将“newtxmath”放在一起处理。 [为什么人们转向 XeLaTeX](/learn/when-use-xelatex/) 中介绍了引擎的权衡。

## 经验法则

在选择任一路线之前，请检查场地自己的类文件是否已经设置了字体。大多数都是这样。将您自己的字体包堆叠在已发言的类之上最多只会产生警告。仅将字体包添加到其类由您选择的文档中。