---

title: "獨立 TikZ 轉 PDF 或 PNG"
description: "獨立類別和外部化快取。"
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 獨立 TikZ 轉 PDF 或 PNG

TikZ 圖片通常位於紙張內，但您通常需要將圖表作為自己的文件：在幻燈片中重複使用它，將其交給在 Word 中工作的合著者，在需要 PNG 的地方上傳它，或者只是為了避免在每個文件構建中重新編譯昂貴的繪圖。 「獨立」文檔類別正是為此而存在。它在頁面上排版一張圖片並裁剪為圖片的大小：

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## 類別選項的作用

「tikz」選項為您加載 TikZ 包，並告訴「standalone」將輸出頁面緊緊圍繞「tikzpicture」裁剪，因此生成的 PDF 與繪圖完全一樣大，沒有頁邊距。 “border=2pt”選項在所有側面添加一個兩點緩衝，這可以防止恰好位於邊界框上的筆劃被查看者或印表機刮掉。像任何文件一樣編譯此文件，輸出是一個小的、經過嚴格裁剪的 PDF，僅包含圖表。

更喜歡 PDF，因為它是向量：它可以縮放到任何尺寸而不會模糊。使用「\includegraphics」將其放入另一個文件中的工作方式如[將 PDF 頁面作為圖形](/learn/include-pdf-as-figure/) 中所述。當確實需要光柵副本時，請轉換編譯的 PDF，而不是重新建立繪圖。諸如「pdftoppm -png -r 300figure.pdffigure」之類的命令列工具可產生 300 dpi PNG，而「pdf2svg」或 Inkscape 產生 SVG。如果要列印 PNG，請以 300 dpi 或更高的解析度匯出。

## 使用externalize快取圖片

在大型文件中，TikZ 圖片在每次編譯時都會重新繪製，並且少數複雜的繪圖可能會主導建置時間。 「external」函式庫透過將每張圖片編譯為其自己的 PDF 一次來修復此問題，然後重複使用快取的文件，直到圖片的程式碼發生變更：

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

`prefix` 選項將產生的檔案保留在它們自己的資料夾中。外部化以生成子編譯的模式運行編譯器，因此它需要啟用 shell 轉義並且與某些設定交互很差。如果它讓您感到困擾，請將每個大圖片移至自己的「獨立」檔案中，並包含編譯後的 PDF。這為您提供了相同的手動緩存，而使用的機器更少。 [較短的等待 PDF](/learn/speed-up-compilation/) 涵蓋了一般的編譯時間。

一個常見的錯誤值得警告：不要截取渲染圖來取得 PNG。螢幕截圖捕捉螢幕分辨率，在幻燈片預覽中看起來可以接受，而在其他地方則顯得模糊。從 PDF 轉換，解析度由您選擇。