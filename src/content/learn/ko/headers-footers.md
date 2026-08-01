---

title: "달리는 머리와 발"
description: "제목과 페이지 번호에 대한 fancyhdr 패턴."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 달리는 머리와 발

달리는 머리는 각 페이지 상단에 있는 텍스트 조각이고, 달리는 발은 하단에 있는 텍스트입니다. 책이나 논문에는 일반적으로 장 제목과 페이지 번호가 표시됩니다. 제출된 논문에는 제목, 저자의 짧은 버전이 표시되거나 전혀 표시되지 않을 수 있습니다. LaTeX에 내장된 페이지 스타일(`plain`, `empty`, `headings`)은 기본 사항을 다루지만 왼쪽의 제목과 오른쪽의 페이지 번호와 같은 특정 조합을 원하는 순간에는 `fancyhdr` 패키지를 사용하게 됩니다.

## 표준 레시피

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

여기의 각 줄은 하나의 작업을 수행합니다. `\usepackage{fancyhdr}`는 프리앰블의 패키지를 로드합니다. `\pagestyle{fancy}`는 전체 문서를 fancyhdr의 구성 가능한 스타일로 전환합니다. `\fancyhf{}`는 모든 머리글과 바닥글 필드를 지웁니다. 이는 fancyhdr이 자신의 것과 거의 혼합하고 싶지 않은 기본값(페이지 번호 및 섹션 표시)을 제공하기 때문에 중요합니다. 깨끗한 상태에서 시작하면 놀라움이 사라집니다.

다음 두 줄은 필드를 다시 채웁니다. `\fancyhead[L]{Short title}`은 헤더의 왼쪽 슬롯에 문자 그대로의 텍스트를 넣고, `\fancyhead[R]{\thepage}`는 오른쪽 슬롯에 현재 페이지 번호를 넣습니다. `\thepage`는 페이지 번호로 확장하는 명령이므로 모든 페이지에서 자동으로 업데이트됩니다. 맨 아래에 항목을 넣으려면 일치하는 ``\fancyfoot[L/C/R]{...}`가 있습니다.

마지막으로 `\headrulewidth`는 헤더 아래 얇은 수평선을 제어합니다. '0.4pt'로 설정하면 헤어라인이 그려집니다. 규칙을 완전히 제거하려면 '0pt'로 설정하세요. `\footrulewidth`도 존재하며 기본값은 0입니다.

## 양면 문서

문서 클래스가 `twoside`(`book`의 기본값)를 사용하는 경우 페이지는 짝수와 홀수로 번갈아 가며 헤더는 일반적으로 서로 미러링됩니다. fancyhdr은 이것을 짝수/홀수 선택기로 처리합니다: `\fancyhead[LE,RO]{\thepage}`는 페이지 번호를 짝수 페이지의 왼쪽과 홀수 페이지의 오른쪽에 배치합니다. 이 페이지는 독자의 엄지 손가락으로 찾을 수 있는 위치입니다. 이를 현재 장과 섹션 제목을 보유하는 `\leftmark` 및 `\rightmark`와 결합하여 고전적인 책 레이아웃을 재현할 수 있습니다.

## 챕터 페이지와 공허한 모습

장 시작 페이지는 `\chapter`가 뒤에서 `\thispagestyle{plain}`을 호출하기 때문에 멋진 스타일을 무시합니다. 이는 의도적인 것이며 대부분의 디자인은 이를 유지합니다. 해당 페이지를 그대로 표시하려면 `\fancypagestyle{plain}{\fancyhf{}}`를 추가하여 `plain`의 의미를 재정의하세요.

예상할 수 있는 일반적인 경고 중 하나: fancyhdr은 `\headheight`가 너무 작다고 불평할 수 있습니다. 예를 들어 서문의 `\setlength{\headheight}{14pt}` 또는 이미 사용하고 있는 경우 `headheight=14pt`를 [기하학 패키지](/learn/margins-geometry/)에 전달하는 등 메시지에서 제안하는 대로 수정됩니다. 이는 오류가 아닌 레이아웃 예약이지만 이를 침묵시키면 로그가 깨끗하게 유지되고 기준선 그리드가 정직하게 유지됩니다.