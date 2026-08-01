---

title: "PDF 查看器中的文本模糊"
description: "输入 3 种位图、轮廓字体、矢量图。"
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# PDF 查看器中的文本模糊

您的 PDF 编译干净，但文本在屏幕上看起来很软或呈锯齿状，放大会使情况变得更糟而不是更好。您的观看者没有任何问题。该文档包含位图字体。它将字母形状存储为以一种固定分辨率渲染的像素网格，而不是将它们存储为可缩放轮廓。在 PDF 术语中，这些是 Type 3 字体。它们以生成的分辨率在纸张上打印，这就是问题几十年来一直存在的原因，但在屏幕上，除了原始缩放级别之外，它们在任何缩放级别上都会变得模糊。现代轮廓格式（Type 1、TrueType、OpenType）可以清晰地缩放，因为形状是数学曲线。

## 确认诊断

缩放是快速测试：轮廓字体在 800% 时保持锐利，位图溶解为可见像素。为确保确定性，请在 PDF 查看器中打开文档属性并查看字体面板。在 Adob​​e Reader 中，它位于“文件”、“属性”、“字体”下，任何列为“类型 3”的字体都是位图。这项检查的重要性超出了美观的范围，因为 arXiv 和许多出版商拒绝包含 Type 3 字体的提交。

## 位图的来源和修复

通常的来源是旧的字体设置。非常古老的 TeX 安装通过 METAFONT 将 Computer Modern 呈现为位图，并且一些遗留包和古老的 `\usepackage{times}` 时代堆栈仍然引入位图变体。通过用现代堆栈替换旧字体命令来修复它：

```latex
\usepackage{newtxtext,newtxmath}
```

这给出了具有匹配数学的大纲 Times，如 [Times、Arial、Helvetica-like stacks](/learn/times-arial-helvetica/) 中详细介绍。如果您想要默认外观而不是 Times，`\usepackage{lmodern}` 将 Computer Modern 替换为其轮廓后继者 Latin Modern。使用 XeLaTeX 或 LuaLaTeX 和“fontspec”进行编译完全回避了这个问题，因为这些引擎使用通过构造勾勒出轮廓的 OpenType 系统字体。现代引擎（例如 Oleafly 捆绑的基于 XeTeX 的 Tectonic）不会自行生成 Type 3 文本；当它出现在那里时，位图字体是通过包含的图形到达的。

## 同一问题的图形版本

PDF 中的模糊文本并不总是文档字体。如果段落清晰，但绘图内的标签模糊，则图形本身是光栅图像，通常是绘图的 PNG 屏幕截图或以屏幕分辨率导出的图表。解决方法与上一级的思路相同：从绘图工具将图形导出为矢量 PDF，因此它们的文本也是轮廓。格式指南位于[插入图片](/learn/insert-images/)。

进行任何修复后，再次检查字体面板，而不是相信默认缩放时您的眼睛。一个人物或一个包裹留下的单个 Type 3 条目足以退回提交。