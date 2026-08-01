---

title: "放入一張圖"
description: "Graphicx、寬度、路徑、PDF 與 PNG。"
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# 放入​​數字

LaTeX 沒有內建影像支援。所有這些都來自“graphicx”包，它提供了“\includegraphics”命令，並且按照慣例，圖像被包裝在“figure”環境中，因此它可以帶有標題和數字。這是您將使用數百次的模式：

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## 每行的作用

`\usepackage{graphicx}` 行位於序言中的 `\begin{document}` 之前，並且無論包含多少圖像，都只需要出現一次。

「figure」環境使圖像成為浮動圖像，這意味著 LaTeX 選擇它落地的位置，而不是將其釘在文字中的確切位置。 「[htbp]」字母是您的放置首選項：「h」表示代碼出現的位置，「t」表示頁面頂部，「b」表示頁面底部，「p」表示單獨的浮動頁面。 LaTeX 以此順序嘗試它們，並選擇第一個產生不錯的頁面。如果你的人物漂移到令人驚訝的地方，這是正常的浮動行為，[浮動實際著陸的地方](/learn/position-figures/)解釋瞭如何與之協商。

`\centering` 將圖像在文字區塊內水平居中。 `width=0.8\textwidth` 將圖像縮放到文字寬度的 80%，同時保留其縱橫比，這幾乎總是比指定以厘米為單位的絕對大小要好，因為它會在文檔邊距發生變化時進行調整。檔案路徑相對於專案根目錄，因此「figures/pipeline.pdf」表示主「.tex」檔案旁的「figures」資料夾。最後，「\caption」列印編號的標題，「\label」記錄編號，以便「\ref{fig:pipeline}」可以從文字中引用它。標籤必須位於標題之後，原因請參閱[標題和標籤](/learn/captions-labels/)。

## 使用哪種文件格式

對於任何向量（即繪圖、圖表和流程圖），首選 PDF，因為向量圖形在任何縮放和任何列印尺寸下都保持清晰。使用 PNG 进行屏幕截图和其他基于像素的图像。 JPG 对于照片来说是可以接受的，因为其压缩伪影是不可见的。完全避免将文本较多的内容作为屏幕截图嵌入，因为它在打印时会模糊并且无法搜索。

在添加大照片之前也要調整它們的大小。以 8 公分寬顯示的 1,200 萬像素照片會使 PDF 膨脹並減慢每次編譯的速度，而列印尺寸縮小到大約 300 dpi 的版本看起來完全相同。

## 要避免的錯誤

不要在第一天就單獨要求「[h]」來對抗浮動。 LaTeX 經常會拒絕，然後將圖形及其後面的所有內容帶到章節末尾。編寫“[htbp]”，將圖形程式碼放在第一個引用它的段落附近，然後讓數字和引用為您進行追蹤。