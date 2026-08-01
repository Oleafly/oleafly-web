---

title: "Zotero 轉換為 .bib 文件"
description: "更好的 BibTeX、自動匯出、機器生存的關鍵。"
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# 將 Zotero 轉換為 .bib 文件

Zotero 非常擅長收集參考資料：它從瀏覽器按鈕獲取元資料和 PDF，並使所有內容都可搜尋。另一方面，LaTeX 只讀取“.bib”檔案。兩者之間的橋樑是 Better BibTeX 插件。它將 Zotero 集合轉換為保持最新的“.bib”文件，並且同樣重要的是，保持引用鍵穩定，以便您的“\cite”命令永遠不會中斷。

## 為什麼內建匯出不夠

Zotero 可以自行匯出 BibTeX，但它每次都會重新產生引文鍵，並且從「knuth_literate_1984」更改為「knuth_literate_1984-1」的鍵會默默地破壞每個使用舊名稱的「\cite」。匯出也是一次性快照，因此在您添加論文的那一刻文件就會過時。 Better BibTeX 解決了這兩個問題：金鑰是根據您選擇的公式產生的，可以固定，這樣它們就不會改變，而且匯出可以自動刷新。

## 設定管道

首先，透過 Zotero 的工具、外掛程式對話方塊從其網站安裝 Better BibTeX，然後重新啟動 Zotero。其次，在 Better BibTeX 首選項中決定引文關鍵公式。產生諸如“knuth1984”或“knuth1984literate”之類的鍵的模式很容易鍵入並且易於在原始程式碼中識別。第三，右鍵單擊屬於您論文的集合，選擇匯出集合，選擇 Better BibTeX 格式，然後勾選“保持更新”，然後將檔案儲存到專案資料夾中，例如“refs.bib”。從那時起，在 Zotero 中新增或編輯項目會在幾秒鐘內重寫文件。

最後，使用“\bibliography{refs}”或“\addbibresource{refs.bib}”將文件指向匯出的文件，就像手寫資料庫一樣。 [從 .bib 鍵到文字參考](/learn/add-itations/) 中介紹了接線。

## 分工

將 Zotero 視為主資料庫，並將「.bib」檔案視為存在於論文儲存庫中的生成工件。將“.bib”與“.tex”一起提交意味著共同作者或另一台機器上的您可以在根本不安裝 Zotero 的情況下編譯論文。請勿手動編輯已匯出的文件。下一次自動匯出將覆蓋您的變更。相反，在 Zotero 中修復元數據，並且更正會繼續進行。如果匯出後條目看起來仍然錯誤，請透過 [BibTeX 驗證器](/tools/bibtex-validator/) 運行它，以查看樣式對哪個欄位不滿意。

一個習慣可以避免大多數未來的痛苦：一旦手稿中出現某個鍵，將其固定在 Better BibTeX 中（右鍵單擊該項目，Better BibTeX，固定 BibTeX 鍵）。固定鍵可以承受公式變更、機器移動和庫重組，而這正是引文鍵需要做的事情。