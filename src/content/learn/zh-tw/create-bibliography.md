---

title: "建構持久的 .bib"
description: "條目類型、必填欄位、穩定鍵。"
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 建構一個持久的 .bib

「.bib」檔案是一個小型純文字資料庫，其中包含您可能引用的所有內容。每個條目都有一個類型、一個鍵和一組字段，同一個文件可以為您多年來撰寫的每一篇論文提供服務。現在，在如何選擇類型、填充欄位和命名鍵方面進行一些紀律，可以在以後當日記風格突然需要您從未記錄過的欄位時避免真正的痛苦。

## 條目剖析

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

「@」後面的單字是條目類型，它告訴樣式這是什麼類型的工作，以及需要哪些欄位。 `knuth84` 是引用鍵，也就是您在 `\cite{...}` 中鍵入的句柄。其他一切都是一個領域。 「author」欄位使用「Last, First」形式，因此樣式可以可靠地縮寫和排序名稱，「pages」使用雙連字符，LaTeX 將其排版為頁面範圍破折號。

## 您實際需要的條目類型

六种类型几乎涵盖了所有学术写作。對期刊論文使用“@article”，對會議和研討會論文使用“@inproceedings”，對書籍使用“@book”，對論文使用“@phdthesis”，對機構報告和許多預印本使用“@techreport”，對其他任何內容（包括軟體和網站）使用“@misc”。選擇正確的類型很重要，因為樣式的格式各不相同：「@inproceedings」條目需要「booktitle」（會議名稱），而「@article」需要「journal」。

## 必填字段，以及驗證器抱怨的原因

每種類型都有必填字段，缺少一個字段是參考書目條目損壞或觸發後端警告的最常見原因。對於“@article”，要素是“author”、“title”、“journal”和“year”；對於“@inproceedings”、“author”、“title”、“booktitle”和“year”。缺少“年份”或“作者”是典型的失敗，因為沒有它們，作者年份樣式實際上無法建立引文標籤。 「volume」、「pages」、「doi」和「publisher」等選用欄位使條目更有用，因此當來源在您面前時記錄它們。您可以使用 [BibTeX 驗證器](/tools/bibtex-validator/) 一次檢查整個檔案。

## 能保存十年的鑰匙

引文鍵是永久的。每個草稿、筆記和幻燈片中的每個「\cite{knuth84}」都引用了該確切的字串，因此重命名鍵意味著追蹤所有使用情況。選擇一個約定，例如“authorYEAR”或“authorYEARkeyword”，從第一天開始應用它，並且永遠不要“清理”已建立的資料庫中的鍵。如果您在 Zotero 中管理參考文獻，Better BibTeX 外掛程式可以為您產生並固定穩定的金鑰；請參閱[將 Zotero 轉換為 .bib 檔案](/learn/zotero-latex/)。若要將文件連接到文件中，請從 [從 .bib 鍵到文字參考](/learn/add-itations/) 開始。