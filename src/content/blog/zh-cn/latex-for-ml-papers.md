---

title: "用于机器学习论文的 LaTeX，没有混乱的符号"
description: "注释表、消融表、算法、训练运行的数据以及从第一份 arXiv 草稿到相机就绪的论文旁边的 Git。"
date: 2026-06-18
tags: [machine-learning, research, math]
---

大多数 ML 论文在 LaTeX 中都以同样的方式失败：第三页的数学很好，
第十二页不一致。损失在一个部分中是“L”，在一个部分中是“\mathcal{L}”
另一种粗体矢量仅在作者记得时才会出现。审稿人
即使他们不对此发表评论，也要注意。

这是学生撰写研讨会论文、会议的实用指南
与培训代码共享 DNA 的提交内容和论文章节。

## 第一天选择一张注释表

在写相关工作之前，先写二十行宏：

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

将该块粘贴到每个共同作者分支中。当模特发明一个新符号时，
首先将其添加到工作表中，然后使用它。的
[AI follow-notation 课程](/learn/ai-follow-notation/) 与
循环中的语言模型：模型必须遵守工作表，而不是发明字体。

研究编辑器中的实时数学预览可帮助您捕捉“\mathcal{L}”和
当您键入时，“L”不是同一个对象。

## 适合拍照的桌子

消融表不断增长，直至从页面上脱落。更喜欢没有的“booktabs”
垂直规则，“siunitx”用于对齐小数，以及说明
指标和分割（ImageNet、CIFAR、域内与 OOD）。如果表跨越
页面，尽早使用“longtable”而不是将字体缩小到7pt。

视觉构建器有助于初稿：
[表生成器](/tools/table-generator/) 在浏览器中运行。决赛桌
仍应在标题中命名度量并将 ± 定义为 std 或 se。

如果场地允许，请在附录表中报告种子和超参数范围。
主表保持可扫描状态。

## 算法和列表

伪代码属于“algorithm2e”或“algorithmicx”，而不是等宽字体
段落。真正的训练片段属于“listings”或“minted”
语言设置，以便审阅者可以浏览。保持主论文简短；放置完整配置
在附录或带有提交哈希的存储库链接中。

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

您引用的数字算法。不要将五页 PyTorch 转储到 PDF 中。

## 来自 TensorBoard 和 matplotlib 的数据

尽可能导出 PDF 或 SVG。 300dpi 的光栅 PNG 适合 UI
屏幕截图，不适用于线图。裁剪 `\includegraphics` 之前的空白。如果一个
浮动逃到下一部分，在与“[H]”战斗之前确定大小和位置
一小时：[浮动放置](/learn/figure-wrong-position/)。

多面板消融：使用“subcaption”在 TeX 中构建，或在外部编写
包括一份 PDF。在各个数字中保持“我们的”颜色一致，以便撇取者
学习一次传奇。

## 两列会议类

NeurIPS、ICML、ICLR 和 CVPR 风格的类别会更改边距和浮动规则。
尽早针对官方类进行编译。页数限制是真实存在的；不要压碎
字体。当以下情况时，将校样和额外的删减移至附录或补充 PDF：
呼叫允许。

## 相关工作和引用

使用稳定的引用键和干净的学者导出。验证`.bib`：
[BibTeX 验证器](/tools/bibtex-validator/)。引用您的代码和数据集
依赖。作者年份与数字取决于地点；使用模板的
风格，而不是混合体。

## 论文旁边的 Git

每个架构更改都应该是您可以命名的提交。处理纸张并
将代码视为同一个项目，没有两个单独备份的习惯。

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)保留论文
在真正的 Git 存储库中，旁边是具有实时数学预览的项目感知编辑器，
跨文件参考、引文完成和 SyncTeX PDF。这与 ML 代码的方式相符
已经活了。当您忘记时，将其与 [cheatsheet](/learn/cheatsheet/) 配对
截止日期下的语法。

标记与 OpenReview 或 CMT 上传匹配的提交。你会想要它
反驳期间。

## 反驳和上镜准备

反驳窗口很短。保留一个分支或文件夹用于“反驳实验”
这样您就不会污染提交的 PDF 源。相机就绪通常允许
额外的页面；使用它是为了清楚起见，而不是为了转储每个失败的运行。

## 更广泛的影响和限制

即使场地需要简短的社会影响或限制段落，
用通俗易懂的语言写出来。 LaTeX 不会保存模糊的段落。放负数
如果主页限制很紧，您可以在附录中显示结果，
并说你在正文中做了，这样审稿人就不会认为你隐藏了它们。

## 上传之前

检查各部分的注释表是否一致，主要表格是
可读，具有命名和定义的指标，并引用了算法和数字
按顺序。确认官方类在页数限制内编译无字体
犯罪行为，“.bib”中引用的代码和数据是干净的，并且提交哈希是
为上传的 PDF 进行记录。

机器学习实验已经足够嘈杂了。保持符号和表格安静。