---

title: "natbib 習慣與 biblatex 指令"
description: "括號和文字引用，以及替換它們的名稱。"
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib 習慣與 biblatex 指令

作者年份引用需要兩種類型的 cite 命令。有時作者是句子的一部分，如「Knuth (1984)介紹了文學程式設計」。有時，引文會放在括號中，例如「文學程式混合了代碼和散文（Knuth，1984）」。普通的 `\cite` 無法做出這種區分，這就是為什麼 `natbib` 套件存在的原因，也是為什麼 biblatex 為相同的想法提供了自己的一組名稱。如果您學習了其中一個並獲得了使用另一個的模板，則此頁面就是翻譯表。

## natbib 指令

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

助记符是“\citet”是作为句子一部分读取的*文本*引用，而“\citep”是包含在方括号中的“括号”引用。带星号的变体打印完整的作者列表，而不是“et al.”，这是您第一次引用作品时偶尔需要的。 natbib 還提供僅用於名稱的“\citeauthor”，僅用於年份的“\citeyear”，以及用於頁碼的可選參數，如“\citep[p.~42]{knuth84}”。 natbib 是一個預處理器時代的套件：它與經典的 BibTeX 和相容的“.bst”樣式一起使用，例如“plainnat”或“apalike”。

## biblatex 等價物

biblatex 涵蓋了相同的領域但有不同的名稱。 `\textcite{knuth84}` 產生文字形式“Knuth (1984)”，`\parencite{knuth84}` 產生括號“(Knuth, 1984)”，而普通的 `\cite{knuth84}` 產生一個記憶體引用，其確切外觀取決於裸的樣式。其餘的也有直接的類似物：`\citeauthor`、`\citeyear`，以及頁碼等內容的前註和後注，寫作`\parencite[see][p.~42]{knuth84}`。如果肌肉記憶是問題所在，biblatex 甚至有一個「natbib=true」套件選項，將「\citet」和「\citep」定義為別名，​​這使得遷移幾乎無痛。

## 將文件從 natbib 遷移到 biblatex

您的“.bib”檔案根本不需要更改。兩個系統讀取相同的資料庫。遷移僅涉及序言和建置。刪除 `\usepackage{natbib}` 和 `\bibliographystyle` 行，然後載入 `\usepackage[backend=biber,style=authoryear]{biblatex}` 並使用 `\addbibresource{refs.bib}` 將其指向您的資料庫。將文件末尾的“\bibliography{refs}”替換為“\printbibliography”。最後，確保構建運行“biber”而不是“bibtex”，因為 biblatex 以不同的格式存儲其數據，而舊後端將默默地生成任何內容。如果您不想觸摸正文，請透過相容性選項保留 natbib 命令名稱，並且僅更改前導碼。

## 選擇哪一個

如果日記模板已經載入 natbib，請繼續使用它。與類別文件作鬥爭很少值得。對於您選擇的新文檔，biblatex 更加靈活並且可以更好地處理 Unicode。更廣泛的比較位於 [Classic BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中，之後的風格切換在 [數字、作者年份、期刊樣式](/learn/change-itation-style/) 中介紹。