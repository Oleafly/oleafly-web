---

title: "你作为本科生的第一份 LaTeX 实验报告"
description: "从零到编译报告：模板、方程、图形、参考文献和不需要手动管理 TeX Live 的编译路径。"
date: 2026-07-02
tags: [students, beginners, lab-report]
---

您无需掌握 LaTeX 即可完成实验报告。你需要一个模板，一个
几个命令，以及一个在第一天就可以使用的编译按钮。其他都可以
等到后面的课程要求提供论文类文件。

这是一条优先考虑干净 PDF 而非完美排版的捷径。

## 如果可以的话，跳过多千兆字节的安装

带有捆绑引擎的桌面研究编辑器（例如
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) 为您提供 PDF
无需管理 TeX Live。你会得到模板、错误卡
损坏了，源文件旁边的 PDF 带有点击跳转功能，并且文件历史记录没有
单独的 Git 课程。如果您的讲师需要特定的分布或
背面，遵循课程笔记。否则优化启动。

当课程已经使用云编辑器时，它们也很好。目标是 PDF
按时，而不是工具链身份。

## 窃取一个骨架，然后删除一半

从一个简单的“文章”模板开始：

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

更多详细信息：[编译您的第一个 PDF](/learn/first-document/) 和
[快速参考](/learn/cheatsheet/)。

删除您的标题不需要的部分。不要复制 40 篇论文
序言“以防万一”。额外的软件包是初学者遇到他们无法犯的错误的原因
阅读。

## 实验室方程式，而非教科书方程式

内联：`$F = ma$`。展示：

```latex
\[
  v = v_0 + at
\]
```

仅对稍后用“\eqref”引用的内容进行编号。如果助教询问不确定性，
把它放在一个句子或一个小表格中，而不是十行的“对齐”，你不这样做
还明白。分数：`\frac{a}{b}`。平方根：`\sqrt{x}`。

当编译日志显示一些可怕的内容时，仅修复第一个错误，然后
重新编译。后来的错误通常是第一个错误的噪音。

## 一张图，做得很好

从分析工具中将绘图导出为 PDF 或 PNG 格式。将其包含在：

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

文中：“图~\ref{fig:vr} 显示...”。图下方的说明文字。标签
在标题之后。如果图形浮动到错误的页面，请稍微缩小宽度
在你与安置选项斗争一个小时之前：
[浮动放置](/learn/figure-wrong-position/)。

## 没有痛苦的桌子

对于几行，一个简单的“表格”就足够了。在上面添加一个带有“table”的标题
+ `\标题`。对齐数字，以便助教可以扫描它们。你不需要
实验室 1 上的出版级“booktabs”，但如果可以的话，请避免垂直线汤。

## 没有博士参考书目工作流程的参考文献

对于三个引文，手动列表有效：

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

有关更多信息，请从 Google Scholar 或 Zotero 导出“.bib”并清理密钥，以便
它们简短易读。损坏的引用打印为“[?]”：
[清除神秘的引文标记](/learn/引用-问号/)。

按照课程要求的方式引用实验手册和教科书（IEEE、APA-ish 或
一个简单的编号列表）。匹配标题胜过匹配日记。

## 初学者常见错误

- 在“\includegraphics”之前忘记“\usepackage{graphicx}”
- 文本中的特殊字符如“%”和“_”无需转义
- 不匹配的“$”数学分隔符
- 带有空格的文件名（“我的plot.pdf”）包含在内
- 编辑与您编译的文件夹不同的文件夹

慢点，修复第一行日志，重新编译。

## 上交PDF，保留源码

提交 LMS 要求的内容（通常为 PDF）。将“.tex”和数字保存在
课程结束后您仍然拥有的文件夹。将来你会重复使用这个骨架
以便下一次报告。如果你的编辑器自动保存 Git 历史记录，甚至
更好：您可以恢复删除正确方程之前的版本。

## 第一节 90 分钟

如果您今晚开始：

1. 打开模板或粘贴上面的骨架。
2. 填写标题、名称、章节标题。
3. 添加一个您已知正确的方程式。
4、导出一张图；包括它；为其添加标题；在结果中引用它。
5. 按照课程要求添加两个参考文献。
6. 编译直到 PDF 看起来像一份报告，而不是一篇空白文章。

当标题被覆盖时停止。不要在套餐选择上花费一整晚的时间。

## 当东西坏了的时候

只读取第一个错误。常见修复：缺少“$”、缺少软件包
图形，错误的文件名，额外的`}`。保存之前编译版本的副本
大编辑，这样你就可以回去了。如果同学的序言适用于该课程，
借用他们使用的最小包，而不是整个论文堆栈。

## 成功是什么样的

PDF 打开，页边距看起来合理，图形有标题，方程是
可读性强，标题标题清晰。对于第一次来说这已经足够了
LaTeX 实验室报告。排版完美可以等待真正需要的论文
它。