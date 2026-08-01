---

title: "在任何作業系統上取得可運行的 TeX"
description: "Oleafly 隨附捆綁引擎，或完整的 TeX Live / MiKTeX 安裝。"
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# 獲得一個可以在任何作業系統上運行的 TeX

本機編寫 LaTeX 需要 TeX 系統：編譯原始碼的引擎以及文件所依賴的數千個套件。有兩種明智的方法可以獲得其中之一。一種是內建引擎的應用程序，可以讓您在幾分鐘內完成編譯。另一個是完整的 TeX 發行版，它安裝任何編輯器都可以使用的完整命令列工具鏈。兩條路徑都在同一位置結束：「.tex」檔案在您的電腦上轉換為 PDF。

## 路徑 A：包含引擎的應用程式

下載 Mac、Windows 或 Linux 的 [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)。它捆綁了 Tectonic 引擎，因此無需管理單獨的 TeX 安裝：您打開應用程序，創建專案並編譯。當文件使用不存在的套件時，Tectonic 會按需取得它，這需要在第一次使用給定套件時進行網路連接，此後不需要任何連接。此路徑適合任何想要撰寫論文而不是管理 TeX 安裝的人，並且它將普通的“.tex”和“.bib”檔案保留在磁碟上，任何其他工具都可以讀取。

## 路徑 B：完整的 TeX 發行版

安裝發行版會為您提供「pdflatex」、「xelatex」、「lualatex」和套件管理器作為系統指令。在 Mac 上，安裝 MacTeX，這是為 macOS 打包的 TeX Live；如果不歡迎數 GB 的下載，BasicTeX 是一個小核心，您可以根據需要透過 TeX Live Utility 進行擴充。在 Windows 上，MiKTeX 是常見的選擇，可以在編譯過程中即時安裝缺少的軟體包，而 TeX Live 也同樣出色。在 Linux 上，從套件管理器中一次性安裝“texlive-full”，或安裝較小的方案，例如“texlive-latex-extra”以及用於稍後新增套件的“tlmgr”工具。預計完整安裝需要一段時間和幾 GB 的磁碟空間。

## 驗證安裝

打開終端機並向引擎詢問其版本：

```bash
pdflatex --version
# or
xelatex --version
```

版本橫幅表示工具鏈已在您的路徑上並準備就緒。提示未找到命令的錯誤通常表示安裝程式對 PATH 的變更尚未生效；重新啟動終端，或在 Windows 上登出並重新登入即可解決此問題。

## 選擇哪一條路

如果您剛開始或只是想要以最短的路徑產生已編譯的 PDF，請選擇該應用程式。如果您需要特定引擎、命令列建置或與現有編輯器集成，請選擇完整的發行版。兩者共存，不會發生衝突，因此從路徑 A 開始，然後新增路徑 B 不需要任何成本。無論哪種方式，下一步都是相同的：編譯[您的第一個文件](/learn/first-document/)。