---

title: "作為圖形的 PDF 頁面"
description: "包括帶有頁面選擇的圖形和用於附錄的 pdf 頁面。"
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 作為圖形的 PDF 頁面

PDF 是 LaTeX 可以使用的最佳圖形格式。與 PNG 或 JPG 不同，PDF 儲存向量數據，因此線條和標籤在任何縮放等級都保持清晰，並且其中的字體隨文件一起移動。 Matplotlib、Inkscape 和 draw.io 等工具都可以匯出 PDF，這意味著您在其他地方繪製的圖表可以直接放入您的文件中。但 PDF 帶來了圖像所沒有的問題：一個 PDF 可以包含許多頁面，您必須告訴 LaTeX 您想要哪一頁。

## 從多頁 PDF 擷取一頁

`graphicx` 套件的 `\includegraphics` 接受 `page` 選項以及常用的大小調整鍵：

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

這裡 `page=1` 選擇 `diagram.pdf` 的第一頁，而 `width=\textwidth` 將該頁面縮放到文字區塊的整個寬度。如果省略“page”，LaTeX 會默默地使用第一頁，這通常是您想要的，但當繪圖腳本將多個圖形寫入單一檔案時，可能會讓您感到驚訝。您可以使用不同的「頁面」值多次包含相同的 PDF，每個圖形環境一次，每個都有自己的標題和標籤。

將命令包裝在正常的“figure”環境中，以便它獲得標題和數字，就像處理[任何其他圖像](/learn/insert-images/)一樣。包含的頁面將被裁剪為其自己的邊框，因此如果來源 PDF 具有足夠的邊距，則該圖形將看起來已填充。使用緊密的邊界框重新匯出，或使用「pdfcrop」等工具將其裁剪一次，而不是使用負間距來對抗空白。

## 插入帶有 pdfpages 的整個文檔

有時您根本不需要數字。您希望將整個頁面逐字放入您的文件中：補充 PDF、簽名表格、論文附錄中已發布的問卷。這就是「pdfpages」包的工作：

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

`pages=-` 值表示每一頁。您也可以為範圍編寫“pages=2-5”，或為特定清單編寫“pages={1,3,7}”。每個插入的頁面都會填入自己的輸出頁面，保留其原始佈局，並參與文件的頁碼編號，因此附錄可以連續閱讀。如果文件類別中的頁首或頁尾列印在插入頁面的頂部並且您希望抑製或自訂它們，請新增「pagecommand={}」選項。

## 哪種工具適合哪種工作

當 PDF 內容應表現得像圖形時，請使用“\includegraphics[page=...]”，這意味著它浮動、帶有標題並從文本中引用。當頁面應該以完整尺寸獨立存在時，請使用“\includepdf”。常見的錯誤是使用「pdfpages」作為圖表，這會為您提供一個無標題、未引用的完整頁面，您無法使用「\ref」引用。如果讀者會看到“參見圖3”，那麼它就屬於圖形環境。