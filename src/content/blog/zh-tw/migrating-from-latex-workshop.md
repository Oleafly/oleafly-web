---

title: "Beyond LaTeX Workshop：您機器上的研究編輯器"
description: "專門建置的研究編輯器，具有專案範圍的智慧、SyncTeX、離線校對、捆綁編譯器、真正的 Git 和引文。 VS Code + LaTeX Workshop 仍然擁有配方、遠端和擴展市場。"
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

VS Code 中的 [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) 非常棒。免費，麻省理工學院，精心維護。如果您的一周運行在自由格式編譯食譜、texdoc、Docker/WSL/remote、Live Share 或完整擴充市場上，請保留該堆疊。它是為那種生活而建造的。

這篇文章適合當您想要一個文件優先的應用程式時：多文件論文、編譯器、PDF、Git、引文、圖表和校對已經連接在一起。免費且開源 (AGPL)。 LaTeX、Typst、Markdown。普通資料夾。沒有帳戶。

功能圖與捷徑：[來自 LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md)。

## 編輯器

CodeMirror 6 具有跨 LaTeX、Typst、Markdown 和 BibTeX 的項目範圍索引。

你每天實際得到的：

- 前往定義、尋找參考、重新命名標籤和巨集（衝突警告）
- 即時檢查損壞的引用、錯誤的引用、缺少的內容（`\cref`、`\eqref`、範圍引用等）
- 本地+專案結構視圖；過濾和跳轉
- 專案定義的鍵、路徑和巨集的完成（`\newcommand`、xparse 參數形狀）
- `.tex`、`.ltx`、`.sty`、`.cls` 支持；論證片段；環境檢查
- TexLab for LaTeX（選擇加入設定）； Tinymist 為 Typst 出貨
- 統一診斷：文法、編譯、語言服務、參考文獻、引用、拼字、文法
- 即時 KaTeX 數學預覽；來源保持可編輯
- Harper + Hunspell 僅在散文上離線（命令和數學被屏蔽）
- 常見結構的可視化模式；維姆；斜線命令；多檔案選項卡
- 接下來是來自大型語料庫的套件感知命令完成（LaTeX Workshop 的 MIT 數據，附有歸屬資訊）

PDF 工作區：連續捲動、跨頁、搜尋、大綱、可拆卸視窗。跨章節文件的雙向 SyncTeX。當重建待定時，映射仍然有效。最後一個好的 PDF 保持不變。撤銷已編譯的來源集，預覽可以變成目前狀態，而無需完全重新編譯。

書籍規模的 CI：約 6,200 行手稿、多科數學、章節、引用、校對、滾動/鍵入/粘貼/撤消/完成/重新編譯/SyncTeX 的性能預算。

LaTeX Workshop 是通用 IDE 的強大擴充。 Oleafly 提供的這個文件循環已經組裝好了，因此您不需要每個學期從設定和市場選擇中連接相同的堆疊。

## 應用程式中的編譯器

Tectonic (LaTeX) 和 Typst 隨該應用程式一起提供。當您需要時，透過託管 Pandoc 進行 Markdown。首先編譯快取包；之後，快取的建置可以離線工作。離線模式可以將編譯器鎖定到快取。

自動編譯（去抖、可取消、最新勝利）。 `Cmd/Ctrl-Enter` 重新編譯。停止按鈕。人性化的錯誤卡上線。當較新的版本運行時，最後一個好的 PDF。

配方、latexmk 鏈、shell 轉義和自訂「.latexmkrc」保留在 LaTeX Workshop 的駕駛室中。大多數論文和論文只需要一個可靠的監督引擎。

範本：23 個捆綁入門範本（IEEE、ACM、Elsevier、Beamer、論文、簡歷、Typst 空白等）以及 99 個可下載套件。將任何項目儲存為範本。設定模型時可選的 AI 模板生成。

## 函式庫、Git、研究工具

項目如書籍：封面顏色、引擎徽章、fork 譜系、最後一個 PDF 頁面的懸停預覽、書籤、「/docs」搜尋每個文件。 Fork 會在提交副本旁邊保留完整的 Git 歷史記錄，以便進行有風險的重寫。

從第一天開始就是真正的 Git。暫存、並排差異（工作樹可編輯）、丟棄、恢復。成功編譯和空閒編輯後的自動檢查點； AI 在第一次寫入之前執行檢查點。 GitHub 可選（PAT 或裝置流 OAuth）。終端機 `git log` 與應用程式相符。

貼上 DOI / arXiv / title → 重複資料刪除 → `.bib` → `\cite`。批次導入BibTeX、RIS、EndNote、Zotero RDF。跨 arXiv、Semantic Sc​​holar、Crossref、PubMed、OpenAlex 的引文檢索。圖表編輯器到可編輯的 TikZ。驗證器、表格、方程式、實驗室搜尋、截止日期、PDF 到 LaTeX、影像到 LaTeX 以及視覺模型。

## 可選人工智慧

關閉直到您配置它。 OpenAI、Anthropic、Z.AI、Groq、OpenRouter、DeepSeek、Mistral、xAI、Ollama。密鑰在磁碟上加密。請求將發送至您選擇的提供者。

助理編輯、編譯、讀取日誌、提取PDF文字、搜尋文獻、保存計畫。寫入是批准差異。刪除需要單獨確認。針對所選的內嵌 Ask-AI。用於 Claude Code、Cursor 和朋友的 Loopback MCP。關閉 AI 後，編輯器、編譯、Git 和引用仍然可以工作。

## 預檢、匯出、隱私

預檢：結構、未定義的引用、重複標籤、解析器式擷取預覽、面向螢幕閱讀器的結果。每個風險標記都帶有足夠的上下文，您可以自己檢查，而不是相信黑盒分數。

匯出：永遠為 PDF； DOCX/HTML/Markdown（當 Pandoc 可用時）；簡報的 PowerPoint； EPUB 書籍；用於切換的來源 ZIP。

沒有 Oleafly 帳戶。無產品遙測。崩潰報告會開啟您審閱的預填 GitHub 問題。套件、範本、託管 AI、引用、更新、GitHub 網路。編輯、快取編譯、語法、拼字檢查和本地 Git 可以離線工作。

## 當 LaTeX Workshop 仍然適合時

- 自由格式的食譜、latexmk、shell-escape、`.latexmkrc`
- 編輯器中的 texdoc
- Docker、WSL、遠端開發
- 即時分享和即時多用戶編輯
- 在 VS Code 市場中進行非文件工作

Oleafly 是公開測試版。重型出版商類文件仍然可能會絆倒 Tectonic；報告他們。

## 嘗試一下

1. 從以下位置下載
   [發布頁面](https://github.com/Oleafly/Oleafly/releases/latest)
   （macOS 已簽署/公證；Windows 可能會 SmartScreen 一次）。
2. 匯入“.tex”、“.bib”和圖形（或從模板開始）。
3.編譯一次，然後在真實的紙上寫一天。

保持 VS Code 安裝。相同的檔案在任一應用程式中都可以使用。如果在 Oleafly 上真正的論文上的一天進展順利，則可以將更多項目轉移到其他地方；如果配方和遙控器對於給定的樹仍然獲勝，則將該樹留在創意工坊中。