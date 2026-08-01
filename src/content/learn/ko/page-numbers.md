---

title: "페이지 번호 켜기 또는 끄기"
description: "일반, 비어 있음, 로마자 대 아랍어, 제목 페이지의 숫자 억제."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 페이지 번호 켜기 또는 끄기

페이지 번호는 기본적으로 `article`에 표시됩니다. 표준 클래스는 모든 페이지 하단에 숫자를 중앙에 배치하는 `일반` 페이지 스타일을 사용합니다. 보통 그것은 괜찮고 당신은 그것에 대해 생각하지 않습니다. 당신이 그것에 대해 생각하는 세 가지 상황은 제목 페이지에 숫자를 숨기는 것, 번호 매기기를 완전히 끄는 것, 긴 문서에서 로마 숫자와 아라비아 숫자 사이를 전환하는 것입니다.

## 제목 페이지에 숫자 숨기기

맨 아래에 외로운 "1"이 있는 제목 페이지는 미완성처럼 보입니다. 수정 사항은 제목이 설정된 바로 뒤에 한 줄이 배치되는 것입니다.

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}`는 현재 페이지의 페이지 스타일만 변경하며 `empty`는 머리글이나 바닥글에 아무것도 인쇄하지 않는 내장 스타일입니다. 순서가 중요합니다. `\maketitle` 자체가 페이지 스타일을 재설정하므로 같은 페이지에서 `\maketitle` 뒤에 와야 합니다. 페이지는 여전히 중요합니다. 다음 페이지의 번호는 2로 지정됩니다. `\maketitle` 대신 `\begin{titlepage}...\end{titlepage}`를 사용하면 해당 번호가 표시되지 않고 다음 페이지가 1부터 시작됩니다.

## 스타일 및 번호 매기기 시스템

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

이 두 쌍의 명령은 서로 다른 것을 제어하며, 이를 혼합하는 것은 고전적인 실수입니다. `\pagestyle{...}`은 숫자가 나타나는 위치와 그 주변의 내용을 제어합니다. `plain`은 중앙에 있는 바닥글 번호를 제공하고 `empty`는 해당 지점부터 모든 페이지의 머리글과 바닥글을 제거합니다. 숫자가 어떻게 생겼는지에 대해서는 아무 말도하지 않습니다.

`\pagenumbering{...}`은 숫자가 기록되는 방식을 제어합니다. `roman`은 i, ii, iii을 생성하고 `arabic`은 1, 2, 3을 생성합니다. I, II, III에 대한 `Roman`과 a, b, c에 대한 `alph`도 있지만 거의 필요하지 않습니다. `\pagenumbering`은 또한 페이지 카운터를 1로 재설정합니다. 이러한 재설정은 버그가 아닌 기능입니다. 이는 논문의 서문 번호를 vi에서 i로 지정하고 1페이지에서 1장을 시작하도록 하는 것입니다.

모서리에 있는 숫자나 실행 중인 제목과 같은 배치에 대한 완전한 제어를 원하는 경우 이는 내장된 기능이 아닌 fancyhdr 패키지의 작업입니다. [머리와 발 달리기](/learn/headers-footers/)를 참조하세요.

## 흔히 저지르는 실수

``thispagestyle{empty}`를 의미했을 때 ``pagestyle{empty}`를 쓰면 전체 문서에서 숫자가 자동으로 제거되므로 검토자가 페이지에 번호가 없는 이유를 물어보기 전까지는 알 수 없습니다. 규칙을 기억하세요: `\thispagestyle`은 한 페이지 예외이고, `\pagestyle`은 문서 전체 스위치입니다.

논문 머리말: [로마자/아랍어 가이드](/learn/front-matter-page-numbers/).