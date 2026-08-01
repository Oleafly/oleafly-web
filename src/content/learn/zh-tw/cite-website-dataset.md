---

title: "網頁、影片、資料集"
description: "脆弱 URL 的雜項/線上條目和存取日期。"
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 網頁、影片、資料集

BibTeX 是在 20 世紀 80 年代為期刊、書籍和會議記錄而設計的，因此它沒有網頁、YouTube 影片或 Zenodo 上的資料集的原生概念。您仍然需要不斷地引用這些內容，標準的解決方法是“@misc”條目類型，它接受幾乎任何欄位組合，並讓樣式合理地列印它們。

## @misc 模式

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

這裡有三個細節很重要。 `{{Oleafly Contributors}}` 周圍的雙大括號告訴 BibTeX 將整個字串視為一個字面名稱；如果沒有它們，它會將「Contributors」解析為姓氏，並將其餘部分縮寫為「O. Contributors」。 `howpublished` 欄位是經典 BibTeX 中 URL 的常用位置，將位址包裝在 `\url{...}` 中會以等寬字體排版，並讓它乾淨地跨行（為此載入 `url` 或 `hyperref` 套件）。 「note」欄位保存存取日期，這很重要，因為網路內容會改變並消失。該日期告訴讀者您實際看到的頁面版本。

## biblatex 替代方案：@online

如果您的文件使用 biblatex，則有一個專用類型。 “@online”條目採用正確的“url”和“urldate”字段，因此同一來源變為“url = {https://oleafly.com}”和“urldate = {2026-07-24}”，並且樣式為您格式化訪問日期。當參考書目風格支援時，首選“@online”；當您必須與經典的“.bst”文件保持相容時，請回退到“@misc”。兩個系統之間的差異在 [Classic BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中列出。

## 資料集和軟體

當 DOI 存在時，資料集和程式碼發布不僅僅需要一個簡單的 URL。像 Zenodo 和 Figshare 這樣的儲存庫會創建 DOI，因此引用可以比任何一種託管設定更長久。將 DOI 放入「doi」欄位中，或將 DOI 放入「howpublished」中，作為經典樣式的「\url{https://doi.org/10.5281/...}」。當工件進行版本控制時，請包含「版本」註釋，因為讀者在五年內下載的「資料集」可能不是您分析的資料集。許多項目也發布首選引文，通常在儲存庫的“CITATION.cff”文件中。使用它比自己猜測字段既禮貌又更準確。

## 影片和其他奇怪的來源

對於視頻，請將頻道或創建者放在“author”中，將視頻標題放在“title”中，將平台和 URL 放在“howpublished”中，將上傳年份放在“year”中，將您的訪問日期放在“note”中。任何不尋常的事物的一般規則都是相同的：捕獲它的製作者、它的名稱、讀者可以在哪裡找到它以及您何時查看，並且“@misc”將通過任何樣式安全地攜帶所有這些信息。