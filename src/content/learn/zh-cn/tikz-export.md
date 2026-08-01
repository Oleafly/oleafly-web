---

title: "独立 TikZ 转 PDF 或 PNG"
description: "独立类和外部化缓存。"
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 独立 TikZ 转 PDF 或 PNG

TikZ 图片通常位于纸张内，但您通常需要将图表作为自己的文件：在幻灯片中重复使用它，将其交给在 Word 中工作的合著者，在需要 PNG 的地方上传它，或者只是为了避免在每个文档构建中重新编译昂贵的绘图。 “独立”文档类正是为此而存在。它在页面上排版一张图片并裁剪为图片的大小：

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## 类选项的作用

“tikz”选项为您加载 TikZ 包，并告诉“standalone”将输出页面紧紧围绕“tikzpicture”裁剪，因此生成的 PDF 与绘图完全一样大，没有页边距。 “border=2pt”选项在所有侧面添加一个两点缓冲，这可以防止恰好位于边界框上的笔划被查看者或打印机刮掉。像任何文档一样编译此文件，输出是一个小的、经过严格裁剪的 PDF，仅包含图表。

更喜欢 PDF，因为它是矢量：它可以缩放到任何尺寸而不会模糊。使用“\includegraphics”将其放入另一个文档中的工作方式如[将 PDF 页面作为图形](/learn/include-pdf-as-figure/) 中所述。当确实需要光栅副本时，请转换编译的 PDF，而不是重新创建绘图。诸如“pdftoppm -png -r 300figure.pdffigure”之类的命令行工具可生成 300 dpi PNG，而“pdf2svg”或 Inkscape 可生成 SVG。如果要打印 PNG，请以 300 dpi 或更高的分辨率导出。

## 使用externalize缓存图片

在大型文档中，TikZ 图片在每次编译时都会重新绘制，并且少数复杂的绘图可能会主导构建时间。 “external”库通过将每张图片编译为其自己的 PDF 一次来修复此问题，然后重复使用缓存的文件，直到图片的代码发生更改：

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

`prefix` 选项将生成的文件保留在它们自己的文件夹中。外部化以生成子编译的模式运行编译器，因此它需要启用 shell 转义并且与某些设置交互很差。如果它让您感到困扰，请将每个大图片移至其自己的“独立”文件中，并包含编译后的 PDF。这为您提供了相同的手动缓存，而使用的机器更少。 [更短的等待 PDF](/learn/speed-up-compilation/) 中涵盖了一般的编译时间。

一个常见的错误值得警告：不要截取渲染图来获取 PNG。屏幕截图捕捉屏幕分辨率，在幻灯片预览中看起来可以接受，而在其他地方则显得模糊。从 PDF 进行转换，分辨率由您选择。