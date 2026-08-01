---

title: "LaTeX 宇宙中的每個 \\\\ 指令，都有解釋"
description: "全球參考：數百個 LaTeX 指令和環境，從核心到 amsmath、hyperref、TikZ、biblatex 和 Beamer，每一條都在一行中進行了解釋。"
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# LaTeX 宇宙中的每個 \ 指令，解釋

此頁面定義了 Oleafly Learn 任何課程中出現的每個 LaTeX 命令和環境，以及您將在實際論文中遇到的更廣泛的標準詞彙。 Kernel、amsmath、hyperref、graphicx、booktabs、biblatex、TikZ、Beamer 以及研究人員實際載入的軟體包。按類別瀏覽，或使用 Ctrl/Cmd-F 在頁面中搜尋您剛剛遇到的命令。每個條目都是一行：它的作用以及重要的地方，它來自哪個包。

## 記錄類別和設置

|指令 |它有什麼作用 |
| --- | --- |
| `\documentclass{文章}` |每個文件的第一行：選擇整體版面；文章是論文的預設選擇。 |
| `\documentclass{報告}` |較長報告的類別：新增 `\chapter` 並在其自己的頁面上開始摘要。 |
| `\documentclass{book}` |書籍類：章節、雙面佈局、正面/主要/背面內容。 |
| `\documentclass{字母}` |用於通訊的類，帶有 `\opening`、`\fitting` 和地址命令。 |
| `\documentclass{beamer}` |從「框架」環境建構的投影片簡報的類別。 |
| `\documentclass[11pt,a4paper]{文章}` |常見的類別選項：字體大小（10pt、11pt、12pt）、紙張（a4paper、letterpaper）、「twocolumn」、「twoside」、「landscape」、「draft」、「titlepage」。 |
| `\usepackage{amsmath}` |在序言中載入套件以新增功能。 |
| `\usepackage[margin=1in]{幾何}` |設定頁邊距和紙張尺寸（幾何形狀）。 |
| `\標題{...}` |儲存文件標題，稍後由「\maketitle」列印。 |
| `\author{...}` |儲存`\maketitle`的作者列表；以「\and」分隔多位作者。 |
| `\ 和` | `\author{...}` 內作者姓名之間的分隔符號。 |
| `\日期{...}` |儲存`\maketitle` 顯示的日期； `\date{}` 隱藏它，`\date{\today}` 顯示今天。 |
| `\今天` |在編譯時列印目前日期。 |
| `\maketitle` |列印「\title」、「\author」和「\date」中的標題列。 |
| `\謝謝{...}` |將腳註附加到標題或作者姓名，例如獲取資金或聯絡資訊。 |
| `\institute{...}` | Beamer 和 Springer LNCS 類別所使用的作者隸屬關係指令。 |
| `\inst{1}` | LNCS 和 Beamer 作者列表中的隸屬關係上標標記：「Ada Lovelace\inst{1}」。 |
| `\keywords{...}` |在publisher中列印論文的關鍵字列表像 acmart 和 llncs 這樣的課程。 |
| `\位址{...}` | letter class：儲存信頭的寄件者位址。 |
| `\簽章{...}` | letter class：儲存結尾處印製的名稱。 |
| `\opening{親愛的...}` | letter class：列印稱呼並開始信件正文。 |
| `\close{此致，}` | letter class：列印簽名與簽章區塊。 |
| `\LaTeX` |列印帶有凸起和凹陷字母的 LaTeX 徽標。 |
| `\TeX` |列印帶有降低的 E 的 TeX 標誌。
| `\輸入{檔案}` |將另一個 .tex 檔案貼上到位，就像您已在其中鍵入它一樣。 |
| `\include{第 1 章}` |輸入從新頁面開始的章節檔案；透過 `\includeonly` 啟用部分編譯。 |
| `\includeonly{第 1 章，第 3 章}` |限制實際編譯哪些 `\include` 檔案的前導碼清單。 |
| `\hypersetup{...}` |配置超引用選項，例如連結顏色和 PDF 元資料。 |
| `\AtBeginDocument{...}` |在 `\begin{document}` 之後執行程式碼，對於後期設定很有用。 |
| `\AtEndDocument{...}` |在文檔結束之前執行程式碼。 |
| `\makeatletter` |暫時將「@」設為字母，以便您可以使用或修補內部命令。 |
| `\makeatother` |在「\makeatletter」之後將「@」恢復正常。 |
| `\typeout{...}` |將訊息印到編譯日誌和終端，方便調試。 |
| `\保護` |在移動參數（如“\caption”或“\section”）中屏蔽脆弱的指令。 |
| `\listfiles` |記錄每個已載入的檔案及其版本的 Preamble 指令，以進行錯誤回報。 |

## 結構和切片

|指令 |它有什麼作用 |
| --- | --- |
| `\part{...}` |最高等級的劃分，在書籍和報告類別中的章節以上。 |
| `\章節{...}` |書籍和報告類別中的編號章節標題（而非文章中）。 |
| `\section{...}` |文章中的頂標題編號。 |
| `\小節{...}` |編號為「\section」下方一層的標題。 |
| `\subsubsection{...}` |編號為「\subsection」下方一層的標題。 |
| `\段落{...}` |最低級標題：段落開頭的插入式粗體標題。 |
| `\subparagraph{...}` | `\paragraph` 下面一級，很少需要。 |
| `\section*{...}` |有星號的部分列印標題，但不含編號或目錄條目。 |
| `\附錄` |切換編號，以便下列章節成為附錄 A、B、C。
| `\appendixpage` |列印單獨的「附錄」分隔頁（附錄包）。 |
| `\目錄` |列印根據切片指令建構的目錄。 |
| `\數字清單` |列印所有圖形標題和頁碼的清單。 |
| `\listoftables` |列印所有表格標題和頁碼的清單。 |
| `\frontmatter` |預內容頁面的書籍等級開關：羅馬頁碼、未編號的章節。 |
| `\mainmatter` |書類切換回主要內容：阿拉伯文頁碼、章節編號。 |
| `\backmatter` |末頁的書籍級切換：章節不再編號。 |
| `\addcontentsline{目錄}{章節}{...}` |手動將條目新增至目錄（或圖表/表格清單）。 |
| `\addtocontents{toc}{...}` |將任意資料（如間距）寫入內容檔案。 |
| `\setcounter{secnum深度}{3}` |控制切片數字的深度。 |
| `\setcounter{toc深度}{2}` |控制目錄的深度。 |

## 定義指令和環境

|指令 |它有什麼作用 |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` |定義你自己的指令；如果該名稱已存在，則會出現錯誤。 |
| `\renewcommand{...}{...}` |重新定義現有指令；如果不存在則出錯。 |
| `\providecommand{...}{...}` |只有在指令尚未定義時才定義指令；否則默默地什麼也不做。 |
| `\NewDocumentCommand` |具有靈活可選參數的現代命令定義（LaTeX3/xparse）。 |
| `\newenvironment{名稱}{開始程式碼}{結束程式碼}` |使用在「\begin」和「\end」處執行的程式碼定義您自己的環境。 |
| `\renewenvironment{名稱}{...}{...}` |重新定義現有環境。 |
| `\ensuremath{...}` |使宏的數學內容在數學模式內部和外部都有效。 |
| `\DeclareMathOperator{\E}{E}` |定義一個直立的操作員名稱；帶星號的形式將限制置於以下 (amsmath)。 |
| `\DeclareMathOperator*{\argmin}{arg\,min}` |有星號的形式：運算子在顯示數學 (amsmath) 中採用下列限制。 |
| `\newtheorem{引理}{引理}` |宣告類似定理的環境 (amsthm)。 |
| `\foo` | `\newcommand` 課程中使用者定義的巨集的範例名稱，而不是真正的 LaTeX 指令。 |
| `\abs{x}` |自訂指令課程中用於排版絕對值條形的範例使用者定義巨集。 |
| `\mat{A}` |自訂指令課程中用於粗體矩陣符號的使用者定義巨集範例。 |
| `\vect{v}` |自訂指令課程中用於粗體向量符號的使用者定義巨集範例。 |
| `\set{...}` |自訂指令課程中的使用者定義巨集範例，用於排版大小括號。 |
| `\citepair` |自訂指令課程中的使用者定義引用幫助程式巨集範例，而不是標準指令。 |
| `\E` |用於期望的使用者定義運算符範例，通常定義為`\DeclareMathOperator` 或 `\newcommand`。 |
| `\R` |實數的使用者定義巨集範例：`\newcommand{\R}{\mathbb{R}}`。 |
| `\argmax`、`\argmin` | arg max / arg min 的運算符名稱，在本課程中使用 `\DeclareMathOperator*` 定義，因此下標位於下方。 |

## 計數器和長度

|指令 |它有什麼作用 |
| --- | --- |
| `\newcounter{範例}` |建立一個新計數器，可以選擇由父級重設：`\newcounter{examples}[section]`。 |
| `\setcounter{頁}{1}` |設定計數器的值，此處重新啟動頁碼。 |
| `\addtocounter{範例}{2}` |新增一個值給計數器而不列印任何內容。 |
| `\stepcounter{範例}` |將計數器加一。 |
| `\refstepcounter{範例}` |增加一個計數器並使其成為下一個「\label」的目標。 |
| `\value{範例}` |讀取計數器的值以用於算術或比較。 |
| `\阿拉伯語{範例}` |將計數器印為阿拉伯數字：1、2、3。
| `\roman{範例}`、`\Roman{範例}` |將計數器印為小寫或大寫羅馬數字。 |
| `\alph{範例}`、`\Alph{範例}` |將計數器印為小寫或大寫字母。 |
| `\fnsymbol{註腳}` |將計數器印為註腳符號：星號、匕首等。 |
| `\newlength{\mygap}` |建立一個新的長度暫存器。 |
| `\setlength{\parskip}{6pt}` |為長度暫存器指派一個值。 |
| `\addtolength{\texheight}{1cm}` |新增到現有長度。 |
| `\settowidth{\mygap}{text}` |將長度設定為某些文字的自然寬度。 |
| `\parindent` |首行段落縮排長度；以 `\setlength{\parindent}{0pt}` 設定。 |
| `\parskip` |段落之間的垂直間隙的長度；以 `\setlength` 設定。 |
| `\線寬` |目前行的長度，方便調整大小：`width=\linewidth`。 |
| `\textwidth` |頁面上全文塊寬度的長度。 |
| `\textheight` |頁面上全文區塊高度的長度。 |
| `\列寬` |多列佈局中一列的寬度。 |
| `\baselineskip` |連續線的基線之間的垂直距離。 |
|`\linespread{1.3}` |縮放整個文件的行距（行距）；需要 `\selectfont` 或 size 指令才能生效。 |

## 段落、換行符和連字符

|指令 |它有什麼作用 |
| --- | --- |
| `\\` |結束段落、表格和陣列中的目前行。 |
| `\\[6pt]` |換行符後面有額外的垂直空間。 |
| `\換行` |斷行而不證明其合理，也不允許分頁。 |
| `\換行` |要求在此進行合理的換行；可選的「[0-4]」設定堅持。 |
| `\nolinebreak` |封鎖此時換行。 |
| `\par` |結束段落，與原始碼中的空白行相同。 |
| `\無縮排` |禁止後續段落的首行縮排。 |
| `\縮排` |強制第一行縮進，否則會被抑制。 |
| `\-` |標記單字內允許的連字符點。 |
| `\連字符{資料集}` |序言列表教 LaTeX 如何連接特定單字。 |
| `\馬虎` |放寬間距規則，使線條更容易斷裂，避免盒子過滿。 |
| `\挑剔` |在「\sloppy」之後恢復嚴格的間距規則。 |
| `\raggedright` |將以下文字左對齊而不是對齊。 |
| `\raggedleft` |右對齊下列文字。 |
| `\居中` |將目前組中後續的所有內容置中，例如一個人物的圖像。 |
| `\相同頁面` |封鎖目前群組內的分頁符號。 |
| `\enlargethispage{\baselineskip}` |只讓目前頁面變高一點，以再擠入一行。 |
| `~` |不間斷空格：「Figure~1」將數字保持在同一行。 |

## 間距

|指令 |它有什麼作用 |
| --- | --- |
| `\quad` |插入大約大寫 M 寬度的水平空間。
| `\qquad` |插入兩倍於`\quad`的空間。 |
| `\enspace` |插入半個「\quad」水平空間。 |
| `\hspace{1cm}` |插入水平空間；在換行符處消失。 |
| `\hspace*{1cm}` |即使在換行時也能保留水平空間。 |
| `\vspace{1cm}` |插入給定長度的垂直空間。 |
| `\vspace*{1cm}` |即使在分頁時也能保留垂直空間。 |
| `\smallskip` |在段落之間插入一個小的垂直間隙。 |
| `\medskip` |在段落之間插入中等垂直間隙。 |
| `\bigskip` |在段落之間插入較大的垂直間隙。 |
| `\hfill` |有彈性的水平空間將內容分開以填滿線條。 |
| `\vfill` |有彈性的垂直空間將內容分開以填滿頁面。 |
| `\點填入` |用點填入剩餘的行，如選單行或內容行。 |
| `\hrulefill` |以水平線填滿剩餘的線。 |
| `\拉伸{2}` |具有重量的彈性膠水，用於比例間距：`\hspace{\stretch{2}}`。 |
| `\填入` |單位拉伸長度； `\hspace{\fill}` 是 `\hfill` 擴充後的內容。 |
| `\phantom{文本}` |恰好佔據其參數的空間，但不列印任何內容。 |
| `\hphantom{文本}` |只佔據其參數的寬度，高度為零。 |
| `\vphantom{文本}` |僅佔據其參數的高度，寬度為零。 |
| `\smash{...}` |印出它的參數，但假裝它的高度和深度為零。 |
| `\支柱` |隱形支撐法線的高度，以平衡行高。 |
| `\mathstrut` |數學模式支撐括號的大小，以對齊根數和分數。 |

## 框和規則

|指令 |它有什麼作用 |
| --- | --- |
| `\mbox{...}` |牢不可破的水平盒子；也將其內容保留在一行上。 |
| `\makebox[3cm][r]{...}` |具有選取對齊方式（l、c、r、s）的設定寬度的方塊。 |
| `\fbox{...}` |在其內容周圍繪製一個框架。 |
| `\framebox[3cm][c]{...}` |具有設定寬度和選定對齊方式的框架框。 |
| `\parbox{5cm}{...}` |段落框：給定寬度的迷你文字列。 |
| `\raisebox{2pt}{...}` |將其內容向上移動（或以負長度向下移動）。 |
| `\rule{2cm}{0.4pt}` |繪製一個填滿的矩形；客製化生產線的主力。 |
| `\colorbox{黃色}{...}` |將文字放在彩色背景框 (xcolor) 上。 |
| `\fcolorbox{紅色}{黃色}{...}` |有彩色框架的彩色框（xcolor）。 |

## 頁碼、頁首和頁眉

|指令 |它有什麼作用 |
| --- | --- |
| `\newpage` |結束目前頁面並開始新頁面。 |
| `\clearpage` |先刷新所有待處理的圖形和表格後開始新頁面。 |
| `\cleardoublepage` |與「\clearpage」類似，但也確保下一頁是右側（奇數）頁。 |
| `\分頁符號` |此時請求分頁，將頁面拉伸至完整高度。 |
| `\nopagebreak` |封鎖此時分頁。 |
| `\pagenumbering{roman}` |設定頁碼樣式（阿拉伯文、羅馬文、羅馬文、阿爾夫、阿爾夫），並將計數器重設為 1。
| `\pagestyle{花式}` |設定所有後續頁面的運行頁首/頁尾樣式（plain、empty、headings、myheadings、fancy）。 |
| `\thispagestyle{空}` |只覆寫目前頁面的頁首/頁尾樣式。 |
| `\頁面` |列印目前頁碼；用於頁首和頁尾內部。 |
| `\marginpar{...}` |在目前行旁的頁邊距中新增註解。 |
| `\fancyhf{}` |在設定您自己的欄位之前清除所有 fancyhdr 頁首和頁尾欄位。 |
| `\fancyhead[R]{...}` |設定一個 fancyhdr 標頭字段，這裡是右側的標頭字段。 |
| `\fancyfoot[C]{\thepage}` |設定一個 fancyhdr 頁腳字段，這裡是居中的頁碼。 |
| `\headrulewidth` | fancyhdr 巨集用於標頭規則厚度；更新為 0pt 以刪除該行。 |
| `\footrulewidth` | fancyhdr 巨集用於頁腳規則厚度，預設為 0pt。 |
| `\newgeometry{邊距=2cm}` |更改文檔中間的頁面幾何形狀（幾何形狀）。 |
| `\恢復幾何` |回到`\newgeometry`（幾何）之後的前導幾何。 |

## 特殊字符

十個保留字元以及如何列印它們，以及常見的文字符號。

|指令 |它有什麼作用 |
| --- | --- |
| `\%` |列印百分號（僅以「%」開始註解）。 |
| `\&` |印出一個 & 符號（裸露的「&」是表列分隔符號）。 |
| `\#` |列印雜湊值（裸露的「#」標記巨集參數）。 |
| `\_` |列印下劃線（裸露的「_」是數學下標）。 |
| `\{` 和 `\}` |列印大括號（裸大括號組）。 |
| `\$` |列印一個美元符號（裸露的「$」切換數學模式）。 |
| `\textbackslash` |在文字中列印反斜線。 |
| `\textasciitilde` |在文字中列印波形符（裸露的「~」是不間斷空格）。 |
| `\textasciicircum` |在文字中印出插入符號（裸露的“^”是數學上標）。 |
| `\文本栏` |在文本中打印竖线。 |
| `\textless`、`\textgreater` |在文字模式下正確列印 < 和 >。 |
| `\ldots`、`\dots` |具有正確間距的省略號； `\dots` 適應數學模式 (amsmath)。 |
| `\textellipsis` | `\dots` 在數學以外使用的文字模式省略號。 |
| `\textemdash`、`\textendash` | em 和 en dash 的命名指令（與「---」和「--」相同的輸出）。 |
| `\textquotedblleft`、`\textquotedblright` |捲曲雙引號（通常鍵入反引號對和撇號對）。 |
| `\guillemetleft`, `\guillemetright` |法式角引號（舊拼法：`\guillemotleft`/`\guillemotright`）。 |
| `\dag`、`\ddag` |文本中的匕首和雙匕首，常見於作者所屬單位。 |
| `\S` |章節符號，如法律文件的 S 2.1 所示。 |
| `\P` |段落（pilcrow）符号。 |
| `\磅` |英镑符号。 |
| `\歐元` |歐元符號（eurosym 包；核心也提供了 `\texteuro`）。 |
| `\版权` |版权标志。 |
| `\textregistered` |注册商标标志。 |
| `\文字商标` |商标标志。 |
| `\textlevel` |度數符號：`25\text Degree C`。 |
| `\textmu` |立式微型表示微米等文字的符號。 |
| `\textperthousand` |每英里標誌。 |

## 重音符號與特殊字母

對於 pdfLaTeX 時代的文字重音；使用 XeLaTeX/LuaLaTeX 和 UTF-8 輸入，您通常只需鍵入字元即可。

|指令 |它有什麼作用 |
| --- | --- |
| `\'{e}` |尖銳口音：e-acute，就像在咖啡館裡帶有口音一樣。 |
| `` \``{e} `` |口音嚴肅。 |
| `\^{o}` |抑揚音。 |
| `\"{u}` | 母音變音/分音符號。|
| `\~{n}` |波形符重音，如西班牙文 n-波形符。 |
| `\c{c}` |變音符號，如法文 c-變音符號。 |
| `\v{s}` | Caron (hacek)，常見於捷克和克羅埃西亞名字。 |
| `\H{o}` |匈牙利雙銳口音。 |
| `\k{a}` | Ogonek，波蘭語 a-ogonek。 |
| `\b{o}` |酒吧下口音。 |
| `\d{u}` |點下重音，用於音譯。 |
| `\r{a}` |環重音，如斯堪的納維亞 A 型環。 |
| `\u{o}` |布雷夫口音。 |
| `\.{o}` |點式重音。 |
| `\t{oo}` |連接兩個字母的領帶重音。 |
| `\i`、`\j` |無點 i 和 j，用於堆疊重音符號：`\'{\i}`。 |
| `\ae`、`\AE` | ae 連字，小寫和大寫。 |
| `\oe`、`\OE` | oe 連字，如法國作品。 |
| `\ss` |德文升號 s (eszett)。 |
| `\o`、`\O` |斜線 o，如丹麥語和挪威語名字。 |
| `\l`、`\L` |波蘭語削減l。 |
| `\aa`、`\AA` | A 形環作為一個獨立的字母，正如 Angstrom 的名字一樣。 |

## 字體和大小

|指令 |它有什麼作用 |
| --- | --- |
| `\textbf{...}` |粗體文字。 |
| `\textit{...}` |斜體文字。 |
| `\emph{...}` |適應上下文的強調：直立文本中的斜體，斜體文本中的直立。 |
| `\textsc{...}` |小寫字母文字。 |
| `\texttt{...}` |打字機（等寬）文本，適合代碼和文件名。 |
| `\textrm{...}` |羅馬（襯線）系列文本。 |
| `\textsf{...}` |無襯線字型系列文字。 |
| `\textmd{...}` |中等（正常）重量，撤銷粗體。 |
| `\textup{...}` |直立形狀，取消斜體或傾斜。 |
| `\textsl{...}` |傾斜（傾斜）形狀，與真正的斜體不同。 |
| `\textnormal{...}` |一步重設為文件的預設字型。 |
| `\下劃線{...}` |為文字加上底線；謹慎使用，強調通常是「\emph」。 |
| `\rmfamily`、`\sffamily`、`\ttfamily` |聲明切換字體系列（serif、sans、mono）直到群組結束。 |
| `\bfseries`、`\mdseries` |宣告切換為粗體或傳回中等粗細。 |
| `\itshape`、`\slshape`、`\scshape`、`\upshape` |宣告切換形狀：斜體、傾斜、小型大寫字母、直立。 |
| `\普通字體` |將族、系列和形狀重設為預設值的宣告。 |
| `\em` | `\emph` 的聲明形式：`{\em like this}`。 |
| `\微小` |十個尺寸指令中最小的一個。 |
| `\scriptsize` |第二小的尺寸，大致為下標尺寸。 |
| `\腳註大小` |用於腳註的尺寸。 |
| `\小` |比正常的稍微小一點。 |
| `\正常大小` |文檔的基本尺寸。 |
| `\large`、`\Large`、`\LARGE` |比平常大一、兩、三步。 |
| `\巨大`, `\巨大` |兩個最大的標準尺寸。 |
| `\fontsize{14}{17}\selectfont` |設定任意字型大小和基準跳過，然後啟動它。 |
| `\選擇字體` |啟動待處理的字體屬性變化（NFSS）。 |
| `\textsuperscript{...}` |凸起的小文本，如第一個或腳註樣式標記。 |
| `\textsubscript{...}` |在文字模式下降低了小文字。 |
| `\familydefault` |儲存預設字體系列的巨集；更新它以更改整個文件的字體。 |
| `\sfdefault` |巨集命名無襯線家族； `\renewcommand{\familydefault}{\sfdefault}` 使文件變成無字型。 |
| `\setmainfont{...}` |依照 XeLaTeX 或 LuaLaTeX (fontspec) 下的名稱設定主體字型。 |
| `\setsansfont{...}` |依照 XeLaTeX 或 LuaLaTeX (fontspec) 下的名稱設定無襯線字型。 |
| `\setmonofont{...}` |依照 XeLaTeX 或 LuaLaTeX (fontspec) 下的名稱設定等寬字體。 |

## 顏色（x顏色）

|指令 |它有什麼作用 |
| --- | --- |
| `\textcolor{紅色}{...}` |為一段文字著色。 |
| `\顏色{藍色}` |聲明表：為所有內容著色，直到小組結束。 |
| `\definecolor{品牌}{HTML}{2F6F4F}` |定義命名顏色以供日後使用。 |
| `\pagecolor{灰色！ 10}` |設定整個頁面的背景顏色。 |
| `\rowcolor{灰！ 20}` |為表格行著色（使用「table」選項的 xcolor，透過 colortbl）。 |
| `\cellcolor{灰色！ 20}` |為一個表格儲存格著色 (colortbl)。 |
| `\rowcolors{2}{灰色！ 10}{白色}` |從給定行開始交替行顏色（xcolor `table` 選項）。 |

## 圖形 (graphicx)

|指令 |它有什麼作用 |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` |插入影像檔案；關鍵選項：「寬度」、「高度」、「比例」、「角度」、「修剪」+「剪輯」、「頁面」。 |
| `\graphicspath{{figures/}}` |告訴 LaTeX 在哪些資料夾中搜尋圖片檔案。 |
| `\rotatebox[origin=c]{90}{...}` |將其內容旋轉一個角度。 |
| `\scalebox{0.8}{...}` |以一個因子縮放其內容。 |
| `\resizebox{5cm}{!}{...}` |將內容大小調整為目標寬度和/或高度； `!` 保持縱橫比。 |
| `\reflectbox{...}` |水平鏡像其內容。 |
| `\includepdf[pages=-]{paper.pdf}` |插入另一個 PDF 中的整頁 (pdfpages)。 |

## 進入數學模式

|指令 |它有什麼作用 |
| --- | --- |
| `$...$` |句子中的內聯數學。 |
| `\(...\)` | LaTeX 的官方內嵌數學分隔符，相當於「$...$」。 |
| `\[...\]` |未編號的方程式在其自己的行上顯示。 |
| `$$...$$` | Plain TeX 顯示數學；在 LaTeX 中不鼓勵，請使用 `\[...\]` 代替。 |
| `x^2`、`x_i` | `^` 為上標，`_` 為下標；大括號多字元腳本：`x^{10}`。 |

## 數學：希臘字母

所有這些僅在數學模式下有效。当希腊首都与拉丁首都不同时，存在大写形式。

|指令 |它有什麼作用 |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` |希臘字母 alpha、beta、gamma、delta。 |
| `\epsilon` `\zeta` `\eta` `\theta` |希臘字母 epsilon、zeta、eta、theta。 |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` |希臘字母 iota、kappa、lambda、mu、nu。 |
| `\xi` `\pi` `\rho` `\sigma` `\tau` |希臘字母 xi、pi、rho、sigma、tau。 |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` |希臘字母 upsilon、phi、chi、psi、omega。 |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` |大寫希臘字母 Gamma 到 Pi。 |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` |大寫希臘字母 Sigma 到 Omega。 |
| `\varepsilon` `\vartheta` `\varpi` | epsilon（大多數論文使用的捲曲形式）、theta 和 pi 的變體形式。 |
| `\varrho` `\varsigma` `\varphi` | rho、sigma（詞尾）和 phi（開放捲曲）的變體形式。 |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` |斜體大寫希臘文變體 (amsmath)。 |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` |其餘的斜體大寫希臘文變體 (amsmath)。 |

## 數學：二元運算符

|指令 |它有什麼作用 |
| --- | --- |
| `\pm`、`\mp` |加減號和減加號。 |
| `\次` |乘法叉，也用於 3 x 3 等維度。
| `\div` |除法（obelus）標誌。 |
| `\cdot` |乘法的中心點。 |
| `\ast`、`\star`、`\bullet`、`\circ` |星號、星號、項目符號和小圓運算子； `\circ` 也是函數組合。 |
| `\oplus`、`\ominus` |有圓圈的加（直接和，異或）和帶圓圈的減。 |
| `\otimes`、`\oslash`、`\odot` |有圓圈的時間（張量積）、有圓圈的斜線、有圓圈的點。 |
| `\wedge`、`\vee` |楔形（邏輯與，外積）和 vee（邏輯或，連接）。 |
| `\land`、`\lor` | `\wedge` 和 `\vee` 的別名因其邏輯讀法而命名。 |
| `\cap`, `\cup` |設置交叉路口和聯合路標。 |
| `\setminus` |設定差異反斜線：`A \setminus B`。 |
| `\uplus` |有加號的並集，用於多重集或不相交並集。 |
| `\sqcap`、`\sqcup` |方帽和杯，在格子理論中相遇並連接。 |
| `\amlg` |合併（顛倒的產品），用於副產品。 |
| `\dagger`、`\ddagger` |匕首和雙匕首作為數學運算符，例如共軛轉置`A^\dagger`。 |
| `\bigtriangleup`、`\bigtriangledown` |三角形運算符，例如對稱差。 |
| `\triangleleft`、`\triangleright` |橫向三角形，例如常態子群關係。 |

## 數學：關係

|指令 |它有什麼作用 |
| --- | --- |
| `\leq`、`\le` |小於或等號（`\le` 是短別名）。 |
| `\geq`、`\ge` |大於或等號（`\ge` 是短別名）。 |
| `\neq`、`\ne` |不等號（`\ne` 是短別名）。 |
| `\ll`、`\gg` |遠小於且遠大於符號。 |
| `\大約` |近似等號。 |
| `\sim` |波形符關係，讀作「分佈為」或「類似」。 |
| `\simeq` |漸近等號（波形符大於等號）。 |
| `\叢` |全等符號（兩個橫槓上的波形符），用於同構。 |
| `\equiv` |相同（三槓）符號，也用於全等。 |
| `\propto` |比例符號。 |
| `\asymp` |漸近等價關係（堆疊曲線）。 |
| `\doteq` |帶點的等號，讀作「接近」或「定義為」。 |
| `\prec`、`\succ` |前後關係，彎曲的順序。 |
| `\preceq`、`\succeq` |之前或等於和成功或等於。 |
| `\subset`、`\subseteq` |真子集和子集或等號。 |
| `\supset`、`\supseteq` |真超集合和超集合或等號。 |
| `\sqsubseteq`、`\sqsupseteq` |平方子集和超集合關係，用於資訊排序。 |
| `\in`、`\notin` |設定成員資格及其否定：`x \in A`。 |
| `\ni` |反向成員資格：集合包含該元素。 |
| `\vdash`、`\dashv` |十字轉門「證明」及其相反。 |
| `\模型` |雙閘，語意蘊涵。 |
| `\perp` |垂直/獨立關係。 |
| `\並行` |平行條關係。 |
| `\mid` |具有關係間距的垂直條，如集合建構器符號或「分隔」。 |
| `\不` |透過套印斜線來否定以下關係：`\not\subset`。 |

## 數學：箭頭

|指令 |它有什麼作用 |
| --- | --- |
| `\to`、`\rightarrow` |右箭頭，如函數類型「f: A \to B」並限制「x \to 0」。 |
| `\gets`、`\leftarrow` |左箭頭，也用於偽代碼中的賦值。 |
| `\leftrightarrow` |雙頭單箭頭。 |
| `\右箭頭` |雙右箭頭，唸作「暗示」。 |
| `\向左箭頭` |雙左箭頭，唸作「暗示」。 |
| `\左箭頭` |雙頭箭頭，讀作「當且僅當」。 |
| `\implied`, `\impliedby` |間隔開的「\Rightarrow」和「\Leftarrow」表示邏輯 (amsmath)。 |
| `\iff` |空格「\Leftrightarrow」表示「當且僅當」。 |
| `\mapsto` |帶有條形尾部的映射到箭頭：`x \mapsto x^2`。 |
| `\longmapsto` | `\mapsto` 的長版。 |
| `\hookrightarrow` |有鉤尾的右箭頭，用於包含/嵌入。 |
| `\rightharpoonup` |右魚叉（半箭），用於弱收斂。 |
| `\rightleftharpoons` |配對的相對魚叉，處於化學平衡狀態。 |
| `\導致` |彎曲的右箭頭，「通往」(amssymb)。 |
| `\向上箭頭`、`\向下箭頭` |向上和向下箭頭。 |
| `\updownarrow` |雙頭垂直箭頭。 |
| `\Uparrow`、`\Downarrow`、`\Updownarrow` |雙線垂直箭頭。 |
| `\narrow`、`\searrow` |東北和東南的對角箭頭，例如增加/減少到極限。 |
| `\swarrow`, `\nwarrow` |對角線箭頭西南和西北。 |
| `\longrightarrow`、`\longleftarrow` |長單箭頭。 |
| `\Longrightarrow`、`\Longleftarrow`、`\Longleftrightarrow` |長雙箭頭。 |
| `\xrightarrow{f}` |可擴展的右箭頭，頂部有一個標籤，不斷增長以適應 (amsmath)。 |
| `\xleftarrow{f}` |頂部有標籤的可擴展左箭頭 (amsmath)。 |

## 數學：大運算符

|指令 |它有什麼作用 |
| --- | --- |
| `\sum_{i=1}^{n}` |带极限的求和符号。 |
| `\prod_{i=1}^{n}` |有限制的产品标志。 |
| `\coprod` |余积（颠倒积）符号。 |
| `\int_0^1` |有界的积分符号。 |
| `\iint` |双积分符号 (amsmath)。 |
| `\iiint` |三重积分符号 (amsmath)。 |
| `\点` |轮廓（闭环）积分符号。 |
| `\bigcap`、`\bigcup` |一系列集合上的大交集和并集。 |
| `\bigsqcup` |大方杯（不相交联合）。 |
| `\bigvee`、`\bigwedge` |索引集上的大 OR 和大 AND。 |
| `\bigoplus`、`\bigotimes`、`\bigodot` |大圆圈加号、时间和点用于结构的索引和和乘积。 |
| `\biguplus` |索引集上的大联合加号。 |
| `\限制` |強制下列運算子的子/上標位於上方和下方：`\int\limits_0^1`。 |
| `\nolimits` |強制將下標/上標移至側面，而不是上方和下方。 |

## 數學：分隔符號和大小

|指令 |它有什麼作用 |
| --- | --- |
| `\left(...\right)` |自動調整大小的分隔符號對會成長以適應其內容。 |
| `\left.` 和 `\right.` |當只需要尺寸對的一側時，如評估欄中所示，隱形夥伴。 |
| `\middle|` |在「\left」和「\right」之間自動調整大小的中間分隔符號（如條件機率）。 |
| `\big( \Big( \bigg( \Bigg(` | 手動調整大小的分隔符，從稍大到很大。|
| `\bigl(...\bigr)` |具有正確的開啟/關閉間距的大小分隔符號（還有 `\Bigl`、`\biggl`、`\Biggl`）。 |
| `\lfloor`、`\rfloor` |地板支架。 |
| `\lceil`、`\rceil` |天花板支架。 |
| `\langle`、`\rangle` |左尖括號分隔符號和右尖括號分隔符號。 |
| `\|` |雙垂直線分隔符號（標準欄）。 |
| `\lvert`、`\rvert` |具有正確分隔符間距的絕對值條形 (amsmath)。 |
| `\lVert`, `\rVert` |雙槓表示規範，具有正確的分隔符號間距 (amsmath)。 |
| `\反斜線` |反斜線作為數學符號或分隔符號。 |

## 數學：重音與裝飾

|指令 |它有什麼作用 |
| --- | --- |
| `\帽子{x}` |一個符號上有小帽子口音。 |
| `\檢查{x}` |卡隆（倒置帽子）口音。 |
| `\breve{x}` |短音（圓角）口音。 |
| `\acute{x}`、`\grave{x}` |數學中的尖銳和嚴肅的口音。 |
| `\tilde{x}` |一個符號上的波形符重音符號。 |
| `\bar{x}` |符號上的短橫線。 |
| `\vec{v}` |一個符號上方的小箭頭。 |
| `\dot{x}`、`\ddot{x}` |符號上的一、兩個點，常見於時間導數。 |
| `\dddot{x}` |符號上的三個點 (amsmath)。 |
| `\mathring{x}` |符號上的環重音。 |
| `\widehat{abc}` |寬帽子延伸到多個符號。 |
| `\widetilde{abc}` |跨越多個符號的寬波形符。 |
| `\overrightarrow{AB}` |在表達式上拉伸右箭頭，如從 A 到 B 的向量。
| `\overleftarrow{AB}` |將左箭頭拉伸到表達式上。 |
| `\overline{x + y}` |在整個表達式上劃線。 |
| `\下劃線{x + y}` |整個表達式下的線條（也適用於文字）。 |
| `\overbrace{...}^{n}` |表達式上方的水平大括號，頂部有一個可選標籤。 |
| `\underbrace{...}_{n}` |表達式下方的水平大括號，下方有一個可選標籤。 |
| `\overset{!}{=}` |將一個符號放在另一個符號上方，例如「必須等於」(amsmath)。 |
| `\underset{i}{\max}` |將一個符號放置在另一個符號下方 (amsmath)。 |
| `\stackrel{\text{def}}{=}` |舊的核心指令在關係上堆疊符號。 |
| `\boldsymbol{\beta}` |粗體數學也將希臘字母和符號加粗 (amsmath)。 |
| `\prime` |質數符號； `x'` 是 `x^{\prime}` 的常用簡寫。 |

## 數學：類似對數的運算符

所有排版均垂直，間距正確；接受極限的人在顯示數學中將下標放在下面。

|指令 |它有什麼作用 |
| --- | --- |
| `\sin`、`\cos`、`\tan`、`\cot` |基本三角函數。 |
| `\sec`、`\csc` |正割與餘割。 |
| `\arcsin`、`\arccos`、`\arctan` |反三角函數。 |
| `\sinh`、`\cosh`、`\tanh`、`\coth` |雙曲函數。 |
| `\exp`、`\ln`、`\log`、`\lg` |指數和對數（依約定，「\lg」是以 2 或 10 為底的對數）。 |
| `\det`、`\dim`、`\ker`、`\deg` |行列式、維數、核、度。 |
| `\gcd`、`\hom`、`\arg`、`\Pr` |最大公約數、hom 集、複數論證、機率。 |
| `\lim_{x \ 到 0}` |極限運算符，與顯示數學中的下標垂直。 |
| `\limsup`、`\liminf` |限制優劣。 |
| `\inf`、`\sup` |下確界與上界運算符，垂直排版。 |
| `\min`、`\max` |最小和最大運算符，垂直排版，顯示數學中的限制如下。 |
| `\bmod` |具有運算子間距的二元 mod 運算子：`a \bmod n`。 |
| `\pmod{n}` |有括號的尾隨「(mod n)」。 |
| `\mod{n}` |尾隨「mod n」不帶括號 (amsmath)。 |
| `\operatorname{lcm}` |沒有序言聲明的一次性正直操作員名稱 (amsmath)。 |
| `\operatorname*{ess\,sup}` |接受下列限制的一次性運算子 (amsmath)。 |

## 數學：分數、二項式和堆積

|指令 |它有什麼作用 |
| --- | --- |
| `\frac{a}{b}` |堆積分數：分子除以分母。 |
| `\dfrac{a}{b}` |分數被迫完全顯示大小，甚至內聯（amsmath）。 |
| `\tfrac{a}{b}` |即使在顯示數學 (amsmath) 中，分數也被迫縮小內聯大小。 |
| `\cfrac{a}{b}` |具有全尺寸嵌套等級的連分數 (amsmath)。 |
| `\sqrt{x}`、`\sqrt[3]{x}` |平方根；可選參數給予 n 次方根。 |
| `\binom{n}{k}` |括號中的二項式係數 (amsmath)。 |
| `\dbinom{n}{k}`、`\tbinom{n}{k}` |顯示大小和文字大小強制二項式 (amsmath)。 |
| `{n \選擇 k}` | Plain TeX 二項式原語；在 LaTeX 中不鼓勵使用 `\binom`。 |
| `{a \over b}` | Plain TeX 分數原語；在 LaTeX 中不鼓勵使用 `\frac`。 |
| `{a \atop b}` |沒有欄的 Plain TeX 堆疊原語；如果不鼓勵，請使用「\substack」或「\genfrac」。 |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | `\frac`、`\binom` 和朋友 (amsmath) 背後的通用分數產生器。 |
| `\substack{i < n \\ j < m}` |大運算子 (amsmath) 下的多行下標。 |
| `\sideset{_a^b}{_c^d}{\prod}` |將索引附加到大運算子 (amsmath) 的所有四個角落。 |
| `\prescript{a}{b}{X}` |左上標/下標，如同位素表示法（數學工具）。 |

## 數學：間距和樣式

|指令 |它有什麼作用 |
| --- | --- |
| `\,` |薄弱的數學空間，如數字及其單位之間的空間。 |
| `\:` |中等數學空間。 |
| `\;` |厚厚的數學空間。 |
| `\!` |負薄空間，將符號拉得更近。 |
| `\quad`、`\qquad` |數學或文本中的一格和兩格空格。 |
| `\顯示樣式` |強製完全顯示數學尺寸，例如內聯數學中有很大的限制。 |
| `\textstyle` |在顯示數學中強制內聯數學調整大小。 |
| `\scriptstyle`、`\scriptscriptstyle` |強制下標和子下標大小調整。 |

## 數學：字母、字母和其他符號

|指令 |它有什麼作用 |
| --- | --- |
| `\mathbb{R}` |數字集的黑板粗體字母 (amssymb)。 |
| `\mathbf{x}` |數學中的粗體直立字母，常見於向量和矩陣。 |
| `\mathcal{L}` |書法大寫字母，例如損失或拉格朗日。 |
| `\mathfrak{g}` | Fraktur 字母，用於代數和邏輯。 |
| `\mathscr{F}` |腳本大寫字母，比 `\mathcal` (mathrsfs) 更捲曲。 |
| `\mathrm{d}x` |數學中的直立（羅馬）字母，用於單位和多字母名稱。 |
| `\mathit{diff}` |具有類似單字間距的斜體多字母標識符。 |
| `\mathsf{T}`、`\mathtt{x}` |數學中的無襯線字體和打字機字母。 |
| `\bm{\beta}` |粗體數學符號，「\boldsymbol」（bm 套件）的替代品。 |
| `\text{如果 } x > 0` |數學中正常的直立文本，具有適當的間距（amsmath）。 |
| `\infty` |無窮大符號。 |
| `\部份` |偏導數（捲曲 d）符號。 |
| `\nabla` |用於梯度和散度的 Nabla (del) 運算子。 |
| `\hbar` |簡化的普朗克常數，h 帶條。 |
| `\ell` |腳本小寫 l，用於避免與數字 1 混淆。
| `\wp` |維爾斯特拉斯 p. |
| `\Re`、`\Im` |實部與虛部符號（Fraktur R 和 I）。 |
| `\aleph` | Aleph，無限基數。 |
| `\emptyset` |空集合標誌。 |
| `\var沒有什麼` |許多作者更喜歡舍入空集變體（amssymb）。 |
| `\角度` |角度符號。 |
| `\測量角度` |有圓弧的測量角度符號 (amssymb)。 |
| `\三角形` |三角形符號。 |
| `\square`、`\blacksquare` |空方格和實心方格；填充的通常結束證明（amssymb）。 |
| `\鑽石`、`\菱形` |小型鑽石經營者；菱形符號（amssymb 代表後者）。 |
| `\top`、`\bot` |頂部（真）和底部（假/未定義）符號。 |
| `\forall`、`\exists` |通用（「對所有人」）和存在主義（「存在」）量詞。 |
| `\n存在` |否定存在量詞 (amssymb)。 |
| `\neg` |邏輯非符號。 |
| `\因此`、`\因為` |三點「因此」和「因為」符號 (amssymb)。 |
| `\平`、`\自然`、`\銳` |音樂臨時記號，也用於數學記譜法。 |
| `\surd` |沒有參數的裸激進符號。 |
| `\複選標記` |複選標記 (amssymb)。 |
| `\cdots` |居中點，位於運算子之間：`x_1 + \cdots + x_n`。 |
| `\vdots`、`\ddots` |垂直和對角線點，多呈矩陣形式。 |
| `\dotsb`、`\dotsc` |語意點：二元運算子之間與逗號之間 (amsmath)。 |

## amsmath 和 mathtools 顯示工具

|指令 |它有什麼作用 |
| --- | --- |
| `\tag{...}` |用您自己的标签 (amsmath) 替换自动方程编号。 |
| `\tag*{...}` |类似于“\tag”，但没有括号 (amsmath)。 |
| `\notag` |抑制编号环境 (amsmath) 的一行上的方程编号。 |
| `\nonumber` | `\notag` 的旧同义词。 |
| `\numberwithin{方程式}{部分}` |每節的數字方程式：(2.1)、(2.2) (amsmath)。 |
| `\互文{...}` |用全角文本行中断对齐块，保持对齐 (amsmath)。 |
| `\shortintertext{...}` |就像垂直空间较小的“\intertext”（数学工具）。 |
| `\allowdisplaybreaks` |讓多行顯示跨頁顯示 (amsmath)。 |
| `\displaybreak` |请求在显示的此时分页 (amsmath)。 |
| `\smashoperator{\sum_{i=1}^{n}}` |讓寬運算子限制懸垂，這樣它們就不會將內容分開（數學工具）。 |
| `\mathclap{...}` |零寬度數學內容，用於寬下標/上標（數學工具）。 |
| `\coloneqq` |冒號等於定義符號 := 並且有正確的間距（數學工具）。 |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` |使用星號的自動調整大小形式（mathtools）定義分隔符號宏。 |
| `\eqref{eq:loss}` |打印带有括号的方程编号 (amsmath)。 |
| `\qedhere` |將證明末尾的方塊移到目前行，例如在顯示的方程式（amsthm）之後。 |

## 數學環境

|環境 |它有什麼作用 |
| --- | --- |
| `方程式` |一個顯示的、編號的方程式。 |
| `方程式*` |一個顯示的、未編號的方程式 (amsmath)。 |
| `對齊` |多個顯示的方程式在「&」標記處對齊，每個方程式都編號（amsmath）。 |
| `對齊*` |沒有數字的對齊方程式 (amsmath)。 |
| `聚集` |沒有對齊的多個中心方程，每個方程都有編號（amsmath）。 |
| `對齊` |透過手動控制列之間的間距（amsmath）對齊方程式。 |
| `平齊` |對齊的方程式推到左右邊緣 (amsmath)。 |
| `分裂` |在「equation」（amsmath）內將一個長方程式拆分為一個數字下的對齊線。 |
| `多行` |一個跨行的長方程式：第一行向左，最後一行向右（amsmath）。 |
| ‘對齊’、‘聚集’ |對齊/聚集的構建塊版本可在另一個顯示器 (amsmath) 中使用。 |
| `子方程式` |將裡面的方程式編號為 1a、1b、1c (amsmath)。 |
| `案例` |大括號分組的大小寫區別，如分段函數 (amsmath)。 |
| `dcases` |帶有顯示樣式條目的“cases”，因此分數保持完整大小（數學工具）。 |
| `矩陣` |沒有分隔符號的裸矩陣 (amsmath)。 |
| `pmatrix` |用括號括起來的矩陣 (amsmath)。 |
| `bmatrix` |用方括號括起來的矩陣 (amsmath)。 |
| `Bmatrix` |用花括號括起來的矩陣 (amsmath)。 |
| `vmatrix` |以垂直條包裹的矩陣，標準行列式表示法 (amsmath)。 |
| `Vmatrix` |以雙條包裹的矩陣 (amsmath)。 |
| `小矩陣` |緊湊的矩陣尺寸適合內嵌使用（amsmath）。 |
| `數組` |具有每列對齊的數學模式網格，是「表格」的數學表親。 |
| `eqnarray` |舊的三列方程式環境；氣餒，它的間距不對，使用`align`。 |

## 交叉引用和鏈接

|指令 |它有什麼作用 |
| --- | --- |
| `\label{圖：設定}` |命名一個點（方程式、圖形、剖面），以便您可以參考。 |
| `\ref{圖：設定}` |列印有標籤的項目的編號。 |
| `\pageref{圖：設定}` |列印標籤所在的頁碼。 |
| `\cref{圖：設定}` |自動列印數字及其類型名稱：'fig. 1'（聰明）。 |
| `\Cref{圖：設定}` |大寫的「\cref」作為句子的開頭：「圖 1」(cleveref)。 |
| `\crefrange{eq:a}{eq:d}` |印一個範圍：'eqs. 1 到 4'（cleveref）。 |
| `\labelcref{圖：設定}` |僅以 Cleveref 樣式列印標籤編號，不顯示類型名稱 (cleveref)。 |
| `\vref{圖：設定}` |需要時參考加上自動「在下一頁」短語（varioref）。 |
| `\autoref{fig:setup}` | hyperref 的鍵入參考：“圖 1”，並連結了整個片語。 |
| `\nameref{sec:intro}` |列印引用部分的標題文字 (hyperref)。 |
| `\href{https://example.com}{連結文字}` |使用自訂文字（超級引用）建立可點擊的連結。 |
| `\url{https://example.com}` |以打字機類型排版 URL 並使其可點擊。 |
| `\hyperref[sec:intro]{該部分}` |使任意文字連結到標籤（超級引用）。 |
| `\hypertarget{spot}{...}` |在文件中的任意位置建立命名連結目標（超級引用）。 |
| `\hyperlink{spot}{text}` |連結到「\hypertarget」（hyperref）。 |
| `\phantomsection` |建立一個錨點，以便連結到未編號的標題放置在正確的位置（超級引用）。 |
| `\texorpdfstring{$\alpha$}{alpha}` |為標題中的數學提供純文字替代方案，以便 PDF 書籤保持有效（超級引用）。 |
| `\pdfbookmark[1]{標題}{姓名}` |新增手動 PDF 書籤條目 (hyperref)。 |

## 引文和參考書目

|指令 |它有什麼作用 |
| --- | --- |
| `\cite{knuth1984}` |依關鍵字引用參考書目條目。 |
| `\nocite{key}` | 在參考書目中新增一個條目，但不在文本中引用它； `\nocite{*}` 添加了所有內容。 |
| `\citep{knuth1984}` | natbib 作者年份風格的附加引文「(Knuth, 1984)」。 |
| `\citet{knuth1984}` |文本引用“Knuth (1984)”，採用 natbib 作者年份風格。 |
| `\citeauthor{knuth1984}` |僅印製作者姓名（natbib 和 biblatex）。 |
| `\citeyear{knuth1984}` |只印在年份（natbib 和 biblatex）。 |
| `\citealp{knuth1984}` | natbib 不帶括號的括號引用，用於建立您自己的引用。 |
| `\citealt{knuth1984}` | natbib 全年無括號文字引用。 |
| `\parencite{knuth1984}` | biblatex 的括號引用，類似 `\citep`。 |
| `\textcite{knuth1984}` | biblatex 的文本引用，類似於 `\citet`。 |
| `\autocite{knuth1984}` | biblatex 引用遵循此風格的首選形式（括號、註腳等）。 |
| `\footcite{knuth1984}` | biblatex 引文放在註腳。 |
| `\fullcite{knuth1984}` |內聯印刷條目的完整參考書目文本 (biblatex)。 |
| `\citetitle{knuth1984}` |印刷作品的標題 (biblatex)。 |
| `\參考書目{refs}` | BibTeX：列印 .bib 檔案中的參考文獻清單。 |
| `\bibliographystyle{plainnat}` | BibTeX：選擇參考格式；經典樣式包括 plain、unsrt、alpha、abbrv、ieeetr、acm、apalike。 |
| `\addbibresource{refs.bib}` | biblatex：在序言中註冊一個 .bib 檔案。 |
| `\printbibliography` | biblatex：在您放置的位置列印參考清單。 |
| `\bibitem{key}` | 「thebibliography」環境中的一篇手寫條目。 |
| `參考書目`（環境） |手寫當您完全跳過 BibTeX 時使用的參考清單。 |

## 浮點數、數字和表格

|指令或環境 |它有什麼作用 |
| --- | --- |
| ‘人物’（環境）|圖像加標題的浮動容器； LaTeX 選擇最終位置。 |
| `圖*`（環境）|跨越兩列文件中兩列的圖。 |
| `表`（環境）|用於表格加標題的浮動容器； LaTeX 選擇最終位置。 |
| `表*`（環境）|跨越兩列文件中兩列的表格。 |
| `\begin{圖}[htbp]` |放置提示：此處、頂部、底部、自己的頁面； `!`放寬了規則，`[H]`（浮動包）正是在這裡的意思。 |
| `表格`（環境）|行和列的實際網格：單元格由「&」分割，行以「\\」結尾。 |
| `表格*`（環境）|表格拉伸到指定的總寬度。 |
| `tabularx`（環境）|固定寬度的表格，其「X」列共享剩餘空間（tabularx）。 |
| `數組`（環境）|具有每列對齊的數學模式網格。 |
| `longtable`（環境）|可以跨頁分隔的表格，具有重複的標題（longtable）。 |
| `minipage`（環境）|頁面內固定寬度的迷你頁面，用於並排放置內容。 |
| `subfigure`（環境）|一個子麵板，有自己的標題，如 (a) 和 (b)，位於圖形內（子標題）。 |
| `wrapfigure`（環境）|正文文字環繞的圖形 (wrapfig)。 |
| `sidewaysfigure`、`sidewaystable`（環境）|浮動旋轉 90 度到自己的頁面上（旋轉）。 |
| 「風景」（環境）|將整個頁面旋轉為橫向，同時 PDF 頁面自動旋轉 (pdflscape)。 |
| `twoparttable`（環境）|包裝表格，使腳註與表格寬度對齊（三部分）。 |
| `tablenotes`（環境）|註解清單位於三部分錶下，標示「\tnote{a}」。 |
| `調整框`（環境和 `\adjustbox`) |使用鍵值選項（調整框）縮放、調整大小或裁剪任何內容。 |
| `\caption{...}` |在圖形或表格上加上編號標題；在其後面加上「\label」。 |
| `\caption*{...}` |沒有數字或清單條目的標題（標題包）。 |
| `\captionsetup{...}` |配置標題字型、標籤和間距（標題包）。 |
| `\toprule` |書籤表頂部的重標尺。 |
| `\中規則` | booktabs 表的標題和正文之間的中線。 |
| `\bottomrule` |書籤表底部的粗尺。 |
| `\cmidrule(lr){2-3}` |跨越選定列（書籤）的部分規則。 |
| `\addlinespace` |書籤行之間有額外的垂直空間，而不是規則。 |
| `\hline` |普通表格中的全寬水平線；書籤規則通常看起來更好。 |
| `\cline{2-3}` |水平線跨越普通表格中的選取列。 |
| `\vline` |表格行此時的垂直線；列「|」說明符是通常的方式。 |
| `\multicolumn{2}{c}{標題}` |將跨列的儲存格合併到一行中。 |
| `\multirow{2}{*}{標籤}` |跨行垂直合併儲存格（多行）。 |
| `\arraystretch` |表格行高的因素；使用 `\renewcommand{\arraystretch}{1.3}` 設定。 |
| `\tabcolsep` |表格列每側填滿的長度。 |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` |定義可重複使用的列說明符（陣列包）。 |
| `\endfirsthead` | longtable：標記僅在第一頁上顯示的標題的結尾。 |
| `\endhead` | longtable：標記在接下來的每一頁中重複的標題的結尾。 |
| `\endfoot` | longtable：標記每個分頁符號處顯示的頁腳的結尾。 |
| `\endlastfoot` | longtable：標記僅在最後顯示的頁腳的結尾。 |
|`\FloatBarrier` |阻止浮標漂過該點（placeins）。 |

## 註腳

|指令 |它有什麼作用 |
| --- | --- |
| `\腳註{...}` |在頁面底部新增註釋，並標有自動編號。 |
| `\註腳標記` |對於不允許使用「\footnote」的地方，僅列印腳註標記。 |
| `\footnotetext{...}` |為早期的「\footnotemark」提供文本。 |

## 定理和證明

|指令或環境 |它有什麼作用 |
| --- | --- |
| `\newtheorem{引理}{引理}` |宣告類似定理的環境 (amsthm)。 |
| `\newtheorem*{備註}{備註}` |宣告一個未編號的類別定理環境 (amsthm)。 |
| `\theoremstyle{定義}` |設定以下 `\newtheorem` 宣告的外觀（簡單、定義、註解）(amsthm)。 |
| `定理`（環境） |編號定理塊，由 `\newtheorem{theorem}{Theorem}` 創建。 |
| 「證明」（環境）|印出「Proof」的證明區塊。並以 QED 方塊 (amsthm) 結束。 |

## 逐字記錄、程式碼和清單

|指令或環境 |它有什麼作用 |
| --- | --- |
| `\verb|代碼|` |內聯逐字列印：準確列印您鍵入的內容，由任何重複字元分隔。 |
| `逐字記錄`（環境）|完全按照打字機字體列印的文字區塊。 |
| `\verbatiminput{file.txt}` |逐字列印整個檔案（逐字包）。 |
| `lstlisting`（環境）|帶有可選語法突出顯示的原始程式碼清單（列表）。 |
| `\lstinline|代碼|` |列表樣式（列表）中的內聯程式碼片段。 |
| `\lstset{語言=Python}` |配置清單預設值：語言、編號、顏色（清單）。 |
| `\lstinputlisting{script.py}` |將整個原始檔排版為列表（列表）。 |
| `minted`（環境）| Pygments 支援的突出顯示程式碼區塊；在編譯時需要「-shell-escape」（已建立）。 |
| `\mintinline{python}|代碼|` |內聯突出顯示的程式碼（鑄造）。 |

## 投影機（幻燈片）

|指令或環境 |它有什麼作用 |
| --- | --- |
| `框架`（環境）|一張 Beamer 幻燈片："\begin{frame}{幻燈片標題} ... \end{frame}」。 |
| `\frame{...}` | Beamer 的一鍵投影片形式； 「frame」環境是通常的方式。 |
| `\frametitle{...}` |從框架內設定投影片標題。 |
| `\framesubtitle{...}` |在框架標題下設定較小的副標題。 |
| `\標題頁` | Beamer：在框架內，從標題元資料列印標題投影片。 |
| `\tableofcontents[目前部分]` |概述投影片突顯您所在的部分。
| `\暫停` | Beamer：在下一個投影片步驟中顯示框架的其餘部分。 |
| `\onslide<2->` |內容從給定的覆蓋步驟開始顯示。 |
| `\only<2>{...}` |內容僅存在於給定步驟上，不佔用其他地方的空間。 |
| `\uncover<2->{...}` |內容在出現之前是不可見的，但始終保留其空間。 |
| `\visible<2->{...}`、`\invisible<2>{...}` |在給定步驟上顯示或隱藏內容而不更改佈局。 |
| `\警報{...}` |以主題的警報顏色（通常為紅色）突出顯示文字。 |
| `塊`（環境）|採用主題標準顏色的標題框。 |
| `alertblock`（環境）|警告顏色的標題框，用於警告或要點。 |
| `exampleblock`（環境）|標題框採用範例顏色，通常為綠色。 |
| `columns` （環境）和 `\column{0.5\textwidth}` |投影片上的並排佈局區域。 |
| `\usetheme{馬德里}` | Beamer：選擇序言中的示範主題。 |
| `\usecolortheme{海馬}` |僅交換主題的調色盤。 |
| `\usefonttheme{襯線}` |僅交換主題的字體選擇。 |
| `\setbeamertemplate{導航符號}{}` |覆寫一個主題元素，此處刪除導航圖示。 |
|`\setbeamercolor{标题}{fg=黑色}` |覆盖一种主题颜色。 |
| `\注意{...}` |附加到框架的演讲者注释，仅在注释输出中显示。 |

## TikZ 和圖表

|指令或環境 |它有什麼作用 |
| --- | --- |
| `tikzpicture`（環境）| TikZ 繪圖的畫布；所有「\draw」和「\node」指令都在其中。 |
| `\tikz` |一次性內嵌圖片：`\tikz \draw (0,0) Circle (2pt);`。 |
| `\draw (0,0) -- (1,1);` | TikZ 路徑指令，繪製線條和形狀；像「[thick, red, ->]」這樣的選項可以設定它的樣式。 |
| `\填滿` | TikZ 路徑指令，填滿形狀而不是撫摸它。 |
| `\filldraw` | TikZ 路徑指令可填滿和勾畫形狀。 |
| `\陰影` | TikZ 填滿漸變的路徑指令。 |
| `\剪輯` | TikZ 路徑，將所有後續繪圖限制在其內部。 |
| `\路徑` |無需繪圖即可計算座標的 TikZ 路徑，例如用於放置節點。 |
| `\node at (0,0) {label};` | TikZ 指令將文字或形狀放置在座標處。 |
| `\座標 (a) 在 (1,2);` |命名一個點以便在以後的路徑中重複使用。 |
| `\foreach \i in {1,...,5}` |在列表上重複繪製程式碼的迴圈 (TikZ/pgffor)。 |
| `\tikzset{mystyle/.style={...}}` |以現代方式定義可重複使用的 TikZ 樣式。 |
| `\tikzstyle` |舊的樣式定義語法；已棄用，請使用 `\tikzset`。 |
| `\usetikzlibrary{定位}` |在序言中載入額外的 TikZ 功能。 |
| `\matrix` (TikZ) | tikzpicture 內節點的網格對齊排列。 |
| `tikzcd`（環境）|交換圖的網格；單元格被「&」分割（tikz-cd）。 |
| `\arrow[r, "f"]` |在 tikz-cd 交換圖中的單元格之間繪製箭頭。 |

## 單位 (siunitx)

|指令 |它有什麼作用 |
| --- | --- |
| `\num{12345.678}` |使用正確的數字分組和小數點標記格式化數字。 |
| `\qty{9.8}{\米\每\秒\平方}` |有單位的數字，間隔正確（siunitx v3 名稱）。 |
| `\單位{\公斤\克}` |單獨的單元（siunitx v3 名稱）。 |
| `\SI{9.8}{\米\每\秒\平方}` | `\qty` 的 v2 名稱；至今仍廣泛見於報紙。 |
| `\si{\公斤\克}` | `\unit` 的 v2 名稱。 |
| `\sisetup{...}` |全域 siunitx 設定。 |
| `\DeclareSIUnit{\parsec}{pc}` |定義自訂單位 (siunitx)。 |

## 術語表和縮寫

|指令 |它有什麼作用 |
| --- | --- |
| `\gls{svm}` |列印術語表或首字母縮寫條目，並在首次使用時對其進行擴展（術語表）。 |
| `\Gls{svm}` |句子開頭的大寫形式（詞彙表）。 |
| `\glspl{svm}` |條目的複數形式（詞彙表）。 |
| `\newglossaryentry{tree}{name=tree, 描述={...}}` |宣告詞彙表術語（詞彙表）。 |
| `\newacronym{svm}{SVM}{支援向量機}` |宣告具有短形式和長形式的首字母縮寫（術語表）。 |
| `\acrshort{svm}`、`\acrlong{svm}` |不論首次使用為何，都強制使用短格式或長格式（詞彙表）。 |
| `\makeglossaries` |啟動術語表/首字母縮寫處理（術語表）的序言命令。 |
| `\printglossary` |在您放置的位置列印一份術語表清單（術語表）。 |
| `\printglossaries` |列印您放置的術語表和縮寫列表（術語表）。 |

## 演算法和偽代碼

關鍵字指令來自algpseudocode (algorithmicx)； `algorithm` 浮動體包裹著它們。

|指令或環境 |它有什麼作用 |
| --- | --- |
| `演算法`（環境）|偽代碼的浮動容器，帶有標題和數字（演算法）。 |
| `演算法`（環境）|偽代碼主體本身，包含關鍵字指令（algpseudocode）。 |
| `\狀態` |一行偽代碼的語句。 |
| `\If{...}`、`\ElsIf{...}`、`\Else`、`\EndIf` |條件區塊關鍵字。 |
| `\For{...}`、`\ForAll{...}`、`\EndFor` |在一個範圍或一組上循環關鍵字。 |
| `\While{...}`、`\EndWhile` | While 迴圈關鍵字。 |
| `\Function{名稱}{args}`、`\EndFunction` |函數定義區塊。 |
| `\Procedure{名稱}{args}`、`\EndProcedure` |過程定義區塊。 |
| `\回傳` |回傳關鍵字。 |
| `\註解{...}` |偽程式碼行上的右對齊註解。 |
| `\要求`、`\確保` |前置條件和後置條件位於演算法頂端。 |

## 語言、引用和編輯包

|指令 |它有什麼作用 |
| --- | --- |
| `\selectlanguage{德语}` |切换活动语言：连字符、标题、日期（babel）。 |
| `\外语{法语}{...}` |根据另一种语言的规则（babel）排版短文。 |
| `\enquote{...}` |正确嵌套和本地化的上下文感知引号 (csquotes)。 |
| `\todo{修复这个}` |边注标记了要做的工作 (todonotes)。 |
| `\listoftodos` |打印所有待办事项注释 (todonotes) 的列表。 |
| `\missingfigure{...}` |您尚未制作的图形的占位符框 (todonotes)。 |
| `\xspace` |在宏末尾添加一个空格，除非后面跟有标点符号 (xspace)。 |
| `\patchcmd{\cmd}{查找}{替换}{成功}{失败}` |就地修补现有宏的定义 (etoolbox)。 |
| `\apptocmd`、`\pretocmd` |将代码附加或添加到现有宏 (etoolbox)。 |
| `\newtoggle{草稿}`、`\toggletrue{草稿}`、`\iftoggle{草稿}{...}{...}` |轻量级布尔标志（etoolbox）。 |

## 佈局和排版套件在一行中

|包或命令|它有什麼作用 |
| --- | --- |
| `\setstretch{1.25}` |設定精確的行間距係數 (setspace)。 |
| `\雙倍行距` |切換到雙倍行距 (setspace)。 |
| `\onehalfspacing` |切換到半行距 (setspace)。 |
| `\單行距` |切換回單行間距 (setspace)。 |
| `間距`（環境）|為其內容設定自訂行間距係數 (setspace)。 |
| `\titleformat{\section}{...}{...}{...}{...}` |重新設計分段標題的外觀（titlesec）。 |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` |調整標題周圍的空間 (titlesec)。 |
| `\setlist[itemize]{noitemsep}` |全域或依等級（enumitem）配置清單間距和標籤。 |
| `parskip`（包）|將文件切換為區塊段落：之間有空格，沒有縮排。 |
| `microtype`（包）|微妙的突出和擴展，提高了合理性；只需加載它即可。 |
| `multicols`（環境）|平衡的多列文本，沒有雙列類別選項 (multicol)。 |

## 化學、物理和領域符號

|指令 |它有什麼作用 |
| --- | --- |
| `\ce{H2O}` |排版化學式或反應 (mhchem)。 |
| `\chemfig{...}` |繪製化學結構圖（chemfig）。 |
| `\braket{\phi|\psi}` |排版 Dirac bra-ket 符號，帶有自動調整大小的條（括號）。 |

## 發布者類別命令

|指令或環境 |它有什麼作用 |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran：格式化 IEEE 會議標題區域中的作者姓名區塊。 |
| `\IEEEauthorblockA{...}` | IEEEtran：在 IEEE 會議標題區域格式化作者隸屬關係區塊。 |
| `\ccsdesc[500]{...}` | acmart：聲明一個用於論文分類的 ACM CCS 概念。 |
| `CCSXML`（環境）| acmart：保存來自 ACM 分類工具的機器可讀的 ACM CCS 概念 XML。 |
| `\大學{...}` |論文範本中看到的特定於類別的元資料命令，而不是標準 LaTeX。 |

## 一般環境

环境是一个用“\begin{name}”打开并用“\end{name}”关闭的区域；两者之间的一切都会受到该环境的行为影响。完整的故事在[命令与环境](/learn/commands-environments/)中。通用的：

|環境 |它有什麼作用 |
| --- | --- |
| `文檔` |每個文檔的正文都位於「\begin{document}」和「\end{document}」之間。 |
| `摘要` |使用班級的標準標題和版面來列印論文摘要。 |
| `扉頁` |包裝一個手工製作的完整扉頁；該頁未編號。 |
| `中心` |將其內容水平置中。 |
| `左齊平` |其內容左對齊，右對齊。 |
| `齊平右` |其內容右對齊，左對齊。 |
| `逐項列出` |項目符號清單；每個條目都以「\item」開頭。 |
| `枚舉` |編號列表；每個條目都以“\item”開頭。 |
| `描述` |有標籤的清單；條目以「\item[Label]」開頭。 |
| `\item` |在逐項列出、列舉或描述清單中開始一項。 |
| `引用` |簡短引文的縮排區塊，沒有段落縮排。 |
| `報價` |較長引文的縮排區塊，帶有段落縮排。 |
| `詩句` |詩的縮排塊，每節詩行以「\\」結尾。 |
| `馬虎` |段落排版採用寬鬆的換行，環境形式為「\sloppy」。 |
| `列表` |定義 itemize 和 Friends 的通用列表建構器。 |
| `瑣事列表` |沒有標籤或邊距的簡單列表，在巨集定義內使用。 |
| `文件內容` |在編譯時將其主體寫入文件，例如在 .tex 中發送 .bib。 |
| `附錄` |包裝附錄章節，啟用「\appendixpage」和每個附錄工具（附錄包）。 |

## 下一步要去哪裡

此頁是字典。課程是文法。對於可貼上的單頁閱讀器，請保持[備忘錄](/learn/cheatsheet/) 開啟。有關 `\command{...}` 和 `\begin{...}` 區塊之間的區別，請閱讀 [命令與環境](/learn/commands-environments/)。對於可以畫出圖像但無法命名的符號，請使用[數學符號](/learn/math-symbols-cheatsheet/)。要查看任何數學模式命令的外觀，請將其貼到[即時預覽](/live/) 並觀看其渲染。