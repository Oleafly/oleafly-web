---

title: "經濟學與社會科學：期刊接受的迴歸表"
description: "booktabs、triparttable、siunitx star、註釋下估計、biblatex 習慣以及經濟學、政治科學和社會學的工作論文版本控制。"
date: 2026-06-26
tags: [economics, social-science, tables]
---

實證社會科學的生死取決於表格。未對齊的小數或
缺少重要性的星星可能會燒毀一個沒有任何內容的修改和重新提交週期
與你的識別策略有關。期刊幾乎關心可讀性
和係數一樣多。

以下是针对从 Stata 或 R 导出然后清理的学生和 RA
手工乳膠。

## booktabs 不是可選的

垂直線和雙水平線看起來像 20 世紀 90 年代的 Word。使用三個
來自“booktabs”的水平規則：

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

請參閱[三規則表](/learn/booktabs-beautiful/)。從 R 匯出
（“modelsummary”、“estout”風格的工具、較舊的“stargazer”）或 Stata 到 LaTeX
碎片，然後自己清理標題行。自動產生的標頭是
對於最終的 PDF 來說通常太寬或太神秘。

## 表下註釋，不是隨機腳註

`twoparttable` 讓標題、表格和註解保持相同的寬度：

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

輸入樣本大小、固定效應、聚類 SE 註記和顯著性星號
傳說在這裡。不要在只有某些讀者才使用的單一單元格上添加腳註
會注意到的。面板標籤 (A/B) 位於標題或中間規則中，且清晰
文本，而不是從未出現在 PDF 中的圖形樣式圖例。

## 數字列和重要性星星

`siunitx` 欄位類型 (`S`) 在小數點上對齊。僅此一點就使
結果表看起來是故意的。星星打破了純數字列，所以你
通常需要自訂格式或文字列。常見模式：

在單獨的行上報告係數和SE（經濟學中的標準），或包裹星號
因此對齊仍然有效（使用專用列類型的“0.012^{***}”）。

各表保持一致：相同的星級閾值、相同的 SE 樣式、相同的數字
同一度量的小數位數。評審員將表 2 與表 3 進行比較
目的。

視覺初稿就可以了。瀏覽器
[表格產生器](/tools/table-generator/) 可以繪製結構圖；決賽
表仍應經過“booktabs”和您的 SE 筆記。

## 從回歸軟體到相機就緒

典型的循環如下圖所示。凍結估計腳本和種子。導出一個
估計的 LaTeX 片段或 CSV。將其放入穩定的桌殼中
標籤（`tab:main`、`tab:robust`）。寫下標題，以便瀏覽者知道
因變數、樣本和估計量，無需閱讀註釋兩次。
編譯，然後透過切割列來修復過滿的盒子；僅作為最後輪換
度假村。

如果表格比頁面長，請切換到「longtable」（或分割面板）
在截止日期週之前，而不是在期刊抱怨 7pt 字體之後。

## 引用：作者年份是方言

大多數經濟和政治科學場所都期望作者年份。 `biblatex` 與
`style=authoryear`（或期刊的風格）從長遠來看比戰鬥更容易
`.bst` 檔案。如果實驗室仍然使用“natbib”，那很好；只是不要混合
兩個堆疊都在一個序言中。概述：
[BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/)。

密钥应该稳定（“作者：年份：关键字”）。从 Zotero 重新出口
项目中期的新关键是“\cite”如何打破提交周。驗證
缺失年份和期刊的“.bib”：
[BibTeX 验证器](/tools/bibtex-validator/)。

## 工作文件和 SSRN

工作文件版本每月更改一次。將標題頁日期保留在巨集中：

```latex
\newcommand{\paperdate}{June 2026}
```

重新匯出 PDF 時將其撞掉。本地 Git 歷史記錄比
共用磁碟機上的「final_final_v7.pdf」。當主表設定時提交
編譯；明確標記或訊息提交版本。

研究編輯將項目視為真正的 Git 儲存庫（檢查點
編譯後，恢復，可選私有GitHub）與經驗工作相匹配
已經版本代碼。論文和評估腳本不應該存在
根據不同的備份習慣。

## 識別與餐桌道德（簡短版）

LaTeX 無法修復弱設計，但它可以使強設計變得可讀。
在標題中說明估計量和樣本。不要隱瞞這樣一個事實
第 (3) 欄在沒有人讀的腳註中刪除了一半的樣本。如果你顯示
穩健性表，保持與主表相同的因變數順序，以便
讀者可以掃描。

## 預提交清單

遲到咬人的事情：

- 三規則表；沒有垂直規則。
- 十進制對齊；一致的星星和 SE 註釋。
- 標題說明結果、樣本、估計器。
- 標籤穩定；文字引用“\ref{tab:...}”。
- 參考書目風格與場地相匹配； `.bib` 已驗證。
- 工作文件日期和 Git 提交與您上傳的內容相符。

## 複製包

更多期刊需要程式碼和數據。將表格匯出腳本放在紙張旁邊
存儲庫（或與提交哈希鏈接）。當係數因以下原因而改變時
清理腳本已更改，重新產生 LaTeX 片段並重新提交兩者。一個
無法複製的表格即使看起來很乾淨也是一種責任。

## 研討會用投影儀

盡可能在投影片中重複使用相同的「booktabs」片段，或匯出 PDF
桌子上的莊稼。手動將數字重建到幻燈片中的方法是
研討會投影片與論文不一致。

制定正確的表格，辨識策略就能得到公平的聽證。獲取
他們錯了，你們花了一輪時間爭論格式。