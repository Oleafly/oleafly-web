---

title: "一個根文件，多個章節"
description: "include 與 input、includeonly 以及一次起草一章。"
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# 一個根文件，多個章節

單一「.tex」檔案中的論文在第二章左右的某個地方變得很痛苦：滾動取代了思考，每次編譯都會處理一切。標準的解決方案是一個包含類別和序言的根文件，每一章都在自己的文件中。根文件將它們縫合在一起。

## 根文件

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` 是您編譯過的唯一檔案。每個「\include」都在每個平台上使用正斜線命名另一個不帶「.tex」副檔名的文件，並在該點提取其內容。章節文件本身僅包含內容，通常以“\chapter{...}”開頭。它們沒有自己的`\documentclass`和`document`環境，因為它們是這個文件的片段，而不是文件。

## 包含與輸入

兩個包含命令的行為不同，差異決定了在何處使用哪個命令。 `\include` 在材料之前開始一個新頁面，這適合章節，並為每個包含的文件編寫一個單獨的 `.aux` 文件，這使得選擇性編譯成為可能。 `\input` 是純文字貼上：沒有分頁符，沒有單獨的 `.aux`，並且它可以嵌套在另一個輸入中。這使得「\input」成為小於一章的片段的正確工具，例如保存在自己的檔案中的大表或共享的[巨集檔案](/learn/custom-commands/)。要記住的一個結構規則是「\include」不能嵌套在包含的檔案中，而「\input」可以在任何地方使用。

## 一次起草一章

```latex
\includeonly{chapters/methods}
```

放置在序言中的「\includeonly」告訴 LaTeX 僅處理列出的文件，同時仍讀取所有其他文件保存的「.aux」資料。編譯速度顯著加快，由於其他章節的標籤和頁數是從其“.aux”文件中重播的，因此您正在起草的章節中的交叉引用和編號保持正確。後半部是喜歡這個而不是註解掉`\include`行的原因，後者完全忘記了其他章節並將每個`\ref`變成了`??`。

對完整構建的“\includeonly”行進行註釋，並始終在共享 PDF 之前運行完整的編譯，因為過時的“.aux”數據可能會落後於排除章節中所做的編輯。對於結果資料夾中的哪些檔案是您的以及哪些檔案是產生的，請參閱[真實專案中的檔案](/learn/latex-file-types/)。