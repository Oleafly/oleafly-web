---

title: "為什麼人們轉向 XeLaTeX"
description: "系統字體、複雜腳本、fontspec 模板。"
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# 為什麼人們轉向 XeLaTeX

LaTeX 是一種語言，但有多種引擎可以編譯它，而且它們的功能有所不同。傳統的引擎是 pdfLaTeX，兩個現代引擎是 XeLaTeX 和 LuaLaTeX。人們轉向 XeLaTeX 的最大原因是字體：pdfLaTeX 僅使用專為 TeX 打包的字體，而 XeLaTeX 加載系統上安裝的任何 OpenType 或 TrueType 字體，並透過其普通名稱進行尋址。

## 切換的三個原因

第一個是直接存取系統字體。使用 `fontspec` 包，字體選擇就是一行可讀的內容，並且不需要為您想要的字體存在特定於 TeX 的字體包。無論目標是現代外觀的“\setmainfont{Inter}”還是期刊要求的 Times New Roman，機制都是相同的：

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` 需要 XeLaTeX 或 LuaLaTeX；在 pdfLaTeX 下它只是錯誤。字體也可以在專案資料夾內而不是系統內移動，如[專案旁邊的字體檔案](/learn/install-custom-font/) 所示。

第二個是原生 Unicode 和複雜腳本。 XeLaTeX 直接讀取 UTF-8 輸入並處理 pdfLaTeX 無法處理的書寫系統，包括阿拉伯語、梵文、中文、日語和韓語，透過適當的整形，並透過「polyglossia」套件修正每種語言的連字符和方向。如果您的文件混合了腳本，甚至只是引用了帶有不尋常變音符號的名稱，那麼僅此一點就決定了引擎。

第三個是為您決定的範本。許多現代簡歷、論文和演示模板在第一行加載“fontspec”或“polyglossia”，這樣的模板只能在 XeLaTeX 或 LuaLaTeX 上編譯。如果下載的範本立即失敗並出現提及「fontspec」的錯誤，則可以切換引擎來修復，而不是編輯範本。

## 你放棄什麼

這種權衡是適度的，但卻是真實的。一些 pdfLaTeX 特定的套件不適用，最值得注意的是 `microtype` 的字體擴展，XeLaTeX 僅部分支援。編譯運行速度也稍慢。一些較舊的期刊管道仍然採用 pdfLaTeX，因此在提交 XeLaTeX 構建的手稿之前請檢查場地的說明。 LuaLaTeX 共享字型和 Unicode 功能並新增 Lua 腳本。在兩者之間，選擇您的範本或場地名稱。基於“fontspec”建置的文檔通常在兩者上編譯。

## 實踐中的選擇

一個合理的規則是，當場地模板針對它時，使用 pdfLaTeX，而對於您選擇字體的所有內容，則使用 XeLaTeX：論文、簡歷、幻燈片和多語言文件。 Oleafly 的捆綁引擎是基於 XeTeX (Tectonic) 的，因此「fontspec」文件無需任何引擎配置即可編譯。常見的錯誤是混合時代，例如將 `fontspec` 與僅 pdfLaTeX 的字體包（如 `newtxtext`）一起載入。每個文件選擇一種字體系統，引擎問題大部分都會自行解決。