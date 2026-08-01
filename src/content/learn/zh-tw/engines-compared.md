---

title: "該專案使用哪種引擎"
description: "pdfLaTeX、XeLaTeX、LuaLaTeX、Tectonic：Unicode、字型、期刊適合。"
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# 此專案使用哪個引擎

引擎是實際將“.tex”原始檔轉換為 PDF 的程式。 LaTeX 本身是一個運行在其之上的巨集層，並且有多個層可供選擇。它們接受幾乎相同的文檔，但處理 Unicode 文字和字體的方式有所不同，為一種引擎編寫的模板在另一種引擎下可能會完全失敗。每個項目選擇一次並堅持下去。

|引擎|統一碼 |系統字型|筆記|
| --- | --- | --- | --- |
| pdfLaTeX |部分|沒有 |最大期刊相容性 |
| XeLaTeX |是的 |是（`fontspec`）|非常適合多語言文件 |
| LuaLaTeX |是的 |是的 |現代、可編寫腳本 |
|構造|類 Xe |是的 |自動獲取包；油葉預設 |

## 每個引擎的用途

pdfLaTeX 是原始 TeX 的直接後代，並且仍然是大多數期刊、會議和提交系統的預設假設。它早於 Unicode，因此重音輸入需要“inputenc”約定，並且字體僅限於專門打包的 TeX 字體。作為交換，它速度快且得到普遍支持，數十年的模板都以它為目標。

XeLaTeX 原生讀取 UTF-8，並透過「fontspec」套件使用系統上安裝的任何字型名稱，例如「\setmainfont{Georgia}」。這使得它成為混合腳本的文檔、西歐以外的語言以及任何有特定字體要求的人的實用選擇。 [何時使用 XeLaTeX](/learn/when-use-xelatex/) 更深入。

LuaLaTeX 提供相同的 Unicode 和字體支持，並嵌入 Lua 腳本語言，因此套件可以在編譯時計算以前不可能的事情。它是傳統引擎的長期繼承者，但代價是編譯速度稍慢。

Tectonic 是 XeTeX 引擎的現代、獨立建造。它的顯著特點是自動依賴性處理：當文件需要您沒有的套件時，Tectonic 會按需下載它而不是失敗。正是出於這個原因，Oleafly 將 Tectonic 捆綁為其預設引擎，因此全新安裝無需任何 TeX 管理即可編譯真實世界的文件。

## 如何決定

遵循模板。如果期刊類別或論文範本記錄了一個引擎，請使用該引擎。模板對引擎假設的編碼方式在其他地方表現為令人困惑的錯誤，如[無法編譯的大學類文件](/learn/fix-broken-template/)中所述。如果文件是您從頭開始的，那麼經驗法則很簡單：當保守的場所會編譯您的原始碼時，請使用 pdfLaTeX；當您需要真正的 Unicode 或真正的字體時，請使用 XeLaTeX、LuaLaTeX 或 Tectonic。無論您選擇什麼，請在文件的整個生命週期中保留它。微妙的間距和字體差異使得在專案中進行切換不利於時間的利用。