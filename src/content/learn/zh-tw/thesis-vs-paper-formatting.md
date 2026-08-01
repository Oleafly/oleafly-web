---

title: "論文格式與論文格式"
description: "大學課程、封面資料、章節、裝訂邊距和重複使用紙本材料。"
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# 論文格式與論文格式

論文是為出版商格式化的。論文是為研究生院設計的，這是一個非常不同的野獸，有著非常不同的規則。如果您只寫過論文，論文範本將以特定的方式讓您感到驚訝。

## 誰制定規則

論文：場地為您提供一門課程（[IEEEtran](/learn/ieee-format-in-practice/)、[acmart](/learn/acm-format-in-practice/)、llncs），全世界的每個人都使用相同的課程。論文：你的大學規定了自己的班級或一頁的印刷規則（頁邊距、行距、標題頁措詞），並且沒有兩所大學同意。首先從您所在系所或研究生院網站取得官方課程。如果它很古老並且拒絕編譯，那麼這種情況很常見，可以[它自己的教訓](/learn/fix-broken-template/)。

## 結構差異

|方面|紙|論文|
|---|---|---|
|頂層單位| `\節` | `\章節` |
|班級基地|場地等級| ‘書’/‘報告’衍生 |
|前言 |標題+摘要|扉頁、聲明、摘要、目錄、圖表清單 |
|長度| 8 至 30 頁 | 80 至 300 頁 |
|佈局|通常為兩欄 |單柱，寬大間距 |
|雙方|單面 PDF |通常是雙面列印 |

章節改變了下游的一切：編號變成“3.2”，數字變成“圖3.1”，每章通常在一個新的（有時是右側）頁面上打開。

## 前面的事情是成功的一半

論文前言順序通常為：標題頁、原創性聲明、摘要、致謝、目錄、圖表列表、表格列表，然後是第一章。其中大部分是自動化的：

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

羅馬然後阿拉伯的頁碼舞蹈讓每個人都跳了一次，[前文和頁碼](/learn/front-matter-page-numbers/) 正確地涵蓋了它。

## 雙面列印與裝訂邊距

列印論文通常是雙面的（“twoside”類選項），這使得頁邊距不對稱：內部頁邊距較寬，可以保存裝訂。你們大學的規則會說“左邊距 35 毫米，其他 25 毫米”，在雙面文檔中意味著“內部”，而不是左側。不要用手動“\hspace”來解決這個問題，類別選項加上“geometry”設定可以處理它：

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

「openright」強制將章節放在右側頁面上，這是裝訂副本的標準。

## 重複使用你的論文作為章節

大多數論文吸收已發表的論文，大多數大學明確允許這樣做。機制：剝離每篇論文的序言，如果需要的話降級其“\section”，統一各章的符號和宏，並將參考書目合併為一個。將每一章保存在自己的文件中使其易於管理。 [將章節拆分為檔案](/learn/split-chapter-files/) 顯示了 `\input`/`\include` 設定，可保持 200 頁的建置正常。

一個誠實的警告：大學論文課程往往包含大量軟體包，因此在新機器上進行第一次編譯可能會在成功之前刪除一批軟體包。讓它完成一次，後續的建造就會很快。