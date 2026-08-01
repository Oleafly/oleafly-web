---

title: "经济学和社会科学：期刊接受的回归表"
description: "booktabs、triparttable、siunitx star、注释下估计、biblatex 习惯以及经济学、政治科学和社会学的工作论文版本控制。"
date: 2026-06-26
tags: [economics, social-science, tables]
---

实证社会科学的生死取决于表格。未对齐的小数或
缺少重要性的星星可能会烧毁一个没有任何内容的修改和重新提交周期
与你的识别策略有关。期刊几乎关心可读性
和系数一样多。

以下是针对从 Stata 或 R 导出然后清理的学生和 RA
手工乳胶。

## booktabs 不是可选的

垂直线和双水平线看起来像 20 世纪 90 年代的 Word。使用三个
来自“booktabs”的水平规则：

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

请参阅[三规则表](/learn/booktabs-beautiful/)。从 R 导出
（“modelsummary”、“estout”风格的工具、较旧的“stargazer”）或 Stata 到 LaTeX
碎片，然后自己清理标题行。自动生成的标头是
对于最终的 PDF 来说通常太宽或太神秘。

## 表下注释，不是随机脚注

`twoparttable` 使标题、表格和注释保持相同的宽度：

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

输入样本大小、固定效应、聚类 SE 注释和显着性星号
传说在这里。不要在只有某些读者才使用的单个单元格上添加脚注
会注意到的。面板标签 (A/B) 位于标题或中间规则中，且清晰
文本，而不是从未出现在 PDF 中的图形样式图例。

## 数字列和重要性星星

`siunitx` 列类型 (`S`) 在小数点上对齐。仅此一点就使
结果表看起来是故意的。星星打破了纯数字列，所以你
通常需要自定义格式或文本列。常见模式：

在单独的行上报告系数和SE（经济学中的标准），或包裹星号
因此对齐仍然有效（使用专用列类型的“0.012^{***}”）。

各表保持一致：相同的星级阈值、相同的 SE 样式、相同的数字
同一度量的小数位数。评审员将表 2 与表 3 进行比较
目的。

视觉初稿就可以了。浏览器
[表格生成器](/tools/table-generator/) 可以绘制结构图；决赛
表仍应经过“booktabs”和您的 SE 笔记。

## 从回归软件到相机就绪

典型的循环如下所示。冻结估计脚本和种子。导出一个
估计的 LaTeX 片段或 CSV。将其放入稳定的桌壳中
标签（`tab:main`、`tab:robust`）。写下标题，以便浏览者知道
因变量、样本和估计量，无需阅读注释两遍。
编译，然后通过切割列来修复过满的盒子；仅作为最后轮换
度假村。

如果表格比页面长，请切换到“longtable”（或拆分面板）
在截止日期周之前，而不是在期刊抱怨 7pt 字体之后。

## 引用：作者年份是方言

大多数经济和政治科学场所都期望作者年份。 `biblatex` 与
`style=authoryear`（或期刊的风格）从长远来看比战斗更容易
`.bst` 文件。如果实验室仍然使用“natbib”，那很好；只是不要混合
两个堆栈都在一个序言中。概述：
[BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/)。

密钥应该稳定（“作者：年份：关键字”）。从 Zotero 重新出口
项目中期的新关键是“\cite”如何打破提交周。验证
缺失年份和期刊的“.bib”：
[BibTeX 验证器](/tools/bibtex-validator/)。

## 工作文件和 SSRN

工作文件版本每月更改一次。将标题页日期保留在宏中：

```latex
\newcommand{\paperdate}{June 2026}
```

重新导出 PDF 时将其撞掉。本地 Git 历史记录比
共享驱动器上的“final_final_v7.pdf”。当主表设置时提交
编译；明确标记或消息提交版本。

研究编辑将项目视为真正的 Git 存储库（检查点
编译后，恢复，可选私有GitHub）与经验工作相匹配
已经版本代码。论文和评估脚本不应该存在
根据不同的备份习惯。

## 身份识别和餐桌道德（简短版）

LaTeX 无法修复弱设计，但它可以使强设计变得可读。
在标题中说明估计量和样本。不要隐瞒这样一个事实
第 (3) 栏在没有人读的脚注中删除了一半的样本。如果你显示
稳健性表，保持与主表相同的因变量顺序，以便
读者可以扫描。

## 预提交清单

迟到咬人的事情：

- 三规则表；没有垂直规则。
- 十进制对齐；一致的星星和 SE 注释。
- 标题说明结果、样本、估计器。
- 标签稳定；文本引用“\ref{tab:...}”。
- 参考书目风格与场地相匹配； `.bib` 已验证。
- 工作文件日期和 Git 提交与您上传的内容相符。

## 复制包

更多期刊需要代码和数据。将表格导出脚本放在纸张旁边
存储库（或与提交哈希链接）。当系数因以下原因而改变时
清理脚本已更改，重新生成 LaTeX 片段并重新提交两者。一个
无法复制的表格即使看起来很干净也是一种责任。

## 研讨会用投影仪

尽可能在幻灯片中重复使用相同的“booktabs”片段，或导出 PDF
桌子上的庄稼。手动将数字重建到幻灯片中的方法是
研讨会幻灯片与论文不一致。

制定正确的表格，识别策略就能得到公平的听证。获取
他们错了，你们花了一轮时间争论格式。