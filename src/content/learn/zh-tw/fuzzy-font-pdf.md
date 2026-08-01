---

title: "PDF 檢視器中的文字模糊"
description: "輸入 3 種點陣圖、輪廓字體、向量圖。"
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# PDF 檢視器中的文字模糊

您的 PDF 編譯乾淨，但文字在螢幕上看起來很軟或呈鋸齒狀，放大會使情況變得更糟而不是更好。您的觀看者沒有任何問題。此文件包含點陣字體。它將字母形狀儲存為以固定解析度渲染的像素網格，而不是將它們儲存為可縮放輪廓。在 PDF 術語中，這些是 Type 3 字體。它們以生成的解析度在紙張上列印，這就是為什麼問題幾十年來一直存在的原因，但在螢幕上，除了原始縮放等級之外，它們在任何縮放等級上都會變得模糊。現代輪廓格式（Type 1、TrueType、OpenType）可以清楚地縮放，因為形狀是數學曲線。

## 確認診斷

縮放是快速測試：輪廓字體在 800% 時保持銳利，點陣圖溶解為可見像素。為確保確定性，請在 PDF 檢視器中開啟文件屬性並查看字型面板。在 Adob​​e Reader 中，它位於「檔案」、「屬性」、「字體」下，任何列為「類型 3」的字體都是點陣圖。這項檢查的重要性超出了美觀的範圍，因為 arXiv 和許多出版商拒絕包含 Type 3 字體的提交。

## 點陣圖的來源和修復

通常的來源是舊的字體設定。非常古老的 TeX 安裝透過 METAFONT 將 Computer Modern 呈現為點陣圖，並且一些遺留套件和古老的 `\usepackage{times}` 時代堆疊仍然引入點陣圖變體。透過用現代堆疊替換舊字體命令來修復它：

```latex
\usepackage{newtxtext,newtxmath}
```

這給出了具有匹配數學的大綱 Times，如 [Times、Arial、Helvetica-like stacks](/learn/times-arial-helvetica/) 中詳細介紹。如果您想要預設外觀而不是 Times，`\usepackage{lmodern}` 將 Computer Modern 替換為其輪廓後繼者 Latin Modern。使用 XeLaTeX 或 LuaLaTeX 和「fontspec」進行編譯完全迴避了這個問題，因為這些引擎使用透過建構勾勒出輪廓的 OpenType 系統字體。現代引擎（例如 Oleafly 捆綁的基於 XeTeX 的 Tectonic）不會自行產生 Type 3 文字；當它出現在那裡時，點陣字體是透過包含的圖形到達的。

## 同一問題的圖形版本

PDF 中的模糊文字並不總是文檔字體。如果段落清晰，但繪圖內的標籤模糊，則圖形本身是光柵圖像，通常是繪圖的 PNG 螢幕截圖或以螢幕解析度匯出的圖表。解決方法與上一層的想法相同：從繪圖工具將圖形匯出為向量 PDF，因此它們的文字也是輪廓。格式指南位於[插入圖片](/learn/insert-images/)。

進行任何修復後，再次檢查字體面板，而不是相信預設縮放時您的眼睛。一個人物或一個包裹留下的單一 Type 3 條目足以退回提交。