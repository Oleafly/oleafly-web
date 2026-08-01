---

title: "表格长度超过一页"
description: "longtable 重复的页眉和页脚。"
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# 表格长度超过一页

普通的“table”环境是一个浮动体，并且浮动体必须适合单个页面。给它 60 行，LaTeX 要么将其推到浮动页面上并让它溢出，要么永远推迟它。解决方案是“longtable”包，它排版一个跨页表格，并在每一页上重复其标题，就像电子表格打印输出的方式一样。

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## 标题块如何工作

“longtable”在实际数据行之前最多以四个声明块开始。 `\endfirsthead` 上面的所有内容都是在表格的最开头打印一次的标题。 `\endfirsthead` 和 `\endhead` 之间的所有内容都是在每个后​​续页面顶部重复的标题，这就是为什么相同的“Key & Value”行在示例中出现两次的原因。以“\endfoot”结尾的块打印在表格触及的每个页面的底部，这里只是一个结束“\bottomrule”。还有“\endlastfoot”，用于仅出现在最后几行下方的材料，例如总计行。如果您想要延续提示，常见的模式是脚块中的“\midrule \multicolumn{2}{r}{continued on next page} \\”以及最后一个脚中的真正的“\bottomrule”。

声明之后是数据行，其编写方式与普通“表格”完全相同，单元格之间使用“&”，每行末尾使用“\\”。 “booktabs”规则保持不变。请参阅[三规则表](/learn/booktabs-beautiful/) 了解它们所取代的内容。

## 不是浮点数，这意味着什么

最重要的行为差异可以用一句话来说明：“longtable”不是浮点数。它从您在源代码中放置的位置开始，在页面中断的地方中断，并且不接受“[htbp]”参数。这也改变了字幕的工作方式。您不会将“longtable”包装在“table”环境中。相反，将“\caption{...}\\”放在表格本身内，作为第一个头块的第一行，它将按照与其他表格相同的顺序进行编号。

## 在依赖它之前需要了解两件事

首先，列宽是全局决定的，因此 LaTeX 可能需要多次编译才能使列停止移动。继续编译直到布局确定。其次，“longtable”不能在两列布局中使用，这在大多数会议模板中都排除了这种情况。在这些文档中，现实的选择是缩小表格、将其拆分为多个部分或将其移至一列附录。