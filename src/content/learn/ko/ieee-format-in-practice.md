---

title: "실제로 IEEE 형식"
description: "IEEEtran 회의 및 저널 모드, 작성자 블록 및 2열 문제."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# 실제 IEEE 형식

소규모 워크숍부터 주요 저널까지 IEEE 장소에서는 'IEEEtran'이라는 하나의 클래스 파일을 공유합니다. 한 번 배우면 수백 개의 장소가 열립니다.

## 컨퍼런스 vs 저널 모드

동일한 클래스는 옵션에 따라 다른 레이아웃을 생성합니다.

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

회의 모드는 기본적으로 10pt 시간, 2열, 페이지 번호 없음 등의 클래식한 모양을 제공합니다. 저널 모드는 제목 레이아웃을 변경하고 끝에 저자 전기를 추가하며 간격을 조정합니다. 항상 장소에서 요구하는 모드를 사용하십시오. 이 모드는 서로 바꿔 사용할 수 없습니다. 더 폭넓은 IEEE와 ACM 비교를 보려면 [ACM, IEEE 및 친구](/learn/acm-ieee-and-friends/)를 참조하세요.

## IEEE 방식으로 작성

회의 모드에는 자체 작성자 마크업이 있습니다. `\\`와 수동 센터링으로 싸우지 마세요:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN`은 이름을 담고, `\IEEEauthorblockA`는 소속을 담고, `\and`는 작성자를 열로 구분합니다.

## 두 개의 기둥으로 생활하기

2열 레이아웃은 초보자가 막히는 부분입니다. 규칙:

| 문제 | 수정 |
|---|---|
| 넓은 그림이나 표 | `그림*` / `테이블*`을 사용하면 페이지 상단에 표시됩니다. |
| 긴 방정식이 오버플로됨 | 중단하고 [1열 또는 2열](/learn/one-column-or-two/)에서 2열 전술을 확인하세요 |
| 마지막 페이지 열이 고르지 않음 | `\IEEEtriggeratref` 또는 `balance` 패키지를 사용하여 수동으로 균형을 맞추세요 |
| URL이 여백에 도달함 | 더 나은 중단을 위해 `\usepackage{url}` 또는 `xurl` |

별표 표시된 부동 환경은 광범위한 콘텐츠에 대해 협상할 수 없습니다.

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

`Figure*`는 `[h]` 배치를 거부하며 항상 페이지 상단에 떠 있습니다. 싸우기보다는 계획을 세우세요.

## 참고문헌

IEEE는 자체 BibTeX 스타일로 숫자 인용을 사용합니다.

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

일치하는 `IEEEtran.bst`가 클래스와 함께 제공됩니다. 'plain' 또는 'ieeetr'로 대체하지 마십시오. 리뷰어가 알 수 있듯이 카메라 준비 체크리스트는 어쨌든 이를 포착합니다.

## 실제 템플릿을 어디서 구할 수 있나요?

항상 공식 소스(ieee.org의 IEEE 템플릿 선택기 또는 컨퍼런스 자체 작성자 키트 페이지)에서 시작하세요. 회의 주최자는 때때로 템플릿(저작권 고지, 추가 바닥글)을 패치하여 해당 장소의 버전이 일반 사본보다 우선하도록 합니다. Oleafly의 [템플릿 갤러리](/templates/)에는 번들로 제공되는 Tectonic 엔진에서 즉시 컴파일할 수 있는 IEEE 스타일 컨퍼런스 스타터가 포함되어 있으며, 공식 키트에 넣기 전에 초안을 작성하는 데 편리합니다.

## 일반적인 문제 체크리스트

- pdfLaTeX 호환 코드로 컴파일, IEEEtran은 글꼴 사양보다 앞서며 클래식 엔진을 기대합니다.
- '기하학'을 추가하거나 여백을 변경하지 마세요. 클래스에서 정확하게 설정합니다.
- 일부 저널 투고에서는 `\maketitle` 다음에 `\IEEEpeerreviewmaketitle`이 필요합니다.
- 컴퓨터에 템플릿 오류가 있는 경우 [깨진 템플릿](/learn/fix-broken-template/)처럼 분류하세요.