---

title: "Times、Arial、Helvetica 類別堆疊"
description: "newtx、helvet 或 fontspec 映射期刊仍然需要。"
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times、Arial、Helvetica 風格的堆疊

在這些字體不再成為任何人的美學首選幾十年後，期刊和會議指南仍然經常要求正文使用 Times 字體或數字使用 Arial 字體。在 LaTeX 中，有兩種​​方法可以滿足這種要求，使用哪一種取決於您的引擎。 Classic pdfLaTeX 無法載入實際的 Times New Roman 或 Arial 文件，因此它使用作為套件提供的公制相容克隆。 XeLaTeX 和 LuaLaTeX 透過 `fontspec` 載入真實的系統字體。

## 包裹路線

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` 將文字字體切換為 Times 克隆，而 `newtxmath` 提供匹配的數學。配對很重要：僅更改文字字體，方程式保留預設的 Computer Modern。計算機現代數學旁的《泰晤士報》段落立即可見。 `newtx` 是舊的 `times` 和 `txfonts` 套件的維護後繼者，您應該在新文件中避免使用它們。舊堆疊未轉換數學，有些會產生[PDF 檢視器中的模糊文字](/learn/fuzzy-font-pdf/) 中所述的點陣圖字體。

`helvet` 提供了 Helvetica 的克隆作為無襯線家族，它也代表 Arial，因為 Arial 是為了匹配 Helvetica 的指標而設計的。載入它不會更改文檔字體，因為正文使用襯線系列。 `\renewcommand{\familydefault}{\sfdefault}` 行執行該切換：`\familydefault` 是 LaTeX 用於普通文字的系列，將其設為 `\sfdefault` 會使整個文件類似於 Helvetica。如果您只需要無襯線標題或圖形標籤，請忽略該行。如果 Helvetica 在您的文字字體旁邊稍大一些，則 `\usepackage[scaled=0.92]{helvet}` 會使其保持一致。

## 字型規範路線

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

在 XeLaTeX 或 LuaLaTeX 下，「fontspec」會按名稱尋址字體並從作業系統載入它們，因此這將正版 Times New Roman 設定為主要（襯線）系列，將正版 Arial 設定為 sans 系列。字體必須實際安裝在電腦上。當文件在電腦之間移動或進入 CI 時，就會產生影響。隨專案一起傳輸的字體可以避免該問題，如[專案旁邊的字體檔案](/learn/install-custom-font/) 所示。數學又是一個單獨的問題，由「unicode-math」處理或透過將「newtxmath」放在一起處理。 [為什麼人們轉向 XeLaTeX](/learn/when-use-xelatex/) 中介紹了引擎的權衡。

## 經驗法則

在選擇任一路線之前，請檢查場地自己的類別文件是否已經設定了字體。大多數都是這樣。將自己的字體包堆疊在已發言的類別之上最多只會產生警告。僅將字型包新增至其類別由您選擇的文件中。