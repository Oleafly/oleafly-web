---

title: "ACM 格式的實踐"
description: "acmart 類別：sigconf、元資料、匿名審查和首次編譯驚喜。"
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# ACM 格式的實踐

ACM 在 2017 年將其所有範本合併為一個類別「acmart」。一個類，多個面孔：格式選項決定您是否獲得兩欄會議論文或單欄期刊文章。

## 選擇您的格式選項

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

幾乎所有 ACM 會議都需要「sigconf」。場地的 CFP 指定了確切的選項；相信它而不是習慣。如果您仍在場地系列之間做出選擇，[ACM、IEEE 和朋友](/learn/acm-ieee-and-friends/) 可以對它們進行比較。

## 元資料是必要的

與 IEEEtran 不同，acmart 拒絕在沒有元資料區塊的情況下看起來正確（並且發布者拒絕接受它）：

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

CCS 概念來自 ACM 網站上的選擇器，它會產生 XML 和「\ccsdesc」行。逐字貼上它們。關鍵字放在“\keywords”中，而不是在摘要中。 ACM 參考格式區塊（第一頁上的灰色引文框）是從「\acmConference」、「\acmYear」和朋友自動產生的，發布者在相機準備好時填寫或驗證。

## 提交雙盲

大多數 ACM 會議都是匿名評審。一種選擇可以處理它：

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

「anonymous」隱藏作者和隸屬關係，「review」為審查者加上行號。將兩者都關閉即可拍照。這類處理機制，但匿名化比標誌更重要。請參閱[雙盲做得對](/learn/anonymization-double-blind/)。

## 引用：編號或作者年份

acmart 在底層使用 natbib 並支援兩種樣式：

|選項|結果 |
|---|---|
|預設|編號：[3] |
| `natbib=true` + `\citestyle{acmauthoryear}` |作者年份：（洛夫萊斯，1843 年）|

有些 SIG 規定作者年份（歷史上為 CHI），有些則規定編號。再次強調：CFP 決定。

## 首次編譯驚喜

acmart 非常需要包裹。在全新設定中期待這些：

- **Libertine 字體。 ** 該類別載入 Linux Libertine 和 Biolinum 以及 `newtxmath`。在最小化的 TeX 安裝中，這些將在您第一次編譯時作為下載到達。 Oleafly 捆綁的 Tectonic 引擎會在第一次使用時自動取得它們，因此初始編譯所需的時間比第二次要長。這是正常現象，不是掛機。
- **嚴格的浮動規則。 ** acmart 會完全阻止某些軟體包（如 `titlesec`），如果載入它們就會出錯。
- **`\authorsaddresses{}`** 讓草稿中的「作者地址」頁腳無聲。

如果某個軟體包確實無法解析，則修復方法是通常的：[安裝缺少的軟體包](/learn/install-missing-package/)。

## 從哪裡獲取

從 acm.org 的作者頁面或您的會議網站下載官方模板，並保持「acmart.cls」最新。 ACM 每年對其進行多次修訂，並針對最新版本進行相機就緒檢查。