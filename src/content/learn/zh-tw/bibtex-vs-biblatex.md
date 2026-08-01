---

title: "經典 BibTeX 或 biblatex"
description: "後端、樣式以及日常變化。"
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# 經典 BibTeX 或 biblatex

LaTeX 有兩個引用系統，它們讀取相同的“.bib”文件，但幾乎在其他所有方面都不同。經典 BibTeX 可以追溯到 20 世紀 80 年代：一個小型外部程式使用以自己的基於堆疊的語言編寫的樣式檔案來格式化您的參考文獻。 biblatex 是現代的替代品：格式化發生在 LaTeX 本身中，並由一個名為「biber」的幫助程式進行排序和資料處理。這些名字非常相似，令人困惑。請記住，「BibTeX」既是舊程序，也是舊系統，而「biblatex」則是使用「biber」作為後端的 LaTeX 套件。

| | BibTeX |比布拉克斯+比伯|
| --- | --- | --- |
|年齡 |經典|現代|
|風格 | `.bst` | `.bbx`/`.cbx` |
|統一碼 |脆弱|強|
|期刊支持|通用|成長|

## 這些差異在實踐中意味著什麼

樣式行最重要。 BibTeX 樣式是「.bst」文件，幾乎沒有人可以閱讀或修改，因此您可以採用期刊提供的內容。 biblatex 樣式是普通的 LaTeX，分為參考書目 (`.bbx`) 和引文 (`.cbx`) 元件，並且諸如刪除 URL 或更改標點符號之類的小更改是單行自訂。如果您的引用包含重音的名稱或非拉丁腳本，則 Unicode 行很重要。經典 BibTeX 會破壞它們，除非每個字元都被轉義為 `\'{e}` 和朋友，而 biber 本身處理 UTF-8。最後一行是經典 BibTeX 倖存下來的原因：大多數期刊和會議仍然分發「.bst」文件並期望經典的工具鏈，而提交系統通常拒絕其他任何內容。

## biblatex 文件是什麼樣的

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

與經典模式相比，“\addbibresource{refs.bib}”（帶有擴展名）移到了序言中，“\printbibliography”取代了“\bibliography{refs}”，並且沒有“\bibliographystyle”行，因為樣式是套件選項。建置必須執行 `biber` 而不是 `bibtex`；運行錯誤的後端是導致[空參考書目](/learn/bibliography-empty/) 的常見原因。

## 如何選擇

讓場地決定何時可以。如果範本附帶了「.bst」檔案或作者說明提到了 BibTeX，請使用經典 BibTeX 並且不要對抗它。當格式由您控制時，例如論文、預印本或講義，biblatex 是更好的工具：更清晰的定制、真正的 Unicode 支援以及專為 Web 資源構建的條目類型。您的“.bib”資料庫在任一系統下都保持不變，因此該選擇永遠不會是永久的。兩者之間的引文指令有所不同，[natbib 習慣與 biblatex 指令](/learn/natbib-vs-biblatex/) 將一組對應到另一組。