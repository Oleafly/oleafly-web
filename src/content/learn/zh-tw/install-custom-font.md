---

title: "項目旁邊的字型文件"
description: "fontspec 本機 otf 或 ttf 系列的路徑。"
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# 專案旁邊的字體文件

假設您的論文使用的字體並未安裝在每台將編譯它的電腦上：合著者的筆記型電腦、大學建置伺服器或重新安裝後您自己的電腦。在每個系統上安裝字體都很脆弱，有時是不允許的。將字型檔案放在專案資料夾中，並將「fontspec」指向它們，這樣文件就有自己的排版。這需要 XeLaTeX 或 LuaLaTeX，因為 `fontspec` 在 pdfLaTeX 下不起作用。 [為什麼人們轉向 XeLaTeX](/learn/when-use-xelatex/) 中介紹了原因。

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## 每個鍵的作用

`\setmainfont{MyFont}` 宣告主文字系列並為其提供用於建立檔案名稱的基本名稱。 `Path = ./fonts/` 告訴 `fontspec` 在專案內的 `fonts` 資料夾中尋找相對於主 `.tex` 文件的文件，而不是詢問作業系統。 `Extension = .otf` 一次指定檔案類型，因此不必為每個檔案重複。如果您有的話，請使用“.ttf”。

其餘的鍵將字型形狀對應到檔案。在每個檔案中，“*”都會擴展為基本名稱，因此“UprightFont = *-Regular”解析為“MyFont-Regular.otf”，同樣解析為“MyFont-Bold.otf”和“MyFont-Italic.otf”。這些名稱必須與實際檔案名稱完全匹配，包括大小寫，因為即使本機系統允許大小寫，Linux 伺服器上的大小寫也很重要。如果該系列有粗體斜體，請新增「BoldItalicFont = *-BoldItalic」。您未對應的形狀是文件無法使用的形狀：沒有「BoldFont」行，「\textbf」沒有任何可切換到的內容，且編譯器警告粗體形狀未定義。

相同的語法適用於其他系列，因此“\setsansfont”和“\setmonofont”接受本地無襯線或程式碼字體的相同選項區塊。

## 許可和可移植性

僅當許可證允許重新分發時才隨項目一起發送字體檔案。 SIL 開放字體授權等開放授權允許這樣做，而 Google Fonts 的字體通常符合資格，但商業字體通常禁止將副本傳遞給合作者，在這種情況下，每台電腦都需要自己的授權副本，您應該在專案自述文件中記錄該要求。

常見的錯誤是聲明的名稱和檔案之間存在靜默不匹配，通常是在重命名資料夾或下載不同名稱的權重之後。然後編譯停止並顯示“無法找到字體‘MyFont-Regular’”。發生這種情況時，將錯誤的預期檔案名稱與資料夾內容逐一進行比較，並確認「路徑」仍然指向檔案所在的位置。由於 Oleafly 捆綁的 Tectonic 引擎是基於 XeTeX 的，因此此專案本機模式無需安裝系統字體即可運作。