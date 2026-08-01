---

title: "數字、作者年份、期刊風格"
description: "交換樣式而不重寫資料庫。"
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 數字、作者年份、期刊風格

引文樣式控制兩件事：文字內標記的外觀，例如“[12]”與“(Knuth，1984)”，以及參考清單中每個條目的格式。好消息是該樣式與您的“.bib”資料庫完全分開。您可以透過更改序言中的一行，將論文從數位年份切換為作者年份，或針對不同的期刊重新格式化它。您的條目保持原樣。

## 使用經典 BibTeX 改變風格

對於 BibTeX，樣式位於 `\bibliographystyle{...}` 指令中，該指令命名一個 `.bst` 檔案。交換參數並重新編譯：

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

期刊和會議通常會發布自己的「.bst」文件，例如「IEEEtran.bst」或「ACM-Reference-Format.bst」。將該檔案放在“main.tex”旁邊，並將其命名為“\bibliographystyle”。請注意，「.bst」是一次性烘焙的；如果場地需要作者年份引用，您還需要「natbib」套件來取得「\citep」和「\citet」等指令。

## 使用 biblatex 改變樣式

對於 biblatex，樣式是包本身的一個選項：

```latex
\usepackage[style=authoryear]{biblatex}
```

其他常見值包括“style=numeric”、“style=numeric-comp”，用於壓縮範圍，例如附加包中的“[3-6]”、“style=alphabetic”以及“style=apa”或“style=ieee”。因為 biblatex 樣式是用 LaTeX 而不是舊的“.bst”語言編寫的，所以它們更容易調整，例如更改標點符號或刪除 URL。

## 切換後重新編譯正確

任何樣式更改後，舊的輔助檔案仍然包含先前樣式格式化的數據，因此運行一個完整的循環：編譯一次，運行後端（“bibtex”用於經典 BibTeX，“biber”用於 biblatex），然後再編譯兩次，以便解決交叉引用。 Oleafly 會為您執行此循環，但如果手動切換後引文看起來過時，刪除「.aux」和「.bbl」檔案並從頭開始重建可以清除它。

## 您應該使用哪個系列？

如果目標場所提供了「.bst」文件或需要 BibTeX 的類，請使用經典 BibTeX；大多數期刊仍然存在這種情況。如果您自己控制格式，例如在論文或預印本中，biblatex 是更有效的選擇。 [經典 BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中介紹了這些權衡，[natbib 習慣與 biblatex 指令](/learn/natbib-vs-biblatex/) 中介紹了指令差異。