---

title: "Springer、Elsevier 和 LNCS 格式"
description: "llncs、Springer Nature 期刊和 elsarticle：單列類別和相機就緒來源。"
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer、Elsevier 和 LNCS 格式

在 IEEE 和 ACM 生態系統之外，兩家出版商佔據主導地位：Springer（包括 Springer Nature）和 Elsevier。他們的課程看起來比兩列會議風格更簡單，這是設計使然。出版商排版最終版本。

## LNCS：訴訟主力

如果您的會議在計算機科學講義（或其兄弟 LNAI 和 LNBI）中發表，您可以在“llncs”中編寫：

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS 論文是單欄的，使用「\inst{}」上標將作者對應到機構，並且預設頁面預算非常緊張（通常為 12 到 16 頁，包括參考文獻）。預設情況下，並非每個 TeX 發行版中都有該類別。從 Springer 的 LNCS 頁面下載作者工具包。其參考書目風格為“splncs04”：

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## 施普林格自然期刊

Springer 期刊歷史上使用“svjour3”，並已遷移到較新的“sn-jnl”類，其中每個期刊系列都有樣式選項（“sn-mathphys-num”、“sn-basic”等）。該期刊的「提交指南」頁面列出了確切的類別和選項。不要猜測：兩個 Springer 期刊可能需要不同的類別。

## 愛思唯爾：elsarticle

愛思唯爾期刊共享一個類，「elsarticle」：

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

「預印」選項提供了寬敞的雙倍行距單欄供審閱，而帶有「1p」、「3p」或「5p」的「final」則模仿了期刊的印刷佈局。參考書目樣式為“elsarticle-num”（編號）或“elsarticle-harv”（作者年份），與期刊使用的樣式相符。

## 快速比較

|出版商 |班級 |專欄 |圍兜風格|
|---|---|---|---|
|施普林格 LNCS | `LLNCs` |一| `splncs04` |
|施普林格自然雜誌 | `sn-jnl` （原為 `svjour3`）|一|依期刊選項 |
|愛思唯爾 | `elsarticle` |一（評論）| `elsarticle-num` / `-harv` |

## 為什麼是單列？因為你不是排字工

這些類別呈現您的*手稿*，而不是最後一頁。出版商的製作團隊將已接受的論文重新排版到期刊的內部版面。這也是為什麼「相機就緒來源上傳」在這裡意味著特定的東西：您上傳`.tex`，`.bib`和圖形文件，而不僅僅是PDF，因此生產可以重建和重新設計紙張。實際後果：

- 保持原始碼乾淨並且可以從新的結帳中編譯：沒有絕對路徑，沒有遺失的數字
- 請勿破壞間距或邊距。生產無論如何都會剝離它（並且它可以[被標記](/learn/page-limits-without-crimes/)）
- 使用標準包。異國情調的內容會被生產重寫或退回給您

這些類別依賴相當數量的套件，因此最小安裝可能會在第一次編譯時取得多個套件。如果拒絕出現，請參閱[安裝缺少的軟體包](/learn/install-missing-package/)。如果模板完全錯誤，請像任何[損壞的模板](/learn/fix-broken-template/) 一樣對其進行分類。